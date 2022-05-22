#!/bin/bash

docker build -t js-galaxy .
docker run -p 8080:8080 js-galaxy