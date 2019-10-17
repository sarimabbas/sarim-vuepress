<template>
  <button>
    <a
      class="unset"
      :href="href"
      :target="external ? '_blank' : false"
      :rel="external ? 'noopener noreferrer' : false"
    >
      <slot></slot>
    </a>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["href", "text", "external"]
};
</script>

<style>
</style>