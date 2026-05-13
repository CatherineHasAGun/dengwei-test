import type { DimensionKey, ResultTypeId } from "@/types/test";

export type ResultType = {
  id: ResultTypeId;
  name: string;
  scoreRange: [number, number];
  title: string;
  subtitle: string;
  description: string;
  dengSource: string;
  roast: string;
  improvement: string;
  xiaohongshuCopy: string;
  wechatCopy: string;
  weiboCopy: string;
};

export type DimensionImprovement = {
  keyword: string;
  advice: string;
};

export type SocialDesirabilityLabel = {
  title: string;
  description: string;
};

const shareCopies = (name: string, shareText: string) => ({
  xiaohongshuCopy: shareText,
  wechatCopy: `我测出来是${name}。你也测测，我想看看谁的表达方式更包浆。`,
  weiboCopy: `登味浓度测试结果：${name}。${shareText}`,
});

export const resultTypes: Record<ResultTypeId, ResultType> = {
  freshHuman: {
    id: "freshHuman",
    name: "清爽无登型",
    scoreRange: [0, 20],
    title: "能听人说完话，已经赢过很多人",
    subtitle: "低登味友好型",
    description:
      "你比较能把“我不理解”和“我尊重你”分开。别人表达情绪、选择生活方式、尝试新东西时，你通常不会急着审判或接管。",
    dengSource:
      "你的优势是边界感、倾听能力和开放度。你不太会把自己的经验包装成别人必须执行的人生 SOP。",
    roast: "目前还是一个愿意听人说话的人类，互联网需要你。",
    improvement:
      "继续保持。给建议前先确认对方需不需要，尊重差异这件事很高级。",
    ...shareCopies(
      "清爽无登型",
      "我测出来是【清爽无登型】，系统说我目前还是一个愿意听人说话的人类，互联网需要我。",
    ),
  },
  occasionalLecturer: {
    id: "occasionalLecturer",
    name: "偶尔上价值型",
    scoreRange: [21, 40],
    title: "本来想共情，嘴比心先开始讲道理",
    subtitle: "轻微说教预警",
    description:
      "你的登味不算重，更多是“想帮忙但姿势有点硬”。当别人只是想吐槽时，你偶尔会忍不住分析、总结、给方向。",
    dengSource:
      "你的登味来源是轻度建议欲和理性抢跑。不是坏心，但容易把陪伴聊成一场低配 TED Talk。",
    roast: "你不是爹味很重，你只是偶尔把聊天开成了小课堂。",
    improvement:
      "别人吐槽时，先接住情绪。可以问：你想听建议，还是只想让我陪你骂两句？",
    ...shareCopies(
      "偶尔上价值型",
      "我测出来是【偶尔上价值型】，本来想共情，嘴比心先开始讲道理。",
    ),
  },
  experienceTeacher: {
    id: "experienceTeacher",
    name: "经验小老师型",
    scoreRange: [41, 75],
    title: "“我以前也这样”含量偏高",
    subtitle: "经验参考，不是人生标准答案",
    description:
      "你的表达里有明显的经验滤镜。你常常不是不尊重别人，而是太容易觉得自己已经看过这集，想提前帮对方避坑。",
    dengSource:
      "经验本身很有价值，但当它变成“我早就知道”“你以后就懂了”，别人听到的就不是帮助，而是被剧透人生。",
    roast: "你不是不让人试错，你只是很想把弹幕开到最大声。",
    improvement:
      "把“我以前也是这样”换成“你现在是怎么想的”。先理解处境，再分享经验。",
    ...shareCopies(
      "经验小老师型",
      "我测出来是【经验小老师型】，系统说我不是不能给建议，是弹幕声音有点大。",
    ),
  },
  boundaryMissing: {
    id: "boundaryMissing",
    name: "热心方向盘型",
    scoreRange: [41, 75],
    title: "关心是真的，方向盘也是真的",
    subtitle: "边界感需要充电",
    description:
      "你的关心浓度很高，但表达方式容易越界。你会把别人的问题当成自己的待办，把建议说得像执行方案。",
    dengSource:
      "你最容易在关系亲近时启动“我帮你规划一下”。问题是：别人可能只是需要支持，不一定需要被托管人生。",
    roast: "你的爱很满，但偶尔像开了远程驾驶。",
    improvement:
      "把“你应该”换成“你愿意听一个建议吗？”边界感不是冷漠，是尊重对方的选择权。",
    ...shareCopies(
      "热心方向盘型",
      "我测出来是【热心方向盘型】，系统说我的关心是真的，方向盘也是真的。",
    ),
  },
  internetFrowner: {
    id: "internetFrowner",
    name: "互联网皱眉型",
    scoreRange: [41, 75],
    title: "看不懂可以，先别急着判死刑",
    subtitle: "开放性正在缓冲",
    description:
      "你的登味来自“看不懂就先皱眉”。面对新梗、新趋势、新表达，你容易把陌生感翻译成“没营养”“奇怪”“迟早过气”。",
    dengSource:
      "你不是不能有审美和判断，只是判断来得太快时，就会压过好奇心和对差异的尊重。",
    roast: "你的网速不慢，但眉头加载得比页面还快。",
    improvement: "遇到不理解的新东西时，先问一句：它为什么会被别人喜欢？",
    ...shareCopies(
      "互联网皱眉型",
      "我测出来是【互联网皱眉型】，系统说我的网速不慢，但眉头加载得比页面还快。",
    ),
  },
  meetingRoomElder: {
    id: "meetingRoomElder",
    name: "会议室发言型",
    scoreRange: [59, 88],
    title: "一句“我补充两点”，空气突然安静",
    subtitle: "生活不是每句话都要形成纪要",
    description:
      "你的表达很擅长分析和复盘，但也容易输出过载。别人只是聊一下，你可能已经开始拆问题、列风险、提优化路径。",
    dengSource:
      "你有观点、有经验、有判断力，这些都不是问题。问题是聊天不是述职，关系里也不需要时时刻刻开评审会。",
    roast: "你的逻辑很强，但朋友不是你的周报接收人。",
    improvement: "下次想说“我补充两点”之前，先确认对方是不是真的想听。",
    ...shareCopies(
      "会议室发言型",
      "救命，我测出来是【会议室发言型】，系统说朋友不是我的周报接收人。",
    ),
  },
  forYourOwnGoodController: {
    id: "forYourOwnGoodController",
    name: "为你好掌舵型",
    scoreRange: [59, 88],
    title: "嘴上是建议，手上已经握住方向盘",
    subtitle: "为你好浓度偏高",
    description:
      "你的问题不是不关心，而是关心容易变成控制。你看到风险时很难不提醒，也很难接受别人不按你的方案走。",
    dengSource:
      "你最容易在亲密关系、朋友关系和前后辈关系里出现控制型关心。出发点可能是保护，但感受上容易像接管。",
    roast: "你的“为你好”不是假的，但确实有点像后台托管。",
    improvement: "练习一句话：这是我的看法，但你不照做也完全可以。",
    ...shareCopies(
      "为你好掌舵型",
      "我测出来是【为你好掌舵型】，系统说我的“为你好”有点像后台托管。",
    ),
  },
  ancestralElder: {
    id: "ancestralElder",
    name: "高浓度包浆型",
    scoreRange: [89, 100],
    title: "不是年龄的问题，是表达方式太会压人",
    subtitle: "高浓度说教模式",
    description:
      "你的登味是复合型的：经验压迫、控制感、开放度不足、共情缺位和评价欲可能同时在线。你容易把自己的世界观当成标准答案。",
    dengSource:
      "你的典型模式是：我早就知道、现实会教育你、你之后就懂了。你可能很有能力，但表达方式容易让别人感觉被教育、被审判、被管理。",
    roast: "你的表达不是不能有观点，是观点一出场就自带扩音器。",
    improvement:
      "好消息：登味不是命运，是一种可以重新训练的沟通习惯。先从少一点审判、多一点提问开始。",
    ...shareCopies(
      "高浓度包浆型",
      "我测出来是【高浓度包浆型】，系统说我的观点一出场就自带扩音器。",
    ),
  },
};

export const improvementByDimension: Record<DimensionKey, DimensionImprovement> =
  {
    experiencePressure: {
      keyword: "少用经验压人",
      advice:
        "把“我以前也是这样”换成“你现在是怎么想的”。经验可以分享，但不要变成标准答案。",
    },
    controlBoundary: {
      keyword: "先问需不需要建议",
      advice:
        "把“你应该”换成“你愿意听一个建议吗？”这是降低控制感最有效的一句话。",
    },
    cognitiveRigidity: {
      keyword: "先好奇，再判断",
      advice:
        "遇到不理解的新东西时，先问“它为什么会被别人喜欢”。陌生不等于离谱。",
    },
    empathyDeficit: {
      keyword: "先接情绪，再讲道理",
      advice: "别人倾诉时，先说“听起来真的挺累的”。被理解之后，建议才更容易被听见。",
    },
    judgmentalSuperiority: {
      keyword: "少点评，多观察",
      advice:
        "把“这不对”换成“这和我的习惯不一样”。差异不是错误，评价也不必抢跑。",
    },
  };

export function getSocialDesirabilityLabel(
  score: number,
): SocialDesirabilityLabel {
  if (score >= 80) {
    return {
      title: "朋友圈滤镜指数：极高",
      description:
        "你答得非常体面，像一个正在接受年度优秀市民评选的人。你可能真的很清爽，也可能只是很会做人。",
    };
  }

  if (score >= 60) {
    return {
      title: "朋友圈滤镜指数：偏高",
      description:
        "你选择了不少高情商答案，系统怀疑你答题时开了一层社交柔光滤镜。",
    };
  }

  if (score >= 35) {
    return {
      title: "朋友圈滤镜指数：适中",
      description:
        "你既保留了一点体面，也暴露了一点真实，属于比较可信的人类样本。",
    };
  }

  return {
    title: "朋友圈滤镜指数：很低",
    description: "你答得很真实，甚至有点放飞。系统向你的诚实表达敬礼。",
  };
}
