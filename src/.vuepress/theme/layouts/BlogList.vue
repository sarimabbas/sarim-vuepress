<script>
import Wrapper from "../components/Wrapper.vue";
import Logo from "../components/Logo.vue";
import { DateTime } from "luxon";
export default {
  name: "bloglist",
  components: {
    Wrapper,
    Logo
  },
  data() {
    return {
      posts: []
    };
  },
  mounted: function() {
    // get posts
    let filtered = this.$site.pages.filter(p => p.frontmatter.type === "post");
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
    this.posts = filtered;
  }
};
</script>

<template>
  <Wrapper>
    <Logo />
    <h2>Blog</h2>
    <ul>
      <li v-for="p in posts">
        <span style="font-family: monospace">{{ p.frontmatter.date }}</span> -
        <a :href="p.path">{{ p.title }}</a>
      </li>
    </ul>
    <Content />
  </Wrapper>
</template>


<style>
</style>