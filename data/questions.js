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
    title: "老板只说“这个方向要做起来”，目标、资源、时间都没讲清楚。你第一反应是？",
    options: [
      { text: "先把问题定义清楚：到底要解决谁的什么问题，别一上来就瞎忙。", talentScores: { sharpness: 3, depth: 3, planning: 2 }, workScores: { structure: 3, deepWork: 2 }, dealScores: { clearEval: 2, growth: 1 } },
      { text: "先做一个小验证，别等所有条件齐了才开始动。", talentScores: { drive: 3, feedback: 3, ownership: 2 }, workScores: { fastPace: 3, ambiguity: 3, autonomy: 2 }, dealScores: { growth: 2, pay: 1 } },
      { text: "先去看真实使用的人会不会买账，老板的兴奋不等于用户的需求。", talentScores: { empathy: 3, taste: 2, sharpness: 1 }, workScores: { collaboration: 2, autonomy: 1 }, dealScores: { comfort: 1, growth: 1 } },
      { text: "先问清边界和责任，不然最后做成了没人认，做砸了全是锅。", talentScores: { orgSense: 3, reality: 2, planning: 2 }, workScores: { structure: 3, collaboration: 1 }, dealScores: { clearEval: 3, boundary: 2, stability: 1 } }
    ]
  },
  {
    id: "q2",
    title: "你发现一个坑没人负责，但它迟早会炸。你通常会？",
    options: [
      { text: "先自己拆影响范围，确认这事值不值得我下场。", talentScores: { sharpness: 2, depth: 2, reality: 2 }, workScores: { deepWork: 2, autonomy: 1 }, dealScores: { boundary: 2, clearEval: 1 } },
      { text: "直接把关键人拉起来，先让问题动起来，不然它会永远躺着。", talentScores: { drive: 3, ownership: 3, feedback: 1 }, workScores: { fastPace: 2, execution: 3, ambiguity: 1 }, dealScores: { growth: 2, pay: 1 } },
      { text: "先看一线或用户到底被影响到什么程度，别为一个内部洁癖开战。", talentScores: { empathy: 3, reality: 2, taste: 1 }, workScores: { collaboration: 2, execution: 1 }, dealScores: { comfort: 1, clearEval: 1 } },
      { text: "我会提醒风险，但不会贸然把锅背到自己身上。", talentScores: { orgSense: 2, planning: 1, reality: 2 }, workScores: { structure: 2, calmPace: 2 }, dealScores: { boundary: 3, stability: 2, lowCost: 1 } }
    ]
  },
  {
    id: "q3",
    title: "团队拿出一个看起来很漂亮的方案，你最先看哪里？",
    options: [
      { text: "底层假设是不是站得住，别包装很好，核心逻辑是空的。", talentScores: { depth: 3, sharpness: 3 }, workScores: { deepWork: 3, structure: 1 }, dealScores: { growth: 2 } },
      { text: "用户/使用者会不会真的舒服，不然漂亮只是我们自己感动。", talentScores: { empathy: 3, taste: 3 }, workScores: { collaboration: 2, deepWork: 1 }, dealScores: { comfort: 1 } },
      { text: "收益、成本和投入产出值不值，别把公司当许愿池。", talentScores: { reality: 3, sharpness: 2, ownership: 1 }, workScores: { execution: 3, fastPace: 1 }, dealScores: { clearEval: 2, pay: 1 } },
      { text: "能不能落地，谁来做，什么时候交，风险谁兜。", talentScores: { planning: 3, ownership: 2, orgSense: 1 }, workScores: { structure: 3, execution: 2 }, dealScores: { clearEval: 2, stability: 1 } }
    ]
  },
  {
    id: "q4",
    title: "你认真做的方案会上被人怼了，你更像哪种反应？",
    options: [
      { text: "先看对方是不是指出了关键漏洞，刺耳但有用就先认。", talentScores: { feedback: 3, depth: 2, sharpness: 1 }, workScores: { fastPace: 1, deepWork: 2 }, dealScores: { growth: 3 } },
      { text: "马上补数据、补逻辑，把方案打磨到对方没法随便挑。", talentScores: { feedback: 2, ownership: 2, planning: 2 }, workScores: { execution: 2, structure: 2 }, dealScores: { growth: 2, clearEval: 1 } },
      { text: "有点烦，但只要方向对，我可以立刻改，不在情绪里过夜。", talentScores: { drive: 2, feedback: 3 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { growth: 2, lowCost: -1 } },
      { text: "我会判断这到底是专业讨论，还是组织里的表态游戏。", talentScores: { orgSense: 3, reality: 2, sharpness: 1 }, workScores: { collaboration: 2, structure: 1 }, dealScores: { clearEval: 3, boundary: 1 } }
    ]
  },
  {
    id: "q5",
    title: "你最佩服哪类同事？",
    options: [
      { text: "抓本质特别快，三句话就能把大家吵半天的事拆明白。", talentScores: { sharpness: 3, depth: 2 }, workScores: { deepWork: 2, fastPace: 1 }, dealScores: { growth: 1, resume: 1 } },
      { text: "没人催也能自己往前推，问题到他手里就不会继续躺着。", talentScores: { drive: 3, ownership: 3 }, workScores: { autonomy: 3, execution: 2 }, dealScores: { growth: 2, pay: 1 } },
      { text: "特别懂人，知道用户、同事、老板分别在意什么。", talentScores: { empathy: 3, orgSense: 2, taste: 1 }, workScores: { collaboration: 3 }, dealScores: { comfort: 2 } },
      { text: "能在复杂组织里把事办成，不蛮干，也不只会抱怨。", talentScores: { planning: 2, orgSense: 3, reality: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { clearEval: 2, resume: 1 } }
    ]
  },
  {
    id: "q6",
    title: "跨部门合作卡住了，大家都说“不归我们”。你会？",
    options: [
      { text: "先把目标和责任摊开，谁不配合会影响什么，讲清楚。", talentScores: { orgSense: 3, planning: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { clearEval: 2, resume: 1 } },
      { text: "能绕就绕，先把结果做出来，别把时间耗死在会议里。", talentScores: { drive: 3, ownership: 2, reality: 2 }, workScores: { fastPace: 3, execution: 3, autonomy: 1 }, dealScores: { growth: 2, lowCost: -1 } },
      { text: "耐心把各方顾虑听完，很多卡点不是不做，是怕背锅。", talentScores: { empathy: 2, orgSense: 2, planning: 1 }, workScores: { collaboration: 3, calmPace: 1 }, dealScores: { comfort: 2, clearEval: 1 } },
      { text: "把流程、风险和时间线写清楚，让甩锅变难。", talentScores: { reality: 2, planning: 3, ownership: 1 }, workScores: { structure: 3, execution: 1 }, dealScores: { clearEval: 3, stability: 1 } }
    ]
  },
  {
    id: "q7",
    title: "用户骂得很凶，但内部觉得方向没错。你更信什么？",
    options: [
      { text: "先回到真实场景，看用户到底卡在哪里，别急着教育用户。", talentScores: { empathy: 3, taste: 2, depth: 1 }, workScores: { collaboration: 2, deepWork: 1 }, dealScores: { comfort: 1 } },
      { text: "看关键数据和影响面，情绪很吵，但不能只跟着情绪跑。", talentScores: { sharpness: 2, depth: 2, reality: 2 }, workScores: { deepWork: 2, structure: 1 }, dealScores: { clearEval: 1 } },
      { text: "看这件事是否影响核心目标，不然可能只是局部噪音。", talentScores: { planning: 2, orgSense: 2, reality: 2 }, workScores: { structure: 2, execution: 1 }, dealScores: { clearEval: 2 } },
      { text: "看会不会影响转化和留存，用户情绪最后也会反映到结果里。", talentScores: { empathy: 1, sharpness: 2, ownership: 2 }, workScores: { execution: 2, fastPace: 1 }, dealScores: { pay: 1, growth: 1 } }
    ]
  },
  {
    id: "q8",
    title: "你做了很多事，但领导说“看不出价值”。你会？",
    options: [
      { text: "重新整理背景、目标、动作和结果，让它变成一个完整故事。", talentScores: { planning: 3, orgSense: 3 }, workScores: { structure: 3, collaboration: 1 }, dealScores: { clearEval: 2, resume: 2 } },
      { text: "补结果证据，别讲感觉，拿事实证明这事不是白忙。", talentScores: { ownership: 2, reality: 2, sharpness: 1 }, workScores: { execution: 2, structure: 1 }, dealScores: { clearEval: 2, growth: 1 } },
      { text: "讨厌这套，但如果它能换资源、换机会，我可以学。", talentScores: { orgSense: 2, feedback: 2, reality: 1 }, workScores: { ambiguity: 1, collaboration: 1 }, dealScores: { resume: 2, pay: 1, comfort: -1 } },
      { text: "会很消耗。我更希望事情本身有价值，而不是天天证明自己有价值。", talentScores: { depth: 1, taste: 1 }, workScores: { deepWork: 2, calmPace: 2 }, dealScores: { comfort: 3, boundary: 2, clearEval: -1 } }
    ]
  },
  {
    id: "q9",
    title: "东西已经能用了，但体验、表达或细节还很粗糙。你会？",
    options: [
      { text: "必须修。粗糙东西上线，会让我觉得自己也很粗糙。", talentScores: { taste: 3, ownership: 2 }, workScores: { deepWork: 2, calmPace: 1 }, dealScores: { comfort: 1, growth: 1 } },
      { text: "看用户会不会真的在意，别为了洁癖拖住关键进度。", talentScores: { empathy: 2, sharpness: 2, reality: 1 }, workScores: { collaboration: 1, execution: 1 }, dealScores: { clearEval: 1 } },
      { text: "看成本收益，能带来结果就修，不能就先放。", talentScores: { reality: 3, sharpness: 1 }, workScores: { execution: 2, fastPace: 1 }, dealScores: { pay: 1, growth: 1 } },
      { text: "先上线再改，别让完美主义耽误窗口期。", talentScores: { drive: 2, feedback: 2, ownership: 1 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { growth: 2, lowCost: -1 } }
    ]
  },
  {
    id: "q10",
    title: "一份工作很累但机会不错，你最先算哪笔账？",
    options: [
      { text: "钱够不够香。累可以，但别又累又穷。", talentScores: { reality: 2 }, workScores: { fastPace: 1 }, dealScores: { pay: 4, lowCost: -1, boundary: -1 } },
      { text: "成长值不值。苦我能吃，但苦得没价值最亏。", talentScores: { drive: 2, feedback: 2 }, workScores: { fastPace: 2, ambiguity: 1 }, dealScores: { growth: 4, resume: 2, lowCost: -1 } },
      { text: "稳不稳定。工作已经够累了，我不想天天重开人生。", talentScores: { planning: 1, reality: 1 }, workScores: { calmPace: 3, structure: 1 }, dealScores: { stability: 4, lowChange: 3, boundary: 1 } },
      { text: "会不会吞掉我的生活。我不想整个人被工作接管。", talentScores: { reality: 1 }, workScores: { calmPace: 2 }, dealScores: { boundary: 4, lowCost: 3, comfort: 2 } }
    ]
  },
  {
    id: "q11",
    title: "团队强度很高，但回报也高。你的真实想法是？",
    options: [
      { text: "只要钱到位，我可以阶段性把自己当项目燃料。", talentScores: { drive: 2, ownership: 1 }, workScores: { fastPace: 3, execution: 2 }, dealScores: { pay: 4, lowCost: -2, boundary: -2 } },
      { text: "如果能让我明显变强，我可以忍；原地受苦不行。", talentScores: { feedback: 2, drive: 2, depth: 1 }, workScores: { ambiguity: 2, fastPace: 2 }, dealScores: { growth: 4, resume: 1, lowCost: -1 } },
      { text: "忙可以，但边界要清楚。我怕的是下班后还被精神占用。", talentScores: { planning: 1, reality: 2 }, workScores: { structure: 2, calmPace: 1 }, dealScores: { boundary: 4, clearEval: 2, stability: 1 } },
      { text: "长期高强度不适合我，我需要能持续活下去的工作。", talentScores: { reality: 2 }, workScores: { calmPace: 3 }, dealScores: { lowCost: 4, boundary: 3, comfort: 2 } }
    ]
  },
  {
    id: "q12",
    title: "如果团队方向、架构、老板或 KPI 经常变，你会？",
    options: [
      { text: "变化越快，越容易逼出成长速度，我能接受。", talentScores: { drive: 2, feedback: 2 }, workScores: { ambiguity: 4, fastPace: 3 }, dealScores: { growth: 3, stability: -2, lowChange: -2 } },
      { text: "可以变，但至少要讲清楚为什么变，不要让我盲飞。", talentScores: { planning: 2, orgSense: 2 }, workScores: { structure: 2, ambiguity: 2 }, dealScores: { clearEval: 3, stability: 1 } },
      { text: "很消耗。我需要稳定方向，不想每隔一阵就重开一局。", talentScores: { depth: 1, reality: 1 }, workScores: { calmPace: 3, structure: 1 }, dealScores: { stability: 4, lowChange: 4, boundary: 1 } },
      { text: "看钱和机会给不给到位，给到位我可以忍一阵。", talentScores: { reality: 2, drive: 1 }, workScores: { fastPace: 2, ambiguity: 2 }, dealScores: { pay: 3, growth: 2, stability: -1 } }
    ]
  },
  {
    id: "q13",
    title: "你最怕哪种公司氛围或管理方式？",
    options: [
      { text: "评价很玄学，忙完也不知道自己到底输在哪。", talentScores: { planning: 1, orgSense: 1 }, workScores: { structure: 2 }, dealScores: { clearEval: 4, comfort: 1 } },
      { text: "老板方向不清楚还爱改，最后所有人一起陪跑。", talentScores: { sharpness: 1, reality: 2 }, workScores: { structure: 2, calmPace: 1 }, dealScores: { stability: 3, lowChange: 2, boundary: 1 } },
      { text: "人味很少，只有结果、数字和压力，没人关心你是不是还活着。", talentScores: { empathy: 1 }, workScores: { collaboration: 2, calmPace: 1 }, dealScores: { comfort: 4, lowCost: 2, boundary: 1 } },
      { text: "太慢、太温吞、太讲资历，做点事像在棉花里打拳。", talentScores: { drive: 2, feedback: 1 }, workScores: { fastPace: 3, autonomy: 2 }, dealScores: { growth: 3, lowChange: -1 } }
    ]
  },
  {
    id: "q14",
    title: "如果三种大厂工作系统摆在你面前，你更能接受哪种苦？",
    options: [
      { text: "高反馈、高变化、高成长，今天被推翻，明天继续冲。", talentScores: { sharpness: 2, drive: 3, feedback: 3 }, workScores: { fastPace: 3, ambiguity: 3, autonomy: 2 }, dealScores: { pay: 2, growth: 4, lowCost: -2, stability: -2 } },
      { text: "复杂规划、组织推动、向上对齐，事要做成，也要讲清楚。", talentScores: { planning: 3, orgSense: 3, ownership: 2 }, workScores: { structure: 3, collaboration: 2 }, dealScores: { resume: 3, clearEval: 1, comfort: -1 } },
      { text: "产品体验、用户感、协作分寸，慢一点但别粗糙。", talentScores: { empathy: 3, taste: 3, orgSense: 1 }, workScores: { collaboration: 3, calmPace: 2 }, dealScores: { comfort: 3, stability: 2 } },
      { text: "深水问题、长期积累、稳定节奏，不需要天天打鸡血。", talentScores: { depth: 3, reality: 2, ownership: 1 }, workScores: { deepWork: 3, calmPace: 3 }, dealScores: { stability: 3, boundary: 2, lowChange: 2 } }
    ]
  },
  {
    id: "q15",
    title: "你更愿意被哪种方式训练？",
    options: [
      { text: "强结果、强执行，做没做成一眼就知道。", talentScores: { ownership: 3, reality: 2, drive: 1 }, workScores: { execution: 4, fastPace: 2 }, dealScores: { clearEval: 2, growth: 2, lowCost: -1 } },
      { text: "高回报、高压强，过程不舒服，但赢了很直接。", talentScores: { drive: 3, feedback: 2, reality: 2 }, workScores: { fastPace: 3, ambiguity: 2 }, dealScores: { pay: 4, growth: 2, lowCost: -3, boundary: -2 } },
      { text: "稳定交付、长期优化，把基础功一点点做扎实。", talentScores: { planning: 2, ownership: 2, reality: 2 }, workScores: { structure: 3, calmPace: 3, execution: 1 }, dealScores: { stability: 3, lowChange: 2, boundary: 1 } },
      { text: "慢慢打磨质感和判断，东西可以不快，但要像样。", talentScores: { taste: 3, depth: 2, empathy: 1 }, workScores: { deepWork: 2, calmPace: 3, autonomy: 1 }, dealScores: { comfort: 3, lowCost: 1, growth: 1 } }
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
