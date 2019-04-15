#!/bin/bash

# A user github page builds directly from master
git checkout master
git merge dev
npm run build
git add ./dist
git commit 
git subtree push --prefix dist origin master
git checkout dev