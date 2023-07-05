"use strict";(self.webpackChunkcrm_booking=self.webpackChunkcrm_booking||[]).push([[744],{3577:function(e,n,r){r.d(n,{Z:function(){return M}});var o=r(2791),t=r(4942),a=r(9439),i=r(1694),c=r.n(i),l=r(5501),s=r(4170),d=r(1929),u=r(1113),m=r(7295),p=r(7139),b=function(e){var n=e.children,r=(0,o.useContext(d.E_).getPrefixCls)("breadcrumb");return o.createElement("li",{className:"".concat(r,"-separator"),"aria-hidden":"true"},""===n?n:n||"/")};b.__ANT_BREADCRUMB_SEPARATOR=!0;var f=b,g=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r},h=function(e){var n=e.prefixCls,r=e.separator,t=void 0===r?"/":r,a=e.children,i=e.menu,c=e.overlay,l=e.dropdownProps,s=e.href,u=g(e,["prefixCls","separator","children","menu","overlay","dropdownProps","href"]),b=(0,o.useContext(d.E_).getPrefixCls)("breadcrumb",n);var h;return h=function(e){if(i||c){var n=Object.assign({},l);if(i){var r=i||{},t=r.items,a=g(r,["items"]);n.menu=Object.assign(Object.assign({},a),{items:null===t||void 0===t?void 0:t.map((function(e,n){var r=e.key,t=e.title,a=e.label,i=e.path,c=g(e,["key","title","label","path"]),l=null!==a&&void 0!==a?a:t;return i&&(l=o.createElement("a",{href:"".concat(s).concat(i)},l)),Object.assign(Object.assign({},c),{key:null!==r&&void 0!==r?r:n,label:l})}))})}else c&&(n.overlay=c);return o.createElement(p.Z,Object.assign({placement:"bottom"},n),o.createElement("span",{className:"".concat(b,"-overlay-link")},e,o.createElement(m.Z,null)))}return e}(h=void 0!==s?o.createElement("a",Object.assign({className:"".concat(b,"-link"),href:s},u),a):o.createElement("span",Object.assign({className:"".concat(b,"-link")},u),a)),void 0!==a&&null!==a?o.createElement(o.Fragment,null,o.createElement("li",null,h),t&&o.createElement(f,null,t)):null};h.__ANT_BREADCRUMB_ITEM=!0;var v=h,y=r(5564),C=r(9922),S=r(7521),x=function(e){var n,r,o=e.componentCls,a=e.iconCls;return(0,t.Z)({},o,Object.assign(Object.assign({},(0,S.Wf)(e)),(r={color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize},(0,t.Z)(r,a,{fontSize:e.breadcrumbIconFontSize}),(0,t.Z)(r,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,t.Z)(r,"a",Object.assign({color:e.breadcrumbLinkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,S.Qy)(e))),(0,t.Z)(r,"li:last-child",{color:e.breadcrumbLastItemColor}),(0,t.Z)(r,"".concat(o,"-separator"),{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor}),(0,t.Z)(r,"".concat(o,"-link"),(0,t.Z)({},"\n          > ".concat(a," + span,\n          > ").concat(a," + a\n        "),{marginInlineStart:e.marginXXS})),(0,t.Z)(r,"".concat(o,"-overlay-link"),(n={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,t.Z)(n,"> ".concat(a),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,t.Z)(n,"&:hover",{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}}),(0,t.Z)(n,"a",{"&:hover":{backgroundColor:"transparent"}}),n)),(0,t.Z)(r,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),r)))},O=(0,y.Z)("Breadcrumb",(function(e){var n=(0,C.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[x(n)]})),j=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r};function k(e){var n=e.breadcrumbName,r=e.children,o=j(e,["breadcrumbName","children"]),t=Object.assign({title:n},o);return r&&(t.menu={items:r.map((function(e){var n=e.breadcrumbName,r=j(e,["breadcrumbName"]);return Object.assign(Object.assign({},r),{title:n})}))}),t}var E=function(e,n){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)n.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(r[o[t]]=e[o[t]])}return r};var Z=function(e){var n,r=e,i=r.prefixCls,m=r.separator,p=void 0===m?"/":m,b=r.style,g=r.className,h=r.rootClassName,y=r.routes,C=r.items,S=r.children,x=r.itemRender,j=r.params,Z=void 0===j?{}:j,w=E(r,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),N=o.useContext(d.E_),P=N.getPrefixCls,M=N.direction,T=P("breadcrumb",i),_=O(T),D=(0,a.Z)(_,2),L=D[0],I=D[1],R=function(e,n){return(0,o.useMemo)((function(){return e||(n?n.map(k):null)}),[e,n])}(C,y);var z=x||function(e){var n=function(e,n){if(void 0===e.title)return null;var r=Object.keys(n).join("|");return"object"===typeof e.title?e.title:String(e.title).replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return n[r]||e}))}(e,Z);return n};if(R&&R.length>0){var B=[],X=C||y;n=R.map((function(e,n){var r=e.path,t=e.key,a=e.type,i=e.menu,c=e.overlay,l=e.onClick,d=e.className,u=e.separator,m=function(e,n){if(void 0===n)return n;var r=(n||"").replace(/^\//,"");return Object.keys(e).forEach((function(n){r=r.replace(":".concat(n),e[n])})),r}(Z,r);void 0!==m&&B.push(m);var b=null!==t&&void 0!==t?t:n;if("separator"===a)return o.createElement(f,{key:b},u);var g={},h=n===R.length-1;i?g.menu=i:c&&(g.overlay=c),d&&(g.className=d);var y=e.href;return B.length&&void 0!==m&&(y="#/".concat(B.join("/"))),o.createElement(v,Object.assign({key:b},g,(0,s.Z)(e,{data:!0,aria:!0}),{href:y,separator:h?"":p,onClick:l}),z(e,Z,X,B))}))}else if(S){var F=(0,l.Z)(S).length;n=(0,l.Z)(S).map((function(e,n){if(!e)return e;var r=n===F-1;return(0,u.Tm)(e,{separator:r?"":p,key:n})}))}var H=c()(T,(0,t.Z)({},"".concat(T,"-rtl"),"rtl"===M),g,h,I);return L(o.createElement("nav",Object.assign({className:H,style:b},w),o.createElement("ol",null,n)))};Z.Item=v,Z.Separator=f;var w=Z,N=r(1087),P=r(184);function M(){return(0,P.jsx)("div",{className:"breadcrumb",children:(0,P.jsx)(w,{items:[{title:"Home"},{title:(0,P.jsx)(N.rU,{to:"",children:"Vi\u1ec7t Nam"})},{title:(0,P.jsx)(N.rU,{to:"",children:"L\xe2m \u0110\u1ed3ng"})},{title:(0,P.jsx)(N.rU,{to:"",children:"\u0110\xe0 L\u1ea1t"})},{title:"K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm "}]})})}},6243:function(e,n,r){r(2791);var o=r(184);n.Z=function(){return(0,o.jsx)("div",{style:{height:"200px",background:"#003580"},children:(0,o.jsx)("h2",{style:{textAlign:"center",color:"#fff"},children:"Footer"})})}},9308:function(e,n,r){r.d(n,{Z:function(){return c}});var o=r(7309),t=(r(2791),r(7689)),a=r(1087),i=r(184);function c(){var e=(0,t.s0)();return(0,i.jsx)("div",{className:"header",children:(0,i.jsxs)("div",{className:"header__container",children:[(0,i.jsxs)("div",{className:"header__container-nav",children:[(0,i.jsx)(a.rU,{to:"/",className:"header__heading",children:"CRM Booking"}),(0,i.jsxs)("div",{className:"header__select",children:[(0,i.jsx)("span",{className:"header__select-lang",children:"VN"}),(0,i.jsx)(o.ZP,{onClick:function(){return e("user/login")},children:"Register"}),(0,i.jsx)(o.ZP,{children:"Sign in"})]})]}),(0,i.jsx)("div",{className:"header__container-options"})]})})}},7295:function(e,n,r){r.d(n,{Z:function(){return l}});var o=r(1413),t=r(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i=r(4291),c=function(e,n){return t.createElement(i.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:a}))};c.displayName="DownOutlined";var l=t.forwardRef(c)},4170:function(e,n,r){r.d(n,{Z:function(){return l}});var o=r(1413),t="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",i="data-";function c(e,n){return 0===e.indexOf(n)}function l(e){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===r?{aria:!0,data:!0,attr:!0}:!0===r?{aria:!0}:(0,o.Z)({},r);var l={};return Object.keys(e).forEach((function(r){(n.aria&&("role"===r||c(r,a))||n.data&&c(r,i)||n.attr&&t.includes(r))&&(l[r]=e[r])})),l}}}]);
//# sourceMappingURL=744.7ea73400.chunk.js.map