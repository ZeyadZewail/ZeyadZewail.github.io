(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3225:function(e,t,a){Promise.resolve().then(a.bind(a,1268))},1268:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ea}});var i=a(9268),A=a(6006),n=a(5334),s=a(4454),l=a(192),r=a(3701),c=a(5893);let o=()=>{let{progress:e}=(0,r.S)();return(0,i.jsxs)(c.V,{center:!0,children:[(0,i.jsx)("span",{className:"canvas-load"}),(0,i.jsx)("p",{style:{fontSize:36,color:"#f1f1f1",fontWeight:800,marginTop:40},children:e.toFixed(2)+"%"})]})},d=()=>{let e=(0,s.L)("/planet/scene.gltf");return(0,i.jsx)("primitive",{object:e.scene,scale:2.5,"position-y":0,"rotation-y":0})},h=()=>(0,i.jsx)(n.Xz,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:(0,i.jsxs)(A.Suspense,{fallback:(0,i.jsx)(o,{}),children:[(0,i.jsx)(l.z,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),(0,i.jsx)(d,{})]})});var g=a(1558);let m=e=>{let{isMobile:t}=e,a=(0,s.L)("/desktop_pc/scene.gltf");return(0,i.jsxs)("mesh",{children:[(0,i.jsx)("hemisphereLight",{intensity:.15,groundColor:"black"}),(0,i.jsx)("pointLight",{intensity:1}),(0,i.jsx)("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),(0,i.jsx)("primitive",{object:a.scene,scale:t?.7:.75,position:t?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[0,-.2,-.1]})]})},x=()=>{let[e,t]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=window.matchMedia("(max-width: 500px)");t(e.matches);let a=e=>{t(e.matches)};return e.addEventListener("change",a),()=>{e.removeEventListener("change",a)}},[]),(0,i.jsxs)(n.Xz,{frameloop:"demand",shadows:!0,camera:{position:[20,4,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[(0,i.jsxs)(A.Suspense,{fallback:(0,i.jsx)(o,{}),children:[(0,i.jsx)(l.z,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),(0,i.jsx)(m,{isMobile:e})]}),(0,i.jsx)(g.q,{all:!0})]})},p={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},u="#915eff",b=()=>(0,i.jsxs)("section",{className:"relative w-full h-screen mx-auto",children:[(0,i.jsxs)("div",{className:"".concat(p.paddingX," absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"),children:[(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center mt-5",children:[(0,i.jsx)("div",{className:"w-5 h-5 rounded-full",style:{backgroundColor:u}}),(0,i.jsx)("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{className:"".concat(p.heroHeadText),children:["Hi, I'm"," ",(0,i.jsx)("span",{style:{color:u},children:"Zeyad"})]}),(0,i.jsx)("p",{className:"".concat(p.heroSubText," mt-2 text-white-100"),children:"I make magic happen on the internet."})]})]}),(0,i.jsx)(x,{}),(0,i.jsx)("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:(0,i.jsx)("a",{href:"#about"})})]});var w=a(8844),f={src:"/ZeyadZewail.github.io//_next/static/media/menu.c4cdac3e.svg",height:12,width:20,blurWidth:0,blurHeight:0},v={src:"/ZeyadZewail.github.io//_next/static/media/close.c977e557.svg",height:18,width:18,blurWidth:0,blurHeight:0},y={src:"/ZeyadZewail.github.io//_next/static/media/github.665bfffe.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZElEQVR42iXMMQ5AQBRF0Z8ZRKNjB0RiBxQaK7AsC7AkGh2d2jrueJnJa25O8r/hMRyT5lTeMHpugvaoTMDHzqrtKsFMoMW0TjUnWCKMCXIOThpqAm/6MbBRii6VwIkqCrJ45n9+hFKwm7LE/QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},j={src:"/ZeyadZewail.github.io//_next/static/media/external_link.8600634e.svg",height:1850,width:1850,blurWidth:0,blurHeight:0};let U=[{id:"about",title:"About"},{id:"experience",title:"Experience"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],N=[{title:"Web Developer",icon:{src:"/ZeyadZewail.github.io//_next/static/media/web.f067c01f.webp",height:208,width:208,blurDataURL:"data:image/webp;base64,UklGRtIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAIoRWxCAAQAeP////4xAAfi//z6/+EVX//8///6/5uT//r///z/Uw7c//r9/9QAADH///v4WwAEAENfNBMAAQBWUDggagAAADACAJ0BKggACAACQDglsAJ0ugADOlHbtV8AAM4kJv4hyhlXVzH2riSyR17+FtBidwaTWRLNiodB4TEyRhrLBP4W0mr//FwDqJ65RzA7GWgN10wdOf0NnH94S7b9j/T2b/hn2m5oGDo4AAA=",blurWidth:8,blurHeight:8}},{title:"Web designer",icon:{src:"/ZeyadZewail.github.io//_next/static/media/creator.e596791c.webp",height:208,width:208,blurDataURL:"data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABYBzbVpM7vwtZYQGxnFxKalUsQVmBpCYiIgSWEYRuD2Fv0DY4H16tnvD7YJQy5a5qG5wLn2a4Qjg7BLYFBFZQOCBgAAAAEAIAnQEqCAAIAAJAOCWwAnS6AAMIwCLHqAD86P0gXAOgc+alBcQkN+CnrsK/lsoRGPOQI/OaeeYP/44m6vZvToeovwGKRwu/9/1F97SUf+iIg5H/jY3rfCvNNVq8QAAA",blurWidth:8,blurHeight:8}},{title:"React Native Developer",icon:{src:"/ZeyadZewail.github.io//_next/static/media/mobile.d3ab9fd4.webp",height:208,width:208,blurDataURL:"data:image/webp;base64,UklGRtwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAgAkRQAAAAAAAKT/mMVoAAuE/P///5kAbP/+/vn/uQkFn//5/v//bQB4////9XQKAE63oP+2AAABAAAARTEAAgBWUDggdAAAABACAJ0BKggACAACQDglsAJ0ugACuvPeaEAA/rgn15Jl6VHNqVJqIrE0F7FJYyzPrDzPRmJl3N3Jc92il4z1btni5VgtqBWgaQdjXt+OfDUyk0iFz7/537x+/j/n7a9vMH//sjF3hb/g3/9Tk3+/g3/v3AAA",blurWidth:8,blurHeight:8}},{title:"Backend Developer",icon:{src:"/ZeyadZewail.github.io//_next/static/media/backend.c6f3d754.webp",height:208,width:208,blurDataURL:"data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAABAAaXVwaAAQATOr//+pLABbf//r6/98WWv/7///7/1la//v///v/WRff//r6/98WAEzq///qSwAEABpdXRoABABWUDggXgAAAPABAJ0BKggACAACQDglsAJ0BpMDZUDMAAD+fitFdDv1Vg5qfO7ae+qF0JbDGxP/3ZJ+Abkp24h3X8hhVYeDCi0+RR1d+IL5u53PD9vpAsF/n46ycP+zkyzc8F34AAA=",blurWidth:8,blurHeight:8}}],S=[{name:"HTML 5",icon:{src:"/ZeyadZewail.github.io//_next/static/media/html.5faed4ed.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42mMAgacBDJrPgjjMnrowGN/VAmJLBrPH/tyaDDDwLJB1/1Nfhv/PY7R/fy20/f0tS+3/6zCG/Qww8FSOYfWLpbP/vz174s//i8f//F/e9/+dI8NqhAIGhmkvV87//+bcyd9/T+3//Xdmzf/XNgxTkRXUPZ/W8f/15pW//t648OvP/o3/XzIw1CEU6DIUPKtK+v/myL7//y8d//+rM+X/M32GAoQjY/X1ntow7H3uxvDucxjDu7deDPueRBnoQSTjTZngJqW5SF8K85GG8Z/EWTIBAOD9aJ3LZEDDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"CSS 3",icon:{src:"/ZeyadZewail.github.io//_next/static/media/css.a39d8948.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3klEQVR42mMAAe7yvZoMRXvMGHJ2GjMkrTXmylhrxlC0Q5MBDsr27peu3PvfrPHgb4NJ138z9N/4z95wbD8DHGTsXN2z/Oz//afv/bny+Pufpac+/GcoOr6aAQbkq/ZNY8jb9b9/9cXf915+/7329Nv/DCkHpzLAQeqOutJZx//P33bt1/n7X36tOvnmP0PE3jpkBQXpk4/+P3Dm3v8Td7/9T1/x6D9D5p4CBhgwqtuvx5C9cy9D0d53DK0X3zFUn9hnWLVbjwEETOv3M8EUujbtl/ZJnS0N41vW7GYCAHYkaC5pfrSQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"JavaScript",icon:{src:"/ZeyadZewail.github.io//_next/static/media/javascript.80891722.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAt0lEQVR42i2MzQ7BQBSFTx+h6TuzkVhbspLYCUkTSytUCDUtEmJBajVK/IROrzPpLL7cO985c1EqeOUGPgm4V3B3zgOFXZQoaM7MYmJo53zYHy4USciW7AhdESOAO5fZMJ/CXMcwxxHkt6Y7sMAgKKqH7EOYTh2m14R8V3QnFp5zBCzpRwTpNiBRD9KuQdIhtAgLnyV8SaHuM+i4j+w2QZYMoOmVnOFDLvDeC5ZyXhLycpNh2IL3B1eVlCZZmTpMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"TypeScript",icon:{src:"/ZeyadZewail.github.io//_next/static/media/typescript.ccdf44e2.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42jXNvy4EURhA8fN9ubN3N7IxiRUmG9Fssb1Eo0AvUSgUouANNB6AV/AAXsALaFQegEhWsQp/1mywa7HGjJm5V7HRnO7kJ/OH14L3ISKKByYBcMDIBBD+wmVdiapKljrBgM098V3uV8xj4XUxkKj7VYYkHmoyeY2wEQVqtmYNZ/08O1qu027W3G3vBxuojlOXHe8/oP9s4WCpPU0rqrK9NsfbdwkE6M1HyVRF7Gkn4WWY6d75QO/7CburDQsdjFVcAfFCVXh6TbOdZgXAdntJDA0nHFxJy0rYHTvl5BnWZ+BiCHy6wfvm6A/fQVnG3POYDwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"React JS",icon:{src:"/ZeyadZewail.github.io//_next/static/media/reactjs.38edcd3f.png",height:96,width:96,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVUwd5Twd5Twd1TwN9SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN1SwN0blcZwAAAAIXRSTlMAAAAAABYXHR4fOTw9QkNeYGFjZG9wcXR1dnd4eYKDi4yqzvdGAAAARElEQVR42gVACRZAIBQcTMpSpPAV1f1P6YHq0DoogtaITJboo+QssYNfWilt2bHNtXx19RjOJ71yAXTmTtoRHMNkguIPiqwD30VyI3sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{name:"NextJS",icon:{src:"/ZeyadZewail.github.io//_next/static/media/nextJS.f8f7658f.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEUAAAABAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXKwumAAAAI3RSTlMAEycoKClrc4SKjZCYm5yirLi5vb7Bzt7p6uvs7e709fb3+J3TdJcAAABESURBVHjaDcnHAYAgEATAFTFnz+yJ6PbfI8x3ACPfLylgTkaXhXA6npkCxyLfSzq87OtmpI/VabVxgVXyHjQD7OrZJgi9fgUtTuPSXwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"Angular",icon:{src:"/ZeyadZewail.github.io//_next/static/media/angular.681c8adf.webp",height:2048,width:2048,blurDataURL:"data:image/webp;base64,UklGRs4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABYBTbVptL2+KDQWTqHiXYwAF7XKTn2YiIAJwDSFPvUyIMSRqBpvtWg6rnUYWi/1eBuB/HHjGQMxgAVlA4IG4AAAAQAgCdASoIAAgAAkA4JbACdLoAAx8TmL6IAP7SZU3cSv0EvHufOJjXlftFdjCBwXj+d87tbDPnl79e0JfJgf4tuOF4qEsNMgfh4Anrc5vkSRQLZL/7C2qCb3H/ldt7/0JnBTrI/6FnS+/fvgAAAA==",blurWidth:8,blurHeight:8}},{name:"Redux Toolkit",icon:{src:"/ZeyadZewail.github.io//_next/static/media/redux.fd412f4b.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjklEQVR42jXNzwqCQBDH8amgY75G0SHq1smI8FadMijwoghevIi4+P/ke+mT+V3cHfiwszM/dqXxx5VQ+kSAm1Dtd2KuG39cm4DCAwmey4ydafZQOOKO1LyysQEPAWqEyODZ5Qkl1HKftvQNOlx0oIeDFB/88cMOvQ68keOKCgPOKPCy37iIcICDGK6IyAyzLGFIewOsIAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"Tailwind CSS",icon:{src:"/ZeyadZewail.github.io//_next/static/media/tailwind.cd1d4bac.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42l2OSwqCYBSFPxEaNmkLTdpQ42hQsxbRMnpREWVBD4joYSJBfw4qIyOQDLfhJLBfQZI+OBzuPXDvIUZ/KfyzvKtMz0oSRp5j71Ux3kW8jwoJCzse2Llltq5g/QxZPRwWtzxzuwCAXGSlMgDMrzVml0Ce96VKMLZKTCwf7RSgiRoAHT1Dz8wSMxIFhsc8fdOha4QyFLR3ZQA0kepSqas01kWamyqtbQ5AuhK9UBgcVFL8QvgCc3xKoCradGsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{name:"Material UI",icon:{src:"/ZeyadZewail.github.io//_next/static/media/MUI.5000e047.png",height:820,width:820,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEUAf/4Afv4Af/4Afv4Af/4Afv4Afv4Afv4Af/4Af/4Af/4Af/4Afv4Af/4Afv4Afv4Af/4Af/4Af/4Af/4Af/4Afv4Af/4Afv4Af/4Af/4Afv4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Af/4Afv72/Nc5AAAAKXRSTlMAAAEBAgIDBQcICgsLERUcIycsODlSVVpbZWhrhYuTp6iutLu+ws7W5aMmODMAAABGSURBVHjaDcfFEcAwEATBXZlkZma2809Q95jqGgCWBwq6JIu0CuF/5/LXQ4D4HrujzSLomc2VPwkAvvu2ijbcqac8lOQoA4H3A2+xt3pfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"Three JS",icon:{src:"/ZeyadZewail.github.io//_next/static/media/threejs.d3934894.svg",height:227,width:227,blurWidth:0,blurHeight:0}},{name:"SQL",icon:{src:"/ZeyadZewail.github.io//_next/static/media/SQL.01711911.png",height:400,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfklEQVR42mNABw6p7RwiSd3WYoldkigSmdn1jHBO1GQJhoQeZbmkLk4URf+3MTD938HAlJdTp82Q2CPMEN9ryMCQ2F0pm9RVxhA8Q/Vkq4fviwkMWUCcCsThDEGzhEAKwqSSugIY4npr+4qL4r9MZfB61Cee8aSfJebTFAZ1AEEKKI1jGAH5AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},{name:"MongoDB",icon:{src:"/ZeyadZewail.github.io//_next/static/media/mongodb.004a26cb.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42mMAg/95LG6Hwiy91vlFAHGk28EwS6b/uSwMMBA4y2tzeLH9/8gip/9RhU7/QezAmV5bwJJGr5OFw5pcPsQyaP8vXJL9J3p60J9YBp3/oU0uH41eJgkz6P/N5QtpcnqS4Gn3v+Zw3b+g9aH/oh1M/oc2uzxR+pPJxwACAdM9dsc5Wf6v2F35K3RV6K9oW5P/gdM9dzPAgP++SEffErP/tfVp/yurE//7FZv/99sb4QjRPdebGUS7bfSLi2rx+B3d7PnHbaNvHFhuthdYjsF7khMTiLY4HKhtethfGyw2wREsBgCe5lvFZm3QdAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"Firebase",icon:{src:"/ZeyadZewail.github.io//_next/static/media/firebase.12fe24c1.png",height:512,width:373,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAuklEQVR42mP4vkRa+/sSyS4GdPBrqaTD7yXCH/6sVOj6v0jU5fuvbM4/J51kGH4vE0/5vUTk//eJ7P9/L5e++vuM080/pxzTGX6vlprwYwrn/6/t4j9+HbH+/+eU/f/fpxxbGb7P4tzxbYLE/99HbP7+OePw+/dJO6CkwyaGbwuUPv4+BFR51uEPUPDPn1NgibcMv47Ybvpz2v4/RCWE/n3Cfh3YZT+P2Lr/PmF3F4hv/jxq58zAwMAAAO7IbpuKRXWnAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8}},{name:"Node JS",icon:{src:"/ZeyadZewail.github.io//_next/static/media/nodejs.fbe4a5b0.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42k3PsQrCMBSF4eiks7skT+CgVIUIRR3E2clJhGSoiM5aKHQvpa/QDH3N/rQJ5MJHIOcQboRq7VQwsjUzvPDGXDDKkfkwRYkNVvghDWGCPxZY4oQdciQU7EU6q9V42aFGJp254RgX1gQNnqgIM2gKZo8vhQfnHWdcw05hD40C22jJwxDyzYnw45//xN/sAV9JT39w6BBAAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"docker",icon:{src:"/ZeyadZewail.github.io//_next/static/media/docker.888df998.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyUlEQVR42mOAAEtGxor9bAxQwDTtATPzmu9MEE77GUa4RO91O6a+G2YMmMBDji1z3SLW8n0fGMLnRov//8/KvPSDD0Su/4o4d/G20wzVh/4zVB74z1q47QrDtHsJTKu//2Jc8TmVQar33DqGjnP/DSde/Go+6cJPlp4L/0X7L/2X7z7eZxxfo8UgX3cwUbFp9//ceaf/J8689J+h8dx/0dazm1Fc0HjsfmD6vtdLGdouLeLvupQEl1j8k5Eh68F/RgYsgL39HFgcAJy4USgOVXxYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"git",icon:{src:"/ZeyadZewail.github.io//_next/static/media/git.3337db5a.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEX/YzH0UR3zUB7zUB3yUB3yThrxThrxThnzUB7zUB3zUB7zUB3zUB3zUB7zUB3zUB3zUB3zUB3zUB3zUB3zUB3zUB3zUB7zUB3zUB3zUB3zUB3zUB7zUB30UB3zUB3zUB7zUB3zUB3zUB3zUB7zUB3zUB30UR70UR2dD3cMAAAAJnRSTlMAAAAAAQEBAQMDBAQJCgoLEmSBpKeoq6yts8HJyszOz9HX2t7u8HEAbAcAAABHSURBVHjaDcRVAoAgFATAlbWeAXaLrfe/oczHgMIic0HodQcoYHpW9R0SZnnXst81zPxNzWg16F/t8ERErJLNBhQoUbmm8AeEKQO0+LSmpwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"figma",icon:{src:"/ZeyadZewail.github.io//_next/static/media/figma.522534b7.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1UlEQVR42mN47GXGyAAET7x0op546Pb/zHbq/FfsU/M715WPAQYee1mpPvdk+P8CiH9nmvz/n2f8/2++aykDDPxXZGC8652445p71f8vOTE339WXv/6fwKDNAAMxof9FiwL/P6lx+f/XbtnPqwy7fv5n2Pk/kAEGmmX+i9Y5/39S5/D/j9vSH9c1dnz5b735SzQDMsjY3LY9e83U/+nrFpox7PgvxYAM0nYUq6buSfmfsi/mf9o+ZyUGIIjYM5cZKlnECKZ35iWm7ShMYgAC+51XmWGaAYH2XLMr9qdQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}],B=[{title:"Full Stack Web Freelancer",company_name:"Independant",icon:"",iconBg:"#383E56",date:"august 2022 - Now",points:["Developed responsive and user-friendly websites using modern frameworks and libraries like React and Angular.","Collaborated closely with designers and backend developers to ensure seamless project delivery.","Implementing responsive design and ensuring cross-browser compatibility.","Debugged and optimized code to improve website performance and user experience.","Utilized version control systems like Git for efficient code management and collaboration.","Stayed up to date with the latest web development trends and technologies."]},{title:"Full Stack Web Developer",company_name:"Scandiweb",icon:{src:"/ZeyadZewail.github.io//_next/static/media/scandiweb.281ca141.webp",height:409,width:664,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAQAoRE9CAgAAAD9HNjsJAAgAFiIuHQAAXlxRUmZWYWYTHR4aHBwcHABWUDggLAAAAJABAJ0BKggABQACQDgloAJ0ugADmAD+7kMf3RsXW0uf/uDj/sHH/YOP14AA",blurWidth:8,blurHeight:5},iconBg:"#E6DEDD",date:"Feb 2023 - April 2023",points:["Developed and maintained Ecommmerce applications using React (SPWA) and magento 2 CMS (PHP).","Collaborated in an Agile Environment with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Communicated with customers in order to fulfill their requests and diagnose issues.","Participated in code reviews and provided constructive feedback to other developers."]}],E=[{name:"My portfolio",description:"A Beautiful and mobile responsive portfolio built with nextJS",tags:[{name:"React",color:"blue-text-gradient"},{name:"NextJS",color:"text-gray-600"},{name:"ThreeJS",color:"text-gray-600"},{name:"tailwind",color:"text-cyan-400"},{name:"GithubPages",color:""}],image:{src:"/ZeyadZewail.github.io//_next/static/media/portfolio.8199e448.webp",height:963,width:1907,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAQAAkA4JZQAAp1TSyoAAP77oTICUUyZ/ijmINJewKNR/KQD9PtssGH8IAAA",blurWidth:8,blurHeight:4},source_code_link:"https://github.com/ZeyadZewail/ZeyadZewail.github.io",link:"https://zeyadzewail.github.io/"},{name:"modareseen.com",description:"Full stack website using nextJS, material UI and firebase for a freelance client. Worked in a team of 2 people with a fellow freelancer",tags:[{name:"React",color:"blue-text-gradient"},{name:"NextJs",color:"text-red-300"},{name:"MaterialUI",color:"text-cyan-400"},{name:"Firebase",color:"text-yellow-400"}],image:{src:"/ZeyadZewail.github.io//_next/static/media/modareseen.f9dfe4fb.webp",height:975,width:1921,blurDataURL:"data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAACQAQCdASoIAAQAAkA4JaQAAudP3WAA/v3B2+yL/SZAAAAA",blurWidth:8,blurHeight:4},source_code_link:"",link:"https://modareseen.com/"},{name:"Path of Exile Harvest Game",description:"Web Game simulating path of exile card game with accurate replicated ingame UI and mechanics",tags:[{name:"React",color:"blue-text-gradient"},{name:"remix",color:"pink-text-gradient"},{name:"fly.io",color:"text-violet-400"},{name:"tailwind",color:"text-cyan-400"}],image:{src:"/ZeyadZewail.github.io//_next/static/media/poeHarvest.a05b3cfd.webp",height:975,width:1921,blurDataURL:"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAQAAkA4JZQCdAEO/gPIAAD++5A+C/Y6MCs5GWEGJO6BHiG74QAgvAAAAA==",blurWidth:8,blurHeight:4},source_code_link:"https://github.com/ZeyadZewail/poe-gambagame",link:"https://gambagamealpha.fly.dev/"},{name:"Face Detection WebApp",description:"React Web app where you give it a link to an image and it detects faces and highlights them using clarifAI API.",tags:[{name:"React",color:"blue-text-gradient"},{name:"nodeJS",color:"green-text-gradient"},{name:"sqLite",color:"pink-text-gradient"},{name:"fly.io",color:"text-violet-400"}],image:{src:"/ZeyadZewail.github.io//_next/static/media/FaceDetection.e03b26c9.webp",height:973,width:1921,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAgCdASoIAAQAAkA4JbACdLoAAxu2n3qAAPyNriQWFl/2sScqU6ww5n/824Pplb0qGxoAAAA=",blurWidth:8,blurHeight:4},source_code_link:"https://github.com/ZeyadZewail/Face-Detection-Fullstack-WebApp",link:"https://facerecognition.fly.dev/"}];var D=a(6394),R=a.n(D);let k=()=>{let[e,t]=(0,A.useState)(""),[a,n]=(0,A.useState)(!1);return(0,i.jsx)("nav",{className:"".concat(p.paddingX," w-full items-center py-5 fixed top-0 z-20 bg-primary"),children:(0,i.jsxs)("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[(0,i.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{t(""),window.scrollTo(0,0)},children:[(0,i.jsx)(R(),{src:w.default,alt:"logo",className:"w-9 h-9 object-contain"}),(0,i.jsxs)("p",{className:"text-white  text-[18px] font-bold cursor-pointer ",children:["Zeyad Zewail ",(0,i.jsx)("span",{className:"md:block hidden",children:"Web Developer"})]})]}),(0,i.jsx)("ul",{className:"list-none hidden sm:flex flex-row gap-9",children:U.map(a=>(0,i.jsx)("li",{className:"".concat(e===a.title?"text-white":"text-secondary"," hover:text-white text-[18px] font-medium cursor-pointer"),onClick:()=>{t(a.title)},children:(0,i.jsx)("a",{href:"#".concat(a.id),"aria-label":"".concat(a.id),children:a.title})},a.id))}),(0,i.jsx)("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:(0,i.jsx)(R(),{src:a?v:f,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>{n(!a)}})}),(0,i.jsx)("div",{className:"".concat(a?"flex":"hidden"," sm:hidden p-6 black-gradient absolute top-[4rem] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"),children:(0,i.jsx)("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:U.map(a=>(0,i.jsx)("li",{className:"".concat(e===a.title?"text-white":"text-secondary"," hover:text-white text-[16px] font-medium cursor-pointer"),onClick:()=>{t(a.title),n(!1)},children:(0,i.jsx)("a",{href:"#".concat(a.id),children:a.title})},a.id))})})]})})};var Q=a(803),C=a(4646);let H=e=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:e}}}),Z=(e,t,a,i)=>({hidden:{x:"left"===e?100:"right"===e?-100:0,y:"up"===e?100:"down"===e?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:t,delay:a,duration:i,ease:"easeOut"}}}),W=(e,t,a,i)=>({hidden:{x:"left"===e?"-100%":"right"===e?"100%":0,y:"up"===e?"100%":"down"===e?"100%":0},show:{x:0,y:0,transition:{type:t,delay:a,duration:i,ease:"easeOut"}}}),z=(e,t)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:t||0}}}),J=(e,t)=>function(){return(0,i.jsxs)(C.E.section,{variants:z(!1,0),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:"".concat(p.padding," max-w-7xl mx-auto relative z-0"),children:[(0,i.jsx)("span",{className:"hash-span",id:t,children:"\xa0"}),(0,i.jsx)(e,{})]})},T=e=>{let{service:t,index:a}=e;return(0,i.jsx)(Q.C,{className:"xs:w-[250px] w-full",children:(0,i.jsx)(C.E.div,{variants:Z("right","spring",.5*a,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:(0,i.jsxs)(Q.C,{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[(0,i.jsx)(R(),{src:t.icon,alt:t.title,className:"w-16 h-16 object-contain"}),(0,i.jsx)("h3",{className:"text-white tex-[20px] font-bold text-center",children:t.title})]})})})},L=()=>(0,i.jsxs)(A.Fragment,{children:[(0,i.jsxs)(C.E.div,{variants:H(.25),children:[(0,i.jsx)("p",{className:p.sectionSubText,children:"Introduction"}),(0,i.jsx)("h2",{className:p.sectionHeadText,children:"Overview."})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,i.jsx)(C.E.p,{variants:Z("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]",children:"As an experienced Web developer, I specialize in creating captivating and responsive websites. With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I transform concepts into stunning web applications. As an experienced Web developer, I specialize in creating captivating and responsive websites. With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I transform concepts into stunning web applications."}),(0,i.jsx)(C.E.p,{variants:Z("","",.2,1),className:"mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]",children:"I excel in implementing responsive designs that seamlessly adapt to various devices, ensuring an optimal user experience. My portfolio showcases a range of projects where I have created interactive elements such as sliders, forms, navigation menus, and animations, enhancing user interaction and engagement."}),(0,i.jsx)(C.E.p,{variants:Z("","",.3,1),className:"mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]",children:"I have a proven track record of seamlessly integrating third-party APIs to add dynamic and real-time functionality to websites. My focus on performance optimization guarantees fast load times and efficient coding practices."})]}),(0,i.jsx)("div",{className:"mt-20 flex flex-wrap gap-10 justify-center",children:N.map((e,t)=>(0,i.jsx)(T,{service:e,index:t},e.title))})]});var M=J(L,"about");let V=e=>{let{technology:t,index:a}=e;return(0,i.jsx)(Q.C,{className:"aspect-square",children:(0,i.jsx)(C.E.div,{variants:Z("","spring",.5,.75),className:"green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:(0,i.jsxs)(Q.C,{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-4 xs:w-[150px]  xs:h-[150px] w-[100px] h-[100px] flex justify-evenly items-center flex-col",children:[(0,i.jsx)(R(),{className:"h-[50%] object-contain",src:t.icon,alt:t.name}),(0,i.jsx)("p",{className:"text-white font-bold xs:text-md text-sm flex gap-2",children:t.name})]})})})},I=()=>(0,i.jsxs)(A.Fragment,{children:[(0,i.jsxs)(C.E.div,{variants:H(.25),children:[(0,i.jsx)("p",{className:p.sectionSubText,children:"Tools of the trade"}),(0,i.jsx)("h2",{className:p.sectionHeadText,children:"Technologies."})]}),(0,i.jsx)("div",{className:"mt-10 flex flex-wrap gap-10 justify-center",children:S.map((e,t)=>(0,i.jsx)(V,{technology:e,index:t},e.name))})]});var P=J(I,""),G=a(731);a(7049);let F=e=>{let{experience:t,index:a}=e;return(0,i.jsxs)(G.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},date:t.date,iconStyle:{background:t.iconBg},icon:""===t.icon?null:(0,i.jsx)("div",{className:"flex justify-center items-center w-full h-full",children:(0,i.jsx)(R(),{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-white text-[24px] font-bold",children:t.title}),(0,i.jsx)("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),(0,i.jsx)("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((e,t)=>(0,i.jsx)("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:e},"Experience "+t))})]})},O=()=>(0,i.jsxs)(A.Fragment,{children:[(0,i.jsxs)(C.E.div,{variants:H(.25),children:[(0,i.jsx)("p",{className:p.sectionSubText,children:"What i've done so far"}),(0,i.jsx)("h2",{className:p.sectionHeadText,children:"Work Experience."})]}),(0,i.jsx)("div",{className:"mt-20 flex flex-col",children:(0,i.jsx)(G.VerticalTimeline,{children:B.map((e,t)=>(0,i.jsx)(F,{experience:e,index:t},e.company_name+e.date))})})]});var Y=J(O,"experience");let X=e=>{let{project:t,index:a}=e;return(0,i.jsx)(C.E.div,{variants:Z("up","spring",.5*a,.75),className:"flex justify-center w-full",children:(0,i.jsxs)(Q.C,{option:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl w-[360px] h-[450px] flex flex-col",children:[(0,i.jsxs)("div",{className:"relative w-full h-[230px] ",children:[(0,i.jsx)(R(),{src:t.image,alt:t.name,className:"w-full h-full object-cover rounded-2xl"}),(0,i.jsxs)("div",{className:"absolute inset-0 flex flex-col gap-2 items-end m-3 card-img_hover",children:[""===t.source_code_link?null:(0,i.jsx)("div",{onClick:()=>{window.open(t.source_code_link,"_blank")},className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:(0,i.jsx)(R(),{src:y,alt:"github",className:"w-3/5 h-3/5 object-contain"})}),(0,i.jsx)("div",{onClick:()=>{window.open(t.link,"_blank")},className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:(0,i.jsx)(R(),{src:j,className:"h-5 self-center cursor-pointer",style:{filter:"invert(100%)"},alt:"external link"})})]})]}),(0,i.jsxs)("div",{className:"mt-5 flex flex-grow flex-col justify-between gap-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-white font-bold text-[24px] flex gap-2",children:t.name}),(0,i.jsx)("p",{className:"mt-2 text-secondary text-[14px]",children:t.description})]}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:t.tags.map(e=>(0,i.jsx)("p",{className:"text-[14px] ".concat(e.color),children:"#"+e.name},e.name))})]})]})})},K=()=>{let[e,t]=(0,A.useState)(!1);return(0,A.useEffect)(()=>{let e=window.matchMedia("(max-width: 408px)");t(e.matches);let a=e=>{t(e.matches)};return e.addEventListener("change",a),()=>{e.removeEventListener("change",a)}},[]),(0,i.jsxs)(A.Fragment,{children:[(0,i.jsxs)(C.E.div,{variants:H(.25),children:[(0,i.jsx)("p",{className:p.sectionSubText,children:"My Work"}),(0,i.jsx)("h2",{className:p.sectionHeadText,children:"Projects."})]}),(0,i.jsx)("div",{className:"w-full flex",children:(0,i.jsx)(C.E.p,{variants:Z("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"The Following projects showcase my skills and experiences through real-world examples of my work. Each project is briefly described with links to the code repositories and live demos. These projects reflect my ability to solve complex problems, work with different technologies and manage projects effectively."})}),(0,i.jsx)("div",{className:"mt-20 grid gap-7",style:{gridTemplateColumns:e?"repeat(auto-fit, minmax(200px, 1fr))":"repeat(auto-fit, minmax(360px, 1fr))"},children:E.map((e,t)=>(0,i.jsx)(X,{index:t,project:e},"Project "+t))})]})};var q=J(K,"work"),_=a(536);let $=()=>{let e=(0,A.useRef)(null),[t,a]=(0,A.useState)({name:"",email:"",message:""}),[n,s]=(0,A.useState)(!1),l=e=>{let i=e.target,{name:A,value:n}=i;a({...t,[A]:n})},r=e=>{let i=e.target,{name:A,value:n}=i;a({...t,[A]:n})},c=e=>{e.preventDefault(),s(!0),_.ZP.send("service_es7nfeb","template_asxzq0m",{from_name:t.email,to_name:"Zeyad",from_email:t.email,to_email:"zeyadzewail@gmail.com",message:t.message},"w_FhFNEGme_GdNeRR").then(()=>{s(!1),alert("Thank you for your email, i will be in touch soon."),a({name:"",email:"",message:""})},e=>{s(!1),console.log(e),alert("Something Went Wrong")})};return(0,i.jsxs)("div",{className:"xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden",children:[(0,i.jsxs)(C.E.div,{variants:W("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[(0,i.jsx)("p",{className:p.sectionSubText,children:" Get in Touch"}),(0,i.jsx)("h3",{className:p.sectionHeadText,children:"Contact."}),(0,i.jsxs)("form",{ref:e,onSubmit:c,className:"mt-12 flex flex-col gap-8",children:[(0,i.jsxs)("label",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-white font-medium mb-4",children:"Your Name"}),(0,i.jsx)("input",{type:"text",name:"name",value:t.name,onChange:l,placeholder:"What's your name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium",autoComplete:"hidden"})]}),(0,i.jsxs)("label",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-white font-medium mb-4",children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",value:t.email,onChange:l,placeholder:"What's your Email?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium",autoComplete:"hidden"})]}),(0,i.jsxs)("label",{className:"flex flex-col",children:[(0,i.jsx)("span",{className:"text-white font-medium mb-4",children:"Message"}),(0,i.jsx)("textarea",{rows:7,name:"message",value:t.message,onChange:r,placeholder:"What's your message?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium",autoComplete:"hidden"})]}),(0,i.jsx)("button",{type:"submit",className:"bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl self-end hover:bg-transparent",children:n?"Sending...":"Send"})]})]}),(0,i.jsx)(C.E.div,{variants:W("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:(0,i.jsx)(h,{})})]})};var ee=J($,"contact"),et={src:"/ZeyadZewail.github.io//_next/static/media/herobg.d10038b8.png",height:1566,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWklEQVR42mNg45Tg4JLk4pFh55Jk55RkZOMV5NMWEzRmYOMQZwdLsHKIs7CL8HAry4raSgiZMnByS3PxyLJxAkVFWThE+XjUhPh0gJoYgApZOcQgokAGjCsMADejBgvH4SuWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};function ea(){return(0,i.jsxs)("div",{className:"relative z-0 bg-primary",children:[(0,i.jsxs)("div",{className:"bg-cover bg-no-repeat bg-center",style:{backgroundImage:"url(".concat(et.src,")")},children:[(0,i.jsx)(k,{}),(0,i.jsx)(b,{})]}),(0,i.jsx)(M,{}),(0,i.jsx)(P,{}),(0,i.jsx)(Y,{}),(0,i.jsx)(q,{}),(0,i.jsx)("div",{className:"relative z-0",children:(0,i.jsx)(ee,{})})]})}},8844:function(e,t,a){"use strict";a.r(t),t.default={src:"/ZeyadZewail.github.io//_next/static/media/logo.6e2ac490.svg",height:999,width:1e3,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[174,618,667,139,744],function(){return e(e.s=3225)}),_N_E=e.O()}]);