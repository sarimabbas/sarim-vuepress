<script>
import Card from "../card/Card";
import { DateTime } from "luxon";
const uuidv4 = require("uuid/v4");
export default {
  components: {
    Card
  },
  data() {
    return {
      content: [],
      filterProperties: ["project"]
    };
  },
  mounted: function() {
    // get posts and projects
    let filtered = this.$site.pages.filter(
      p => p.frontmatter.type === "project" || p.frontmatter.type === "post"
    );
    // filter those which are published
    filtered = filtered.filter(p => p.frontmatter.published);
    // sort by date
    filtered.sort((a, b) => {
      if (a.frontmatter.date < b.frontmatter.date) {
        return 1;
      } else {
        return -1;
      }
    });
    // convert dates to better format
    filtered = filtered.map(p => {
      return {
        //   add uuid
        ...p,
        uuid: uuidv4(),
        shown: false,
        frontmatter: {
          ...p.frontmatter,
          date: DateTime.fromISO(p.frontmatter.date).toFormat("LLL yyyy")
        }
      };
    });
    // set final
    this.content = filtered;
    // decide what to show
    this.applyFiltersToContent();
  },
  methods: {
    toggleFilter(property) {
      // clear everything else if "all" is set
      if (property == "all") {
        this.filterProperties = [];
        this.filterProperties.push("all");
      } else {
        // for other stuff, remove "all"
        this.filterProperties = this.filterProperties.filter(p => p !== "all");
        // if the property is already included
        if (this.filterProperties.includes(property)) {
          // remove the property only if the resulting array will be non empty
          if (this.filterProperties.length > 1) {
            // remove the property
            this.filterProperties = this.filterProperties.filter(
              p => p !== property
            );
          }
        } else {
          // add the property if not already included
          this.filterProperties.push(property);
        }
      }
      this.applyFiltersToContent();
    },
    applyFiltersToContent() {
      if (this.filterProperties.includes("all")) {
        this.content.forEach(p => {
          p.shown = true;
        });
      } else {
        this.content.forEach(p => {
          p.shown = this.filterProperties.includes(p.frontmatter.type);
        });
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="controls">
      <a
        @click="toggleFilter('all')"
        :class="[
          'control-option',
          { 'control-option-active': filterProperties.includes('all') }
        ]"
        >All</a
      >
      <!-- <a href class="control-option">Work</a> -->
      <a
        @click="toggleFilter('project')"
        :class="[
          'control-option',
          { 'control-option-active': filterProperties.includes('project') }
        ]"
        >Projects</a
      >
      <a
        @click="toggleFilter('post')"
        :class="[
          'control-option',
          { 'control-option-active': filterProperties.includes('post') }
        ]"
        >Posts</a
      >
    </div>
    <br />
    <div class="grid">
      <Card
        class="list-complete-item"
        v-for="(item, index) in content"
        v-if="item.shown"
        :key="item.uuid"
        :href="item.path"
        :headtext="item.frontmatter.title"
        :subtext="item.frontmatter.description"
        :image="item.frontmatter.previewImage"
      />
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.control-option {
  all: unset;
  color: white !important;
  margin-left: 5px;
  margin-right: 5px;
  background-color: gray;
  border-radius: 3px;
  padding: 5px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.control-option-active {
  background-image: linear-gradient(to right, #ff69b4, #ff9280);
}

.control-option:hover {
  filter: brightness(1.2);
  cursor: pointer;
}

.grid {
  --auto-grid-min-size: 19rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 2rem;
  grid-auto-rows: 14rem;
}
</style>
