---
title: "Useful Parcel"
date: 2019-07-04T10:51:33-04:00
draft: false
---

## Dotenv and Caching

When building with `.env` files for distinct environments, the default cache setting will not let you 
insert environment variables dynamically. Caching gets in the way and the ES5 minified bundle does not get regenerated.

To solve the issue, add a distinct cache directory when building bundles based on environment.

e.g.

{{<highlight bash>}}
NODE_ENV=dev  parcel build [entry-point] --cache-dir=.cache/dev
NODE_ENV=uat  parcel build [entry-point] --cache-dir=.cache/uat
NODE_ENV=prod parcel build [entry-point] --cache-dir=.cache/prod
{{</highlight>}}
