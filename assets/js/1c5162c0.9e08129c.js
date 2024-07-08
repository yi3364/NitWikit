"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9236],{46180:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>X,contentTitle:()=>r,default:()=>A,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var a=n(74848),s=n(28453);const l={title:"JVM \u4f18\u5316",sidebar_position:7},r="JVM \u4f18\u5316",t={id:"process/maintenance/optimize/jvm-optimization",title:"JVM \u4f18\u5316",description:"\u53c2\u6570",source:"@site/docs-java/process/maintenance/optimize/jvm-optimization.md",sourceDirName:"process/maintenance/optimize",slug:"/process/maintenance/optimize/jvm-optimization",permalink:"/NitWikit/Java\u7248/process/maintenance/optimize/jvm-optimization",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"\u68a6\u6db5LOVE",lastUpdatedAt:1720415493e3,sidebarPosition:7,frontMatter:{title:"JVM \u4f18\u5316",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u600e\u4e48\u8ba9\u5927\u4f6c\u5e2e\u6211\u6027\u80fd\u5206\u6790",permalink:"/NitWikit/Java\u7248/process/maintenance/optimize/ask-for-help"},next:{title:"\u53cd\u4f5c\u5f0a",permalink:"/NitWikit/Java\u7248/anticheat"}},X={},o=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u4ee5\u4e0b\u662f\u989d\u5916\u9009\u9879",id:"\u4ee5\u4e0b\u662f\u989d\u5916\u9009\u9879",level:3},{value:"\u901a\u7528",id:"\u901a\u7528",level:2},{value:"\u5185\u5b58\u4f18\u5316",id:"\u5185\u5b58\u4f18\u5316",level:3},{value:"\u5927\u9875\u652f\u6301",id:"\u5927\u9875\u652f\u6301",level:3},{value:"SIMD",id:"simd",level:3},{value:"\u4e0b\u8f7d\u6e90\u52a0\u901f",id:"\u4e0b\u8f7d\u6e90\u52a0\u901f",level:3},{value:"\u4e2d\u6587\u7f16\u7801",id:"\u4e2d\u6587\u7f16\u7801",level:3},{value:"\u5220\u9664\u5783\u573e\u4fe1\u606f",id:"\u5220\u9664\u5783\u573e\u4fe1\u606f",level:3},{value:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",id:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",level:3},{value:"\u5f02\u6b65\u65e5\u5fd7",id:"\u5f02\u6b65\u65e5\u5fd7",level:3},{value:"\u66f4\u957f\u7684KeepAlive\u65f6\u95f4",id:"\u66f4\u957f\u7684keepalive\u65f6\u95f4",level:3},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:2},{value:"ZGC \u4e0e G1GC",id:"zgc-\u4e0e-g1gc",level:3},{value:"JDK",id:"jdk",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:l}=i;return l||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"jvm-\u4f18\u5316",children:"JVM \u4f18\u5316"}),"\n",(0,a.jsx)(i.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,a.jsx)(i.admonition,{type:"danger",children:(0,a.jsxs)(i.p,{children:["\u6240\u6709\u7684\u542f\u52a8\u53c2\u6570\u90fd\u5fc5\u987b\u88ab\u653e\u5728 ",(0,a.jsx)(i.code,{children:"-jar"})," \u524d\u9762\u5426\u5219\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u65e0\u6cd5\u542f\u52a8"]})}),"\n",(0,a.jsx)(i.p,{children:"\u4ee5\u4e0b\u662f\u63a8\u8350\u7684 JVM \u4f18\u5316\u53c2\u6570(\u81f3\u5c11 Java 17 \u4ee5\u4e0a)"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"\u4ee5\u4e0b\u542f\u52a8\u53c2\u6570\u9700\u8981\u81ea\u5df1\u8865\u5168\u5185\u5b58\u5206\u914d(-Xms \u548c -Xmx) \u548c \u670d\u52a1\u7aef\u6838\u5fc3\u540d(-jar \u670d\u52a1\u7aef\u540d\u5b57.jar)"})}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Mukul1127 Flag (ZGC) Plus - 4 \u6838 8G \u4ee5\u4e0a\u63a8\u8350"}),(0,a.jsxs)(i.p,{children:["Mukul1127 Flag Plus \u662f\u73b0\u4ee3\u7684\u542f\u52a8\u53c2\u6570\uff0c\u4f7f\u7528 ZGC \u4f5c\u4e3a\u5783\u573e\u56de\u6536\uff0c",(0,a.jsxs)(i.strong,{children:["\u6ce8\u610f",":Mukul1127"," Flag Plus\u81f3\u5c11\u9700\u8981 4c8g \u4ee5\u4e0a\u73af\u5883\u624d\u53ef\u4ee5\u53d1\u6325\u51fa\u4f18\u52bf\uff0c\u66f4\u4f4e\u914d\u7f6e\u8bf7\u4f7f\u7528 Aikar flag plus"]}),"\uff0cMukul1127 Flag Plus \u9700\u8981 Java 17 \u4ee5\u4e0a!"]}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive\n"})}),(0,a.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528Java 21 \u4ee5\u4e0a\uff0c\u4f60\u53ef\u4ee5\u5c06",(0,a.jsx)(i.code,{children:"-XX:-ZProactive"}),"\u6362",(0,a.jsx)(i.code,{children:"-XX:+ZGenerational"}),"\uff0cJava 22\u4ee5\u4e0a\u5fc5\u987b\u5207\u6362"]})]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Mukul1127 (ZGC) Flag - \u4f7f\u7528 GraalVM \u65f6\u63a8\u8350"}),(0,a.jsx)(i.p,{children:"GraalVM Java 17+ \u7684\u53c2\u6570\uff0c"}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1 -XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive\n"})}),(0,a.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528Java 21 \u4ee5\u4e0a\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,a.jsx)(i.code,{children:"-XX:-ZProactive"})," \u6362\u4e3a ",(0,a.jsx)(i.code,{children:"-XX:+ZGenerational"})," \uff0cJava 22\u4ee5\u4e0a\u5fc5\u987b\u5207\u6362"]}),(0,a.jsx)(i.h3,{id:"\u4ee5\u4e0b\u662f\u989d\u5916\u9009\u9879",children:"\u4ee5\u4e0b\u662f\u989d\u5916\u9009\u9879"}),(0,a.jsxs)(i.p,{children:["\u66f4\u6fc0\u8fdb\u7684\u5185\u8054\uff0c\u5728 Graal \u4e2d\u901a\u8fc7 ",(0,a.jsx)(i.code,{children:"-Dgraal.BaseTargetSpending=160"})," \uff08\u9ed8\u8ba4\u4e3a 120\uff09\u548c OpenJDK \u4e2d\u7684\u5176\u4ed6\u4e00\u4e9b\u6807\u5fd7\u3002\u5177\u6709\u8f83\u5927\u7f13\u5b58\u7684 CPU \u53ef\u80fd\u4f1a\u4ece\u4e2d\u53d7\u76ca\u3002"]}),(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"-Dgraal.OptWriteMotion=true"})," \u548c ",(0,a.jsx)(i.code,{children:"-Dgraal.WriteableCodeCache=true"})," \uff0c\u5b83\u4eec\u770b\u8d77\u6765\u4e0d\u7a33\u5b9a\uff0c\u4f46\u5728 GraalVM 22.3.0+ \u4e2d\u53ef\u80fd\u66f4\u7a33\u5b9a"]})]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Mukul1127 Flag (G1GC)"}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseFMA -XX:+UseVectorCmov -XX:+UseNewLongLShift -XX:+UseFastStosb -XX:+SegmentedCodeCache -XX:+OptimizeStringConcat -XX:+DoEscapeAnalysis -XX:+OmitStackTraceInFastThrow -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:GCTimeRatio=99 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16\n"})})]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Dreeam Flag (G1GC)"}),(0,a.jsx)(i.p,{children:"\u68a6\u5148\u751f\u7684\u53c2\u6570"}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+ExplicitGCInvokesConcurrent -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:+PerfDisableSharedMem -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:AllocatePrefetchStyle=3 -XX:+AlwaysActAsServerClassMachine -XX:+EagerJVMCI -XX:+UseStringDeduplication -XX:+UseAES -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow -XX:+RewriteBytecodes -XX:+RewriteFrequentPairs -XX:+UseFPUForSpilling -XX:+UseFastStosb -XX:+UseNewLongLShift -XX:+UseVectorCmov -XX:+UseXMMForArrayCopy -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+UseXmmLoadAndClearUpper -XX:+UseXmmRegToRegMoveAll -XX:+EliminateLocks -XX:+DoEscapeAnalysis -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseCopySignIntrinsic -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+UseFastJNIAccessors -XX:+UseInlineCaches\n"})})]}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Aikar's Flag "}),(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1\n"})})]}),"\n",(0,a.jsx)(i.h2,{id:"\u901a\u7528",children:"\u901a\u7528"}),"\n",(0,a.jsx)(i.h3,{id:"\u5185\u5b58\u4f18\u5316",children:"\u5185\u5b58\u4f18\u5316"}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u670d\u52a1\u5668\u5185\u5b58\u8db3\u591f\uff0c\u53ef\u4ee5\u52a0\u4e0a\u6b64\u53c2\u6570 ",(0,a.jsx)(i.code,{children:"-XX:-ZUncommit"})," \uff0c\u8981\u6c42 JVM \u603b\u662f\u63d0\u524d\u628a\u8981\u7528\u7684\u5185\u5b58\u7533\u8bf7\u597d\uff0c"]}),"\n",(0,a.jsx)(i.p,{children:"\u5e76\u4e14\u963b\u6b62 JVM \u628a\u4e34\u65f6\u7a7a\u51fa\u6765\u7684\u5185\u5b58\u8fd8\u7ed9\u7cfb\u7edf\u3002\u8fd9\u4f1a\u52a0\u5feb\u77ed\u65f6\u95f4\u6709\u5927\u91cf\u5185\u5b58\u7684\u9700\u6c42\u65f6\u7684\u901f\u5ea6\u3002"}),"\n",(0,a.jsx)(i.h3,{id:"\u5927\u9875\u652f\u6301",children:"\u5927\u9875\u652f\u6301"}),"\n",(0,a.jsx)(i.p,{children:"\u6ce8\u610f\u5728WINDOWS\u4e0a\u4f7f\u7528\u5927\u9875\uff0c\u5fc5\u987b\u8981\u4ee5\u7ba1\u7406\u5458\u542f\u52a8"}),"\n",(0,a.jsx)(i.p,{children:"\u5f53\u7136\uff0c\u5728\u52a8\u624b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u8bd5\u4e00\u8bd5\u662f\u4e0d\u662f\u7cfb\u7edf\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u9879\u529f\u80fd \uff0c\u5728\u63a7\u5236\u53f0\u6267\u884c\u6b64\u547d\u4ee4"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -Xlog:gc+init -XX:+UseLargePages -Xmx1g -version\n"})}),"\n",(0,a.jsx)(i.p,{children:"\u5982\u679c\u51fa\u73b0\u4e86\u4ee5\u4e0b\u5b57\u6837\uff0c\u90a3\u4e48\u8bf4\u660e\u4e0d\u5b8c\u5168\u517c\u5bb9\uff1a"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"UseLargePages disabled\uff0c no large pages configured and available on the system.\n"})}),"\n",(0,a.jsx)(i.p,{children:"\u90a3\u4e48\u5c31\u8bf4\u660e\u5f53\u524d\u7cfb\u7edf\u5e76\u4e0d\u652f\u6301\u5927\u9875\uff0c\u4e0d\u8fc7\u4e0d\u8981\u6025\uff0c\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u8fd9\u4e00\u884c\u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version\n"})}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u770b\u5230 ",(0,a.jsx)(i.code,{children:"Large Page Support: Enabled (Transparent)"})," \uff0c\u8868\u793a\u4f60\u7684\u7cfb\u7edf\u652f\u6301\u900f\u660e\u5927\u9875"]}),"\n",(0,a.jsx)(i.p,{children:"\u4f46\u662f\u5982\u679c\u4f60\u4f9d\u7136\u4e0d\u652f\u6301\u6216\u8005\u60f3\u8981\u8ffd\u6c42\u6781\u81f4\u6027\u80fd\uff0c\u53ef\u4ee5\u53bb\u767e\u5ea6\u641c\u7d22\u5f53\u524d\u7684\u7cfb\u7edf\u5982\u4f55\u5f00\u542f\u5927\u9875\uff0c"}),"\n",(0,a.jsx)(i.p,{children:"\u8fd9\u91cc\u5c31\u4e0d\u518d\u8fc7\u591a\u7684\u8d58\u8ff0\u4e86\u3002(LargePages\u5bf9\u670d\u52a1\u5668\u63d0\u5347\u76f8\u5f53\u5de8\u5927,\u5728\u6211\u7684\u7535\u8111\u4e0a\uff0c\u5b83\u63d0\u5347\u4e8650%\u7684\u6027\u80fd)"}),"\n",(0,a.jsx)(i.p,{children:"\u5982\u679c\u652f\u6301 LargePages \uff0c\u52a0\u4e0a\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS\n"})}),"\n",(0,a.jsx)(i.p,{children:"\u5982\u679c\u652f\u6301 TransparentHugePages (\u4e0d\u8981\u628a\u4e24\u4e2a\u90fd\u52a0\u4e0a\uff0c\u4f18\u5148LargePages)\uff0c\u52a0\u4e0a\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m -XX:+UseHugeTLBFS\n"})}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"\u5728\u67d0\u4e9b\u670d\u52a1\u5668\u4e0a\uff0c\u5f00\u542f\u5927\u9875\u540e\uff0c\u4f1a\u5ef6\u957f JVM \u7684\u542f\u52a8\u65f6\u95f4\uff0c\u65f6\u95f4\u4ece\u5341\u79d2\u5230\u5341\u5206\u949f\u4e0d\u7b49"})}),"\n",(0,a.jsx)(i.h3,{id:"simd",children:"SIMD"}),"\n",(0,a.jsx)(i.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Pufferfish \u7684\u5206\u652f(Purpur\uff0cLeaf\uff0cLeaves\uff0cGale)\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"--add-modules=jdk.incubator.vector\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\u4e0b\u8f7d\u6e90\u52a0\u901f",children:"\u4e0b\u8f7d\u6e90\u52a0\u901f"}),"\n",(0,a.jsx)(i.p,{children:"\u9ed8\u8ba4\u7684 SpigotLibraryLoader \u4e0b\u8f7d\u6e90\u5728\u56fd\u5185\u8bbf\u95ee\u5f88\u6162\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fLeaf\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u53c2\u6570\u4f7f\u7528\u56fd\u5185\u4e0b\u8f7d\u6e90\uff1a"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-DLeaf.library-download-repo=https://maven.aliyun.com/repository/public\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\u4e2d\u6587\u7f16\u7801",children:"\u4e2d\u6587\u7f16\u7801"}),"\n",(0,a.jsx)(i.p,{children:"\u9632\u6b62\u4e71\u7801"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-Dfile.encoding=UTF-8\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\u5220\u9664\u5783\u573e\u4fe1\u606f",children:"\u5220\u9664\u5783\u573e\u4fe1\u606f"}),"\n",(0,a.jsx)(i.p,{children:"(\u4ec5\u9002\u5408Leaf\u6216\u8005Gale)"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-Dgale.log.warning.root=false -Dgale.log.warning.offline.mode=false\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",children:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-Djava.security.egd=file:/dev/urandom\n"})}),"\n",(0,a.jsx)(i.h3,{id:"\u5f02\u6b65\u65e5\u5fd7",children:"\u5f02\u6b65\u65e5\u5fd7"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:" -Xlog:async\n"})}),"\n",(0,a.jsx)(i.p,{children:"\u5f02\u6b65\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65e5\u5fd7\u8bb0\u5f55\u7684\u987a\u5e8f\u4e0d\u786e\u5b9a"}),"\n",(0,a.jsx)(i.h3,{id:"\u66f4\u957f\u7684keepalive\u65f6\u95f4",children:"\u66f4\u957f\u7684KeepAlive\u65f6\u95f4"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-Dpaper.playerconnection.keepalive=60\n"})}),"\n",(0,a.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u7684\u7f51\u7edc\u4e0d\u597d,\u53ef\u4ee5\u9002\u5f53\u5ef6\u957fkeepalive\u65f6\u95f4,\u6253\u5f00",(0,a.jsx)(i.a,{href:"/NitWikit/Java%E7%89%88/process/maintenance/optimize/go#use-alternate-keepalive",children:"alternate-keepalive"})]}),"\n",(0,a.jsx)(i.h2,{id:"\u53c2\u6570\u89e3\u91ca",children:"\u53c2\u6570\u89e3\u91ca"}),"\n",(0,a.jsx)(i.h3,{id:"zgc-\u4e0e-g1gc",children:"ZGC \u4e0e G1GC"}),"\n",(0,a.jsx)(i.p,{children:"\u5e9f\u8bdd\u4e0d\u8bf4\uff0c\u76f4\u63a5\u4e0a\u56fe"}),"\n",(0,a.jsx)(i.p,{children:"ZGC"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:n(18397).A+"",width:"547",height:"127"})}),"\n",(0,a.jsx)(i.p,{children:"G1GC"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:n(97047).A+"",width:"523",height:"138"})}),"\n",(0,a.jsx)(i.p,{children:"\u663e\u7136,\u5355\u6b21GC\u65f6\u95f4\u4ece32ms\u964d\u52300.012ms"}),"\n",(0,a.jsx)(i.h2,{id:"jdk",children:"JDK"}),"\n",(0,a.jsx)(i.p,{children:"TODO"})]})}function A(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},97047:(e,i,n)=>{n.d(i,{A:()=>a});const a="data:image/png;base64,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"},18397:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/zgc-1d88bba5006d4dbfea21ef27a00c4c15.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>t});var a=n(96540);const s={},l=a.createContext(s);function r(e){const i=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:i},e.children)}}}]);