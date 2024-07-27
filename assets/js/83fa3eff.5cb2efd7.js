"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8255],{72527:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(74848),t=n(28453);const r={title:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",sidebar_position:4},d="\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",c={id:"process/maintenance/optimize/storage-space-optimization",title:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",description:"\u63d2\u4ef6\u6570\u636e\u4f18\u5316",source:"@site/docs-java/process/maintenance/optimize/storage-space-optimization.md",sourceDirName:"process/maintenance/optimize",slug:"/process/maintenance/optimize/storage-space-optimization",permalink:"/NitWikit/Java/process/maintenance/optimize/storage-space-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/storage-space-optimization.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:172210066e4,sidebarPosition:4,frontMatter:{title:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/NitWikit/Java/process/maintenance/optimize/go"},next:{title:"\u6027\u80fd\u5206\u6790",permalink:"/NitWikit/Java/process/maintenance/optimize/performance-analysis"}},l={},a=[{value:"\u63d2\u4ef6\u6570\u636e\u4f18\u5316",id:"\u63d2\u4ef6\u6570\u636e\u4f18\u5316",level:2},{value:"\u4f7f\u7528\u6570\u636e\u5e93",id:"\u4f7f\u7528\u6570\u636e\u5e93",level:3},{value:"\u5907\u4efd\u7a7a\u95f4\u4f18\u5316",id:"\u5907\u4efd\u7a7a\u95f4\u4f18\u5316",level:2},{value:"\u4f7f\u7528\u5907\u4efd\u63d2\u4ef6\u66ff\u4ee3\u6574\u7aef\u5907\u4efd",id:"\u4f7f\u7528\u5907\u4efd\u63d2\u4ef6\u66ff\u4ee3\u6574\u7aef\u5907\u4efd",level:3},{value:"\u5b58\u6863\u5b58\u50a8\u7a7a\u95f4\u4f18\u5316",id:"\u5b58\u6863\u5b58\u50a8\u7a7a\u95f4\u4f18\u5316",level:2},{value:"\u5220\u9664\u8fc7\u65f6\u533a\u5757",id:"\u5220\u9664\u8fc7\u65f6\u533a\u5757",level:3},{value:"\u66f4\u9ad8\u6548\u7684\u50a8\u5b58\u65b9\u5f0f",id:"\u66f4\u9ad8\u6548\u7684\u50a8\u5b58\u65b9\u5f0f",level:3},{value:"\u8f6c\u6362\u533a\u57df\u683c\u5f0f",id:"\u8f6c\u6362\u533a\u57df\u683c\u5f0f",level:4},{value:"\u5f00\u542f\u533a\u57df\u683c\u5f0f",id:"\u5f00\u542f\u533a\u57df\u683c\u5f0f",level:4},{value:"\u4e0d\u517c\u5bb9\u7684\u63d2\u4ef6",id:"\u4e0d\u517c\u5bb9\u7684\u63d2\u4ef6",level:4},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316",children:"\u50a8\u5b58\u7a7a\u95f4\u4f18\u5316"}),"\n",(0,s.jsx)(i.h2,{id:"\u63d2\u4ef6\u6570\u636e\u4f18\u5316",children:"\u63d2\u4ef6\u6570\u636e\u4f18\u5316"}),"\n",(0,s.jsxs)(i.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(i.code,{children:"/plugins"})," \u6587\u4ef6\u5939\u50a8\u5b58\u662f\u5426\u9700\u8981\u8fdb\u884c\u4f18\u5316\u8fd9\u4e2a\u95ee\u9898\uff0c\u6709\u4e2a\u5f88\u7b80\u5355\u7684\u5224\u65ad\u65b9\u6cd5\u5c31\u662f\u67e5\u770b\u603b\u5360\u7528\uff0c"]}),"\n",(0,s.jsx)(i.p,{children:"\u5982\u679c\u8d85\u8fc7\u4e86 200 MB \uff0c\u90a3\u4e48\u5f88\u6709\u53ef\u80fd\u6709\u4e9b\u63d2\u4ef6\u4f7f\u7528\u4e86 Sqlite / yml / zip \u7b49\u65b9\u5f0f\u50a8\u5b58\u4e86\u4e00\u4e9b\u4e1c\u897f\uff0c"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u670d\u52a1\u5668\u6709\u4e00\u5b9a\u4eba\u6570\u7684\u60c5\u51b5\u4e0b\u8fd9\u5e76\u4e0d\u662f\u63a8\u8350\u7684\u50a8\u5b58\u65b9\u5f0f\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u5bf9\u50a8\u5b58\u7a7a\u95f4\u4f1a\u6709\u4e00\u5b9a\u7684\u5360\u7528\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"\u4f7f\u7528\u6570\u636e\u5e93",children:"\u4f7f\u7528\u6570\u636e\u5e93"}),"\n",(0,s.jsxs)(i.p,{children:["\u5408\u7406\u4f7f\u7528\u6570\u636e\u5e93\u53ef\u4ee5\u964d\u4f4e\u670d\u52a1\u5668\u786c\u76d8\u5360\u7528\u3002\u8be6\u89c1",(0,s.jsx)(i.a,{href:"https://yizhan.wiki/NitWikit/database",children:"\u6570\u636e\u5e93\u76f8\u5173"})]}),"\n",(0,s.jsx)(i.h2,{id:"\u5907\u4efd\u7a7a\u95f4\u4f18\u5316",children:"\u5907\u4efd\u7a7a\u95f4\u4f18\u5316"}),"\n",(0,s.jsx)(i.h3,{id:"\u4f7f\u7528\u5907\u4efd\u63d2\u4ef6\u66ff\u4ee3\u6574\u7aef\u5907\u4efd",children:"\u4f7f\u7528\u5907\u4efd\u63d2\u4ef6\u66ff\u4ee3\u6574\u7aef\u5907\u4efd"}),"\n",(0,s.jsx)(i.p,{children:"\u63a8\u8350\u4e24\u4e2a\u5907\u4efd\u63d2\u4ef6(\u9ad8\u6548\u7684\u5907\u4efd\uff0c\u65e0\u9700\u505c\u670d\u5373\u53ef\u5907\u4efd)\uff1a"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://www.spigotmc.org/resources/ebackup-simple-and-reliable-backups-for-your-server-supports-ftp-sftp.69917/",children:"ebackup"})," \u53ef\u8bbe\u7f6e\u9ed1\u540d\u5355\u4e0d\u5907\u4efd\u67d0\u4e9b\u6587\u4ef6\uff0cFTP \u8fdc\u7a0b\u5907\u4efd\u652f\u6301"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://www.spigotmc.org/resources/server-backup-ingame-dropbox-ftp-backup-1-8-1-20-multithreaded.79320/",children:"serverbackup"})," \u53ef\u652f\u6301\u52a8\u6001\u5907\u4efd(\u5373\u53ea\u5907\u4efd\u6700\u8fd1\u53d8\u66f4\u8fc7\u7684\u6587\u4ef6)\uff0c\u5360\u7528\u7a7a\u95f4\u66f4\u5c0f"]}),"\n",(0,s.jsx)(i.h2,{id:"\u5b58\u6863\u5b58\u50a8\u7a7a\u95f4\u4f18\u5316",children:"\u5b58\u6863\u5b58\u50a8\u7a7a\u95f4\u4f18\u5316"}),"\n",(0,s.jsx)(i.p,{children:"Minecraft \u9ed8\u8ba4\u7684\u533a\u5757\u683c\u5f0f\u662f ANVIL \uff0c\u4f46\u662f\u8fd9\u4e2a\u533a\u5757\u683c\u5f0f\u6709\u5f88\u591a\u5f0a\u7aef\uff0c\u6bd4\u5982\u5b58\u4e86\u4e00\u4e9b\u65e0\u7528\u4fe1\u606f\uff0c\u4f7f\u7528\u4e86\u5f3a\u5236\u5bf9\u9f50\u7b49\uff0c"}),"\n",(0,s.jsx)(i.p,{children:"\u4e14\u81f3\u4eca\u8fd8\u4f7f\u7528\u7740\u53e4\u8001\u7684 zlib \u538b\u7f29\u683c\u5f0f\uff0c\u6240\u4ee5\u5982\u679c\u786c\u76d8\u5403\u7d27\u65f6\u5019\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5bf9\u5176\u8fdb\u884c\u8c03\u6574\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u6ce8\u610f\uff0c\u8fd9\u662f\u5f88\u5e95\u5c42\u7684\u4e1c\u897f\uff0c\u5176\u5b9e\u4e0d\u63a8\u8350\u5728\u975e\u5fc5\u8981\u60c5\u51b5\u4e0b\u8fdb\u884c\u5904\u7406"}),"\n",(0,s.jsx)(i.h3,{id:"\u5220\u9664\u8fc7\u65f6\u533a\u5757",children:"\u5220\u9664\u8fc7\u65f6\u533a\u5757"}),"\n",(0,s.jsx)(i.p,{children:"\u6709\u4e00\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u505a\u5230\uff0c\u4f46\u662f\u5fd8\u4e86\u540d\u5b57"}),"\n",(0,s.jsx)(i.p,{children:"TODO"}),"\n",(0,s.jsx)(i.h3,{id:"\u66f4\u9ad8\u6548\u7684\u50a8\u5b58\u65b9\u5f0f",children:"\u66f4\u9ad8\u6548\u7684\u50a8\u5b58\u65b9\u5f0f"}),"\n",(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.p,{children:"Linear\u4e0d\u9002\u5408\u73a9\u5bb6\u57fa\u6570\u975e\u5e38\u5927/\u670d\u52a1\u5668\u7ecf\u5e38\u6ede\u540e/\u538b\u7f29\u6bd4\u8f83\u5927(\u63a8\u8350\u9ed8\u8ba41-5)/ CPU \u6838\u5fc3\u6570\u76ee\u5c0f/\u670d\u52a1\u5668\u786c\u76d8\u7a7a\u95f4\u8db3\u591f\u5927\u7684\u670d\u52a1\u5668\u3002"}),(0,s.jsx)(i.p,{children:"\u6362\u53e5\u8bdd\u6765\u8bf4\uff0c\u53ea\u6709\u73a9\u5bb6\u5e76\u4e0d\u591a\u4f46\u9700\u8981\u8f83\u5927\u7684\u5730\u56fe\u4e14 VPS \u9ed8\u8ba4\u7ed9\u7684\u786c\u76d8\u8f83\u5c0f\u65f6\u624d\u5e94\u8be5\u8003\u8651\u6b64\u683c\u5f0f\u3002"}),(0,s.jsxs)(i.p,{children:["\u5982\u679c\u5f3a\u884c\u5728\u4ee5\u4e0a\u4e0d\u9002\u5408\u4f7f\u7528 Linear \u7684\u670d\u52a1\u5668\u4f7f\u7528\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0 ",(0,s.jsx)(i.strong,{children:"\u5c40\u90e8\u5927\u89c4\u6a21\u56de\u6863"})," \u7684\u60c5\u51b5\uff0c\u8bf7\u6ce8\u610f\u3002"]}),(0,s.jsx)(i.p,{children:"\u8fd9\u5e94\u8be5\u662f\u6700\u540e\u624d\u5e94\u8be5\u8003\u8651\u7684\u65b9\u6848\u3002"})]}),"\n",(0,s.jsx)(i.p,{children:"\u6b64\u683c\u5f0f\u662f\u7531\u8457\u540d\u7684 Xymb \u5927\u4f6c\u5f00\u53d1\uff0c\u76f8\u6bd4\u4e8e ANVIL \uff0c\u53ef\u4ee5\u8282\u7701\u5de8\u5927\u7684\u7a7a\u95f4"}),"\n",(0,s.jsx)(i.p,{children:"\u4e3b\u4e16\u754c\u53ef\u4ee5\u8282\u7701\u5927\u7ea6 50% \u7684\u7a7a\u95f4\uff0c\u672b\u5730\u5927\u7ea6\u4e3a 90% \uff0c\u4e14\u4f7f\u7528\u73b0\u4ee3\u7684 zstd \u538b\u7f29\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u5feb\u7684\u52a0\u8f7d\u548c\u4fdd\u5b58\u901f\u5ea6"}),"\n",(0,s.jsx)(i.h4,{id:"\u8f6c\u6362\u533a\u57df\u683c\u5f0f",children:"\u8f6c\u6362\u533a\u57df\u683c\u5f0f"}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u4e4b\u524d\u4f60\u9700\u8981\u5c06 ANVIL \u8f6c\u6362\u6210 Linear \u533a\u57df\u683c\u5f0f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Leaves \uff0c\u4f60\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u5185\u90e8\u81ea\u52a8\u8f6c\u6362\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/xymb-endcrystalme/LinearRegionFileFormatTools",children:"\u8f6c\u6362\u5de5\u5177"})," \uff0c\u8f6c\u6362\u975e\u5e38\u7b80\u5355\u4f60\u53ea\u9700\u8981\u770b\u7740\u6559\u7a0b\u505a\u5c31\u884c(\u8bb0\u5f97\u505a\u5907\u4efd)"]}),"\n",(0,s.jsx)(i.h4,{id:"\u5f00\u542f\u533a\u57df\u683c\u5f0f",children:"\u5f00\u542f\u533a\u57df\u683c\u5f0f"}),"\n",(0,s.jsx)(i.p,{children:"\u76ee\u524d\uff0c\u652f\u6301\u7ebf\u6027\u533a\u57df\u683c\u5f0f\u7684\u4ec5\u6709 LinearPurpur \uff0c LinearPaper \uff0c Leaves \uff0c Leaf \uff0c Kaiiju (\u8fd8\u6709\u4e00\u5806Fork)\uff0c"}),"\n",(0,s.jsx)(i.p,{children:"\u5f00\u542f\u6559\u7a0b\u4e0d\u591a\u8bf4\uff0c\u4f60\u53ea\u9700\u8981\u67e5\u770b Wiki \u5c31\u884c\u3002"}),"\n",(0,s.jsx)(i.h4,{id:"\u4e0d\u517c\u5bb9\u7684\u63d2\u4ef6",children:"\u4e0d\u517c\u5bb9\u7684\u63d2\u4ef6"}),"\n",(0,s.jsx)(i.p,{children:"ServerBackup \u4e00\u6b3e\u5907\u4efd\u63d2\u4ef6\uff0c\u4f1a\u7531\u4e8e\u627e\u4e0d\u5230mca\u6587\u4ef6\u62a5\u9519\u3002\n\u76ee\u524d\u5df2\u77e5\u4e0d\u517c\u5bb9\u7ebf\u6027\u533a\u57df\u7684\u683c\u5f0f\u7684\u63d2\u4ef6\u6781\u5c11\u65e0\u6bd4\uff0c\u5df2\u77e5\u7684\u6709\u5927\u90e8\u5206\u5728\u7ebf\u7f51\u9875\u5730\u56fe\u6d4f\u89c8\u7a0b\u5e8f\uff0c\u4ee5\u53caResidence\u90e8\u5206\u4e0d\u517c\u5bb9(\u611f\u8c22z\u5927\u795e\u7684\u4f18\u96c5\u4ee3\u7801\uff0c\u5f53\u4f20\u9001\u5230\u4e00\u4e2a\u672a\u52a0\u8f7d\u533a\u5757\u7684\u9886\u5730\u65f6\u4f1a\u5d29\u6e83\uff09"}),"\n",(0,s.jsx)(i.h4,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,s.jsx)(i.p,{children:"\u611f\u8c22 HaHaWTH \u63d0\u4f9b\u7684\u6d4b\u8bd5\u7ed3\u679c\uff0c\u6d4b\u8bd5\u5185\u5bb9\u4e3a\u4f7f\u7528 Chunky \u52a0\u8f7d\u534a\u5f84 1000 \u683c\u7684\u65b9\u5757\u5e76\u4fdd\u5b58\uff0c\u6d4b\u8bd5\u6838\u5fc3\u4e3a Leaf \uff0c\u5b9e\u9645\u7ed3\u679c\u53ef\u80fd\u4e0e\u6d4b\u8bd5\u7ed3\u679c\u6709\u51fa\u5165"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\u4e16\u754c"}),(0,s.jsx)(i.th,{children:"ANVIL(\u539f\u7248\u683c\u5f0f)"}),(0,s.jsx)(i.th,{children:"Linear(\u538b\u7f29\u6bd4\u4e3a\u4e00)"}),(0,s.jsx)(i.th,{children:"Linear(\u538b\u7f29\u6bd4\u4e3a\u516d\uff0c\u9ed8\u8ba4\u538b\u7f29\u6bd4)"}),(0,s.jsx)(i.th,{children:"Linear(\u538b\u7f29\u6bd4\u4e3a22)\uff08\u6700\u5927\u538b\u7f29\u6bd4\uff09"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\u4e3b\u4e16\u754c"}),(0,s.jsx)(i.td,{children:"192MB"}),(0,s.jsx)(i.td,{children:"142MB"}),(0,s.jsx)(i.td,{children:"117MB"}),(0,s.jsx)(i.td,{children:"92MB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\u5730\u72f1"}),(0,s.jsx)(i.td,{children:"118MB"}),(0,s.jsx)(i.td,{children:"70MB"}),(0,s.jsx)(i.td,{children:"60MB"}),(0,s.jsx)(i.td,{children:"46MB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\u672b\u5730"}),(0,s.jsx)(i.td,{children:"87MB"}),(0,s.jsx)(i.td,{children:"1.72MB"}),(0,s.jsx)(i.td,{children:"1.2MB"}),(0,s.jsx)(i.td,{children:"914KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\u4fdd\u5b58\u7528\u65f6"}),(0,s.jsx)(i.td,{children:"3m18s"}),(0,s.jsx)(i.td,{children:"3m50s"}),(0,s.jsx)(i.td,{children:"4m44s"}),(0,s.jsx)(i.td,{children:"23m21s"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"\u5185\u5b58\u5360\u7528"}),(0,s.jsx)(i.td,{children:"3GB\u5de6\u53f3"}),(0,s.jsx)(i.td,{children:"3.1GB"}),(0,s.jsx)(i.td,{children:"3.3GB"}),(0,s.jsx)(i.td,{children:"3.4 ~ 18GB(\u6781\u4e0d\u7a33\u5b9a)"})]})]})]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"\u4e0d\u63a8\u8350\u538b\u7f29\u6bd4\u5f00\u5230\u6700\u5927\uff0c\u63a8\u8350\u503c\u4e3a 6"})}),"\n",(0,s.jsx)(i.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,s.jsx)(i.p,{children:"1\u3002\u4f7f\u7528\u8f6f\u94fe\u63a5 / \u5feb\u6377\u65b9\u5f0f\u5171\u4eab\u591a\u4e2a\u670d\u52a1\u5668\u7684 lib \uff0cMinecraft \u672c\u4f53\u7b49\uff08\u9664\u975e\u7a7a\u95f4\u975e\u5e38\u5c11\u5426\u5219\u4e0d\u8981\u8fd9\u6837\uff0c\u540e\u679c\u81ea\u8d1f\uff09\uff1b"}),"\n",(0,s.jsx)(i.p,{children:"2\u3002\u4f7f\u7528\u6e05\u7406\u8f6f\u4ef6\uff1b"}),"\n",(0,s.jsx)(i.p,{children:"3\u3002\u91cd\u88c5\u7cfb\u7edf\uff0c\u5e76\u6700\u5c0f\u5316\u5b89\u88c5\uff08\u4e0d\u5b89\u88c5\u975e\u5fc5\u8981\u8f6f\u4ef6\uff09\uff1b"}),"\n",(0,s.jsx)(i.p,{children:"4\u3002\u68c0\u67e5\u662f\u5426\u6709\u591a\u4f59\u7684 Java\uff08\u4e00\u822c\u6765\u8bf4\u5f00\u670d\u4e00\u4e2a\u7248\u672c\u7684 Java \u5373\u53ef\uff09\u3002"}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"\u9664\u975e\u4f60\u77e5\u9053\u4f60\u5728\u5220\u4ec0\u4e48\u5426\u5219\u8bf7\u5148\u8bf7\u6559\u5927\u4f6c\u80fd\u4e0d\u80fd\u5220\u9664\u6216\u8005\u5148\u5907\u4efd\uff0c\u4e0d\u8981\u5220\u4e86\u624d\u53d1\u73b0\u670d\u52a1\u5668\u51fa\u95ee\u9898\u3002"})})]})}function o(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>c});var s=n(96540);const t={},r=s.createContext(t);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);