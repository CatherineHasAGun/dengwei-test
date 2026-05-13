import type { DimensionKey, Question, ResultAffinity } from "@/types/test";

export { DIMENSION_KEYS, RESULT_TYPE_IDS } from "@/types/test";
export type {
  DimensionKey,
  DimensionScores,
  NormalizedDimensionScores,
  Option,
  Question,
  ResultAffinity,
  ResultTypeId,
} from "@/types/test";

export const dimensionLabels: Record<DimensionKey, string> = {
  experiencePressure: "经验压迫感",
  controlBoundary: "控制欲与边界感缺失",
  cognitiveRigidity: "认知僵化",
  empathyDeficit: "共情与倾听不足",
  judgmentalSuperiority: "评价欲与优越感",
};

export const dimensionExplanations: Record<DimensionKey, string> = {
  experiencePressure:
    "你最明显的登味来源是经验压迫感。你容易觉得自己已经看过这集，所以忍不住提前剧透别人的人生。",
  controlBoundary:
    "你最明显的登味来源是控制欲与边界感缺失。你常常是出于关心，但表达出来容易像是在接管别人的人生。",
  cognitiveRigidity:
    "你最明显的登味来源是认知僵化。面对新东西时，你容易先皱眉，再理解。",
  empathyDeficit:
    "你最明显的登味来源是共情与倾听不足。别人只是想被听见时，你可能已经开始准备解决方案。",
  judgmentalSuperiority:
    "你最明显的登味来源是评价欲与优越感。你不一定真的看不起别人，但你的内心弹幕常常很会打分。",
};

const affinity = (values: Partial<ResultAffinity>): ResultAffinity => ({
  freshHuman: 0,
  occasionalLecturer: 0,
  experienceTeacher: 0,
  boundaryMissing: 0,
  internetFrowner: 0,
  meetingRoomElder: 0,
  forYourOwnGoodController: 0,
  ancestralElder: 0,
  ...values,
});

export const questions: Question[] = [
  {
    id: 1,
    text: "朋友突然说：“我想裸辞，真的一天都不想干了。”你第一反应更像？",
    options: [
      {
        id: "A",
        text: "先别急着辞，我帮你把存款、社保、空窗期成本都算一下。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 1,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          boundaryMissing: 3,
          forYourOwnGoodController: 3,
          meetingRoomElder: 2,
          experienceTeacher: 1,
        }),
        tags: ["理性帮忙", "控制型关心", "风险清单脑"],
      },
      {
        id: "B",
        text: "我懂你，我们老板也XXX，先骂老板五分钟。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["情绪陪伴", "低登", "一起发疯"],
      },
      {
        id: "C",
        text: "辞！人生就是要发疯一次，但你最好先想好下个月房租。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 1,
          cognitiveRigidity: 0,
          empathyDeficit: 1,
          judgmentalSuperiority: 0,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          freshHuman: 2,
          occasionalLecturer: 1,
        }),
        tags: ["开放支持", "轻提醒", "浪漫现实主义"],
      },
      {
        id: "D",
        text: "你这个状态不像想辞职，晚上做决定太冲动了，要不睡一觉再决定。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 3,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          occasionalLecturer: 3,
          meetingRoomElder: 1,
        }),
        tags: ["冷静判断", "轻上价值", "理性压制情绪"],
      },
    ],
  },

  {
    id: 2,
    text: "朋友发小红书：“30岁，我决定重新开始学跳舞。”你的内心弹幕更接近？",
    options: [
      {
        id: "A",
        text: "挺好，人生又不是到点就过期了。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["开放祝福", "低登", "人生不设限"],
      },
      {
        id: "B",
        text: "好羡慕，但我大概率只会收藏不行动。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["自嘲型共鸣", "低登", "收藏型人格"],
      },
      {
        id: "C",
        text: "成年人哪有那么多重新开始，每天下班都累死了。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 4,
          experienceTeacher: 2,
          ancestralElder: 1,
        }),
        tags: ["现实压迫", "认知僵化", "疲惫式否定"],
      },
      {
        id: "D",
        text: "她能坚持多久？我先浅浅观察一下。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 2,
          empathyDeficit: 1,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 2,
          meetingRoomElder: 2,
        }),
        tags: ["旁观审判", "评价欲", "观察员人格"],
      },
    ],
  },

  {
    id: 3,
    text: "别人向你吐槽工作很累，但你明显觉得TA的问题其实能解决，你更可能？",
    options: [
      {
        id: "A",
        text: "先陪TA骂一会儿，等TA情绪下来再说。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["情绪优先", "低登", "会接情绪"],
      },
      {
        id: "B",
        text: "忍不住开始拆问题：“你这个其实分三步。”",
        scores: {
          experiencePressure: 2,
          controlBoundary: 4,
          cognitiveRigidity: 1,
          empathyDeficit: 3,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          meetingRoomElder: 4,
          occasionalLecturer: 2,
          forYourOwnGoodController: 1,
        }),
        tags: ["解决问题上瘾", "控制型建议", "小型咨询会"],
      },
      {
        id: "C",
        text: "说一句：“你现在是想要建议，还是只想吐槽？”",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["边界感优秀", "低登", "体面高分"],
      },
      {
        id: "D",
        text: "心里想：“这不是累，是方法不对。”",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 2,
          empathyDeficit: 4,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          ancestralElder: 2,
          experienceTeacher: 1,
        }),
        tags: ["共情不足", "评价欲", "方法论压迫"],
      },
    ],
  },

  {
    id: 4,
    text: "当你完全看不懂一个网络热梗时，你的真实反应是？",
    options: [
      {
        id: "A",
        text: "我不懂，但看大家开心也挺好。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["开放旁观", "低登", "不扫兴"],
      },
      {
        id: "B",
        text: "这又是什么互联网黑话，我真的老了吗？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          occasionalLecturer: 2,
          freshHuman: 1,
        }),
        tags: ["自嘲型困惑", "轻微断网", "低登"],
      },
      {
        id: "C",
        text: "现在的梗是不是越来越没营养了。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 0,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 4,
          ancestralElder: 2,
        }),
        tags: ["皱眉审判", "认知僵化", "互联网老派"],
      },
      {
        id: "D",
        text: "我会去搜一下，不然显得我像刚通网。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["主动学习", "开放性高", "怕断网"],
      },
    ],
  },

  {
    id: 5,
    text: "你给朋友提了建议，对方完全没采纳，你心里更接近？",
    options: [
      {
        id: "A",
        text: "行吧，TA的人生TA自己体验。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 1,
          judgmentalSuperiority: 1,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["尊重边界", "轻微抽离", "低登"],
      },
      {
        id: "B",
        text: "我尊重，但我真的已经预判到结局了。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          experienceTeacher: 4,
          ancestralElder: 2,
        }),
        tags: ["预判大师", "经验压迫", "优越感"],
      },
      {
        id: "C",
        text: "那我下次就不说了，反正说了也不听。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 3,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          forYourOwnGoodController: 3,
          experienceTeacher: 2,
        }),
        tags: ["防御反弹", "控制欲受挫", "冷处理"],
      },
      {
        id: "D",
        text: "可能我刚才说得太像命令了。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["自省能力", "低登", "体面高分"],
      },
    ],
  },

  {
    id: 6,
    text: "聚会上有人穿得很夸张，你的第一反应更像？",
    options: [
      {
        id: "A",
        text: "好有生命力，虽然我不敢。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["欣赏差异", "低登", "生命力观察"],
      },
      {
        id: "B",
        text: "TA是真的开心，还是想被看见？",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 2,
          meetingRoomElder: 2,
        }),
        tags: ["动机审判", "评价欲", "心理分析过度"],
      },
      {
        id: "C",
        text: "我不理解，但我尊重这种热闹。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["保留意见", "尊重差异", "低登"],
      },
      {
        id: "D",
        text: "这套如果发小红书，评论区应该会很精彩。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 1,
          judgmentalSuperiority: 3,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          occasionalLecturer: 2,
          internetFrowner: 1,
        }),
        tags: ["娱乐旁观", "轻微评价欲", "评论区脑"],
      },
    ],
  },

  {
    id: 7,
    text: "如果你是前辈，听到新人提出一个很新的方案，你最可能？",
    options: [
      {
        id: "A",
        text: "先问：“你这个方案最想解决哪个问题？”",
        scores: {
          experiencePressure: 0,
          controlBoundary: 1,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 3,
          meetingRoomElder: 1,
        }),
        tags: ["启发式提问", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "立刻想到：“这个坑我们以前踩过。”",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 1,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          experienceTeacher: 4,
          ancestralElder: 2,
        }),
        tags: ["经验压迫", "历史包袱", "踩坑记忆"],
      },
      {
        id: "C",
        text: "让TA讲完，但脑子里已经在做风险评估。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 3,
          cognitiveRigidity: 2,
          empathyDeficit: 1,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          boundaryMissing: 2,
        }),
        tags: ["风险雷达", "控制型理性", "谨慎前辈"],
      },
      {
        id: "D",
        text: "觉得新鲜，甚至有点想看看会不会翻车。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 1,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          occasionalLecturer: 2,
          freshHuman: 1,
        }),
        tags: ["开放旁观", "吃瓜型支持", "低登"],
      },
    ],
  },

  {
    id: 8,
    text: "别人和你观点不同，而且还挺自信，你内心OS更像？",
    options: [
      {
        id: "A",
        text: "TA的经历可能和我不一样。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["观点采择", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "这个逻辑漏洞有点明显，我快忍不住了。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          meetingRoomElder: 4,
        }),
        tags: ["逻辑纠察", "评价欲", "对话支配"],
      },
      {
        id: "C",
        text: "算了，不争，等现实教TA做人。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 1,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          ancestralElder: 4,
          experienceTeacher: 3,
        }),
        tags: ["现实会教育你", "经验压迫", "优越感"],
      },
      {
        id: "D",
        text: "我想问两个问题，看看TA到底怎么想。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 1,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 1,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 2,
          meetingRoomElder: 1,
        }),
        tags: ["理性追问", "低登", "探究型对话"],
      },
    ],
  },

  {
    id: 9,
    text: "朋友买了一个你完全不理解的高价香薰，你嘴上说“挺好看的”，心里更可能想？",
    options: [
      {
        id: "A",
        text: "虽然我不懂，但TA开心应该就值。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["尊重消费", "低登", "开心就值"],
      },
      {
        id: "B",
        text: "这价格……香的是空气还是我的三观？",
        scores: {
          experiencePressure: 1,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 1,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 2,
          occasionalLecturer: 2,
        }),
        tags: ["幽默吐槽", "评价欲", "价格震撼"],
      },
      {
        id: "C",
        text: "有钱人的精神世界我先不评价。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 0,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 2,
          ancestralElder: 2,
          meetingRoomElder: 1,
        }),
        tags: ["阴阳怪气", "优越感", "消费审判"],
      },
      {
        id: "D",
        text: "我想研究一下，它到底贵在哪里。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 1,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["研究型好奇", "开放性高", "价格侦探"],
      },
    ],
  },

  {
    id: 10,
    text: "朋友分手后找你聊天，你最忍不住想说的是？",
    options: [
      {
        id: "A",
        text: "你现在肯定很难受，我先陪你待会儿。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["情绪陪伴", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "其实我之前就觉得你们不太合适。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 3,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          experienceTeacher: 3,
          ancestralElder: 2,
        }),
        tags: ["事后诸葛", "评价欲", "经验压迫"],
      },
      {
        id: "C",
        text: "你下次真的要看清楚，不要又心软。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 3,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          forYourOwnGoodController: 4,
          experienceTeacher: 2,
        }),
        tags: ["控制型关心", "经验压迫", "恋爱指导员"],
      },
      {
        id: "D",
        text: "先别复盘了，今晚你先好好睡一觉。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 1,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 2,
          occasionalLecturer: 1,
        }),
        tags: ["温和照顾", "情绪陪伴", "低登"],
      },
    ],
  },

  {
    id: 11,
    text: "你看到年轻人用很新的方式表达自己，比如抽象梗、发疯文学、怪图，你会？",
    options: [
      {
        id: "A",
        text: "看不懂，但他们好像获得了某种快乐。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["开放旁观", "低登", "不扫兴"],
      },
      {
        id: "B",
        text: "我能理解一点，这可能是压力出口。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["理解文化", "低登", "体面高分"],
      },
      {
        id: "C",
        text: "这届互联网精神状态看起来不太稳定。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 0,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 4,
        }),
        tags: ["皱眉观察", "认知僵化", "轻微审判"],
      },
      {
        id: "D",
        text: "我会默默收藏几个，防止自己彻底断网。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["主动学习", "开放性高", "续网成功"],
      },
    ],
  },

  {
    id: 12,
    text: "别人做了一个你不认同的人生选择，你最真实的反应是？",
    options: [
      {
        id: "A",
        text: "我会担心，但这是TA的人生。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["尊重边界", "低登", "担心但不接管"],
      },
      {
        id: "B",
        text: "我会忍不住把风险都讲清楚。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 5,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          forYourOwnGoodController: 3,
          boundaryMissing: 3,
        }),
        tags: ["风险提示员", "控制欲", "为你好"],
      },
      {
        id: "C",
        text: "我觉得TA现在听不进去，之后就懂了。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 1,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          experienceTeacher: 3,
          ancestralElder: 3,
        }),
        tags: ["经验压迫", "优越感", "时间会证明我"],
      },
      {
        id: "D",
        text: "我会问TA：你需要我支持你，还是帮你分析？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["边界感优秀", "低登", "体面高分"],
      },
    ],
  },

  {
    id: 13,
    text: "群里有人突然抛出一个你觉得不靠谱的新想法，大家还都挺兴奋，你更可能？",
    options: [
      {
        id: "A",
        text: "先不泼冷水，等TA讲完再看有没有可行点。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["延迟判断", "低登", "不扫兴"],
      },
      {
        id: "B",
        text: "忍不住问：“这个东西解决什么问题？”",
        scores: {
          experiencePressure: 1,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 1,
          judgmentalSuperiority: 2,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          occasionalLecturer: 2,
        }),
        tags: ["理性追问", "轻压迫", "问题意识"],
      },
      {
        id: "C",
        text: "直接在心里默念：又来了，又一个改变世界的。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 0,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 4,
          ancestralElder: 2,
        }),
        tags: ["冷嘲热讽", "认知僵化", "评价欲"],
      },
      {
        id: "D",
        text: "认真听，但已经开始脑内列风险清单。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 1,
          judgmentalSuperiority: 2,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          boundaryMissing: 2,
        }),
        tags: ["风险雷达", "控制型理性", "脑内评审会"],
      },
    ],
  },

  {
    id: 14,
    text: "当别人只是想吐槽，你却觉得问题很好解决时，你会？",
    options: [
      {
        id: "A",
        text: "先忍住，毕竟TA可能只是需要被听见。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["会接情绪", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "等TA说完，给一个“我觉得你可以这样”的方案。",
        scores: {
          experiencePressure: 1,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 1,
          judgmentalSuperiority: 1,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          occasionalLecturer: 4,
        }),
        tags: ["温和建议", "轻度解决欲", "还算克制"],
      },
      {
        id: "C",
        text: "直接给方案，不然TA明天还会继续崩。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 5,
          cognitiveRigidity: 2,
          empathyDeficit: 4,
          judgmentalSuperiority: 2,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          forYourOwnGoodController: 4,
          meetingRoomElder: 2,
        }),
        tags: ["解决问题上瘾", "控制欲", "共情不足"],
      },
      {
        id: "D",
        text: "心里想：“怎么会有人卡在这么简单的问题上？”",
        scores: {
          experiencePressure: 3,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 5,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          ancestralElder: 3,
          meetingRoomElder: 3,
        }),
        tags: ["评价欲", "共情不足", "智商审判"],
      },
    ],
  },

  {
    id: 15,
    text: "你最受不了哪种人？",
    options: [
      {
        id: "A",
        text: "明明有坑还非要自己踩的人。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 4,
          cognitiveRigidity: 2,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          forYourOwnGoodController: 3,
          experienceTeacher: 3,
        }),
        tags: ["经验压迫", "控制欲", "替人着急"],
      },
      {
        id: "B",
        text: "总是站在高处评价别人的人。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["反评价欲", "低登", "体面高分"],
      },
      {
        id: "C",
        text: "把建议当命令的人。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 3,
        }),
        tags: ["边界感意识", "低登", "体面高分"],
      },
      {
        id: "D",
        text: "情绪一上来就完全不讲逻辑的人。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 1,
          cognitiveRigidity: 2,
          empathyDeficit: 4,
          judgmentalSuperiority: 3,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          occasionalLecturer: 2,
        }),
        tags: ["理性压迫", "共情不足", "情绪不耐受"],
      },
    ],
  },

  {
    id: 16,
    text: "朋友换了一个你不看好的行业，你更可能？",
    options: [
      {
        id: "A",
        text: "你肯定想了很久吧，为什么想换？",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["开放倾听", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "这个行业水很深，我得提醒你几件事。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 4,
          cognitiveRigidity: 3,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          experienceTeacher: 3,
          forYourOwnGoodController: 3,
        }),
        tags: ["经验压迫", "控制型关心", "水很深文学"],
      },
      {
        id: "C",
        text: "我不打击你，但你可能把它想简单了。",
        scores: {
          experiencePressure: 4,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 2,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          experienceTeacher: 3,
          internetFrowner: 2,
        }),
        tags: ["成熟压迫", "认知僵化", "轻打击"],
      },
      {
        id: "D",
        text: "虽然我不看好，但我有点期待TA打我脸。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 1,
          empathyDeficit: 0,
          judgmentalSuperiority: 1,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 2,
          occasionalLecturer: 1,
        }),
        tags: ["开放旁观", "低登", "愿意被打脸"],
      },
    ],
  },

  {
    id: 17,
    text: "当你发现自己不理解某个流行趋势时，你更像？",
    options: [
      {
        id: "A",
        text: "我不理解，但这不妨碍别人喜欢。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 3,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["尊重差异", "低登", "不扫兴"],
      },
      {
        id: "B",
        text: "我研究一下它为什么会火。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 2,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["开放研究", "低登", "趋势观察员"],
      },
      {
        id: "C",
        text: "它现在越火，我越觉得世界变陌生了。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 0,
          cognitiveRigidity: 5,
          empathyDeficit: 2,
          judgmentalSuperiority: 3,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 4,
        }),
        tags: ["时代隔阂", "认知僵化", "互联网皱眉"],
      },
      {
        id: "D",
        text: "我先观望，过一阵就过气了。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 0,
          cognitiveRigidity: 3,
          empathyDeficit: 1,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          internetFrowner: 3,
          ancestralElder: 2,
        }),
        tags: ["旁观审判", "评价欲", "过气预言家"],
      },
    ],
  },

  {
    id: 18,
    text: "如果朋友说你“有点爱说教”，你第一反应更接近？",
    options: [
      {
        id: "A",
        text: "完了，我是不是又把建议说成了领导讲话。",
        scores: {
          experiencePressure: 0,
          controlBoundary: 0,
          cognitiveRigidity: 0,
          empathyDeficit: 0,
          judgmentalSuperiority: 0,
          socialDesirability: 4,
        },
        resultAffinity: affinity({
          freshHuman: 4,
        }),
        tags: ["自省能力", "低登", "体面高分"],
      },
      {
        id: "B",
        text: "我只是表达得太认真，不是想给TA压力。",
        scores: {
          experiencePressure: 2,
          controlBoundary: 2,
          cognitiveRigidity: 1,
          empathyDeficit: 2,
          judgmentalSuperiority: 1,
          socialDesirability: 1,
        },
        resultAffinity: affinity({
          occasionalLecturer: 4,
        }),
        tags: ["轻度防御", "认真型压迫", "解释欲"],
      },
      {
        id: "C",
        text: "现在大家也太怕被建议了吧。",
        scores: {
          experiencePressure: 3,
          controlBoundary: 2,
          cognitiveRigidity: 4,
          empathyDeficit: 3,
          judgmentalSuperiority: 4,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          meetingRoomElder: 3,
          internetFrowner: 2,
        }),
        tags: ["认知僵化", "评价欲", "建议执念"],
      },
      {
        id: "D",
        text: "那我以后少说，反正TA自己撞墙就懂了。",
        scores: {
          experiencePressure: 5,
          controlBoundary: 2,
          cognitiveRigidity: 3,
          empathyDeficit: 3,
          judgmentalSuperiority: 5,
          socialDesirability: 0,
        },
        resultAffinity: affinity({
          ancestralElder: 4,
          experienceTeacher: 3,
        }),
        tags: ["经验压迫", "优越感", "现实会教育你"],
      },
    ],
  },
];
