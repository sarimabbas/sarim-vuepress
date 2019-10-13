<template>
  <a href="/">
    <img v-if="dark" src="/white.png" alt="logo" width="50" />
    <img v-else src="/black.png" alt="logo" width="50" />
  </a>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      dark: true
    };
  },
  created: function() {
    // if (matchMedia("(prefers-color-scheme: dark)").matches) {
    //   this.dark = true;
    // } else {
    //   this.dark = false;
    // }
  }
};
</script>

<style scoped>
.img {
  background-image: url("/white.png");
  width: 50px;
  height: 20px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>