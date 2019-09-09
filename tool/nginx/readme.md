【nginx 命令】

ps -ef | grep nginx 查看进程号
kill -QUIT xxx 平滑杀死进程号
kill -HUP xxx（主进程号或者进程号文件路径） 平滑重启
nginx 启动 / nginx -s reload 重启 kill -9 也可杀死进程

rm -rf 删除
cp -R 复制

从远程 linux 服务器下载文件夹
scp -r root@xxx.xxx.xxx.xx:/home/FrontEnd/gis /Desktop/gis
