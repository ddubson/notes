---
title: "Example Dockerfiles"
date: 2019-07-04T10:31:49-04:00
draft: false
---

### Java application on Ubuntu 16

{{<highlight Dockerfile>}}
FROM ubuntu:16.04
MAINTAINER John Doe <author@email.com>

# Set environment variables
ENV version 0.1-alpha
ENV appname MyAwesomeApp
ENV runcmd java -jar /opt/${appname}-${version}.jar

# Install JDK8
RUN apt-get update && apt-get install -y openjdk-8-jre

# Copy the binary to /opt directory
COPY build/libs/${appname}-${version}.jar /opt/

# Open port 8080 for embedded Tomcat container
EXPOSE 8080

# Create the launch script
RUN echo ${runcmd} > /opt/launch.sh && chmod +x /opt/launch.sh

# Set launch script to fire off when docker launches container
ENTRYPOINT /opt/launch.sh
{{</highlight>}}

### Example 2

{{<highlight Dockerfile>}}
FROM centos:centos6                                             // inherit from base image, local images have priority over remote images when building from an image.
MAINTAINER <First Last>
RUN yum -y update; yum clean all
RUN yum -y install httpd
RUN echo "Apache test site" >> /var/www/html/index.html
EXPOSE 80                                                       // making port 80 available publicly
RUN echo "/sbin/service httpd start" >> /root/.bashrc
{{</highlight>}}

### Building an image from a Dockerfile

#### Build the image

{{<highlight bash>}}
docker build -t ddubson:centos6 .
$> docker build —file Dockerfile —tag mycustomimg/withservices:v1
{{</highlight>}}
