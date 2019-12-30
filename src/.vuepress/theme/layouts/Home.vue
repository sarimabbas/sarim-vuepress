<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/logo/Logo.vue";
import Icon from "../components/icon/Icon.vue";
import ContentGrid from "../components/content-grid/ContentGrid";
import VueVanta from "../components/Vanta";

export default {
  name: "home",
  components: {
    Wrapper,
    Logo,
    Icon,
    ContentGrid,
    VueVanta
  },
  data() {
    return { isMobile: navigator.maxTouchPoints > 0 };
  }
};
</script>

<template>
  <Wrapper width="90%" id="hello">
    <p style="text-align: center">
      <Logo />
    </p>

    <VueVanta v-if="!isMobile"></VueVanta>

    <!-- header text -->
    <h1 style="text-align: center">Sarim Abbas</h1>
    <p style="text-align: center">
      Computer Science major at Yale.
      <br />Religious consumer of Hacker News. <br />Interested in engineering,
      design and cognition.
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
        type="fab"
        name="fa-github"
        href="https://github.com/sarimabbas/"
        size="fa-lg"
      />
      <Icon
        type="fab"
        name="fa-linkedin"
        href="https://www.linkedin.com/in/sarimabbas/"
        size="fa-lg"
      />
      <Icon type="fas" name="fa-rss" href="/rss.xml" size="fa-lg" />
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
