---
title: "Docker"
date: 2019-07-12T08:51:10-04:00
draft: false
---

# Docker![Docker1](/img/docker-1.png)

Docker builds are isolated with respect to 8 aspects:

- PID namespace - process identifiers and capabilities
- UTS namespace - host and domain name
- MNT namespace - file system access and structure
- IPC namespace - process communication over shared memory
- NET namespace - network access and structure
- USR namespace - user names and identifiers
- chroot\(\) - controls the location of the filesystem root
- cgroups - resource protection

![Docker2](/img/docker-2.png)

{{<highlight bash>}}
# List all docker images
docker images

# List all running containers
docker ps

# last run container
docker ps -l 

# Run container (with examples)
docker run [image:tag] /bin/echo 'Hello from your Docker container'
docker run -d ubuntu:latest /bin/bash -c "while true; do echo DOCKERMAN; sleep 1; done"
docker run -t -i [image:tag] /bin/bash
docker run -d -p 8080:80 tutum/apache-php

# Stop container execution
docker stop [containerid]

# View container logs
docker logs [containerid]

# Commit container to an image
docker commit [idofcontainer] [nameofnewimage]

# Remove an image
docker rmi [image-id]

# Remove container
docker rm [container-id]
{{</highlight>}}

### Flags

`-d` - run container as daemon.

`-t` - TTY mode

`-i` - docker image

`-p` - port

## Snapshots

changes in an image are not saved automatically, so you would have to commit the changes to a new or 
an existing image via `docker commit` command

## Attach to a running container

{{<highlight bash>}}
docker run -t -i centos6:withapache /bin/bash
service httpd start
curl http://localhost:80
docker inspect [given-name-of-instance] | grep IPAddress | cut -d ":" -f2 | cut -d "\" -f2 = 1.2.3.4
docker attach [given-name]  //gives us the command prompt inside the container, already running instance
docker run centos6:withapache
docker ps
{{</highlight>}}

Nothing runs because the image does not have any bootup process by itself, starts/stops

The `-d` command runs the image as daemon

## Removing images

if there are dependent images, you cannot remove the parent image, it will orphan the dependent images

## Directory Structure

- /var/lib/docker

`cat repositories-devicemapper | python -mjson.tool`

reference file for repositories/images that exist

containers directory - containers that have yet to be committed and have dependencies on parent images

for any image in containers directory - `cat config.json | python -mjson.tool`

## Startup services

- If you need to start a linux service like httpd on start, you have to add it to a bash startup script
- Edit .bashrc: `/sbin/service httpd start`
- After editing the file, the container needs to be committed

{{<highlight bash>}}
docker commit [container-instance] [container-name-new]
docker run -i -t -d centos:apacherunning /bin/bash
{{</highlight>}}

#### Pushing Images to Docker Hub

hub.docker.com

free account \(1 private repo only\)

`docker push [image-name]`

#### Adding External Content

To add content to a container, start an instance of an image then move files using SCP

In the Dockerfile, we can use the `ADD` command:

{{<highlight Dockerfile>}}
FROM redhat:centos6
MAINTAINTER Dmitriy Dubson <ddubson@example.com>

ADD testfile.html /var/www/html/testfile.html
{{</highlight>}}

### Image Volume Management

Create a volume for any running container:

`docker run -i -t -v /myapp test:html /bin/bash`

`-v` = volume

We can create an empty directory on the local filesystem and mount that volume to the docker container

{{<highlight bash>}}
docker run -t -i -v /root/myvolume:/var/volume test:html /bin/bash
{{</highlight>}}

where `myvolume` is a folder on the local system

{{<highlight bash>}}
docker run -v /Users/<path>:/<container-path> ...
{{</highlight>}}

### Advanced Network Management

```
• configuring a bridge adapter

    ○ ip link add r10 type bridge

    ○ ip addr add 10.10.100.1/24 dev br10- class C range \(10.10.100\)

    ○ ip link set br10 up

• configure docker to bridge:

    ○ docker.io -d -b br10 &

• run the image

    ○ docker run -t -i centos:centos6 /bin/bash
```

/etc/rc.local

```
auto lo
iface lo inet loopback

auto br0
iface br10 inet static
    address 10.10.100.1
    netmask 255.255.255.0
    bridge_ports dummy0
    bridge_stp off
    bridge_fd 0
```

Labs:

[https://gist.github.com/ddubson/2217565de88de6d708d8](https://gist.github.com/ddubson/2217565de88de6d708d8)

Interactive Shell Control

```
• docker run -t -i —name MYCONTAINER &lt; = name a container when running

• docker exec -t -i MYCONTAINER /usr/bin/top &lt;= attaching to a process in a container
```

#### Previous Container Management

```
• docker ps -a =&gt; history of all containers that ever ran

• Docker ps -a \| wc -l \(count number of lines, number of containers that are stopped\)
```

Docker ps -a \| grep '7 days ago' \| awk '{print $1}' \| xargs docker rm - delete everything that is 7 days ago

#### Container Routing

```
• Set a static route
```

Route add -net \[ip\] netmask 255.255.255.0 gw \[gatewayip\]

#### Sharing Container Resources

```
> docker run -d -i -t -v /data --name DATA1 ubuntu:latest /bin/bash
> docker run -d -i -t --volumes-from DATA1 --name DATA2 ubuntu:latest /bin/bash
```

#### Committing a running container

```
• Run an image: docker run -t -i ubuntu:latest /bin/bash

• Once in terminal, update apt-get and then install the cmd "htop"

• In another terminal, do docker ps and see what the container name is

• Via container name, run "docker commit \[name\] \[new-image-name\]"

• Run the new image: "docker run -t -i ubuntu:htop /bin/bash"
```

Check if cmd is there.

Useful Docker CLI Commands

```
• docker cp

    ○ Copy files from a container

    ○ e.g. docker cp \[name-of-container\]:/etc/yum.conf tmp

• docker diff

    ○ View all the changes of the container since it was started.

    ○ e.g. docker diff \[name-of-container\]

• docker events

    ○ A realtime view of events that Docker captures \(e.g. start/stop a container\)

    ○ e.g. docker events

    ○ e.g. docker events --since '2014-12-05'

• docker history

    ○ History of an image

    ○ e.g. docker history centos:latest

• docker exec

    ○ Send remote commands to a container

    ○ Docker exec -I -t MyTestContainer1 /usr/bin/yum -y update

• docker info

    ○ information about running containers

    ○ e.g. docker -D info

• docker kill

    ○ kill a container immediately

    ○ sends kill -9

    ○ e.g. docker kill \[container-name\]

• docker save/export

    ○ docker \[export\|save\] OurWeb3 &gt; OurWeb.tar

    ○ builds base image from container into a tar file

• docker load/import

    ○ docker \[load\] &lt; OurWeb.tar

    ○ docker load -i OurWeb.tar

    ○ imports an external image

• docker pause/unpause

    ○ pause the container execution \(freeze it\)

    ○ unpause the container execution \(unfreeze execution\)

• docker top

    ○ top command into a container
```

#### Optimizing Dockerfile Builds

`docker images -t` \(can see all the layers of containers that were built by Dockerfile\)
