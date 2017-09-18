@echo off
title auto deploy bat
rem by cmouseg
cd docs
rmdir /s /q _book
call gitbook build
cd _book
git init
git add .
git commit -m "update book"
git push -f git@github.com:CmouseG/cicada-framework-vue.git master:gh-pages
@echo "success..."
@echo "after 3 seconds shut..."
ping -n 4 127.0.0.1 >nul