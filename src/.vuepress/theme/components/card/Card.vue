<script>
const isImage = require("is-image");
export default {
  props: ["image", "headtext", "subtext", "href", "lazy"],
  methods: {
    isVideo: function(src) {
      return !isImage(src);
    }
  }
};
</script>

<template>
  <div class="card">
    <a :href="href" class="card-link" />
    <video v-if="isVideo(image)" :src="image" class="image" autoplay loop muted playsinline />
    <img v-else v-lazy="image" class="image" />
    <div class="text">
      <h4 class="headtext">{{ headtext }}</h4>
      <p class="subtext">{{ subtext }}</p>
    </div>
  </div>
</template>

<style scoped>
.card-link {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
}

.card {
  /* parent is relative for inner text */
  position: relative;

  /* border stuff */
  border-radius: 4px;

  /* shadow */
  box-shadow: #00000040 0 20px 50px;

  /* clickable */
  cursor: pointer;

  /* margin stuff */
  overflow: hidden;
  margin: 0;
  padding: 0;

  /* transition */
  transition: all 0.5s;
  /* Enable hardware acceleration to fix laggy transitions */
  transform: translateZ(0);
}

.card:hover {
  transition: all 0.2s;
  transform: scale(1.05);
}

.card::after {
  display: block;
  position: relative;

  /* background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0) 100%
  ); */

  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 32%,
    rgba(0, 0, 0, 0.2) 69%,
    rgba(0, 0, 0, 0) 100%
  );

  margin-top: -150px;
  height: 150px;
  width: 100%;
  content: "";
}

.text {
  position: absolute;
  bottom: -20px;
  left: 0px;
  padding: 10px;
  z-index: 10;
}

.headtext {
  margin: 0;
  padding: 0;
}

.subtext {
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
