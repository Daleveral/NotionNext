const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-07-29', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '一个人要仰望多少次', url: 'https://www.best-poems.net/poem/blowin-in-the-wind-by-bob-dylan.html' },
    { title: '才能看见苍穹', url: 'https://www.best-poems.net/poem/blowin-in-the-wind-by-bob-dylan.html' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: 'Hello',
  HERO_TITLE_2: 'World',
  HERO_TITLE_3: 'return \'all right\'',
  HERO_TITLE_4: 'L\'Internationale',
  HERO_TITLE_5: 'Sera le genre humain',
  HERO_TITLE_LINK: 'https://github.com/Daleveral',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: 'National Geographic', url: 'https://www.nationalgeographic.com/' },
  HERO_CATEGORY_2: { title: 'Medium', url: 'https://medium.com/'},
  HERO_CATEGORY_3: { title: 'Hello GitHub', url: 'https://github.com/521xueweihan/HelloGitHub' },

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'idea',
      img_1: '/images/heo/idea.webp',
      color_1: '#ffffff',
      title_2: 'wireshark',
      img_2: '/images/heo/wireshark.webp',
      color_2: '#ffa53d'
    },
    {
      title_1: 'ubuntu',
      img_1: '/images/heo/ubuntu.webp',
      color_1: '#f47421', 
      title_2: 'Photoshop',
      img_2: '/images/heo/ps.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'VMWare',
      img_1: '/images/heo/vmware.webp',
      color_1: '#ffffff',
      title_2: 'html',
      img_2: '/images/heo/html.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/swift.webp',
      color_1: '#52d895',
      title_2: 'code',
      img_2: '/images/heo/code.webp',
      color_2: '#ffe040'
    },
    {
      title_1: 'python',
      img_1: '/images/heo/python.webp',
      color_1: '#ffffff',
      title_2: 'CSS3',
      img_2: '/images/heo/css.webp',
      color_2: '#101e9e'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/js.webp',
      color_1: '#f7cb4f',
      title_2: 'mysql',
      img_2: '/images/heo/mysql.webp',
      color_2: '#9f9fee'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/git.webp',
      color_1: '#df5b40',
      title_2: 'docker',
      img_2: '/images/heo/docker.webp',
      color_2: '#57b6e6'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: 'After long years',
  SOCIAL_CARD_TITLE_2: 'How shall i greet thee',
  SOCIAL_CARD_TITLE_3: 'NotionNext 开源项目, 搭建你的个人网页 ! ',
  SOCIAL_CARD_URL: 'https://docs.tangly1024.com/about',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
