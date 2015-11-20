# Mockingjay docker compose example

Runs a node.js web server, connected to a fake server by using docker-compose and mockingjay.

## Story

- You want to create a service that calls a database and perhaps a RESTful API.
- You wont want to connect to external systems to keep your local builds reliable
- You don't want to have to install loads of rubbish
- You want to run one command to get the build autoreloading and be done with it

Docker compose facilitates this kind of development, by letting you launch a number of connected containers built from docker images.

[mockingjay](https://github.com/quii/mockingjay-server) is used as a fake server. You should [read here why that's a good idea](https://github.com/quii/mockingjay-server/wiki/Rationale) but in short it can make sure your fake server accurately represents the real API you're calling

Reading the docker-compose.yaml will give you an idea of what's going on

    docker-compose up

## Updating the images

If you need to change node_modules you will need to run `docker-compose build` to download them