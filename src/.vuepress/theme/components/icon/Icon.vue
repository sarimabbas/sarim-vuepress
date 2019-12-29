<template>
  <a :href="href" class="regular">
    <i :class="[type, name, size, 'regular']"></i>
  </a>
</template>

<script>
export default {
  name: "icon",
  props: ["href", "name", "size", "type"]
};
</script>

<style scoped>
.regular {
  background: unset;
  background-clip: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  color: white;
}

.regular:hover {
  filter: brightness(1);
}
</style>
