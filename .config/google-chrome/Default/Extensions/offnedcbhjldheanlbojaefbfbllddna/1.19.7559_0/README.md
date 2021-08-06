This is an open source project which is hosted on GitHub: [https://github.com/JetBrains/toolbox-browser-extension/](https://github.com/JetBrains/toolbox-browser-extension/).

Use the following data as your reference:

Built from:

* Branch: master
* Commit SHA: 76899362ece740a6f74ea703465b92129128f86d
* Commit short SHA: 7689936
* Commit author: Maxim Mig
* Commit time: Tue Oct 27 13:40:19 2020 +0100
* Commit message: Align Clone buttons icons on github and gitlab

Built on:
* Platform: linux
* Type: Linux
* Release: 4.15.0-112-generic

Built with:
* Node: 10.22.1
* Yarn: 1.22.4

How to build:

1. `git clone git@github.com:JetBrains/toolbox-browser-extension.git`

   OR  

   `git clone https://github.com/JetBrains/toolbox-browser-extension.git`  
2. `cd 'toolbox-browser-extension'`
3. `git checkout 'master'`
4. `git reset --hard '76899362ece740a6f74ea703465b92129128f86d'`
5. `yarn install`
6. `yarn build`

   The built code is saved in the 'dist' subfolder:  

7. `cd 'dist'`