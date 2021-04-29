(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return r?n.a.createElement(h,c(c({ref:t},s),{},{components:r})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},164:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/clean_architecture-5cfe76b73f45e6a45082570315a20e7b.png"},165:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/folders-6a82f81883cf9c9e605174f74e6856c7.png"},166:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/request_workflow-7c3ddd07b924fe1f7b74eed744167b4b.png"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(119)),l={id:"clean_architecture",title:"Clean Architecture"},c={unversionedId:"clean_architecture",id:"clean_architecture",isDocsHomePage:!1,title:"Clean Architecture",description:"Basic Principles",source:"@site/docs/clean_architecture.md",slug:"/clean_architecture",permalink:"/API-Playbook/clean_architecture",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/clean_architecture.md",version:"current",sidebar:"docs",previous:{title:"API Boilerplate - Base API",permalink:"/API-Playbook/api_boilerplate"},next:{title:"Serverless Lambda Framework",permalink:"/API-Playbook/serverless_lambda"}},i=[{value:"Basic Principles",id:"basic-principles",children:[]},{value:"Video",id:"video",children:[]},{value:"Base API Folder Structure",id:"base-api-folder-structure",children:[]},{value:"Type of Folders",id:"type-of-folders",children:[]},{value:"Explore Our Folders",id:"explore-our-folders",children:[]}],s={toc:i};function u(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basic-principles"},"Basic Principles"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," What is Clean Architecture?")),Object(o.b)("p",null,"Clean architecture is a software design philosophy that separates the elements of a design into ring levels.\nAn important goal of clean architecture is to provide developers with a way to organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism.\nClean architecture was created by Robert C. Martin and promoted on his blog, Uncle Bob.\nLike other software design philosophies, clean architecture attempts to provide a cost-effective methodology that makes it easier to develop quality code that will perform better, is easier to change and has fewer dependencies."),Object(o.b)("p",null," ",Object(o.b)("img",{alt:"alt text",src:r(164).default})),Object(o.b)("h2",{id:"video"},"Video"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," You can watch our video for a brief intro about Clean Architecture at Hackney Council: ")),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zhGG9jt4iBE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"base-api-folder-structure"},"Base API Folder Structure"),Object(o.b)("p",null,"At Hackney, normally we have 2 project folders:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The actual Implementation Project"),Object(o.b)("li",{parentName:"ol"},"The Test Folder - which will mirror the Implementation")),Object(o.b)("p",null,"If we look at our Implementation Folder, we will notice that our code is structured into various Code Files and these files are all categorised, containing different subfolders."),Object(o.b)("h2",{id:"type-of-folders"},"Type of Folders"),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"}," Behavioural Folders: "),"        "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Controller"),Object(o.b)("li",{parentName:"ul"},"Gateway"),Object(o.b)("li",{parentName:"ul"},"Use Case")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  Data Structure Folders: ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Boundaries"),Object(o.b)("li",{parentName:"ul"},"Infrastructure"),Object(o.b)("li",{parentName:"ul"},"Domain"),Object(o.b)("li",{parentName:"ul"},"Factories")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:r(165).default})),Object(o.b)("h2",{id:"explore-our-folders"},"Explore Our Folders"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 1.Boundary ")),Object(o.b)("p",null,"This folder wil hold all of the structures of data that we will expect to get in return to the calling client\nWe use this folder to GET a Request or SEND a Response Make sure the way you structure the object\nresponse is clear and easy to understand"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 2. Controller ")),Object(o.b)("p",null,"In this folder we set up the End Points for our APIs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 3. Domain ")),Object(o.b)("p",null,"This folder is used to manipulate data\nIn here we do any calculations within our app"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 4. Factories "),"\nIn here we do our conversion from one type of data structure to the next one (e.g: convert a domain object to a response one)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 5. Gateway ")),Object(o.b)("p",null,"The responsability of the Gateway is to handle the interaction between your API and any external dependancies (such as another API or a Database) Gateway also has to be able to manipulate data in some way"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 6.Infrastructure ")),Object(o.b)("p",null,"In this folder, we set up the data structures that our Gateway will use"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 7. The UseCase ")),Object(o.b)("p",null,"This is where we handle all of the behaviour from our application"),Object(o.b)("p",null,"##Good to Know"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Generally, in Gateway and Use Cases, we tend to have Interface Folders. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Reasons: ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When your API interacting with Boundaries, we don't interact with classes directly, but with the Interfaces"),Object(o.b)("li",{parentName:"ul"},"It makes the app more TESTABLE"),Object(o.b)("li",{parentName:"ul"},"It allows us to do DEPENDANCY INJECTION (we can set up an interface and this gets injected in the app whenever it's needed)")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," MUST HAVE: ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The Interface Folder defines the contract for your implementation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Any class that implements an Interface MUST have the 'Execute' method, otherwise your program won't compile properly"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"alt text",src:r(166).default})))))}u.isMDXComponent=!0}}]);