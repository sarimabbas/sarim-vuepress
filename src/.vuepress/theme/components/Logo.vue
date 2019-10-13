<template>
  <a href="/">
    <picture>
      <source srcset="/white.png" media="(prefers-color-scheme: dark)" />
      <img src="/black.png" width="50px" />
    </picture>
  </a>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
</style>