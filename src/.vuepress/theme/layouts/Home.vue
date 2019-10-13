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
    <h1 class="mb-zero">Sarim Abbas</h1>
    <br />
    <p>I'm a Computer Science student at Yale University. My interests span software engineering, design, neuroscience and entrepreneurship. In my free time, I love to read about and experiment with new technologies.</p>

    <nav>
      <ul class="no-list">
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/interesting">Interesting</a>
        </li>
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