<script>
import Wrapper from "../components/Wrapper.vue";
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
    <br />
    <h1 class="mb-zero">Sarim Abbas</h1>
    <br />

    <p>
      Computer Science major at Yale.
      <!-- <br />Consumer of Hacker News. -->
      <br />Interested in engineering, design and cognition.
    </p>

    <nav class="fs-large">
      <ul class="no-list">
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <!-- <li>
          <a href="/interesting">Interesting</a>
        </li>-->
      </ul>
    </nav>

    <br />
    <br />

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