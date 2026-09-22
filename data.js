/* ============================================================
   联动计划档案馆 · 内容清单
   ------------------------------------------------------------
   添加材料的两步法：
   1. 把照片放到 assets/photos/<图册目录名>/，PDF 放到 assets/docs/
   2. 在下面对应的 albums / documents 列表里加一条记录
   ============================================================ */

const SITE_DATA = {

  /* ---------- 图册 ---------- */
  albums: [
    {
      id: "2013-qidian",          // 唯一标识，仅用英文和连字符
      title: "早期活动",
      year: "2013",
      cover: "assets/photos/2013/p1.svg",
      desc: "【待补充】联动计划发起、第一届团队与早期活动的照片。",
      photos: [
        { src: "assets/photos/2013/p1.svg", caption: "【示例占位照片】请替换为真实照片" },
        { src: "assets/photos/2013/p2.svg", caption: "【示例占位照片】请替换为真实照片" },
        { src: "assets/photos/2013/p3.svg", caption: "【示例占位照片】请替换为真实照片" }
      ]
    },
    {
      id: "2014-huiyi",
      title: "【待补充 · 会议名】",
      year: "2014",
      cover: "assets/photos/2014/p1.svg",
      desc: "【待补充】本年度会议与活动的照片。",
      photos: [
        { src: "assets/photos/2014/p1.svg", caption: "【示例占位照片】请替换为真实照片" },
        { src: "assets/photos/2014/p2.svg", caption: "【示例占位照片】请替换为真实照片" }
      ]
    },
    {
      id: "2015-daibuchong",
      title: "【待补充 · 2015】",
      year: "2015",
      cover: "",
      desc: "【待补充】这是一个空图册示例——没有照片时会显示空状态提示。",
      photos: []
    }
  ],

  /* ---------- 文件馆 ---------- */
  /* 字段说明：
     file     —— PDF 路径（assets/docs/），用于在线阅读与下载
     fulltext —— 可选。全文备份页链接（仓库 archive/documents/ 下的 GitHub 地址），
                 前台卡片只放缩略介绍，点"全文备份"查看完整原文 */
  documents: [
    {
      title: "示例文件 · 在线预览演示",
      year: "2014",
      category: "背景文件",
      file: "assets/docs/sample.pdf",
      desc: "【占位示例】这是一份演示用的 PDF，用来展示在线预览效果。请替换为真实的背景文件、会刊、决议草案等。"
    },
    {
      title: "【待补充 · 文件名】",
      year: "2015",
      category: "会刊",
      file: "",
      desc: "【待上传】把 PDF 文件放入 assets/docs/ 后，将本条记录的 file 字段填为 \"assets/docs/文件名.pdf\"。"
    },
    {
      title: "【待补充 · 文件名】",
      year: "2016",
      category: "决议草案",
      file: "",
      desc: "【待上传】同上。category 可自由填写：背景文件 / 会刊 / 决议草案 / 危机推演 / 其他。"
    }
  ],

  /* ---------- 纪念墙 ---------- */
  memories: [
    {
      text: "亲爱的代表，会期已至，请尽快入场就座。",
      author: "每一次会议开始前，我们最常听到的一句话"
    },
    {
      text: "【待补充】欢迎老成员把自己的回忆（一段话、一个名字、一句当年常说的话）发给站长，它会出现在这面墙上。",
      author: "站长"
    }
  ]
};
