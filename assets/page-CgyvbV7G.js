import{r as f,R as O,G as $e,j as l,d as h,Y as pe,c as Ie,b as Re,C as Ee,B as k,M as Ne,T as Oe,I as Le,S as ke}from"./index-D4XvepKK.js";import{u as _e,a as Me}from"./mock-DoeY2I-h.js";import{g as Fe,c as De}from"./utils-uCnQwIC1.js";import Ge from"./notfound-CU-N9wTU.js";var z={exports:{}},K,se;function Ae(){if(se)return K;se=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return K=e,K}var B,re;function Ue(){if(re)return B;re=1;var e=Ae();function s(){}function t(){}return t.resetWarningCache=s,B=function(){function n(c,p,m,u,x,w){if(w!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}n.isRequired=n;function o(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:s};return a.PropTypes=a,a},B}var oe;function qe(){return oe||(oe=1,z.exports=Ue()()),z.exports}var be=qe();function V(e){return s=>!!s.type&&s.type.tabsRole===e}const L=V("Tab"),D=V("TabList"),G=V("TabPanel");function We(e){return L(e)||D(e)||G(e)}function Y(e,s){return f.Children.map(e,t=>t===null?null:We(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:Y(t.props.children,s)})):t)}function M(e,s){return f.Children.forEach(e,t=>{t!==null&&(L(t)||G(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(D(t)&&s(t),M(t.props.children,s)))})}function he(e,s,t){let n,o=0,a=0,c=!1;const p=[],m=e[s];return M(m,u=>{D(u)&&(u.props&&u.props.children&&typeof u.props.children=="object"&&M(u.props.children,x=>p.push(x)),c&&(n=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),L(u)?((!c||p.indexOf(u)===-1)&&(n=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),o++):G(u)&&a++}),!n&&o!==a&&(n=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${o} 'Tab' and ${a} 'TabPanel'.`)),n}function ze(e,s,t,n,o){const a=e[s],c=o||s;let p=null;return a&&typeof a!="function"?p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof a}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&a==null&&(p=new Error(`The ${n} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),p}function Ke(e,s,t,n,o){const a=e[s],c=o||s;let p=null;if(a!=null&&typeof a!="number")p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof a}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&a!=null)return new Error(`The ${n} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return p}function xe(e){var s,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(s=0;s<o;s++)e[s]&&(t=xe(e[s]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function A(){for(var e,s,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(s=xe(e))&&(n&&(n+=" "),n+=s);return n}function me(e){let s=0;return M(e,t=>{L(t)&&s++}),s}const Be=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function He(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}function ye(e){return e&&"getAttribute"in e}function ae(e){return ye(e)&&e.getAttribute("data-rttab")}function R(e){return ye(e)&&e.getAttribute("aria-disabled")==="true"}let F;function Ye(e){const s=e||(typeof window<"u"?window:void 0);try{F=!!(typeof s<"u"&&s.document&&s.document.activeElement)}catch{F=!1}}const Ve={className:"react-tabs",focus:!1},Qe={children:he},Je=e=>{be.checkPropTypes(Qe,e,"prop","UncontrolledTabs");let s=f.useRef([]),t=f.useRef([]);const n=f.useRef();function o(r,i){if(r<0||r>=u())return;const{onSelect:b,selectedIndex:N}=e;b(r,N,i)}function a(r){const i=u();for(let b=r+1;b<i;b++)if(!R(x(b)))return b;for(let b=0;b<r;b++)if(!R(x(b)))return b;return r}function c(r){let i=r;for(;i--;)if(!R(x(i)))return i;for(i=u();i-- >r;)if(!R(x(i)))return i;return r}function p(){const r=u();for(let i=0;i<r;i++)if(!R(x(i)))return i;return null}function m(){let r=u();for(;r--;)if(!R(x(r)))return r;return null}function u(){const{children:r}=e;return me(r)}function x(r){return s.current[`tabs-${r}`]}function w(){let r=0;const{children:i,disabledTabClassName:b,focus:N,forceRenderTabPanel:y,selectedIndex:C,selectedTabClassName:j,selectedTabPanelClassName:J,environment:X}=e;t.current=t.current||[];let je=t.current.length-u();const Se=f.useId();for(;je++<0;)t.current.push(`${Se}${t.current.length}`);return Y(i,I=>{let U=I;if(D(I)){let $=0,Z=!1;F==null&&Ye(X);const ee=X||(typeof window<"u"?window:void 0);F&&ee&&(Z=O.Children.toArray(I.props.children).filter(L).some((te,q)=>ee.document.activeElement===x(q))),U=f.cloneElement(I,{children:Y(I.props.children,te=>{const q=`tabs-${$}`,ne=C===$,W={tabRef:Pe=>{s.current[q]=Pe},id:t.current[$],selected:ne,focus:ne&&(N||Z)};return j&&(W.selectedClassName=j),b&&(W.disabledClassName=b),$++,f.cloneElement(te,W)})})}else if(G(I)){const $={id:t.current[r],selected:C===r};y&&($.forceRender=y),J&&($.selectedClassName=J),r++,U=f.cloneElement(I,$)}return U})}function v(r){const{direction:i,disableUpDownKeys:b,disableLeftRightKeys:N}=e;if(d(r.target)){let{selectedIndex:y}=e,C=!1,j=!1;(r.code==="Space"||r.keyCode===32||r.code==="Enter"||r.keyCode===13)&&(C=!0,j=!1,S(r)),!N&&(r.keyCode===37||r.code==="ArrowLeft")||!b&&(r.keyCode===38||r.code==="ArrowUp")?(i==="rtl"?y=a(y):y=c(y),C=!0,j=!0):!N&&(r.keyCode===39||r.code==="ArrowRight")||!b&&(r.keyCode===40||r.code==="ArrowDown")?(i==="rtl"?y=c(y):y=a(y),C=!0,j=!0):r.keyCode===35||r.code==="End"?(y=m(),C=!0,j=!0):(r.keyCode===36||r.code==="Home")&&(y=p(),C=!0,j=!0),C&&r.preventDefault(),j&&o(y,r)}}function S(r){let i=r.target;do if(d(i)){if(R(i))return;const b=[].slice.call(i.parentNode.children).filter(ae).indexOf(i);o(b,r);return}while((i=i.parentNode)!=null)}function d(r){if(!ae(r))return!1;let i=r.parentElement;do{if(i===n.current)return!0;if(i.getAttribute("data-rttabs"))break;i=i.parentElement}while(i);return!1}const g=Object.assign({},Ve,e),{className:P,domRef:E}=g,T=He(g,Be);return O.createElement("div",Object.assign({},T,{className:A(P),onClick:S,onKeyDown:v,ref:r=>{n.current=r,E&&E(r)},"data-rttabs":!0}),w())},Xe=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function Ze(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const et=0,_=1,tt={children:he,onSelect:ze,selectedIndex:Ke},nt={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},st=e=>e.selectedIndex===null?_:et,ge=e=>{be.checkPropTypes(tt,e,"prop","Tabs");const s=Object.assign({},nt,e),{children:t,defaultFocus:n,defaultIndex:o,focusTabOnClick:a,onSelect:c}=s,p=Ze(s,Xe),[m,u]=f.useState(n),[x]=f.useState(st(p)),[w,v]=f.useState(x===_?o||0:null);if(f.useEffect(()=>{u(!1)},[]),x===_){const g=me(t);f.useEffect(()=>{if(w!=null){const P=Math.max(0,g-1);v(Math.min(w,P))}},[g])}const S=(g,P,E)=>{typeof c=="function"&&c(g,P,E)===!1||(a&&u(!0),x===_&&v(g))};let d=Object.assign({},e,p);return d.focus=m,d.onSelect=S,w!=null&&(d.selectedIndex=w),delete d.defaultFocus,delete d.defaultIndex,delete d.focusTabOnClick,O.createElement(Je,d,t)};ge.tabsRole="Tabs";const rt=["children","className"];function ot(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const at={className:"react-tabs__tab-list"},Te=e=>{const s=Object.assign({},at,e),{children:t,className:n}=s,o=ot(s,rt);return O.createElement("ul",Object.assign({},o,{className:A(n),role:"tablist"}),t)};Te.tabsRole="TabList";const lt=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function it(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const H="react-tabs__tab",ct={className:H,disabledClassName:`${H}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${H}--selected`},we=e=>{let s=f.useRef();const t=Object.assign({},ct,e),{children:n,className:o,disabled:a,disabledClassName:c,focus:p,id:m,selected:u,selectedClassName:x,tabIndex:w,tabRef:v}=t,S=it(t,lt);return f.useEffect(()=>{u&&p&&s.current.focus()},[u,p]),O.createElement("li",Object.assign({},S,{className:A(o,{[x]:u,[c]:a}),ref:d=>{s.current=d,v&&v(d)},role:"tab",id:`tab${m}`,"aria-selected":u?"true":"false","aria-disabled":a?"true":"false","aria-controls":`panel${m}`,tabIndex:w||(u?"0":null),"data-rttab":!0}),n)};we.tabsRole="Tab";const dt=["children","className","forceRender","id","selected","selectedClassName"];function ut(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const le="react-tabs__tab-panel",ft={className:le,forceRender:!1,selectedClassName:`${le}--selected`},ve=e=>{const s=Object.assign({},ft,e),{children:t,className:n,forceRender:o,id:a,selected:c,selectedClassName:p}=s,m=ut(s,dt);return O.createElement("div",Object.assign({},m,{className:A(n,{[p]:c}),role:"tabpanel",id:`panel${a}`,"aria-labelledby":`tab${a}`}),o||c?t:null)};ve.tabsRole="TabPanel";function pt(e){return $e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const bt=h(pt)`
  cursor: pointer;
  font-size: 1.5em;
  position: relative;
`,ht=h.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 120px;
`,xt=h.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`,mt=({children:e})=>{const[s,t]=f.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return l.jsxs("div",{onMouseEnter:n,onMouseLeave:o,style:{position:"relative",display:"inline-block"},children:[l.jsx(bt,{}),s&&e]})},yt=(e=!1)=>{const[s,t]=f.useState(e);return{isModalOpen:s,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},gt=h.div`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  flex: 0 0 auto;
`,Q=h.div``,Tt=h(Q)`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.theme.primary};
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
`,wt=h(Q)`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.isGuest?e.theme.disabled:"inherit"};
`,vt=h.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`,ie=h.button`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.color};
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`,Ct=h(Q)`
  font-size: 14px;
  color: ${e=>e.isGuest?e.theme.disabled:"#333"};
  font-weight: bold;
`,ce=({id:e,name:s,score:t,isGuest:n})=>{const[o,a]=f.useState(t);return l.jsx(pe,{shouldForwardProp:c=>c!=="isGuest",children:l.jsxs(gt,{children:[l.jsx(Tt,{isGuest:n,children:e}),l.jsx(wt,{isGuest:n,children:s}),l.jsxs(vt,{children:[l.jsx(ie,{color:"#e74c3c",isGuest:n||o<=0,onClick:()=>{o<=0||a(c=>c-1)},children:"-1"}),l.jsx(Ct,{isGuest:n,children:o}),l.jsx(ie,{color:"#2ecc71",isGuest:n||o>=10,onClick:()=>{o>=10||a(c=>c+1)},children:"+1"})]})]})})},jt=h(ge)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,St=h(Te)`
  display: flex;
  gap: 10px;
`,de=h(we)`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;

  &.react-tabs__tab--selected {
    background-color: #fff;
    color: ${e=>e.theme.primary};
  }
`,ue=h(ve)``,Pt=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,$t=h.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 10px;
`,It=h.div`
  width: 85%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Rt=h(ke)`
  width: 100%;
  background: #fff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 450px;
  overflow: auto;
`,fe=h.div`
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;var Ce=(e=>(e.default="default",e.up="up",e.down="down",e))(Ce||{});const kt=()=>{const{scienceId:e}=Ie(),s=Re(),{isModalOpen:t,openModal:n,closeModal:o}=yt(!0),{data:a={id:"",students:[]},isError:c,isLoading:p}=_e({queryKey:["vsx",e],queryFn:async()=>(await Me.get("http://localhost:3000/vsx/"+e)).data.data,enabled:t}),[m,u]=f.useState("default"),{total:x,studentsLength:w,studentList:v,groupData:S}=f.useMemo(()=>{if(!a)return{total:0,studentsLength:0,studentList:[],groupData:[]};const d=a.students.length,g=a.students.filter(T=>!T.isGuest).length,P=m==="up"?[...a.students].sort((T,r)=>T.isGuest&&!r.isGuest?1:!T.isGuest&&r.isGuest?-1:!T.isGuest&&!r.isGuest?T.score-r.score:0):m==="down"?[...a.students].sort((T,r)=>T.isGuest&&!r.isGuest?1:!T.isGuest&&r.isGuest?-1:!T.isGuest&&!r.isGuest?r.score-T.score:0):a.students,E=Fe(P);return{total:d,studentsLength:g,studentList:P,groupData:E}},[a==null?void 0:a.students.length,m]);return c?l.jsx(Ge,{}):l.jsx(pe,{shouldForwardProp:d=>d!=="gap",children:l.jsxs(Ee,{gap:"10px",width:"100%",height:"85%",children:[l.jsxs(k,{onClick:n,children:["open ",e]}),l.jsx(k,{onClick:()=>s("/"),children:"Home"}),l.jsx(k,{onClick:()=>s(`/${parseInt(e||"301")-1}`),children:"prev"}),l.jsx(k,{onClick:()=>s(`/${parseInt(e||"301")+1}`),children:"next"}),l.jsx(Ne,{width:"clamp(300px, 40vw, 700px)",background:"#ebebeb",isModalOpen:t,onClose:o,isLoading:p,children:l.jsxs(Pt,{children:[l.jsxs($t,{children:[l.jsxs(Oe,{children:[e," Science"]})," ",l.jsx(Le,{}),l.jsxs("span",{children:[w,"/",x]})]}),l.jsxs(jt,{children:[l.jsxs(It,{children:[l.jsxs(St,{children:[l.jsx(de,{children:"Student List"}),l.jsx(de,{children:"Group"})]}),l.jsx(mt,{children:l.jsx(ht,{children:De(Ce).map(d=>l.jsx(f.Fragment,{children:l.jsx(xt,{onClick:()=>u(d.value),children:d.label})},d.value))})})]}),l.jsxs(Rt,{children:[l.jsx(ue,{children:l.jsx(fe,{children:v.map(d=>l.jsx(ce,{...d},d.id))})}),l.jsx(ue,{children:l.jsx(fe,{children:S.map(d=>l.jsxs(f.Fragment,{children:[l.jsx("div",{style:{gridColumn:"1/-1"},children:d.joinDate}),d.list.map(g=>l.jsx(ce,{...g},g.id))]},d.joinDate))})})]})]})]})})]})})};export{kt as default};
