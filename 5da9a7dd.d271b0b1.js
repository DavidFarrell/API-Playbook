(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{117:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(f,a(a({ref:e},u),{},{components:n})):o.a.createElement(f,a({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},181:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/code1-13ab0416b9fd450c5139f888be8c612f.png"},182:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/code2-41a3f6c1576615651c505119be07965f.png"},183:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/code3-c8083aba84b3013af6080102cf88da7d.png"},184:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/code4-1e7e5b5fd0066935dfd1cca9f7b66119.png"},88:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return a})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(117)),c={id:"unit_test",title:"Writing Unit Tests"},a={unversionedId:"unit_test",id:"unit_test",isDocsHomePage:!1,title:"Writing Unit Tests",description:"Introduction",source:"@site/docs/unit_test.md",slug:"/unit_test",permalink:"/API-Playbook/unit_test",editUrl:"https://github.com/LBHackney-IT/API-Playbook/edit/master/docs/unit_test.md",version:"current",sidebar:"docs",previous:{title:"Good TDD Principles",permalink:"/API-Playbook/tdd"},next:{title:"How to write integration tests",permalink:"/API-Playbook/integration_tests"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up and using mocks",id:"setting-up-and-using-mocks",children:[]}],u={toc:s};function l(t){var e=t.components,c=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,c,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Unit tests are used to test the functionality of a class in isolation.\nSo if a class depends on another we will need to mock any interactions with that class. We are using ",Object(i.b)("u",null," dependency injection "),"  so any class which needs to interact with another will be passed an interface, which the depended on class subscribes to, in the constructor.\nIn the tests, we can then just pass in a mock implementation of this interface into the constructor instead."),Object(i.b)("p",null,"There is some good advice for mocking and writing unit tests here:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices"},"https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices")),Object(i.b)("h2",{id:"setting-up-and-using-mocks"},"Setting up and using mocks"),Object(i.b)("p",null,"You can use mocks to return a specific value for a given input. For example a test for the following code:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(181).default})),Object(i.b)("p",null,"might look like.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(182).default})),Object(i.b)("p",null,"Or you can assert that they were called with the correct inputs. For example a test for the following code.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(183).default})),Object(i.b)("p",null,"might look like.."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt text",src:n(184).default})),Object(i.b)("p",null,"These examples are just a couple of common use cases for using Moq, check out the documentation link below for more examples and use cases:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/Moq/moq4/wiki/Quickstart"},"https://github.com/Moq/moq4/wiki/Quickstart")))}l.isMDXComponent=!0}}]);