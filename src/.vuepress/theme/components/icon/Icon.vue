<template>
  <a :href="href" class="regular">
    <i :class="['fab', name, size, 'regular']"></i>
  </a>
</template>

<script>
export default {
  name: "icon",
  props: ["href", "name", "size"]
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

/* .regular:hover {
  filter: brightness(1.3);
} */

.regular:hover {
  filter: brightness(1);
}

/* @media (prefers-color-scheme: dark) {
  .regular {
    color: white;
  }

  .regular:hover {
    filter: brightness(1);
  }
} */
</style>
