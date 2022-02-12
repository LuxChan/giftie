
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '情人节抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '不知道情人节要什么？', },
    { key: 's', wording: '我想到了办法！', },
    { key: 'd', wording: '看看你有多幸运吧！', },
  ],
  // 最终解释权归属人
  owner: 'LuxChen',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '1000以内客制化键盘一把', alias: '键盘', image: '/images/1.png',  description: '「有客制化键盘，多是一件美事啊~」' },
  { key: 'w', name: '500以内小裙裙任选一条', alias: '裙子', image: '/images/2.png',  description: '“一定要美美的”' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“还是钱来得实在”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '迪士尼三日游', alias: '迪士尼', image: '/images/7.png',  description: '“又可以和看噗噗了呢”' },
  { key: 'i', name: '请你吃一顿平塔岛', alias: '平塔岛', image: '/images/8.png',  description: '「一起吃西餐一定很幸福」' },
];
