const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-07-29', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '一个人要仰望多少次', url: 'https://www.best-poems.net/poem/blowin-in-the-wind-by-bob-dylan.html' },
    { title: '才能看见苍穹', url: 'https://www.best-poems.net/poem/blowin-in-the-wind-by-bob-dylan.html' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Hello',
  HEO_HERO_TITLE_2: 'World',
  HEO_HERO_TITLE_3: 'return \'all right\'',
  HEO_HERO_TITLE_4: 'L\'Internationale',
  HEO_HERO_TITLE_5: 'Sera le genre humain',
  HEO_HERO_TITLE_LINK: 'https://github.com/Daleveral',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: 'National Geographic', url: 'https://www.nationalgeographic.com/' },
  HEO_HERO_CATEGORY_2: { title: 'Medium', url: 'https://medium.com/' },
  HEO_HERO_CATEGORY_3: { title: 'Hello GitHub', url: 'https://github.com/521xueweihan/HelloGitHub' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 专扣细节强迫症',
    '🏃 脚踏实地行动派',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组摸鱼佬'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/Daleveral',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: '/about',
  HEO_INFO_CARD_TEXT3: '了解更多',


  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'ps',
      img_1: '/images/heo/ps.webp',
      color_1: '#176fcc',
      title_2: 'wireshark',
      img_2: '/images/heo/wireshark.webp',
      color_2: '#ffa53d'
    },
    {
      title_1: 'ubuntu',
      img_1: '/images/heo/ubuntu.webp',
      color_1: '#f47421',
      title_2: 'idea',
      img_2: '/images/heo/idea.webp',
      color_2: '#ffffff'
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
      title_1: 'code',
      img_1: '/images/heo/code.webp',
      color_1: '#32cfb0',
      title_2: 'docker',
      img_2: '/images/heo/docker.webp',
      color_2: '#57b6e6'
    },
    {
      title_1: 'css',
      img_1: '/images/heo/css.webp',
      color_1: '#101e9e',
      title_2: 'git',
      img_2: '/images/heo/git.webp',
      color_2: '#ffaa00'
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
      title_1: 'python',
      img_1: '/images/heo/python.webp',
      color_1: '#ffffff',
      title_2: 'matlab',
      img_2: '/images/heo/matlab.webp',
      color_2: '#edd3ff'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: 'After long years',
  HEO_SOCIAL_CARD_TITLE_2: 'How shall i greet thee',
  HEO_SOCIAL_CARD_TITLE_3: 'NotionNext 开源项目, 搭建你的个人网页 ! ',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/about',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
