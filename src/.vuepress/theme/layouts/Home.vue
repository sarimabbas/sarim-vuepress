<script>
import Wrapper from "../components/wrapper/Wrapper.vue";
import Logo from "../components/logo/Logo.vue";
import ContentGrid from "../components/content-grid/ContentGrid";
import VueVanta from "../components/Vanta";

export default {
  name: "home",
  components: {
    Wrapper,
    Logo,
    ContentGrid,
    VueVanta
  }
};
</script>

<template>
  <Wrapper width="90%" id="hello">
    <p style="text-align: center">
      <Logo />
    </p>

    <VueVanta></VueVanta>

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
      <a href="https://github.com/sarimabbas/"
        ><v-icon name="brands/github" scale="1.5" class="icon"
      /></a>
      <a href="https://www.linkedin.com/in/sarimabbas/"
        ><v-icon name="brands/linkedin" scale="1.5" class="icon"
      /></a>
      <a href="/rss.xml"><v-icon name="rss" class="icon" scale="1.5"/></a>
      <a href="/previews/sarim-abbas-resume.pdf"
        ><v-icon name="file-alt" scale="1.5" class="icon"
      /></a>
    </section>
    <br />
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
  justify-content: center;
}
.social > * {
  margin-left: 7px;
  margin-right: 7px;
}

.icon {
  color: white;
}

.icon:hover {
  filter: brightness(0.9);
}
</style>
