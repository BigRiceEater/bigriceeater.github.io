#!/bin/bash

DATE=`date '+%Y-%m-%d %H:%M:%S'`

# A user github page builds directly from master
git checkout master
git merge dev
npm run build
git add ./dist
git commit -m "Release $DATE"
git subtree push --prefix dist origin master
git checkout dev