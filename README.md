# 联动计划 Procxn 纪念页

纪念 2013–2017 年国内学生模拟联合国教育组织「联动计划」（原官网 www.procxn.org）的静态纪念网站。

- 正式地址：**https://www.procxn.org**
- GitHub 组织：https://github.com/procxn
- 本仓库：procxn/procxn.github.io（GitHub Pages 组织站点，procxn.github.io 会自动跳转到正式地址）

## 目录结构

```
procxn-website/
├── index.html   # 单页站点（关于 / 大事记 / 我们留下的 / 纪念墙）
├── style.css    # 样式
├── CNAME        # 自定义域名：www.procxn.org（勿删，删除会导致域名绑定失效）
└── README.md
```

## 日常修改流程

1. 修改 `index.html` / `style.css`（史料占位处均以「【待补充】」标注）。
2. 推送即自动重新发布：
   ```bash
   git add . && git commit -m "更新内容" && git push
   ```

## 域名与 DNS（www.procxn.org）

GitHub Pages 已开启并绑定 www.procxn.org（来源：仓库内 CNAME 文件）。域名注册商处需保持以下解析：

| 主机记录 | 类型 | 指向 |
|---|---|---|
| www | CNAME | procxn.github.io |
| @ | A | 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153 |

解析生效后，GitHub 会自动签发 HTTPS 证书；随后在仓库 Settings → Pages 中勾选 **Enforce HTTPS**。

## 备用地址

即使将来 procxn.org 不再续费，站点仍可通过 **https://procxn.github.io** 访问
（届时删除仓库里的 CNAME 文件、并在 Pages 设置中移除自定义域名即可，二者只需取舍其一）。
