(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),a=(n(0),n(119)),r={id:"application_logging",title:"Application Logging Guidelines"},l={unversionedId:"application_logging",id:"application_logging",isDocsHomePage:!1,title:"Application Logging Guidelines",description:"Introduction",source:"@site/docs/application_logging.md",slug:"/application_logging",permalink:"/API-Playbook/application_logging",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/application_logging.md",version:"current",sidebar:"docs",previous:{title:"Alerting",permalink:"/API-Playbook/alerting"},next:{title:"Centralised Logging and Monitoring",permalink:"/API-Playbook/centralised_logging"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Categories",id:"categories",children:[]},{value:"Correlation Id",id:"correlation-id",children:[]},{value:"Scopes",id:"scopes",children:[]},{value:"Filters and Masking",id:"filters-and-masking",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This document defines a set of guidelines used to produce rich application logging for applications belonging to a microservice architecture.\nProviding rich logging information will make it easier to investigate issues without making use of intrusive approaches (i.e: debug, memory dump), also making visible the behaviour of services by using monitoring tools to extract and/or query these logs."),Object(a.b)("h2",{id:"categories"},"Categories"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Application ")),Object(a.b)("p",null,"Logs related to the application behaviour that does not result into exceptions and would not be visible externally if not logged. Common scenarios are conditional behaviours that will generate different outputs based on the contents of the command or state of the resource being manipulated. Application logs should be the only log level required within the application and must be used with caution to avoid excessive log entries without value for issues investigation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Events "),"\nEvents are application notifications used to inform external components that an activity has happened within the application. In some cases the event will let external subscribers know if an operation happened successfully or failed. Every operation will raise at least two types of events, success or failure, but in some cases, it might generate different events based on the context of the operation. All events raised by an application are logged by the infrastructure components, so adding a log information to notify an event has happened is not required and will make the logging redundant."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Exceptions ")),Object(a.b)("p",null,"Exceptions is an execution flow mechanism used to interrupt the current processing flow either because, the application or one of it\u2019s dependent components behaved unexpectedly and can\u2019t proceed, or an application logic is aware it can\u2019t proceed because doing so will/may cause issues. All exceptions raised by an application or it\u2019s dependencies are logged by the infrastructure components, so adding a log information to notify an exception has happened is not required and will make the logging redundant."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Tracing and Context Correlation ")),Object(a.b)("p",null,"Whether an application executes a task successfully or not is often highly dependent on the input from the user. As a result, this contextual information may be vital when trying to diagnose a fault."),Object(a.b)("p",null,'This can be achieved by setting a property of your logging platform during the startup of a component.\nThis allows to view the unified stream of "events", but also to segregate per role when required to troublesh\noot an individual component.\nEvery operation in an application is initiated by a trigger either externally or internally (synchronous processing). In general, these triggers do not have visibility of the behaviour for each service, and just expect a result as output from a request.\nIn many cases, these operations may trigger operations into dependent services to accomplish the initial operation. These chain of events need to be correlated in order to identify possible failures or for auditing purposes. For this reason, enter into scene the CorrelationId and TracingContext.'),Object(a.b)("h2",{id:"correlation-id"},"Correlation Id"),Object(a.b)("p",null,"In order to identify any operation executed across different components and layers but that are part of the same context, there should be a correlationId sent from the client triggering the operation.\nCorrelationId is a global unique identifier (GUID) attribute provided by callers (or auto-generated when one is not provided) to identify the chain of calls between services.\nFor instance, an HTTP client should send a correlationId header for every call. The downstream systems should pass along this correlationId to any downstream layer so that all traces/logs can be identified as part of the same operation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Tracing Context ")),Object(a.b)("p",null,"Tracing Context is the name given to the correlated chain of calls that happened from an initial trigger until it reached the current state. By default the Tracing Context will be using the CorrelationId to identify all events raised since the first trigger initiate the operation.\nCurrently, the correlation identify the events in a chronological order and events happening in parallel on separate services will be mixed up."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Additional Attributes to Consider (Custom Dimensions) ")),Object(a.b)("p",null,Object(a.b)("img",{alt:"alt text",src:n(202).default}),"\n",Object(a.b)("img",{alt:"alt text",src:n(203).default})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," NOTE: "),"\nAttributes marked with a * indicate high importance."),Object(a.b)("h2",{id:"scopes"},"Scopes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Application Instance ")),Object(a.b)("p",null,"Each deployed instance of an application will provide the same log attributes to all log entries generated. It does not change in the scope of the operations generating\nthe logs."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Per Operation ")),Object(a.b)("p",null,"When an operation is started (API request, message from a Queue), the attributes will be set and used throughout the chain of calls using the same attributes. It does not change based on the context within the application. In case the value does not come from external calls, should be generated internally."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Per Log Entry "),"\nEach class or logger will have it\u2019s own set of attributes used within it\u2019s context to identify the source component that is generating the logs. i.e: The class name writing to the logs, the Resource Id being manipulated, or any data available only in the context of the logger."),Object(a.b)("h2",{id:"filters-and-masking"},"Filters and Masking"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Filters ")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To reduce the high volume of log entries, the applications should add the following log filters:"),Object(a.b)("li",{parentName:"ul"},"Filter out healthcheck logs (keep errors)"),Object(a.b)("li",{parentName:"ul"},"Limit the log level to"),Object(a.b)("li",{parentName:"ul"},"Non production environments = Information"),Object(a.b)("li",{parentName:"ul"},"Production environments = Warning"),Object(a.b)("li",{parentName:"ul"},"Don't let ASP.NET Core Console Logging Slow your App down"),Object(a.b)("li",{parentName:"ul"},"Logging in .NET Core and ASP.NET Core")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Masking ")),Object(a.b)("p",null,"Prevent log entries containing Personal Identifiable Information (PII) by removing the attributes, or, masking part of the value."))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,b=u["".concat(r,".").concat(g)]||u[g]||d[g]||a;return n?i.a.createElement(b,l(l({ref:t},c),{},{components:n})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/table1-e0a5c5c83baefa2c6004ecc43074914a.png"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/table2-a59c074e7efa44c1dbea6b47b4188019.png"}}]);