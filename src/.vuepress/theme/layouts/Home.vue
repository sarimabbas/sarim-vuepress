<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/Logo.vue";
import Icon from "../components/Icon.vue";

export default {
  name: "home",
  components: {
    Wrapper,
    Logo,
    Icon
  }
};
</script>

<template>
  <Wrapper>
    <Logo />
    <!-- header text -->
    <h1>Sarim Abbas</h1>
    <p>
      Computer Science major at Yale.
      <!-- <br />Consumer of Hacker News. -->
      <br />Interested in engineering, design and cognition.
    </p>
    <!-- links -->
    <nav class="links">
      <a href="/posts">
        <h3 class="m-zero">Posts</h3>
      </a>
      <br />
      <a href="/projects">
        <h3 class="m-zero">Projects</h3>
      </a>
    </nav>
    <!-- social -->
    <section class="social">
      <Icon name="fa-github" href="https://github.com/sarimabbas/" size="fa-lg" />
      <Icon name="fa-linkedin" href="https://www.linkedin.com/in/sarimabbas/" size="fa-lg" />
    </section>
  </Wrapper>
</template>



<style scoped>
.links {
  margin-bottom: 40px;
}
.social {
  display: flex;
}
.social > * {
  margin-right: 15px;
}
</style>