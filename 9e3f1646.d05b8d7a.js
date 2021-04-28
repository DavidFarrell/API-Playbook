(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(119)),i={id:"entity_framework",title:"Entity Framework"},c={unversionedId:"entity_framework",id:"entity_framework",isDocsHomePage:!1,title:"Entity Framework",description:"Entity Framework Core",source:"@site/docs/entiy_framework.md",slug:"/entity_framework",permalink:"/API-Playbook/entity_framework",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/entiy_framework.md",version:"current",sidebar:"docs",previous:{title:"Serverless Lambda Framework",permalink:"/API-Playbook/serverless_lambda"},next:{title:"Good TDD Principles",permalink:"/API-Playbook/tdd"}},l=[{value:"Entity Framework Core",id:"entity-framework-core",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Video Tutorial",id:"video-tutorial",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"entity-framework-core"},"Entity Framework Core"),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Entity Framework Core is an object-relational mapper that lets .NET developers work with a database using .NET objects. "),Object(a.b)("p",null,"This reduces the amount of data-access code that needs to be written. "),Object(a.b)("p",null,"This means that instead of writing code to directly interact with our databases, we can instead create a domain class which identifies the database from which we\u2019re retrieving our data and maps column titles to the properties of that class."),Object(a.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," For a better understanding, you can watch our video on Entity Framework Core ")),Object(a.b)("figure",{class:"video-container"},Object(a.b)("iframe",{width:"100",src:"https://www.youtube.com/embed/qNsqZCKefcc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}s.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);