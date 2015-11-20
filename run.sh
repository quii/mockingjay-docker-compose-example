#!/bin/bash

docker run -p 49160:8080 -d quii/mockingjay-docker-compose-example

curl $(docker-machine ip default):49160
