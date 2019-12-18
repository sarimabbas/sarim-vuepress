<template>
  <Foundation>
    <div class="wrapper" :style="{ 'max-width': maxWidth }">
      <slot></slot>
    </div>
  </Foundation>
</template>

<script>
import Foundation from "../foundation/Foundation.vue";
export default {
  props: ["width"],
  data() {
    return {
      maxWidth: this.width || "1000px"
    };
  },
  name: "wrapper",
  components: {
    Foundation
  }
};
</script>

<style scoped>
/* from https://css-tricks.com/best-way-implement-wrapper-css/ */
.wrapper {
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  /* max-width: 750px;  */
  /* max-width: 90%; */

  /* padding-right: 10px;
  padding-left: 10px;  */
  padding: 10px;
}
</style>
