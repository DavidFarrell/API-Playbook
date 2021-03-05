(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return i})),t.d(o,"metadata",(function(){return s})),t.d(o,"toc",(function(){return l})),t.d(o,"default",(function(){return c}));var n=t(3),r=t(7),a=(t(0),t(85)),i={id:"index",title:"Introduction",slug:"/"},s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"APIs have become an essential part of Hackney\u2019s digital transformation.  They are the building blocks of the majority of our newer internal systems and are part of the foundation of our cloud based architecture.  They provide the opportunity for reuse and the flexibility to combine data and services in new and previously unimaginable ways.",source:"@site/docs\\index.md",slug:"/",permalink:"/",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/index.md",version:"current",sidebar:"docs",next:{title:"Good TDD Principles",permalink:"/tdd"}},l=[{value:"Why a Playbook?",id:"why-a-playbook",children:[]},{value:"Our Playbook journey",id:"our-playbook-journey",children:[]},{value:"Who this Playbook is for",id:"who-this-playbook-is-for",children:[]},{value:"Help us improve",id:"help-us-improve",children:[]}],u={toc:l};function c(e){var o=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"APIs have become an essential part of Hackney\u2019s digital transformation.  They are the building blocks of the majority of our newer internal systems and are part of the foundation of our cloud based architecture.  They provide the opportunity for reuse and the flexibility to combine data and services in new and previously unimaginable ways."),Object(a.b)("p",null,"This API playbook will help readers to understand:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Why APIs have become so important to our software development process"),Object(a.b)("li",{parentName:"ul"},"How we go about building our APIs"),Object(a.b)("li",{parentName:"ul"},"How we support and maintain our APIs"),Object(a.b)("li",{parentName:"ul"},"Some best practices that we have adopted as standard in our development of APIs")),Object(a.b)("h2",{id:"why-a-playbook"},"Why a Playbook?"),Object(a.b)("p",null,"Some people may wonder why we have decided to establish a playbook.  Well during our journey of digital transformation we were fortunate to work with a number of partners/agencies from whom we gained a significant amount of knowledge and learned to do things in so many different ways.  What we also discovered was that the various ways APIs were implemented across our projects meant that there was no consistency, making it a bit of a challenge to maintain.  We decided that if we had a consistent standard of implementation, it would make it easier for us to maintain services as well as to get new developers onboard."),Object(a.b)("h2",{id:"our-playbook-journey"},"Our Playbook journey"),Object(a.b)("p",null,"Over the past few years we went through several iterations of our playbook.  These iterations were necessary as we grew in clarity over what we felt would be the best set of tools and practices for us as a development team.  Where we discovered we may have got some things wrong or could do with some improvement we worked on making it right.  For example, during the course of our journey we have transitioned from container based services running on EC2 machines to serverless functions.  We also reviewed our methods of authorisations on our APIs and implemented a custom authorisation solution.  We have continued to work with our agency partners to continuously improve our development practices and standards, and the playbook evolved as a result.  Today we have come to the point where our playbook has taken a more governance role and now leads more than it is led, and onboarding as ever been so easy. This also allowed us to justify the ROI on API strategy by bringing consistency and standardization across all APIs developed by internal/external developers for relevant services.  However, as technology changes and we learn new things, undoubtedly our playbook will continue to evolve."),Object(a.b)("h2",{id:"who-this-playbook-is-for"},"Who this Playbook is for"),Object(a.b)("p",null,"This playbook is primarily used to onboard new developers, whether they are new members of staff of new agency partners we work with.  However, we would be thrilled if this playbook is also read by a wider audience.  We are also always happy for contributions to make this even better."),Object(a.b)("h2",{id:"help-us-improve"},"Help us improve"),Object(a.b)("p",null,"We are always looking at ways we can improve. If you have any ideas or suggestions please share your feedback on our playbook Github repo suggesting ways we could improve these pages."))}c.isMDXComponent=!0},85:function(e,o,t){"use strict";t.d(o,"a",(function(){return d})),t.d(o,"b",(function(){return y}));var n=t(0),r=t.n(n);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),c=function(e){var o=r.a.useContext(u),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=c(e.components);return r.a.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},b=r.a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),b=n,y=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?r.a.createElement(y,s(s({ref:o},u),{},{components:t})):r.a.createElement(y,s({ref:o},u))}));function y(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);