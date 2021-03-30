(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(113)),i={id:"generating_tokens",title:"Generating Tokens"},c={unversionedId:"generating_tokens",id:"generating_tokens",isDocsHomePage:!1,title:"Generating Tokens",description:"Introduction",source:"@site/docs/generating_tokens.md",slug:"/generating_tokens",permalink:"/API-Playbook/generating_tokens",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/generating_tokens.md",version:"current",sidebar:"docs",previous:{title:"API Keys",permalink:"/API-Playbook/api_keys"},next:{title:"Preferred Tech Stack",permalink:"/API-Playbook/preferred_tech_stack"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"When is a token valid",id:"when-is-a-token-valid",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Each time a consumer makes an API request and supplies the JWT auth token, our custom Lambda function takes the token, validates and decrypts it, retrieves data about the token from the database and compares the data from the database to the API request information."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," In the first iteration of this solution, the following applies: ")),Object(o.b)("p",null,"  a. Tokens are issued per service"),Object(o.b)("p",null,"  b. Tokens do not expire"),Object(o.b)("p",null,"Each service that requires a token will need to request it via the API Hub. The API Hub makes use of an auth token generator endpoint, which generates a JWT token and inserts data about the token (such as who requested it, which API endpoint it allows access to, which environment and more) into a Postgres database."),Object(o.b)("p",null,"For request information, please look at the Swagger documentation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      https://app.swaggerhub.com/apis/Hackney/authorisation-token-generator-api/1.0\n")),Object(o.b)("h2",{id:"when-is-a-token-valid"},"When is a token valid"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If the \u201cEnabled\u201d flag is set to true"),Object(o.b)("p",{parentName:"li"},"a. This means that the token has not been revoked")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If a token has an expiry date, it should not be a past date")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The environment recorded in the database should match the one from the request")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The API endpoint name should match the one from the request")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The API name should match the one from the request")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The HTTP method (GET/POST/etc) should match the one from the request"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"   NB: The Lambda authorizer approach described above is a new solution and not all APIs have been updated to use it. ")),Object(o.b)("p",null,"Lambda authorizer documentation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"          https://docs.google.com/document/d/1mpTY-sfYwR2brIF_8KjxiYzW6zgkjbv4Pi-9Y5LRlBA/edit#\n")))}p.isMDXComponent=!0}}]);