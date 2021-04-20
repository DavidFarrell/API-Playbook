(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||s;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},165:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/functions-16de6d3541b3236e053337aaadef7142.png"},166:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/resources1-fe296513ce42e7151b9bd5e77cb12030.png"},167:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/resources2-d1b6f9883233f9409806677a928683b3.png"},168:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/services-8348c939a2e1a2ca45cbbbcf7e498d7d.png"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(116)),o={id:"serverless_lambda",title:"Serverless Lambda Framework"},i={unversionedId:"serverless_lambda",id:"serverless_lambda",isDocsHomePage:!1,title:"Serverless Lambda Framework",description:"What is Serverless Lambda?",source:"@site/docs/serverless_lambda.md",slug:"/serverless_lambda",permalink:"/API-Playbook/serverless_lambda",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/serverless_lambda.md",version:"current",sidebar:"docs",previous:{title:"Clean Architecture",permalink:"/API-Playbook/clean_architecture"},next:{title:"Good TDD Principles",permalink:"/API-Playbook/tdd"}},c=[{value:"What is Serverless Lambda?",id:"what-is-serverless-lambda",children:[]},{value:"Functions:",id:"functions",children:[]},{value:"Events:",id:"events",children:[]},{value:"Resources:",id:"resources",children:[]},{value:"Services",id:"services",children:[]}],u={toc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"what-is-serverless-lambda"},"What is Serverless Lambda?"),Object(s.b)("p",null,"The Serverless Framework provides support when developing and deploying AWS (Amazon Web Services) Lambda Functions, along with any AWS infrastructure resources that are required. The Serverless Framework provides a Command Line Interface (CLI) structure, automation and best practices out-of-the-box, hence allowing developers to focus on building sophisticated, event-driven, serverless architectures, composed of Functions and Events."),Object(s.b)("h1",{id:"video-tutorial"},"Video Tutorial"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," For a better understanding, you can start by having a look at our  Serverless Lambda Framework configuration tutorial: ")),Object(s.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/EnID_C4yB_Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(s.b)("h2",{id:"functions"},"Functions:"),Object(s.b)("p",null,"A function is an AWS Lambda function that is similar to a microservice. It\u2019s simply code that is deployed in the cloud, this is mostly written as a single job. An example of a function could be to provide Database Credentials if you\u2019re using PostgreSQL DB service(At Hackney we do not hard code this):"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt text",src:r(165).default})),Object(s.b)("h2",{id:"events"},"Events:"),Object(s.b)("p",null,"Anything that triggers an AWS Lambda Function to execute is regarded by the Framework as an Event. Events are infrastructure events on AWS such as:\n-An AWS API Gateway HTTP endpoint request\n-An AWS S3 bucket upload\n-When you define an event for your AWS Lambda functions in the Serverless Framework, the Framework will automatically create any infrastructure necessary for that event (e.g., an API Gateway endpoint) and configure your AWS Lambda Functions to listen to it."),Object(s.b)("h2",{id:"resources"},"Resources:"),Object(s.b)("p",null,"Resources are AWS infrastructure components that your Functions use such as:\n-An AWS DynamoDB Table\n-An AWS S3 Bucket (e.g., for saving images or files)\n-An AWS SNS Topic (e.g., for sending messages asynchronously)\n-The Serverless Framework not only deploys your Functions and the Events that trigger them, but it also deploys the AWS infrastructure components your Functions depend upon."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt text",src:r(166).default}),"\n",Object(s.b)("img",{alt:"alt text",src:r(167).default})),Object(s.b)("h2",{id:"services"},"Services"),Object(s.b)("p",null,"A service is the framework\u2019s unit of organisation, it\u2019s where you define the functions, events which trigger them and resources that your functions use. A service can be described in a YAML or JSON format. Within Hackney, we define the service in the YAML format (serverless.yml) which is stored in the root directory of our projects."),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt text",src:r(168).default})),Object(s.b)("h1",{id:""}))}l.isMDXComponent=!0}}]);