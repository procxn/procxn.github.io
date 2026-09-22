# 联动计划 Procxn 纪念档案馆

纪念 2013–2017 年国内学生模拟联合国教育组织「联动计划」（原官网 www.procxn.org）的静态档案网站。

- 正式地址：**https://www.procxn.org**
- 备用地址：https://procxn.github.io（自动跳转到正式地址）
- GitHub 组织：https://github.com/procxn · 仓库：procxn/procxn.github.io

## 站点结构

```
├── index.html        # 首页：门户导航 + 最近收录
├── timeline.html     # 大事记（按年份）
├── gallery.html      # 图册列表
├── album.html        # 单个图册页（含灯箱放大，URL: album.html?album=<id>）
├── documents.html    # 文件馆：PDF 列表 + 在线预览/下载，支持按分类年份筛选
├── about.html        # 关于组织
├── memory.html       # 纪念墙
├── data.js           # ★ 所有内容的清单（图册 / 文件 / 纪念墙留言）
├── style.css         # 样式
├── assets/
│   ├── photos/<图册目录>/   # 照片文件
│   └── docs/               # PDF 文件
└── CNAME             # 域名绑定 www.procxn.org（勿删）
```

## 如何添加材料（两步法）

**添加照片图册：**
1. 新建文件夹 `assets/photos/2016-nianhui/`，把照片放进去（建议 jpg/png，单张 ≤ 2MB）
2. 在 `data.js` 的 `albums` 里加一条：
   ```js
   {
     id: "2016-nianhui",              // 与文件夹名一致，仅英文和连字符
     title: "2016 年会议合影",
     year: "2016",
     cover: "assets/photos/2016-nianhui/01.jpg",
     desc: "一句话说明。",
     photos: [
       { src: "assets/photos/2016-nianhui/01.jpg", caption: "照片说明" }
     ]
   }
   ```

**添加 PDF 文件：**
1. 把 PDF 放入 `assets/docs/`（文件名建议用英文和连字符）
2. 在 `data.js` 的 `documents` 里加一条：
   ```js
   {
     title: "2016 会议背景文件",
     year: "2016",
     category: "背景文件",
     file: "assets/docs/2016-bg-guide.pdf",
     desc: "一句话说明。"
   }
   ```

**修改大事记 / 纪念墙：** 直接编辑 `timeline.html` 的时间线列表，或 `data.js` 的 `memories`。

## 日常修改流程

改完文件后提交推送，GitHub Pages 会自动重新发布（约 1 分钟生效）：

```bash
git add . && git commit -m "收录：××照片" && git push
```

## 域名与 DNS（www.procxn.org）

GitHub Pages 已开启并绑定 www.procxn.org（来源：仓库内 CNAME 文件）。域名注册商处需保持以下解析：

| 主机记录 | 类型 | 指向 |
|---|---|---|
| www | CNAME | procxn.github.io |
| @ | A | 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153 |

解析生效后 GitHub 会自动签发 HTTPS 证书，随后在仓库 Settings → Pages 勾选 **Enforce HTTPS**。
