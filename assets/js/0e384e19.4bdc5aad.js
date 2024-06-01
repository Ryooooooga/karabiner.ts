"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[671],{7876:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(5893),r=t(1151);const o={title:"Intro",slug:"/"},s="karabiner.ts",a={id:"intro",title:"Intro",description:"Karabiner-Elements configuration file is",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/karabiner.ts/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Intro",slug:"/"},sidebar:"docs",next:{title:"rule()",permalink:"/karabiner.ts/rules/rule"}},c={},l=[];function d(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"karabinerts",children:"karabiner.ts"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://karabiner-elements.pqrs.org/",children:"Karabiner-Elements"})," configuration file is\nin JSON format."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"~/.config/karabiner/karabiner.json"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "profiles": [\n    {\n      // highlight-next-line\n      "name": "Default",                    // 1\n      "complex_modifications": {\n        // highlight-next-line\n        "rules": [                              // 2\n          {\n            "description": "Demo Rule",\n            // highlight-next-line\n            "manipulators": [                       // 3\n              {\n                "type": "basic",\n                // highlight-next-line\n                "from": { "key_code": "caps_lock" },    // 4\n                // highlight-next-line\n                "to": [                                 // 5\n                  {"key_code": "delete_or_backspace", "modifiers": ["command"]}\n                ],\n                // highlight-next-line\n                "conditions": [                         // 6\n                  {"type": "variable_if", "name": "test", "value": 1}\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://github.com/evan-liu/karabiner.ts",children:(0,i.jsx)(e.code,{children:"karabiner.ts"})})," allows you to write ",(0,i.jsx)(e.code,{children:"complex_modifications"})," in TypeScript:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"writeToProfile('Default', [ // 1 profile to config complex_modifications\n  rule('Demo Rule')             // 2 rules\n    .manipulators([                 // 3 manipulators\n      map('\u21ea')                          // 4 from\n        .to('\u232b', '\u2318')                   // 5 to\n        .condition(ifVar('test')),      // 6 conditions\n    ]),\n])\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);