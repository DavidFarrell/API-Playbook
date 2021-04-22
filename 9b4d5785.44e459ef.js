(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(117)),i={id:"Lambda authoriser",title:"Lambda Authoriser"},s={unversionedId:"Lambda authoriser",id:"Lambda authoriser",isDocsHomePage:!1,title:"Lambda Authoriser",description:"What is a Lambda authorizer?",source:"@site/docs/lambda_authoriser.md",slug:"/Lambda authoriser",permalink:"/API-Playbook/Lambda authoriser",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/lambda_authoriser.md",version:"current"},u=[{value:"What is a Lambda authorizer?",id:"what-is-a-lambda-authorizer",children:[]},{value:"When to use?",id:"when-to-use",children:[]},{value:"Google Groups based authorization:",id:"google-groups-based-authorization",children:[]}],c={toc:u};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-lambda-authorizer"},"What is a Lambda authorizer?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  AWS documentation: ")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html"},"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Custom implementation of a Lambda authorizer: ")),Object(o.b)("p",null,"  For a Lambda authorizer, we use a  custom Lambda function that has been developed in-house."),Object(o.b)("p",null,"  Repository:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/api-auth-token-generator"},"https://github.com/LBHackney-IT/api-auth-token-generator")),Object(o.b)("p",null,"It allows for granular access control per API endpoint per environment. To gain access to a given API endpoint, the consuming service will need to supply an authorization token as part of the request, passed in the HTTP header \u201cAuthorisation\u201d."),Object(o.b)("h2",{id:"when-to-use"},"When to use?"),Object(o.b)("p",null,"HackIT\u2019s custom Lambda authorizer should be used for all new APIs that are to be created. It has been created in a generic way, making it possible to be used across multiple APIs."),Object(o.b)("p",null,"  The only configuration required would be to insert the lookup values into the lookup tables (API name, API endpoint)."),Object(o.b)("p",null,"The above is to be automated as part of our API Hub upcoming work."),Object(o.b)("h2",{id:"google-groups-based-authorization"},"Google Groups based authorization:"),Object(o.b)("p",null,"In addition to the custom build lambda authorizer mentioned above, we have also implemented Google groups based authorization in some of our projects.\nWhen developing APIs for internal use, the most convenient way to authenticate users is to use Google SSO. Once the user/client has been authenticated, authorization can be handled at the API level to ensure the user/client has access to the requested resource."),Object(o.b)("p",null,"Sample implementation with serverless and .NET Core can be found here:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/comino-printing"},"https://github.com/LBHackney-IT/comino-printing"),"  "),Object(o.b)("p",null,"In the above solution, each Lambda function that is deployed to API gateway has the authorizer set to the custom API authorizer."),Object(o.b)("p",null,"Each time a request is made to one of the end points in question, the authorizer will take the provided JWT token and check what Google Groups the client is in. If the client is authenticated and is in one of the allowed groups, the request is authorized. Otherwise access is denied. In both cases the standard AWS IAM policy statement is returned indicating whether the request was authorized or not, and then depending on the result either the requested Lambda resource is called or the client gets an unauthorized response."),Object(o.b)("p",null,"Implementing authorization this way requires a bit more development work, but completely takes a way the necessity to manage API keys in the infrastructure. This also gives the business the power to manage their own resources and determine who has access to them."))}l.isMDXComponent=!0},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(a),d=n,b=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return a?r.a.createElement(b,s(s({ref:t},c),{},{components:a})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);