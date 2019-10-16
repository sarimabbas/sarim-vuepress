<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/Logo.vue";
export default {
  name: "home",
  components: {
    Wrapper,
    Logo
  }
};
</script>

<template>
  <Wrapper>
    <Logo />
    <Content />
  </Wrapper>
</template>


<style>
</style>