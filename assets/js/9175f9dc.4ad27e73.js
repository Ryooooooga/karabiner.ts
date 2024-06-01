"use strict";(self.webpackChunkkarabiner_ts_docs=self.webpackChunkkarabiner_ts_docs||[]).push([[728],{1687:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(5893),s=n(1151);const i={},r="type: mouse_motion_to_scroll",a={id:"manipulators/mouse_motion_to_scroll",title:"type: mouse_motion_to_scroll",description:"Most manipulators have type basic. Another manipulator type in Karabiner-Elements is",source:"@site/docs/manipulators/mouse_motion_to_scroll.md",sourceDirName:"manipulators",slug:"/manipulators/mouse_motion_to_scroll",permalink:"/karabiner.ts/manipulators/mouse_motion_to_scroll",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"condition / if*()",permalink:"/karabiner.ts/manipulators/condition"},next:{title:"Utilities",permalink:"/karabiner.ts/utils"}},l={},c=[];function m(o){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...o.components},{Details:n}=e;return n||function(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"type-mouse_motion_to_scroll",children:"type: mouse_motion_to_scroll"}),"\n",(0,t.jsxs)(e.p,{children:["Most manipulators have type ",(0,t.jsx)(e.code,{children:"basic"}),". Another manipulator type in Karabiner-Elements is\n",(0,t.jsx)(e.a,{href:"https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/other-types/mouse-motion-to-scroll/",children:"mouse_motion_to_scroll"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"type MouseMotionToScrollManipulator = {\n  type: 'mouse_motion_to_scroll'\n  from?: { modifiers: FromModifiers }\n  conditions?: BasicManipulator['conditions']\n  options?: {\n    momentum_scroll_enabled?: boolean\n    speed_multiplier?: number\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["It can be created with ",(0,t.jsx)(e.code,{children:"mouseMotionToScroll()"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"mouseMotionToScroll()\n  .modifiers('\u2318')\n  .condition(ifVar('test'))\n  .options({ speed_multiplier: 2 })\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Generated JSON"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "type": "mouse_motion_to_scroll",\n  "from": {\n    "modifiers": { "mandatory": ["command"] }\n  },\n  "conditions": [\n    {"type": "variable_if", "name": "test", "value": 1}\n  ],\n  "options": { "speed_multiplier": 2 }\n}\n'})})]})]})}function p(o={}){const{wrapper:e}={...(0,s.a)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(m,{...o})}):m(o)}},1151:(o,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var t=n(7294);const s={},i=t.createContext(s);function r(o){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),t.createElement(i.Provider,{value:e},o.children)}}}]);