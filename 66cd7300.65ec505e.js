(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/devops-138b997132369820f035affaf1a3608c.png"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/branch_policies-0d7fb1e10c280d32a19ca23b0103bc2c.png"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pull_requests-7e9dca0fa61d11738541f59ce133544a.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pull_request2-972976954fed4ea3f702df1a3846d8ae.png"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/dev_workflow-3486433985b9ce4751a9b48d1ee27c84.png"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/staging_workflow-01eb8ff54bdfa470e72ab8960692b7a2.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(119)),i={id:"branching_strategy",title:"Branching Strategy"},l={unversionedId:"branching_strategy",id:"branching_strategy",isDocsHomePage:!1,title:"Branching Strategy",description:"Development",source:"@site/docs/branching_strategy.md",slug:"/branching_strategy",permalink:"/API-Playbook/branching_strategy",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/branching_strategy.md",version:"current",sidebar:"docs",previous:{title:"Static Code Analysis",permalink:"/API-Playbook/static_code_analysis"},next:{title:"Deployment Pipeline",permalink:"/API-Playbook/deployment_pipeline"}},s=[{value:"Development",id:"development",children:[]},{value:"Branch Definitions",id:"branch-definitions",children:[]},{value:"Trunk Based Development",id:"trunk-based-development",children:[]},{value:"Environments",id:"environments",children:[]},{value:"Continuous testing:",id:"continuous-testing",children:[]},{value:"APIs",id:"apis",children:[]},{value:"Continuous Integration and Deployment",id:"continuous-integration-and-deployment",children:[]},{value:"Development workflow",id:"development-workflow",children:[]},{value:"Staging and Production workflow",id:"staging-and-production-workflow",children:[]},{value:"Continuous monitoring",id:"continuous-monitoring",children:[]},{value:"AWS Cloudtrail",id:"aws-cloudtrail",children:[]},{value:"AWS Security Hub",id:"aws-security-hub",children:[]},{value:"Infrastructure as code (IaC)",id:"infrastructure-as-code-iac",children:[]},{value:"Serverless framework",id:"serverless-framework",children:[]},{value:"Terraform",id:"terraform",children:[]}],c={toc:s};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"development"},"Development"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," GitHub is used for version control and source code management. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," When a new repository is created: ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the lbh-base-api template if creating a new API")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ensure you set the project up on CircleCI for CI/CD")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"By default, repositories should be kept public, unless there is a specific need and justification not to do so."))),Object(o.b)("h2",{id:"branch-definitions"},"Branch Definitions"),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"}," GitFlow ")),Object(o.b)("p",null,"Note: GitFlow is not strictly followed throughout projects, projects can evaluate and choose a branching strategy suitable for their needs."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Master branch ")),Object(o.b)("p",null,"The branch that holds the code currently in production;"),Object(o.b)("p",null,"This branch should be a representation of what is running in production (although that might not be a case if a deployment to staging has happened but has not been released to production yet);"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Development branch ")),Object(o.b)("p",null,"The branch that holds any changes currently in development stage that are not yet pushed to a staging or production environment;"),Object(o.b)("p",null,"If using development and master branches, a release to Staging/Production environments happens by a PR from development to master;"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Feature branch ")),Object(o.b)("p",null,"A branch containing any new changes as per requirements for the given project;"),Object(o.b)("p",null,"A feature branch should be created from the \u2018development\u2019 branch;"),Object(o.b)("p",null,"Once happy with the changes in the feature branch, a pull request to merge the changes into the \u2018development\u2019 branch should be made."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Hot-fix branch ")),Object(o.b)("p",null,"A branch containing fixes to code already in production state;"),Object(o.b)("p",null,"A hot-fix branch should be created from the master branch;"),Object(o.b)("p",null,"Any changes in the hot-fix branch should be merged into the master branch following a pull request review;"),Object(o.b)("p",null,"Hot-fixes applied should be merged directly to master as this triggers separate CircleCI workflow that will ensure that any changes currently in development are not overwritten;"),Object(o.b)("h2",{id:"trunk-based-development"},"Trunk Based Development"),Object(o.b)("p",null,"(",Object(o.b)("a",{parentName:"p",href:"https://trunkbaseddevelopment.com/"},"https://trunkbaseddevelopment.com/"),") **"),Object(o.b)("p",null,"Trunk based development is the most common branching strategy used for a microservice architecture. This is a fast workflow with minimal merging.\nEssentially in this model, master is the only branch which is maintained over time and other branches are considered transient and short lived."),Object(o.b)("p",null,"Feature branches should be as short lived as possible \u2013 the longer the branch is open for then the higher the risk of merge conflicts."),Object(o.b)("p",null,"All commits to feature branches should be built and tested on the CI/CD platform to provide fast feedback to developers, and any code being merged into the trunk must go through a pull-request peer review process. Typically feature branches do not publish any artefacts or trigger deployments as these slow down the feedback process."),Object(o.b)("p",null,"The cadence of release branches should align with an individual\u2019s services release schedule. Some projects may only create release branches at the end of a sprint, whilst others might create several per-week."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(197).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(198).default})),Object(o.b)("p",null,"Trunk-based development is a mindset more than a practice.  It forces the developers to think early on about how not to break the build, instead of waiting to think about this when merging the branch.\nTrunk-based development becomes more natural to adopt when you use feature flags in your continuous integration pipeline.",Object(o.b)("br",{parentName:"p"}),"\n","Feature flags is a technique that will help you integrate code into a shared repository at least once a day and ship it,\neven if you haven't finished the feature yet. You'll be able to deploy at any time,\nbut defer the decision to release for another day.  Turn off the feature flag and let the team continue working with a stable version and a healthy build."),Object(o.b)("h2",{id:"environments"},"Environments"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Pull requests: ")),Object(o.b)("p",null,"All tests need to be passing prior to merging code"),Object(o.b)("p",null,"GitHub PR template needs to be completed as detailed as possible, including a link to the JIRA ticket of the work done"),Object(o.b)("p",null,"There needs to be a minimum of 1 approver per PR prior to merging"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(199).default})),Object(o.b)("h2",{id:"continuous-testing"},"Continuous testing:"),Object(o.b)("p",null,"At Hackney, unit and integration tests must be run as part of the CI/CD pipeline at the point of:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Code committed to remote branch")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deployment to different environments"),Object(o.b)("p",{parentName:"li"},"We use Test Driven Development (TDD) approach when writing code.\nEach project\u2019s test suite must include tests produced as part of TDD as well as integration tests."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," More on practices in Hackney for writing tests here: ","[Link TBC in API playbook]"," ")),Object(o.b)("h2",{id:"apis"},"APIs"),Object(o.b)("p",null,"For APIs, we use docker-compose to build image(s) and run the test suite."),Object(o.b)("p",null,"For the purpose of end-to-end tests, we create a docker image of a database to run tests against"),Object(o.b)("h2",{id:"continuous-integration-and-deployment"},"Continuous Integration and Deployment"),Object(o.b)("p",null,"Once a pull request has been merged, it will trigger a CircleCI workflow to automatically deploy to Development, Staging and Production respectively."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Note: Deployment to Production requires a manual approval step within CircleCI first. ")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(200).default})),Object(o.b)("h2",{id:"development-workflow"},"Development workflow"),Object(o.b)("p",null,"Merging into a \u2018development\u2019 branch triggers the \u2018development deployment\u2019 workflow:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:n(201).default})),Object(o.b)("h2",{id:"staging-and-production-workflow"},"Staging and Production workflow"),Object(o.b)("p",null,"Merging into the \u2018master\u2019 branch automatically deploys to the staging environment. For production release, a manual approval stage in CircleCI is required.\n",Object(o.b)("img",{alt:"alt text",src:n(202).default})),Object(o.b)("h2",{id:"continuous-monitoring"},"Continuous monitoring"),Object(o.b)("p",null,"AWS CloudWatch"),Object(o.b)("p",null,"Used for Application monitoring"),Object(o.b)("p",null,"Using alarms for when errors occur"),Object(o.b)("p",null,"Using Canaries for up-time monitoring"),Object(o.b)("p",null,"Integrated with slack channel to get notifications when an alarm is triggered"),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"  More on monitoring can be found in our API Playbook ","[Link TBC]"," ")),Object(o.b)("h2",{id:"aws-cloudtrail"},"AWS Cloudtrail"),Object(o.b)("p",null,"Used to monitor activities within our AWS accounts"),Object(o.b)("h2",{id:"aws-security-hub"},"AWS Security Hub"),Object(o.b)("p",null,"Using AWS Security Hub to ensure our accounts are safe and resources adhere to AWS best security practices"),Object(o.b)("p",null,"Alerts us when a security configuration rule compliance has changed"),Object(o.b)("h2",{id:"infrastructure-as-code-iac"},"Infrastructure as code (IaC)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  More on IaC in our API playbook here [Link TBC]]\n")),Object(o.b)("p",null,"Each API is responsible for maintaining its own infrastructure."),Object(o.b)("p",null,"Our IaC deployment process is automated via our CI/CD pipeline."),Object(o.b)("h2",{id:"serverless-framework"},"Serverless framework"),Object(o.b)("p",null,"We use the serverless framework to help us deploy Lambda functions and related resources."),Object(o.b)("p",null,"The serverless framework configuration is stored within a serverless.yml file and should be responsible for provisioning resources related directly to the Lambda function that is to be deployed."),Object(o.b)("p",null,"API Gateway for exposing the APIs"),Object(o.b)("p",null,"Lambda IAM role;"),Object(o.b)("p",null,"Although serverless allows for other AWS resources to be provisioned using IaC approach, we use Terraform for provisioning other resources, such as DMS (Data migration service) tasks, S3 buckets, etc."),Object(o.b)("h2",{id:"terraform"},"Terraform"),Object(o.b)("p",null,"Used for provisioning all other AWS resources, apart from the Lambda related resources listed above."),Object(o.b)("p",null,"Terraform Hackney Guide - Note: This will be evolving from its current state as currently the Cloud Deployment team are producing more Terraform templates."))}u.isMDXComponent=!0}}]);