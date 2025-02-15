import{G as Se,r as f,R,j as c,Y as fe,d as h,c as $e,b as Ie,C as Re,B as _,M as Ne,T as Ee,I as Oe,S as _e}from"./index-CTWxlmHO.js";import{u as ke,a as Le}from"./mock-Bh0s89u2.js";import Fe from"./notfound-B-aCHSy6.js";import"./utils-RgTJqyoB.js";function Me(e){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}var z={exports:{}},G,ne;function Ae(){if(ne)return G;ne=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return G=e,G}var K,re;function De(){if(re)return K;re=1;var e=Ae();function r(){}function t(){}return t.resetWarningCache=r,K=function(){function n(d,u,x,l,b,T){if(T!==e){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}n.isRequired=n;function a(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:a,element:n,elementType:n,instanceOf:a,node:n,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:r};return o.PropTypes=o,o},K}var se;function Ue(){return se||(se=1,z.exports=De()()),z.exports}var pe=Ue();function Y(e){return r=>!!r.type&&r.type.tabsRole===e}const E=Y("Tab"),M=Y("TabList"),A=Y("TabPanel");function qe(e){return E(e)||M(e)||A(e)}function H(e,r){return f.Children.map(e,t=>t===null?null:qe(t)?r(t):t.props&&t.props.children&&typeof t.props.children=="object"?f.cloneElement(t,Object.assign({},t.props,{children:H(t.props.children,r)})):t)}function L(e,r){return f.Children.forEach(e,t=>{t!==null&&(E(t)||A(t)?r(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(M(t)&&r(t),L(t.props.children,r)))})}function be(e,r,t){let n,a=0,o=0,d=!1;const u=[],x=e[r];return L(x,l=>{M(l)&&(l.props&&l.props.children&&typeof l.props.children=="object"&&L(l.props.children,b=>u.push(b)),d&&(n=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),d=!0),E(l)?((!d||u.indexOf(l)===-1)&&(n=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),a++):A(l)&&o++}),!n&&a!==o&&(n=new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${t}\`. Received ${a} 'Tab' and ${o} 'TabPanel'.`)),n}function We(e,r,t,n,a){const o=e[r],d=a||r;let u=null;return o&&typeof o!="function"?u=new Error(`Invalid ${n} \`${d}\` of type \`${typeof o}\` supplied to \`${t}\`, expected \`function\`.`):e.selectedIndex!=null&&o==null&&(u=new Error(`The ${n} \`${d}\` is marked as required in \`${t}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`)),u}function ze(e,r,t,n,a){const o=e[r],d=a||r;let u=null;if(o!=null&&typeof o!="number")u=new Error(`Invalid ${n} \`${d}\` of type \`${typeof o}\` supplied to \`${t}\`, expected \`number\`.`);else if(e.defaultIndex!=null&&o!=null)return new Error(`The ${n} \`${d}\` cannot be used together with \`defaultIndex\` in \`${t}\`.
Either remove \`${d}\` to let \`${t}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);return u}function he(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=he(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function D(){for(var e,r,t=0,n="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=he(e))&&(n&&(n+=" "),n+=r);return n}function xe(e){let r=0;return L(e,t=>{E(t)&&r++}),r}const Ge=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function Ke(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}function me(e){return e&&"getAttribute"in e}function oe(e){return me(e)&&e.getAttribute("data-rttab")}function S(e){return me(e)&&e.getAttribute("aria-disabled")==="true"}let F;function Be(e){const r=e||(typeof window<"u"?window:void 0);try{F=!!(typeof r<"u"&&r.document&&r.document.activeElement)}catch{F=!1}}const He={className:"react-tabs",focus:!1},Ye={children:be},Ve=e=>{pe.checkPropTypes(Ye,e,"prop","UncontrolledTabs");let r=f.useRef([]),t=f.useRef([]);const n=f.useRef();function a(s,i){if(s<0||s>=l())return;const{onSelect:p,selectedIndex:I}=e;p(s,I,i)}function o(s){const i=l();for(let p=s+1;p<i;p++)if(!S(b(p)))return p;for(let p=0;p<s;p++)if(!S(b(p)))return p;return s}function d(s){let i=s;for(;i--;)if(!S(b(i)))return i;for(i=l();i-- >s;)if(!S(b(i)))return i;return s}function u(){const s=l();for(let i=0;i<s;i++)if(!S(b(i)))return i;return null}function x(){let s=l();for(;s--;)if(!S(b(s)))return s;return null}function l(){const{children:s}=e;return xe(s)}function b(s){return r.current[`tabs-${s}`]}function T(){let s=0;const{children:i,disabledTabClassName:p,focus:I,forceRenderTabPanel:m,selectedIndex:w,selectedTabClassName:C,selectedTabPanelClassName:Q,environment:J}=e;t.current=t.current||[];let ve=t.current.length-l();const je=f.useId();for(;ve++<0;)t.current.push(`${je}${t.current.length}`);return H(i,P=>{let U=P;if(M(P)){let j=0,X=!1;F==null&&Be(J);const Z=J||(typeof window<"u"?window:void 0);F&&Z&&(X=R.Children.toArray(P.props.children).filter(E).some((ee,q)=>Z.document.activeElement===b(q))),U=f.cloneElement(P,{children:H(P.props.children,ee=>{const q=`tabs-${j}`,te=w===j,W={tabRef:Pe=>{r.current[q]=Pe},id:t.current[j],selected:te,focus:te&&(I||X)};return C&&(W.selectedClassName=C),p&&(W.disabledClassName=p),j++,f.cloneElement(ee,W)})})}else if(A(P)){const j={id:t.current[s],selected:w===s};m&&(j.forceRender=m),Q&&(j.selectedClassName=Q),s++,U=f.cloneElement(P,j)}return U})}function g(s){const{direction:i,disableUpDownKeys:p,disableLeftRightKeys:I}=e;if(y(s.target)){let{selectedIndex:m}=e,w=!1,C=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(w=!0,C=!1,$(s)),!I&&(s.keyCode===37||s.code==="ArrowLeft")||!p&&(s.keyCode===38||s.code==="ArrowUp")?(i==="rtl"?m=o(m):m=d(m),w=!0,C=!0):!I&&(s.keyCode===39||s.code==="ArrowRight")||!p&&(s.keyCode===40||s.code==="ArrowDown")?(i==="rtl"?m=d(m):m=o(m),w=!0,C=!0):s.keyCode===35||s.code==="End"?(m=x(),w=!0,C=!0):(s.keyCode===36||s.code==="Home")&&(m=u(),w=!0,C=!0),w&&s.preventDefault(),C&&a(m,s)}}function $(s){let i=s.target;do if(y(i)){if(S(i))return;const p=[].slice.call(i.parentNode.children).filter(oe).indexOf(i);a(p,s);return}while((i=i.parentNode)!=null)}function y(s){if(!oe(s))return!1;let i=s.parentElement;do{if(i===n.current)return!0;if(i.getAttribute("data-rttabs"))break;i=i.parentElement}while(i);return!1}const v=Object.assign({},He,e),{className:N,domRef:O}=v,Ce=Ke(v,Ge);return R.createElement("div",Object.assign({},Ce,{className:D(N),onClick:$,onKeyDown:g,ref:s=>{n.current=s,O&&O(s)},"data-rttabs":!0}),T())},Qe=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];function Je(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}const Xe=0,k=1,Ze={children:be,onSelect:We,selectedIndex:ze},et={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},tt=e=>e.selectedIndex===null?k:Xe,ye=e=>{pe.checkPropTypes(Ze,e,"prop","Tabs");const r=Object.assign({},et,e),{children:t,defaultFocus:n,defaultIndex:a,focusTabOnClick:o,onSelect:d}=r,u=Je(r,Qe),[x,l]=f.useState(n),[b]=f.useState(tt(u)),[T,g]=f.useState(b===k?a||0:null);if(f.useEffect(()=>{l(!1)},[]),b===k){const v=xe(t);f.useEffect(()=>{if(T!=null){const N=Math.max(0,v-1);g(Math.min(T,N))}},[v])}const $=(v,N,O)=>{typeof d=="function"&&d(v,N,O)===!1||(o&&l(!0),b===k&&g(v))};let y=Object.assign({},e,u);return y.focus=x,y.onSelect=$,T!=null&&(y.selectedIndex=T),delete y.defaultFocus,delete y.defaultIndex,delete y.focusTabOnClick,R.createElement(Ve,y,t)};ye.tabsRole="Tabs";const nt=["children","className"];function rt(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}const st={className:"react-tabs__tab-list"},Te=e=>{const r=Object.assign({},st,e),{children:t,className:n}=r,a=rt(r,nt);return R.createElement("ul",Object.assign({},a,{className:D(n),role:"tablist"}),t)};Te.tabsRole="TabList";const ot=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];function at(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}const B="react-tabs__tab",lt={className:B,disabledClassName:`${B}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${B}--selected`},ge=e=>{let r=f.useRef();const t=Object.assign({},lt,e),{children:n,className:a,disabled:o,disabledClassName:d,focus:u,id:x,selected:l,selectedClassName:b,tabIndex:T,tabRef:g}=t,$=at(t,ot);return f.useEffect(()=>{l&&u&&r.current.focus()},[l,u]),R.createElement("li",Object.assign({},$,{className:D(a,{[b]:l,[d]:o}),ref:y=>{r.current=y,g&&g(y)},role:"tab",id:`tab${x}`,"aria-selected":l?"true":"false","aria-disabled":o?"true":"false","aria-controls":`panel${x}`,tabIndex:T||(l?"0":null),"data-rttab":!0}),n)};ge.tabsRole="Tab";const it=["children","className","forceRender","id","selected","selectedClassName"];function ct(e,r){if(e==null)return{};var t={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;t[n]=e[n]}return t}const ae="react-tabs__tab-panel",dt={className:ae,forceRender:!1,selectedClassName:`${ae}--selected`},we=e=>{const r=Object.assign({},dt,e),{children:t,className:n,forceRender:a,id:o,selected:d,selectedClassName:u}=r,x=ct(r,it);return R.createElement("div",Object.assign({},x,{className:D(n,{[u]:d}),role:"tabpanel",id:`panel${o}`,"aria-labelledby":`tab${o}`}),a||d?t:null)};we.tabsRole="TabPanel";const ut=(e=!1)=>{const[r,t]=f.useState(e);return{isModalOpen:r,openModal:()=>{t(!0)},closeModal:()=>{t(!1)}}},ft=h.div`
  width: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  flex: 0 0 auto;
`,V=h.div``,pt=h(V)`
  background-color: ${e=>e.isGuest?e.theme.disabled:e.theme.primary};
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 16px;
`,bt=h(V)`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.isGuest?e.theme.disabled:"inherit"};
`,ht=h.div`
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
`,xt=h(V)`
  font-size: 14px;
  color: ${e=>e.isGuest?e.theme.disabled:"#333"};
  font-weight: bold;
`,ie=({id:e,name:r,score:t,isGuest:n})=>{const[a,o]=f.useState(t);return c.jsx(fe,{shouldForwardProp:d=>d!=="isGuest",children:c.jsxs(ft,{children:[c.jsx(pt,{isGuest:n,children:e}),c.jsx(bt,{isGuest:n,children:r}),c.jsxs(ht,{children:[c.jsx(le,{color:"#e74c3c",isGuest:n||a<=0,onClick:()=>{a<=0||o(d=>d-1)},children:"-1"}),c.jsx(xt,{isGuest:n,children:a}),c.jsx(le,{color:"#2ecc71",isGuest:n||a>=10,onClick:()=>{a>=10||o(d=>d+1)},children:"+1"})]})]})})},mt=h(ye)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,yt=h(Te)`
  display: flex;
  gap: 10px;
`,ce=h(ge)`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  background-color: #ddd;

  &.react-tabs__tab--selected {
    background-color: #fff;
    color: ${e=>e.theme.primary};
  }
`,de=h(we)``,Tt=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`,gt=h.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 10px;
`,wt=h.div`
  width: 85%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ct=h(_e)`
  width: 100%;
  background: #fff;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 450px;
  overflow: auto;
`,vt=h(Me)`
  cursor: pointer;
  font-size: 1.5em;
`,ue=h.div`
  width: 85%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`,It=()=>{const{scienceId:e}=$e(),r=Ie(),{isModalOpen:t,openModal:n,closeModal:a}=ut(!0),{data:o={id:"",students:[]},isError:d,isLoading:u}=ke({queryKey:["vsx",e],queryFn:async()=>(await Le.get("http://localhost:3000/vsx/"+e)).data.data,enabled:t}),x=f.useMemo(()=>{if(!o)return{total:0,studentsLength:0};const l=o.students.length,b=o.students.filter(T=>!T.isGuest).length;return{total:l,studentsLength:b}},[o==null?void 0:o.students.length]);return d?c.jsx(Fe,{}):c.jsx(fe,{shouldForwardProp:l=>l!=="gap",children:c.jsxs(Re,{gap:"10px",width:"100%",height:"85%",children:[c.jsxs(_,{onClick:n,children:["open ",e]}),c.jsx(_,{onClick:()=>r(-1),children:"back"}),c.jsx(_,{onClick:()=>r(`/${parseInt(e||"301")-1}`),children:"prev"}),c.jsx(_,{onClick:()=>r(`/${parseInt(e||"301")+1}`),children:"next"}),c.jsx(Ne,{width:"clamp(300px, 40vw, 700px)",background:"#ebebeb",isModalOpen:t,onClose:a,isLoading:u,children:c.jsxs(Tt,{children:[c.jsxs(gt,{children:[c.jsxs(Ee,{children:[e," Science"]})," ",c.jsx(Oe,{}),c.jsxs("span",{children:[x.studentsLength,"/",x.total]})]}),c.jsxs(mt,{children:[c.jsxs(wt,{children:[c.jsxs(yt,{children:[c.jsx(ce,{children:"Student List"}),c.jsx(ce,{children:"Group"})]}),c.jsx(vt,{})]}),c.jsxs(Ct,{children:[c.jsx(de,{children:c.jsx(ue,{children:o.students.map(l=>c.jsx(ie,{...l},l.id))})}),c.jsx(de,{children:c.jsx(ue,{children:o.students.filter(l=>!l.isGuest).map(l=>c.jsx(ie,{...l},l.id))})})]})]})]})})]})})};export{It as default};
