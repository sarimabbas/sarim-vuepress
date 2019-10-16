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
    <h1>Sarim Abbas</h1>
    <p>
      Computer Science major at Yale.
      <!-- <br />Consumer of Hacker News. -->
      <br />Interested in engineering, design and cognition.
    </p>

    <nav>
      <ul class="no-list">
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>

    <section class="social">
      <Icon name="fa-github" href="https://github.com/sarimabbas/" size="fa-lg" />
      <Icon name="fa-linkedin" href="https://www.linkedin.com/in/sarimabbas/" size="fa-lg" />
    </section>
  </Wrapper>
</template>



<style scoped>
.social {
  display: flex;
}
.social > * {
  margin-right: 15px;
}
</style>