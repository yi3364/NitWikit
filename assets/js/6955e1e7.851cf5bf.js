"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4232],{14820:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var n=i(74848),d=i(28453);const t={title:"\u6570\u636e\u5e93\u76f8\u5173",sidebar_position:5},c="\u6570\u636e\u5e93\u76f8\u5173",r={id:"sundry/database",title:"\u6570\u636e\u5e93\u76f8\u5173",description:"\u6570\u636e\u5e93\u597d\u5904\u90fd\u6709\u5565? \u8c01\u8bf4\u5bf9\u4e86\u5c31\u7ed9\u4ed6!",source:"@site/docs/sundry/database.md",sourceDirName:"sundry",slug:"/sundry/database",permalink:"/NitWikit/sundry/database",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/sundry/database.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1719299257e3,sidebarPosition:5,frontMatter:{title:"\u6570\u636e\u5e93\u76f8\u5173",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55",permalink:"/NitWikit/sundry/YAML/extention"},next:{title:"\u673a\u5668\u4eba\u547d\u4ee4",permalink:"/NitWikit/sundry/Robot-command"}},h={},a=[{value:"\u5c0f\u76ae\u6570\u636e\u5e93",id:"\u5c0f\u76ae\u6570\u636e\u5e93",level:2},{value:"\u5b9d\u5854\u9762\u677f",id:"\u5b9d\u5854\u9762\u677f",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"Redis",id:"redis",level:2}];function l(s){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...s.components},{Details:t}=e;return t||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u6570\u636e\u5e93\u76f8\u5173",children:"\u6570\u636e\u5e93\u76f8\u5173"}),"\n",(0,n.jsxs)(e.admonition,{type:"info",children:[(0,n.jsx)(e.p,{children:"\u6570\u636e\u5e93\u597d\u5904\u90fd\u6709\u5565? \u8c01\u8bf4\u5bf9\u4e86\u5c31\u7ed9\u4ed6!"}),(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u6570\u636e\u5e93\u7684\u5907\u4efd\u7ef4\u62a4\u7b49\u6240\u5360\u7528\u7684\u65f6\u95f4\u8fdc\u6bd4\u5c06\u6574\u4e2a\u670d\u52a1\u5668\u505c\u6b62\u540e\u6253\u5305\u538b\u7f29\u5907\u4efd\u5feb\u5f97\u591a;"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u540c\u6837\u7684\u6570\u636e\u91cf\uff0c MySQL\u6bd4yml/txt/sqlite\u7b49\u5360\u7528\u4e5f\u5c0f\u5f97\u591a.\u7279\u522b\u662f\u5bf9\u4e8e\u6570\u636e\u91cf\u5927\u7684\u63d2\u4ef6(30Gb\u7684dynmap\u6587\u4ef6\u4f7f\u7528MySQL\u540e\u6574\u4e2a\u6570\u636e\u5e93\u5c06\u538b\u7f29\u523015Gb);"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u8bfb\u53d6\u901f\u5ea6\u5feb\uff0c \u67d0\u4e9b\u63d2\u4ef6\u4f7f\u7528yml\u50a8\u5b58\u6570\u636e\u65f6\u542f\u52a8\u4e00\u4e2a\u63d2\u4ef6\u751a\u81f3\u9700\u898110s+\uff0c \u6362\u7528mysql\u540e\u670d\u52a1\u5668\u542f\u52a8\u901f\u5ea6\u5feb;"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Redis/MySQL \u7b49\u6570\u636e\u5e93\u914d\u5408\u53ef\u8f7b\u677e\u5b8c\u6210\u73a9\u5bb6\u6570\u636e\u540c\u6b65\u7b49;"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u5728\u6570\u636e\u91cf\u8f83\u5927\u65f6\u5019\u76f8\u8f83sqlite\u6709\u66f4\u597d\u7684\u6027\u80fd\uff0c \u67e5\u8be2\u65f6\u9700\u8981\u7684\u65f6\u95f4\u77ed\uff0c \u7279\u522b\u662f\u67d0\u4e9b\u7ecf\u6d4e\u63d2\u4ef6\u4ed8\u6b3e\u65f6\u907f\u514d\u987f\u5361."}),"\n"]}),"\n"]})]}),"\n",(0,n.jsx)(e.h1,{id:"mysql--mariadb",children:"MySQL / MariaDB"}),"\n",(0,n.jsx)(e.p,{children:"MariaDB\u662f\u8457\u540d\u7684MySQL\u5206\u53c9\uff0c\u53ea\u662f\u670d\u52a1\u5668\u8150\u7af9\u7684\u8bdd\uff0c\u4f60\u53ea\u9700\u8981\u77e5\u9053\u8fd9\u4e24\u4e2a\u4e1c\u897f\u5dee\u4e0d\u591a\u5c31\u597d\u4e86"}),"\n",(0,n.jsxs)(e.admonition,{type:"info",children:[(0,n.jsx)(e.p,{children:"\u5f53 MariaDB Server \u7684\u524d\u8eab MySQL \u4e8e 2009 \u5e74\u88ab Oracle \u6536\u8d2d\u65f6\uff0cMySQL \u521b\u59cb\u4eba Michael \u201cMonty\u201d Widenius \u51fa\u4e8e\u5bf9 Oracle \u7ba1\u7406\u6743\u7684\u62c5\u5fe7\u800c\u5206\u53c9\u4e86\u8be5\u9879\u76ee\uff0c\u5e76\u5c06\u65b0\u9879\u76ee\u547d\u540d\u4e3a MariaDB\u3002"}),(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["\u6765\u81ea ",(0,n.jsx)(e.a,{href:"https://mariadb.org/zh/",children:"https://mariadb.org/zh/"})]}),"\n"]})]}),"\n",(0,n.jsx)(e.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsxs)(e.p,{children:["\u6211\u4f1a\u544a\u8bc9\u4f60 ",(0,n.jsx)(e.strong,{children:"\u6211\u8ba4\u4e3a"})," \u6700\u7b80\u5355\u7684\u51e0\u79cd\u5b89\u88c5\u6570\u636e\u5e93\u7684\u65b9\u6cd5"]}),"\n",(0,n.jsx)(e.h2,{id:"\u5c0f\u76ae\u6570\u636e\u5e93",children:"\u5c0f\u76ae\u6570\u636e\u5e93"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(40978).A+"",width:"816",height:"467"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(89161).A+"",width:"940",height:"635"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(64960).A+"",width:"1524",height:"804"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(92991).A+"",width:"632",height:"395"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(39190).A+"",width:"787",height:"363"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(70957).A+"",width:"560",height:"400"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u5378\u8f7dMySQL5\u548c\u5b89\u88c5MySQL8"}),(0,n.jsx)(e.p,{children:"MySQL5 \u7248\u672c\u592a\u4f4e\u4e86\uff0c\u5f88\u591a\u63d2\u4ef6\u9700\u8981\u66f4\u9ad8\u7248\u672c\u7684\uff0c\u88c5MySQL8\u5c31\u591f\u7528\u4e86"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(7716).A+"",width:"800",height:"630"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(7907).A+"",width:"800",height:"630"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,n.jsx)(e.p,{children:"\u5b89\u88c5\u597d\u540e\u5728\u9996\u9875\u542f\u52a8 MySQL"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(1722).A+"",width:"800",height:"630"})}),(0,n.jsx)(e.p,{children:"\u66f4\u6539root\u8d26\u6237\u7684\u5bc6\u7801"}),(0,n.jsxs)(e.admonition,{type:"danger",children:[(0,n.jsx)(e.p,{children:"\u4e0d\u8981\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"}),(0,n.jsxs)(e.p,{children:["\u5c24\u5176\u662f\u4f60\u6253\u7b97\u628a\u6570\u636e\u5e93\u5f00\u5230\u516c\u7f51\uff0c",(0,n.jsx)(e.strong,{children:"\u7edd\u5bf9\u4e0d\u8981"}),"\u8bbe\u7f6e\u8fc7\u4e8e\u7b80\u5355\u7684\u5bc6\u7801\uff01"]}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"\u8fd9\u771f\u7684\u5f88\u4e25\u91cd"})})]}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(95400).A+"",width:"800",height:"630"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(35345).A+"",width:"800",height:"630"})}),(0,n.jsx)(e.p,{children:"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5efa\u6570\u636e\u5e93\u4e86\uff0c\u5efa\u597d\u4e4b\u540e\u628a\u4f60\u586b\u8fd9\u91cc\u7684\u4fe1\u606f\u586b\u5230\u63d2\u4ef6\u7684\u914d\u7f6e\u6587\u4ef6\u91cc"})]}),"\n",(0,n.jsx)(e.h2,{id:"\u5b9d\u5854\u9762\u677f",children:"\u5b9d\u5854\u9762\u677f"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u548c\u5b89\u88c5"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(10682).A+"",width:"840",height:"470"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(32259).A+"",width:"1687",height:"1011"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(2092).A+"",width:"1614",height:"824"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(84981).A+"",width:"877",height:"293"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(82878).A+"",width:"570",height:"410"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(70567).A+"",width:"681",height:"571"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(26944).A+"",width:"611",height:"591"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(98121).A+"",width:"942",height:"978"})}),(0,n.jsx)(e.p,{children:"\u5b9d\u5854\u9762\u677f\u662f\u5fc5\u987b\u8981\u7ed1\u5b9a\u8d26\u53f7\u7684"}),(0,n.jsx)(e.p,{children:"\u6309\u7167\u63d0\u793a\u53bb\u505a"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(9069).A+"",width:"921",height:"641"})}),(0,n.jsx)(e.p,{children:"\u5168 x \u6389\uff0c\u4e00\u4e2a\u90fd\u4e0d\u9700\u8981\u88c5"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(45828).A+"",width:"1462",height:"704"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u5b89\u88c5MySQL"}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(31103).A+"",width:"1904",height:"712"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(77302).A+"",width:"528",height:"366"})}),(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(27273).A+"",width:"576",height:"352"})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\u914d\u7f6e\u6570\u636e\u5e93"}),(0,n.jsx)(e.p,{children:"TODO"})]}),"\n",(0,n.jsx)(e.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u8bf7\u4e00\u5b9a\u8bb0\u5f97\u5173\u95ed\u8fdc\u7a0b\u6570\u636e\u5e93\u8bbf\u95ee;"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u4e00\u5b9a\u8981\u5f00\u542f\u8fdc\u7a0b\u6570\u636e\u5e93\u8bf7\u8bbe\u7f6e\u590d\u6742\u5bc6\u7801;"}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u5fc5\u987b\u8981\u5148\u521b\u5efa\u6570\u636e\u5e93\u63d2\u4ef6\u624d\u6709\u6743\u9650\u521b\u5efa\u8868(\u8fd9\u4e0d\u5e9f\u8bdd\u5417\u4e0d\u7136\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\u91cc\u586b\u4ec0\u4e48);"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.admonition,{type:"info",children:[(0,n.jsx)(e.p,{children:"\u8bed\u53e5\u793a\u4f8b:"}),(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-sql",children:"CREATE DATABASE <\u6570\u636e\u5e93\u540d\u79f0> CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;\n"})}),(0,n.jsxs)(e.p,{children:["\u89e3\u91ca: ",(0,n.jsx)(e.code,{children:"CHARACTER SET utf8mb4"})," \u5c06\u6570\u636e\u5e93\u5b57\u7b26\u96c6\u8bbe\u7f6e\u4e3a utf8mb4\uff0c \u80fd\u591f\u5b58\u50a8\u5305\u62ec\u8868\u60c5\u7b26\u53f7\u5728\u5185\u7684\u6240\u6709 Unicode \u5b57\u7b26\u3002 ",(0,n.jsx)(e.code,{children:"utf8mb4_general_ci"})," \u662f\u4e00\u79cd\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff08case-insensitive\uff09\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u5982\u679c\u4f60\u60f3\u533a\u5206\u5927\u5c0f\u5199\uff0c\u53ef\u4ee5\u6539\u4e3a ",(0,n.jsx)(e.code,{children:"utf8mb4_bin"}),"\uff0c",(0,n.jsx)(e.code,{children:"_bin"})," \u610f\u4e3a\u4ee5\u4e8c\u8fdb\u5236\u65b9\u5f0f\u6bd4\u8f83\u5b57\u7b26\u3002"]})]}),"\n",(0,n.jsxs)(e.ol,{start:"4",children:["\n",(0,n.jsx)(e.li,{children:"\u6570\u636e\u5e93\u53c2\u6570\u8bb0\u5f97\u8c03\u6574(TODO)"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"redis",children:"Redis"}),"\n",(0,n.jsx)(e.p,{children:"TODO"})]})}function p(s={}){const{wrapper:e}={...(0,d.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(l,{...s})}):l(s)}},40978:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/1-b10918e2b657a13c2797ef0745290e3e.png"},95400:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/10-17df0c425165d8659e9ea883857858ca.png"},35345:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/11-463f187972b0a5ee3a7b8b0b94e0f492.png"},10682:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/12-5146760b6cac245ec6371d636e57c0df.png"},32259:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/13-2f3db9e58a5d8406b8e462cf75d58b82.png"},2092:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/14-ae189bb3f1b20890250e537efd3e5a8d.png"},84981:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/15-fbd0ec4b5c5c4ba6efacc66725a7c684.png"},82878:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/16-d1ca2334feebaaeb010ddac4a459bf79.png"},70567:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/17-400bf8fd80df4009ab91235160f5c6f6.png"},26944:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/18-fcf29f01840856988636322a077e49bf.png"},98121:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/19-9dcdf263619e41a9e1d1b44bb9cdcbae.png"},89161:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/2-b98b96ae0228f80bfe2e0f4fe0b4a2a8.png"},9069:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/20-84283116b360b86728c489c3345e9175.png"},45828:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/21-dba5369b3f2fc72fc6e64a8a18faa689.png"},31103:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/22-fad6843bd88cd16e932ba7619846a87f.png"},77302:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/23-8374b7742c58c540b7afa0273fa58007.png"},27273:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/24-50540bdd461cd7eb6d80691d48d88af8.png"},64960:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/3-9d3664bad33be61791e41971d4c485e4.png"},92991:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/4-39a541cc709eecadfeff71db8d670b32.png"},39190:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/5-64cd617428e7a1eea06fa93e33afe799.png"},70957:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/6-9345a05b6def2999956fd5f5565662cc.png"},7716:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/7-b48f63493fc19f8ef9edb6b1d62522cf.png"},7907:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/8-d9c594cff389f4310beb77750049dcc1.png"},1722:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/9-e43f10f45a5ffda6ff45f809d45e8796.png"},28453:(s,e,i)=>{i.d(e,{R:()=>c,x:()=>r});var n=i(96540);const d={},t=n.createContext(d);function c(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(d):s.components||d:c(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);