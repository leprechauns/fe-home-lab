# LabMai 新版大首页

## 相关操作命令：
### 开发模式
- npm install
- npm run dev
- 浏览器打开 http://localhost:8080/dist/home

### 生产模式
- 添加相关节点配置文件 config/[node].json
- 安装依赖：./init.sh
- 打包文件：./build.sh
- 添加 nginx 配置：
```
    location ~* ^/dist(/.*\.(js|css|png|jpg|jpeg|gif|ico|swf|pdf|eot|ttf|woff))$ {
        root /data/fe-home/dist;
        log_not_found off;
        access_log off;
        try_files $1 404 break;
    }

    location ~ ^/labmai/home(/)?$ {
        root /data/fe-home/view/home;
        try_files $1 $1/index.html 404 break;
    }
```