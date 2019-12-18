---
type: post
published: true
previewImage: /previews/urlshortener.png
title: URL shortener with Netlify
date: 2019-10-16
---

# A personal URL shortener with Netlify

At the root level of any Netlify project is the `_redirects` file, which can be used to create a personal URL shortener.

1. Start by creating a package with `npm init`
2. Add a `_redirects` file, and populate it with redirects as follows:

```
/my-link       https://en.wikipedia.org/wiki/Pterotopteryx_tshatkalica
/my-link-2     https://en.wikipedia.org/wiki/Platanthera_likiangensis

#fallback
/*             https://sarimabbas.com/
```

The last two lines designate the fall-back URL. The other lines are the redirects.

A short link might look like this: `<YOUR NETLIFY SUBDOMAIN>.com/my-link`.

Other things to try:

3. Set up continuous deployment from GitHub to Netlify so that your redirects are live on every commit
4. Optionally register a short custom domain name like `.page` or `.site`
