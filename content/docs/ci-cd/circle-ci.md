---
title: "CircleCI Deploys"
weight: 1
type: docs
---

# CircleCI Deploys

## Creating a simple test and build pipeline

In project root, create a folder `.circleci` and place `config.yml` within it.

> Below example, includes CloudFoundry manifest file. Remove if necessary.

> Below example is an example .NET config. Replace with your stack as necessary.

In `config.yml`, place the following jobs and workflow:

{{<highlight yaml>}}
version: 2
jobs:
  test:
    docker:
      - image: 'microsoft/dotnet:2.2-sdk'
        environment:
          DEBIAN_FRONTEND: "noninteractive"
    steps:
      - checkout
      - run:
          name: test
          command: dotnet test
  build:
    docker:
      - image: 'microsoft/dotnet:2.2-sdk'
        environment:
          DEBIAN_FRONTEND: "noninteractive"
    steps:
      - checkout
      - run:
          name: build
          command: |
            build_output="/tmp/build-output"
            artifacts_path="./artifacts"
            version=$CIRCLE_SHA1
            mkdir -p $build_output
            mkdir -p $artifacts_path
            cp manifest.yml $build_output
            dotnet publish src/MyApp --configuration Release \
                --output $build_output/src/MyApp/bin/Release/netcoreapp2.2/publish
            tar -C $build_output/ -cvzf $artifacts_path/myapp-$version.tgz .
      - store_artifacts:
          path: artifacts
      - persist_to_workspace:
          root: artifacts
          paths:
            - myapp-*.tgz

workflows:
  version: 2
  deployment-pipeline:
    jobs:
      - test
      - build:
          requires:
            - tests
{{</highlight>}}

[Example build pipeline](https://github.com/ddubson/pal-tracker-dotnet/blob/master/.circleci/config.yml)

---

## Deploying to CloudFoundry

In `config.yml`, add the following steps:

{{<highlight yaml>}}
...
jobs:
    deploy-to-pcf:
        docker:
        - image: 'microsoft/dotnet:2.2-sdk'
            environment:
            DEBIAN_FRONTEND: "noninteractive"
            EXTRACT_DEST: /tmp/extracted-archive
        steps:
        - attach_workspace:
            at: artifacts
        - run:
            name: Install CF CLI
            command: |
                apt-get update
                apt-get -y install apt-transport-https ca-certificates
                wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | apt-key add -
                echo "deb https://packages.cloudfoundry.org/debian stable main" | tee /etc/apt/sources.list.d/cloudfoundry-cli.list
                apt-get update
                apt-get install cf-cli
        - run:
            name: Unzip artifacts
            command: |
                mkdir -p $EXTRACT_DEST
                tar -xvzf artifacts/myapp-$CIRCLE_SHA1.tgz -C $EXTRACT_DEST
        - run:
            name: Deploy
            command: |
                cd $EXTRACT_DEST
                cf login -a $CF_API -u $CF_USERNAME -p $CF_PASSWORD -o $CF_ORG -s $CF_SPACE
                cf push -f manifest.yml
...
workflows:
  version: 2
  deployment-pipeline:
    jobs:
      ...
      - deploy-to-pcf:
          requires:
            - [previous-steps]
{{</highlight>}}