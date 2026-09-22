# 联动计划 Procxn 纪念页

纪念 2013–2017 年国内学生模拟联合国教育组织「联动计划」（原官网 www.procxn.org）的静态纪念网站，托管于 GitHub Pages。

## 目录结构

```
procxn-website/
├── index.html   # 单页站点（关于 / 大事记 / 我们留下的 / 纪念墙）
├── style.css    # 样式
├── CNAME        # 自定义域名：www.procxn.org
└── README.md
```

## 部署步骤（GitHub Pages + 自定义域名）

1. 在 GitHub 上创建一个仓库（例如 `procxn-website`，公开仓库）。
2. 将本目录所有文件推送到仓库 `main` 分支根目录：
   ```bash
   git init
   git add .
   git commit -m "init: 联动计划纪念页"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/procxn-website.git
   git push -u origin main
   ```
3. 仓库 Settings → Pages → Source 选择 `main` 分支 `/ (root)`，保存。
   - 若想直接用 `https://<用户名>.github.io/procxn-website` 访问，可删除 CNAME 文件。
4. 绑定域名：在你的域名 DNS 服务商处添加解析：
   - `www` CNAME → `<你的用户名>.github.io`
   - （可选）`@` A 记录 → GitHub Pages 的 IP（在仓库 Pages 设置页可查到最新值）
5. 回到仓库 Settings → Pages，在 Custom domain 填入 `www.procxn.org`，勾选 **Enforce HTTPS**（证书签发可能需要几分钟到几小时）。

## 如何补充内容

- 打开 `index.html`，所有需要补充的史料位置均以「【待补充】」标注，直接替换文字即可。
- 时间线在 `<ol class="timeline">` 中，按年份复制一个 `<li>` 即可增加条目。
- 照片等资料可放入本目录并在卡片中用 `<img>` 引用。
