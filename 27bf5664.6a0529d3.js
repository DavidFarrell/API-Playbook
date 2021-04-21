(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||b[d]||r;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/proxy_methods-6459c27c7238899e40009151050fe6e8.png"},130:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/api_keys-98c681ebdfb58ad722c7a84c45236c1d.png"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(119)),s={id:"api_keys",title:"API Keys"},i={unversionedId:"api_keys",id:"api_keys",isDocsHomePage:!1,title:"API Keys",description:"Securing our APIs",source:"@site/docs/api_keys.md",slug:"/api_keys",permalink:"/home/api_keys",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/api_keys.md",version:"current",sidebar:"docs",previous:{title:"X Ray",permalink:"/home/x_ray"},next:{title:"Generating Tokens",permalink:"/home/generating_tokens"}},c=[{value:"Securing our APIs",id:"securing-our-apis",children:[]},{value:"API keys to secure our APIs",id:"api-keys-to-secure-our-apis",children:[]},{value:"What is an API key?",id:"what-is-an-api-key",children:[]},{value:"Guide for enabling and disabling API keys",id:"guide-for-enabling-and-disabling-api-keys",children:[]}],l={toc:c};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"securing-our-apis"},"Securing our APIs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What to cover: ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," 1. What to use to secure our APIs (explain new solution and that it should be used going forward + some APIs still use old solution) ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," 2. Existing approach to securing our APIs ")),Object(r.b)("p",null,"  a. API keys - what are those and how to use"),Object(r.b)("p",null,"  b. Specify that when you select the option to use an API key, the API within the API Gateway needs to be deployed for the changes to apply"),Object(r.b)("p",null,"  c. What is a usage plan and how to use it"),Object(r.b)("p",null,"  d. What is a stage and how to use it"),Object(r.b)("p",null,"  e. Reference to serverless.yml and how by default an API key is added to each new API"),Object(r.b)("p",null,"  f. Link to step-by-step guide of how to apply/modify"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," 3. New approach - Lambda authorizer ")),Object(r.b)("p",null,"  a. What is a Lambda authorizer (include AWS diagram), what is Hackney\u2019s solution and how to use it"),Object(r.b)("p",null,"  b. Link to authorizer repo"),Object(r.b)("p",null,"  c. Flow chart to explain flow of authorizer (Hackney\u2019s implementation for an authorizer)"),Object(r.b)("p",null,"  d. When to use it"),Object(r.b)("p",null,"  e. Link to step-by-step guide of how to apply for new APIs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," 4. Google auth (TK)  ")),Object(r.b)("p",null,"  a. What is it and how to use"),Object(r.b)("p",null,"  b. Which projects use it"),Object(r.b)("p",null,"  c. When to use"),Object(r.b)("p",null,"  d. Sample implementations?"),Object(r.b)("p",null,"   ",Object(r.b)("strong",{parentName:"p"},"  ",Object(r.b)("u",null," Securing our APIs: ")," ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What do we use to secure our APIs? ")),Object(r.b)("p",null,"We have now changed our approach to using a Lambda authorizer function to secure our APIs."),Object(r.b)("h2",{id:"api-keys-to-secure-our-apis"},"API keys to secure our APIs"),Object(r.b)("p",null,"Some of our APIs still use API keys to manage access to the APIs. This was our initial approach, but it has proven to be insufficient as it does not allow for granular access control and reporting, and it is associated with a big maintenance overhead."),Object(r.b)("p",null,"AWS documentation on API keys and Usage plans:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"        https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\n")),Object(r.b)("h2",{id:"what-is-an-api-key"},"What is an API key?"),Object(r.b)("p",null,"An API key in this context is a solution provided by AWS for managing access when using AWS API Gateway. Each resource (endpoint) within an API can be set to require an API key to be supplied, when making a request."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:n(129).default})),Object(r.b)("p",null,"When this option is enabled, the API will return a status code of 401 Unauthorized if the consumer has not supplied the API key value within an \u2018x-api-key\u2019 HTTP header."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What is a stage? ")),Object(r.b)("p",null,"Before API is deployed to the API gateway, it must have a stage. Depending on the account setup, API typically has either one or three stages. If an account is set up to use one API per environment (development, staging and production), then API will have only one stage. Sometimes we have just one API for all three environments, in which case we use three different stages."),Object(r.b)("p",null,"Stages are used to define the connection between the API and other AWS resources. Our stages will typically have three variables that define where the requests made for the API should go. These are: VPC link, load balancer URL and port. When the API is called, the stage name in the URL is used to direct the traffic to the specific stage in the API, which in turns then uses the stage configuration to direct the traffic to the correct AWS service."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Typical URL for an API looks like: ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"      https://{API _ID}.execute-api.{AWS_REGION}.amazonaws.com/development/api/\n")),Object(r.b)("p",null,"Development in the above URL indicates the stage that the client is trying to access."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," What is a usage plan and how to use it? ")),Object(r.b)("p",null,"Once the API key has been created, it can be attached to a usage plan to control its usage. Rather controlling the access from an authentication point of view, usage plans control the amount and frequency of calls that can be made to API stages using the key."),Object(r.b)("p",null,"Usage plans can have multiple API keys attached to them, but we typically create a usage plan per API key and API stage. That way we have more granular control over the usage of individual API stages."),Object(r.b)("p",null,"Usage plans control the quota (requests per day/week/month), rate (requests per second) and burst (capacity of a token bucket) values for the given API stage."),Object(r.b)("p",null,"Throttling can be made more granular by enabling method throttling for a stage, which means that different HTTP methods for the API stage can have different limits."),Object(r.b)("h2",{id:"guide-for-enabling-and-disabling-api-keys"},"Guide for enabling and disabling API keys"),Object(r.b)("p",null,"Guide describing how to enable and disable API key requirement:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    https://docs.google.com/document/d/1RVJ8f4T6-2m0QqJ9xO-f15FSP7AT4xv0ts8CZGvGR6Y/edit?usp=sharing\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," How are API keys added to our Lambda based APIs?  ")),Object(r.b)("p",null,"For any API, where we use Lambda as our hosting option, the configuration to use API keys is automated using Serverless. Each API generates its own unique key and associates it with the deployment stage."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt text",src:n(130).default})),Object(r.b)("p",null,"Ref:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    https://github.com/LBHackney-IT/lbh-base-api/blob/59df843bf70d1ec20bbf7420f2e80c881e789dfc/BaseApi/serverless.yml#L8\n")),Object(r.b)("p",null,"For APIs that use EC2/Fargate, we create and add API keys via Terraform."))}u.isMDXComponent=!0}}]);