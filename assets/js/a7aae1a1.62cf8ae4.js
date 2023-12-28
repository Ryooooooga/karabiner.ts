"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[365],{1163:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(5893),r=a(1151);const o={title:"layer()"},l=void 0,s={id:"rules/layer",title:"layer()",description:"Layer is a group of manipulators which are only active when a key is pressed and held.",source:"@site/docs/rules/layer.md",sourceDirName:"rules",slug:"/rules/layer",permalink:"/rules/layer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"layer()"},sidebar:"docs",previous:{title:"rule()",permalink:"/rules/rule"},next:{title:"simlayer()",permalink:"/rules/simlayer"}},t={},d=[{value:"How layer works",id:"how-layer-works",level:2},{value:"Layer modifiers",id:"layer-modifiers",level:2},{value:"Config the layer key",id:"config-the-layer-key",level:2},{value:"Multiple layer keys",id:"multiple-layer-keys",level:2},{value:"Problems in layer",id:"problems-in-layer",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Layer is a group of ",(0,i.jsx)(n.code,{children:"manipulators"})," which are only active when a key is pressed and held."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"layer('a', 'a-mode').manipulators([\n  map(1).to(2), // Only when key 'a' is pressed and held\n])\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Generated JSON in profiles.complex_modifications.rules"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "description": "Layer - a-mode",\n  "manipulators": [\n    {\n      "type": "basic",\n      // highlight-start\n      "from": { "key_code": "a" },\n      "to": [ {"set_variable": {"name": "a-mode", "value": 1}} ],\n      "to_after_key_up": [ {"set_variable": {"name": "a-mode", "value": 0}} ],\n      "to_if_alone": [ {"key_code": "a"} ]\n      // highlight-end\n    },\n    {\n      "type": "basic",\n      "from": {"key_code": "1"},\n      "to": [{"key_code": "2"}],\n      // highlight-next-line\n      "conditions": [ { "type": "variable_if", "name": "a-mode", "value": 1 } ]\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"how-layer-works",children:"How layer works"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"layer()"})," add a ",(0,i.jsx)(n.code,{children:"variable_if"})," ",(0,i.jsx)(n.code,{children:"condition"})," to all ",(0,i.jsx)(n.code,{children:"manipulators"})," in the group"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{ "type": "variable_if", "name": "a-mode", "value": 1 }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And set the variable to ",(0,i.jsx)(n.code,{children:"1"})," when the layer key is pressed"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"from": { "key_code": "a" },\n"to": [ { "set_variable": {"name": "a-mode", "value": 1} } ],\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The variable is set back to ",(0,i.jsx)(n.code,{children:"0"})," on ",(0,i.jsx)(n.code,{children:"to_after_key_up"}),", so once the layer key is\nreleased the layer ",(0,i.jsx)(n.code,{children:"manipulators"})," are disabled."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'"to_after_key_up": [ {"set_variable": {"name": "a-mode", "value": 0}} ]\n'})}),"\n",(0,i.jsx)(n.p,{children:"The layer key is still functional if it is tapped alone"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"to_if_alone": [ {"key_code": "a"} ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"layer-modifiers",children:"Layer modifiers"}),"\n",(0,i.jsx)(n.p,{children:"Layers can have modifiers, so that the layer is only active when the key and the\nmodifiers are all pressed and held."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"layer('a', 'a-mode')\n  // highlight-next-line\n  .modifiers('\u2318')\n  .manipulators([\n    map(1).to(2),\n  ])\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Generated JSON in profiles.complex_modifications.rules"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "description": "Layer - a-mode",\n  "manipulators": [\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "a", \n        // highlight-next-line\n        "modifiers": {"mandatory": ["command"]}\n      },\n      "to": [\n        {"set_variable": {"name": "a-mode", "value": 1}}\n      ],\n      "to_after_key_up": [\n        {"set_variable": {"name": "a-mode", "value": 0}}\n      ],\n      "to_if_alone": [\n        {"key_code": "a"}\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "1",\n        // highlight-next-line\n        "modifiers": {"mandatory": ["any"]}\n      },\n      "to": [\n        {"key_code": "2"}\n      ],\n      "conditions": [\n        {"type": "variable_if", "name": "a-mode", "value": 1}\n      ]\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"from.modifiers"})," is set to ",(0,i.jsx)(n.code,{children:'{"mandatory": ["any"]}'})," for all manipulators on the\nlayer, so that the layer modifiers are not sent to manipulators to events. So\nthe manipulators on the layer cannot have other modifiers."]}),"\n",(0,i.jsx)(n.admonition,{title:"modifiers('??')",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"layer().modifiers('optionalAny')"})," (or ",(0,i.jsx)(n.code,{children:"'??'"}),") passes modifiers to the layer. ",(0,i.jsx)("br",{}),"\nwith ",(0,i.jsx)(n.code,{children:"layer(';').modifiers('??').manipulators({ l: toKey('\u2192') })"})," ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.code,{children:"\u2318 ; + l"})," triggers ",(0,i.jsx)(n.code,{children:"\u2318 \u2192"})]})}),"\n",(0,i.jsx)(n.h2,{id:"config-the-layer-key",children:"Config the layer key"}),"\n",(0,i.jsxs)(n.p,{children:["The layer key can also be mapped to something else by ",(0,i.jsx)(n.code,{children:"layer().configKey()"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"layer('a', 'a-mode')\n    // highlight-next-line\n    .configKey((v) => v.toIfAlone('b', '\u2318'), true)\n    .manipulators([\n      map(1).to(2),\n    ])\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Generated JSON in profiles.complex_modifications.rules"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "description": "Layer - a-mode",\n  "manipulators": [\n    {\n      "type": "basic",\n      "from": { "key_code": "a" },\n      "to": [ { "set_variable": {"name": "a-mode", "value": 1} } ],\n      "to_after_key_up": [ { "set_variable": {"name": "a-mode", "value": 0} } ],\n      // highlight-next-line\n      "to_if_alone": [ { "key_code": "b", "modifiers": ["command"] } ]\n    },\n    {\n      "type": "basic",\n      "from": {"key_code": "1"},\n      "to": [ {"key_code": "2"} ],\n      "conditions": [ { "type": "variable_if", "name": "a-mode", "value": 1 } ]\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The second parameter ",(0,i.jsx)(n.code,{children:"replaceToIfAlone"}),", of ",(0,i.jsx)(n.code,{children:"configKey(, true)"}),", makes sure only\nthe new ",(0,i.jsx)(n.code,{children:"toIfAlone()"})," is used. The layer key will otherwise still be triggered,\nsending ",(0,i.jsx)(n.code,{children:"[a, b\u2318]"})," instead of only ",(0,i.jsx)(n.code,{children:"b\u2318"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"multiple-layer-keys",children:"Multiple layer keys"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"layer()"})," can have multiple trigger keys"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"layer(['a', ';'], 'a-mode').manipulators([\n  map(1).to(2), // When either 'a' or ';' is pressed and held\n])\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Generated JSON in profiles.complex_modifications.rules"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "description": "Layer - a-mode",\n  "manipulators": [\n    {\n      // highlight-start\n      "type": "basic",\n      "from": { "key_code": "semicolon" },\n      "to": [ { "set_variable": { "name": "a-mode", "value": 1 } } ],\n      "to_after_key_up": [ { "set_variable": { "name": "a-mode", "value": 0 } } ],\n      "to_if_alone": [ { "key_code": "semicolon" } ]\n      // highlight-end\n    },\n    {\n      "type": "basic",\n      "from": { "key_code": "a" },\n      "to": [ { "set_variable": { "name": "a-mode", "value": 1 } } ],\n      "to_after_key_up": [ { "set_variable": { "name": "a-mode", "value": 0 } } ],\n      "to_if_alone": [ { "key_code": "a" } ]\n    },\n    {\n      "type": "basic",\n      "from": { "key_code": "1" },\n      "to": [ { "key_code": "2" } ],\n      "conditions": [ { "type": "variable_if", "name": "a-mode", "value": 1 } ]\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"The same key can also trigger multiple layers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"layer('a', 'a-mode').manipulators([\n  map(1).to(2),\n])\nlayer('a', 'b-mode').manipulators([\n  map(3).to(4),\n])\n"})}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Generated JSON in profiles.complex_modifications.rules"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "description": "Layer - a-mode",\n    "manipulators": [\n      {\n        "type": "basic",\n        "from": {"key_code": "a"},\n        "to": [\n          {"set_variable": {"name": "a-mode", "value": 1}}, \n          // highlight-next-line\n          {"set_variable": {"name": "b-mode", "value": 1}}\n        ],\n        "to_after_key_up": [\n          {"set_variable": {"name": "a-mode", "value": 0}},\n          // highlight-next-line\n          {"set_variable": {"name": "b-mode", "value": 0}}\n        ],\n        "to_if_alone": [{"key_code": "a"}]\n      },\n      {\n        "type": "basic",\n        "from": {"key_code": "1"},\n        "to": [{"key_code": "2"}],\n        "conditions": [{"type": "variable_if", "name": "a-mode", "value": 1}]\n      }\n    ]\n  },\n  {\n    "description": "Layer - b-mode",\n    "manipulators": [\n      {\n        "type": "basic",\n        "from": {"key_code": "3"},\n        "to": [{"key_code": "4"}],\n        // highlight-next-line\n        "conditions": [{"type": "variable_if", "name": "b-mode", "value": 1}]\n      }\n    ]\n]\n'})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Both variables are set by one manipulator as"}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["if there are multiple manipulators which change the same key,\nthe manipulator placed at the top is applied and other manipulators are\nignored - ",(0,i.jsx)(n.a,{href:"https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-evaluation-priority/",children:"Karabiner-Elements"})]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"problems-in-layer",children:"Problems in layer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:['There\'re two problems in old layer. When we type "w1" really fast,\nwe trigger the "1" in w layer rather than insert "w1".\nWhen we keep press w key down, the w key won\'t repeat.\nThere won\'t be a "wwwwwwwwwwwwwwwwwwww". - ',(0,i.jsx)(n.a,{href:"https://github.com/yqrashawn/GokuRakuJoudo/blob/master/tutorial.md#simlayers",children:"Goku"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var i=a(7294);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);