import type { DimensionKey } from "./questions";

export type ResultTypeId =
  | "freshHuman"
  | "occasionalLecturer"
  | "experienceTeacher"
  | "boundaryMissing"
  | "internetFrowner"
  | "meetingRoomElder"
  | "forYourOwnGoodController"
  | "ancestralElder";

export type ResultType = {
  id: ResultTypeId;
  name: string;
  scoreRange: [number, number];
  title: string;
  subtitle: string;
  description: string;
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

export const resultTypes: Record<ResultTypeId, ResultType> = {
  freshHuman: {
    id: "freshHuman",
    name: "清爽无登型",
    scoreRange: [0, 20],
    title: "互联网清风，情绪有边界感的人类",
    subtitle: "低登味表达者",
    description:
      "你很少用“我是为你好”包装控制，也不太喜欢对别人的人生指指点点。你最大的优点是：允许别人和你不一样。",
    roast: "目前还是一个愿意听人说话的人类，谢天谢地。",
    improvement:
      "继续保持。你的核心优势是尊重边界、允许差异、不会急着上价值。",
    xiaohongshuCopy:
      "我测出来是【清爽无登型】，登味浓度居然很低。目前还是一个愿意听人说话的人类，谢天谢地。",
    wechatCopy:
      "我测出来是清爽无登型，登味浓度很低。你也测测，我想看看群里谁最登。",
    weiboCopy: "刚测了一下登味浓度，我是清爽无登型。看来我的表达方式还没退休。",
  },
  occasionalLecturer: {
    id: "occasionalLecturer",
    name: "偶尔上价值型",
    scoreRange: [21, 40],
    title: "本来想共情，结果开始讲道理",
    subtitle: "轻微讲道理预警",
    description:
      "你不是故意压迫别人，只是有时候太想帮忙，于是忍不住把安慰变成了小型讲座。",
    roast: "你离老登不远，离闭嘴也只差一次深呼吸。",
    improvement:
      "当别人吐槽时，先别急着解决问题。你可以先问：你想听建议，还是只想让我陪你骂两句？",
    xiaohongshuCopy:
      "救命，我测出来是【偶尔上价值型】。系统说我本来想共情，结果开始讲道理。",
    wechatCopy: "我测出来是偶尔上价值型，看来我有时候确实太爱讲道理了。",
    weiboCopy: "刚测了登味浓度：偶尔上价值型。不是我老了，是我嘴快。",
  },
  experienceTeacher: {
    id: "experienceTeacher",
    name: "经验小老师型",
    scoreRange: [41, 60],
    title: "人生导师预备役",
    subtitle: "经验有用，但别太用力",
    description:
      "你很擅长从经验里总结规律，但偶尔会忘记：你的经验不一定是别人的标准答案。",
    roast: "你不是老登，你只是有时候像刚开完会的老登。",
    improvement:
      "把“我以前也是这样”换成“你现在是怎么想的”。经验可以分享，但不要变成压迫。",
    xiaohongshuCopy:
      "我测出来是【经验小老师型】，系统说我离“我补充两点”只差一次会议。",
    wechatCopy: "我测出来是经验小老师型，怪不得我有时候像刚开完会。",
    weiboCopy: "登味测试结果：经验小老师型。不是年龄大，是经验有点包浆。",
  },
  boundaryMissing: {
    id: "boundaryMissing",
    name: "边界感离家出走型",
    scoreRange: [41, 60],
    title: "热心是热心，就是有点像远程操控人生",
    subtitle: "建议容易长出方向盘",
    description:
      "你关心别人是真的，但你容易把“建议”说成“指令”。别人不采纳时，你会有一种“这届朋友不好带”的失落感。",
    roast: "你的关心有时会不小心长出方向盘。",
    improvement:
      "把“你应该”替换成“你愿意听一个建议吗？”这是降低登味最有效的一句话。",
    xiaohongshuCopy:
      "我测出来是【边界感离家出走型】。系统说我的关心有时会长出方向盘，笑不活了。",
    wechatCopy: "我测出来边界感离家出走型，你们觉得准吗？",
    weiboCopy: "登味测试：边界感离家出走型。建议先问别人需不需要建议。",
  },
  internetFrowner: {
    id: "internetFrowner",
    name: "互联网皱眉型",
    scoreRange: [61, 75],
    title: "看什么都想说一句：这正常吗？",
    subtitle: "开放性加载中",
    description:
      "你对新鲜事物的第一反应经常不是好奇，而是审判。你不一定讨厌年轻文化，但你很容易先把不理解当成不合理。",
    roast: "你的浏览器还很年轻，但你的眉头已经退休。",
    improvement:
      "遇到不理解的新东西时，先问一句：它为什么会被别人喜欢？",
    xiaohongshuCopy:
      "我测出来是【互联网皱眉型】。看到新梗第一反应：这又是什么东西？系统建议我少皱眉，多搜索。",
    wechatCopy: "我测出来是互联网皱眉型，好像确实经常看不懂新东西。",
    weiboCopy: "刚测了登味浓度：互联网皱眉型。不是网速慢，是我的开放性加载失败。",
  },
  meetingRoomElder: {
    id: "meetingRoomElder",
    name: "会议室老登型",
    scoreRange: [61, 75],
    title: "一句“我补充两点”让全场安静",
    subtitle: "灵魂随时准备开会",
    description:
      "你有观点、有经验、有判断力，但问题是：你有时候太爱输出了。别人可能只是想表达，你已经开始总结、归因、布置下一步。",
    roast: "你的登味不是来自年龄，是来自你随时准备开会的灵魂。",
    improvement: "下次想说“我补充两点”之前，先确认对方是不是真的想听。",
    xiaohongshuCopy:
      "救命，我测出来是【会议室老登型】，系统说我的灵魂随时准备开会。",
    wechatCopy: "我测出来是会议室老登型，你们来测，我怀疑群里还有更登的。",
    weiboCopy: "登味测试结果：会议室老登型。不是我老了，是我随时准备开会。",
  },
  forYourOwnGoodController: {
    id: "forYourOwnGoodController",
    name: "为你好控制型",
    scoreRange: [76, 88],
    title: "嘴上是建议，听起来像圣旨",
    subtitle: "为你好浓度偏高",
    description:
      "你很在意别人是否走“正确道路”，也容易把自己的标准当成普世真理。你不是不善良，只是善良里混进了一点控制欲。",
    roast: "你的“为你好”浓度有点高，建议加水稀释。",
    improvement:
      "你需要练习一句话：这是我的看法，但你不照做也完全可以。",
    xiaohongshuCopy:
      "我测出来是【为你好控制型】，系统说我的“为你好”浓度有点高，建议加水稀释。",
    wechatCopy: "我测出来是为你好控制型，看来我以后说建议之前得先打申请。",
    weiboCopy: "登味测试：为你好控制型。关心是真的，方向盘也是真的。",
  },
  ancestralElder: {
    id: "ancestralElder",
    name: "祖传登味型",
    scoreRange: [89, 100],
    title: "不是人变老了，是表达方式先退休了",
    subtitle: "高浓度表达方式包浆",
    description:
      "你容易站在高位点评别人，也容易用经验、身份、年龄、阅历压人。你可能很能干，但你的表达方式会让别人感到被教育、被审判、被管理。",
    roast: "你的登味已经不是气味，是非物质文化遗产。",
    improvement:
      "好消息：登味不是命运，是一种可以被重新训练的沟通习惯。坏消息：你得先承认自己真的有点爱指导人生。",
    xiaohongshuCopy:
      "我测出来是【祖传登味型】。系统说我的登味已经不是气味，是非物质文化遗产。",
    wechatCopy: "我测出来是祖传登味型，不服，建议你也测一下。",
    weiboCopy: "登味测试结果：祖传登味型。不是人老了，是表达方式先退休了。",
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

export function getResultTypeId(
  totalScore: number,
  dominantDimension: DimensionKey,
): ResultTypeId {
  if (totalScore <= 20) return "freshHuman";
  if (totalScore <= 40) return "occasionalLecturer";

  if (totalScore <= 60) {
    if (dominantDimension === "experiencePressure") return "experienceTeacher";
    if (dominantDimension === "controlBoundary") return "boundaryMissing";
    return "experienceTeacher";
  }

  if (totalScore <= 75) {
    if (dominantDimension === "cognitiveRigidity") return "internetFrowner";
    if (dominantDimension === "judgmentalSuperiority") return "meetingRoomElder";
    if (dominantDimension === "empathyDeficit") return "occasionalLecturer";
    return "meetingRoomElder";
  }

  if (totalScore <= 88) return "forYourOwnGoodController";

  return "ancestralElder";
}
