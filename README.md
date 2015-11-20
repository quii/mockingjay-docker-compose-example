# Mockingjay docker compose example

Runs a node.js web server, connected to a fake server by using docker-compose and mockingjay

    docker-compose up

## Updating the images

If you need to change node_modules you will need to run `docker-compose build` to download them