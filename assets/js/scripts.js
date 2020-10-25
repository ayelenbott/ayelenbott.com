const cookiesMessage=document.getElementById("cookies-message");const cookiesMessageAcept=document.getElementById("cookies-message-acept");const cookiesMessageToogle=document.getElementById("cookies-message-toggle");!localStorage.controlcookie&&cookiesMessage.classList.add("active");cookiesMessageAcept.addEventListener("click",()=>{localStorage.controlcookie=localStorage.controlcookie||0;localStorage.controlcookie++;cookiesMessage.classList.remove("active")});cookiesMessageToogle.addEventListener("click",()=>{cookiesMessage.classList.toggle("active")});function loadScript(url,callback){if(!document.getElementById(url)){var s=document.createElement("script");s.onload=callback;s.src=url;s.id=url;document.head.appendChild(s)}}function loadStyle(url,callback){if(!document.getElementById(url)){var s=document.createElement("link");s.onload=callback;s.rel="stylesheet";s.href=url;s.id=url;document.head.appendChild(s)}}if(!("scrollBehavior"in document.documentElement.style)){function smoothScroll(){var anchorOffset=48;var links=document.querySelectorAll('[href^="#"]');links.forEach(link=>{link.addEventListener("click",click=>{click.preventDefault();var target=document.querySelector(link.getAttribute("href"));target.scrollIntoView({behavior:"smooth"})})})}loadScript("/assets/js/smooth-scroll.js",smoothScroll)}function scrollShot(windowMarginTop,windowMarginBottom,selectorCSS,doAfterPre,doBefore=(()=>undefined),doAfterPost=0){const callbackScroll=(entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){doAfterPre(entry.target);if(!doAfterPost){observer.unobserve(entry.target)}}else if(doAfterPost){doAfterPost(entry.target)}});const observerScroll=new IntersectionObserver(callbackScroll,{rootMargin:windowMarginTop+" 0px "+windowMarginBottom+" 0px"});document.querySelectorAll(selectorCSS).forEach(nodo=>{observerScroll.observe(nodo);doBefore(nodo)})}scrollShot("-15%","-15%","[data-showup]",nodo=>nodo.classList.remove("showup"),nodo=>nodo.classList.add("showup"));function btnUp(option){const btn=document.querySelector(".btn-up").classList;option=="add"?btn.add("btn-up-hide"):btn.remove("btn-up-hide")}scrollShot("20%","-120%","body",()=>{btnUp()},()=>{if(scrollY<=innerHeight*.2){btnUp()}},()=>{btnUp("add")});function srcClock(nodo){nodo.classList.add("lazyload");var width=nodo.getAttribute("width")||"100%";var height=nodo.getAttribute("height")||"100%";nodo.setAttribute("src",`data:image/svg+xml,%3Csvg%20width='${width}'%20height='${height}'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin%202s%20linear%20infinite%7Dpath:nth-child%283%29%7Banimation:spin%20calc%282s%20%2A%2012%29%20linear%20infinite%7D%40keyframes%20spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg%20fill='none'%20stroke='gray'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%3E%3Ccircle%20cx='8'%20cy='8'%20r='7.5'/%3E%3Cpath%20d='M8%203%20V8'/%3E%3Cpath%20d='M8%208%20L10%2010'/%3E%3C/g%3E%3C/svg%3E`)}scrollShot("0px","0px",".article-post img[data-src]",nodo=>{const imgBig=nodo.dataset.src;const imgSmall="https://images.weserv.nl/?url="+(imgBig.indexOf("://")==-1?location.origin:"")+imgBig+"&w=400&q=65";var width=nodo.getAttribute("width");width?width+="w":width="700w";nodo.src=nodo.dataset.src;nodo.srcset=nodo.dataset.srcset||imgSmall+" 400w, "+imgBig+" "+width;nodo.sizes=nodo.dataset.sizes||"(max-width: 480px) calc(90vw - 30px), (max-width: 600px) calc(90vw - 30px - 40px), (max-width: 927px) calc(90vw - 95px - 40px), 700px";nodo.classList.remove("lazyload")},srcClock);scrollShot("0px","0px","[data-src]:not([src])",nodo=>{nodo.src=nodo.dataset.src;if(nodo.dataset.srcset)nodo.srcset=nodo.dataset.srcset;if(nodo.dataset.sizes)nodo.sizes=nodo.dataset.sizes;nodo.classList.remove("lazyload")},srcClock);scrollShot("0px","160px","[data-style]",nodo=>nodo.style=nodo.dataset.style,nodo=>nodo.style="background-image: url(data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin 2s linear infinite%7Dpath:nth-child%283%29%7Banimation:spin calc%282s %2A 12%29 linear infinite%7D%40keyframes spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg fill='none' stroke='gray' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'%3E%3Ccircle cx='8' cy='8' r='7.5'/%3E%3Cpath d='M8 3 V8'/%3E%3Cpath d='M8 8 L10 10'/%3E%3C/g%3E%3C/svg%3E); background-repeat: no-repeat; background-position: center;");const navSelector=".nav-icon, #menu, #blackover-nav, body";function toggleNav(){document.querySelectorAll(navSelector).forEach(e=>e.classList.toggle("active"))}function closeNav(){document.querySelectorAll(navSelector).forEach(e=>e.classList.remove("active"))}const navIcon=document.querySelector(".nav-icon");navIcon&&navIcon.addEventListener("click",toggleNav);const blackoverNav=document.getElementById("blackover-nav");blackoverNav&&blackoverNav.addEventListener("click",closeNav);document.addEventListener("keyup",e=>e.keyCode==27&&closeNav());const showSearch=document.querySelector(".show-search");showSearch&&showSearch.addEventListener("click",()=>{document.querySelector(".bd-search").classList.toggle("search--show")});const lunrsearch=document.getElementById("lunrsearch");lunrsearch&&lunrsearch.addEventListener("click",(function(){loadScript("/assets/js/lunr.js");loadScript("/assets/js/lunrsearchengine.js")}));const btnShowComments=document.querySelector(".show-comments");function loadComments(){var clock=document.getElementById("disqus_thread").insertAdjacentHTML("beforeend",`<img style='height:20em;width:100%' src="data:image/svg+xml,%3Csvg%20width='100%'%20height='100%'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin%202s%20linear%20infinite%7Dpath:nth-child%283%29%7Banimation:spin%20calc%282s%20%2A%2012%29%20linear%20infinite%7D%40keyframes%20spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg%20fill='none'%20stroke='gray'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%3E%3Ccircle%20cx='8'%20cy='8'%20r='7.5'/%3E%3Cpath%20d='M8%203%20V8'/%3E%3Cpath%20d='M8%208%20L10%2010'/%3E%3C/g%3E%3C/svg%3E">`);var d=document,s1=d.createElement("script"),s2=d.createElement("script");s1.src="https://ayelenbott.disqus.com/count.js";s1.id="dsq-count-scr";d.head.appendChild(s1);s2.src="https://ayelenbott.disqus.com/embed.js";s2.setAttribute("data-timestamp",+new Date);(d.head||d.body).appendChild(s2)}function toggleComments(){document.getElementById("comments").classList.toggle("comments--show")}btnShowComments&&btnShowComments.addEventListener("click",()=>{if(!document.getElementById("dsq-count-scr")){loadComments()}toggleComments()});const codePre=document.querySelectorAll('pre code[class*="language-"]');if(codePre&&!location.port){loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js");codePre.forEach(c=>{let codeLanguage=c.getAttribute("class").split("-")[1];switch(codeLanguage){case"html":case"xml":case"svg":case"mathml":case"ssml":case"atom":case"rss":codeLanguage="markup";break;case"javascript":case"js":codeLanguage="javascript";loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-clike.min.js");break}loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-"+codeLanguage+".min.js")});loadStyle("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-tomorrow.min.css");loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/toolbar/prism-toolbar.min.js");loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/show-language/prism-show-language.min.js");loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");loadStyle("https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/toolbar/prism-toolbar.min.css")}const navbar=document.querySelector(".navbar");const burger=document.querySelector(".navbar-toggler");const burgerTarget=burger&&document.querySelector(burger.dataset.target);const navLink=document.querySelectorAll(".nav-link");const elementClickToModalOpen=document.querySelectorAll('[data-toggle="modal"][data-target],[data-toggle="modal"][href^="#"]');const elementClickToModalClose=document.querySelectorAll('[data-dismiss="modal"], .modal');burger&&burger.addEventListener("click",()=>{burgerTarget.classList.toggle("collapse");navbar.classList.toggle("navbar-transparent")});navbar&&navbar.addEventListener("click",e=>{if(e.target.classList.contains("nav-link")&&window.innerWidth<992){burgerTarget.classList.add("collapse");navbar.classList.add("navbar-transparent")}});navbar&&setTimeout(()=>{if(window.innerWidth>=992){scrollShot("20%","-120%","body",()=>navbar.classList.remove("top"),()=>undefined,()=>navbar.classList.add("top"))}else{navbar.classList.add("navbar-transparent")}},100);scrollShot("-50%","-50%","section[id],header[id]",e=>{navLink.forEach(item=>item.classList.remove("active"));const navLinkId=document.querySelector('.nav-link[href="#'+e.id+'"]');navLinkId&&navLinkId.classList.add("active")},()=>undefined,()=>undefined);elementClickToModalOpen.forEach(e=>{e.addEventListener("click",()=>{const modal=document.querySelector(e.dataset.target)||document.querySelector(e.hash);modal.classList.add("show");window.location.hash=modal.id})});if(window.location.hash){const idLikeHash=document.querySelector(window.location.hash+".modal");idLikeHash&&idLikeHash.classList.add("show")}elementClickToModalClose.forEach(e=>{e.addEventListener("click",click=>{if(click.target.classList.contains("modal")||click.target.dataset.dismiss=="modal"){const modalShow=document.querySelector(".modal.show");modalShow&&modalShow.classList.remove("show");window.history.replaceState("",document.title,window.location.origin)}})});