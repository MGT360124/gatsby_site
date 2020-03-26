#!/bin/bash
echo "Hello World !"
echo "当前目录"
pwd

cd  ../site
git add .
git commit -m "deploy test"
git push