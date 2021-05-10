(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(129)),o={id:"api_design_principles",title:"API Design Principles"},s={unversionedId:"api_design_principles",id:"api_design_principles",isDocsHomePage:!1,title:"API Design Principles",description:"Introduction",source:"@site/docs/api_design_principles.md",slug:"/api_design_principles",permalink:"/API-Playbook/api_design_principles",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/api_design_principles.md",version:"current",sidebar:"docs",previous:{title:"API Implementation Guidelines",permalink:"/API-Playbook/api_implementation_guidelines"},next:{title:"General Guidelines",permalink:"/API-Playbook/general_guidelines"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Reading",id:"reading",children:[]}]},{value:"Designing APIs",id:"designing-apis",children:[]},{value:"API First",id:"api-first",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Comparing SOA (Service-Oriented Architecture) web service interfacing style of SOAP vs. REST, the former tend to be centered around operations that are usually use-case specific and specialised. In contrast, REST is centered around business (data) entities exposed as resources that are identified via URIs and can be manipulated via standardised CRUD-like methods using different representations, and hypermedia. RESTful APIs tend to be less use-case specific and comes with less rigid client / server coupling and are more suitable for an ecosystem of (core) services providing a platform of APIs to build diverse new business services. We apply the RESTful web service principles to all kind of application (micro-) service components, independently from whether they provide functionality via the internet or intranet."),Object(r.b)("p",null," We prefer REST-based APIs with JSON payloads."),Object(r.b)("p",null,"An important principle for API design and usage is Postel\u2019s Law, aka ",Object(r.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Robustness_principle"},"The Robustness Principle")," (see also ",Object(r.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc1122"},"RFC 1122"),"):"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Be liberal in what you accept, be conservative in what you send.")),Object(r.b)("h3",{id:"reading"},"Reading"),Object(r.b)("p",null,"Some interesting reads on the ",Object(r.b)("strong",{parentName:"p"}," RESTful API ")," design style and service architecture:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://www.amazon.de/Irresistible-APIs-Designing-that-developers/dp/1617292559"},Object(r.b)("em",{parentName:"a"},"Irresistable APIs: Designing web APIs that developers will love"))," - Kirsten Hunter (book)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"http://www.amazon.de/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829"},Object(r.b)("em",{parentName:"a"},"REST in Practice: Hypermedia and Systems Architecture"))," - Ian Robinson, Jim Webber, Savas Parastatidis (book)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://leanpub.com/build-apis-you-wont-hate"},Object(r.b)("em",{parentName:"a"},"Build APIs You Won\u2019t Hate: Everyone and their dog wants an API, so you should probably learn how to build them")),"- Laura Bohill, Phil Sturgeon (Book)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://www.infoq.com/minibooks/emag-web-api/"},Object(r.b)("em",{parentName:"a"},"Web APIs: From Start to Finish"))," - InfoQ (eMag)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"http://restful-api-design.readthedocs.org/en/latest/"},Object(r.b)("em",{parentName:"a"},"Thoughts on RESTful API Design"))," - Lessons-learned blog")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm"},Object(r.b)("em",{parentName:"a"},"Architectural Styles and the Design of Network-Based Software Architectures"))," - Roy Fielding (Dissertation)"))),Object(r.b)("h2",{id:"designing-apis"},"Designing APIs"),Object(r.b)("p",null,"APIs should adhere to the same design principles as any well managed product:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Treat your API as product and act like a product owner.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Put yourself into the place of your customers; be an advocate for their needs.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Emphasize simplicity, comprehensibility, and usability of APIs to make them irresistible for client engineers.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Actively improve and maintain API consistency over the long term.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make use of customer feedback and provide service level support.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Understand the concrete use cases of your API consumers and carefully check the trade-offs of your API design variants with a product mindset. "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Avoid short-term implementation optimizations at the expense of unnecessary client side obligations, and have a high attention on API quality and client developer experience.")))),Object(r.b)("h2",{id:"api-first"},"API First"),Object(r.b)("p",null,"API First is one of our principles. In a nutshell API First requires the following aspects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Define APIs first, before coding its implementation, using a standard specification language.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Get early review feedback from peers and client developers.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Profound understanding of the domain and required functionality")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Generalized business entities / resources, i.e. avoidance of use case specific APIs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Clear separation of WHAT vs. HOW concerns, i.e. abstraction from implementation aspects \u2014 APIs should be stable even if we replace complete service implementation including its underlying technology stack"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Moreover, API definitions with standardized specification format also facilitate:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Single source of truth for the API specification; it is a crucial\npart of a contract between service provider and client users")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"infrastructure tooling for API discovery, API GUIs, API documents,\nautomated quality checks"))),Object(r.b)("p",null,"Elements of API First are also these standards and a standardized API review process as to get early review feedback from peers and client developers. Peer review is important for us to get high quality APIs, to enable architectural and design alignment and to supported development of client applications decoupled from service provider engineering life cycle."),Object(r.b)("p",null,"It is important to learn, that API First is ",Object(r.b)("strong",{parentName:"p"},"not in conflict with the agile development principles")," that we love. Applications should evolve incrementally \u2014 and so its APIs. Of course, our API specification will and should evolve iteratively in different cycles; however, each starting with draft status and ",Object(r.b)("em",{parentName:"p"},"early")," team and peer review feedback. API may change and profit from implementation concerns and automated testing feedback. API evolution during development life cycle may include breaking changes for not yet productive features and as long as we have aligned the changes with the clients. Hence, API First does ",Object(r.b)("em",{parentName:"p"},"not")," mean that you must have 100% domain and requirement understanding and can never produce code before you have defined the complete API and get it confirmed by peer review. On the other hand, API First obviously is in conflict with the bad practice of publishing API definition and asking for peer review after the service integration or even the service productive operation has started. It is crucial to request and get early feedback \u2014 as early as possible, but not before the API changes are comprehensive with focus to the next evolution step and have a certain quality (including API Guideline compliance), already confirmed via team internal reviews."))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);