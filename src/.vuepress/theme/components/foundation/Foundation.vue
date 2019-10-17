<script>
export default {
  name: "foundation"
};
</script>

<template>
  <div class="foundation">
    <slot></slot>
  </div>
</template>


<style>
/* a sort of reset: https://github.com/mozdevs/cssremedy  */
@import "./remedy.css";

/* other global fixes */
@import "./other.css";

/* typography */
@import "./typography.css";

/* colors */
@import "./colors.css";

/* buttons */
@import "./buttons.css";

/* icons */
@import "~@fortawesome/fontawesome-free/css/all.css";

/* syntax highlighting */
@import "~prismjs/themes/prism-tomorrow.css";
</style>

