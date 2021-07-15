#!/bin/sh
cd ~/dotfiles
yay -Qqe > pacman-pkglist
git add *
today=$(date "+%Y%m%d")
git commit -m "update dotfiles ${today}"
git push

