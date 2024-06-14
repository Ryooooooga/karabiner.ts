"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[214],{4833:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(5893),a=n(1151);const s={title:"duoLayer()"},t=void 0,i={id:"rules/duo-layer",title:"duoLayer()",description:"Duo layer is a step further of hyper layer inspired by @mxstbr's Karabiner Elements configuration.",source:"@site/docs/rules/duo-layer.md",sourceDirName:"rules",slug:"/rules/duo-layer",permalink:"/rules/duo-layer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"duoLayer()"},sidebar:"docs",previous:{title:"hyperLayer() / modifierLayer()",permalink:"/rules/hyper-layer"},next:{title:"layer().leaderMode()",permalink:"/rules/leader-mode"}},l={},d=[{value:"How duo layer works",id:"how-duo-layer-works",level:2},{value:"Problems in duo layer",id:"problems-in-duo-layer",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Duo layer is a step further of ",(0,o.jsx)(r.a,{href:"./hyper-layer",children:"hyper layer"})," inspired by ",(0,o.jsx)(r.a,{href:"https://github.com/mxstbr/karabiner",children:"@mxstbr's Karabiner Elements configuration"}),".\nInstead of using hyper or any modifier(s), duo layer use any 2 keys together as the\nlayer trigger, like ",(0,o.jsx)(r.code,{children:"f + d"}),", which is normally easier to press than ",(0,o.jsx)(r.code,{children:"f + hyper"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"duoLayer('f', 'd').manipulators([\n  map(1).to(2)\n])\n"})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Generated JSON"}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'{\n  "description": "Layer - duo-layer-f-d",\n  "manipulators": [\n    {\n      "type": "basic",\n      "from": {\n        "simultaneous": [\n          {"key_code": "f"},\n          {"key_code": "d"}\n        ],\n        "simultaneous_options": {\n          "to_after_key_up": [\n            {"set_variable": {"name": "duo-layer-f-d", "value": 0}}\n          ]\n        },\n        "modifiers": {"optional": ["any"]}\n      },\n      "parameters": {"basic.simultaneous_threshold_milliseconds": 200},\n      "to": [\n        {"set_variable": {"name": "duo-layer-f-d", "value": 1}}\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {"key_code": "1"},\n      "to": [\n        {"key_code": "2"}\n      ],\n      "conditions": [\n        {"type": "variable_if", "name": "duo-layer-f-d", "value": 1}\n      ]\n    }\n  ]\n}\n'})})]}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.p,{children:["One of the two keys can be released once the layer is activated. ",(0,o.jsx)("br",{}),"\nWith ",(0,o.jsx)(r.code,{children:"duoLayer('f', ';')"}),", only one of ",(0,o.jsx)(r.code,{children:"f"})," or ",(0,o.jsx)(r.code,{children:";"})," needs to be held to keep using\nthe keymaps on the layer."]})}),"\n",(0,o.jsx)(r.h2,{id:"how-duo-layer-works",children:"How duo layer works"}),"\n",(0,o.jsxs)(r.p,{children:["Duo layer is a combination of ",(0,o.jsx)(r.a,{href:"./layer",children:"layer"})," and ",(0,o.jsx)(r.a,{href:"./simlayer",children:"simlayer"}),":"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Same as simlayer, it uses ",(0,o.jsx)(r.a,{href:"https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/from/simultaneous/",children:"from.simultaneous"}),"\nfunctionality to toggle the layer variable."]}),"\n",(0,o.jsx)(r.li,{children:"Same as layer, it is active once the layer keys are pressed and held."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"problems-in-duo-layer",children:"Problems in duo layer"}),"\n",(0,o.jsx)(r.p,{children:"The duo layer has a limitation where if the two keys are typed rapidly together,\nthey may not be triggered. For instance, if the letter pair 'd' and 's'\nis assigned to a duo layer and the word 'words' is typed quickly,\nonly 'wor' will be triggered. To address this issue, it is advisable to select\nletter pairs that are not adjacent in regular typing."})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>t});var o=n(7294);const a={},s=o.createContext(a);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);