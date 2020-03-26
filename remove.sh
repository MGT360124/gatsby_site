#!/bin/bash
echo "Hello World !"
echo "当前目录"
pwd

cp -rf public/*  ../site

# 部署到github上
# cd  ../site
# git add .
# git commit -m "deploy test"
# git push