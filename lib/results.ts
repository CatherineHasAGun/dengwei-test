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
    scoreRange: [0, 22],
    title: "互联网清风，情绪有边界感的人类",
    subtitle: "低登味表达者",
    description:
      "你的低登感来自于：你能把“我不理解”和“我不尊重”分开。你不急着把自己的经验塞进别人的人生里，也不太喜欢替别人做人生项目管理。",
    dengSource:
      "你最大的优势是边界感和接情绪能力。别人只是表达时，你通常不会急着指导、复盘或审判。",
    roast: "目前还是一个愿意听人说话的人类，谢天谢地。",
    improvement:
      "继续保持。不理解别人时，先允许差异；想给建议时，先问对方需不需要。",
    ...shareCopies(
      "清爽无登型",
      "我测出来是【清爽无登型】，系统说我目前还是一个愿意听人说话的人类，谢天谢地。",
    ),
  },
  occasionalLecturer: {
    id: "occasionalLecturer",
    name: "偶尔上价值型",
    scoreRange: [23, 38],
    title: "本来想共情，结果开始讲道理",
    subtitle: "轻微讲道理预警",
    description:
      "你的登味通常不重，但会在“别人情绪很满、你觉得问题很好解决”的时候冒出来。你不是想压人，只是太想把事情讲明白。",
    dengSource:
      "你的登味来源是轻度建议欲和理性压制情绪。你容易把安慰变成小型讲座，把聊天变成温和版复盘会。",
    roast: "你离老登不远，离闭嘴也只差一次深呼吸。",
    improvement:
      "当别人吐槽时，先别急着解决问题。可以先问：你想听建议，还是只想让我陪你骂两句？",
    ...shareCopies(
      "偶尔上价值型",
      "我测出来是【偶尔上价值型】，系统说我本来想共情，结果开始讲道理。",
    ),
  },
  experienceTeacher: {
    id: "experienceTeacher",
    name: "经验小老师型",
    scoreRange: [39, 58],
    title: "人生导师预备役",
    subtitle: "经验有用，但别太用力",
    description:
      "你的登味主要来自“预判感”。你常常觉得自己已经看过这集，所以忍不住想提前剧透别人的人生。",
    dengSource:
      "你容易用过往经验判断别人当下的选择。经验本身没问题，但当它变成“我早就知道”的姿态时，登味就开始冒出来了。",
    roast: "你不是老登，你只是有时候像刚开完会的老登。",
    improvement:
      "把“我以前也是这样”换成“你现在是怎么想的”。经验可以分享，但不要变成标准答案。",
    ...shareCopies(
      "经验小老师型",
      "我测出来是【经验小老师型】，系统说我离“我补充两点”只差一次会议。",
    ),
  },
  boundaryMissing: {
    id: "boundaryMissing",
    name: "边界感离家出走型",
    scoreRange: [39, 58],
    title: "热心是热心，就是有点像远程操控人生",
    subtitle: "建议容易长出方向盘",
    description:
      "你的登味来自“关心过载”。你容易把别人的问题接管成自己的项目，把建议说成执行方案。",
    dengSource:
      "你很容易进入帮人规划、算风险、列步骤的模式。问题是：别人可能只是想被理解，不一定想被托管人生。",
    roast: "你的关心有时会不小心长出方向盘。",
    improvement:
      "把“你应该”替换成“你愿意听一个建议吗？”这是降低登味最有效的一句话。",
    ...shareCopies(
      "边界感离家出走型",
      "我测出来是【边界感离家出走型】，系统说我的关心有时会长出方向盘。",
    ),
  },
  internetFrowner: {
    id: "internetFrowner",
    name: "互联网皱眉型",
    scoreRange: [39, 75],
    title: "看什么都想说一句：这正常吗？",
    subtitle: "开放性加载中",
    description:
      "你的登味来自“看不懂就想皱眉”。面对新梗、新趋势、新表达，你的第一反应容易是审判，而不是好奇。",
    dengSource:
      "你不是讨厌互联网，你只是容易把“不理解”翻译成“没营养”“奇怪”“迟早过气”。",
    roast: "你的浏览器还很年轻，但你的眉头已经退休。",
    improvement: "遇到不理解的新东西时，先问一句：它为什么会被别人喜欢？",
    ...shareCopies(
      "互联网皱眉型",
      "我测出来是【互联网皱眉型】，看到新梗第一反应：这又是什么东西？",
    ),
  },
  meetingRoomElder: {
    id: "meetingRoomElder",
    name: "会议室老登型",
    scoreRange: [59, 88],
    title: "一句“我补充两点”让全场安静",
    subtitle: "灵魂随时准备开会",
    description:
      "你的登味来自“随时准备开会的灵魂”。别人只是聊天，你已经开始拆问题、列风险、做复盘、提优化建议。",
    dengSource:
      "你有观点、有经验、有判断力，但容易输出过载。你不是不能分析，只是生活里不是每句话都需要形成会议纪要。",
    roast: "你的登味不是来自年龄，是来自你随时准备开会的灵魂。",
    improvement: "下次想说“我补充两点”之前，先确认对方是不是真的想听。",
    ...shareCopies(
      "会议室老登型",
      "救命，我测出来是【会议室老登型】，系统说我的灵魂随时准备开会。",
    ),
  },
  forYourOwnGoodController: {
    id: "forYourOwnGoodController",
    name: "为你好控制型",
    scoreRange: [59, 88],
    title: "嘴上是建议，听起来像圣旨",
    subtitle: "为你好浓度偏高",
    description:
      "你的登味来自“我都是为你好”的方向盘。你确实在意别人，但你的关心有时会让别人感觉人生被远程操控。",
    dengSource:
      "你最容易在亲密关系、朋友关系和前后辈关系里出现控制型关心。你会把风险看得很清楚，也会忍不住替别人踩刹车。",
    roast: "你的“为你好”浓度有点高，建议加水稀释。",
    improvement: "练习一句话：这是我的看法，但你不照做也完全可以。",
    ...shareCopies(
      "为你好控制型",
      "我测出来是【为你好控制型】，系统说我的“为你好”浓度有点高，建议加水稀释。",
    ),
  },
  ancestralElder: {
    id: "ancestralElder",
    name: "祖传登味型",
    scoreRange: [89, 100],
    title: "不是人变老了，是表达方式先退休了",
    subtitle: "高浓度表达方式包浆",
    description:
      "你的登味是复合型的：经验压迫、控制欲、认知僵化、评价欲一起出现。你不只是爱建议，你是容易把自己的世界观当成人生标准答案。",
    dengSource:
      "你的典型模式是：我早就知道、现实会教育你、你之后就懂了。你可能很能干，但你的表达方式容易让别人感到被教育、被审判、被管理。",
    roast: "你的登味已经不是气味，是非物质文化遗产。",
    improvement:
      "好消息：登味不是命运，是一种可以重新训练的沟通习惯。坏消息：你得先承认自己真的有点爱指导人生。",
    ...shareCopies(
      "祖传登味型",
      "我测出来是【祖传登味型】，系统说我的登味已经不是气味，是非物质文化遗产。",
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
        "遇到不理解的新东西时，先问“它为什么会被别人喜欢”，不要急着否定。",
    },
    empathyDeficit: {
      keyword: "先接情绪，再讲道理",
      advice: "别人倾诉时，先说“听起来真的挺累的”，再决定是否给建议。",
    },
    judgmentalSuperiority: {
      keyword: "少点评，多观察",
      advice:
        "把“这不对”换成“这和我的习惯不一样”。差异不等于错误。",
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
