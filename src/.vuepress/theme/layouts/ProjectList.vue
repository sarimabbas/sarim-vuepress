<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/Logo.vue";
import { DateTime } from "luxon";
export default {
  name: "projectlist",
  components: {
    Wrapper,
    Logo
  },
  data() {
    return {
      projects: []
    };
  },
  mounted: function() {
    // get posts
    let filtered = this.$site.pages.filter(
      p => p.frontmatter.type === "project"
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
        ...p,
        frontmatter: {
          ...p.frontmatter,
          date: DateTime.fromISO(p.frontmatter.date).toFormat("LLL yyyy")
        }
      };
    });
    // set final
    this.projects = filtered;
  }
};
</script>

<template>
  <Wrapper>
    <Logo />
    <h2>Projects</h2>
    <ul>
      <li v-for="p in projects">
        <a :href="p.path">{{ p.title }}</a>
      </li>
    </ul>
    <Content />
  </Wrapper>
</template>


<style>
</style>