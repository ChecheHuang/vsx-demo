import{r as f,R as N,G as $e,j as l,d as h,Y as fe,c as Ie,b as Re,C as Ee,B as L,M as Ne,T as Oe,I as Le,S as ke}from"./index-9A_Dhk68.js";import{u as _e,a as Me}from"./mock-owhxhaZs.js";import{c as Fe}from"./utils-CbdF08PS.js";import Ge from"./notfound-DOdRY9t8.js";var W={exports:{}},z,ne;function Ae(){if(ne)return z;ne=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return z=e,z}var K,se;function De(){if(se)return K;se=1;var e=Ae();function s(){}function t(){}return t.resetWarningCache=s,K=function(){function n(c,p,y,d,x,C){if(C!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}n.isRequired=n;function o(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:s};return a.PropTypes=a,a},K}var re;function Ue(){return re||(re=1,W.exports=De()()),W.exports}var pe=Ue();function Y(e){return s=>!!s.type&&s.type.tabsRole===e}const O=Y("Tab"),F=Y("TabList"),G=Y("TabPanel");function qe(e){return O(e)||F(e)||G(e)}function H(e,s){return f.Children.map(e,t=>t===null?null:qe(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:H(t.props.children,s)})):t)}function _(e,s){return f.Children.forEach(e,t=>{t!==null&&(O(t)||G(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(F(t)&&s(t),_(t.props.children,s)))})}function be(e,s,t){let n,o=0,a=0,c=!1;const p=[],y=e[s];return _(y,d=>{F(d)&&(d.props&&d.props.children&&typeof d.props.children=="object"&&_(d.props.children,x=>p.push(x)),c&&(n=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),O(d)?((!c||p.indexOf(d)===-1)&&(n=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),o++):G(d)&&a++}),!n&&o!==a&&(n=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${o} 'Tab' and ${a} 'TabPanel'.`)),n}function We(e,s,t,n,o){const a=e[s],c=o||s;let p=null;return a&&typeof a!="function"?p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof a}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&a==null&&(p=new Error(`The ${n} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),p}function ze(e,s,t,n,o){const a=e[s],c=o||s;let p=null;if(a!=null&&typeof a!="number")p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof a}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&a!=null)return new Error(`The ${n} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return p}function he(e){var s,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(s=0;s<o;s++)e[s]&&(t=he(e[s]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function A(){for(var e,s,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(s=he(e))&&(n&&(n+=" "),n+=s);return n}function xe(e){let s=0;return _(e,t=>{O(t)&&s++}),s}const Ke=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function Be(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}function me(e){return e&&"getAttribute"in e}function oe(e){return me(e)&&e.getAttribute("data-rttab")}function R(e){return me(e)&&e.getAttribute("aria-disabled")==="true"}let M;function He(e){const s=e||(typeof window<"u"?window:void 0);try{M=!!(typeof s<"u"&&s.document&&s.document.activeElement)}catch{M=!1}}const Ye={className:"react-tabs",focus:!1},Ve={children:be},Qe=e=>{pe.checkPropTypes(Ve,e,"prop","UncontrolledTabs");let s=f.useRef([]),t=f.useRef([]);const n=f.useRef();function o(r,i){if(r<0||r>=d())return;const{onSelect:b,selectedIndex:E}=e;b(r,E,i)}function a(r){const i=d();for(let b=r+1;b<i;b++)if(!R(x(b)))return b;for(let b=0;b<r;b++)if(!R(x(b)))return b;return r}function c(r){let i=r;for(;i--;)if(!R(x(i)))return i;for(i=d();i-- >r;)if(!R(x(i)))return i;return r}function p(){const r=d();for(let i=0;i<r;i++)if(!R(x(i)))return i;return null}function y(){let r=d();for(;r--;)if(!R(x(r)))return r;return null}function d(){const{children:r}=e;return xe(r)}function x(r){return s.current[`tabs-${r}`]}function C(){let r=0;const{children:i,disabledTabClassName:b,focus:E,forceRenderTabPanel:w,selectedIndex:S,selectedTabClassName:P,selectedTabPanelClassName:Q,environment:J}=e;t.current=t.current||[];let je=t.current.length-d();const Se=f.useId();for(;je++<0;)t.current.push(`${Se}${t.current.length}`);return H(i,I=>{let D=I;if(F(I)){let $=0,X=!1;M==null&&He(J);const Z=J||(typeof window<"u"?window:void 0);M&&Z&&(X=N.Children.toArray(I.props.children).filter(O).some((ee,U)=>Z.document.activeElement===x(U))),D=f.cloneElement(I,{children:H(I.props.children,ee=>{const U=`tabs-${$}`,te=S===$,q={tabRef:Pe=>{s.current[U]=Pe},id:t.current[$],selected:te,focus:te&&(E||X)};return P&&(q.selectedClassName=P),b&&(q.disabledClassName=b),$++,f.cloneElement(ee,q)})})}else if(G(I)){const $={id:t.current[r],selected:S===r};w&&($.forceRender=w),Q&&($.selectedClassName=Q),r++,D=f.cloneElement(I,$)}return D})}function v(r){const{direction:i,disableUpDownKeys:b,disableLeftRightKeys:E}=e;if(g(r.target)){let{selectedIndex:w}=e,S=!1,P=!1;(r.code==="Space"||r.keyCode===32||r.code==="Enter"||r.keyCode===13)&&(S=!0,P=!1,u(r)),!E&&(r.keyCode===37||r.code==="ArrowLeft")||!b&&(r.keyCode===38||r.code==="ArrowUp")?(i==="rtl"?w=a(w):w=c(w),S=!0,P=!0):!E&&(r.keyCode===39||r.code==="ArrowRight")||!b&&(r.keyCode===40||r.code==="ArrowDown")?(i==="rtl"?w=c(w):w=a(w),S=!0,P=!0):r.keyCode===35||r.code==="End"?(w=y(),S=!0,P=!0):(r.keyCode===36||r.code==="Home")&&(w=p(),S=!0,P=!0),S&&r.preventDefault(),P&&o(w,r)}}function u(r){let i=r.target;do if(g(i)){if(R(i))return;const b=[].slice.call(i.parentNode.children).filter(oe).indexOf(i);o(b,r);return}while((i=i.parentNode)!=null)}function g(r){if(!oe(r))return!1;let i=r.parentElement;do{if(i===n.current)return!0;if(i.getAttribute("data-rttabs"))break;i=i.parentElement}while(i);return!1}const j=Object.assign({},Ye,e),{className:m,domRef:T}=j,Ce=Be(j,Ke);return N.createElement("div",Object.assign({},Ce,{className:A(m),onClick:u,onKeyDown:v,ref:r=>{n.current=r,T&&T(r)},"data-rttabs":!0}),C())},Je=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function Xe(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const Ze=0,k=1,et={children:be,onSelect:We,selectedIndex:ze},tt={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},nt=e=>e.selectedIndex===null?k:Ze,ye=e=>{pe.checkPropTypes(et,e,"prop","Tabs");const s=Object.assign({},tt,e),{children:t,defaultFocus:n,defaultIndex:o,focusTabOnClick:a,onSelect:c}=s,p=Xe(s,Je),[y,d]=f.useState(n),[x]=f.useState(nt(p)),[C,v]=f.useState(x===k?o||0:null);if(f.useEffect(()=>{d(!1)},[]),x===k){const j=xe(t);f.useEffect(()=>{if(C!=null){const m=Math.max(0,j-1);v(Math.min(C,m))}},[j])}const u=(j,m,T)=>{typeof c=="function"&&c(j,m,T)===!1||(a&&d(!0),x===k&&v(j))};let g=Object.assign({},e,p);return g.focus=y,g.onSelect=u,C!=null&&(g.selectedIndex=C),delete g.defaultFocus,delete g.defaultIndex,delete g.focusTabOnClick,N.createElement(Qe,g,t)};ye.tabsRole="Tabs";const st=["children","className"];function rt(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const ot={className:"react-tabs__tab-list"},ge=e=>{const s=Object.assign({},ot,e),{children:t,className:n}=s,o=rt(s,st);return N.createElement("ul",Object.assign({},o,{className:A(n),role:"tablist"}),t)};ge.tabsRole="TabList";const at=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function lt(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const B="react-tabs__tab",it={className:B,disabledClassName:`${B}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${B}--selected`},Te=e=>{let s=f.useRef();const t=Object.assign({},it,e),{children:n,className:o,disabled:a,disabledClassName:c,focus:p,id:y,selected:d,selectedClassName:x,tabIndex:C,tabRef:v}=t,u=lt(t,at);return f.useEffect(()=>{d&&p&&s.current.focus()},[d,p]),N.createElement("li",Object.assign({},u,{className:A(o,{[x]:d,[c]:a}),ref:g=>{s.current=g,v&&v(g)},role:"tab",id:`tab${y}`,"aria-selected":d?"true":"false","aria-disabled":a?"true":"false","aria-controls":`panel${y}`,tabIndex:C||(d?"0":null),"data-rttab":!0}),n)};Te.tabsRole="Tab";const ct=["children","className","forceRender","id","selected","selectedClassName"];function dt(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const ae="react-tabs__tab-panel",ut={className:ae,forceRender:!1,selectedClassName:`${ae}--selected`},we=e=>{const s=Object.assign({},ut,e),{children:t,className:n,forceRender:o,id:a,selected:c,selectedClassName:p}=s,y=dt(s,ct);return N.createElement("div",Object.assign({},y,{className:A(n,{[p]:c}),role:"tabpanel",id:`panel${a}`,"aria-labelledby":`tab${a}`}),o||c?t:null)};we.tabsRole="TabPanel";function ft(e){return $e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const pt=h(ft)`
  cursor: pointer;
  font-size: 1.5em;
  position: relative;
`,bt=h.div`
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
`,ht=h.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`,xt=({children:e})=>{const[s,t]=f.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)};return l.jsxs("div",{onMouseEnter:n,onMouseLeave:o,style:{position:"relative",display:"inline-block"},children:[l.jsx(pt,{}),s&&e]})},mt=(e=!1)=>{const[s,t]=f.useState(e);return{isModalOpen:s,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},yt=h.div`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  flex: 0 0 auto;
`,V=h.div``,gt=h(V)`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.theme.primary};
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
`,Tt=h(V)`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.isGuest?e.theme.disabled:"inherit"};
`,wt=h.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`,le=h.button`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.color};
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`,vt=h(V)`
  font-size: 14px;
  color: ${e=>e.isGuest?e.theme.disabled:"#333"};
  font-weight: bold;
`,ie=({id:e,name:s,score:t,isGuest:n})=>{const[o,a]=f.useState(t);return l.jsx(fe,{shouldForwardProp:c=>c!=="isGuest",children:l.jsxs(yt,{children:[l.jsx(gt,{isGuest:n,children:e}),l.jsx(Tt,{isGuest:n,children:s}),l.jsxs(wt,{children:[l.jsx(le,{color:"#e74c3c",isGuest:n||o<=0,onClick:()=>{o<=0||a(c=>c-1)},children:"-1"}),l.jsx(vt,{isGuest:n,children:o}),l.jsx(le,{color:"#2ecc71",isGuest:n||o>=10,onClick:()=>{o>=10||a(c=>c+1)},children:"+1"})]})]})})},Ct=h(ye)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,jt=h(ge)`
  display: flex;
  gap: 10px;
`,ce=h(Te)`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;

  &.react-tabs__tab--selected {
    background-color: #fff;
    color: ${e=>e.theme.primary};
  }
`,de=h(we)``,St=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,Pt=h.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 10px;
`,$t=h.div`
  width: 85%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,It=h(ke)`
  width: 100%;
  background: #fff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 450px;
  overflow: auto;
`,ue=h.div`
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;var ve=(e=>(e.default="default",e.up="up",e.down="down",e))(ve||{});const Lt=()=>{const{scienceId:e}=Ie(),s=Re(),{isModalOpen:t,openModal:n,closeModal:o}=mt(!0),{data:a={id:"",students:[]},isError:c,isLoading:p}=_e({queryKey:["vsx",e],queryFn:async()=>(await Me.get("http://localhost:3000/vsx/"+e)).data.data,enabled:t}),[y,d]=f.useState("default"),{total:x,studentsLength:C,studentList:v}=f.useMemo(()=>{if(!a)return{total:0,studentsLength:0,studentList:[]};const u=a.students.length,g=a.students.filter(m=>!m.isGuest).length,j=y==="up"?[...a.students].sort((m,T)=>m.isGuest&&!T.isGuest?1:!m.isGuest&&T.isGuest?-1:!m.isGuest&&!T.isGuest?m.score-T.score:0):y==="down"?[...a.students].sort((m,T)=>m.isGuest&&!T.isGuest?1:!m.isGuest&&T.isGuest?-1:!m.isGuest&&!T.isGuest?T.score-m.score:0):a.students;return{total:u,studentsLength:g,studentList:j}},[a==null?void 0:a.students.length,y]);return c?l.jsx(Ge,{}):l.jsx(fe,{shouldForwardProp:u=>u!=="gap",children:l.jsxs(Ee,{gap:"10px",width:"100%",height:"85%",children:[l.jsxs(L,{onClick:n,children:["open ",e]}),l.jsx(L,{onClick:()=>s("/"),children:"Home"}),l.jsx(L,{onClick:()=>s(`/${parseInt(e||"301")-1}`),children:"prev"}),l.jsx(L,{onClick:()=>s(`/${parseInt(e||"301")+1}`),children:"next"}),l.jsx(Ne,{width:"clamp(300px, 40vw, 700px)",background:"#ebebeb",isModalOpen:t,onClose:o,isLoading:p,children:l.jsxs(St,{children:[l.jsxs(Pt,{children:[l.jsxs(Oe,{children:[e," Science"]})," ",l.jsx(Le,{}),l.jsxs("span",{children:[C,"/",x]})]}),l.jsxs(Ct,{children:[l.jsxs($t,{children:[l.jsxs(jt,{children:[l.jsx(ce,{children:"Student List"}),l.jsx(ce,{children:"Group"})]}),l.jsx(xt,{children:l.jsx(bt,{children:Fe(ve).map(u=>l.jsx(f.Fragment,{children:l.jsx(ht,{onClick:()=>d(u.value),children:u.label})},u.value))})})]}),l.jsxs(It,{children:[l.jsx(de,{children:l.jsx(ue,{children:v.map(u=>l.jsx(ie,{...u},u.id))})}),l.jsx(de,{children:l.jsx(ue,{children:v.filter(u=>!u.isGuest).map(u=>l.jsx(ie,{...u},u.id))})})]})]})]})})]})})};export{Lt as default};
