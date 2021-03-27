#!/bin/bash
DATE_TIME=$(date '+%Y-%m-%d_%H-%M')
DEPLOY_BRANCH="deployed-at_${DATE_TIME}"
DIRECTORY="public"

ORIGINAL_BRANCH=$(git symbolic-ref -q HEAD) || ORIGINAL_BRANCH=$DEPLOY_BRANCH
ORIGINAL_BRANCH=${ORIGINAL_BRANCH##refs/heads/}

npm run build:github

git --work-tree $DIRECTORY checkout --orphan $DEPLOY_BRANCH

git --work-tree $DIRECTORY add --all

git --work-tree $DIRECTORY commit -m $DEPLOY_BRANCH

git push origin HEAD:gh-pages --force

git checkout -f $ORIGINAL_BRANCH

git branch -D $DEPLOY_BRANCH
