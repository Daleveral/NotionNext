- NotionNext 博客主页
- 更新于 11/11/2024 , 与云服务器内容一致
- 服务器主站 : https://www.dalechu.cn
- Vercel 镜像站 : https://www.epicurus.fun

---
<br/>
<br/>

<p align="center">
    <b>在 Docker 上部署</b>
</p>

Debian 安装 docker :
```shell
apt update && apt install -y docker.io docker-compose jq
```

docker 换源, 自行写入最新可用站点 :
```shell
vim /etc/docker/daemon.json
```



<br/>

拉取镜像 :
```shell
docker pull ghcr.io/daleveral/notionnext:main  # 常规 
```

```shell
docker pull ghcr.linkos.org/daleveral/notionnext:main  # 加速
```

<br/>

镜像重命名 :
```shell
docker tag ghcr.linkos.org/daleveral/notionnext:main notionnext:latest 
```

```shell
docker images
docker rmi ghcr.linkos.org/daleveral/notionnext:main
docker images
```

<br/>


创建和运行容器 :
```shell
docker run --name NotionNext -d -p=3000:3000 notionnext:latest 
```