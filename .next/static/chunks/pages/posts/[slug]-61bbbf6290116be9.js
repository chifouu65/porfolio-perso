(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(6697)}])},1680:function(e,t,n){"use strict";n.d(t,{h_:function(){return L},Dx:function(){return N},WZ:function(){return b}});var r=n(5893),s=n(1664),i=n.n(s),o=n(3100),l=n(3838),a=n(2498),c=n(7822),d=n(4418),u=n(5059),m=(0,u.G)(function(e,t){let{htmlWidth:n,htmlHeight:s,alt:i,...o}=e;return(0,r.jsx)("img",{width:n,height:s,ref:t,alt:i,...o})});m.displayName="NativeImage";var h=n(6245),f=n(7294),x=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,p=n(5523),j=(0,u.G)(function(e,t){let{fallbackSrc:n,fallback:s,src:i,srcSet:o,align:l,fit:a,loading:c,ignoreFallback:d,crossOrigin:u,fallbackStrategy:j="beforeLoadOrError",referrerPolicy:g,...y}=e,_=null!=c||d||!(void 0!==n||void 0!==s),N=function(e){let{loading:t,src:n,srcSet:r,onLoad:s,onError:i,crossOrigin:o,sizes:l,ignoreFallback:a}=e,[c,d]=(0,f.useState)("pending");(0,f.useEffect)(()=>{d(n?"loading":"pending")},[n]);let u=(0,f.useRef)(),m=(0,f.useCallback)(()=>{if(!n)return;x();let e=new Image;e.src=n,o&&(e.crossOrigin=o),r&&(e.srcset=r),l&&(e.sizes=l),t&&(e.loading=t),e.onload=e=>{x(),d("loaded"),null==s||s(e)},e.onerror=e=>{x(),d("failed"),null==i||i(e)},u.current=e},[n,o,r,l,s,i,t]),x=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,h.G)(()=>{if(!a)return"loading"===c&&m(),()=>{x()}},[c,m,a]),a?"loaded":c}({...e,ignoreFallback:_}),b=x(N,j),L={ref:t,objectFit:a,objectPosition:l,..._?y:function(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}(y,["onError","onLoad"])};return b?s||(0,r.jsx)(p.m.img,{as:m,className:"chakra-image__placeholder",src:n,...L}):(0,r.jsx)(p.m.img,{as:m,src:i,srcSet:o,crossOrigin:u,loading:c,referrerPolicy:g,className:"chakra-image",...L})});j.displayName="Image";var g=n(1689),y=n(6864),_=n(1163);let N=e=>{let{children:t}=e,n=(0,_.useRouter)().pathname;return(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(l.r,{color:(0,a.ff)("purple.500","orange.200"),as:i(),href:n.split("[")[0],children:n.split("[")[0]}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(y.X,{})]}),(0,r.jsx)(c.i,{my:2}),(0,r.jsx)(d.X,{sx:{display:"flex",alignItems:"center",gap:"0.5rem"},as:"h2",fontSize:26,mt:1,mb:4,children:t})]})},b=e=>{let{src:t,alt:n,sx:s}=e;return(0,r.jsx)(j,{sx:s,borderRadius:"lg",w:"full",src:t,alt:n,mb:4})},L=e=>{let{children:t}=e;return(0,r.jsx)(g.C,{colorScheme:"green",mr:2,children:t})}},6697:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return g}});var r=n(5893),s=n(1163),i=n(2091),o=n(7294),l=n(6979),a=n(7822),c=n(8855),d=n(2498),u=n(3205),m=n(5197),h=n(1680),f=n(951),x=n(9008),p=n.n(x);let j=()=>{let e=(0,s.useRouter)(),{slug:t}=e.query,[n,x]=(0,o.useState)(null),[j,g]=(0,o.useState)(null),[y,_]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{if(t){let e=i.xu.find(e=>e.id===t);e?(x(e),_(!1)):(g("Post not found"),_(!1))}},[t]),y)?(0,r.jsx)("div",{children:"Loading..."}):j?(0,r.jsxs)("div",{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"Post not found - Noah Lhote"}),(0,r.jsx)("meta",{name:"og:title",content:"Post not found - Noah Lhote"}),(0,r.jsx)("meta",{name:"og:description",content:"Post not found"})]}),(0,r.jsxs)(f.Z,{title:"Post not found",children:[(0,r.jsxs)(l.W,{children:[(0,r.jsx)(h.Dx,{children:"Post not found"}),"The post you are looking for does not exist."]}),(0,r.jsx)(a.i,{my:4}),(0,r.jsx)(l.W,{children:(0,r.jsx)(c.z,{colorScheme:(0,d.ff)("purple","orange"),onClick:()=>e.back(),children:"Go back"})})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p(),{children:[(0,r.jsxs)("title",{children:[n.title," - Posts - Noah Lhote"]}),(0,r.jsx)("meta",{name:"og:title",content:"".concat(n.title," - Posts - Noah Lhote")}),(0,r.jsx)("meta",{name:"og:description",content:n.description}),(0,r.jsx)("meta",{name:"keywords",content:n.tags.map(e=>e)+", "+n.title})]}),(0,r.jsx)(f.Z,{title:n.title,children:(0,r.jsxs)(l.W,{children:[(0,r.jsx)(h.Dx,{children:n.title&&n.title+" "}),n.description.map((e,t)=>e.includes("$$")?(0,r.jsx)(u.x,{as:"h2",mb:2,fontWeight:"bold",fontSize:"xl",pl:2,bg:(0,d.ff)("purple.100","orange.100"),color:(0,d.ff)("purple.500","orange.500"),children:e.replace("$$","")},t):(0,r.jsx)(u.x,{mb:2,as:"p",fontSize:"xl",children:e},t)),(0,r.jsxs)(m.aV,{ml:4,my:4,children:[(0,r.jsxs)(m.HC,{children:[(0,r.jsx)(h.h_,{children:"Platform"}),(0,r.jsx)("span",{children:"Website"})]}),n.tags&&(0,r.jsxs)(m.HC,{children:[(0,r.jsx)(h.h_,{children:"Stack"}),(0,r.jsx)("span",{children:n.tags.map((e,t)=>(0,r.jsx)("span",{children:t===n.tags.length-1?e:e+", "},t))})]})]}),n.images&&n.images.map((e,t)=>(0,r.jsx)(h.WZ,{src:e.src.src},t))]})})]})};var g=!0;t.default=j},1163:function(e,t,n){e.exports=n(880)},6864:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var r=(0,n(78).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},1689:function(e,t,n){"use strict";n.d(t,{C:function(){return c}});var r=n(5059),s=n(1639),i=n(3179),o=n(5523),l=n(5432),a=n(5893),c=(0,r.G)(function(e,t){let n=(0,s.mq)("Badge",e),{className:r,...c}=(0,i.Lr)(e);return(0,a.jsx)(o.m.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})});c.displayName="Badge"},7822:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(5059),s=n(1639),i=n(3179),o=n(5523),l=n(5432),a=n(5893),c=(0,r.G)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:c,borderRightWidth:d,borderWidth:u,borderStyle:m,borderColor:h,...f}=(0,s.mq)("Divider",e),{className:x,orientation:p="horizontal",__css:j,...g}=(0,i.Lr)(e);return(0,a.jsx)(o.m.hr,{ref:t,"aria-orientation":p,...g,__css:{...f,border:"0",borderColor:h,borderStyle:m,...{vertical:{borderLeftWidth:n||d||u||"1px",height:"100%"},horizontal:{borderBottomWidth:r||c||u||"1px",width:"100%"}}[p],...j},className:(0,l.cx)("chakra-divider",x)})});c.displayName="Divider"},5197:function(e,t,n){"use strict";n.d(t,{HC:function(){return f},aV:function(){return h}});var r=n(6877),s=n(5227),i=n(2495),o=n(5059),l=n(1639),a=n(3179),c=n(5523),d=n(5893),[u,m]=(0,s.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),h=(0,o.G)(function(e,t){let n=(0,l.jC)("List",e),{children:r,styleType:s="none",stylePosition:o,spacing:m,...h}=(0,a.Lr)(e),f=(0,i.W)(r);return(0,d.jsx)(u,{value:n,children:(0,d.jsx)(c.m.ul,{ref:t,listStyleType:s,listStylePosition:o,role:"list",__css:{...n.container,...m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{}},...h,children:f})})});h.displayName="List",(0,o.G)((e,t)=>{let{as:n,...r}=e;return(0,d.jsx)(h,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList",(0,o.G)(function(e,t){let{as:n,...r}=e;return(0,d.jsx)(h,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})}).displayName="UnorderedList";var f=(0,o.G)(function(e,t){let n=m();return(0,d.jsx)(c.m.li,{ref:t,...e,__css:n.item})});f.displayName="ListItem",(0,o.G)(function(e,t){let n=m();return(0,d.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"}},function(e){e.O(0,[617,874,864,19,774,888,179],function(){return e(e.s=843)}),_N_E=e.O()}]);