#!/bin/bash


docker run -d -p 9031:3000 backendtest
docker run -d -p 9032:80 frontendtest
docker run -d -p 9033:80 frontendtest
docker run -d -p 9000:9000 --privileged -v /var/run/docker.sock:/var/run/docker.sock dockerui/dockerui
docker run -d -p 22 -p 80:80 loadreverse/supervisord