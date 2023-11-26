#!/usr/bin/env sh
set -e

git checkout master

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."
  # build
  VERSION=$VERSION npm run build

  # commit
#  git add -A
#  git commit -m "[build] $VERSION"

  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION
#  git checkout develop
#  git rebase master
#  git push origin develop

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
