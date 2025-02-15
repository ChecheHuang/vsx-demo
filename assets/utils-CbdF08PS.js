import{z as t}from"./index-9A_Dhk68.js";const m=(e=768)=>t`
  @media (max-width: ${e}px) {
    display: none; // 範例: 隱藏元素
  }
`,s=e=>({data:e,msg:"ok",time:Date.now()});function i(e){return Object.keys(e).filter(a=>Number.isNaN(Number(a))).map(a=>({label:a,value:e[a]}))}export{i as c,s as f,m};
