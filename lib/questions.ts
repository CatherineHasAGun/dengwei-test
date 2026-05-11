export const DIMENSION_KEYS = [
  "experiencePressure",
  "controlBoundary",
  "cognitiveRigidity",
  "empathyDeficit",
  "judgmentalSuperiority",
] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];

export type DimensionScores = Record<DimensionKey, number>;

export type Option = {
  id: string;
  text: string;
  scores: DimensionScores;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};

export const dimensionLabels: Record<DimensionKey, string> = {
  experiencePressure: "经验压迫感",
  controlBoundary: "控制欲与边界感",
  cognitiveRigidity: "认知开放性不足",
  empathyDeficit: "共情与倾听不足",
  judgmentalSuperiority: "优越感与评价欲",
};

export const questions: Question[] = [
  {
    id: 1,
    text: "朋友说想裸辞，你第一反应是？",
    options: [
      {
        id: "A",
        text: "你是不是太冲动了？现在大环境多差啊。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 2,
          judgmentalSuperiority: 2,
        },
      },
      {
        id: "B",
        text: "你想清楚后果了吗？我可以帮你一起盘一下。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 1,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "牛啊！但你现在最担心的是什么？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "年轻人就是抗压能力不行，我们以前哪有这么多选择。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 3,
          cognitiveRigidity: 3,
          empathyDeficit: 4,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 2,
    text: "你看到有人分享“30岁重新开始学跳舞”，你会想？",
    options: [
      {
        id: "A",
        text: "挺好的，人生不应该被年龄卡住。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "有点羡慕，但我可能做不到。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "这年纪还折腾这些，现实一点吧。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "D",
        text: "我会好奇她怎么安排时间和成本。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
  {
    id: 3,
    text: "别人向你吐槽工作很累，你通常会？",
    options: [
      {
        id: "A",
        text: "立刻分析他的问题在哪里。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 4,
          judgmentalSuperiority: 2,
        },
      },
      {
        id: "B",
        text: "先说“确实很累”，再问他想听建议还是想被陪着骂。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "跟他说“大家都累，你要学会适应”。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 5,
          judgmentalSuperiority: 3,
        },
      },
      {
        id: "D",
        text: "分享自己更惨的经历，证明他这不算什么。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 5,
          judgmentalSuperiority: 3,
        },
      },
    ],
  },
  {
    id: 4,
    text: "当你不理解一个网络热梗时，你会？",
    options: [
      {
        id: "A",
        text: "直接说：现在年轻人真无聊。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "B",
        text: "去搜一下，看看大家为什么觉得好笑。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "虽然不懂，但不影响别人开心。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "觉得互联网越来越低幼了。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 5,
    text: "你给朋友提建议，对方没采纳，你会？",
    options: [
      {
        id: "A",
        text: "有点不爽，觉得TA迟早后悔。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "B",
        text: "尊重TA，毕竟那是TA的人生。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "继续劝，直到TA明白你的良苦用心。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 5,
          cognitiveRigidity: 3,
          empathyDeficit: 3,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "D",
        text: "表面不说，心里默默扣分。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 6,
    text: "聚会上有人穿得很夸张，你会？",
    options: [
      {
        id: "A",
        text: "觉得TA开心就好。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "忍不住和朋友小声点评。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "C",
        text: "觉得现在的人太爱博眼球。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "D",
        text: "好奇TA为什么喜欢这种风格。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
  {
    id: 7,
    text: "如果你是领导或前辈，最常说的话可能是？",
    options: [
      {
        id: "A",
        text: "你先说说你的想法。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "这个事情以前我们试过，不行。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
        },
      },
      {
        id: "C",
        text: "我不是否定你，但你这个太理想化。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "D",
        text: "我给你一个建议，你可以不采纳。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
  {
    id: 8,
    text: "别人和你观点不同，你更容易？",
    options: [
      {
        id: "A",
        text: "想知道TA为什么这么想。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "立刻找漏洞反驳。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 3,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "C",
        text: "觉得TA经历太少。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "D",
        text: "表面尊重，心里觉得TA不成熟。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 1,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 9,
    text: "朋友买了一个你觉得很贵但没必要的东西，你会？",
    options: [
      {
        id: "A",
        text: "直接说：这不就是智商税吗？",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "B",
        text: "问问TA为什么喜欢，可能有我不知道的点。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "虽然不理解，但TA花自己的钱开心就好。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "忍不住帮TA算这笔钱本来能干什么。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
        },
      },
    ],
  },
  {
    id: 10,
    text: "朋友分手后找你聊天，你更可能说？",
    options: [
      {
        id: "A",
        text: "我早就看出来这个人不行。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 3,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "B",
        text: "你现在是不是很难受？我在。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "你下次真的要听我的。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 5,
          cognitiveRigidity: 2,
          empathyDeficit: 3,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "D",
        text: "先陪TA骂一会儿，再看TA需不需要建议。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
  {
    id: 11,
    text: "当你看到年轻人用你不熟悉的方式表达自己时，你会？",
    options: [
      {
        id: "A",
        text: "觉得每代人都有自己的表达方式。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "虽然不懂，但愿意先观察一下。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "觉得他们就是太闲了。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "D",
        text: "开始怀念以前更“正常”的表达方式。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 4,
          empathyDeficit: 1,
          judgmentalSuperiority: 3,
        },
      },
    ],
  },
  {
    id: 12,
    text: "别人做了一个你不认同的人生选择，你会？",
    options: [
      {
        id: "A",
        text: "反复提醒TA风险，直到TA认真听进去。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 5,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
        },
      },
      {
        id: "B",
        text: "表达担心，但尊重TA自己决定。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "觉得TA迟早会为自己的天真买单。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "D",
        text: "问TA是否需要我帮忙一起分析。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
  {
    id: 13,
    text: "群聊里有人提出一个很新的想法，你的第一反应是？",
    options: [
      {
        id: "A",
        text: "先看看有没有可取之处。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "这东西听着就不靠谱。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "C",
        text: "我会问：这个想法解决什么问题？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "忍不住说：你还是太理想化了。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 14,
    text: "当别人只是想吐槽，你却觉得问题很好解决时，你会？",
    options: [
      {
        id: "A",
        text: "忍住，先让TA说完。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "直接给方案，毕竟解决问题最重要。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 3,
          cognitiveRigidity: 1,
          empathyDeficit: 4,
          judgmentalSuperiority: 2,
        },
      },
      {
        id: "C",
        text: "问一句：你现在想听建议吗？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "觉得TA就是情绪太多、行动太少。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 5,
          judgmentalSuperiority: 4,
        },
      },
    ],
  },
  {
    id: 15,
    text: "你最受不了哪种人？",
    options: [
      {
        id: "A",
        text: "不听劝的人。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 5,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
        },
      },
      {
        id: "B",
        text: "总是否定别人的人。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "C",
        text: "没有边界感的人。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "情绪一上来就不讲逻辑的人。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 4,
          judgmentalSuperiority: 3,
        },
      },
    ],
  },
  {
    id: 16,
    text: "你看到朋友换了一个你不看好的行业，你会？",
    options: [
      {
        id: "A",
        text: "提醒风险，但不替TA做决定。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "觉得TA太天真，行业没那么简单。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
      {
        id: "C",
        text: "问TA为什么想换，也许TA有自己的判断。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "开始给TA列一堆现实问题。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 4,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
        },
      },
    ],
  },
  {
    id: 17,
    text: "当你发现自己不理解某个流行趋势时，你会？",
    options: [
      {
        id: "A",
        text: "承认我不理解，但不急着否定。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "觉得这东西迟早会过气。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 1,
          cognitiveRigidity: 4,
          empathyDeficit: 1,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "C",
        text: "研究一下它为什么会火。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "D",
        text: "怀疑大众审美越来越奇怪。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
        },
      },
    ],
  },
  {
    id: 18,
    text: "如果朋友说你有点爱说教，你会？",
    options: [
      {
        id: "A",
        text: "认真想想自己是不是表达方式太用力了。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
      {
        id: "B",
        text: "觉得TA误会了，我明明是为TA好。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 5,
          cognitiveRigidity: 3,
          empathyDeficit: 3,
          judgmentalSuperiority: 3,
        },
      },
      {
        id: "C",
        text: "表面接受，心里觉得TA太敏感。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 4,
          judgmentalSuperiority: 4,
        },
      },
      {
        id: "D",
        text: "问TA是哪句话让TA不舒服。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
        },
      },
    ],
  },
];
