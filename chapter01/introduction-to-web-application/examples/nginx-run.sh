#!/bin/bash

docker run --name my-nginx -p 8080:80 -v $PWD:/usr/share/nginx/html:ro -d nginx