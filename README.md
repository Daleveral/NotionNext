
- Forked from [tangly1024/notionnext](https://github.com/tangly1024/notionnext)

- [NotionNext 文档](https://docs.tangly1024.com/article/latest)

- 此仓库对应服务器主站 : **https://www.dalechu.cn/**  

- Vercel 镜像 : blog2025-mu.vercel.app

---

<br/>

<p align="center">
    <b>用 Docker 部署</b>
</p>

Debian 安装 docker :
```shell
apt update && apt install -y docker.io docker-compose jq
```

docker 换源
```shell
vim /etc/docker/daemon.json
```
```shell
systemctl daemon-reload && systemctl restart docker
```



<br/>

拉取 [notionnext 镜像](https://github.com/daleveral/notionnext/pkgs/container/notionnext), 体积约 200MB :

```shell
docker pull ghcr.io/daleveral/notionnext:main
```

<br/>

镜像重命名 :
```shell
docker tag ghcr.io/daleveral/notionnext:main notionnext:latest 
```

```shell
docker images
docker rmi ghcr.linkos.org/daleveral/notionnext:main
docker images
```

<br/>

创建和运行容器 ( 将 MY-ID-STR 替换成自己的 NOTION_PAGE_ID ) :
```shell
docker run --name notionnext -d -p 3000:3000 -e NOTION_PAGE_ID=MY-ID-STR notionnext:latest
```

<br/>
<br/>


---

<br/>

<p align="center"> <b>对 NotionNext 的更改 </b> </p>

- Aplayer 音乐播放器 : 
    - 歌单放置在单独的 [musiclist.js](./musiclist.js) 文件中
    - 使用修改后的 aplayer 相关 [css](https://jsd.onmicrosoft.cn/gh/Daleveral/csslivb/cssv3.css) 和 [js](https://jsd.onmicrosoft.cn/gh/Daleveral/csslivb/jsv2.js) 来美化播放器
- Heo 主题 :
    - 外链都在新标签页打开
    - "最新发布" 的文章列表以发布日期排列, 而非更新日期
    - 首页斜向滚动的技能图标更改了一部分
    - 更改暗色模式下一些组件的配色
    - 相邻的左右封面和标题改为等高排列
    - 首页自定义的文字、标语、链接等
- Artalk 使用最新版本的 js / css 引用
- 文章里的所有链接都在新标签页打开, 而非当前标签页
- 删去了部分主题
- 基于 [NotionNext](https://docs.tangly1024.com/article/latest) 较新的版本, 会同步上游的更新

<br/>
<br/>