(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(108)),o={id:"alerting",title:"Alerting"},l={unversionedId:"alerting",id:"alerting",isDocsHomePage:!1,title:"Alerting",description:"Application monitoring and alerting",source:"@site/docs/alerting.md",slug:"/alerting",permalink:"/API-Playbook/alerting",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/alerting.md",version:"current",sidebar:"docs",previous:{title:"Uptime Monitoring",permalink:"/API-Playbook/uptime_monitoring"},next:{title:"Serverless Lambda Framework",permalink:"/API-Playbook/serverless_lambda"}},s=[{value:"Application monitoring and alerting",id:"application-monitoring-and-alerting",children:[]},{value:"Metrics filters",id:"metrics-filters",children:[]},{value:"AWS Canaries for front end applications",id:"aws-canaries-for-front-end-applications",children:[]},{value:"AWS Cloudwatch Alarms",id:"aws-cloudwatch-alarms",children:[]},{value:"More on what X-Ray is",id:"more-on-what-x-ray-is",children:[]},{value:"Benefits of AWS X-Ray",id:"benefits-of-aws-x-ray",children:[]},{value:"How to enable and use X-Ray in our APIs",id:"how-to-enable-and-use-x-ray-in-our-apis",children:[]},{value:"X-Ray with Postgres",id:"x-ray-with-postgres",children:[]},{value:"X-Ray with API Gateway",id:"x-ray-with-api-gateway",children:[]},{value:"Performance monitoring",id:"performance-monitoring",children:[]},{value:"Define Metrics for Alerts",id:"define-metrics-for-alerts",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"application-monitoring-and-alerting"},"Application monitoring and alerting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In Hackney, we use AWS Cloudwatch to implement monitoring and alerting.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Any logs created in our APIs are recorded and accessible in AWS CloudWatch.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Creation of log groups is automated via the current serverless setup."))),Object(i.b)("h2",{id:"metrics-filters"},"Metrics filters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ",Object(i.b)("u",null," Filter and Pattern Syntax ")," ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Metric filters are a useful feature that allows you to find patterns and terms in your logs. Following the logging standards identified earlier in this document, metric filters can be created to easily identify logs related to a certain phrase or term like \u2018ERROR\u2019.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Using the filters, developers can easily narrow down the logs they see to only the ones related to any error that has occurred, hiding all other logs such as ones for successful requests.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"CloudWatch also provides a way to create alarms based on metric filters, so we can get notified if a log with matching a certain pattern/term has occurred."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ",Object(i.b)("u",null," Metric filters that should be created per API: ")," ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TBC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Needs to be filters we want commonly available for each API"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ",Object(i.b)("u",null," Alarms should be created for the following metric filters: ")," ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TBC"),Object(i.b)("li",{parentName:"ul"},"Need to decide which logs should have an alarm associated with them")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"  ",Object(i.b)("u",null," Availability monitoring and alerting ")," ")),Object(i.b)("p",null,"We use AWS CloudWatch Canaries to monitor the availability of our APIs and front end applications."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," ",Object(i.b)("u",null," AWS CloudWatch Canaries for APIs: ")," ")),Object(i.b)("p",null,"a. Set to run every 5 mins"),Object(i.b)("p",null,"b. A canary invokes an API endpoint to check it\u2019s availability"),Object(i.b)("p",null,"c. Needs to be set up per API endpoint to ensure all endpoints provided by an API are functioning as expected"),Object(i.b)("p",null,"d. he current creation process for a canary is manual"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," How to set up a canary : ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://github.com/LBHackney-IT/lbh-base-api/wiki/Setting-up-Canaries\n")),Object(i.b)("p",null,"Can it be automated?"),Object(i.b)("h2",{id:"aws-canaries-for-front-end-applications"},"AWS Canaries for front end applications"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Can monitor the availability of a web page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Alarms can be set to alert if availability of a given web page falls down")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Logs recorded can be used to identify performance issues associated with loading a specific item")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Can check for broken links")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A max number of links to follow is set up")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The canary crawls through the links and returns the first broken link identified"))),Object(i.b)("h2",{id:"aws-cloudwatch-alarms"},"AWS Cloudwatch Alarms"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We also use Cloudwatch alarms to monitor for specific events in the log streams.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specific metrics can be established as triggers on application logs which can fire off alerts in the form of emails or other messaging mediums.  We can create up to 5000 alarms per region per account which should give us sufficient capacity.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It may also be possible to consolidate these alarms if we have a standard format for logs (this may also be achievable by creating composite alarms but uses up available alarms."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Request tracing ")),Object(i.b)("p",null,"AWS X-Ray is an AWS managed service that provides the functionality to debug and analyze distributed applications."),Object(i.b)("h2",{id:"more-on-what-x-ray-is"},"More on what X-Ray is"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"X-Ray provides an end-to-end request view - it will show you the full trace for an API invocation, including any other components/services it invokes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The tool is used for identifying the root cause to an issue, discovering performance bottlenecks and seeing real-time data regarding high latency requests.\nAWS X-Ray collects logs and makes use of a Service Map to visualize the dependencies and calls to other services made in an API request.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"X-Ray can be used to identify API requests, currently not monitored by Canaries by comparing the user requests and those made by Canaries. This is useful to identify if any of the implemented API endpoints is currently not monitored for availability."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Service Maps ")),Object(i.b)("p",null,"End-to-end visual representation for all dependencies of an application that serves requests"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Trace Maps ")),Object(i.b)("p",null,"Individual end-to-end visual representation for a single request"),Object(i.b)("h2",{id:"benefits-of-aws-x-ray"},"Benefits of AWS X-Ray"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Provides a way to collect logs and metrics, for all services an API integrates with, including databases or other APIs;")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Visualizes the collected data for easy analysis of the data to help identify bottlenecks, error root causes and performance issues.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Aids the debugging process when an issue occurs, as it gives a developer a way to quickly pinpoint underlying services causing the issue"),Object(i.b)("p",{parentName:"li"},"   a. For example, if an API \u2018A\u2019 makes a call to another API \u2018B\u2019, X-Ray service map will help quickly identify which API is causing the issue so the developer can focus their efforts there."),Object(i.b)("p",{parentName:"li"},"   b. If API \u2018B\u2019 is the cause, X-Ray also provides trace maps, to show the end-to-end request for API \u2018B\u2019, providing insights into its dependencies to further narrow down the cause"),Object(i.b)("p",{parentName:"li"},"   c. In comparison, if a developer did not have access to X-Ray, they will have to:"),Object(i.b)("p",{parentName:"li"},"   i. look through application logs"),Object(i.b)("p",{parentName:"li"},"  ii. identify the line of code causing the error"),Object(i.b)("p",{parentName:"li"}," iii.  see which dependency this error is related to"),Object(i.b)("p",{parentName:"li"},"iv. Identify logs related to the dependency and go through the process of identifying root cause or possible further dependencies that need to be considered"),Object(i.b)("p",{parentName:"li"},"v. In summary, the process will take longer as developers will have to go through multiple steps and logs in order to narrow down the cause, which results in more development time spent on debugging, instead of resolving the issue."))),Object(i.b)("h2",{id:"how-to-enable-and-use-x-ray-in-our-apis"},"How to enable and use X-Ray in our APIs"),Object(i.b)("p",null,"Serverless can be used to automatically enable X-Ray on our APIs."),Object(i.b)("p",null,"How to enable X-Ray tracing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  https://www.serverless.com/framework/docs/providers/aws/guide/functions/#aws-x-ray-tracing/\n")),Object(i.b)("p",null,"This will enable it within Lambda and grant it the necessary IAM permissions"),Object(i.b)("p",null,"X-Ray needs additional C# configuration to capture metadata and trace downstream calls\nEnable C# tracing when using AWS Lambda"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  https://docs.aws.amazon.com/lambda/latest/dg/csharp-tracing.html\n")),Object(i.b)("h2",{id:"x-ray-with-postgres"},"X-Ray with Postgres"),Object(i.b)("p",null,"X-Ray can be enabled for Postgres to trace down to the database query level."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"       How to enable X-ray for database: ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"        https://net-immersionday.workshop.aws/6-using-x-ray-in-dotnet-application/8-entity-framework-tracing.html\n")),Object(i.b)("h2",{id:"x-ray-with-api-gateway"},"X-Ray with API Gateway"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"X-Ray can also be enabled for API Gateway to provide tracing for calls starting at API Gateway.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For all of our APIs, we use API Gateway to expose them for consumption.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"X-Ray will provide a trace of requests from the moment an API is invoked at API Gateway level to all services the requests travel to.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We use a custom Lambda authorizer, so enabling X-Ray at API Gateway will provide an easy way to identify if an issue has occurred at API level or during the authorization step.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The logging and tracing can be customized to only sample requests containing a certain header value and similar."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," How to enable X-Ray for API Gateway: ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"        https://docs.aws.amazon.com/xray/latest/devguide/xray-services-apigateway.html\n")),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"        X-Ray cost  ")),Object(i.b)("p",null,"The first 100,000 traces recorded each month are free.\nThe first 1,000,000 traces retrieved or scanned each month are free."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"**     Beyond free tier:  **\n")),Object(i.b)("p",null,"Traces recorded cost $5.00 per 1 million traces recorded ($0.000005 per trace).\nTraces retrieved cost $0.50 per 1 million traces retrieved ($0.0000005 per trace).\nTraces scanned cost $0.50 per 1 million traces scanned ($0.0000005 per trace)."),Object(i.b)("h2",{id:"performance-monitoring"},"Performance monitoring"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  AWS Lambda insights for performance monitoring\n")),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"     What are Lambda insights? ")),Object(i.b)("p",null,"As per AWS\u2019s documentation:"),Object(i.b)("p",null,"The solution collects, aggregates, and summarizes system-level metrics including CPU time, memory, disk and network usage. It also collects, aggregates, and summarizes diagnostic information such as cold starts and Lambda worker shutdowns to help you isolate issues with your Lambda functions and resolve them quickly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"      How to enable Lambda insights ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"        https://docs.aws.amazon.com/lambda/latest/dg/monitoring-insights.html\n")),Object(i.b)("p",null,"  ",Object(i.b)("strong",{parentName:"p"},"        Lambda insights cost   ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Standard CloudWatch cost strategy applies")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It depends how many metrics are we monitoring")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"How much data volume of metrics logs has been ingested"),Object(i.b)("p",{parentName:"li"},"   a. AWS provides an example, where a Lambda function, which has all 8 metrics monitored and is invoked 1M times in a month will cost $2.92 per month for Lambda insights"),Object(i.b)("p",{parentName:"li"},"   b. We don\u2019t expect each individual Lambda to be invoked as many times each month;\nWe need to evaluate if we are interested in monitoring all 8 metrics"))),Object(i.b)("h2",{id:"define-metrics-for-alerts"},"Define Metrics for Alerts"),Object(i.b)("p",null,"What metrics can be used to trigger alerts, eg, how many exceptions within a defined period.  A one size fit for metrics may not be suitable for all applications."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Front end logging: ")),Object(i.b)("p",null," How can we ship front end logs back to a central logging repository?"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"       https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-configuration.html\n")),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"}," X-ray js: ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"        https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-client.html\n")),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"}," Dashboard ")),Object(i.b)("p",null,"Service Lens can be used for a consolidated view of insights"),Object(i.b)("p",null,"We want to be able to be proactive in responding to alerts/issues."),Object(i.b)("p",null,"Thoughts/Ideas regarding monitoring and alerts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"       https://ideaflip.com/b/uunp6r5hrxar/\n")))}b.isMDXComponent=!0}}]);