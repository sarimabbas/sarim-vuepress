---
type: post
date: 2019-10-13
published: true
---

# Change image for dark mode with a media query

This website's logo flips between light and dark based on the recent `prefers-color-scheme` CSS property. To do something similar:

```html
<picture>
    <source srcset="/white.png" media="(prefers-color-scheme: dark)" />
    <img src="/black.png" width="50px" />
</picture>
```

That's it!