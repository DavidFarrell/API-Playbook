(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,j=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(j,l(l({ref:t},b),{},{components:n})):r.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(116)),o={id:"linting",title:"Linting"},l={unversionedId:"linting",id:"linting",isDocsHomePage:!1,title:"Linting",description:"Things to enforce:",source:"@site/docs/linting.md",slug:"/linting",permalink:"/API-Playbook/linting",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/linting.md",version:"current",sidebar:"docs",previous:{title:"Naming Conventions",permalink:"/API-Playbook/naming_conventions"},next:{title:"Static Code Analysis",permalink:"/API-Playbook/static_code_analysis"}},c=[{value:"Things to enforce:",id:"things-to-enforce",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Project site",id:"project-site",children:[]},{value:"For API Playbook",id:"for-api-playbook",children:[]},{value:"Linting rules",id:"linting-rules",children:[]},{value:"Tools:",id:"tools-1",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"things-to-enforce"},"Things to enforce:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Indentation 4 spaces for tab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No whitespace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Public objects should be Pascal Case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Local objects should be camel case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Class objects should be prefixed with an underscore")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using directives : outside namespace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No unused using directives")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"One new line at the end of every file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"One class for a file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prefer the language keyword for local objects and member access")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Require accessibility modifiers for fields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No unused parameters for non public method")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use var where possible")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Brackets on a new line")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Comments on their own line")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No Console writes"))),Object(i.b)("h2",{id:"tools"},"Tools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},".editorconfig + dotnet format  (Chosen)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"editorconfig files:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"    https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-language-conventions?view=vs-2019\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"dotnet format project site:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"    https://github.com/dotnet/format\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"How to include in CI:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"    https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.html  \n")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Stylecop.analysers: ")),Object(i.b)("h2",{id:"project-site"},"Project site"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"            https://github.com/DotNetAnalyzers/StyleCopAnalyzers\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Need to make a .ruleset file + stylecop.json to implement rules ")),Object(i.b)("p",null,"Integrates with build"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  Resharper: ")),Object(i.b)("p",null,"As an alternative to the paid version, there is a free command line tool but I\u2019m assuming it wont integrate with peoples editors who aren\u2019t using rider ",Object(i.b)("a",{parentName:"p",href:"https://www.jetbrains.com/help/resharper/CleanupCode.html"},"https://www.jetbrains.com/help/resharper/CleanupCode.html")),Object(i.b)("h2",{id:"for-api-playbook"},"For API Playbook"),Object(i.b)("h2",{id:"linting-rules"},"Linting rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Indentation 4 spaces for tab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No whitespace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Public objects should be Pascal Case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Local objects should be camel case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Class objects should be prefixed with an underscore")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using directives : outside namespace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No unused using directives")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"One new line at the end of every file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"One class for a file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prefer the language keyword for local objects and member access")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Require accessibility modifiers for fields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No unused parameters for non public method")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use var where possible")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Brackets on a new line")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Comments on their own line")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No Console writes"))),Object(i.b)("h2",{id:"tools-1"},"Tools:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},".editorconfig + dotnet format")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"editorconfig files:\n",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-language-conventions?view=vs-2019"},"https://docs.microsoft.com/en-us/visualstudio/ide/editorconfig-language-conventions?view=vs-2019"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"dotnet format project site:\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/dotnet/format"},"https://github.com/dotnet/format"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"How to include in CI:\n",Object(i.b)("a",{parentName:"p",href:"https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.htm"},"https://www.meziantou.net/enforce-dotnet-code-style-in-ci-with-dotnet-format.htm")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," How to: ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Run \u2018make lint\u2019 command\n")))}p.isMDXComponent=!0}}]);