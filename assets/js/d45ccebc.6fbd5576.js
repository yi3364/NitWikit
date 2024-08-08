"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6938],{44891:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=i(74848),r=i(28453);const t={title:"\u670d\u52a1\u7aef\u7ed3\u6784",sidebar_position:3},l="\u670d\u52a1\u7aef\u7ed3\u6784",c={id:"start/basic/server-file-structure",title:"\u670d\u52a1\u7aef\u7ed3\u6784",description:"\u6211\u4eec\u5148\u6765\u7b80\u5355\u770b\u4e00\u773c Purpur \u7684\u6587\u4ef6\u5939\u7ed3\u6784\uff1a",source:"@site/docs-java/start/basic/server-file-structure.md",sourceDirName:"start/basic",slug:"/start/basic/server-file-structure",permalink:"/NitWikit/Java/start/basic/server-file-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/basic/server-file-structure.md",tags:[],version:"current",lastUpdatedBy:"Minimouse48",lastUpdatedAt:1723099709e3,sidebarPosition:3,frontMatter:{title:"\u670d\u52a1\u7aef\u7ed3\u6784",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f\u5361\u987f\uff1f",permalink:"/NitWikit/Java/start/basic/what-is-caton"},next:{title:"\u4ec0\u4e48\u662f\u63d2\u4ef6\uff1f",permalink:"/NitWikit/Java/start/basic/what-is-plugin"}},d={},a=[{value:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",id:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u670d\u52a1\u7aef\u7ed3\u6784",children:"\u670d\u52a1\u7aef\u7ed3\u6784"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5148\u6765\u7b80\u5355\u770b\u4e00\u773c Purpur \u7684\u6587\u4ef6\u5939\u7ed3\u6784\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"\u251c\u2500assets            // \u50a8\u5b58 Minecraft \u97f3\u6548\u8d34\u56fe\u7b49\u91cd\u8981\u6587\u4ef6\uff0c\u4e0d\u8981\u4e71\u52a8\n\u251c\u2500cache             // \u7f13\u5b58\u6587\u4ef6\u5939\uff0c\u4e00\u822c\u653e\u7f6e Minecraft \u539f\u7248\u670d\u52a1\u5668\n\u251c\u2500config            // Paper fork \u670d\u52a1\u5668\u7279\u6709\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u653e\u7f6e Paper \u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500crash-reports     // \u5b58\u653e\u670d\u52a1\u5668\u5d29\u6e83\u7684\u5b8c\u6574\u62a5\u544a\n\u251c\u2500libraries         // \u5b58\u653e\u670d\u52a1\u5668\u53ca\u90e8\u5206\u63d2\u4ef6\u7684\u4f9d\u8d56\u5e93\n\u251c\u2500logs              // \u5b58\u653e\u670d\u52a1\u7aef\u65e5\u5fd7\u7684\u6587\u4ef6\u5939\n\u251c\u2500plugins           // \u5b58\u653e\u63d2\u4ef6\u7684\u6587\u4ef6\u5939\n\u251c\u2500versions          // \u5b58\u653e\u5bf9\u5e94\u7248\u672c\u9700\u8981\u7684\u4f9d\u8d56 jar\n\u251c\u2500world             // \u4e3b\u4e16\u754c\u6587\u4ef6\u5939\n\u2502  \u251c\u2500advancements   // \u6210\u5c31\u6587\u4ef6\u5939\n\u2502  \u251c\u2500data           // \u4e16\u754c\u6570\u636e\u6587\u4ef6\u5939\n\u2502  \u251c\u2500datapacks      // \u6570\u636e\u5305\n\u2502  \u2502  \u2514\u2500bukkit\n\u2502  \u251c\u2500entities       // \u5b9e\u4f53\u6570\u636e\n\u2502  \u251c\u2500playerdata     // \u73a9\u5bb6\u6570\u636e\n\u2502  \u251c\u2500poi            // \u5174\u8da3\u70b9\u6570\u636e\n\u2502  \u251c\u2500region         // \u533a\u5757\u6570\u636e\n\u2502  \u2514\u2500stats          // \u7edf\u8ba1\u4fe1\u606f\n\u251c\u2500world_nether      // \u5730\u72f1\u4e16\u754c\u6587\u4ef6\u5939\n\u2502    \u2514\u2500DIM-1\n\u2502       \u251c\u2500data      // \u672b\u5730\n\u2502       \u251c\u2500entities\n\u2502       \u251c\u2500poi\n\u2502       \u2514\u2500region\n\u2514\u2500world_the_end     // \u672b\u5730\u4e16\u754c\u6587\u4ef6\u5939\n    \u2514\u2500DIM1\n        \u251c\u2500data\n        \u251c\u2500entities\n        \u251c\u2500poi\n        \u2514\u2500region\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u7c7b\u4f3c Catserver \u7684\u6df7\u5408\u670d\u52a1\u5668\uff0c\u6587\u4ef6\u5939\u7ed3\u6784\u662f\u7c7b\u4f3c\u7684\uff0c\u57fa\u672c\u5c31\u591a\u4e86 mods \u6587\u4ef6\u5939\uff0c\u5c11\u4e86 Bukkit \u7684\u4e0b\u6e38\u670d\u52a1\u5668\u7279\u6709\u7684\u914d\u7f6e\uff08\u5982 ",(0,s.jsx)(e.code,{children:"purpur.yml"})," \u7b49\uff09\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u4e16\u754c\u6587\u4ef6\u5939\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u524d\u5f80 ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.a,{href:"/NitWikit/Java/start/basic/what-is-world",children:"\u4e16\u754c\u6587\u4ef6\u67b6\u6784"})})]})}),"\n",(0,s.jsx)(e.h2,{id:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6",children:"\u6839\u76ee\u5f55\u4e0b\u7684\u4e00\u4e9b\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:".console_history"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5b58\u653e\u4e86\u63a7\u5236\u53f0\uff08\u53c8\u53eb\u540e\u53f0\uff09\u66fe\u7ecf\u4f7f\u7528\u8fc7\u7684\u6307\u4ee4\uff0c\u65b9\u4fbf\u4f60\u4f7f\u7528\u952e\u76d8\u4e2d\u7684 \u2191 \u952e\u5feb\u6377\u67e5\u627e\u66fe\u4f7f\u7528\u7684\u6307\u4ee4\uff0c\u4e5f\u53ef\u7528\u4e8e\u67e5\u770b\u540e\u53f0\u5f02\u5e38\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"banned-ips.json"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5 json \u683c\u5f0f\u5b58\u653e\u7684\u88ab ban IP \u73a9\u5bb6\u7684 UUID \u53ca\u6e38\u620f\u540d\u79f0\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u4e00\u65e6\u73a9\u5bb6\u88ab banip \uff0c\u6b64 IP \u5c06\u65e0\u6cd5\u518d\u8fdb\u5165\u670d\u52a1\u5668\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"banned-players.json"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5 json \u683c\u5f0f\u5b58\u653e\u4e86\u88ab ban \u73a9\u5bb6\u7684 UUID \u53ca\u6e38\u620f\u540d\u79f0\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u79bb\u7ebf\u670d ban \u73a9\u5bb6\u540e\u6362 ID \u5373\u53ef\u8fdb\u5165\u670d\u52a1\u5668\uff0c\u800c\u6b63\u7248\u670d\u65e0\u6cd5\u901a\u8fc7\u6539\u540d\u91cd\u65b0\u8fdb\u5165\u670d\u52a1\u5668\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"bukkit.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7531 Bukkit \u6d3e\u751f\u5f97\u5230\u7684\u670d\u52a1\u7aef\u90fd\u6709\u7684\u6587\u4ef6\u3002\u4fdd\u5b58\u7740 Bukkit \u6240\u63d0\u4f9b\u7684\u6700\u57fa\u672c\u7684\u8bbe\u7f6e\u9009\u9879\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"commands.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u5feb\u901f\u800c\u7b80\u5355\u7684\u65b9\u6cd5\u6765\u5f3a\u5236\u670d\u52a1\u5668\u4f7f\u7528 Mojang \u63d0\u4f9b\u7684\u547d\u4ee4\uff08\u800c\u4e0d\u662f Bukkit \u4e2d\u5185\u7f6e\u7684\u547d\u4ee4\uff09\u800c\u4e0d\u4ea7\u751f\u51b2\u7a81\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"eula.txt"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u9996\u6b21\u5f00\u670d\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u540c\u610f EULA \u534f\u8bae\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"help.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e9b\u63d2\u4ef6\u7684\u5e2e\u52a9\u4fe1\u606f\u4f1a\u51fa\u73b0\u5728\u8fd9\u91cc\u9762\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8fdb\u884c\u4ec0\u4e48\u4fee\u6539\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"ops.json"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5 json \u683c\u5f0f\u5b58\u653e\u4e86 OP \u73a9\u5bb6\u7684 UUID \u53ca\u6e38\u620f\u540d\u79f0\u7b49\u76f8\u5173\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"purpur.jar"})}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u6539\u540d\u53eb\u4efb\u4f55\u540d\u5b57\uff08\u53ea\u8981\u4ee5 ",(0,s.jsx)(e.code,{children:".jar"})," \u7ed3\u5c3e\uff0c\u4e14\u5728\u542f\u52a8\u811a\u672c\u4e2d\u5bf9\u5e94\u4fee\u6539\uff09"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"purpur.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Purpur \u670d\u52a1\u5668\u7279\u6709\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6781\u5176\u8be6\u7ec6\u7684\u914d\u7f6e\u9879\uff0c\u529f\u80fd\u975e\u5e38\u4e30\u5bcc\uff0c\u51e0\u4e4e\u53ef\u4ee5\u66ff\u4ee3\u6570\u6b3e\u63d2\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"permissions.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u662f\u9ed8\u8ba4\u7684\u6743\u9650\u5b9a\u4e49 YAML \u6587\u4ef6\uff0c\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u751f\u6210\u3002\u5b83\u7684\u4e3b\u8981\u529f\u80fd\u662f\u5c06\u6743\u9650\u8282\u70b9\u7ec4\u5408\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4ee5\u4fbf\u6743\u9650\u63d2\u4ef6\uff08\u4ee5\u53ca\u4f7f\u7528\u6743\u9650\u7684\u63d2\u4ef6\uff09\u53ef\u4ee5\u5728\u6574\u4e2a\u7cfb\u7edf\u4e2d\u4f7f\u7528\u5b83\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://minecraft-zh.gamepedia.com/Server.properties",children:(0,s.jsx)(e.code,{children:"server.properties"})})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u670d\u52a1\u7aef\u7684\u4e00\u4e9b\u57fa\u672c\u8bbe\u7f6e\u5c31\u5728\u91cc\u9762\uff0c\u5982\u8bbe\u7f6e\u7aef\u53e3\uff0c\u8bbe\u7f6e\u6e38\u620f\u96be\u5ea6\uff0c\u8bbe\u7f6e\u6e38\u620f\u6a21\u5f0f\uff08\u751f\u5b58\u3001\u521b\u9020\u7b49\uff09\u7b49\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"spigot.yml"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Spigot \u670d\u52a1\u5668\u90fd\u6709\u7684\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"usercache.json"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u50a8\u5b58\u7740\u7528\u540d\u5b57\u53ca UUID \u4fe1\u606f\u7684\u7f13\u5b58\u6587\u4ef6\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"version_history"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e9b Minecraft \u548c\u670d\u52a1\u7aef\u6838\u5fc3\u7684\u7248\u672c\u4fe1\u606f\uff0c\u4e00\u822c\u8bb0\u5f55\u7740\u66fe\u7ecf\u4f7f\u7528\u8fc7\u7684\u7248\u672c\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"whitelist.json"})}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u767d\u540d\u5355\u5217\u8868\u3002\uff08\u5982\u679c\u60a8\u5728",(0,s.jsx)(e.a,{href:"https://minecraft-zh.gamepedia.com/Server.properties",children:(0,s.jsx)(e.code,{children:"server.properties"})}),"\u4e2d\u5f00\u542f\u4e86\u767d\u540d\u5355\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u8be5\u6587\u4ef6\u4e2d\u6dfb\u52a0\u548c\u7ba1\u7406\u8c01\u88ab\u5141\u8bb8\u6216\u4e0d\u88ab\u5141\u8bb8\u8fdb\u5165\u670d\u52a1\u5668\u3002\uff09"]}),"\n",(0,s.jsx)(e.p,{children:"\u81f3\u6b64\uff0c\u5927\u90e8\u5206\u7684\u4ee5 Bukkit \u4e3a\u57fa\u7840\u7684\u670d\u52a1\u5668\u6838\u5fc3\u670d\u52a1\u7aef\u7684\u7ed3\u6784\u5df2\u7ecf\u5927\u81f4\u5448\u73b0\u5728\u60a8\u773c\u524d\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u670d\u52a1\u7aef\u6709\u66f4\u591a\u7684\u6587\u4ef6\uff0c\u5927\u6982\u7387\u662f\u63d2\u4ef6\uff08\u5982 Slimefun\u3001FAWE \u7b49\u63d2\u4ef6\u4f1a\u91ca\u653e\u66f4\u591a\u6587\u4ef6\u5939\uff09\u521b\u5efa\u7684\u6587\u4ef6\u5939\uff0c\u4e00\u822c\u6765\u8bf4\u65e0\u9700\u62c5\u5fc3\u3002"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function l(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);