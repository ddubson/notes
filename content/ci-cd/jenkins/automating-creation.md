---
title: "Automate an existing deploy"
date: 2019-07-04T09:38:35-04:00
draft: false
---

### Get all plugins that you need first

{{<highlight bash>}}
export JENKINS_HOST=username:password@myhost.com:port
curl -sSL "http://$JENKINS_HOST/pluginManager/api/xml?depth=1&xpath=/*/*/shortName|/*/*/version&wrapper=plugins" | perl -pe 's/.*?<shortName>([\w-]+).*?<version>([^<]+)()(<\/\w+>)+/\1 \2\n/g'|sed 's/ /:/' > plugins.txt
{{</highlight>}}

`plugins.txt` will now have all the plugins of the current installation

### Create Dockerfile

{{<highlight Dockerfile>}}
FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y ruby curl
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false \
    -Djava.awt.headless=true \
    -Dhudson.model.ParametersAction.keepUndefinedParameters=true
USER jenkins
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt
{{</highlight>}}

### Build the image

`docker build . -t my-jenkins`

### Run the newly created image

`docker run -d -p 49002:8080 -v ~/jenkins_home:/var/jenkins_home -t my-jenkins`

Inspect the loading process: `docker logs -f [container-id]`
