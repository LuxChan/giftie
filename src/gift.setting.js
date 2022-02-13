
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
  title: '送给瓜瓜的一份礼物',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Hi Pumpkin！', },
    { key: 's', wording: '来到了我们的第三个情人节', },
    { key: 'd', wording: '这次的礼物有点特别', },
    { key: 'e', wording: '我想把"选择权"交给你。', },
  ],
  // 最终解释权归属人
  owner: 'LuxChen',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 8,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'IQUNIX键盘', alias: '键盘', image: '/images/1.jpg',  description: '「有客制化键盘，多是一件美事啊~」' },
  { key: 'w', name: '卡布斯辣小裙裙', alias: '裙子', image: '/images/2.jpg',  description: '「一定要美美的」' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '「还是钱来得实在」' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '「还是钱来得实在」' },
  { key: 'u', name: '迪士尼三日游', alias: '迪士尼', image: '/images/7.jpg',  description: '「又可以看到奇奇蒂蒂了呢」' },
  { key: 'i', name: '请你吃一顿平塔岛', alias: '平塔岛', image: '/images/8.jpg',  description: '「浪漫至死不渝~」' },
];
