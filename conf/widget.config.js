/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
          name: 'なんでもないや',
          artist: 'Akie秋绘',
          url: 'http://music.163.com/song/media/outer/url?id=450795499.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Merry Christmas Mr. Lawrence',
          artist: '坂本龍一',
          url: 'http://music.163.com/song/media/outer/url?id=1893923634.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '风を共に舞う気持ち',
          artist: 'Falcom Sound Team jdk',
          url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '王都グランセル',
          artist: 'Falcom Sound Team jdk',
          url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          url: 'http://music.163.com/song/media/outer/url?id=1868553.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'On a Slow Boat to China',
          artist: 'Luke Thompson',
          url: 'http://music.163.com/song/media/outer/url?id=27591140.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Liekkas',
          artist: 'Sofia Jannok',
          url: 'http://music.163.com/song/media/outer/url?id=3413895.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Episode 33',
          artist: 'She Her Her Hers',
          url: 'http://music.163.com/song/media/outer/url?id=1311427648.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Yellow Submarine',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=1811303163.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Only Time',
          artist: 'Enya',
          url: 'http://music.163.com/song/media/outer/url?id=29470947.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Yesterday Once More',
          artist: 'Carpenters',
          url: 'http://music.163.com/song/media/outer/url?id=3986241.mp3',
          cover: '/aplayer.png'
    },
    {
          name: "My Love",
          artist: 'Westlife',
          url: 'http://music.163.com/song/media/outer/url?id=2081191.mp3',
          cover: '/aplayer.png'
    },
    {
          name: "In the End",
          artist: 'Linkin Park',
          url: 'http://music.163.com/song/media/outer/url?id=16686470.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'You',
          artist: 'Approaching Nirvana',
          url: 'http://music.163.com/song/media/outer/url?id=1891437743.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'In My Life',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=1476058.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Young and Beautiful',
          artist: 'Lana Del Rey',
          url: 'http://music.163.com/song/media/outer/url?id=28952209.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Dirty Paws',
          artist: 'Of Monsters And Men',
          url: 'http://music.163.com/song/media/outer/url?id=1890665790.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Beautiful',
          artist: 'Virginia To Vegas',
          url: 'http://music.163.com/song/media/outer/url?id=29722661.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'We Are Young',
          artist: 'Fun, Janelle Monáe',
          url: 'http://music.163.com/song/media/outer/url?id=28329964.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'The Nights',
          artist: 'Avicii',
          url: 'http://music.163.com/song/media/outer/url?id=1826923389.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'That Girl',
          artist: 'Olly Murs',
          url: 'http://music.163.com/song/media/outer/url?id=864650750.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '忽然之间',
          artist: '莫文蔚',
          url: 'http://music.163.com/song/media/outer/url?id=27937466.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'You Raise Me Up',
          artist: 'Westlife',
          url: 'http://music.163.com/song/media/outer/url?id=20707713.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Mr.Moustafa',
          artist: 'Alexandre Desplat',
          url: 'http://music.163.com/song/media/outer/url?id=28289088.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Waiting for Love',
          artist: 'Avicii',
          url: 'http://music.163.com/song/media/outer/url?id=1842927464.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Gotta Have You',
          artist: 'The Weepies',
          url: 'http://music.163.com/song/media/outer/url?id=19572271.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'The Saltwater Room',
          artist: 'Owl City',
          url: 'http://music.163.com/song/media/outer/url?id=1807828.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'What Are Words',
          artist: 'Chris Medina',
          url: 'http://music.163.com/song/media/outer/url?id=1210496.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'NEW BOY',
          artist: '朴树',
          url: 'http://music.163.com/song/media/outer/url?id=28996919.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Take Me Home Country Roads',
          artist: 'John Denver',
          url: 'http://music.163.com/song/media/outer/url?id=27448352.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Color Blind',
          artist: 'Matt B',
          url: 'http://music.163.com/song/media/outer/url?id=1910991521.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'New Soul',
          artist: 'Yael Naim',
          url: 'http://music.163.com/song/media/outer/url?id=2010944681.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'arhbo ( 球员入阵 )',
          artist: 'Gims/Ozuna',
          url: 'http://music.163.com/song/media/outer/url?id=2042622526.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '莫斯科郊外的晚上',
          artist: '中央音乐合唱团',
          url: 'http://music.163.com/song/media/outer/url?id=5280398.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Sound of Silence',
          artist: 'Simon & Garfunkel',
          url: 'http://music.163.com/song/media/outer/url?id=491424530.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Hayya Hayya',
          artist: 'Trinidad Cardona,DaVido,Aisha',
          url: 'http://music.163.com/song/media/outer/url?id=1933800693.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'What Makes You Beautiful',
          artist: 'One Direction',
          url: 'http://music.163.com/song/media/outer/url?id=27218979.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '海阔天空',
          artist: 'Beyond',
          url: 'http://music.163.com/song/media/outer/url?id=1357374736.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '喜欢你',
          artist: 'Beyond',
          url: 'http://music.163.com/song/media/outer/url?id=346163.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Go West',
          artist: 'Pet Shop Boys',
          url: 'http://music.163.com/song/media/outer/url?id=27198266.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Iridescent',
          artist: 'Linkin Park',
          url: 'http://music.163.com/song/media/outer/url?id=25639052.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Komorebi',
          artist: 'm-taku',
          url: 'http://music.163.com/song/media/outer/url?id=29803287.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '亡命之徒',
          artist: '纵贯线',
          url: 'http://music.163.com/song/media/outer/url?id=5237863.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '起风了',
          artist: '买辣椒也用券',
          url: 'http://music.163.com/song/media/outer/url?id=1330348068.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '小城大事',
          artist: '杨千嬅',
          url: 'http://music.163.com/song/media/outer/url?id=1357379611.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '富士山下',
          artist: '陈奕迅',
          url: 'http://music.163.com/song/media/outer/url?id=1851228561.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Here with You',
          artist: 'Asher Monroe',
          url: 'http://music.163.com/song/media/outer/url?id=27583305.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Imagine',
          artist: 'John Lennon',
          url: 'http://music.163.com/song/media/outer/url?id=1476431.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Hey Jude',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=5201810.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Summer',
          artist: '久石让',
          url: 'http://music.163.com/song/media/outer/url?id=1867107328.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Yellow',
          artist: 'Coldplay',
          url: 'http://music.163.com/song/media/outer/url?id=26807310.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '最佳损友',
          artist: '陈奕迅',
          url: 'http://music.163.com/song/media/outer/url?id=65800.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '理想三旬',
          artist: '陈鸿宇',
          url: 'http://music.163.com/song/media/outer/url?id=31445772.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '北京东路的日子', 
          artist: '群星',
          url: 'http://music.163.com/song/media/outer/url?id=458245372.mp3', 
          cover: '/aplayer.png'
    },
    {
          name: 'PLANET', 
          artist: 'ラムジ',
          url: 'http://music.163.com/song/media/outer/url?id=812400.mp3', 
          cover: '/aplayer.png'
    },
    {
          name: '凤凰花开的路口',
          artist: '林志炫',
          url: 'http://music.163.com/song/media/outer/url?id=109734.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '好久不见',
          artist: '陈奕迅',
          url: 'http://music.163.com/song/media/outer/url?id=65538.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '愿得一人心',
          artist: '李行亮',
          url: 'http://music.163.com/song/media/outer/url?id=25731646.mp3',
          cover: '/aplayer.png'
    },
    {
          name:  '七月上',
          artist: 'Jam',
          url: 'http://music.163.com/song/media/outer/url?id=31445554.mp3',
          cover: '/aplayer.png'
    },   
    {
          name:  'Dont Break My Heart',
          artist: '黑豹乐队',
          url: 'http://music.163.com/song/media/outer/url?id=1859327.mp3',
          cover: '/aplayer.png'
    },   
    {
          name: '光阴的故事',
          artist: '罗大佑',
          url: 'http://music.163.com/song/media/outer/url?id=109545.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'K歌之王',
          artist: '陈奕迅',
          url: 'http://music.163.com/song/media/outer/url?id=1897928899.mp3',
          cover: '/aplayer.png'
    },

    {
          name: 'Last First Kiss',
          artist: 'One Direction',
          url: 'http://music.163.com/song/media/outer/url?id=25882975.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Here Comes the Sun',
          artist: 'The Beatles',
          url: 'http://music.163.com/song/media/outer/url?id=28100002.mp3',
          cover: '/aplayer.png'
    },

    {
          name: '水星记',
          artist: '郭顶',
          url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3',
          cover: '/aplayer.png'
    },

    {
          name: 'Look At Me Now',
          artist: 'Charlie Puth',
          url: 'http://music.163.com/song/media/outer/url?id=28188171.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Brought Up That Way',
          artist: 'Taylor Swift',
          url: 'http://music.163.com/song/media/outer/url?id=2001660.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Demons',
          artist: 'Imagine Dragons',
          url: 'http://music.163.com/song/media/outer/url?id=19945727.mp3',
          cover: '/aplayer.png'
    },
    {
          name: 'Closer',
          artist: 'The Chainsmokers,Halsey',
          url: 'http://music.163.com/song/media/outer/url?id=2148388785.mp3',
          cover: '/aplayer.png'
    },

    {
          name: 'Bones',
          artist: 'Imagine Dragons',
          url: 'http://music.163.com/song/media/outer/url?id=1927389937.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '东方之珠',
          artist: '罗大佑',
          url: 'http://music.163.com/song/media/outer/url?id=108653.mp3',
          cover: '/aplayer.png'
    },
    {
          name: '爱的回归线',
          artist: '陈韵若/陈每文',
          url: 'http://music.163.com/song/media/outer/url?id=2122297564.mp3',
          cover: '/aplayer.png'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
