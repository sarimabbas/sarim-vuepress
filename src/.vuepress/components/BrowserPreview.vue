<template>
  <div class="browser-mockup">
    <div class="browser-tab-bar">
      <ul class="window-controls">
        <li class="window-control window-control-red"></li>
        <li class="window-control window-control-orange"></li>
        <li class="window-control window-control-green"></li>
      </ul>
    </div>
    <div class="browser-window">
      <img :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowserPreview",
  props: ["src"]
};
</script>

<style scoped>
.browser-mockup .browser-tab-bar {
  height: 25px;
  line-height: 20px;
  background-color: #eeeeee;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.browser-mockup .window-controls {
  list-style: none;
  padding: 0;
  margin: 0px 10px;
  padding: 5px 0px;
}
.browser-mockup .window-control {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 3px;
  box-sizing: border-box;
}
.browser-mockup .window-control:last-child {
  margin-right: 0;
}
.browser-mockup .window-control.window-control-red {
  background-color: #ee5c55;
  border: 1px solid #e93027;
}
.browser-mockup .window-control.window-control-orange {
  background-color: #f8bc32;
  border: 1px solid #efa908;
}
.browser-mockup .window-control.window-control-green {
  background-color: #62cb43;
  border: 1px solid #4cac2f;
}
.browser-mockup .browser-window {
  border: 1px solid #d7d7d7;
  line-height: 0;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.browser-mockup .browser-window img {
  max-width: 100%;
}
</style>