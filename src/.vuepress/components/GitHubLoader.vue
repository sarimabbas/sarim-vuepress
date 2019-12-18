<script>
export default {
  props: ["url"],
  data() {
    return {
      htmlContent: ""
    };
  },
  mounted: function() {
    this.loadHTML(this.url);
  },
  methods: {
    async loadHTML(url) {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${url}`
        );
        const text = await response.text();
        const parser = new DOMParser();
        const doc = await parser.parseFromString(text, "text/html");
        const article = await doc.querySelector("article");
        // remove all the other stuff
        const toRemove = await article.querySelectorAll("svg");
        await toRemove.forEach(elem => elem.remove());
        this.htmlContent = await article.innerHTML;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<template><div style="all:unset" v-html="htmlContent"></div></template>

<style></style>
