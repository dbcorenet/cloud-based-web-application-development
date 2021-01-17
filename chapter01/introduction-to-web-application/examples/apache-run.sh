#!/bin/bash

docker run --name my-apache -p 8080:80 -v $PWD:/usr/local/apache2/htdocs/ -d httpd