<template>
  <div>
    <br />
    <a href="/">
      <picture>
        <source srcset="/logo/white.png" media="(prefers-color-scheme: dark)" />
        <img src="/logo/black.png" width="50px" />
      </picture>
    </a>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style scoped>
</style>