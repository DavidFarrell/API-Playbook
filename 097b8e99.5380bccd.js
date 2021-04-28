(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(119)),i={id:"x_ray",title:"X Ray"},s={unversionedId:"x_ray",id:"x_ray",isDocsHomePage:!1,title:"X Ray",description:"X-Ray",source:"@site/docs/x_ray.md",slug:"/x_ray",permalink:"/API-Playbook/x_ray",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/x_ray.md",version:"current",sidebar:"docs",previous:{title:"Uptime Monitoring",permalink:"/API-Playbook/uptime_monitoring"},next:{title:"API Keys",permalink:"/API-Playbook/api_keys"}},c=[{value:"X-Ray",id:"x-ray",children:[]},{value:"More on what X-Ray is",id:"more-on-what-x-ray-is",children:[]},{value:"Benefits of AWS X-Ray",id:"benefits-of-aws-x-ray",children:[]},{value:"How to enable and use X-Ray in our APIs",id:"how-to-enable-and-use-x-ray-in-our-apis",children:[]},{value:"X-Ray with Postgres",id:"x-ray-with-postgres",children:[]},{value:"X-Ray with API Gateway",id:"x-ray-with-api-gateway",children:[]},{value:"Define Metrics for Alerts",id:"define-metrics-for-alerts",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"x-ray"},"X-Ray"),Object(o.b)("p",null,"AWS X-Ray is an AWS managed service that provides the functionality to debug and analyze distributed applications."),Object(o.b)("h2",{id:"more-on-what-x-ray-is"},"More on what X-Ray is"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"},"https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"X-Ray provides an end-to-end request view - it will show you the full trace for an API invocation, including any other components/services it invokes.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The tool is used for identifying the root cause to an issue, discovering performance bottlenecks and seeing real-time data regarding high latency requests.\nAWS X-Ray collects logs and makes use of a Service Map to visualize the dependencies and calls to other services made in an API request.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"X-Ray can be used to identify API requests, currently not monitored by Canaries by comparing the user requests and those made by Canaries. This is useful to identify if any of the implemented API endpoints is currently not monitored for availability."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Service Maps ")),Object(o.b)("p",null,"End-to-end visual representation for all dependencies of an application that serves requests"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Trace Maps ")),Object(o.b)("p",null,"Individual end-to-end visual representation for a single request"),Object(o.b)("h2",{id:"benefits-of-aws-x-ray"},"Benefits of AWS X-Ray"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Provides a way to collect logs and metrics, for all services an API integrates with, including databases or other APIs;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Visualizes the collected data for easy analysis of the data to help identify bottlenecks, error root causes and performance issues.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Aids the debugging process when an issue occurs, as it gives a developer a way to quickly pinpoint underlying services causing the issue"),Object(o.b)("p",{parentName:"li"},"   a. For example, if an API \u2018A\u2019 makes a call to another API \u2018B\u2019, X-Ray service map will help quickly identify which API is causing the issue so the developer can focus their efforts there."),Object(o.b)("p",{parentName:"li"},"   b. If API \u2018B\u2019 is the cause, X-Ray also provides trace maps, to show the end-to-end request for API \u2018B\u2019, providing insights into its dependencies to further narrow down the cause"),Object(o.b)("p",{parentName:"li"},"   c. In comparison, if a developer did not have access to X-Ray, they will have to:"),Object(o.b)("p",{parentName:"li"},"   i. look through application logs"),Object(o.b)("p",{parentName:"li"},"  ii. identify the line of code causing the error"),Object(o.b)("p",{parentName:"li"}," iii.  see which dependency this error is related to"),Object(o.b)("p",{parentName:"li"},"iv. Identify logs related to the dependency and go through the process of identifying root cause or possible further dependencies that need to be considered"),Object(o.b)("p",{parentName:"li"},"v. In summary, the process will take longer as developers will have to go through multiple steps and logs in order to narrow down the cause, which results in more development time spent on debugging, instead of resolving the issue."))),Object(o.b)("h2",{id:"how-to-enable-and-use-x-ray-in-our-apis"},"How to enable and use X-Ray in our APIs"),Object(o.b)("p",null,"Serverless can be used to automatically enable X-Ray on our APIs."),Object(o.b)("p",null,"How to enable X-Ray tracing:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.serverless.com/framework/docs/providers/aws/guide/functions/#aws-x-ray-tracing/"},"https://www.serverless.com/framework/docs/providers/aws/guide/functions/#aws-x-ray-tracing/")),Object(o.b)("p",null,"This will enable it within Lambda and grant it the necessary IAM permissions"),Object(o.b)("p",null,"X-Ray needs additional C# configuration to capture metadata and trace downstream calls\nEnable C# tracing when using AWS Lambda"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/csharp-tracing.html"},"https://docs.aws.amazon.com/lambda/latest/dg/csharp-tracing.html")),Object(o.b)("h2",{id:"x-ray-with-postgres"},"X-Ray with Postgres"),Object(o.b)("p",null,"X-Ray can be enabled for Postgres to trace down to the database query level."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"       How to enable X-ray for database: ")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://net-immersionday.workshop.aws/6-using-x-ray-in-dotnet-application/8-entity-framework-tracing.html"},"https://net-immersionday.workshop.aws/6-using-x-ray-in-dotnet-application/8-entity-framework-tracing.html")),Object(o.b)("h2",{id:"x-ray-with-api-gateway"},"X-Ray with API Gateway"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"X-Ray can also be enabled for API Gateway to provide tracing for calls starting at API Gateway.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For all of our APIs, we use API Gateway to expose them for consumption.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"X-Ray will provide a trace of requests from the moment an API is invoked at API Gateway level to all services the requests travel to.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"We use a custom Lambda authorizer, so enabling X-Ray at API Gateway will provide an easy way to identify if an issue has occurred at API level or during the authorization step.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The logging and tracing can be customized to only sample requests containing a certain header value and similar."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," How to enable X-Ray for API Gateway: ")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html"},"https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html")),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"        X-Ray cost  ")),Object(o.b)("p",null,"The first 100,000 traces recorded each month are free.\nThe first 1,000,000 traces retrieved or scanned each month are free."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"**     Beyond free tier:  **\n")),Object(o.b)("p",null,"Traces recorded cost $5.00 per 1 million traces recorded ($0.000005 per trace).\nTraces retrieved cost $0.50 per 1 million traces retrieved ($0.0000005 per trace).\nTraces scanned cost $0.50 per 1 million traces scanned ($0.0000005 per trace)."),Object(o.b)("h2",{id:"define-metrics-for-alerts"},"Define Metrics for Alerts"),Object(o.b)("p",null,"What metrics can be used to trigger alerts, eg, how many exceptions within a defined period.  A one size fit for metrics may not be suitable for all applications."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Front end logging: ")),Object(o.b)("p",null," How can we ship front end logs back to a central logging repository?"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-configuration.html"},"https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-configuration.html")),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"}," X-ray js: ")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-client.html"},"https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-client.html")),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"}," Dashboard ")),Object(o.b)("p",null,"Service Lens can be used for a consolidated view of insights"),Object(o.b)("p",null,"We want to be able to be proactive in responding to alerts/issues."))}p.isMDXComponent=!0}}]);