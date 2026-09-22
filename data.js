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
      title: "联动计划协力2015年泛渤海全国中学生模拟联合国大会举行",
      year: "2015",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2015-panbohai.md",
      desc: "2015年7月20–24日，天津外大附校。约70所学校近400名代表，设联合国系统（再现1973年中东局势）与1915齐美尔瓦尔德会议、1664台海风云、国际展览局、美国参议院等九个委员会；联动计划理事汪益浦出任大会学术总监。"
    },
    {
      title: "联动计划2015年夏季招募令",
      year: "2015",
      category: "组织文献",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2015-recruitment.md",
      desc: "成立第三年发布的人员招募令：面向全国招募联动学院、公关拓展部、项目运营部与地区负责人团队四个部门的成员，并系统介绍了组织的理念、业务版图与架构。通过此次招募吸收了数十位第三代核心成员。"
    },
    {
      title: "联动计划协力第三届华熠全国中学生模拟联合国大会成功举办",
      year: "2015",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2015-gsmunc.md",
      desc: "2015年8月10–13日，上海华东师大一附中。第三届华熠模联（GSMUNC）：近40所学校180余位代表，设国家卫计委与司法部联合会议、安理会、苏共二十七大、世界知识产权组织与欧盟峰会五个委员会；联动计划派出学术总监及十余名学术团队成员。"
    },
    {
      title: "联动计划协力首届乌鲁木齐联动全疆模拟联合国大会举行",
      year: "2015",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2015-lxjmunc.md",
      desc: "2015年11月21–22日，乌鲁木齐。新疆生产建设兵团团委主办，14所学校近150名代表，设历史安理会（英）、世界卫生组织与难民署三个委员会——模拟联合国第一次真正意义上落户新疆；联动计划派出学术总监与各委员会主席团负责人，提供全程学术支持。"
    },
    {
      title: "联动计划协力2016年加州大学伯克利分校模拟联合国中国会议举行",
      year: "2016",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2016-bmun-china.md",
      desc: "2016年3月25–27日，上海。第二届BMUN CHINA：二十余所学校约180名代表，设GA-SOCHUM、安理会、人权理事会与亚投行四个委员会，8名伯克利主席来沪主持；联动计划成员出任中方学术总监并承担会务组织。"
    },
    {
      title: "联动计划协力首届京津冀模联暨2016年泛渤海中学生模拟联合国大会成功举行",
      year: "2016",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2016-panbohai-jjj.md",
      desc: "2016年7月18–22日，天津。首届京津冀中学生模拟联合国大会暨2016泛渤海模联：约70所学校400余名代表，设联合国系统、日本系统、1787东方危机、英国下议院、G20峰会等十一个委员会；联动计划作为协办方提供全面支持。"
    },
    {
      title: "联动计划助力第四届华熠全国中学生模拟联合国大会成功举办",
      year: "2016",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2016-gsmunc.md",
      desc: "2016年8月10–14日，上海。北郊高中主办的第四届华熠模联（GSMUNC）：近200名代表与30余名学术成员参会，首设会场联动系统，另设1954日内瓦会议、US Senate等会场；联动计划成员出任学术委员长与会务总监，双方合作进入第四年。"
    },
    {
      title: "联动计划协力第三届中南地区中学生模拟联合国大会",
      year: "2016",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2016-cscmunc.md",
      desc: "2016年1月24–28日，长沙。长沙一中与湖南师大附中联合主办，十余所学校近200名代表，设美苏内阁危机联动、安理会、美国国会、经社理事会可持续发展委员会与主新闻中心五个委员会；联动计划作为协办方提供全程学术支持。"
    },
    {
      title: "联动计划助力第四届中南地区中学生模拟联合国大会成功举办",
      year: "2017",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2017-cscmunc.md",
      desc: "2017年1月16–19日，长沙。长沙一中与湖南师大附中联合主办，十余所学校近200名代表，设1953板门店停战谈判、广电改革、美国制宪会议与UNEP四个委员会；联动计划作为协办方派出学术总监与主席团，提供全程学术支持。"
    },
    {
      title: "联动计划成功协办2017年加州伯克利模拟联合国中国会议",
      year: "2017",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2017-bmun-china.md",
      desc: "2017年3月31日–4月2日，上海。第三届BMUN CHINA设GA-DISEC、UNSC、NATO三个委员会，十余所学校约80名代表参会。联动计划自2015年起与全球历史最悠久的模联之一——伯克利模联（BMUN）合作，为这一非营利海外名校会议提供学术与组织支持。"
    },
    {
      title: "联动计划助力第五届泛渤海中学生模拟联合国大会举行",
      year: "2017",
      category: "新闻通讯",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2017-panbohai-conference.md",
      desc: "2017年7月16–20日，天津。约70所学校近400名代表参会，设联合国系统、日本系统与天命：1644等十一个委员会；联动计划作为学术支持方为大会提供全面支持。"
    },
    {
      title: "《模拟联合国会议学术指导手册》更新第五版",
      year: "2017",
      category: "出版物",
      file: "",
      fulltext: "https://github.com/procxn/procxn.github.io/blob/main/archive/documents/2017-mun-academic-guide-v5.md",
      desc: "联动计划自2013年起编写的手册更新至第五版：从入门到进阶的系统培训、创新形式会议介绍、情景实例与中英文对照。曾定价20元/册，团体订购25册以上七五折。"
    },
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
