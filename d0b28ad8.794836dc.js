(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(116)),a={id:"deployment_pipeline",title:"Deployment Pipeline"},l={unversionedId:"deployment_pipeline",id:"deployment_pipeline",isDocsHomePage:!1,title:"Deployment Pipeline",description:"Introduction",source:"@site/docs/deployment_pipeline.md",slug:"/deployment_pipeline",permalink:"/API-Playbook/deployment_pipeline",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/deployment_pipeline.md",version:"current",sidebar:"docs",previous:{title:"Branching Strategy",permalink:"/API-Playbook/branching_strategy"},next:{title:"Infrastucture as Code",permalink:"/API-Playbook/infrastructure"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Video Tutorial",id:"video-tutorial",children:[]},{value:"CI/CD",id:"cicd",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"A Deployment pipeline is the process of taking code from a version control repo, such as Github, and releasing a version or the master branch to our deployment environments in an automated fashion."),Object(i.b)("h2",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," For a better understanding of our Deployment Pipeline, please watch our short video tutorial: ")),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/X68e_wdII2c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h2",{id:"cicd"},"CI/CD"),Object(i.b)("p",null,"We use CI/CD in Hackney as an efficient way to build, test and deploy new code.\nCI/CD is short for ",Object(i.b)("strong",{parentName:"p"}," Continuous Integration and Continuous Delivery/Deployment ")," ."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," CI/CD works in conjunction with the following processes: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Version control (branches, commits, merges)"),Object(i.b)("li",{parentName:"ul"},"Build automation/continuous integration"),Object(i.b)("li",{parentName:"ul"},"Test automation"),Object(i.b)("li",{parentName:"ul"},"Deploy automation")),Object(i.b)("p",null,"We use a combination of software functions in Github and Circle CI, configured via a Yaml file to fully automate environment deployments. Our deployments will usually support a development, staging, and production environment."),Object(i.b)("p",null,"The CI/CD yaml configuration is stored in a file in a specifically named folder. The yaml configuration contains all the steps which will be carried out in Circle CI as part of the deployment."),Object(i.b)("p",null,"The deployment process is initiated via a commit to a working branch in Github. All branch commits are built and code tests are run. Branches with failing tests or builds cannot be merged into the master branch which is used for deployments."),Object(i.b)("p",null,"Before a branch can be merged into master, after a successful build and test, it is marked for code review via a PR (Pull Request) in Github. An approved PR will then fully initiate the CI/CD pipeline process."),Object(i.b)("p",null,"The first steps for a deployment are usually the code formatting check, code build and test, deployment software tools installation, assignment of necessary security roles for deployments to AWS Lambda."),Object(i.b)("p",null,"The successful completion of all of these steps will allow automated code deployment to the development environments."),Object(i.b)("p",null,"In order to deploy to staging and production environments, manual approval in Circle CI is required as the final step."),Object(i.b)("p",null,"The automation of the deployment to different environments gives flexibility in making small changes to the code and testing of features before deployment to a production environment."),Object(i.b)("p",null,"Deployment automation means we decrease the possibility of human error when releasing new versions of code to deployment environments."))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);