<script>
export default {
  name: "wrapper",
  components: {},
  mounted: function() {
    console.log(this.$site);
  }
};
</script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>


<style>
@import "~cutestrap/dist/css/cutestrap.css";
@import "~prismjs/themes/prism-tomorrow.css";
@import "~@fortawesome/fontawesome-free/css/all.css";

* {
  /* Sets our Baseline Grid */
  --rhythm: 1.6rem;

  /* Sets font-size relative to rhythm */
  --line-height-ratio: 1.2;
}

@media (max-width: 55rem) {
  * {
    --rhythm: 1.4rem;
  }
}

@media (min-width: 110rem) {
  * {
    --rhythm: 1.8rem;
  }
}

html {
  --font-family: "-apple-system", "Helvetica Neue", "Segoe UI", "Verdana",
    sans-serif;
  --font-mono: "SFMono-Regular", "Consolas", "Monaco", "Courier New", monospace;
  --font-heading: var(--font-family);
  --font-body: var(--font-family);
}

code {
  font-size: calc(var(--font-size) - (var(--font-size) * 0.25));
}

/* Theme Specific Styles */

@media (prefers-color-scheme: dark) {
  html {
    --color-primary-shade1: hsl(350, 80%, 60%);
    --color-primary: hsl(350, 80%, 45%);
    --color-primary-tint1: hsl(350, 80%, 35%);
    --color-accent-shade1: hsl(170, 80%, 60%);
    --color-accent: hsl(170, 80%, 45%);
    --color-accent-tint1: hsl(170, 80%, 35%);
    --color-link: hsl(230, 80%, 60%);
    --color-link-visited: hsl(290, 80%, 60%);
    --color-link-hover: hsl(230, 60%, 50%);
    --color-link-active: hsl(350, 60%, 50%);
    --color-neutral-shade4: hsl(170, 10%, 98%);
    --color-neutral-shade3: hsl(170, 10%, 94%);
    --color-neutral-shade2: hsl(170, 10%, 85%);
    --color-neutral-shade1: hsl(170, 10%, 68%);
    --color-neutral: hsl(170, 10%, 55%);
    --color-neutral-tint1: hsl(170, 10%, 41%);
    --color-neutral-tint2: hsl(170, 10%, 30%);
    --color-neutral-tint3: hsl(170, 10%, 18%);
    --color-neutral-tint4: hsl(170, 10%, 2%);
  }
}

a {
  background: linear-gradient(to right, #ff69b4, #ff9280);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  filter: brightness(0.8);
}

a:hover {
  filter: brightness(1);
}

.no-list {
  list-style: none;
  margin-left: 0;
}

li {
  word-wrap: break-word;
  line-break: loose;
  display: list-item;
}
</style>

