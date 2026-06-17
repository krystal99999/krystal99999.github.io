const talentDimensions = [
  "sharpness",
  "depth",
  "drive",
  "ownership",
  "empathy",
  "planning",
  "orgSense",
  "feedback",
  "taste",
  "reality"
];

const talentNames = {
  sharpness: "抓重点",
  depth: "深度思考",
  drive: "自驱力",
  ownership: "负责到底",
  empathy: "同理心",
  planning: "规划感",
  orgSense: "组织感",
  feedback: "反馈代谢",
  taste: "质感判断",
  reality: "现实感"
};

const workDimensions = [
  "fastPace",
  "ambiguity",
  "collaboration",
  "structure",
  "execution",
  "autonomy",
  "deepWork",
  "calmPace"
];

const workNames = {
  fastPace: "快节奏",
  ambiguity: "变化耐受",
  collaboration: "协作分寸",
  structure: "体系规划",
  execution: "落地推进",
  autonomy: "自主空间",
  deepWork: "深水问题",
  calmPace: "稳定节奏"
};

const dealDimensions = [
  "pay",
  "growth",
  "resume",
  "lowCost",
  "boundary",
  "clearEval",
  "comfort",
  "stability",
  "lowChange"
];

const dealNames = {
  pay: "钱",
  growth: "成长",
  resume: "简历价值",
  lowCost: "低强度",
  boundary: "生活边界",
  clearEval: "评价清晰",
  comfort: "氛围舒服",
  stability: "稳定",
  lowChange: "少变化"
};

const questions = [
  {
    id: "q1",
    title: "老板给你一个新任务，但没说清楚要做到什么程度。你会？",
    options: [
      { text: "先问清楚：到底要解决什么问题。", talentScores: { sharpness: 3, depth: 3, planning: 2 }, workScores: { structure: 3, deepWork: 2 }, dealScores: { clearEval: 2, growth: 1 } },
      { text: "先做个小版本试试。", talentScores: { drive: 3, feedback: 3, ownership: 2 }, workScores: { fastPace: 3, ambiguity: 3, autonomy: 2 }, dealScores: { growth: 2, pay: 1 } },
      { text: "先看看用户是不是真的需要。", talentScores: { empathy: 3, taste: 2, sharpness: 1 }, workScores: { collaboration: 2, autonomy: 1 }, dealScores: { comfort: 1, growth: 1 } },
      { text: "先确认谁负责、怎么算做成。", talentScores: { orgSense: 3, reality: 2, planning: 2 }, workScores: { structure: 3, collaboration: 1 }, dealScores: { clearEval: 3, boundary: 2, stability: 1 } }
    ]
  },
  {
    id: "q2",
    title: "你发现一个问题没人管，但以后可能会出事。你会？",
    options: [
      { text: "先判断这事值不值得我接。", talentScores: { sharpness: 2, depth: 2, reality: 2 }, workScores: { deepWork: 2, autonomy: 1 }, dealScores: { boundary: 2, clearEval: 1 } },
      { text: "直接拉人一起推进。", talentScores: { drive: 3, ownership: 3, feedback: 1 }, workScores: { fastPace: 2, execution: 3, ambiguity: 1 }, dealScores: { growth: 2, pay: 1 } },
      { text: "先看它到底影响了谁。", talentScores: { empathy: 3, reality: 2, taste: 1 }, workScores: { collaboration: 2, execution: 1 }, dealScores: { comfort: 1, clearEval: 1 } },
      { text: "提醒风险，但不随便背锅。", talentScores: { orgSense: 2, planning: 1, reality: 2 }, workScores: { structure: 2, calmPace: 2 }, dealScores: { boundary: 3, stability: 2, lowCost: 1 } }
    ]
  },
  {
    id: "q3",
    title: "一个方案 PPT 做得很漂亮，你第一反应是？",
    options: [
      { text: "先看它说得通不通。", talentScores: { depth: 3, sharpness: 3 }, workScores: { deepWork: 3, structure: 1 }, dealScores: { growth: 2 } },
      { text: "用户真的会喜欢吗？", talentScores: { empathy: 3, taste: 3 }, workScores: { collaboration: 2, deepWork: 1 }, dealScores: { comfort: 1 } },
      { text: "这钱和人力花得值吗？", talentScores: { reality: 3, sharpness: 2, ownership: 1 }, workScores: { execution: 3, fastPace: 1 }, dealScores: { clearEval: 2, pay: 1 } },
      { text: "谁来做、多久做完、出事谁负责？", talentScores: { planning: 3, ownership: 2, orgSense: 1 }, workScores: { structure: 3, execution: 2 }, dealScores: { clearEval: 2, stability: 1 } }
    ]
  },
  {
    id: "q4",
    title: "你认真做的东西被人当众挑刺，你会？",
    options: [
      { text: "对方说得有道理，我就改。", talentScores: { feedback: 3, depth: 2, sharpness: 1 }, workScores: { fastPace: 1, deepWork: 2 }, dealScores: { growth: 3 } },
      { text: "回去补数据和证据。", talentScores: { feedback: 2, ownership: 2, planning: 2 }, workScores: { execution: 2, structure: 2 }, dealScores: { growth: 2, clearEval: 1 } },
      { text: "不爽归不爽，但我能马上调整。", talentScores: { drive: 2, feedback: 3 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { growth: 2, lowCost: -1 } },
      { text: "先判断这是讨论问题，还是有人在表演。", talentScores: { orgSense: 3, reality: 2, sharpness: 1 }, workScores: { collaboration: 2, structure: 1 }, dealScores: { clearEval: 3, boundary: 1 } }
    ]
  },
  {
    id: "q5",
    title: "你最佩服哪种同事？",
    options: [
      { text: "很快就能说清楚问题重点。", talentScores: { sharpness: 3, depth: 2 }, workScores: { deepWork: 2, fastPace: 1 }, dealScores: { growth: 1, resume: 1 } },
      { text: "不用催，自己就能把事往前推。", talentScores: { drive: 3, ownership: 3 }, workScores: { autonomy: 3, execution: 2 }, dealScores: { growth: 2, pay: 1 } },
      { text: "很懂用户，也懂别人怎么想。", talentScores: { empathy: 3, orgSense: 2, taste: 1 }, workScores: { collaboration: 3 }, dealScores: { comfort: 2 } },
      { text: "复杂的人和事里也能把事办成。", talentScores: { planning: 2, orgSense: 3, reality: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { clearEval: 2, resume: 1 } }
    ]
  },
  {
    id: "q6",
    title: "合作部门一直说“这事不归我们”。你会？",
    options: [
      { text: "把大家该负责什么讲清楚。", talentScores: { orgSense: 3, planning: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { clearEval: 2, resume: 1 } },
      { text: "能绕开就绕开，先把事做成。", talentScores: { drive: 3, ownership: 2, reality: 2 }, workScores: { fastPace: 3, execution: 3, autonomy: 1 }, dealScores: { growth: 2, lowCost: -1 } },
      { text: "先听听他们到底担心什么。", talentScores: { empathy: 2, orgSense: 2, planning: 1 }, workScores: { collaboration: 3, calmPace: 1 }, dealScores: { comfort: 2, clearEval: 1 } },
      { text: "把流程和风险写清楚，防止甩锅。", talentScores: { reality: 2, planning: 3, ownership: 1 }, workScores: { structure: 3, execution: 1 }, dealScores: { clearEval: 3, stability: 1 } }
    ]
  },
  {
    id: "q7",
    title: "用户骂得很凶，但团队觉得没问题。你会？",
    options: [
      { text: "先看用户到底哪里不舒服。", talentScores: { empathy: 3, taste: 2, depth: 1 }, workScores: { collaboration: 2, deepWork: 1 }, dealScores: { comfort: 1 } },
      { text: "先看数据，别只看情绪。", talentScores: { sharpness: 2, depth: 2, reality: 2 }, workScores: { deepWork: 2, structure: 1 }, dealScores: { clearEval: 1 } },
      { text: "先看这事会不会影响大方向。", talentScores: { planning: 2, orgSense: 2, reality: 2 }, workScores: { structure: 2, execution: 1 }, dealScores: { clearEval: 2 } },
      { text: "先看会不会影响收入和结果。", talentScores: { empathy: 1, sharpness: 2, ownership: 2 }, workScores: { execution: 2, fastPace: 1 }, dealScores: { pay: 1, growth: 1 } }
    ]
  },
  {
    id: "q8",
    title: "你忙了很久，领导却说“没看出价值”。你会？",
    options: [
      { text: "把我做了什么、带来什么结果讲清楚。", talentScores: { planning: 3, orgSense: 3 }, workScores: { structure: 3, collaboration: 1 }, dealScores: { clearEval: 2, resume: 2 } },
      { text: "拿数据证明这事不是白忙。", talentScores: { ownership: 2, reality: 2, sharpness: 1 }, workScores: { execution: 2, structure: 1 }, dealScores: { clearEval: 2, growth: 1 } },
      { text: "虽然烦，但我会学着包装自己。", talentScores: { orgSense: 2, feedback: 2, reality: 1 }, workScores: { ambiguity: 1, collaboration: 1 }, dealScores: { resume: 2, pay: 1, comfort: -1 } },
      { text: "我会很烦，我希望事情本身被看见。", talentScores: { depth: 1, taste: 1 }, workScores: { deepWork: 2, calmPace: 2 }, dealScores: { comfort: 3, boundary: 2, clearEval: -1 } }
    ]
  },
  {
    id: "q9",
    title: "东西已经能用了，但细节很粗糙。你会？",
    options: [
      { text: "必须改，太粗糙我受不了。", talentScores: { taste: 3, ownership: 2 }, workScores: { deepWork: 2, calmPace: 1 }, dealScores: { comfort: 1, growth: 1 } },
      { text: "看用户在不在意，别拖进度。", talentScores: { empathy: 2, sharpness: 2, reality: 1 }, workScores: { collaboration: 1, execution: 1 }, dealScores: { clearEval: 1 } },
      { text: "看改了值不值，不值就先放。", talentScores: { reality: 3, sharpness: 1 }, workScores: { execution: 2, fastPace: 1 }, dealScores: { pay: 1, growth: 1 } },
      { text: "先上线，以后再慢慢补。", talentScores: { drive: 2, feedback: 2, ownership: 1 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { growth: 2, lowCost: -1 } }
    ]
  },
  {
    id: "q10",
    title: "一份工作很累，但机会不错。你最在意什么？",
    options: [
      { text: "钱够不够多。", talentScores: { reality: 2 }, workScores: { fastPace: 1 }, dealScores: { pay: 4, lowCost: -1, boundary: -1 } },
      { text: "能不能真的学到东西。", talentScores: { drive: 2, feedback: 2 }, workScores: { fastPace: 2, ambiguity: 1 }, dealScores: { growth: 4, resume: 2, lowCost: -1 } },
      { text: "稳不稳定，别天天变。", talentScores: { planning: 1, reality: 1 }, workScores: { calmPace: 3, structure: 1 }, dealScores: { stability: 4, lowChange: 3, boundary: 1 } },
      { text: "会不会严重影响生活。", talentScores: { reality: 1 }, workScores: { calmPace: 2 }, dealScores: { boundary: 4, lowCost: 3, comfort: 2 } }
    ]
  },
  {
    id: "q11",
    title: "一个团队很累，但回报也高。你真实想法是？",
    options: [
      { text: "钱到位，我可以短期拼一下。", talentScores: { drive: 2, ownership: 1 }, workScores: { fastPace: 3, execution: 2 }, dealScores: { pay: 4, lowCost: -2, boundary: -2 } },
      { text: "能让我变强，我可以忍。", talentScores: { feedback: 2, drive: 2, depth: 1 }, workScores: { ambiguity: 2, fastPace: 2 }, dealScores: { growth: 4, resume: 1, lowCost: -1 } },
      { text: "忙可以，但下班后别再折磨我。", talentScores: { planning: 1, reality: 2 }, workScores: { structure: 2, calmPace: 1 }, dealScores: { boundary: 4, clearEval: 2, stability: 1 } },
      { text: "长期这样不行，我会被耗干。", talentScores: { reality: 2 }, workScores: { calmPace: 3 }, dealScores: { lowCost: 4, boundary: 3, comfort: 2 } }
    ]
  },
  {
    id: "q12",
    title: "公司经常换方向、换老板、换目标。你会？",
    options: [
      { text: "可以接受，变化快也成长快。", talentScores: { drive: 2, feedback: 2 }, workScores: { ambiguity: 4, fastPace: 3 }, dealScores: { growth: 3, stability: -2, lowChange: -2 } },
      { text: "可以变，但要告诉我为什么变。", talentScores: { planning: 2, orgSense: 2 }, workScores: { structure: 2, ambiguity: 2 }, dealScores: { clearEval: 3, stability: 1 } },
      { text: "很消耗，我需要稳定感。", talentScores: { depth: 1, reality: 1 }, workScores: { calmPace: 3, structure: 1 }, dealScores: { stability: 4, lowChange: 4, boundary: 1 } },
      { text: "看钱和机会，给到位我能忍一阵。", talentScores: { reality: 2, drive: 1 }, workScores: { fastPace: 2, ambiguity: 2 }, dealScores: { pay: 3, growth: 2, stability: -1 } }
    ]
  },
  {
    id: "q13",
    title: "你最怕哪种公司？",
    options: [
      { text: "干了很多，也不知道自己好不好。", talentScores: { planning: 1, orgSense: 1 }, workScores: { structure: 2 }, dealScores: { clearEval: 4, comfort: 1 } },
      { text: "老板天天改主意，大家一起陪跑。", talentScores: { sharpness: 1, reality: 2 }, workScores: { structure: 2, calmPace: 1 }, dealScores: { stability: 3, lowChange: 2, boundary: 1 } },
      { text: "只有数字和压力，没什么人味。", talentScores: { empathy: 1 }, workScores: { collaboration: 2, calmPace: 1 }, dealScores: { comfort: 4, lowCost: 2, boundary: 1 } },
      { text: "太慢太拖，想做点事很难。", talentScores: { drive: 2, feedback: 1 }, workScores: { fastPace: 3, autonomy: 2 }, dealScores: { growth: 3, lowChange: -1 } }
    ]
  },
  {
    id: "q14",
    title: "下面几种工作状态，你更能接受哪种？",
    options: [
      { text: "节奏很快，经常被反馈和调整。", talentScores: { sharpness: 2, drive: 3, feedback: 3 }, workScores: { fastPace: 3, ambiguity: 3, autonomy: 2 }, dealScores: { pay: 2, growth: 4, lowCost: -2, stability: -2 } },
      { text: "事情复杂，还要经常沟通和汇报。", talentScores: { planning: 3, orgSense: 3, ownership: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { resume: 3, clearEval: 1, comfort: -1 } },
      { text: "慢一点，但很重视用户感受。", talentScores: { empathy: 3, taste: 3, orgSense: 1 }, workScores: { collaboration: 3, calmPace: 2 }, dealScores: { comfort: 3, stability: 2 } },
      { text: "做长期难题，不用天天赶着跑。", talentScores: { depth: 3, reality: 2, ownership: 1 }, workScores: { deepWork: 3, calmPace: 3 }, dealScores: { stability: 3, boundary: 2, lowChange: 2 } }
    ]
  },
  {
    id: "q15",
    title: "你更喜欢哪种成长方式？",
    options: [
      { text: "看结果说话，做没做成很清楚。", talentScores: { ownership: 3, reality: 2, drive: 1 }, workScores: { execution: 4, fastPace: 2 }, dealScores: { clearEval: 2, growth: 2, lowCost: -1 } },
      { text: "压力大、回报高，赢了很直接。", talentScores: { drive: 3, feedback: 2, reality: 2 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { pay: 4, growth: 2, lowCost: -3, boundary: -2 } },
      { text: "稳定做事，把基本功练扎实。", talentScores: { planning: 2, ownership: 2, reality: 2 }, workScores: { structure: 3, calmPace: 3, execution: 1 }, dealScores: { stability: 3, lowChange: 2, boundary: 1 } },
      { text: "慢慢打磨，东西可以不快但要做好。", talentScores: { taste: 3, depth: 2, empathy: 1 }, workScores: { deepWork: 2, calmPace: 3, autonomy: 1 }, dealScores: { comfort: 3, lowCost: 1, growth: 1 } }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    talentDimensions,
    talentNames,
    workDimensions,
    workNames,
    dealDimensions,
    dealNames,
    questions,
    dimensions: talentDimensions,
    dimensionNames: talentNames
  };
}

if (typeof window !== "undefined") {
  window.BigTechTestData = Object.assign({}, window.BigTechTestData, {
    talentDimensions,
    talentNames,
    workDimensions,
    workNames,
    dealDimensions,
    dealNames,
    questions,
    dimensions: talentDimensions,
    dimensionNames: talentNames
  });
}
