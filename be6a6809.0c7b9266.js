(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,26,28],{102:function(e,t,a){"use strict";var o=a(2),r=a(97),c=a(98),n=a(96),l=a(0),s=a.n(l);const i={altFooter:!1},m=Object(l.createContext)(i);var p=()=>Object(l.useContext)(m),f=a(47),d=a.n(f),g=a(48),u=a.n(g),h=a(1);const _=({to:e,href:t,label:a,...r})=>{const n=Object(c.a)(t||"",{forcePrependBaseUrl:!1}),l=Object(c.a)(e||"");return console.log(n,l),s.a.createElement("a",Object(o.a)({className:u.a.footer__link},t?{href:n,rel:"noopener noreferrer",target:"_blank"}:{href:l},r),a)};t.a=()=>{const e=Object(n.a)(),t=p(),{siteConfig:a}=e,{themeConfig:o}=a,{footer:c}=o,{copyright:l,links:i}=c,m=Object(h.l)();return console.log(m.pathname),-1!==m.pathname.indexOf("/api")?null:s.a.createElement("footer",{className:Object(r.a)(u.a.footer,d.a.section,{[u.a["footer--alt"]]:!0===t.altFooter})},s.a.createElement("div",{className:Object(r.a)(u.a.footer__inner,d.a["section--inner"])},s.a.createElement("div",{className:Object(r.a)(u.a.footer__column,u.a["footer__column--left"])},s.a.createElement("img",{alt:"QuestDB logo",className:u.a.footer__logo,src:"/img/logo.svg",title:"QuestDB - Fastest open source database for time series and analytics"}),s.a.createElement("p",{className:u.a.footer__tagline},a.tagline)),s.a.createElement("div",{className:Object(r.a)(u.a.footer__column,u.a["footer__column--right"])},i.map((e,t)=>s.a.createElement("div",{key:t,className:u.a.footer__links},s.a.createElement("ul",{className:u.a.footer__items},e.title&&s.a.createElement("li",{className:u.a.footer__title},e.title),e.items&&e.items.map(e=>s.a.createElement("li",{className:u.a.footer__item,key:e.href||e.to},s.a.createElement(_,e)))))))),s.a.createElement("div",{className:u.a.footer__bottom},s.a.createElement("p",{className:u.a.footer__copyright,dangerouslySetInnerHTML:{__html:l}})))}},80:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),c=(a(97),a(101)),n=a(99),l=(a(96),a(98)),s=a(81),i=a.n(s),m=a(1),p=a(103);t.default=e=>{const t=Object(m.l)();if(t.search){let e="";switch(new URLSearchParams(t.search).get("url")){case"utm":e="http://utm.gooddoctor.local/swagger.json";break;case"guandala":e="http://utm.gooddoctor.local/swagger1.json";break;case"nominatim":e="http://utm.gooddoctor.local/swagger2.json"}return r.a.createElement(c.a,{title:"utm page",description:"Description API"},r.a.createElement(p.a,null,r.a.createElement("script",{type:"module",src:"https://unpkg.com/rapidoc/dist/rapidoc-min.js"})),r.a.createElement("rapi-doc",{"rapi-doc":!0,id:"thedoc","regular-font":"Open Sans","mono-font":"Roboto Mono","show-header":"false","bg-color":"","text-color":"","nav-bg-color":"#3e4b54","nav-text-color":"","nav-hover-bg-color":"","nav-hover-text-color":"","nav-accent-color":"#fd6964","primary-color":"#ea526f","render-style":"read",theme:"light","spec-url":e,"render-style":"read",style:{height:"calc(100vh - 60px)",width:"100%"}}))}return r.a.createElement(c.a,{title:"api",description:"Description API"},r.a.createElement("p",{className:i.a.utm},r.a.createElement(n.a,{to:Object(l.a)("/api?url=utm")},"UTM Generator")))}}}]);