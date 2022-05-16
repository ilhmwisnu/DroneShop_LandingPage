import{o as r,c as d,t as n,a as t,r as x,n as b,b as u,F as p,d as _,e as h,f as v}from"./vendor.4cfc8564.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};w();var f=(m,l)=>{const i=m.__vccOpts||m;for(const[a,e]of l)i[a]=e;return i};const y={props:["text"]},k={class:"bg-blue-700 font-medium text-white px-4 py-2 rounded-full"};function L(m,l,i,a,e,s){return r(),d("button",k,n(i.text),1)}var C=f(y,[["render",L]]);const N={props:["title","content","src"]},q={class:"relative w-full text-center"},D={class:"absolute top-14 right-7 left-7 sm:top-24 sm:right-12 sm:left-12 md:top-12 xl:top-32 xl:right-32 xl:left-32"},B={class:"text-5xl font-bold mb-8 text-white"},M={class:"text-white text-2xl"},P=["src"];function S(m,l,i,a,e,s){return r(),d("div",q,[t("div",D,[t("h5",B,n(i.title),1),t("p",M,n(i.content),1)]),t("img",{class:"w-full",src:i.src},null,8,P)])}var j=f(N,[["render",S]]);const $={components:{PrimaryBtn:C,Content:j},data(){return{hiddenNav:!0,drones:[{name:"Mini Drone",price:"Rp 999.999",src:"src\\assets\\mini_drone 1.png",desc:"Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically."},{name:"Drone Light",price:"Rp 999.999",src:"src\\assets\\drone_light 1.png",desc:"Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically."},{name:"Phantom Drone",price:"Rp 999.999",src:"src\\assets\\phantom_drone 1.png",desc:"Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically."}],testi:[{name:"Lukas Walker",img:"src\\assets\\Ellipse 56.png",msg:"\u201CWith high resolution camera,picture become clear and beautiful.It\u2019s so easy to operate drone.\u201D",job:"Content Creator"},{name:"Jessica Obrien",img:"src\\assets\\Ellipse 56-1.png",msg:"\u201CTaking high view video become easy and faster. Battery perfomance really helping for making film.\u201D",job:"Film Director"},{name:"Lisa Miller",img:"src\\assets\\Ellipse 56-2.png",msg:"\u201CMaking video content for my trip vlog so powerful and wonderful. Love the video quality.\u201D",job:"Content Creator"}]}},methods:{hide(){this.hiddenNav=!this.hiddenNav}}},O={class:"p-4 pb-12 bg-slate-100 h-fit w-full sm:px-12 lg:px-24 lg:pt-10 lg:pb-24 xl:px-32 overflow-hidden"},R={class:"flex flex-row justify-between content-center lg:mb-24"},T={class:"flex items-center"},A=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 lg:hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h7"})],-1),E=[A],I=["src"],K=t("h1",{class:"font-medium lg:relative lg:right-3"},"DroneshopID",-1),W=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),z=[W],F=h('<a class="font-medium" href="#">Home</a><a class="font-medium" href="#">Gallery</a><a class="font-medium" href="#">Products</a><a class="font-medium" href="#">Review</a><a class="font-medium" href="#">Support</a>',5),G=t("button",{class:"px-4 py-2 font-medium"},"Sign In",-1),V={class:"flex flex-col-reverse mt-8 lg:flex-row"},H={class:""},J={class:"bg-red-200 flex flex-row items-center px-4 py-2 rounded-full w-fit"},U=["src"],Q=t("p",{class:"text-red-500 text-sm"},"GET 25% DISCOUNT",-1),X=t("h2",{class:"text-7xl font-bold mt-4 mb-8"},"Representing Drone Light",-1),Y=t("p",{class:"text-gray-600"}," Look up the sky and beautiful world with simple navigation. Just record and get a lot memories to share, lightly and fast like a lightning. ",-1),Z={class:"my-10 relative"},tt=["src"],et={class:"grid grid-cols-1 md:grid-cols-2"},st={class:"p-4 pt-16 lg:px-32 lg:pt-24 pb-64 mb-64 bg-slate-100 text-center"},ot=h('<h2 class="font-bold text-5xl">Why Drone Light?</h2><p class="text-2xl mx-auto mt-8 w-5/6 md:w-3/5 text-blue-900"> We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. </p><div class="grid grid-cols-2 mt-10 p-10 gap-6 md:grid-cols-4"><div class="text-center w-auto"><h3 class="block text-4xl font-bold mb-4">4K</h3><p class="text-xl text-blue-900">Camera Resolution</p></div><div class="text-center w-auto"><h3 class="block text-4xl font-bold mb-4">2 TB</h3><p class="text-xl text-blue-900">Storage Capacity</p></div><div class="text-center w-auto"><h3 class="block text-4xl font-bold mb-4">60 m/s</h3><p class="text-xl text-blue-900">Super Max Speed</p></div><div class="text-center w-auto"><h3 class="block text-4xl font-bold mb-4">30 mins</h3><p class="text-xl text-blue-900">Long Flight Time</p></div></div>',3),lt={class:"relative"},it=["src"],nt={class:"px-4 pt-16 pb-20 sm:pt-32 sm:px-32"},at=t("h2",{class:"w-11/12 font-bold text-5xl mx-auto text-center mb-16 md:w-3/4 lg:w-6/12"}," 4K video shot on our Drone Light ",-1),ct=["src"],rt={class:"px-4 pt-11 pb-16 text-center sm:px-8 md:px-12 lg:px-32"},dt=t("h2",{class:"font-bold mx-auto text-5xl sm:w-3/5"},"New Products",-1),mt=t("p",{class:"text-2xl mx-auto mt-8 w-4/5 text-gray-700"}," New innovation, best quality than before. make every moment flying operation become unforgettable. ",-1),ut={class:"flex flex-col mx-6 sm:mx-10 md:mx-0 md:flex-row gap-6 md:gap-4 mt-14 justify-between"},pt=["src"],ht={class:"mb-3 text-2xl font-medium"},ft={class:"mb-3 text-3xl font-bold"},gt={class:"px-4 mb-4"},xt={class:"p-4 pb-16 text-center bg-slate-100 sm:px-10 md:px-16 lg:px-32"},_t=t("h2",{class:"pt-14 font-bold text-6xl mb-16"},"What Our \u201CPilots\u201D Are Saying",-1),bt={class:"flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3"},vt={class:"text-black text-base mb-7"},wt={class:"flex flex-row items-center"},yt=["src"],kt={class:"flex flex-col"},Lt={class:"font-bold text-xl"},Ct={class:"text-lgt"},Nt={class:"grid grid-cols-2 bg-slate-800 p-4 gap-10 py-10 text-center items-center sm:px-10 md:px-16 md:grid-cols-3 lg:grid-cols-4 lg:px-32"},qt={class:"text-white mx-auto col-span-2 md:col-span-3 lg:col-span-1"},Dt={class:"flex flex-col"},Bt={class:"flex flex-row place-items-center relative right-4 justify-center mb-2 lg:justify-start"},Mt=["src"],Pt=t("h1",{class:"font-medium"},"DroneshopID",-1),St=t("p",{class:"font-light text-white text-base text-left mb-3 w-fit"}," Look up the sky and beautiful world easily. ",-1),jt={class:"flex flex-row justify-between"},$t=["src"],Ot=["src"],Rt=["src"],Tt=["src"],At=h('<div class="text-white mx-auto md:text-left"><ul><li class="mb-3 font-bold">Explore</li><li class="mb-3">Our Services</li><li class="mb-3">Specification</li><li class="mb-3">Refund</li><li class="mb-3">Pricelist</li></ul></div><div class="text-white mx-auto md:text-left"><ul><li class="mb-3 font-bold">Account</li><li class="mb-3">My Account</li><li class="mb-3">How-to Tutorials</li><li class="mb-3">Top Benefit</li><li class="mb-3">Moment</li></ul></div><div class="text-white mx-auto col-span-2 md:text-left md:col-span-1"><ul><li class="mb-3 font-bold">Office</li><li class="mb-3">+022 123 4567</li><li class="mb-3">Bandung, Indonesia</li><li class="mb-3">No. 2 (Autodrone)</li><li class="mb-3">support@autodrone.id</li></ul></div>',3);function Et(m,l,i,a,e,s){const c=x("PrimaryBtn"),g=x("content");return r(),d(p,null,[t("header",O,[t("nav",R,[t("div",T,[t("button",{class:"p-1 active:bg-slate-400 active:rounded-full",onClick:l[0]||(l[0]=(...o)=>s.hide&&s.hide(...o))},E),t("img",{class:"mr-4 hidden lg:block",src:require("src/assets/Vector.png"),alt:"Logo"},null,8,I),K]),t("div",{class:b(["fixed left-0 top-0 z-30 gap-y-5 bg-slate-100 w-2/6 p-4 h-screen shadow-md gap-x-8 flex flex-col lg:static lg:w-fit lg:h-fit lg:shadow-none lg:flex-row lg:items-center xl:gap-x-14",{"-left-full":e.hiddenNav}])},[t("button",{onClick:l[1]||(l[1]=(...o)=>s.hide&&s.hide(...o)),class:"lg:hidden"},z),F],2),t("div",null,[G,u(c,{class:"ml-2",text:"Register"})])]),t("div",V,[t("div",H,[t("div",J,[t("img",{class:"mr-2",src:require("src/assets/tag 1.png"),alt:""},null,8,U),Q]),X,Y,u(c,{class:"mt-8",text:"Get Now"})]),t("div",Z,[t("img",{class:"relative scale-100 lg:scale-125 lg:left-1/4",src:require("src/assets/hero-image 5.png"),alt:""},null,8,tt)])])]),t("section",et,[u(g,{src:require("src/assets/ultra_light.png"),title:"Ultra Light",content:"Drone move faster with weighing component under 200 g"},null,8,["src"]),u(g,{src:require("src/assets/best_resolution.png"),title:"Best Resolution",content:`Take a beautiful view with best camera\r
up to 4K Camera Resolution`},null,8,["src"])]),t("section",st,[t("div",null,[ot,t("div",lt,[t("img",{class:"absolute w-3/4 top-10 left-1/2 transform -translate-x-1/2 sm:max-w-fit",src:require("src/assets/features_cut_bg.png"),alt:""},null,8,it)])])]),t("section",nt,[at,t("img",{class:"mx-auto",src:require("src/assets/Mask Group.png"),alt:""},null,8,ct)]),t("section",rt,[dt,mt,t("div",ut,[(r(!0),d(p,null,_(e.drones,o=>(r(),d("div",{key:o.name,class:"border border-gray-300 rounded-2xl p-4 w-fit mx-auto"},[t("img",{class:"rounded-2xl mb-6 w-full",src:o.src,alt:""},null,8,pt),t("h4",ht,n(o.name),1),t("p",ft,n(o.price),1),t("p",gt,n(o.desc),1),u(c,{class:"mb-3",text:"Get Now"})]))),128))])]),t("section",xt,[_t,t("div",bt,[(r(!0),d(p,null,_(e.testi,o=>(r(),d("div",{key:o.name,class:"bg-white rounded-xl p-6 text-left"},[t("p",vt,n(o.msg),1),t("div",wt,[t("img",{src:o.img,alt:"",class:"rounded-full mr-6"},null,8,yt),t("div",kt,[t("p",Lt,n(o.name),1),t("p",Ct,n(o.job),1)])])]))),128))])]),t("footer",Nt,[t("div",qt,[t("div",Dt,[t("div",Bt,[t("img",{class:"scale-50",src:require("src/assets/Logo.png"),alt:""},null,8,Mt),Pt]),St,t("div",jt,[t("img",{class:"scale-75",src:require("src/assets/social-facebook.png"),alt:""},null,8,$t),t("img",{class:"scale-75",src:require("src/assets/social-instagram.png"),alt:""},null,8,Ot),t("img",{class:"scale-75",src:require("src/assets/social-twitter.png"),alt:""},null,8,Rt),t("img",{class:"scale-75",src:require("src/assets/social-youtube.png"),alt:""},null,8,Tt)])])]),At])],64)}var It=f($,[["render",Et]]);v(It).mount("#app");
