xcopy /s ./404.html C:\Development\zioerjens.github.io
set location=%cd%
cd C:\Development\zioerjens.github.io
git init
git add -A
git commit -m "auto deployment"
git remote add origin https://github.com/zioerjens/zioerjens.github.io.git
git push -u --force origin master
cd %location%
