(function(window){var svgSprite='<svg><symbol id="icon-arrow-straight" viewBox="0 0 1024 1024"><path d="M49.5392 552.56746667h782.46186667l-199.80693334 192.34986666c-5.11466667 5.11573333-5.11466667 13.408 0 18.5248l40.13546667 40.13546667c5.11573333 5.11466667 13.408 5.11466667 18.5248 0l251.52746667-242.14506667c0.29013333-0.24426667 0.57706667-0.496 0.85013333-0.76906666l1.34293333-1.34293334 38.79146667-37.34293333c2.73813333-2.7392 3.99573333-6.38933333 3.8016-9.97546667 0.20053333-3.5936-1.05706667-7.25333333-3.79946667-9.9968l-40.13546666-38.6848c-0.2592-0.25706667-0.52906667-0.49386667-0.80213334-0.72533333l-251.57546666-242.18666667c-5.11573333-5.1168-13.408-5.1168-18.5248 0l-40.13546667 40.13546667c-5.11466667 5.11466667-5.11466667 13.40693333 0 18.5248l197.9328 190.54613333h-780.58666667c-7.2352 0-13.09866667 5.86453333-13.09866666 13.09866667v56.76053333c0 7.23306667 5.86346667 13.09866667 13.09866666 13.09866667z" fill="#ffffff" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)