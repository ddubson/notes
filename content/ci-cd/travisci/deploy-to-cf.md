---
title: "Deploy to CloudFoundry"
date: 2019-07-04T10:00:15-04:00
draft: false
---

## DPL (Deploy Tool for TravisCI)

### Options

- username: Cloud Foundry username.
- password: Cloud Foundry password.
- organization: Cloud Foundry target organization.
- api: Cloud Foundry api URL
- space: Cloud Foundry target space
- manifest: Path to manifest file. Optional.
- skip_ssl_validation: Skip ssl validation. Optional.

Examples:

<i class="fab fa-github"></i> [Example .travis.yml with CF deploy](https://github.com/ddubson/wild-monitor/blob/master/.travis.yml)

{{<highlight bash>}}
dpl --provider=cloudfoundry \
    --username=<username> \
    --password=<password> \
    --organization=<organization> \
    --api=<api> \
    --space=<space> \
    --skip-ssl-validation
{{</highlight>}}

---

`.travis.yml` blurb:

{{<highlight yaml>}}
deploy:
  provider: cloudfoundry
  api: [path to api]
  organization: my_org
  space: my_space
  manifest: .
  on:
    branch: master
  username:
    secure: {encrypted via travis encrypt}
  password:
    secure: {encrypted via travis encrypt}
{{</highlight>}}
