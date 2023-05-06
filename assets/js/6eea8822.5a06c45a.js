"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return t?o.createElement(k,l(l({ref:n},m),{},{components:t})):o.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={title:"to"},l="ToEvent",i={unversionedId:"manipulators/to",id:"manipulators/to",title:"to",description:"ToEvent type models Karabiner to event definition.",source:"@site/docs/manipulators/to.md",sourceDirName:"manipulators",slug:"/manipulators/to",permalink:"/karabiner.ts/manipulators/to",draft:!1,tags:[],version:"current",frontMatter:{title:"to"},sidebar:"docs",previous:{title:"from / mapDoubleTap()",permalink:"/karabiner.ts/manipulators/double-tap"},next:{title:"type: mouse_motion_to_scroll",permalink:"/karabiner.ts/manipulators/mouse_motion_to_scroll"}},p={},s=[{value:"Create ToEvent",id:"create-toevent",level:2},{value:"toKey()",id:"tokey",level:3},{value:"to$()",id:"to",level:3},{value:"to*()",id:"to-1",level:3},{value:"map().to*()",id:"mapto",level:3},{value:"Use ToEvent",id:"use-toevent",level:2}],m={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toevent"},"ToEvent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent")," type models Karabiner ",(0,r.kt)("a",{parentName:"p",href:"https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/"},"to event definition"),". "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ToEvent type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type ToEvent = (\n  | { key_code: string | number }\n  | { consumer_key_code: string | number }\n  | { pointing_button: string | number }\n  | { shell_command: string }\n  | {\n      select_input_source: {\n        language?: string\n        input_source_id?: string\n        input_mode_id?: string\n      }\n    }\n  | {\n      set_variable: {\n        name: string\n        value: number | boolean | string\n      }\n    }\n  | { set_notification_message: { id: string; text: string } }\n  | {\n      mouse_key: {\n        x?: number\n        y?: number\n        vertical_wheel?: number\n        horizontal_wheel?: number\n        speed_multiplier?: number\n      }\n    }\n  | {\n      sticky_modifier: Partial<\n        Record<\n          | 'left_control'\n          | 'left_shift'\n          | 'left_option'\n          | 'left_command'\n          | 'right_control'\n          | 'right_shift'\n          | 'right_option'\n          | 'right_command'\n          | 'fn',\n          'on' | 'off' | 'toggle'\n        >\n      >\n    }\n  | {\n      software_function:\n        | { cg_event_double_click: { button: number } }\n        | {\n            set_mouse_cursor_position: {\n              x: number | `${number}%`\n              y: number | `${number}%`\n              screen?: number\n            }\n          }\n        | {\n            iokit_power_management_sleep_system: { delay_milliseconds?: number }\n          }\n    }\n) & {\n  modifiers?: Array<\n    | 'left_control'\n    | 'left_shift'\n    | 'left_option'\n    | 'left_command'\n    | 'right_control'\n    | 'right_shift'\n    | 'right_option'\n    | 'right_command'\n    | 'fn'\n    | 'caps_lock'\n    | 'command'\n    | 'control'\n    | 'option'\n    | 'shift'\n  >\n  lazy?: boolean\n  repeat?: boolean\n  halt?: boolean\n  hold_down_milliseconds?: number\n}\n"))),(0,r.kt)("h2",{id:"create-toevent"},"Create ToEvent"),(0,r.kt)("p",null,"There are a few ways to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent"),":"),(0,r.kt)("h3",{id:"tokey"},"toKey()"),(0,r.kt)("p",null,"The most common ",(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"key_code")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"toKey()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"toKey('a', '\u2318\u21e7')\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generated JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key_code": "a",\n  "modifiers": ["command", "shift"]\n}\n'))),(0,r.kt)("p",null,"And there are a few methods to create common used cases: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"toHyper() // \u2318\u2325\u2303\u21e7\ntoMeh() // \u2325\u2303\u21e7\ntoSuperHyper() // \u2318\u2325\u2303\u21e7fn\ntoNone() // vk_none\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generated JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// toHyper() \u2318\u2325\u2303\u21e7\n{\n  "key_code": "left_command", \n  "modifiers": ["option", "control", "shift"]\n}\n// toMeh() \u2325\u2303\u21e7\n{\n  "key_code": "left_option", \n  "modifiers": ["control", "shift"]\n}\n// toSuperHyper() \u2318\u2325\u2303\u21e7fn\n{\n  "key_code": "fn", \n  "modifiers": ["command", "option", "control", "shift"]\n}\n// toNone() vk_none\n{ "key_code": "vk_none" }\n'))),(0,r.kt)("h3",{id:"to"},"to$()"),(0,r.kt)("p",null,"Another common used ",(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"shell_command")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"to$()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'to$(\'rm ~/temp\') // {"shell_command": "rm ~/temp"}\n')),(0,r.kt)("p",null,"There are a few methods to create common used commands: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"toApp() // open -a {}.app\ntoPaste() // Paste text via clipboard \n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generated JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// toApp(\'Finder\')\n{ "shell_command": "open -a \\"Finder\\".app" }\n// toPaste(\'\u2728\')\n{ "shell_command": "osascript -e \'\\nset prev to the clipboard\\nset the clipboard to \\"\u2728\\"\\ntell application \\"System Events\\"\\n  keystroke \\"v\\" using command down\\n  delay 0.1\\nend tell\\nset the clipboard to prev\'" }\n'))),(0,r.kt)("h3",{id:"to-1"},"to*()"),(0,r.kt)("p",null,"The other ",(0,r.kt)("inlineCode",{parentName:"p"},"to*()")," methods to create ",(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"toInputSource()\ntoSetVar()\ntoNotificationMessage()\ntoRemoveNotificationMessage()\ntoMouseKey()\ntoStickyModifier()\ntoCgEventDoubleClick()\ntoMouseCursorPosition()\ntoSleepSystem()\n")),(0,r.kt)("h3",{id:"mapto"},"map().to*()"),(0,r.kt)("p",null,"To write shorter code, all ",(0,r.kt)("inlineCode",{parentName:"p"},"map*()")," methods can chain with ",(0,r.kt)("inlineCode",{parentName:"p"},"to*()")," methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"map(1).to('a').toApp('Arc').toConsumerKey('play_or_pause')\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Generated JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "basic",\n  "from": { "key_code": "1" },\n  "to": [\n    { "key_code": "a" },\n    { "shell_command": "open -a \\"Arc\\".app" },\n    { "consumer_key_code": "play_or_pause" }\n  ]\n}\n'))),(0,r.kt)("h2",{id:"use-toevent"},"Use ToEvent"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ToEvent")," is mostly used with ",(0,r.kt)("inlineCode",{parentName:"p"},"map().to()"),". It can also be used in other places:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"map().toIfAlone(/* to*() */)\nmap().toIfHeldDown(/* to*() */)\nmap().toAfterKeyUp(/* to*() */)\nmap().toDelayedAction(/* to*(),  to*() */)\nmapDoubleTap().singleTap(/* to*() */)\nmapSimultaneous([], { to_after_key_up: [/* to*() */] })\n")))}u.isMDXComponent=!0}}]);