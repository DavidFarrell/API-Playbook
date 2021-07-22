(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(135)),o={id:"lambda_best_practices",title:"Lambda Functions Use and Good Practice"},s={unversionedId:"lambda_best_practices",id:"lambda_best_practices",isDocsHomePage:!1,title:"Lambda Functions Use and Good Practice",description:"Introduction",source:"@site/docs/lambda_best_practices.md",slug:"/lambda_best_practices",permalink:"/API-Playbook/lambda_best_practices",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/lambda_best_practices.md",version:"current",sidebar:"docs",previous:{title:"AWS / ECS with Fargate and when to use",permalink:"/API-Playbook/aws_ecs"},next:{title:"Composing Your Application With Multiple Docker Containers",permalink:"/API-Playbook/multiple_docker_containers"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Good Practices",id:"good-practices",children:[{value:"When is it best to use a Lambda function?",id:"when-is-it-best-to-use-a-lambda-function",children:[]},{value:"How do we go about building a Lambda function?",id:"how-do-we-go-about-building-a-lambda-function",children:[]}]},{value:"Lambda deployment",id:"lambda-deployment",children:[{value:"Running your Lambda locally vs Running in the cloud (AWS)",id:"running-your-lambda-locally-vs-running-in-the-cloud-aws",children:[]}]},{value:"Lambda naming good practices",id:"lambda-naming-good-practices",children:[]},{value:"Logging your Lambda activity",id:"logging-your-lambda-activity",children:[{value:"Alerts",id:"alerts",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"We currently use AWS Lambda services for most of our APIs.  Lambda functions are cloud based compute services that allow you to execute code without having to provision servers.  It is also a very cost effective means of implementing API services since compute costs are only incurred when the service is called and the function runs."),Object(i.b)("h2",{id:"good-practices"},"Good Practices"),Object(i.b)("h3",{id:"when-is-it-best-to-use-a-lambda-function"},"When is it best to use a Lambda function?"),Object(i.b)("p",null,"Lambdas are generally best used for services that do not run for more than 5 minutes. When using Lambdas as API functions fronted by the API gateway, this time limit is further restricted to under 30 seconds (AWS imposes a hard limit on the time an API gateway endpoint can run).  In the vast majority of cases this is sufficient for our API needs. There are some limitations however when we link multiple Lambdas together. Typical setup could be a front end Lambda calling a service API Lambda which in turns calls a platform API. When planning architecture around chaining different Lambdas together, it is worth analysing whether the whole process can be run well under the allocated 30 seconds.\nFor the majority of cases that will be more than enough time."),Object(i.b)("h3",{id:"how-do-we-go-about-building-a-lambda-function"},"How do we go about building a Lambda function?"),Object(i.b)("p",null,"Building a Lambda function is no different from building any other application.  In fact our BaseAPI is designed in such a way that it can be run either as a standalone application or as a series of serverless functions."),Object(i.b)("p",null,"The main difference is that a second entry point needs to be added."),Object(i.b)("p",null," In a normal console application the entry point is a Program.cs file (.Net) with the usual main method such as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="Program.cs"',title:'"Program.cs"'},"public static void Main(string[] args)\n{\n WebHost.CreateDefaultBuilder(args)\n   .UseStartup<Startup>().Build().Run();\n}\n")),Object(i.b)("p",null,"If you add a secondary entry point to your application such as a LambdaEntryPoint.cs file with an ",Object(i.b)("inlineCode",{parentName:"p"},"Init")," method, you have something that is ready for AWS:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="LambdaEntryPoint.cs"',title:'"LambdaEntryPoint.cs"'},"protected override void Init(IWebHostBuilder builder)\n{\n  builder\n    .UseStartup<Startup>();\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Please note, this class must inherit from APIGatewayProxyFunction class (from Amazon.Lambda.AspNetCoreServer Nuget package), so the Init function can be overridden ")),Object(i.b)("h2",{id:"lambda-deployment"},"Lambda deployment"),Object(i.b)("p",null,"We use the Serverless service to deploy our Lambda functions to AWS.  Serverless takes care of all of the required infrastructure scaffolding using AWS CloudFormation in the background."),Object(i.b)("p",null," There are a few things to consider when setting up your serverless configuration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure that your lambda function is suitably named so it can be easily identified when added to the HackIt API ecosystem."),Object(i.b)("li",{parentName:"ul"},"Ensure that your API Gateway is set up to use the relevant authorizers and relevant measurement and rate limiting is set."),Object(i.b)("li",{parentName:"ul"},"Ensure that logging is implemented for your functions"),Object(i.b)("li",{parentName:"ul"},"Ensure that Serverless is able to find any required secrets stored in Systems Manager."),Object(i.b)("li",{parentName:"ul"},"A good example of a Serverless configuration file can be found in our ",Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-base-api/blob/master/BaseApi/serverless.yml"},"Base API"),".")),Object(i.b)("h3",{id:"running-your-lambda-locally-vs-running-in-the-cloud-aws"},"Running your Lambda locally vs Running in the cloud (AWS)"),Object(i.b)("p",null,"Due to the way the default BaseApi is set up with two application entry points, it is normally not necessary to add any additional tools or frameworks locally for development and debugging. The application can be run and debugged locally as any other .NET Core API."),Object(i.b)("h2",{id:"lambda-naming-good-practices"},"Lambda naming good practices"),Object(i.b)("p",null,"Our standard naming convention for Lambdas in our serverless configuration is: ",Object(i.b)("inlineCode",{parentName:"p"},"${self:service}-${self:provider.stage}"),"."),Object(i.b)("p",null,"Using the above format it is very easy to identify what service and stage the Lambda belongs to when we can have have a lot of different Lambdas on a single account."),Object(i.b)("p",null,"For example the BaseApi sample configuration above would result in a Lambda function called ",Object(i.b)("inlineCode",{parentName:"p"},"your-api-name-production")," when deployed to production"),Object(i.b)("h2",{id:"logging-your-lambda-activity"},"Logging your Lambda activity"),Object(i.b)("p",null,"BaseApi\u2019s serverless configuration includes the basic setup for policies required to enable Cloudwatch monitoring for Lambda. CloudWatch is often sufficient for basic monitoring and doesn't require any changes to the application code."),Object(i.b)("p",null,"In some cases it\u2019s useful to have a bit more insight on how the Lambda is performing. In that case services like X-Ray can be implemented. They require some additional configuration to the application, but are generally relatively easy to implement at any point. "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/x_ray"},Object(i.b)("strong",{parentName:"a"},"More about X-Ray here"))),Object(i.b)("h3",{id:"alerts"},"Alerts"),Object(i.b)("p",null,"For more details on logging and alerts in general, please see our ",Object(i.b)("a",{parentName:"p",href:"/alerting"},"alerting guide"),"."))}u.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);