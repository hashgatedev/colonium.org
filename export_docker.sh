#!/bin/bash
echo "building images..."
docker compose build
echo "exporting Website image..."
docker save coloniume/website | gzip > ../website.tar.gz
echo "exporting API image..."
docker save coloniume/website_api | gzip > ../website_api.tar.gz