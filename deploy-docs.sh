cd docs
rm -rf _book
gitbook build
cd _book
git init
git add .
git commit -m "update book"
git push -u https://github.com/CmouseG/cicada-framework-vue.git master:gh-pages