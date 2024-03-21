/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",v="."+g,h="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+v,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document.body),o=e(document),t.popupsCache={}},open:function(n){var i;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var r,s=n.items;for(i=0;s.length>i;i++)if(r=s[i],r.parsed&&(r=r.el[0]),r===n.el[0]){t.index=i;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+v,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+v,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(i=0;l.length>i;i++){var c=l[i];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+v,function(e){27===e.keyCode&&t.close()}),I.on("resize"+v,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var d=t.wH=I.height(),u={};if(t.fixedContentPos&&t._hasScrollBar(d)){var m=t._getScrollbarSize();m&&(u.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=t.st.mainClass;return t.isIE7&&(g+=" mfp-ie7"),g&&t._addClassToMFP(g),t.updateItemHTML(),T("BuildControls"),e("html").css(u),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(h),t._setFocus()):t.bgOverlay.addClass(h),o.on("focusin"+v,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(d),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+h+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+v+" focusin"+v),t.ev.off(v),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i=t.items[n],o=i.type;if(i=i.tagName?{el:e(i)}:{data:i,src:i.src},i.el){for(var r=t.types,a=0;r.length>a;a++)if(i.el.hasClass("mfp-"+r[a])){o=r[a];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=o||t.st.type||"inline",i.index=n,i.parsed=!0,t.items[n]=i,T("ElementParse",i),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(v+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(v+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Veuillez patienter"}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(h)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+v)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),n.img[0].naturalWidth>0&&(n.hasSize=!0)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);

/* sol */
function show() {if ($(window).width() <= 768) {var box = {odd: $(".box .x-col:nth-child(odd):not([class*='last'])"),first: $(".box .x-col:first-of-type:not([class*='last'])"),last: $(".box .x-col:last-of-type:not([class*='last'])"),img: $('img'),screen: function() {this.odd.css("top", this.img.width() / 2);this.first.css("left", this.img.width() / 9);this.last.css("right", this.img.width() / 9);}};} else if ($(window).width() >= 768) {var box = {odd: $(".box .x-col:nth-child(odd):not([class*='last'])"),first: $(".box .x-col:first-of-type:not([class*='last'])"),last: $(".box .x-col:last-of-type:not([class*='last'])"),img: $('img'),screen: function() {this.odd.css("top", this.img.width() / 1.2);this.first.css("left", this.img.width() / 5);this.last.css("right", this.img.width() / 5);}};}box.screen();}$(window).resize(show);show(); /**/$('.rap_grat').magnificPopup({type: 'inline',items: {src: '#rapp-grat'},closeOnBgClick: false,preloader: true,modal: true,callbacks: {open: function() {$(".filter-bg").css("filter", "blur(8px)");},close: function() {$(".filter-bg").css("filter", "blur(0px)");}}});$(document).on('click', '.popup-rapp-grat-dismiss', function(e) {$.magnificPopup.close();$("#nom_prenom").removeClass("error");$("#numero_tel").removeClass("error");$('label.error').remove();$('#nom_prenom').val('');$('#numero_tel').val('');});$('.rec-form').magnificPopup({type: 'inline',items: {src: '#rec-form'},closeOnBgClick: false,preloader: true,modal: true,callbacks: {open: function() {$(".filter-bg").css("filter", "blur(8px)");},close: function() {$(".filter-bg").css("filter", "blur(0px)");}}});$(document).on('click', '.popup-rec-form-dismiss', function(e) {$.magnificPopup.close();$("#Nom").removeClass("error");$("#Prenom").removeClass("error");$("#Num_contract").removeClass("error");$("#Message_rec").removeClass("error");$('label.error').remove();$('#Nom').val('');$('#Prenom').val('');$('#Num_contract').val('');$('#Message_rec').val('');});

/* init */
!function(t){var n=function(i,o){this.$element=t(i),this.options=t.extend({},n.DEFAULTS,this.dataOptions(),o),this.init()};n.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,n){return t.toFixed(n.decimals)},onUpdate:null,onComplete:null},n.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},n.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},n=Object.keys(t);for(var i in n){var o=n[i];void 0===t[o]&&delete t[o]}return t},n.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},n.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},n.prototype.restart=function(){this.stop(),this.init(),this.start()},n.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},n.prototype.stop=function(){this.interval&&clearInterval(this.interval)},n.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(i){return this.each(function(){var o=t(this),e=o.data("countTo"),a="object"==typeof i?i:{},s="string"==typeof i?i:"start";e&&"object"!=typeof i||(e&&e.stop(),o.data("countTo",e=new n(this,a))),e[s].call(e)})}}(jQuery),function(t){"use strict";void 0!==info.PluginValidation&&info.PluginValidation.initialize()}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginAnimate)&&t(function(){t("[data-appear-animation]").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginAnimate(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginAnimatedLetters)&&t(function(){t("[data-plugin-animated-letters]:not(.manual), .animated-letters").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginAnimatedLetters(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginBeforeAfter)&&t(function(){t("[data-plugin-before-after]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginBeforeAfter(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginCarousel)&&t(function(){t("[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),t("body[data-loading-overlay]").get(0)?t(window).on("loading.overlay.ready",function(){i.infoPluginCarousel(n)}):i.infoPluginCarousel(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginCounter)&&t(function(){t("[data-plugin-counter]:not(.manual), .counters [data-to]").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginCounter(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginFloatElement)&&t(function(){t("[data-plugin-float-element]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginFloatElement(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginIcon)&&t(document).ready(function(){t(function(){t("[data-icon]:not(.svg-inline--fa)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginIcon(n)})})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginLazyLoad)&&t(function(){t("[data-plugin-lazyload]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginLazyLoad(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginLightbox)&&t(function(){t("[data-plugin-lightbox]:not(.manual), .lightbox:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginLightbox(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.nanoScroller)&&t(function(){t("[data-plugin-scrollable]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginScrollable(i)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginSectionScroll)&&t(function(){t("[data-plugin-section-scroll]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginSectionScroll(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginSticky)&&t(function(){t("[data-plugin-sticky]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginSticky(n)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.infoPluginToggle)&&t(function(){t("[data-plugin-toggle]:not(.manual)").each(function(){var n,i=t(this),o=info.fn.getOptions(i.data("plugin-options"));o&&(n=o),i.infoPluginToggle(n)})})}.apply(this,[jQuery]),function(t){"use strict";void 0!==info.StickyHeader&&info.StickyHeader.initialize(),void 0!==info.Nav&&info.Nav.initialize(),void 0!==info.Newsletter&&info.Newsletter.initialize()}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.bootstrapDP)&&t(function(){t("[data-plugin-datepicker]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginDatePicker(i)})})}.apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.mask)&&t(function(){t("[data-plugin-masked-input]").each(function(){var n=t(this),i={},o=n.data("plugin-options");o&&(i=o),n.infoPluginMaskedInput(i)})})}.apply(this,[jQuery]);

/* Charger plus avis */
$(".voir-plus").click(function(){var i=Number($("#line").val()),l=Number($("#tous").val());(i+=6)<=l?($("#line").val(i),$.ajax({url:"./Actions/Charger-avis.html",type:"post",data:{row:i},beforeSend:function(){$(".voir-plus").html('<div class="bounce-loader t-auto"><div class="bounce1"></div><div class="bounce2"></div></div>')},success:function(s){setTimeout(function(){$(".avis:last").after(s).show().fadeIn("slow"),i+6>=l?$(".voir-plus").html(""):$(".voir-plus").html('<label class="btn btn-tertiary btn-rounded font-weight-bold btn-px-4 py-2 text-3 button button-mat btn--5"><div class="psuedo-text">Afficher la suite</div></label>')},2e3)}})):($(".voir-plus").html('<div class="bounce-loader t-auto"><div class="bounce1"></div><div class="bounce2"></div></div>'),setTimeout(function(){$(".avis:nth-child(3)").nextAll(".avis").remove(),$("#line").val(0),$(".voir-plus").html('<label class="btn btn-tertiary btn-rounded font-weight-bold btn-px-4 py-2 text-3 button button-mat btn--5"><div class="psuedo-text">Afficher la suite</div></label>')},2e3))});

/* Slider */
var autoSlideTimeout,$slider=$(".slider"),$slideBGs=$(".slide-bg"),diff=0,curSlide=0,numOfSlides=$(".slide").length-1,animating=!1,animTime=500,autoSlideDelay=6e3,$pagination=$(".slider-pagi");function createBullets(){for(var i=0;i<numOfSlides+1;i++){var e=$("<li class='slider-page-sl'></li>");e.addClass("slider-page-sl-"+i).data("page",i),i||e.addClass("active"),$pagination.append(e)}}function manageControls(){$(".slider-control").removeClass("inactive"),curSlide||$(".slider-control.left").addClass("inactive"),curSlide===numOfSlides&&$(".slider-control.right").addClass("inactive")}function autoSlide(){autoSlideTimeout=setTimeout(function(){++curSlide>numOfSlides&&(curSlide=0),changeSlides()},autoSlideDelay)}function changeSlides(i){i||(animating=!0,manageControls(),$slider.addClass("animating"),$slider.css("top"),$(".slide").removeClass("active"),$(".slide-"+curSlide).addClass("active"),setTimeout(function(){$slider.removeClass("animating"),animating=!1},animTime)),window.clearTimeout(autoSlideTimeout),$(".slider-page-sl").removeClass("active"),$(".slider-page-sl-"+curSlide).addClass("active"),$slider.css("transform","translate3d("+100*-curSlide+"%,0,0)"),$slideBGs.css("transform","translate3d("+50*curSlide+"%,0,0)"),diff=0,autoSlide()}function navigateLeft(){animating||(curSlide>0&&curSlide--,changeSlides())}function navigateRight(){animating||(curSlide<numOfSlides&&curSlide++,changeSlides())}createBullets(),autoSlide(),$(document).on("mousedown touchstart",".slider",function(i){if(!animating){window.clearTimeout(autoSlideTimeout);var e=i.pageX||i.originalEvent.touches[0].pageX,a=$(window).width();diff=0,$(document).on("mousemove touchmove",function(i){var d=i.pageX||i.originalEvent.touches[0].pageX;diff=(e-d)/a*70,(!curSlide&&diff<0||curSlide===numOfSlides&&diff>0)&&(diff/=2),$slider.css("transform","translate3d("+(100*-curSlide-diff)+"%,0,0)"),$slideBGs.css("transform","translate3d("+(50*curSlide+diff/2)+"%,0,0)")})}}),$(document).on("mouseup touchend",function(i){$(document).off("mousemove touchmove"),animating||(diff?diff>-8&&diff<8?changeSlides():(diff<=-8&&navigateLeft(),diff>=8&&navigateRight()):changeSlides(!0))}),$(document).on("click",".slider-control",function(){$(this).hasClass("left")?navigateLeft():navigateRight()}),$(document).on("click",".slider-page-sl",function(){curSlide=$(this).data("page"),changeSlides()});

$("#form2").validate({
    rules: {
        numero_tel: {
            required: true,
            maxlength: 20
        }
    },
    messages: {
        numero_tel: {
            required: "- Veuillez saisir votre numéro de téléphone.",
            maxlength: "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères."
        }
    },
    submitHandler: function (form, event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url:$("#form2").attr('action'),
        data:$("#form2").serialize(),
        success:function(d) {
            $('#rapp-grat').children('#form_dem_content').hide();
            $('.title-rapp').text('Demande de rappel bien enregistrée.');
            if($('#rapp-grat').length) {
            $('#rapp-grat').append('<div class="row p-3"><div class="col-md-6"><div id="form_hr_rapp" class="text-color-white text-3-4 text-center mb-5"><h3 class="text-left font-weight-bold text-success line-height-2 text-7-8 pt-5">DEMANDE DE RAPPEL BIEN ENREGISTRÉE.</h3><div class="text-left"><p class="text-success">Nous vous rappelons dans quelques instants.</p><p class="text-success">Merci pour votre confiance.</p><a href="./index.html" class="btn btn-dark btn-xs border-radius font-weight-bold text-4 outline-none p-2 pl-5 pr-5 m-auto mb-5 mt-5 w-100">PAGE D’ACCUEIL</a></div></div></div><div class="col-md-6"></div></div>');
            }
            $('#numero_tel').val('');
            $("#form2 #g-recaptcha-checker").val("");
        },
        error:function(d) {
            $('#rapp-grat').children('#form_dem_content').hide();
            $('.title-rapp').text('Une erreur est survenue. veuillez réessayer plus tard.');
            $('#numero_tel').val('');
            $("#form2 #g-recaptcha-checker").val("");
        }
    });
    }
});

$(document).on('click', '.popup-rapp-grat-dismiss', function(e) {
    $.magnificPopup.close();
    $('.title-rapp').text('Veuillez saisir votre numéro de téléphone');
    $('#rapp-grat').children('#form_dem_content').show();
    $('#numero_tel').val('');
    if ($('#form_hr_rapp').length) {
        $('#rapp-grat').children('#form_hr_rapp').remove();
    }
});

$(function () {

    $("#toggle").click(function(){
      $(".togg").show();
      $("#toggle").hide(); 
    });

    // $('input[type=radio][name=mode_rappel]').change(function() {
    //     if (this.value == 'Tel') {
    //         $('#CommentaireTxt').val('Mode de rappel : Téléphone');
    //     }
    //     else if (this.value == 'Email') {
    //         $('#CommentaireTxt').val('Mode de rappel : Email');
    //     }
    // });

});

/* cb */

$(document).on("click", ".rap_grat_cb", function(e) {
    $.magnificPopup.open({
        type: "inline",
        items: { src: "#rapp-grat" },
        closeOnBgClick: !1,
        preloader: !0,
        modal: !0,
        callbacks: {
            open: function() {
                $(".filter-bg").css("filter", "blur(8px)");
            },
            close: function() {
                $(".filter-bg").css("filter", "blur(0px)");
            },
        },
    });
});

(function ($) {
    $.extend({
        playSound: function () {
            return $(
                   '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                     + '<source src="' + arguments[0] + '" />'
                     + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                   + '</audio>'
                 ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);

$(document).ready(function() {

    window.bot_response = {
       offset: -1
    };

    $.fn.chatbot_form = function() {
        var message = $("#message").val();

       if (message == '') return;

       $('.form').append('<div class="user-inbox inbox"><div class="v-cb">Vous</div><div class="msg-header"><p>' + message + '</p></div></div>');

       $(".form").scrollTop($(".form")[0].scrollHeight);

       $('#message').val('');
       
       $.playSound(window.location.origin + '/Template/chatbot-snd.mp3');

       $.ajax({
        type: 'POST',
        url: window.location.origin + '/Actions/Chatbot.html',
        data: { text:message },
        dataType: 'json',
        cache:false,
        success: function (data) {
            if(data.length == 1) {
            $.each(data, function(i, item) {

                if(typeof item.ans !== 'undefined' && item.ans != '') {
                    setTimeout(
                        function() 
                        {
                    $('.typ_dots').show();
                }, 1000);
                    setTimeout(
                        function() 
                        {
                    replay = '<div class="bot-inbox inbox"><div class="icon"><img src="'+ window.location.origin + '/Template/Images/logo.webp" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ans + '</p></div></div>';
                    
                    $('.form').append(replay);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                    $('.typ_dots').hide();
                    $.playSound(window.location.origin + '/Template/chatbot-res.wav');
                }, 3000);
                }

                setTimeout(
                    function() 
                    {
                if(typeof item.ex_ans !== 'undefined' && item.ex_ans != '') {
                    setTimeout(
                        function() 
                        {
                    $('.typ_dots').show();
                }, 1000);
                    setTimeout(
                        function() 
                        {
                    replay_ex = '<div class="bot-inbox inbox"><div class="icon"><img src="'+ window.location.origin + '/Template/Images/logo.webp" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ex_ans + '</p></div></div>';
       
                    $('.form').append(replay_ex);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                    $('.typ_dots').hide();
                    $.playSound(window.location.origin + '/Template/chatbot-res.wav');
                }, 3000);
                }
            }, 5000);
            });
            }
        }
    });
      }

    $("#send-btn").on("click", function() {
        $.fn.chatbot_form();
    });

    $('#message').keypress(function (e) {
        if (e.which == 13) {
            $.fn.myFunction();
        }
      });

    $(document).on('click', '.ans-btn', function() {

       var message = $(this).text();

       if (message == '') return;

       $('.form').append('<div class="user-inbox inbox"><div class="v-cb">Vous</div><div class="msg-header"><p>' + message + '</p></div></div>');

       $(".form").scrollTop($(".form")[0].scrollHeight);

       $('#message').val('');

       $.playSound(window.location.origin + '/Template/chatbot-snd.mp3');

          $.ajax({
            type: 'POST',
            url: window.location.origin + '/Actions/Chatbot.html',
            data: { text:message },
            dataType: 'json',
            cache:false,
           success: function (data) {
                if(data.length == 1) {
                $.each(data, function(i, item) {

                    if(typeof item.ans !== 'undefined' && item.ans != '') {
                        setTimeout(
                            function() 
                            {
                        $('.typ_dots').show();
                    }, 1000);
                        setTimeout(
                            function() 
                            {
                        replay = '<div class="bot-inbox inbox"><div class="icon"><img src="'+ window.location.origin +'/Template/Images/logo.webp" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ans + '</p></div></div>';
           
                        $('.form').append(replay);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                        $('.typ_dots').hide();
                        $.playSound(window.location.origin + '/Template/chatbot-res.wav');
                    }, 3000);
                    }

                    setTimeout(
                        function() 
                        {
                    if(typeof item.ex_ans !== 'undefined' && item.ex_ans != '') {
                        setTimeout(
                            function() 
                            {
                        $('.typ_dots').show();
                    }, 1000);
                        setTimeout(
                            function() 
                            {
                        replay_ex = '<div class="bot-inbox inbox"><div class="icon"><img src="'+ window.location.origin +'/Template/Images/logo.webp" class="img-fluid" alt=""></div><div class="msg-header"><p>' + item.ex_ans + '</p></div></div>';
           
                        $('.form').append(replay_ex);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                        $('.typ_dots').hide();
                        $.playSound(window.location.origin + '/Template/chatbot-res.wav');
                    }, 3000);
                    }
                }, 5000);
                });
                }
            }
        });
    });

    $('input[name="autres_points"]:radio').change(function () {
        var radio_value = ($('input:radio[name="autres_points"]:checked').val());
        if (radio_value == 'Oui') {
            $('#autres_points_inp').show();
        }
        else if (radio_value == 'Non') {
            $('#autres_points_inp').hide();
            $("#autres_points_address").val('');
            $("#autres_points_address_2").val('');
            $("#autres_points_code_postal").val('');
            $("#autres_points_ville").val('');
            $("#autres_points_pays").val('');
            $('#autres_points_type_age').prop('checked', false);
            $('#autres_points_type_plat').prop('checked', false);

            $("#autres_points_address").removeClass('error');
            $("#autres_points_address_2").removeClass('error');
            $("#autres_points_code_postal").removeClass('error');
            $("#autres_points_ville").removeClass('error');
            $("#autres_points_pays").removeClass('error');

            $("#autres_points_inp label.error").remove();
        }
    });

    $('.btn-inp-file').change(function() {
        $(this).valid();
      });

    
});

var recaptcha1;
var recaptcha2;
var recaptcha3;

/* Recap */

function captchaCallback() {
    if ($('#g-captcha-f-1').length) {
        recaptcha1 = grecaptcha.render('g-captcha-f-1', { 'sitekey': '6LcQcCEoAAAAAEoC35LMOWMklIbzq_n3i69NGVII', 'callback': 'form1Callback', 'expired-callback': 'recaptcha1Expired', 'size': 'visible' });
    }
    if ($('#g-captcha-f-2').length) {
        recaptcha2 = grecaptcha.render('g-captcha-f-2', { 'sitekey': '6LcQcCEoAAAAAEoC35LMOWMklIbzq_n3i69NGVII', 'callback': 'form2Callback', 'expired-callback': 'recaptcha2Expired', 'size': 'visible' });
    }
	if ($('#g-captcha-f-3').length) {
        recaptcha3 = grecaptcha.render('g-captcha-f-3', { 'sitekey': '6LcQcCEoAAAAAEoC35LMOWMklIbzq_n3i69NGVII', 'callback': 'form3Callback', 'expired-callback': 'recaptcha3Expired', 'size': 'visible' });
    }
}

window.captchaCallback = captchaCallback;

window.form1Callback = function () {
    $("#form1 #g-recaptcha-checker").val('checked');
    jQuery("#form1").valid();
};

window.form2Callback = function () {
    $("#form2 #g-recaptcha-checker").val('checked');
    jQuery("#form2").valid();
};

window.form3Callback = function () {
    $("#form3 #g-recaptcha-checker").val('checked');
    jQuery("#form3").valid();
};

window.recaptcha1Expired = function () {
    $("#form1 #g-recaptcha-checker").val("");
}

window.recaptcha2Expired = function () {
    $("#form2 #g-recaptcha-checker").val("");
}

window.recaptcha3Expired = function () {
    $("#form3 #g-recaptcha-checker").val("");
}

$('#newsletterEmail').keyup(function() {
    if ($(this).val().length == 0) {
      $('#nl-captcha').hide();
    } else {
      $('#nl-captcha').show();
    }
}).keyup();

/* */

$("#form3").validate({
    rules: {
        newsletterEmail: {
            required: !0,
            email: !0
        }
    },
    messages: {
        numero_tel: {
            required: "- Veuillez saisir votre numéro de téléphone.",
            maxlength: "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères."
        }
    },
    submitHandler: function (form, event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: $("#form3").attr('action'),
        data: $("#form3").serialize(),
        dataType: "json",
        success: function(t) {
            $("body").removeClass("loading-overlay-showing"), "success" == t.response ? ($("#newsletterSuccess").removeClass("d-none"), $("#newsletterError").addClass("d-none"),$("#form3 #g-recaptcha-checker").val(""),$('#nl-captcha').hide(), $("#newsletterEmail").val("").blur().closest(".control-group").removeClass("success").removeClass("error"), $("#newsletterEmail").removeClass("is-invalid")) : ($("#newsletterError").html(t.message), $("#newsletterError").removeClass("d-none"), $("#newsletterSuccess").addClass("d-none"), $("#newsletterEmail").blur().closest(".control-group").removeClass("success").addClass("error"));
            grecaptcha.reset(recaptcha3);
        }
    });
    }, 
    errorPlacement: function(a, e) {
        "file" == e.attr("type") ? (a.appendTo(e.closest(".form-file")),e.closest(".container-file").addClass("file-error")) : "radio" == e.attr("type") || "checkbox" == e.attr("type") || "file" == e.attr("type") ? a.appendTo(e.closest(".form-group")) : e.is("select") && e.closest(".custom-select-1") ? a.appendTo(e.closest(".form-group")) : e.is(".no-msg") || a.insertAfter(e)
    }
});

/* -- -- */

function sh_conj() {
    $(".conjoint-elm").show();
    if ($('#CatSocialeConjoint-error').length) {
        $("#CatSocialeConjoint-error").show();
    }
    if ($('#DateNaissCojoint-error').length) {
        $("#DateNaissCojoint-error").show();
    }
}

function hd_conj() {
    $(".conjoint-elm").hide();
    $("input[name*='DateNaissCojoint']").val('');
    $("select[name*='CatSocialeConjoint']").val('');
    if ($('#CatSocialeConjoint-error').length) {
        $("#CatSocialeConjoint-error").hide();
    }
    if ($('#DateNaissCojoint-error').length) {
        $("#DateNaissCojoint-error").hide();
    }
}

function sh_enft() {
    $(".enf-elm").show();
    if ($('#NbrEnfants-error').length) {
        $("#NbrEnfants-error").show();
    }
}

function hd_enft() {
    $(".enf-elm").hide();
    $("select[name*='NbrEnfants']").val('');
    if ($('#NbrEnfants-error').length) {
        $("#NbrEnfants-error").hide();
    }
}


$(".stars").each(function() {
    $(this).click(function() {
        var url_l = new URL(window.location.href);
        url_l.searchParams.set('star', $(this).val());;
        window.history.pushState({}, document.title, url_l);
        window.location.href = url_l;
    });
});

$(".type").each(function() {
    $(this).click(function() {
        var val = $(this).attr("data-value");
        var url_l = new URL(window.location.href);
        url_l.searchParams.set('type', val);;
        window.history.pushState({}, document.title, url_l);
        window.location.href = url_l;
    });
});

$('#TriLbl').on('change', function(e) {
    var url_l = new URL(window.location.href);
    url_l.searchParams.set('tri', $(this).val());;
    window.history.pushState({}, document.title, url_l);
    window.location.href = url_l;
});