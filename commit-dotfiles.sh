#!/bin/sh
cd ~/dotfiles
git add *
today=$(date "+%Y%m%d")
git commit -m "update dotfiles ${today}"
git push

