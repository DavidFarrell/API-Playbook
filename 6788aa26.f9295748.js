(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ec2-e7ff2bd7125956a975808172d6bcc200.png"},196:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ec21-480a152c14edf9a1b2de6433b3c0ddcd.png"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ec22-2e71eb1c7fb31ce39ace999acbad62cd.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(119)),o={id:"ec2_access",title:"Access to EC2 in a private subnet from local machine"},i={unversionedId:"ec2_access",id:"ec2_access",isDocsHomePage:!1,title:"Access to EC2 in a private subnet from local machine",description:"Steps to connect to EC2 instances in a private subnet",source:"@site/docs/ec2_access.md",slug:"/ec2_access",permalink:"/home/ec2_access",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/ec2_access.md",version:"current",sidebar:"docs",previous:{title:"Access to RDS in a private subnet from local machine",permalink:"/home/rds_access"},next:{title:"Creating users in PostgreSQL",permalink:"/home/postgresql"}},s=[{value:"Steps to connect to EC2 instances in a private subnet",id:"steps-to-connect-to-ec2-instances-in-a-private-subnet",children:[]},{value:"AWS configure",id:"aws-configure",children:[]}],l={toc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"steps-to-connect-to-ec2-instances-in-a-private-subnet"},"Steps to connect to EC2 instances in a private subnet"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Prerequisites ")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Ensure you have installed AWS CLI v2")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Ensure you have installed AWS Session manager plugin"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," If using AWS IAM user credentials: "),"\nRun the following command to configure your AWS credentials:"),Object(c.b)("h2",{id:"aws-configure"},"AWS configure"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," When prompted, provide the credentials required: ")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Access key: your access key")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Secret access key:  your secret key")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Region: eu-west-2")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Output format: json"))),Object(c.b)("u",null,"  If using credentials from AWS SSO: "),Object(c.b)("p",null," If you already have an AWS account and you use AWS SSO:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to the SSO portal and navigate to the account in which the EC2 instance is hosted."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{alt:"alt text",src:n(195).default})))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Click on \u2018Command line or programmatic access\u2019")),Object(c.b)("p",null,Object(c.b)("img",{alt:"alt text",src:n(196).default})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Copy your credentials (AWS Option 2 in screenshot above) and paste them in your aws credentials file (Usually located at the following path: Users -> your username -> .aws -> credentials)")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Alternatively(AWS Option 1 in screenshot above), copy the EXPORT commands to set up the credentials locally in your CLI"))),Object(c.b)("p",null,"Once the above is completed, please run the following command, where INSTANCE-ID is the EC2 instance ID as it appears in AWS console:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"alt text",src:n(197).default})),Object(c.b)("p",null,"The above command will start a port forwarding session. To connect to your EC2 instance, go to your Remote Desktop software that you usually use and use ",Object(c.b)("strong",{parentName:"p"}," \u2018localhost:55678\u2019 ")," as computer name."),Object(c.b)("p",null,"You will then be prompted to enter your Windows machine credentials."))}p.isMDXComponent=!0}}]);