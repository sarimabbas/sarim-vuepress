<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/logo/Logo.vue";
import Icon from "../components/icon/Icon.vue";
import ContentGrid from "../components/content-grid/ContentGrid";

export default {
  name: "home",
  components: {
    Wrapper,
    Logo,
    Icon,
    ContentGrid
  }
};
</script>

<template>
  <Wrapper width="90%">
    <p style="text-align: center"><Logo /></p>

    <!-- header text -->
    <h1 style="text-align: center">Sarim Abbas</h1>
    <p style="text-align: center">
      Computer Science major at Yale.
      <!-- <br />Consumer of Hacker News. -->
      <br />Interested in engineering, design and cognition.
    </p>
    <!-- content cards -->
    <br />
    <br />
    <ContentGrid />
    <br />
    <br />
    <!-- social -->
    <section class="social">
      <Icon
        name="fa-github"
        href="https://github.com/sarimabbas/"
        size="fa-lg"
      />
      <Icon
        name="fa-linkedin"
        href="https://www.linkedin.com/in/sarimabbas/"
        size="fa-lg"
      />
    </section>
  </Wrapper>
</template>

<style scoped>
.links {
  margin-bottom: 40px;
}
.link {
  font-weight: 600;
  font-size: 1.17rem;
}
.social {
  display: flex;
}
.social > * {
  margin-right: 15px;
}
</style>
