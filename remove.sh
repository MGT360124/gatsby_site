#!/bin/bash
echo "清除site文件"
echo "当前目录"
pwd

cd ../site
shopt -s extglob 
rm -rf !(.git|_config.yml)
cd ../gatsby-site
cp -rf public/*  ../site

# 部署到github上
# cd  ../site
# git add .
# git commit -m "deploy test"
# git push