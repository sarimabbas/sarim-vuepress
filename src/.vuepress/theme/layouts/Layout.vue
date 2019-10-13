<script>
import Wrapper from "../components/Wrapper.vue";
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
    <br />
    <br />
    <Content />
  </Wrapper>
</template>


<style>
</style>