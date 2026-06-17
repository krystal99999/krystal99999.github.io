(function(){
  const data = window.BigTechTestData || {};
  const rewardDimensions = ["pay","growth","resume"];
  const costDimensions = ["lowCost","boundary"];
  const evaluationDimensions = ["clearEval","comfort"];
  const stabilityDimensions = ["stability","lowChange"];
  const personaCopy = {
    sharpness:["挑刺边牧型打工人","你不是嘴欠，是一眼能看见假问题。副作用是别人还在热场，你已经在心里给方案判了死刑。","你不是爱挑刺，是很难忍受大家围着假问题空转。"],
    depth:["猫头鹰深水型打工人","你不怕难题，怕大家拿浅答案交差。你以为自己谨慎，其实很多事还没开始就被你脑内否了三轮。","你怕的不是问题难，是大家用浅答案假装解决了。"],
    drive:["高压边牧型打工人","你不是热爱挑战，你是闲下来就开始怀疑自己不值钱。公司最爱你这种人，因为不用点火，自己就会烧起来。","你嘴上想松弛，身体却离不开目标和反馈。"],
    ownership:["章鱼收尸型打工人","你不是责任心爆棚，是看不得烂摊子没人管。公司最爱这种人，锅递到你手里，最后真能变成菜。","你看起来能扛，于是所有烂摊子都会精准找到你。"],
    empathy:["海豚读心型打工人","你不是敏感，是能听见用户下头的那一秒。问题是你会替所有人不舒服，最后把自己累成体验垃圾桶。","你能听见用户下头的那一秒，也容易替所有人难受。"],
    planning:["狐狸操盘型打工人","你不是爱规划，是知道没路径的热血最后都变成锅。你讨厌画饼，但你比谁都清楚饼要怎么画才有人信。","你不迷信热血，你知道没路径的热血最后都变成锅。"],
    orgSense:["狐狸周旋型打工人","你不是圆滑，是知道对的事不会自动发生。你讨厌虚伪，但也明白只会干活的人最容易变背景板。","你讨厌虚伪，但很懂只会干活的人最容易变背景板。"],
    feedback:["猎豹升级型打工人","你不是不破防，是破完防还能改方案。你嘴上骂反馈，身体已经开始下一版。","你会破防，但破完防还能把方案改出来。"],
    taste:["孔雀洁癖型打工人","你不是事多，是“差不多”三个字会让你生理不适。问题是世界经常不为你的审美买单。","你不是事多，是差不多三个字会让你生理不适。"],
    reality:["骆驼扛事型打工人","你不是没情绪，是知道情绪解决不了履约、成本和锅。公司喜欢你，因为你能在沙漠里把水算到最后一口。","你不是没情绪，是知道情绪解决不了履约、成本和锅。"]
  };
  const dealNotes = {pay:"钱不到账，你的热血就会自动欠费。",growth:"你可以吃苦，但不能接受苦完只换来一句辛苦了。",resume:"你需要这段经历变成筹码，不是变成聊天素材。",lowCost:"你很警惕把活多包装成成长的职场话术。",boundary:"你要边界，因为你不想让工作接管整个人。",clearEval:"你可以累，但不能接受评价像玄学抽签。",comfort:"氛围没人味，你会比电脑先死机。",stability:"稳定感对你来说不是躺平，是续命。",lowChange:"你不想隔三差五重开人生，哪怕新版本听起来很高级。"};

  document.addEventListener("click",()=>setTimeout(patchResult,360),true);
  window.addEventListener("load",()=>setTimeout(patchResult,360));
  const screen = document.getElementById("result-screen");
  if(screen) new MutationObserver(()=>setTimeout(patchResult,80)).observe(screen,{attributes:true,childList:true,subtree:true});
  const imageButton = document.getElementById("image-button");
  if(imageButton){imageButton.addEventListener("click",event=>{event.preventDefault();event.stopImmediatePropagation();generateShareImage();},true);}

  function patchResult(){
    const result = getStoredResult();
    if(!result || !document.getElementById("result-screen")?.classList.contains("is-active")) return;
    const persona = getPersonaCopy(result);
    setText("#persona-title", persona.title);
    setText("#persona-subtitle", persona.subtitle);
    const warnings = getWarnings(result);
    setText("#warning-company-name", warnings[0].name);
    setText("#warning-company-text", warnings[0].warningReason);
    setText("#warning-two-name", warnings[1].name);
    setText("#warning-two-text", warnings[1].warningReason);
    const [altOne, altTwo] = result.alternatives || [];
    if(altOne) setText("#alt-one-text", formatAltReason(altOne));
    if(altTwo) setText("#alt-two-text", formatAltReason(altTwo));
  }

  async function generateShareImage(){
    const result = getStoredResult();
    if(!result) return;
    const primary = result.primary;
    const warnings = getWarnings(result);
    const [altOne, altTwo] = result.alternatives || [];
    const persona = getPersonaCopy(result);
    const canvas = document.createElement("canvas");
    const width = 900, height = 1660, ctx = canvas.getContext("2d");
    canvas.width = width; canvas.height = height;
    ctx.fillStyle = "#f4f0ea"; ctx.fillRect(0,0,width,height);
    ctx.fillStyle = primary.color; roundRect(ctx,54,54,width-108,344,32); ctx.fill();
    ctx.fillStyle = "#ffffff";
    drawText(ctx,"我的厂格结果",94,112,28,700,width-188,36);
    drawText(ctx,persona.title,94,178,58,900,width-188,70);
    drawText(ctx,persona.shareLine,94,318,30,500,width-188,42);
    ctx.fillStyle = "#fffaf2"; roundRect(ctx,54,430,width-108,890,28); ctx.fill();
    ctx.strokeStyle = "#151515"; ctx.lineWidth = 4; ctx.stroke();
    drawLabel(ctx,"天选公司",94,506);
    drawText(ctx,primary.name,94,570,64,900,width-188,74);
    drawLabel(ctx,"为什么是它",94,668);
    drawText(ctx,getImageReason(primary),94,724,28,800,width-188,38);
    drawLabel(ctx,"避雷公司",94,924);
    drawChip(ctx,warnings[0].name,94,979,260);
    drawChip(ctx,warnings[1].name,374,979,260);
    drawLabel(ctx,"其他备选",94,1128);
    drawChip(ctx,altOne.name,94,1183,260);
    drawChip(ctx,altTwo.name,374,1183,260);
    ctx.fillStyle = "#f9dd5a"; roundRect(ctx,94,1270,width-188,58,18); ctx.fill(); ctx.strokeStyle = "#151515"; ctx.stroke();
    ctx.fillStyle = "#151515"; drawText(ctx,"准不准不重要，先看看哪家公司最会使用你。",126,1308,23,900,width-252,32);
    try{drawShareBar(ctx, await loadImage(`https://quickchart.io/qr?size=220&margin=1&text=${encodeURIComponent(getShareUrl())}`));}catch(e){drawShareBar(ctx,null);}
    const url = canvas.toDataURL("image/png");
    const preview = document.getElementById("share-preview"), image = document.getElementById("result-image"), download = document.getElementById("download-link");
    if(image) image.src = url; if(download) download.href = url;
    if(preview){preview.classList.remove("hidden"); preview.scrollIntoView({behavior:"smooth",block:"center"});}
  }

  function getStoredResult(){try{const raw=localStorage.getItem("bigTechTestResult");return raw?JSON.parse(raw):null;}catch(e){return null;}}
  function getPersonaCopy(result){const base=personaCopy[result.persona&&result.persona.top]||[result.persona?.title||"厂格未知型打工人",result.persona?.subtitle||"你很复杂，公司也很复杂，先别急着互相理解。",result.persona?.subtitle||"你很复杂，公司也很复杂。"];
    const dealScores=result.dealScores||{}; const dealTop=Object.keys(dealScores).sort((a,b)=>(dealScores[b]||0)-(dealScores[a]||0))[0];
    const secondName=data.talentNames&&data.talentNames[result.persona&&result.persona.second];
    return {title:base[0],subtitle:`${base[1]} ${dealNotes[dealTop]||"你的职场账本很清楚，别想用情怀糊弄过去。"}${secondName?` 隐藏副本：${secondName}。`:""}`,shareLine:base[2]};}
  function getWarnings(result){const primary=result.primary||{}, alternatives=result.alternatives||[], excluded=new Set([primary.id,...alternatives.map(c=>c.id)]); const ranked=getCompanyRanks(result); const pool=ranked.filter(i=>!excluded.has(i.company.id)&&i.talentFit>=.35).sort((a,b)=>b.painScore-a.painScore); const fallback=ranked.filter(i=>!excluded.has(i.company.id)).sort((a,b)=>b.painScore-a.painScore); return (pool.length>=2?pool:fallback).slice(0,2).map(i=>i.company);}
  function getCompanyRanks(result){const raw=(data.companies||[]).map(company=>({company,talentRaw:weightedScore(result.talentScores,company.talentWeights,data.talentDimensions||[]),workRaw:weightedScore(result.workScores,company.workWeights,data.workDimensions||[]),costRaw:weightedScore(result.dealScores,company.dealProfile,costDimensions),evaluationRaw:weightedScore(result.dealScores,company.dealProfile,evaluationDimensions),stabilityRaw:weightedScore(result.dealScores,company.dealProfile,stabilityDimensions)})); const ranges={talent:getRange(raw.map(i=>i.talentRaw)),work:getRange(raw.map(i=>i.workRaw)),cost:getRange(raw.map(i=>i.costRaw)),evaluation:getRange(raw.map(i=>i.evaluationRaw)),stability:getRange(raw.map(i=>i.stabilityRaw))}; return raw.map(item=>{const talentFit=normalize(item.talentRaw,ranges.talent),workFit=normalize(item.workRaw,ranges.work),costFit=normalize(item.costRaw,ranges.cost),evaluationFit=normalize(item.evaluationRaw,ranges.evaluation),stabilityFit=normalize(item.stabilityRaw,ranges.stability); return {...item,talentFit,painScore:talentFit*.35+(1-workFit)*.25+(1-costFit)*.18+(1-evaluationFit)*.14+(1-stabilityFit)*.08};});}
  function weightedScore(scores,weights,keys){return keys.reduce((sum,key)=>sum+((scores&&scores[key])||0)*((weights&&weights[key])||0),0);}
  function getRange(values){return {min:Math.min(...values),max:Math.max(...values)};}
  function normalize(value,range){return range.max===range.min?.5:(value-range.min)/(range.max-range.min);}
  function formatAltReason(company){return [company.altReason||company.persona,trimSentence(company.whereFeelsGood),trimSentence(company.whereHurts)].filter(Boolean).join(" ");}
  function getImageReason(company){return [company.whyUseYou,trimSentence(company.whereFeelsGood)].filter(Boolean).join(" ");}
  function drawLabel(ctx,value,x,y){ctx.fillStyle="#f05a28";drawText(ctx,value,x,y,24,900,420,32);ctx.fillStyle="#151515";}
  function drawChip(ctx,text,x,y,width){ctx.fillStyle="#ffffff";roundRect(ctx,x,y,width,78,18);ctx.fill();ctx.strokeStyle="#151515";ctx.lineWidth=4;ctx.stroke();ctx.fillStyle="#151515";drawText(ctx,text,x+24,y+51,34,900,width-48,40);}
  function drawShareBar(ctx,qrImage){ctx.fillStyle="#151515";roundRect(ctx,54,1380,792,210,28);ctx.fill();ctx.fillStyle="#f9dd5a";drawText(ctx,"扫码测你的厂命",94,1446,34,900,500,44);ctx.fillStyle="#ffffff";drawText(ctx,"你是哪家互联网大厂的天选打工人？",94,1500,25,800,500,34);drawText(ctx,"仅供娱乐参考，不代表真实招聘标准",94,1544,20,500,500,28);ctx.fillStyle="#ffffff";roundRect(ctx,664,1406,146,146,18);ctx.fill();if(qrImage){ctx.drawImage(qrImage,676,1418,122,122);return;}ctx.fillStyle="#151515";drawText(ctx,"打开页面",686,1460,22,900,104,30);drawText(ctx,"一起测",696,1498,22,900,90,30);}
  function drawText(ctx,value,x,y,size,weight,maxWidth,lineHeight){ctx.font=`${weight} ${size}px -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif`;let line="",currentY=y;Array.from(String(value||"")).forEach(char=>{const test=line+char;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,currentY);line=char;currentY+=lineHeight;}else{line=test;}});if(line)ctx.fillText(line,x,currentY);}
  function roundRect(ctx,x,y,width,height,radius){ctx.beginPath();ctx.moveTo(x+radius,y);ctx.arcTo(x+width,y,x+width,y+height,radius);ctx.arcTo(x+width,y+height,x,y+height,radius);ctx.arcTo(x,y+height,x,y,radius);ctx.arcTo(x,y,x+width,y,radius);ctx.closePath();}
  function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.crossOrigin="anonymous";image.onload=()=>resolve(image);image.onerror=reject;image.src=src;});}
  function trimSentence(value){return String(value||"").split(/[。！？]/)[0]+"。";}
  function setText(selector,value){const el=document.querySelector(selector);if(el)el.textContent=value||"";}
  function getShareUrl(){return `${window.location.origin}${window.location.pathname}`;}
})();