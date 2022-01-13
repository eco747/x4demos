#!/bin/bash
git submodule add -b main https://github.com/eco747/x4.git
mkdir dist -p
cp ./assets/index.html ./dist
cp -r ./assets/css ./dist
cp ./assets/css/favicon.ico ./dist