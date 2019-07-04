---
title: "Cypress and Concourse"
date: 2019-07-04T10:45:12-04:00
draft: false
---

## Concourse Task File

Create an e2e task in your Concourse job

e.g. `e2e.yml`

{{<highlight yaml>}}
---
platform: linux
image_resource:
    type: docker-image
    source:
        repository: ddubson/cypress-e2e
inputs:
    - my-cypress-repo
run:
    path: my-cypress-repo/ci/e2e.sh
{{</highlight>}}

**Note**: make sure you have an input that has the cypress enabled front-end repository

**Note**: Use `ddubson/cypress-e2e` docker image from Docker Hub. The image is based on `cypress/base` image which is official

## Concourse task script

To run cypress in a Concourse task, make sure to run it like so: `${npm bin}/cypress run`
    
e.g. `e2e.sh`

{{<highlight bash>}}
#!/bin/bash

cd my-cypress-repo/
${npm bin}/cypress run
{{</highlight>}}

**Note**: `npm bin` is required since the image contains a local install of Cypress which should be referenced from the install dir.
