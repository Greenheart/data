#! /bin/sh

node update-data.js

git add data
git commit -m 'Updating data.'
git push