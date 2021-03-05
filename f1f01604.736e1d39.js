(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(85)),i={},s={unversionedId:"what_is_an_api",id:"what_is_an_api",isDocsHomePage:!1,title:"what_is_an_api",description:"What is an API?",source:"@site/docs\\what_is_an_api.md",slug:"/what_is_an_api",permalink:"/what_is_an_api",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/what_is_an_api.md",version:"current"},l=[],c={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"what-is-an-api"},"What is an API?"),Object(o.b)("p",null,"API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you."),Object(o.b)("h1",{id:"why-do-we-use-an-api-at-hackit"},"Why do we use an API at HackIT?"),Object(o.b)("p",null,"At HackIT we follow the API-First strategy which is a data domain driven model and ensures that APIs produced are consistent,reusable and cost effective for similar dataset services."),Object(o.b)("p",null,"We follow 12 Factor principles when building new applications. You can find out more about why in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/API-Playbook/blob/master/12-factor.md"},"Hackney Development Standards documentation"),"."),Object(o.b)("p",null,"Following these principles allows our applications to be platform agnostic, meaning we're not tied down to running them on any specific vendor's platform, and don't have to make changes to application code in order to migrate them somewhere else."),Object(o.b)("h1",{id:"types-of-apis-at-hackit"},"Types of APIs at HackIT"),Object(o.b)("p",null,"We have two types of API in Hackney: a set of \u2018Platform APIs\u2019 which present master data about our people and properties and \u2018Service APIs\u2019 that provide the information required to enable the delivery of a digital service to our residents and businesses."),Object(o.b)("p",null,"In other words Platform APIs are data-driven, domain modelled which are built with reusability in mind whereas Service APIs are specific to given service which Platform APIs are unable to cater. These service APIs will directly extract data from specific datasource when required. We require Platform APIs to be as generic as possible in order to meet the needs for services and at the same time to be reusable and consistent."),Object(o.b)("p",null,"We\u2019ve reached this position after exploring different levels of granularity for our APIs and determining that this is the optimum model for:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Accelerating development"),Object(o.b)("li",{parentName:"ol"},"Reducing duplication"),Object(o.b)("li",{parentName:"ol"},"Providing a single version of the truth")),Object(o.b)("p",null,"APIs can be written by any person or agency working under contract to the London Borough of Hackney. Platform APIs are managed by the API Platform Product Owners whilst service APIs are the responsibility of the application manager or software vendor that is responsible for the service."),Object(o.b)("p",null,"The image below illustrates the target architecture:"),Object(o.b)("p",null,"[image to be added]"),Object(o.b)("p",null,"We\u2019ve written about ",Object(o.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/10C2Ly0uhZ35g-p1215rJhKoRtWkKns5ax2gWOkGDglA/edit?usp=sharing"},"what we\u2019ve learnt about APIs")," and why we\u2019ve adopted this approach."),Object(o.b)("h1",{id:"when-to-write-an-api"},"When to write an API"),Object(o.b)("p",null,"We want our data to be available via REST API wherever there is a user need. We are prioritising making data available via APIs where:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Existing line of business applications enable us to develop APIs"),Object(o.b)("li",{parentName:"ol"},"Data is required by two or more systems, so APIs enable more reliable, secure methods of data sharing"),Object(o.b)("li",{parentName:"ol"},"APIs enable us to reduce dependence on one particular solution and develop new services better to meet user needs")),Object(o.b)("h1",{id:"establishing-the-user-need"},"Establishing the user need"),Object(o.b)("p",null,"Before we write an API we need to establish the user need. Typically, we do this in a Discovery phase when we\u2019re exploring the opportunity to use technology and data to better meet the needs of our residents. Our discovery phase should identify:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What data we currently hold, where, who needs it and how it\u2019s used"),Object(o.b)("li",{parentName:"ul"},"The lawful basis for processing this data and any consideration we need to give to privacy impact"),Object(o.b)("li",{parentName:"ul"},"Whether there are existing APIs that we can re-use"),Object(o.b)("li",{parentName:"ul"},"Any dependencies on data / reporting / MI with other teams")),Object(o.b)("p",null,"We typically record the user need through user stories, but this can be decided by individual teams. A prototyping phase might experiment with a stub API so that we can validate the user need."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example user story")," "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},'"As an application developer, I need to be able to retrieve addresses added, deleted or modified in the property gazetteer between 2 dates so that I am assured the data we have is current".')),Object(o.b)("p",null,"On occasion, we will identify a user need for a platform API that hasn\u2019t yet been fulfilled. This may mean we need to develop an API without a full understanding of the user need, meaning this will need to be iterated subsequently. The API Platform Product Owner makes these decisions on a case-by-case basis, in collaboration with the delivery managers and Data and Insight Manager."))}d.isMDXComponent=!0},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);