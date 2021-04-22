(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data_migration-73e2cce6d9fa53074fa3367c781564bd.png"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data2-1ed1d95ace54a12b07be3b95f2f7facd.png"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data3-a93122c4b2c0d3e95b05b83e435f8963.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/data4-da7082192e5e80119a19ddec3adf760a.png"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(117)),i={id:"data_migration",title:"Setting Up DMS"},s={unversionedId:"data_migration",id:"data_migration",isDocsHomePage:!1,title:"Setting Up DMS",description:"Data migration using AWS DMS",source:"@site/docs/data_migration.md",slug:"/data_migration",permalink:"/API-Playbook/data_migration",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/data_migration.md",version:"current",sidebar:"docs",previous:{title:"Creating users in PostgreSQL",permalink:"/API-Playbook/postgresql"},next:{title:"Pipeline Implementation",permalink:"/API-Playbook/pipeline_implementation"}},l=[{value:"Data migration using AWS DMS",id:"data-migration-using-aws-dms",children:[]},{value:"What is AWS DMS?",id:"what-is-aws-dms",children:[]},{value:"Which AWS DMS set up to use?",id:"which-aws-dms-set-up-to-use",children:[]},{value:"How to set up DMS",id:"how-to-set-up-dms",children:[]},{value:"Data migration using a data pipeline",id:"data-migration-using-a-data-pipeline",children:[]}],c={toc:l};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"data-migration-using-aws-dms"},"Data migration using AWS DMS"),Object(o.b)("h2",{id:"what-is-aws-dms"},"What is AWS DMS?"),Object(o.b)("p",null,"AWS Data Migration Service (DMS) is a service that allows us to migrate data between a source (in our case, on-premises database) and a target (in our case, Postgres database hosted in AWS)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," DMS supported replication types: ")),Object(o.b)("u",null," 1. Continuous replication (CDC) "),Object(o.b)("p",null,"  a. When we want to do a one-off migration of all data and then continuously capture new inserts, updates and deletes and reflect them in our target database"),Object(o.b)("u",null," 2. One-off data migration "),Object(o.b)("p",null,"  b. When the goal is to migrate all data from a source, and is expected that changes will not be captured and reflected"),Object(o.b)("h2",{id:"which-aws-dms-set-up-to-use"},"Which AWS DMS set up to use?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  ",Object(o.b)("u",null," For continuous migration: ")," ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  CDC ")),Object(o.b)("p",null,"  a. CDC is a SQL server feature, available only on Enterprise and Developer editions"),Object(o.b)("p",null,"  b. It allows for changes to be captured (inserts/updates/deletes)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  Use case ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When the source database does not have primary keys and you want to migrate data continuously.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"   MS Replication ")),Object(o.b)("p",null,"  c. MS Replication is a SQL server feature available on all editions"),Object(o.b)("p",null,"  d. It creates a \u201cdistribution\u201d database and every time there is a change, it is captured and stored in the \u201cdistribution\u201d database"),Object(o.b)("p",null,"  e. DMS will then read from that database to reflect the changes in the target database"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  f.NB! ")," The sql user created must have ",Object(o.b)("strong",{parentName:"p"}," sysadmin ")," permissions to set up replication"),Object(o.b)("p",null,"  g. ",Object(o.b)("u",null," Additional notes: ")," Configuration on the source database is required (please see below section). Additionally, SQL servers DO NOT come with MS replication\nfeatures pre-installed, so the server might require a set up."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  Use cases ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When you want to migrate data continuously")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When the SQL server is not Enterprise/Developer edition")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When the source database has tables, which make use of primary keys"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  For one-off set up ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"No database configuration is required")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The sql user must have at least db_owner permissions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The replication runs ones and migrates the data specified")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There are no subsequent runs of the migration task, unless triggered with other means"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  Use cases ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When only a one-off migration is required")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When the underlying source database is a reporting server and there are no possible ways to capture updates. In this scenario, we need to daily run a one-off migration, after the reporting server was updated with the latest data"))),Object(o.b)("h2",{id:"how-to-set-up-dms"},"How to set up DMS"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Database set up  ")),Object(o.b)("p",null," DMS with SQL CDC"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1EaZ-a8ejQwWQ40OGDGobxhTqtxXvtX9Ydk5mTFASUMo/edit"},"https://docs.google.com/document/d/1EaZ-a8ejQwWQ40OGDGobxhTqtxXvtX9Ydk5mTFASUMo/edit")),Object(o.b)("p",null,"DMS with MS Replication"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/14kNirloRWXCnla08brXiTihCMIm24chygc1lGUjNVbE/edit?usp=sharing"},"https://docs.google.com/document/d/14kNirloRWXCnla08brXiTihCMIm24chygc1lGUjNVbE/edit?usp=sharing")),Object(o.b)("p",null,"AWS DMS set up via Terraform"),Object(o.b)("p",null,"Both DMS and Postgres can be created via Terraform."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," DMS ")),Object(o.b)("p",null,"Template repository and example usage:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/aws-dms-terraform"},"https://github.com/LBHackney-IT/aws-dms-terraform")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:a(159).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  NB: ")),Object(o.b)("p",null,"  a. Follow the example usage, which also demonstrates how to add table mappings (specifying which tables are to be replicated)"),Object(o.b)("p",null,"  b. The source DB server should be specified with IP and not the server name"),Object(o.b)("p",null,"  c. DMS instance should be in the VPC, where the VPN is set up to ensure communication to on-prem is possible"),Object(o.b)("p",null,"  d. ",Object(o.b)("u",null,"  Make sure your DMS instance\u2019s subnet group has only private subnets in it! ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  Postgres ")),Object(o.b)("p",null,"  Template repository and example usage:\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/database/postgres"},"https://github.com/LBHackney-IT/aws-hackney-common-terraform/tree/master/modules/database/postgres")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:a(160).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," NB: ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DMS does not support Postgres version 12, so use version 11 or older."),Object(o.b)("li",{parentName:"ul"},"Always store passwords in parameter store and do not hardcode them"),Object(o.b)("li",{parentName:"ul"},"\u201cMulti_az\u201d should be true for production databases"),Object(o.b)("li",{parentName:"ul"},"\u201csubnet_ids\u201d requires subnets in 2 different AZs. Make sure those are private subnets to ensure that the database is secure."),Object(o.b)("li",{parentName:"ul"},"Currently not terraformed: To enable traffic from DMS to your Postgres instance, ensure you add to the ingress rules of the database\u2019s security group all traffic   from DMS security group.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt text",src:a(161).default})),Object(o.b)("h2",{id:"data-migration-using-a-data-pipeline"},"Data migration using a data pipeline"),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"    What is a data pipeline? ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  A data pipeline is an automated flow that gets data stored in one location (source) and uploads it to a target destination.\n")),Object(o.b)("p",null,"  ",Object(o.b)("strong",{parentName:"p"},"      Data pipeline - csv to Postgres ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  As of 26/06/2020, we have implemented one data pipeline.\n\n  The pipeline takes data uploaded in an S3 bucket in .csv format and uploads the data into a Postgres database.\n")),Object(o.b)("p",null,"  ",Object(o.b)("img",{alt:"alt text",src:a(162).default})))}b.isMDXComponent=!0}}]);