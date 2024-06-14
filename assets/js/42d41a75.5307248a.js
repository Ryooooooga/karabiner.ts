"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[295],{3018:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(5893),s=t(1151);const l={title:"Input symbols"},a=void 0,i={id:"examples/text-input/symbols",title:"Input symbols",description:"Input symbols (which can be used as key alias) by layer + keys. When press and",source:"@site/docs/examples/text-input/symbols.md",sourceDirName:"examples/text-input",slug:"/examples/text-input/symbols",permalink:"/examples/text-input/symbols",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Input symbols"},sidebar:"docs",previous:{title:"Input emoji",permalink:"/examples/text-input/emoji"}},r={},c=[];function d(n){const e={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Input symbols (which can be used as key alias) by layer + keys. When press and\nhold key ",(0,o.jsx)(e.code,{children:"z"})," to activate the 'symbols' layer:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"\u2190"}),", ",(0,o.jsx)(e.code,{children:"\u2192"}),", ",(0,o.jsx)(e.code,{children:"\u2191"}),", ",(0,o.jsx)(e.code,{children:"\u2193"}),", ",(0,o.jsx)(e.code,{children:"\u2423"}),", ",(0,o.jsx)(e.code,{children:"\u23ce"}),", ",(0,o.jsx)(e.code,{children:"\u232b"}),", ",(0,o.jsx)(e.code,{children:"\u2326"}),": Paste the symbol."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:","}),": Paste ",(0,o.jsx)(e.code,{children:"\u2039"}),' (for "left side" which looks nicer than ',(0,o.jsx)(e.code,{children:"<"}),")."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"."}),": Paste ",(0,o.jsx)(e.code,{children:"\u203a"}),' (for "right side" which looks nicer than ',(0,o.jsx)(e.code,{children:">"}),")."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"4"}),": Paste ",(0,o.jsx)(e.code,{children:"\u21e5"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"5"}),": Paste ",(0,o.jsx)(e.code,{children:"\u238b"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"6"}),": Paste ",(0,o.jsx)(e.code,{children:"\u2318"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"7"}),": Paste ",(0,o.jsx)(e.code,{children:"\u2325"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"8"}),": Paste ",(0,o.jsx)(e.code,{children:"\u2303"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"9"}),": Paste ",(0,o.jsx)(e.code,{children:"\u21e7"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"0"}),": Paste ",(0,o.jsx)(e.code,{children:"\u21ea"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Use any key for the layer, also consider using:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"simlayer('z', 'symbols')"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"hyperLayer('z', 'symbols')"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"duoLayer('z', 'x', 'symbols')"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Copy and edit the code below in ",(0,o.jsx)(e.a,{href:"https://stackblitz.com/github/evan-liu/karabiner.ts/tree/main/editor?embed=1&file=rules.js&hideExplorer=1&hideNavigation=1&terminalHeight=20&title=karabiner.ts%20editor",children:"the online editor"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"export const rules = () => [\n  layer('z', 'symbols').manipulators([\n    withMapper(['\u2190', '\u2192', '\u2191', '\u2193', '\u2423', '\u23ce', '\u232b', '\u2326'])((k) =>\n      map(k).toPaste(k),\n    ),\n\n    { ',': toPaste('\u2039'), '.': toPaste('\u203a') },\n\n    withMapper({ 4: '\u21e5', 5: '\u238b', 6: '\u2318', 7: '\u2325', 8: '\u2303', 9: '\u21e7', 0: '\u21ea' })(\n      (k, v) => map(k).toPaste(v),\n    ),\n  ]),\n]\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Or copy the JSON below and ",(0,o.jsx)(e.a,{href:"https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-complex-modifications/#create-your-own-rules",children:"add it to Karabiner-Elements"})," without changes:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "description": "Layer - symbols",\n  "manipulators": [\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "z"\n      },\n      "to": [\n        {\n          "set_variable": {\n            "name": "symbols",\n            "value": 1\n          }\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_unless",\n          "name": "symbols",\n          "value": 1\n        }\n      ],\n      "to_if_alone": [\n        {\n          "key_code": "z"\n        }\n      ],\n      "to_after_key_up": [\n        {\n          "set_variable": {\n            "name": "symbols",\n            "value": 0\n          }\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "left_arrow"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2190\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "right_arrow"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2192\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "up_arrow"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2191\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "down_arrow"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2193\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "spacebar"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2423\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "return_or_enter"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u23ce\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "delete_or_backspace"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u232b\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "delete_forward"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2326\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "comma"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2039\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "period"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u203a\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "0"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u21ea\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "4"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u21e5\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "5"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u238b\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "6"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2318\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "7"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2325\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "8"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2303\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    },\n    {\n      "type": "basic",\n      "from": {\n        "key_code": "9"\n      },\n      "to": [\n        {\n          "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u21e7\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'"\n        }\n      ],\n      "conditions": [\n        {\n          "type": "variable_if",\n          "name": "symbols",\n          "value": 1\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>a});var o=t(7294);const s={},l=o.createContext(s);function a(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);