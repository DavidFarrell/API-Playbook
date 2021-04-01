(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rds1-9b789b50aeeb882d3cee4a5d1958f081.png"},170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rds2-046b58b4d8cdcf5e58db4a283f205965.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rds3-7c6f40f5748210b32eb6f79b7b071481.png"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(111)),o={id:"rds_access",title:"Access to RDS in a private subnet from local machine"},s={unversionedId:"rds_access",id:"rds_access",isDocsHomePage:!1,title:"Access to RDS in a private subnet from local machine",description:"Securely connecting to an AWS RDS instance",source:"@site/docs/rds_access.md",slug:"/rds_access",permalink:"/API-Playbook/rds_access",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/rds_access.md",version:"current",sidebar:"docs",previous:{title:"Generating Tokens",permalink:"/API-Playbook/generating_tokens"},next:{title:"Access to EC2 in a private subnet from local machine",permalink:"/API-Playbook/ec2_access"}},i=[{value:"Securely connecting to an AWS RDS instance",id:"securely-connecting-to-an-aws-rds-instance",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Steps",id:"steps",children:[]}],l={toc:i};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"securely-connecting-to-an-aws-rds-instance"},"Securely connecting to an AWS RDS instance"),Object(c.b)("p",null,"The instructions will help you connect to an AWS RDS instance without the need for that RDS resource to have a publicly available DNS. This connection can be made using a database client such as pgadmin.  You will utilise AWS session manager to connect to a Bastion host (or jumpbox) within the same AWS account as your desired RDS database."),Object(c.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The aws cli installed - guide:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The aws session manager plugin installed - guide:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html\n")))),Object(c.b)("p",null," 3.An ssh client installed (don\u2019t think it comes as standard in Windows) - guide:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Your Google account be given the relevant permissions to the AWS account and the EC2 instance (jumpbox)"),Object(c.b)("li",{parentName:"ol"},"The instance ID of the jumpbox"),Object(c.b)("li",{parentName:"ol"},"The private key for the EC2 instance that you will be connecting through")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," You will also need : ")),Object(c.b)("p",null,"a. The DNS of the RDS instance you want to connect to"),Object(c.b)("p",null,"b. The port that is open on that RDS instance"),Object(c.b)("p",null,"c. The database within the RDS instance you want to connect to"),Object(c.b)("p",null,"d. The database credentials for the RDS instance you want to connect to"),Object(c.b)("h2",{id:"steps"},"Steps"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," 1 - AWS credentials ")),Object(c.b)("p",null,"Ensure that you have up to date AWS credentials for the account you want to access.\nThere are multiple ways to do this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Here we will describe one of them: ")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to :"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"https://hackney.awsapps.com/start#/\n")))),Object(c.b)("p",null,"and log in using your Google account credentials"),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Expand the account that you will need access to and click on \u201cCommand line or programmatic access\u201d next to the role that you want to use.\nThe role you will be using will have been explained to you beforehand.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"alt text",src:n(169).default})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"You are then provided with instructions on how to add the credentials you will be authenticating with (note macOs and Windows options).")),Object(c.b)("p",null,Object(c.b)("img",{alt:"alt text",src:n(170).default})),Object(c.b)("p",null,"2 - Connecting to RDS"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," 2. In a shell - run the below command replacing the values in the table below with the ones for your connection. ")),Object(c.b)("p",null,Object(c.b)("img",{alt:"alt text",src:n(171).default})),Object(c.b)("p",null,"You can then connect using your client on 127.0.0.1:9999"))}u.isMDXComponent=!0}}]);