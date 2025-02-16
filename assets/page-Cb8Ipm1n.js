import{r as f,R as O,G as $e,j as a,d as h,Y as pe,u as Ie,c as Re,C as Ee,B as k,M as Ne,T as Oe,I as Le,S as ke}from"./index-Cy1Qc-If.js";import{u as _e,a as Me}from"./mock-DGdPGZpK.js";import{g as Fe,c as De}from"./utils-BMchS2G-.js";import Ge from"./notfound-Bs55nKtq.js";var K={exports:{}},B,se;function Ae(){if(se)return B;se=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return B=e,B}var H,re;function Ue(){if(re)return H;re=1;var e=Ae();function s(){}function t(){}return t.resetWarningCache=s,H=function(){function n(c,p,y,u,x,w){if(w!==e){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}n.isRequired=n;function l(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:l,element:n,elementType:n,instanceOf:l,node:n,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:t,resetWarningCache:s};return o.PropTypes=o,o},H}var oe;function We(){return oe||(oe=1,K.exports=Ue()()),K.exports}var be=We();function Q(e){return s=>!!s.type&&s.type.tabsRole===e}const L=Q("Tab"),D=Q("TabList"),G=Q("TabPanel");function qe(e){return L(e)||D(e)||G(e)}function V(e,s){return f.Children.map(e,t=>t===null?null:qe(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:V(t.props.children,s)})):t)}function M(e,s){return f.Children.forEach(e,t=>{t!==null&&(L(t)||G(t)?s(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(D(t)&&s(t),M(t.props.children,s)))})}function he(e,s,t){let n,l=0,o=0,c=!1;const p=[],y=e[s];return M(y,u=>{D(u)&&(u.props&&u.props.children&&typeof u.props.children=="object"&&M(u.props.children,x=>p.push(x)),c&&(n=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),c=!0),L(u)?((!c||p.indexOf(u)===-1)&&(n=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),l++):G(u)&&o++}),!n&&l!==o&&(n=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${l} 'Tab' and ${o} 'TabPanel'.`)),n}function ze(e,s,t,n,l){const o=e[s],c=l||s;let p=null;return o&&typeof o!="function"?p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof o}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&o==null&&(p=new Error(`The ${n} \`${c}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),p}function Ke(e,s,t,n,l){const o=e[s],c=l||s;let p=null;if(o!=null&&typeof o!="number")p=new Error(`Invalid ${n} \`${c}\` of type \`${typeof o}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&o!=null)return new Error(`The ${n} \`${c}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${c}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return p}function xe(e){var s,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(s=0;s<l;s++)e[s]&&(t=xe(e[s]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function A(){for(var e,s,t=0,n="",l=arguments.length;t<l;t++)(e=arguments[t])&&(s=xe(e))&&(n&&(n+=" "),n+=s);return n}function me(e){let s=0;return M(e,t=>{L(t)&&s++}),s}const Be=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function He(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}function ye(e){return e&&"getAttribute"in e}function ae(e){return ye(e)&&e.getAttribute("data-rttab")}function E(e){return ye(e)&&e.getAttribute("aria-disabled")==="true"}let F;function Ye(e){const s=e||(typeof window<"u"?window:void 0);try{F=!!(typeof s<"u"&&s.document&&s.document.activeElement)}catch{F=!1}}const Ve={className:"react-tabs",focus:!1},Qe={children:he},Je=e=>{be.checkPropTypes(Qe,e,"prop","UncontrolledTabs");let s=f.useRef([]),t=f.useRef([]);const n=f.useRef();function l(r,i){if(r<0||r>=u())return;const{onSelect:b,selectedIndex:N}=e;b(r,N,i)}function o(r){const i=u();for(let b=r+1;b<i;b++)if(!E(x(b)))return b;for(let b=0;b<r;b++)if(!E(x(b)))return b;return r}function c(r){let i=r;for(;i--;)if(!E(x(i)))return i;for(i=u();i-- >r;)if(!E(x(i)))return i;return r}function p(){const r=u();for(let i=0;i<r;i++)if(!E(x(i)))return i;return null}function y(){let r=u();for(;r--;)if(!E(x(r)))return r;return null}function u(){const{children:r}=e;return me(r)}function x(r){return s.current[`tabs-${r}`]}function w(){let r=0;const{children:i,disabledTabClassName:b,focus:N,forceRenderTabPanel:g,selectedIndex:j,selectedTabClassName:S,selectedTabPanelClassName:J,environment:X}=e;t.current=t.current||[];let je=t.current.length-u();const Se=f.useId();for(;je++<0;)t.current.push(`${Se}${t.current.length}`);return V(i,R=>{let W=R;if(D(R)){let $=0,Z=!1;F==null&&Ye(X);const ee=X||(typeof window<"u"?window:void 0);F&&ee&&(Z=O.Children.toArray(R.props.children).filter(L).some((te,q)=>ee.document.activeElement===x(q))),W=f.cloneElement(R,{children:V(R.props.children,te=>{const q=`tabs-${$}`,ne=j===$,z={tabRef:Pe=>{s.current[q]=Pe},id:t.current[$],selected:ne,focus:ne&&(N||Z)};return S&&(z.selectedClassName=S),b&&(z.disabledClassName=b),$++,f.cloneElement(te,z)})})}else if(G(R)){const $={id:t.current[r],selected:j===r};g&&($.forceRender=g),J&&($.selectedClassName=J),r++,W=f.cloneElement(R,$)}return W})}function C(r){const{direction:i,disableUpDownKeys:b,disableLeftRightKeys:N}=e;if(d(r.target)){let{selectedIndex:g}=e,j=!1,S=!1;(r.code==="Space"||r.keyCode===32||r.code==="Enter"||r.keyCode===13)&&(j=!0,S=!1,P(r)),!N&&(r.keyCode===37||r.code==="ArrowLeft")||!b&&(r.keyCode===38||r.code==="ArrowUp")?(i==="rtl"?g=o(g):g=c(g),j=!0,S=!0):!N&&(r.keyCode===39||r.code==="ArrowRight")||!b&&(r.keyCode===40||r.code==="ArrowDown")?(i==="rtl"?g=c(g):g=o(g),j=!0,S=!0):r.keyCode===35||r.code==="End"?(g=y(),j=!0,S=!0):(r.keyCode===36||r.code==="Home")&&(g=p(),j=!0,S=!0),j&&r.preventDefault(),S&&l(g,r)}}function P(r){let i=r.target;do if(d(i)){if(E(i))return;const b=[].slice.call(i.parentNode.children).filter(ae).indexOf(i);l(b,r);return}while((i=i.parentNode)!=null)}function d(r){if(!ae(r))return!1;let i=r.parentElement;do{if(i===n.current)return!0;if(i.getAttribute("data-rttabs"))break;i=i.parentElement}while(i);return!1}const T=Object.assign({},Ve,e),{className:I,domRef:m}=T,v=He(T,Be);return O.createElement("div",Object.assign({},v,{className:A(I),onClick:P,onKeyDown:C,ref:r=>{n.current=r,m&&m(r)},"data-rttabs":!0}),w())},Xe=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function Ze(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const et=0,_=1,tt={children:he,onSelect:ze,selectedIndex:Ke},nt={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},st=e=>e.selectedIndex===null?_:et,ge=e=>{be.checkPropTypes(tt,e,"prop","Tabs");const s=Object.assign({},nt,e),{children:t,defaultFocus:n,defaultIndex:l,focusTabOnClick:o,onSelect:c}=s,p=Ze(s,Xe),[y,u]=f.useState(n),[x]=f.useState(st(p)),[w,C]=f.useState(x===_?l||0:null);if(f.useEffect(()=>{u(!1)},[]),x===_){const T=me(t);f.useEffect(()=>{if(w!=null){const I=Math.max(0,T-1);C(Math.min(w,I))}},[T])}const P=(T,I,m)=>{typeof c=="function"&&c(T,I,m)===!1||(o&&u(!0),x===_&&C(T))};let d=Object.assign({},e,p);return d.focus=y,d.onSelect=P,w!=null&&(d.selectedIndex=w),delete d.defaultFocus,delete d.defaultIndex,delete d.focusTabOnClick,O.createElement(Je,d,t)};ge.tabsRole="Tabs";const rt=["children","className"];function ot(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const at={className:"react-tabs__tab-list"},Te=e=>{const s=Object.assign({},at,e),{children:t,className:n}=s,l=ot(s,rt);return O.createElement("ul",Object.assign({},l,{className:A(n),role:"tablist"}),t)};Te.tabsRole="TabList";const lt=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function it(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const Y="react-tabs__tab",ct={className:Y,disabledClassName:`${Y}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${Y}--selected`},we=e=>{let s=f.useRef();const t=Object.assign({},ct,e),{children:n,className:l,disabled:o,disabledClassName:c,focus:p,id:y,selected:u,selectedClassName:x,tabIndex:w,tabRef:C}=t,P=it(t,lt);return f.useEffect(()=>{u&&p&&s.current.focus()},[u,p]),O.createElement("li",Object.assign({},P,{className:A(l,{[x]:u,[c]:o}),ref:d=>{s.current=d,C&&C(d)},role:"tab",id:`tab${y}`,"aria-selected":u?"true":"false","aria-disabled":o?"true":"false","aria-controls":`panel${y}`,tabIndex:w||(u?"0":null),"data-rttab":!0}),n)};we.tabsRole="Tab";const dt=["children","className","forceRender","id","selected","selectedClassName"];function ut(e,s){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(s.includes(n))continue;t[n]=e[n]}return t}const le="react-tabs__tab-panel",ft={className:le,forceRender:!1,selectedClassName:`${le}--selected`},Ce=e=>{const s=Object.assign({},ft,e),{children:t,className:n,forceRender:l,id:o,selected:c,selectedClassName:p}=s,y=ut(s,dt);return O.createElement("div",Object.assign({},y,{className:A(n,{[p]:c}),role:"tabpanel",id:`panel${o}`,"aria-labelledby":`tab${o}`}),l||c?t:null)};Ce.tabsRole="TabPanel";function pt(e){return $e({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const bt=h(pt)`
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
`,mt=({children:e})=>{const[s,t]=f.useState(!1),n=()=>{t(!0)},l=()=>{t(!1)};return a.jsxs("div",{onMouseEnter:n,onMouseLeave:l,style:{position:"relative",display:"inline-block"},children:[a.jsx(bt,{}),s&&e]})},yt=(e=!1)=>{const[s,t]=f.useState(e);return{isModalOpen:s,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},U=h.div``,gt=h(U)`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  flex: 0 0 auto;
  cursor: ${e=>e.isGuest?"not-allowed":"pointer"};
`,Tt=h(U)`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.theme.primary};
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
`,wt=h(U)`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.isGuest?e.theme.disabled:"inherit"};
`,Ct=h.div`
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
`,vt=h(U)`
  font-size: 14px;
  color: ${e=>e.isGuest?e.theme.disabled:"#333"};
  font-weight: bold;
`,jt=({id:e,name:s,score:t,isGuest:n,handlePlusClick:l,handleMinusClick:o})=>a.jsx(pe,{shouldForwardProp:c=>c!=="isGuest",children:a.jsxs(gt,{isGuest:n,children:[a.jsx(Tt,{isGuest:n,children:e}),a.jsx(wt,{isGuest:n,children:s}),a.jsxs(Ct,{children:[a.jsx(ie,{color:"#e74c3c",isGuest:n||t<=0,onClick:o,children:"-1"}),a.jsx(vt,{isGuest:n,children:t}),a.jsx(ie,{color:"#2ecc71",isGuest:n||t>=10,onClick:l,children:"+1"})]})]})}),St=f.memo(jt),ce=({score:e,...s})=>{const[t,n]=f.useState(e),l=()=>{t>=10||n(c=>c+1)},o=()=>{t<=0||n(c=>c-1)};return a.jsx(St,{handlePlusClick:l,handleMinusClick:o,score:t,...s})},Pt=h(ge)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,$t=h(Te)`
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
`,ue=h(Ce)``,It=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,Rt=h.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 10px;
`,Et=h.div`
  width: 85%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Nt=h(ke)`
  width: 100%;
  background: #fff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 430px;
  overflow: auto;
`,fe=h.div`
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;var ve=(e=>(e.default="default",e.up="up",e.down="down",e))(ve||{});const Mt=()=>{const{scienceId:e}=Ie(),s=Re(),{isModalOpen:t,openModal:n,closeModal:l}=yt(!0),{data:o={id:"",students:[]},isError:c,isLoading:p}=_e({queryKey:["vsx",e],queryFn:async()=>(await Me.get("http://localhost:3000/vsx/"+e)).data.data,enabled:t}),[y,u]=f.useState("default"),{total:x,studentsLength:w,studentList:C,groupData:P}=f.useMemo(()=>{if(!o)return{total:0,studentsLength:0,studentList:[],groupData:[]};const d=o.students.length,T=o.students.filter(m=>!m.isGuest).length,I=y==="up"?[...o.students].sort((m,v)=>m.isGuest&&!v.isGuest?1:!m.isGuest&&v.isGuest?-1:!m.isGuest&&!v.isGuest?m.score-v.score:0):y==="down"?[...o.students].sort((m,v)=>m.isGuest&&!v.isGuest?1:!m.isGuest&&v.isGuest?-1:!m.isGuest&&!v.isGuest?v.score-m.score:0):o.students;return{total:d,studentsLength:T,studentList:I,groupData:Fe(o.students)}},[o==null?void 0:o.students.length,y]);return c?a.jsx(Ge,{}):a.jsx(pe,{shouldForwardProp:d=>d!=="gap",children:a.jsxs(Ee,{gap:"10px",width:"100%",height:"85%",children:[a.jsxs(k,{onClick:n,children:["open ",e]}),a.jsx(k,{onClick:()=>s("/"),children:"Home"}),a.jsx(k,{onClick:()=>s(`/${parseInt(e||"301")-1}`),children:"prev"}),a.jsx(k,{onClick:()=>s(`/${parseInt(e||"301")+1}`),children:"next"}),a.jsx(Ne,{width:"clamp(300px, 40vw, 700px)",background:"#ebebeb",isModalOpen:t,onClose:l,isLoading:p,children:a.jsxs(It,{children:[a.jsxs(Rt,{children:[a.jsxs(Oe,{children:[e," Science"]})," ",a.jsx(Le,{}),a.jsxs("span",{children:[w,"/",x]})]}),a.jsxs(Pt,{children:[a.jsxs(Et,{children:[a.jsxs($t,{children:[a.jsx(de,{children:"Student List"}),a.jsx(de,{children:"Group"})]}),a.jsx(mt,{children:a.jsx(ht,{children:De(ve).map(d=>a.jsx(f.Fragment,{children:a.jsx(xt,{onClick:()=>u(d.value),children:d.label})},d.value))})})]}),a.jsxs(Nt,{children:[a.jsx(ue,{children:a.jsx(fe,{children:C.map(d=>a.jsx(ce,{...d},d.id))})}),a.jsx(ue,{children:a.jsx(fe,{children:P.map(d=>a.jsxs(f.Fragment,{children:[a.jsx("div",{style:{gridColumn:"1/-1"},children:d.joinDate}),d.list.map(T=>a.jsx(ce,{...T},T.id))]},d.joinDate))})})]})]})]})})]})})};export{Mt as default};
