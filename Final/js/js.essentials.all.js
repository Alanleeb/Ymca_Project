//////////////////////////////////
// FILECONTAINS:
//////////////////////////////////
/*
    - Foundation.min.js - Includes Foudation Topbar.js & Foundation Interchange.js
    - SlickNav.js
    - ToggleVal.js
    - HoverIntent.js
    - Superfish.js
    - FlexSlider.js
*/




//////////////////////////////////
// FOUNDATION 5.5 foundation.js
//////////////////////////////////
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,i,s){"use strict";function n(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}function a(t){this.selector=t,this.query=""}var o=function(e){var i=t("head");i.prepend(t.map(e,function(t){return 0===i.has("."+t).length?'<meta class="'+t+'" />':void 0}))};o(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof i.body&&FastClick.attach(i.body)});var r=function(e,s){if("string"==typeof e){if(s){var n;if(s.jquery){if(n=s[0],!n)return s}else n=s;return t(n.querySelectorAll(e))}return t(i.querySelectorAll(e))}return t(e,s)},l=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},d=function(t){for(var e=t.split("-"),i=e.length,s=[];i--;)0!==i?s.push(e[i]):this.namespace.length>0?s.push(this.namespace,e[i]):s.push(e[i]);return s.reverse().join("-")},c=function(e,i){var s=this,n=function(){var n=r(this),a=!n.data(s.attr_name(!0)+"-init");n.data(s.attr_name(!0)+"-init",t.extend({},s.settings,i||e,s.data_options(n))),a&&s.events(this)};return r(this.scope).is("["+this.attr_name()+"]")?n.call(this.scope):r("["+this.attr_name()+"]",this.scope).each(n),"string"==typeof e?this[e].call(this,i):void 0},h=function(t,e){function i(){e(t[0])}function s(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?i():s.call(t)):void i()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
e.matchMedia||(e.matchMedia=function(){var t=e.styleMedia||e.media;if(!t){var s=i.createElement("style"),n=i.getElementsByTagName("script")[0],a=null;s.type="text/css",s.id="matchmediajs-test",n.parentNode.insertBefore(s,n),a="getComputedStyle"in e&&e.getComputedStyle(s,null)||s.currentStyle,t={matchMedium:function(t){var e="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return s.styleSheet?s.styleSheet.cssText=e:s.textContent=e,"1px"===a.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(t){function i(){s&&(o(i),l&&t.fx.tick())}for(var s,n=0,a=["webkit","moz"],o=e.requestAnimationFrame,r=e.cancelAnimationFrame,l="undefined"!=typeof t.fx;n<a.length&&!o;n++)o=e[a[n]+"RequestAnimationFrame"],r=r||e[a[n]+"CancelAnimationFrame"]||e[a[n]+"CancelRequestAnimationFrame"];o?(e.requestAnimationFrame=o,e.cancelAnimationFrame=r,l&&(t.fx.timer=function(e){e()&&t.timers.push(e)&&!s&&(s=!0,i())},t.fx.stop=function(){s=!1})):(e.requestAnimationFrame=function(t){var i=(new Date).getTime(),s=Math.max(0,16-(i-n)),a=e.setTimeout(function(){t(i+s)},s);return n=i+s,a},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(t),a.prototype.toString=function(){return this.query||(this.query=r(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},e.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new a(".foundation-mq-small"),"small-only":new a(".foundation-mq-small-only"),medium:new a(".foundation-mq-medium"),"medium-only":new a(".foundation-mq-medium-only"),large:new a(".foundation-mq-large"),"large-only":new a(".foundation-mq-large-only"),xlarge:new a(".foundation-mq-xlarge"),"xlarge-only":new a(".foundation-mq-xlarge-only"),xxlarge:new a(".foundation-mq-xxlarge")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:s},init:function(t,i,s,n,a){var o=[t,s,n,a],l=[];if(this.rtl=/rtl/i.test(r("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),i&&"string"==typeof i&&!/reflow/i.test(i))this.libs.hasOwnProperty(i)&&l.push(this.init_lib(i,o));else for(var d in this.libs)l.push(this.init_lib(d,i));return r(e).load(function(){r(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,i){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),i&&i.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,i[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,i[e]),this.libs[e].init.apply(this.libs[e],[this.scope,i[e]])):(i=i instanceof Array?i:new Array(i),this.libs[e].init.apply(this.libs[e],i))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=l,t.add_namespace=d,t.bindings=c,t.S=this.utils.S},inherit:function(t,e){for(var i=e.split(" "),s=i.length;s--;)this.utils.hasOwnProperty(i[s])&&(t[i[s]]=this.utils[i[s]])},set_namespace:function(){var e=this.global.namespace===s?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===s||/false/i.test(e)?"":e},libs:{},utils:{S:r,throttle:function(t,e){var i=null;return function(){var s=this,n=arguments;null==i&&(i=setTimeout(function(){t.apply(s,n),i=null},e))}},debounce:function(t,e,i){var s,n;return function(){var a=this,o=arguments,r=function(){s=null,i||(n=t.apply(a,o))},l=i&&!s;return clearTimeout(s),s=setTimeout(r,e),l&&(n=t.apply(a,o)),n}},data_options:function(e,i){function s(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function n(e){return"string"==typeof e?t.trim(e):e}i=i||"options";var a,o,r,l={},d=function(t){var e=Foundation.global.namespace;return t.data(e.length>0?e+"-"+i:i)},c=d(e);if("object"==typeof c)return c;for(r=(c||":").split(";"),a=r.length;a--;)o=r[a].split(":"),o=[o[0],o.slice(1).join(":")],/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),s(o[1])&&(o[1]=-1===o[1].indexOf(".")?parseInt(o[1],10):parseFloat(o[1])),2===o.length&&o[0].length>0&&(l[n(o[0])]=n(o[1]));return l},register_media:function(e,i){Foundation.media_queries[e]===s&&(t("head").append('<meta class="'+i+'"/>'),Foundation.media_queries[e]=n(t("."+i).css("font-family")))},add_custom_rule:function(t,e){if(e===s&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[e];i!==s&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(t,e){function i(t){for(var e=t.length,i=e-1;i>=0;i--)if(t.attr("height")===s)return!1;return!0}var n=this,a=t.length;(0===a||i(t))&&e(t),t.each(function(){h(n.S(this),function(){a-=1,0===a&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(t){return e.matchMedia(t).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.3",settings:{start:0,end:100,step:1,precision:2,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(t,e,i){Foundation.inherit(this,"throttle"),this.bindings(e,i),this.reflow()},events:function(){var i=this;t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+i.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(e){i.cache.active||(e.preventDefault(),i.set_active_slider(t(e.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(s){if(i.cache.active)if(s.preventDefault(),t.data(i.cache.active[0],"settings").vertical){var n=0;s.pageY||(n=e.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(s,"y")+n)}else i.calculate_position(i.cache.active,i.get_cursor_position(s,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(s){if(!i.cache.active){var n="slider"===t(s.target).attr("role")?t(s.target):t(s.target).closest(".range-slider").find("[role='slider']");if(n.length&&!n.parent().hasClass("disabled")&&!n.parent().attr("disabled"))if(i.set_active_slider(n),t.data(i.cache.active[0],"settings").vertical){var a=0;s.pageY||(a=e.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(s,"y")+a)}else i.calculate_position(i.cache.active,i.get_cursor_position(s,"x"))}i.remove_active_slider()}).on("change.fndtn.slider",function(){i.settings.on_change()}),i.S(e).on("resize.fndtn.slider",i.throttle(function(){i.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var e=t(this),s=e.children(".range-slider-handle")[0],n=i.initialize_settings(s);""!=n.display_selector&&t(n.display_selector).each(function(){t(this).attr("value")&&t(this).off("change").on("change",function(){e.foundation("slider","set_value",t(this).val())})})})},get_cursor_position:function(t,e){var i,s="page"+e.toUpperCase(),n="client"+e.toUpperCase();return"undefined"!=typeof t[s]?i=t[s]:"undefined"!=typeof t.originalEvent[n]?i=t.originalEvent[n]:t.originalEvent.touches&&t.originalEvent.touches[0]&&"undefined"!=typeof t.originalEvent.touches[0][n]?i=t.originalEvent.touches[0][n]:t.currentPoint&&"undefined"!=typeof t.currentPoint[e]&&(i=t.currentPoint[e]),i},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(e,i){var s=this,n=t.data(e[0],"settings"),a=(t.data(e[0],"handle_l"),t.data(e[0],"handle_o"),t.data(e[0],"bar_l")),o=t.data(e[0],"bar_o");requestAnimationFrame(function(){var t;t=Foundation.rtl&&!n.vertical?s.limit_to((o+a-i)/a,0,1):s.limit_to((i-o)/a,0,1),t=n.vertical?1-t:t;var r=s.normalized_value(t,n.start,n.end,n.step,n.precision);s.set_ui(e,r)})},set_ui:function(e,i){var s=t.data(e[0],"settings"),n=t.data(e[0],"handle_l"),a=t.data(e[0],"bar_l"),o=this.normalized_percentage(i,s.start,s.end),r=o*(a-n)-1,l=100*o,d=e.parent(),c=e.parent().children("input[type=hidden]");Foundation.rtl&&!s.vertical&&(r=-r),r=s.vertical?-r+a-n+1:r,this.set_translate(e,r,s.vertical),s.vertical?e.siblings(".range-slider-active-segment").css("height",l+"%"):e.siblings(".range-slider-active-segment").css("width",l+"%"),d.attr(this.attr_name(),i).trigger("change.fndtn.slider"),c.val(i),s.trigger_input_change&&c.trigger("change.fndtn.slider"),e[0].hasAttribute("aria-valuemin")||e.attr({"aria-valuemin":s.start,"aria-valuemax":s.end}),e.attr("aria-valuenow",i),""!=s.display_selector&&t(s.display_selector).each(function(){this.hasAttribute("value")?t(this).val(i):t(this).text(i)})},normalized_percentage:function(t,e,i){return Math.min(1,(t-e)/(i-e))},normalized_value:function(t,e,i,s,n){var a=i-e,o=t*a,r=(o-o%s)/s,l=o%s,d=l>=.5*s?s:0;return(r*s+d+e).toFixed(n)},set_translate:function(e,i,s){s?t(e).css("-webkit-transform","translateY("+i+"px)").css("-moz-transform","translateY("+i+"px)").css("-ms-transform","translateY("+i+"px)").css("-o-transform","translateY("+i+"px)").css("transform","translateY("+i+"px)"):t(e).css("-webkit-transform","translateX("+i+"px)").css("-moz-transform","translateX("+i+"px)").css("-ms-transform","translateX("+i+"px)").css("-o-transform","translateX("+i+"px)").css("transform","translateX("+i+"px)")},limit_to:function(t,e,i){return Math.min(Math.max(t,e),i)},initialize_settings:function(e){var i,s=t.extend({},this.settings,this.data_options(t(e).parent()));return null===s.precision&&(i=(""+s.step).match(/\.([\d]*)/),s.precision=i&&i[1]?i[1].length:0),s.vertical?(t.data(e,"bar_o",t(e).parent().offset().top),t.data(e,"bar_l",t(e).parent().outerHeight()),t.data(e,"handle_o",t(e).offset().top),t.data(e,"handle_l",t(e).outerHeight())):(t.data(e,"bar_o",t(e).parent().offset().left),t.data(e,"bar_l",t(e).parent().outerWidth()),t.data(e,"handle_o",t(e).offset().left),t.data(e,"handle_l",t(e).outerWidth())),t.data(e,"bar",t(e).parent()),t.data(e,"settings",s)},set_initial_position:function(e){var i=t.data(e.children(".range-slider-handle")[0],"settings"),s="number"!=typeof i.initial||isNaN(i.initial)?Math.floor(.5*(i.end-i.start)/i.step)*i.step+i.start:i.initial,n=e.children(".range-slider-handle");this.set_ui(n,s)},set_value:function(e){var i=this;t("["+i.attr_name()+"]",this.scope).each(function(){t(this).attr(i.attr_name(),e)}),t(this.scope).attr(i.attr_name())&&t(this.scope).attr(i.attr_name(),e),i.reflow()},reflow:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var i=t(this).children(".range-slider-handle")[0],s=t(this).attr(e.attr_name());e.initialize_settings(i),s?e.set_ui(t(i),parseFloat(s)):e.set_initial_position(t(this))})}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.3",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(e,i,s){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||t.extend({},this.defaults,s||i),this.bindings(i,s)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var i=this;t(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(t){t.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(t){t.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(t){if(this.settings.keyboard&&this.settings.riding)switch(t.which){case 39:t.preventDefault(),this.go_next();break;case 37:t.preventDefault(),this.go_prev();break;case 27:t.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),t(e).off(".joyride").on("resize.fndtn.joyride",i.throttle(function(){if(t("["+i.attr_name()+"]").length>0&&i.settings.$next_tip&&i.settings.riding){if(i.settings.exposed.length>0){var e=t(i.settings.exposed);e.each(function(){var e=t(this);i.un_expose(e),i.expose(e)})}i.is_phone()?i.pos_phone():i.pos_default(!1)}},100))},start:function(){var e=this,i=t("["+this.attr_name()+"]",this.scope),s=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],n=s.length;!i.length>0||(this.settings.init||this.events(),this.settings=i.data(this.attr_name(!0)+"-init"),this.settings.$content_el=i,this.settings.$body=t(this.settings.tip_container),this.settings.body_offset=t(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof t.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!t.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(i){var a=t(this);this.settings=t.extend({},e.defaults,e.data_options(a));for(var o=n;o--;)e.settings[s[o]]=parseInt(e.settings[s[o]],10);e.create({$li:a,index:i})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(e){var i,s;return e.tip_class=e.tip_class||"",i=t(this.settings.template.tip).addClass(e.tip_class),s=t.trim(t(e.li).html())+this.prev_button_text(e.prev_button_text,e.index)+this.button_text(e.button_text)+this.settings.template.link+this.timer_instance(e.index),i.append(t(this.settings.template.wrapper)),i.first().attr(this.add_namespace("data-index"),e.index),t(".joyride-content-wrapper",i).append(s),i[0]},timer_instance:function(e){var i;return i=0===e&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":t(this.settings.template.timer)[0].outerHTML},button_text:function(e){return this.settings.tip_settings.next_button?(e=t.trim(e)||"Next",e=t(this.settings.template.button).append(e)[0].outerHTML):e="",e},prev_button_text:function(e,i){return this.settings.tip_settings.prev_button?(e=t.trim(e)||"Previous",e=0==i?t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML:t(this.settings.template.prev_button).append(e)[0].outerHTML):e="",e},create:function(e){this.settings.tip_settings=t.extend({},this.settings,this.data_options(e.$li));var i=e.$li.attr(this.add_namespace("data-button"))||e.$li.attr(this.add_namespace("data-text")),s=e.$li.attr(this.add_namespace("data-button-prev"))||e.$li.attr(this.add_namespace("data-prev-text")),n=e.$li.attr("class"),a=t(this.tip_template({tip_class:n,index:e.index,button_text:i,prev_button_text:s,li:e.$li}));t(this.settings.tip_container).append(a)},show:function(e,i){var n=null;if(this.settings.$li===s||-1===t.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(e,i),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(e&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=t.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)&&!this.settings.expose){var a=t(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?a.hide():a.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(e,i):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||t(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(t.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(t,e){t?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=e?this.settings.$li.prev():this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=t(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var e=this.settings.$li.attr(this.add_namespace("data-class")),s=this.settings.$li.attr(this.add_namespace("data-id")),n=function(){return s?t(i.getElementById(s)):e?t("."+e).first():t("body")};this.settings.$target=n()},scroll_to:function(){var i,s;i=t(e).height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),0!=s&&t("html, body").stop().animate({scrollTop:s},this.settings.scroll_speed,"swing")},paused:function(){return-1===t.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=s,this.show("init")},pos_default:function(t){var e=this.settings.$next_tip.find(".joyride-nub"),i=Math.ceil(e.outerWidth()/2),s=Math.ceil(e.outerHeight()/2),n=t||!1;if(n&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(e);else{var a=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,o=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight()+a,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+o}:{top:this.settings.$target.offset().top+s+this.settings.$target.outerHeight()+a,left:this.settings.$target.offset().left+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"top")):this.top()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s+a,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}:{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-s+a,left:this.settings.$target.offset().left+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+a,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+i+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+a,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-i+o}),this.nub_position(e,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}n&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(e){var i=this.settings.$next_tip.outerHeight(),s=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),n=t(".joyride-nub",this.settings.$next_tip),a=Math.ceil(n.outerHeight()/2),o=e||!1;n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),o&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(n):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-i-a}),n.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+s+a}),n.addClass("top")),o&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(t){this.center(),t.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var e=t(".joyride-modal-bg");if(e.length<1){var e=t(this.settings.template.modal);e.appendTo("body")}/pop/i.test(this.settings.tip_animation)?e.show():e.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var i,s,n,a,o,r="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof t)n=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;n=this.settings.$target}return n.length<1?(e.console&&console.error("element not valid",n),!1):(i=t(this.settings.template.expose),this.settings.$body.append(i),i.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),s=t(this.settings.template.expose_cover),a={zIndex:n.css("z-index"),position:n.css("position")},o=null==n.attr("class")?"":n.attr("class"),n.css("z-index",parseInt(i.css("z-index"))+1),"static"==a.position&&n.css("position","relative"),n.data("expose-css",a),n.data("orig-class",o),n.attr("class",o+" "+this.settings.expose_add_class),s.css({top:n.offset().top,left:n.offset().left,width:n.outerWidth(!0),height:n.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(s),i.addClass(r),s.addClass(r),n.data("expose",r),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,n),void this.add_exposed(n))},un_expose:function(){var i,s,n,a,o,r=!1;if(arguments.length>0&&arguments[0]instanceof t)s=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;s=this.settings.$target}return s.length<1?(e.console&&console.error("element not valid",s),!1):(i=s.data("expose"),n=t("."+i),arguments.length>1&&(r=arguments[1]),r===!0?t(".joyride-expose-wrapper,.joyride-expose-cover").remove():n.remove(),a=s.data("expose-css"),"auto"==a.zIndex?s.css("z-index",""):s.css("z-index",a.zIndex),a.position!=s.css("position")&&("static"==a.position?s.css("position",""):s.css("position",a.position)),o=s.data("orig-class"),s.attr("class",o),s.removeData("orig-classes"),s.removeData("expose"),s.removeData("expose-z-index"),void this.remove_exposed(s))},add_exposed:function(e){this.settings.exposed=this.settings.exposed||[],e instanceof t||"object"==typeof e?this.settings.exposed.push(e[0]):"string"==typeof e&&this.settings.exposed.push(e)},remove_exposed:function(e){var i,s;for(e instanceof t?i=e[0]:"string"==typeof e&&(i=e),this.settings.exposed=this.settings.exposed||[],s=this.settings.exposed.length;s--;)if(this.settings.exposed[s]==i)return void this.settings.exposed.splice(s,1)},center:function(){var i=t(e);return this.settings.$next_tip.css({top:(i.height()-this.settings.$next_tip.outerHeight())/2+i.scrollTop(),left:(i.width()-this.settings.$next_tip.outerWidth())/2+i.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(i){if(0===i.length)return[!1,!1,!1,!1];var s=t(e),n=s.height()/2,a=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),o=s.width()+s.scrollLeft(),r=s.height()+a,l=s.height()+s.scrollTop(),d=s.scrollTop();return d>a&&(d=0>a?0:a),r>l&&(l=r),[i.offset().top<d,o<i.offset().left+i.outerWidth(),l<i.offset().top+i.outerHeight(),s.scrollLeft()>i.offset().left]},visible:function(t){for(var e=t.length;e--;)if(t[e])return!1;return!0},nub_position:function(t,e,i){t.addClass("auto"===e?i:e)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(e){this.settings.cookie_monster&&t.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),t(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,t(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof e||e===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),t(".joyride-tip-guide").remove()},off:function(){t(this.scope).off(".joyride"),t(e).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate)},reflow:function(){}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.3",settings:{use_tallest:!0,before_height_change:t.noop,after_height_change:t.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(t,e,i){Foundation.inherit(this,"image_loaded"),this.bindings(e,i),this.reflow()},events:function(){this.S(e).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(e){var i,s,n=!1,a=e.data("equalizer"),o=e.data(this.attr_name(!0)+"-init")||this.settings;if(i=e.find(o.act_on_hidden_el?a?"["+this.attr_name()+'-watch="'+a+'"]':"["+this.attr_name()+"-watch]":a?"["+this.attr_name()+'-watch="'+a+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==i.length&&(o.before_height_change(),e.trigger("before-height-change.fndth.equalizer"),i.height("inherit"),o.equalize_on_stack!==!1||(s=i.first().offset().top,i.each(function(){return t(this).offset().top!==s?(n=!0,!1):void 0}),!n))){var r=i.map(function(){return t(this).outerHeight(!1)}).get();if(o.use_tallest){var l=Math.max.apply(null,r);i.css("height",l)}else{var d=Math.min.apply(null,r);i.css("height",d)}o.after_height_change(),e.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var e=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=t(this),s=i.data("equalizer-mq"),n=!0;s&&(s="is_"+s.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(s)&&(n=!1)),e.image_loaded(e.S("img",this),function(){if(n||Foundation.utils[s]())e.equalize(i);else{var t=i.find("["+e.attr_name()+"-watch]:visible");t.css("height","auto")}})})}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.3",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(e,i,s){Foundation.inherit(this,"throttle"),t.extend(!0,this.settings,i,s),this.bindings(i,s)},events:function(){var s=this,n=s.S;n(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(e){var i=n(this).data(s.attr_name(!0)+"-init")||s.settings;(!i.is_hover||Modernizr.touch)&&(e.preventDefault(),n(this).parent("[data-reveal-id]").length&&e.stopPropagation(),s.toggle(t(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(t){var e,i,a=n(this);clearTimeout(s.timeout),a.data(s.data_attr())?(e=n("#"+a.data(s.data_attr())),i=a):(e=a,i=n("["+s.attr_name()+'="'+e.attr("id")+'"]'));var o=i.data(s.attr_name(!0)+"-init")||s.settings;n(t.currentTarget).data(s.data_attr())&&o.is_hover&&s.closeall.call(s),o.is_hover&&s.open.apply(s,[e,i])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(){var t,e=n(this);if(e.data(s.data_attr()))t=e.data(s.data_attr(!0)+"-init")||s.settings;else var i=n("["+s.attr_name()+'="'+n(this).attr("id")+'"]'),t=i.data(s.attr_name(!0)+"-init")||s.settings;s.timeout=setTimeout(function(){e.data(s.data_attr())?t.is_hover&&s.close.call(s,n("#"+e.data(s.data_attr()))):t.is_hover&&s.close.call(s,e)}.bind(this),t.hover_timeout)}).on("click.fndtn.dropdown",function(e){var a=n(e.target).closest("["+s.attr_name()+"-content]"),o=a.find("a");return o.length>0&&"false"!==a.attr("aria-autoclose")&&s.close.call(s,n("["+s.attr_name()+"-content]")),e.target!==i&&!t.contains(i.documentElement,e.target)||n(e.target).closest("["+s.attr_name()+"]").length>0?void 0:!n(e.target).data("revealId")&&a.length>0&&(n(e.target).is("["+s.attr_name()+"-content]")||t.contains(a.first()[0],e.target))?void e.stopPropagation():void s.close.call(s,n("["+s.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+s.attr_name()+"-content]",function(){s.settings.closed.call(this)}),n(e).off(".dropdown").on("resize.fndtn.dropdown",s.throttle(function(){s.resize.call(s)},50)),this.resize()},close:function(e){var i=this;e.each(function(s){var n=t("["+i.attr_name()+"="+e[s].id+"]")||t("aria-controls="+e[s].id+"]");
n.attr("aria-expanded","false"),i.S(this).hasClass(i.settings.active_class)&&(i.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(i.settings.active_class).prev("["+i.attr_name()+"]").removeClass(i.settings.active_class).removeData("target"),i.S(this).trigger("closed.fndtn.dropdown",[e]))}),e.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var e=this;t.each(e.S(".f-open-"+this.attr_name(!0)),function(){e.close.call(e,e.S(this))})},open:function(t,e){this.css(t.addClass(this.settings.active_class),e),t.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),t.data("target",e.get(0)).trigger("opened.fndtn.dropdown",[t,e]),t.attr("aria-hidden","false"),e.attr("aria-expanded","true"),t.focus(),t.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(t){if(!t.hasClass(this.settings.disabled_class)){var e=this.S("#"+t.data(this.data_attr()));0!==e.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(e)),e.hasClass(this.settings.active_class)?(this.close.call(this,e),e.data("target")!==t.get(0)&&this.open.call(this,e,t)):this.open.call(this,e,t))}},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),i=t(e.data("target"));e.length&&i.length&&this.css(e,i)},css:function(t,e){var i=Math.max((e.width()-t.width())/2,8),s=e.data(this.attr_name(!0)+"-init")||this.settings,n=t.parent().css("overflow-y")||t.parent().css("overflow");if(this.clear_idx(),this.small()){var a=this.dirs.bottom.call(t,e,s);t.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:a.top}),t.css(Foundation.rtl?"right":"left",i)}else if("visible"!==n){var o=e[0].offsetTop+e[0].offsetHeight;t.attr("style","").css({position:"absolute",top:o}),t.css(Foundation.rtl?"right":"left",i)}else this.style(t,e,s);return t},style:function(e,i,s){var n=t.extend({position:"absolute"},this.dirs[s.align].call(e,i,s));e.attr("style","").css(n)},dirs:{_base:function(t,s){var n=this.offsetParent(),a=n.offset(),o=t.offset();o.top-=a.top,o.left-=a.left,o.missRight=!1,o.missTop=!1,o.missLeft=!1,o.leftRightFlag=!1;var r,l=e.innerWidth;r=i.getElementsByClassName("row")[0]?i.getElementsByClassName("row")[0].clientWidth:l;var d=(l-r)/2,c=r;if(!this.hasClass("mega")&&!s.ignore_repositioning){var h=this.outerWidth(),u=t.offset().left;t.offset().top<=this.outerHeight()&&(o.missTop=!0,c=l-d,o.leftRightFlag=!0),u+h>u+d&&u-d>h&&(o.missRight=!0,o.missLeft=!1),0>=u-h&&(o.missLeft=!0,o.missRight=!1)}return o},top:function(t,e){var i=Foundation.libs.dropdown,s=i.dirs._base.call(this,t,e);return this.addClass("drop-top"),1==s.missTop&&(s.top=s.top+t.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==s.missRight&&(s.left=s.left-this.outerWidth()+t.outerWidth()),(t.outerWidth()<this.outerWidth()||i.small()||this.hasClass(e.mega_menu))&&i.adjust_pip(this,t,e,s),Foundation.rtl?{left:s.left-this.outerWidth()+t.outerWidth(),top:s.top-this.outerHeight()}:{left:s.left,top:s.top-this.outerHeight()}},bottom:function(t,e){var i=Foundation.libs.dropdown,s=i.dirs._base.call(this,t,e);return 1==s.missRight&&(s.left=s.left-this.outerWidth()+t.outerWidth()),(t.outerWidth()<this.outerWidth()||i.small()||this.hasClass(e.mega_menu))&&i.adjust_pip(this,t,e,s),i.rtl?{left:s.left-this.outerWidth()+t.outerWidth(),top:s.top+t.outerHeight()}:{left:s.left,top:s.top+t.outerHeight()}},left:function(t,e){var i=Foundation.libs.dropdown.dirs._base.call(this,t,e);return this.addClass("drop-left"),1==i.missLeft&&(i.left=i.left+this.outerWidth(),i.top=i.top+t.outerHeight(),this.removeClass("drop-left")),{left:i.left-this.outerWidth(),top:i.top}},right:function(t,e){var i=Foundation.libs.dropdown.dirs._base.call(this,t,e);this.addClass("drop-right"),1==i.missRight?(i.left=i.left-this.outerWidth(),i.top=i.top+t.outerHeight(),this.removeClass("drop-right")):i.triggeredRight=!0;var s=Foundation.libs.dropdown;return(t.outerWidth()<this.outerWidth()||s.small()||this.hasClass(e.mega_menu))&&s.adjust_pip(this,t,e,i),{left:i.left+t.outerWidth(),top:i.top}}},adjust_pip:function(t,e,i,s){var n=Foundation.stylesheet,a=8;t.hasClass(i.mega_class)?a=s.left+e.outerWidth()/2-8:this.small()&&(a+=s.left-8),this.rule_idx=n.cssRules.length;var o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left: "+a+"px;",d="left: "+(a-1)+"px;";1==s.missRight&&(a=t.outerWidth()-23,o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left: "+a+"px;",d="left: "+(a-1)+"px;"),1==s.triggeredRight&&(o=".f-dropdown.open:before",r=".f-dropdown.open:after",l="left:-12px;",d="left:-14px;"),n.insertRule?(n.insertRule([o,"{",l,"}"].join(" "),this.rule_idx),n.insertRule([r,"{",d,"}"].join(" "),this.rule_idx+1)):(n.addRule(o,l,this.rule_idx),n.addRule(r,d,this.rule_idx+1))},clear_idx:function(){var t=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(t.deleteRule(this.rule_idx),t.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(e).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.3",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(t,e,i){var s=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(e,i),s.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(s.S("li",this.scope)):s.S("["+this.attr_name()+"]",this.scope).each(function(){s.assemble(s.S("li",this))})},events:function(s){var n=this,a=n.S,o=t(".scroll-container");o.length>0&&(this.scope=o),a(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(t,e,i){var e=e||a(this),i=i||e,s=e.next("li"),o=e.closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init"),r=a(t.target);t.preventDefault(),o||(n.init(),o=e.closest("["+n.attr_name()+"]").data(n.attr_name(!0)+"-init")),i.hasClass("visible")&&e[0]===i[0]&&s.length>0&&n.is_open(e)&&(i=s,r=a("img",i)),n.open(r,e,i),n.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(t){n.nav(t,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(t){n.nav(t,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(t){Foundation.libs.clearing.close(t,this)}),t(i).on("keydown.fndtn.clearing",function(t){n.keydown(t)}),a(e).off(".clearing").on("resize.fndtn.clearing",function(){n.resize()}),this.swipe_events(s)},swipe_events:function(){var t=this,e=t.S;e(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var i={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:s};e(this).data("swipe-transition",i),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(i){if(i.touches||(i=i.originalEvent),!(i.touches.length>1||i.scale&&1!==i.scale)){var s=e(this).data("swipe-transition");if("undefined"==typeof s&&(s={}),s.delta_x=i.touches[0].pageX-s.start_page_x,Foundation.rtl&&(s.delta_x=-s.delta_x),"undefined"==typeof s.is_scrolling&&(s.is_scrolling=!!(s.is_scrolling||Math.abs(s.delta_x)<Math.abs(i.touches[0].pageY-s.start_page_y))),!s.is_scrolling&&!s.active){i.preventDefault();var n=s.delta_x<0?"next":"prev";s.active=!0,t.nav(i,n)}}}).on("touchend.fndtn.clearing",".visible-img",function(t){e(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(e){var i=e.parent();if(!i.parent().hasClass("carousel")){i.after('<div id="foundationClearingHolder"></div>');var s=i.detach(),n="";if(null!=s[0]){n=s[0].outerHTML;var a=this.S("#foundationClearingHolder"),o=i.data(this.attr_name(!0)+"-init"),r={grid:'<div class="carousel">'+n+"</div>",viewing:o.templates.viewing},l='<div class="clearing-assembled"><div>'+r.viewing+r.grid+"</div></div>",d=this.settings.touch_label;Modernizr.touch&&(l=t(l).find(".clearing-touch-label").html(d).end()),a.after(l).remove()}}},open:function(e,s,n){function a(){setTimeout(function(){this.image_loaded(u,function(){1!==u.outerWidth()||p?o.call(this,u):a.call(this)}.bind(this))}.bind(this),100)}function o(e){var i=t(e);i.css("visibility","visible"),i.trigger("imageVisible"),l.css("overflow","hidden"),d.addClass("clearing-blackout"),c.addClass("clearing-container"),h.show(),this.fix_height(n).caption(r.S(".clearing-caption",h),r.S("img",n)).center_and_label(e,f).shift(s,n,function(){n.closest("li").siblings().removeClass("visible"),n.closest("li").addClass("visible")}),h.trigger("opened.fndtn.clearing")}var r=this,l=t(i.body),d=n.closest(".clearing-assembled"),c=r.S("div",d).first(),h=r.S(".visible-img",c),u=r.S("img",h).not(e),f=r.S(".clearing-touch-label",c),p=!1,g={};t("body").on("touchmove",function(t){t.preventDefault()}),u.error(function(){p=!0}),this.locked()||(h.trigger("open.fndtn.clearing"),g=this.load(e),g.interchange?u.attr("data-interchange",g.interchange).foundation("interchange","reflow"):u.attr("src",g.src).attr("data-interchange",""),u.css("visibility","hidden"),a.call(this))},close:function(e,s){e.preventDefault();var n,a,o=function(t){return/blackout/.test(t.selector)?t:t.closest(".clearing-blackout")}(t(s)),r=t(i.body);return s===e.target&&o&&(r.css("overflow",""),n=t("div",o).first(),a=t(".visible-img",n),a.trigger("close.fndtn.clearing"),this.settings.prev_index=0,t("ul["+this.attr_name()+"]",o).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),n.removeClass("clearing-container"),a.hide(),a.trigger("closed.fndtn.clearing")),t("body").off("touchmove"),!1},is_open:function(t){return t.parent().prop("style").length>0},keydown:function(e){var i=t(".clearing-blackout ul["+this.attr_name()+"]"),s=this.rtl?37:39,n=this.rtl?39:37,a=27;e.which===s&&this.go(i,"next"),e.which===n&&this.go(i,"prev"),e.which===a&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(e,i){var s=t("ul["+this.attr_name()+"]",".clearing-blackout");e.preventDefault(),this.go(s,i)},resize:function(){var e=t("img",".clearing-blackout .visible-img"),i=t(".clearing-touch-label",".clearing-blackout");e.length&&(this.center_and_label(e,i),e.trigger("resized.fndtn.clearing"))},fix_height:function(t){var e=t.parent().children(),i=this;return e.each(function(){var t=i.S(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%"),this},update_paddles:function(t){t=t.closest("li");var e=t.closest(".carousel").siblings(".visible-img");t.next().length>0?this.S(".clearing-main-next",e).removeClass("disabled"):this.S(".clearing-main-next",e).addClass("disabled"),t.prev().length>0?this.S(".clearing-main-prev",e).removeClass("disabled"):this.S(".clearing-main-prev",e).addClass("disabled")},center_and_label:function(t,e){return e.css(!this.rtl&&e.length>0?{marginLeft:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10}:{marginRight:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(t){var e,i,s;return"A"===t[0].nodeName?(e=t.attr("href"),i=t.data("clearing-interchange")):(s=t.closest("a"),e=s.attr("href"),i=s.data("clearing-interchange")),this.preload(t),{src:e?e:t.attr("src"),interchange:e?i:t.data("clearing-interchange")}},preload:function(t){this.img(t.closest("li").next(),"next").img(t.closest("li").prev(),"prev")},img:function(e,i){if(e.length){var s,n,a,o=t(".clearing-preload-"+i),r=this.S("a",e);r.length?(s=r.attr("href"),n=r.data("clearing-interchange")):(a=this.S("img",e),s=a.attr("src"),n=a.data("clearing-interchange")),n?o.attr("data-interchange",n):(o.attr("src",s),o.attr("data-interchange",""))}return this},caption:function(t,e){var i=e.attr("data-caption");if(i){var s=t.get(0);s.innerHTML=i,t.show()}else t.text("").hide();return this},go:function(t,e){var i=this.S(".visible",t),s=i[e]();this.settings.skip_selector&&0!=s.find(this.settings.skip_selector).length&&(s=s[e]()),s.length&&this.S("img",s).trigger("click.fndtn.clearing",[i,s]).trigger("change.fndtn.clearing")},shift:function(t,e,i){var s,n=e.parent(),a=this.settings.prev_index||e.index(),o=this.direction(n,t,e),r=this.rtl?"right":"left",l=parseInt(n.css("left"),10),d=e.outerWidth(),c={};e.index()===a||/skip/.test(o)?/skip/.test(o)&&(s=e.index()-this.settings.up_count,this.lock(),s>0?(c[r]=-(s*d),n.animate(c,300,this.unlock())):(c[r]=0,n.animate(c,300,this.unlock()))):/left/.test(o)?(this.lock(),c[r]=l+d,n.animate(c,300,this.unlock())):/right/.test(o)&&(this.lock(),c[r]=l-d,n.animate(c,300,this.unlock())),i()},direction:function(t,e,i){var s,n=this.S("li",t),a=n.outerWidth()+n.outerWidth()/4,o=Math.floor(this.S(".clearing-container").outerWidth()/a)-1,r=n.index(i);return this.settings.up_count=o,s=this.adjacent(this.settings.prev_index,r)?r>o&&r>this.settings.prev_index?"right":r>o-1&&r<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=r,s},adjacent:function(t,e){for(var i=e+1;i>=e-1;i--)if(i===t)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(e).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";var n=function(){},a=function(n,a){if(n.hasClass(a.slides_container_class))return this;var d,c,h,u,f,p,g=this,_=n,m=0,v=!1;g.slides=function(){return _.children(a.slide_selector)},g.slides().first().addClass(a.active_slide_class),g.update_slide_number=function(e){a.slide_number&&(c.find("span:first").text(parseInt(e)+1),c.find("span:last").text(g.slides().length)),a.bullets&&(h.children().removeClass(a.bullets_active_class),t(h.children().get(e)).addClass(a.bullets_active_class))},g.update_active_link=function(e){var i=t('[data-orbit-link="'+g.slides().eq(e).attr("data-orbit-slide")+'"]');i.siblings().removeClass(a.bullets_active_class),i.addClass(a.bullets_active_class)},g.build_markup=function(){_.wrap('<div class="'+a.container_class+'"></div>'),d=_.parent(),_.addClass(a.slides_container_class),a.stack_on_small&&d.addClass(a.stack_on_small_class),a.navigation_arrows&&(d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)),d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))),a.timer&&(u=t("<div>").addClass(a.timer_container_class),u.append("<span>"),u.append(t("<div>").addClass(a.timer_progress_class)),u.addClass(a.timer_paused_class),d.append(u)),a.slide_number&&(c=t("<div>").addClass(a.slide_number_class),c.append("<span></span> "+a.slide_number_text+" <span></span>"),d.append(c)),a.bullets&&(h=t("<ol>").addClass(a.bullets_container_class),d.append(h),h.wrap('<div class="orbit-bullets-container"></div>'),g.slides().each(function(e){var i=t("<li>").attr("data-orbit-slide",e).on("click",g.link_bullet);h.append(i)}))},g._goto=function(e,i){if(e===m)return!1;"object"==typeof p&&p.restart();var s=g.slides(),n="next";if(v=!0,m>e&&(n="prev"),e>=s.length){if(!a.circular)return!1;e=0}else if(0>e){if(!a.circular)return!1;e=s.length-1}var o=t(s.get(m)),r=t(s.get(e));o.css("zIndex",2),o.removeClass(a.active_slide_class),r.css("zIndex",4).addClass(a.active_slide_class),_.trigger("before-slide-change.fndtn.orbit"),a.before_slide_change(),g.update_active_link(e);var l=function(){var t=function(){m=e,v=!1,i===!0&&(p=g.create_timer(),p.start()),g.update_slide_number(m),_.trigger("after-slide-change.fndtn.orbit",[{slide_number:m,total_slides:s.length}]),a.after_slide_change(m,s.length)};_.outerHeight()!=r.outerHeight()&&a.variable_height?_.animate({height:r.outerHeight()},250,"linear",t):t()};if(1===s.length)return l(),!1;var d=function(){"next"===n&&f.next(o,r,l),"prev"===n&&f.prev(o,r,l)};r.outerHeight()>_.outerHeight()&&a.variable_height?_.animate({height:r.outerHeight()},250,"linear",d):d()},g.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(m+1)},g.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(m-1)},g.link_custom=function(e){e.preventDefault();var i=t(this).attr("data-orbit-link");if("string"==typeof i&&""!=(i=t.trim(i))){var s=d.find("[data-orbit-slide="+i+"]");-1!=s.index()&&g._goto(s.index())}},g.link_bullet=function(){var e=t(this).attr("data-orbit-slide");if("string"==typeof e&&""!=(e=t.trim(e)))if(isNaN(parseInt(e))){var i=d.find("[data-orbit-slide="+e+"]");-1!=i.index()&&g._goto(i.index()+1)}else g._goto(parseInt(e))},g.timer_callback=function(){g._goto(m+1,!0)},g.compute_dimensions=function(){var e=t(g.slides().get(m)),i=e.outerHeight();a.variable_height||g.slides().each(function(){t(this).outerHeight()>i&&(i=t(this).outerHeight())}),_.height(i)},g.create_timer=function(){var t=new o(d.find("."+a.timer_container_class),a,g.timer_callback);return t},g.stop_timer=function(){"object"==typeof p&&p.stop()},g.toggle_timer=function(){var t=d.find("."+a.timer_container_class);t.hasClass(a.timer_paused_class)?("undefined"==typeof p&&(p=g.create_timer()),p.start()):"object"==typeof p&&p.stop()},g.init=function(){g.build_markup(),a.timer&&(p=g.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),p.start)),f=new l(a,_),"slide"===a.animation&&(f=new r(a,_)),d.on("click","."+a.next_class,g.next),d.on("click","."+a.prev_class,g.prev),a.next_on_click&&d.on("click","."+a.slides_container_class+" [data-orbit-slide]",g.link_bullet),d.on("click",g.toggle_timer),a.swipe&&d.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:s};d.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=d.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var i=e.delta_x<0?m+1:m-1;e.active=!0,g._goto(i)}}}).on("touchend.fndtn.orbit",function(t){d.data("swipe-transition",{}),t.stopPropagation()}),d.on("mouseenter.fndtn.orbit",function(){a.timer&&a.pause_on_hover&&g.stop_timer()}).on("mouseleave.fndtn.orbit",function(){a.timer&&a.resume_on_mouseout&&p.start()}),t(i).on("click","[data-orbit-link]",g.link_custom),t(e).on("load resize",g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){d.prev("."+a.preloader_class).css("display","none"),g.update_slide_number(0),g.update_active_link(0),_.trigger("ready.fndtn.orbit")})},g.init()},o=function(t,e,i){var s,n,a=this,o=e.timer_speed,r=t.find("."+e.timer_progress_class),l=-1;this.update_progress=function(t){var e=r.clone();e.attr("style",""),e.css("width",t+"%"),r.replaceWith(e),r=e},this.restart=function(){clearTimeout(n),t.addClass(e.timer_paused_class),l=-1,a.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(l=-1===l?o:l,t.removeClass(e.timer_paused_class),s=(new Date).getTime(),r.animate({width:"100%"},l,"linear"),n=setTimeout(function(){a.restart(),i()},l),void t.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(n),t.addClass(e.timer_paused_class);var i=(new Date).getTime();l-=i-s;var r=100-l/o*100;a.update_progress(r),t.trigger("timer-stopped.fndtn.orbit")}},r=function(e){var i=e.animation_speed,s=1===t("html[dir=rtl]").length,n=s?"marginRight":"marginLeft",a={};a[n]="0%",this.next=function(t,e,s){t.animate({marginLeft:"-100%"},i),e.animate(a,i,function(){t.css(n,"100%"),s()})},this.prev=function(t,e,s){t.animate({marginLeft:"100%"},i),e.css(n,"-100%"),e.animate(a,i,function(){t.css(n,"100%"),s()})}},l=function(e){{var i=e.animation_speed;1===t("html[dir=rtl]").length}this.next=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})},this.prev=function(t,e,s){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),s()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.3",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:n,after_slide_change:n},init:function(t,e,i){this.bindings(e,i)},events:function(t){var e=new a(this.S(t),this.S(t).data("orbit-init"));this.S(t).data(this.name+"-instance",e)},reflow:function(){var t=this;if(t.S(t.scope).is("[data-orbit]")){var e=t.S(t.scope),i=e.data(t.name+"-instance");i.compute_dimensions()}else t.S("[data-orbit]",t.scope).each(function(e,i){var s=t.S(i),n=(t.data_options(s),s.data(t.name+"-instance"));n.compute_dimensions()})}}}(jQuery,window,window.document),function(t){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.3",settings:{open_method:"move",close_on_click:!1},init:function(t,e,i){this.bindings(e,i)},events:function(){var e=this,i=e.S,s="",n="",a="",o="",r="";"move"===this.settings.open_method?(s="move-",n="right",a="left",o="top",r="bottom"):"overlap_single"===this.settings.open_method?(s="offcanvas-overlap-",n="right",a="left",o="top",r="bottom"):"overlap"===this.settings.open_method&&(s="offcanvas-overlap"),i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(a){e.click_toggle_class(a,s+n),"overlap"!==e.settings.open_method&&i(".left-submenu").removeClass(s+n),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(a){var o=e.get_settings(a),r=i(this).parent();!o.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(a.preventDefault(),i(this).siblings(".left-submenu").toggleClass(s+n)):r.hasClass("back")&&(a.preventDefault(),r.parent().removeClass(s+n)):(e.hide.call(e,s+n,e.get_wrapper(a)),r.parent().removeClass(s+n)),t(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(n){e.click_toggle_class(n,s+a),"overlap"!==e.settings.open_method&&i(".right-submenu").removeClass(s+a),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(n){var o=e.get_settings(n),r=i(this).parent();!o.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".right-submenu").toggleClass(s+a)):r.hasClass("back")&&(n.preventDefault(),r.parent().removeClass(s+a)):(e.hide.call(e,s+a,e.get_wrapper(n)),r.parent().removeClass(s+a)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-toggle",function(n){e.click_toggle_class(n,s+r),"overlap"!==e.settings.open_method&&i(".top-submenu").removeClass(s+r),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".top-off-canvas-menu a",function(n){var a=e.get_settings(n),o=i(this).parent();!a.close_on_click||o.hasClass("has-submenu")||o.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".top-submenu").toggleClass(s+r)):o.hasClass("back")&&(n.preventDefault(),o.parent().removeClass(s+r)):(e.hide.call(e,s+r,e.get_wrapper(n)),o.parent().removeClass(s+r)),t(".top-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-toggle",function(n){e.click_toggle_class(n,s+o),"overlap"!==e.settings.open_method&&i(".bottom-submenu").removeClass(s+o),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".bottom-off-canvas-menu a",function(n){var a=e.get_settings(n),r=i(this).parent();!a.close_on_click||r.hasClass("has-submenu")||r.hasClass("back")?i(this).parent().hasClass("has-submenu")?(n.preventDefault(),i(this).siblings(".bottom-submenu").toggleClass(s+o)):r.hasClass("back")&&(n.preventDefault(),r.parent().removeClass(s+o)):(e.hide.call(e,s+o,e.get_wrapper(n)),r.parent().removeClass(s+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){e.click_remove_class(o,s+a),i(".right-submenu").removeClass(s+a),n&&(e.click_remove_class(o,s+n),i(".left-submenu").removeClass(s+a)),t(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){e.click_remove_class(i,s+a),t(".left-off-canvas-toggle").attr("aria-expanded","false"),n&&(e.click_remove_class(i,s+n),t(".right-off-canvas-toggle").attr("aria-expanded","false"))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){e.click_remove_class(n,s+o),i(".bottom-submenu").removeClass(s+o),r&&(e.click_remove_class(n,s+r),i(".top-submenu").removeClass(s+o)),t(".bottom-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(i){e.click_remove_class(i,s+o),t(".top-off-canvas-toggle").attr("aria-expanded","false"),r&&(e.click_remove_class(i,s+r),t(".bottom-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(t,e){e=e||this.get_wrapper(),e.is("."+t)?this.hide(t,e):this.show(t,e)},show:function(t,e){e=e||this.get_wrapper(),e.trigger("open.fndtn.offcanvas"),e.addClass(t)},hide:function(t,e){e=e||this.get_wrapper(),e.trigger("close.fndtn.offcanvas"),e.removeClass(t)},click_toggle_class:function(t,e){t.preventDefault();var i=this.get_wrapper(t);this.toggle(e,i)},click_remove_class:function(t,e){t.preventDefault();var i=this.get_wrapper(t);this.hide(e,i)},get_settings:function(t){var e=this.S(t.target).closest("["+this.attr_name()+"]");return e.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(t){var e=this.S(t?t.target:this.scope).closest(".off-canvas-wrap");return 0===e.length&&(e=this.S(".off-canvas-wrap")),e},reflow:function(){}}}(jQuery,window,window.document),function(t){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.3",settings:{callback:function(){}},init:function(t,e,i){this.bindings(e,i)},events:function(){var e=this,i=this.S;t(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(t){var s=i(this).closest("["+e.attr_name()+"]"),n=s.data(e.attr_name(!0)+"-init")||e.settings;t.preventDefault(),Modernizr.csstransitions?(s.addClass("alert-close"),s.on("transitionend webkitTransitionEnd oTransitionEnd",function(){i(this).trigger("close.fndtn.alert").remove(),n.callback()})):s.fadeOut(300,function(){i(this).trigger("close.fndtn.alert").remove(),n.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";function n(t){var e=/fade/i.test(t),i=/pop/i.test(t);return{animate:e||i,pop:i,fade:e}}var a=[];Foundation.libs.reveal={name:"reveal",version:"5.5.3",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:t.noop,bg:t(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,i,s){t.extend(!0,this.settings,i,s),this.bindings(i,s)},events:function(){var t=this,e=t.S;return e(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(i){if(i.preventDefault(),!t.locked){var s=e(this),n=s.data(t.data_attr("reveal-ajax")),a=s.data(t.data_attr("reveal-replace-content"));if(t.locked=!0,"undefined"==typeof n)t.open.call(t,s);else{var o=n===!0?s.attr("href"):n;t.open.call(t,s,{url:o},{replaceContentSel:a})}}}),e(i).on("click.fndtn.reveal",this.close_targets(),function(i){if(i.preventDefault(),!t.locked){var s=e("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,n=e(i.target)[0]===e("."+s.bg_class)[0];if(n){if(!s.close_on_background_click)return;i.stopPropagation()}t.locked=!0,t.close.call(t,n?e("["+t.attr_name()+"].open:not(.toback)"):e(this).closest("["+t.attr_name()+"]"))}}),e("["+t.attr_name()+"]",this.scope).length>0?e(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):e(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var i=t.S("["+t.attr_name()+"].open"),s=i.data(t.attr_name(!0)+"-init")||t.settings;s&&27===e.which&&s.close_on_esc&&!t.locked&&t.close.call(t,i)}),!0},key_up_off:function(){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(i,n){var o,r=this;i?"undefined"!=typeof i.selector?o=r.S("#"+i.data(r.data_attr("reveal-id"))).first():(o=r.S(this.scope),n=i):o=r.S(this.scope);var l=o.data(r.attr_name(!0)+"-init");if(l=l||this.settings,o.hasClass("open")&&i!==s&&i.attr("data-reveal-id")==o.attr("id"))return r.close(o);if(!o.hasClass("open")){var d=r.S("["+r.attr_name()+"].open");"undefined"==typeof o.data("css-top")&&o.data("css-top",parseInt(o.css("top"),10)).data("offset",this.cache_offset(o)),o.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(o),o.on("open.fndtn.reveal",function(t){"fndtn.reveal"!==t.namespace}),o.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),d.length<1&&this.toggle_bg(o,!0),"string"==typeof n&&(n={url:n});var c=function(){d.length>0&&(l.multiple_opened?r.to_back(d):r.hide(d,l.css.close)),l.multiple_opened&&a.push(o),r.show(o,l.css.open)};if("undefined"!=typeof n&&n.url){var h="undefined"!=typeof n.success?n.success:null;t.extend(n,{success:function(e,i,s){if(t.isFunction(h)){var n=h(e,i,s);"string"==typeof n&&(e=n)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?o.find(options.replaceContentSel).html(e):o.html(e),r.S(o).foundation("section","reflow"),r.S(o).children().foundation(),c()}}),l.on_ajax_error!==t.noop&&t.extend(n,{error:l.on_ajax_error}),t.ajax(n)}else c()}r.S(e).trigger("resize")},close:function(e){var e=e&&e.length?e:this.S(this.scope),i=this.S("["+this.attr_name()+"].open"),s=e.data(this.attr_name(!0)+"-init")||this.settings,n=this;
if(i.length>0)if(e.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(e),e.trigger("close.fndtn.reveal"),(s.multiple_opened&&1===i.length||!s.multiple_opened||e.length>1)&&(n.toggle_bg(e,!1),n.to_front(e)),s.multiple_opened){var o=e.is(":not(.toback)");n.hide(e,s.css.close,s),o?a.pop():a=t.grep(a,function(t){var i=t[0]===e[0];return i&&n.to_front(e),!i}),a.length>0&&n.to_front(a[a.length-1])}else n.hide(i,s.css.close,s)},close_targets:function(){var t="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?t+", ."+this.settings.bg_class:t},toggle_bg:function(e,i){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=t("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var n=this.settings.bg.filter(":visible").length>0;i!=n&&((i==s?n:!i)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(i,s){if(s){var a=i.data(this.attr_name(!0)+"-init")||this.settings,o=a.root_element,r=this;if(0===i.parent(o).length){var l=i.wrap('<div style="display: none;" />').parent();i.on("closed.fndtn.reveal.wrapped",function(){i.detach().appendTo(l),i.unwrap().unbind("closed.fndtn.reveal.wrapped")}),i.detach().appendTo(o)}var d=n(a.animation);if(d.animate||(this.locked=!1),d.pop){s.top=t(e).scrollTop()-i.data("offset")+"px";var c={top:t(e).scrollTop()+i.data("css-top")+"px",opacity:1};return setTimeout(function(){return i.css(s).animate(c,a.animation_speed,"linear",function(){r.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},a.animation_speed/2)}if(s.top=t(e).scrollTop()+i.data("css-top")+"px",d.fade){var c={opacity:1};return setTimeout(function(){return i.css(s).animate(c,a.animation_speed,"linear",function(){r.locked=!1,i.trigger("opened.fndtn.reveal")}).addClass("open")},a.animation_speed/2)}return i.css(s).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var a=this.settings;return n(a.animation).fade?i.fadeIn(a.animation_speed/2):(this.locked=!1,i.show())},to_back:function(t){t.addClass("toback")},to_front:function(t){t.removeClass("toback")},hide:function(i,s){if(s){var a=i.data(this.attr_name(!0)+"-init"),o=this;a=a||this.settings;var r=n(a.animation);if(r.animate||(this.locked=!1),r.pop){var l={top:-t(e).scrollTop()-i.data("offset")+"px",opacity:0};return setTimeout(function(){return i.animate(l,a.animation_speed,"linear",function(){o.locked=!1,i.css(s).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}if(r.fade){var l={opacity:0};return setTimeout(function(){return i.animate(l,a.animation_speed,"linear",function(){o.locked=!1,i.css(s).trigger("closed.fndtn.reveal")}).removeClass("open")},a.animation_speed/2)}return i.hide().css(s).removeClass("open").trigger("closed.fndtn.reveal")}var a=this.settings;return n(a.animation).fade?i.fadeOut(a.animation_speed/2):i.hide()},close_video:function(e){var i=t(".flex-video",e.target),s=t("iframe",i);s.length>0&&(s.attr("data-src",s[0].src),s.attr("src",s.attr("src")),i.hide())},open_video:function(e){var i=t(".flex-video",e.target),n=i.find("iframe");if(n.length>0){var a=n.attr("data-src");if("string"==typeof a)n[0].src=n.attr("data-src");else{var o=n[0].src;n[0].src=s,n[0].src=o}i.show()}},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},cache_offset:function(t){var e=t.show().height()+parseInt(t.css("top"),10)+t.scrollY;return t.hide(),e},off:function(){t(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(e,i,s){if(null!==e&&/IMG/.test(e[0].nodeName)){var n=t.each(e,function(){this.src=i});if(new RegExp(i,"i").test(n))return;return e.attr("src",i),s(e[0].src)}var a=e.data(this.data_attr+"-last-path"),o=this;if(a!=i)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(t(e).css("background-image","url("+i+")"),e.data("interchange-last-path",i),s(i)):t.get(i,function(t){e.html(t),e.data(o.data_attr+"-last-path",i),s()})}}},init:function(e,i,s){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),t.extend(!0,this.settings,i,s),this.bindings(i,s),this.reflow()},get_media_hash:function(){var t="";for(var e in this.settings.named_queries)t+=matchMedia(this.settings.named_queries[e]).matches.toString();return t},events:function(){var i,s=this;return t(e).off(".interchange").on("resize.fndtn.interchange",s.throttle(function(){var t=s.get_media_hash();t!==i&&s.resize(),i=t},50)),this},resize:function(){var e=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(t.proxy(this.resize,this),50);for(var i in e)if(e.hasOwnProperty(i)){var s=this.results(i,e[i]);s&&this.settings.directives[s.scenario[1]].call(this,s.el,s.scenario[0],function(t){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);return function(){t.el.trigger(t.scenario[1],e)}}(s))}},results:function(t,e){var i=e.length;if(i>0)for(var s=this.S("["+this.add_namespace("data-uuid")+'="'+t+'"]');i--;){var n,a=e[i][2];if(n=matchMedia(this.settings.named_queries.hasOwnProperty(a)?this.settings.named_queries[a]:a),n.matches)return{el:s,scenario:e[i]}}return!1},load:function(t,e){return("undefined"==typeof this["cached_"+t]||e)&&this["update_"+t](),this["cached_"+t]},update_images:function(){var t=this.S("img["+this.data_attr+"]"),e=t.length,i=e,s=0,n=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===e;i--;){if(s++,t[i]){var a=t[i].getAttribute(n)||"";a.length>0&&this.cached_images.push(t[i])}s===e&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var t=this.S("["+this.data_attr+"]").not("img"),e=t.length,i=e,s=0,n=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===e;i--;){s++;var a=t[i].getAttribute(n)||"";a.length>0&&this.cached_nodes.push(t[i]),s===e&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(i){for(var s=this["cached_"+i].length;s--;)this.object(t(this["cached_"+i][s]));return t(e).trigger("resize.fndtn.interchange")},convert_directive:function(t){var e=this.trim(t);return e.length>0?e:"replace"},parse_scenario:function(t){var e=t[0].match(/(.+),\s*(\w+)\s*$/),i=t[1].match(/(.*)\)/);if(e)var s=e[1],n=e[2];else var a=t[0].split(/,\s*$/),s=a[0],n="";return[this.trim(s),this.convert_directive(n),this.trim(i[1])]},object:function(t){var e=this.parse_data_attr(t),i=[],s=e.length;if(s>0)for(;s--;){var n=e[s].split(/,\s?\(/);if(n.length>1){var a=this.parse_scenario(n);i.push(a)}}return this.store(t,i)},store:function(t,e){var i=this.random_str(),s=t.data(this.add_namespace("uuid",!0));return this.cache[s]?this.cache[s]:(t.attr(this.add_namespace("data-uuid"),i),this.cache[i]=e)},trim:function(e){return"string"==typeof e?t.trim(e):e},set_data_attr:function(t){return t?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(t){for(var e=t.attr(this.attr_name()).split(/\[(.*?)\]/),i=e.length,s=[];i--;)e[i].replace(/[\W\d]+/,"").length>4&&s.push(e[i]);return s},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(t,e,i){Foundation.inherit(this,"throttle"),this.bindings(e,i)},events:function(){var e=this,i=e.S,s=e.settings;e.set_expedition_position(),i(e.scope).off(".magellan").on("click.fndtn.magellan","["+e.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(i){var s=this.hostname===location.hostname||!this.hostname,n=e.filterPathname(location.pathname)===e.filterPathname(this.pathname),a=this.hash.replace(/(:|\.|\/)/g,"\\$1"),o=this;if(s&&n&&a){i.preventDefault();var r=t(this).closest("["+e.attr_name()+"]"),l=r.data("magellan-expedition-init"),d=this.hash.split("#").join(""),c=t('a[name="'+d+'"]');0===c.length&&(c=t("#"+d));var h=c.offset().top-l.destination_threshold+1;l.offset_by_height&&(h-=r.outerHeight()),t("html, body").stop().animate({scrollTop:h},l.duration,l.easing,function(){history.pushState?history.pushState(null,null,o.pathname+o.search+"#"+d):location.hash=o.pathname+o.search+"#"+d})}}).on("scroll.fndtn.magellan",e.throttle(this.check_for_arrivals.bind(this),s.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var e=this;t("["+this.attr_name()+"=fixed]",e.scope).each(function(){var i,s,n=t(this),a=n.data("magellan-expedition-init"),o=n.attr("styles");n.attr("style",""),i=n.offset().top+a.threshold,s=parseInt(n.data("magellan-fixed-top")),isNaN(s)||(e.settings.fixed_top=s),n.data(e.data_attr("magellan-top-offset"),i),n.attr("style",o)})},update_expedition_positions:function(){var i=this,s=t(e).scrollTop();t("["+this.attr_name()+"=fixed]",i.scope).each(function(){var e=t(this),n=e.data("magellan-expedition-init"),a=e.attr("style"),o=e.data("magellan-top-offset");if(s+i.settings.fixed_top>=o){var r=e.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]");0===r.length&&(r=e.clone(),r.removeAttr(i.attr_name()),r.attr(i.add_namespace("data-magellan-expedition-clone"),""),e.before(r)),e.css({position:"fixed",top:n.fixed_top}).addClass("fixed")}else e.prev("["+i.add_namespace("data-magellan-expedition-clone")+"]").remove(),e.attr("style",a).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var i=this,s=t(e).scrollTop();t("["+this.attr_name()+"]",i.scope).each(function(){var e=t(this),n=e.data(i.attr_name(!0)+"-init"),a=i.offsets(e,s),o=e.find("["+i.add_namespace("data-magellan-arrival")+"]"),r=!1;a.each(function(t,s){if(s.viewport_offset>=s.top_offset){var a=e.find("["+i.add_namespace("data-magellan-arrival")+"]");return a.not(s.arrival).removeClass(n.active_class),s.arrival.addClass(n.active_class),r=!0,!0}}),r||o.removeClass(n.active_class)})},offsets:function(e,i){var s=this,n=e.data(s.attr_name(!0)+"-init"),a=i;return e.find("["+s.add_namespace("data-magellan-arrival")+"]").map(function(){var i=t(this).data(s.data_attr("magellan-arrival")),o=t("["+s.add_namespace("data-magellan-destination")+"="+i+"]");if(o.length>0){var r=o.offset().top-n.destination_threshold;return n.offset_by_height&&(r-=e.outerHeight()),r=Math.floor(r),{destination:o,arrival:t(this),top_offset:r,viewport_offset:a}}}).sort(function(t,e){return t.top_offset<e.top_offset?-1:t.top_offset>e.top_offset?1:0})},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(e).off(".magellan")},filterPathname:function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var e=this;t("["+e.add_namespace("data-magellan-expedition-clone")+"]",e.scope).remove()}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.3",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(t,e,i){this.bindings(e,i)},events:function(e){var i=this,s=this.S;i.create(this.S(e)),s(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(e){var n=s(this).closest("["+i.attr_name()+"]"),a=i.attr_name()+"="+n.attr(i.attr_name()),o=n.data(i.attr_name(!0)+"-init")||i.settings,r=s("#"+this.href.split("#")[1]),l=t("> dd, > li",n),d=l.children("."+o.content_class),c=d.filter("."+o.active_class);return e.preventDefault(),n.attr(i.attr_name())&&(d=d.add("["+a+"] dd > ."+o.content_class+", ["+a+"] li > ."+o.content_class),l=l.add("["+a+"] dd, ["+a+"] li")),o.toggleable&&r.is(c)?(r.parent("dd, li").toggleClass(o.active_class,!1),r.toggleClass(o.active_class,!1),s(this).attr("aria-expanded",function(t,e){return"true"===e?"false":"true"}),o.callback(r),r.triggerHandler("toggled",[n]),void n.triggerHandler("toggled",[r])):(o.multi_expand||(d.removeClass(o.active_class),l.removeClass(o.active_class),l.children("a").attr("aria-expanded","false")),r.addClass(o.active_class).parent().addClass(o.active_class),o.callback(r),r.triggerHandler("toggled",[n]),n.triggerHandler("toggled",[r]),void s(this).attr("aria-expanded","true"))})},create:function(e){var i=this,s=e,n=t("> .accordion-navigation",s),a=s.data(i.attr_name(!0)+"-init")||i.settings;n.children("a").attr("aria-expanded","false"),n.has("."+a.content_class+"."+a.active_class).addClass(a.active_class).children("a").attr("aria-expanded","true"),a.multi_expand&&e.attr("aria-multiselectable","true")},toggle:function(t){var t="undefined"!=typeof t?t:{},i="undefined"!=typeof t.selector?t.selector:"",s="undefined"!=typeof t.toggle_state?t.toggle_state:"",n="undefined"!=typeof t.$accordion?t.$accordion:this.S(this.scope).closest("["+this.attr_name()+"]"),a=n.find("> dd"+i+", > li"+i);if(a.length<1)return e.console&&console.error("Selection not found.",i),!1;var o=this.S,r=this.settings.active_class;a.each(function(){var t=o(this),e=t.hasClass(r);(e&&"close"===s||!e&&"open"===s||""===s)&&t.find("> a").trigger("click.fndtn.accordion")})},open:function(t){var t="undefined"!=typeof t?t:{};t.toggle_state="open",this.toggle(t)},close:function(t){var t="undefined"!=typeof t?t:{};t.toggle_state="close",this.toggle(t)},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(e,i,s){Foundation.inherit(this,"add_custom_rule register_media throttle");var n=this;n.register_media("topbar","foundation-mq-topbar"),this.bindings(i,s),n.S("["+this.attr_name()+"]",this.scope).each(function(){{var e=t(this),i=e.data(n.attr_name(!0)+"-init");n.S("section, .top-bar-section",this)}e.data("index",0);var s=e.parent();s.hasClass("fixed")||n.is_sticky(e,s,i)?(n.settings.sticky_class=i.sticky_class,n.settings.sticky_topbar=e,e.data("height",s.outerHeight()),e.data("stickyoffset",s.offset().top)):e.data("height",e.outerHeight()),i.assembled||n.assemble(e),i.is_hover?n.S(".has-dropdown",e).addClass("not-click"):n.S(".has-dropdown",e).removeClass("not-click"),n.add_custom_rule(".f-topbar-fixed { padding-top: "+e.data("height")+"px }"),s.hasClass("fixed")&&n.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,e,i){var s=e.hasClass(i.sticky_class),n=matchMedia(Foundation.media_queries.small).matches,a=matchMedia(Foundation.media_queries.medium).matches,o=matchMedia(Foundation.media_queries.large).matches;return s&&"all"===i.sticky_on?!0:s&&this.small()&&-1!==i.sticky_on.indexOf("small")&&n&&!a&&!o?!0:s&&this.medium()&&-1!==i.sticky_on.indexOf("medium")&&n&&a&&!o?!0:s&&this.large()&&-1!==i.sticky_on.indexOf("large")&&n&&a&&o?!0:!1},toggle:function(i){var s,n=this;s=i?n.S(i).closest("["+this.attr_name()+"]"):n.S("["+this.attr_name()+"]");var a=s.data(this.attr_name(!0)+"-init"),o=n.S("section, .top-bar-section",s);n.breakpoint()&&(n.rtl?(o.css({right:"0%"}),t(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),t(">.name",o).css({left:"100%"})),n.S("li.moved",o).removeClass("moved"),s.data("index",0),s.toggleClass("expanded").css("height","")),a.scrolltop?s.hasClass("expanded")?s.parent().hasClass("fixed")&&(a.scrolltop?(s.parent().removeClass("fixed"),s.addClass("fixed"),n.S("body").removeClass("f-topbar-fixed"),e.scrollTo(0,0)):s.parent().removeClass("expanded")):s.hasClass("fixed")&&(s.parent().addClass("fixed"),s.removeClass("fixed"),n.S("body").addClass("f-topbar-fixed")):(n.is_sticky(s,s.parent(),a)&&s.parent().addClass("fixed"),s.parent().hasClass("fixed")&&(s.hasClass("expanded")?(s.addClass("fixed"),s.parent().addClass("expanded"),n.S("body").addClass("f-topbar-fixed")):(s.removeClass("fixed"),s.parent().removeClass("expanded"),n.update_sticky_positioning())))},timer:null,events:function(){var i=this,s=this.S;s(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),i.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var e=t(this).closest("li"),s=e.closest("["+i.attr_name()+"]"),n=s.data(i.attr_name(!0)+"-init");if(n.dropdown_autoclose&&n.is_hover){var a=t(this).closest(".hover");a.removeClass("hover")}!i.breakpoint()||e.hasClass("back")||e.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(e){var n=s(this),a=s(e.target),o=n.closest("["+i.attr_name()+"]"),r=o.data(i.attr_name(!0)+"-init");return a.data("revealId")?void i.toggle():void(i.breakpoint()||(!r.is_hover||Modernizr.touch)&&(e.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),t(n).siblings().removeClass("hover"),"A"===a[0].nodeName&&a.parent().hasClass("has-dropdown")&&e.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(i.breakpoint()){t.preventDefault();var e=s(this),n=e.closest("["+i.attr_name()+"]"),a=n.find("section, .top-bar-section"),o=(e.next(".dropdown").outerHeight(),e.closest("li"));n.data("index",n.data("index")+1),o.addClass("moved"),i.rtl?(a.css({right:-(100*n.data("index"))+"%"}),a.find(">.name").css({right:100*n.data("index")+"%"})):(a.css({left:-(100*n.data("index"))+"%"}),a.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",e.siblings("ul").outerHeight(!0)+n.data("height"))}}),s(e).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize.fndtn.topbar").load(function(){s(this).trigger("resize.fndtn.topbar")}),s("body").off(".topbar").on("click.fndtn.topbar",function(t){var e=s(t.target).closest("li").closest("li.hover");e.length>0||s("["+i.attr_name()+"] li.hover").removeClass("hover")}),s(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var e=s(this),n=e.closest("["+i.attr_name()+"]"),a=n.find("section, .top-bar-section"),o=(n.data(i.attr_name(!0)+"-init"),e.closest("li.moved")),r=o.parent();n.data("index",n.data("index")-1),i.rtl?(a.css({right:-(100*n.data("index"))+"%"}),a.find(">.name").css({right:100*n.data("index")+"%"})):(a.css({left:-(100*n.data("index"))+"%"}),a.find(">.name").css({left:100*n.data("index")+"%"})),0===n.data("index")?n.css("height",""):n.css("height",r.outerHeight(!0)+n.data("height")),setTimeout(function(){o.removeClass("moved")},300)}),s(this.scope).find(".dropdown a").focus(function(){t(this).parents(".has-dropdown").addClass("hover")}).blur(function(){t(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var e,s=t.S(this),n=s.data(t.attr_name(!0)+"-init"),a=s.parent("."+t.settings.sticky_class);if(!t.breakpoint()){var o=s.hasClass("expanded");s.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&t.toggle(s)}t.is_sticky(s,a,n)&&(a.hasClass("fixed")?(a.removeClass("fixed"),e=a.offset().top,t.S(i.body).hasClass("f-topbar-fixed")&&(e-=s.data("height")),s.data("stickyoffset",e),a.addClass("fixed")):(e=a.offset().top,s.data("stickyoffset",e)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(e){var i=this,s=e.data(this.attr_name(!0)+"-init"),n=i.S("section, .top-bar-section",e);n.detach(),i.S(".has-dropdown>a",n).each(function(){var e,n=i.S(this),a=n.siblings(".dropdown"),o=n.attr("href");a.find(".title.back").length||(e=t(1==s.mobile_show_parent_link&&o?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+o+'">'+n.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),t("h5>a",e).html(1==s.custom_back_text?s.back_text:"&laquo; "+n.html()),a.prepend(e))}),n.appendTo(e),this.sticky(),this.assembled(e)},assembled:function(e){e.data(this.attr_name(!0),t.extend({},e.data(this.attr_name(!0)),{assembled:!0}))},height:function(e){var i=0,s=this;return t("> li",e).each(function(){i+=s.S(this).outerHeight(!0)}),i},sticky:function(){var t=this;this.S(e).on("scroll",function(){t.update_sticky_positioning()})},update_sticky_positioning:function(){var t="."+this.settings.sticky_class,i=this.S(e),s=this;if(s.settings.sticky_topbar&&s.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var n=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;s.S(t).hasClass("expanded")||(i.scrollTop()>n?s.S(t).hasClass("fixed")||(s.S(t).addClass("fixed"),s.S("body").addClass("f-topbar-fixed")):i.scrollTop()<=n&&s.S(t).hasClass("fixed")&&(s.S(t).removeClass("fixed"),s.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(e).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i,s){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(t,e,i){var s=this,n=this.S;n("["+this.attr_name()+"] > .active > a",this.scope).each(function(){s.default_tab_hashes.push(this.hash)}),this.bindings(e,i),this.handle_location_hash_change()},events:function(){var t=this,i=this.S,s=function(e,s){var n=i(s).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");if(!n.is_hover||Modernizr.touch){var a=e.keyCode||e.which;9!==a&&(e.preventDefault(),e.stopPropagation()),t.toggle_active_tab(i(s).parent())}};i(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var e=t.keyCode||t.which;if(13===e||32===e){var i=this;s(t,i)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var e=this;s(t,e)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var e=i(this).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init");e.is_hover&&t.toggle_active_tab(i(this).parent())}),i(e).on("hashchange.fndtn.tab",function(e){e.preventDefault(),t.handle_location_hash_change()})},handle_location_hash_change:function(){var e=this,i=this.S;i("["+this.attr_name()+"]",this.scope).each(function(){var n=i(this).data(e.attr_name(!0)+"-init");if(n.deep_linking){var a;if(a=n.scroll_to_content?e.scope.location.hash:e.scope.location.hash.replace("fndtn-",""),""!=a){var o=i(a);if(o.hasClass("content")&&o.parent().hasClass("tabs-content"))e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href="+a+"]").parent());else{var r=o.closest(".content").attr("id");r!=s&&e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href=#"+r+"]").parent(),a)}}else for(var l=0;l<e.default_tab_hashes.length;l++)e.toggle_active_tab(t("["+e.attr_name()+"] > * > a[href="+e.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(n,a){var o=this,r=o.S,l=n.closest("["+this.attr_name()+"]"),d=n.find("a"),c=n.children("a").first(),h="#"+c.attr("href").split("#")[1],u=r(h),f=n.siblings(),p=l.data(this.attr_name(!0)+"-init"),g=function(e){var s,n=t(this),a=t(this).parents("li").prev().children('[role="tab"]'),o=t(this).parents("li").next().children('[role="tab"]');switch(e.keyCode){case 37:s=a;break;case 39:s=o;break;default:s=!1}s.length&&(n.attr({tabindex:"-1","aria-selected":null}),s.attr({tabindex:"0","aria-selected":!0}).focus()),t('[role="tabpanel"]').attr("aria-hidden","true"),t("#"+t(i.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},_=function(t){var i=p.scroll_to_content?o.default_tab_hashes[0]:"fndtn-"+o.default_tab_hashes[0].replace("#","");(t!==i||e.location.hash)&&(e.location.hash=t)};c.data("tab-content")&&(h="#"+c.data("tab-content").split("#")[1],u=r(h)),p.deep_linking&&(p.scroll_to_content?(_(a||h),a==s||a==h?n.parent()[0].scrollIntoView():r(h)[0].scrollIntoView()):_(a!=s?"fndtn-"+a.replace("#",""):"fndtn-"+h.replace("#",""))),n.addClass(p.active_class).triggerHandler("opened"),d.attr({"aria-selected":"true",tabindex:0}),f.removeClass(p.active_class),f.find("a").attr({"aria-selected":"false"}),u.siblings().removeClass(p.active_class).attr({"aria-hidden":"true"}),u.addClass(p.active_class).attr("aria-hidden","false").removeAttr("tabindex"),p.callback(n),u.triggerHandler("toggled",[u]),l.triggerHandler("toggled",[n]),d.off("keydown").on("keydown",g)},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(t,e,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.3",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t){var e=i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,s=t.value,n=e===s;return n}}},timer:null,init:function(t,e,i){this.bindings(e,i)},events:function(e){function i(t,e){clearTimeout(s.timer),s.timer=setTimeout(function(){s.validate([t],e)}.bind(t),a.timeout)}var s=this,n=s.S(e).attr("novalidate","novalidate"),a=n.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),n.off(".abide").on("submit.fndtn.abide",function(t){var e=/ajax/i.test(s.S(this).attr(s.attr_name()));return s.validate(s.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),t,e)}).on("validate.fndtn.abide",function(t){"manual"===a.validate_on&&s.validate([t.target],t)}).on("reset",function(e){return s.reset(t(this),e)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(t){var e=this.getAttribute("id"),s=n.find('[data-equalto="'+e+'"]');a.validate_on_blur&&a.validate_on_blur===!0&&i(this,t),"undefined"!=typeof s.get(0)&&s.val().length&&i(s.get(0),t),"change"===a.validate_on&&i(this,t)}).on("keydown.fndtn.abide",function(t){var e=this.getAttribute("id"),s=n.find('[data-equalto="'+e+'"]');a.live_validate&&a.live_validate===!0&&9!=t.which&&i(this,t),"undefined"!=typeof s.get(0)&&s.val().length&&i(s.get(0),t),"tab"===a.validate_on&&9===t.which?i(this,t):"change"===a.validate_on&&i(this,t)}).on("focus",function(e){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&t("html, body").animate({scrollTop:t(e.target).offset().top},100)})},reset:function(e){var i=this;e.removeAttr(i.invalid_attr),t("["+i.invalid_attr+"]",e).removeAttr(i.invalid_attr),t("."+i.settings.error_class,e).not("small").removeClass(i.settings.error_class),t(":input",e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)},validate:function(t,e,i){for(var s=this.parse_patterns(t),n=s.length,a=this.S(t[0]).closest("form"),o=/submit/.test(e.type),r=0;n>r;r++)if(!s[r]&&(o||i))return this.settings.focus_on_invalid&&t[r].focus(),a.trigger("invalid.fndtn.abide"),this.S(t[r]).closest("form").attr(this.invalid_attr,""),!1;return(o||i)&&a.trigger("valid.fndtn.abide"),a.removeAttr(this.invalid_attr),i?!1:!0},parse_patterns:function(t){for(var e=t.length,i=[];e--;)i.push(this.pattern(t[e]));return this.check_validation_and_apply_styles(i)},pattern:function(t){var e=t.getAttribute("type"),i="string"==typeof t.getAttribute("required"),s=t.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(s)&&s.length>0?[t,this.settings.patterns[s],i]:s.length>0?[t,new RegExp(s),i]:this.settings.patterns.hasOwnProperty(e)?[t,this.settings.patterns[e],i]:(s=/.*/,[t,s,i])},check_validation_and_apply_styles:function(e){var i=e.length,s=[];if(0==i)return s;var n=this.S(e[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(n.data(this.attr_name(!0)+"-init")||{};i--;){var a,o,r=e[i][0],l=e[i][2],d=r.value.trim(),c=this.S(r).parent(),h=r.getAttribute(this.add_namespace("data-abide-validator")),u="radio"===r.type,f="checkbox"===r.type,p=this.S('label[for="'+r.getAttribute("id")+'"]'),g=l?r.value.length>0:!0,_=[];if(r.getAttribute(this.add_namespace("data-equalto"))&&(h="equalTo"),a=c.is("label")?c.parent():c,u&&l)_.push(this.valid_radio(r,l));else if(f&&l)_.push(this.valid_checkbox(r,l));else if(h){for(var m=h.split(" "),v=!0,b=!0,x=0;x<m.length;x++)o=this.settings.validators[m[x]].apply(this,[r,l,a]),_.push(o),b=o&&v,v=o;b?(this.S(r).removeAttr(this.invalid_attr),a.removeClass("error"),p.length>0&&this.settings.error_labels&&p.removeClass(this.settings.error_class).removeAttr("role"),t(r).triggerHandler("valid")):(this.S(r).attr(this.invalid_attr,""),a.addClass("error"),p.length>0&&this.settings.error_labels&&p.addClass(this.settings.error_class).attr("role","alert"),t(r).triggerHandler("invalid"))}else if(_.push(e[i][1].test(d)&&g||!l&&r.value.length<1||t(r).attr("disabled")?!0:!1),_=[_.every(function(t){return t})],_[0])this.S(r).removeAttr(this.invalid_attr),r.setAttribute("aria-invalid","false"),r.removeAttribute("aria-describedby"),a.removeClass(this.settings.error_class),p.length>0&&this.settings.error_labels&&p.removeClass(this.settings.error_class).removeAttr("role"),t(r).triggerHandler("valid");else{this.S(r).attr(this.invalid_attr,""),r.setAttribute("aria-invalid","true");var y=a.find("small."+this.settings.error_class,"span."+this.settings.error_class),w=y.length>0?y[0].id:"";w.length>0&&r.setAttribute("aria-describedby",w),a.addClass(this.settings.error_class),p.length>0&&this.settings.error_labels&&p.addClass(this.settings.error_class).attr("role","alert"),t(r).triggerHandler("invalid")}s=s.concat(_)}return s},valid_checkbox:function(e,i){var e=this.S(e),s=e.is(":checked")||!i||e.get(0).getAttribute("disabled");return s?(e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),t(e).triggerHandler("valid")):(e.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),t(e).triggerHandler("invalid")),s
},valid_radio:function(e){for(var i=e.getAttribute("name"),s=this.S(e).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+i+"']"),n=s.length,a=!1,o=!1,r=0;n>r;r++)s[r].getAttribute("disabled")?(o=!0,a=!0):s[r].checked?a=!0:o&&(a=!1);for(var r=0;n>r;r++)a?(this.S(s[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),t(s[r]).triggerHandler("valid")):(this.S(s[r]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),t(s[r]).triggerHandler("invalid"));return a},valid_equal:function(t,e,s){var n=i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,a=t.value,o=n===a;return o?(this.S(t).removeAttr(this.invalid_attr),s.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(t).attr(this.invalid_attr,""),s.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),o},valid_oneof:function(t,e,i,s){var t=this.S(t),n=this.S("["+this.add_namespace("data-oneof")+"]"),a=n.filter(":checked").length>0;if(a?t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):t.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!s){var o=this;n.each(function(){o.valid_oneof.call(o,this,null,null,!0)})}return a},reflow:function(){var t=this,e=t.S("["+this.attr_name()+"]").attr("novalidate","novalidate");t.S(e).each(function(e,i){t.events(i)})}}}(jQuery,window,window.document),function(t,e){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.3",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,fade_in_duration:150,fade_out_duration:150,show_on:"all",tip_template:function(t,e){return'<span data-selector="'+t+'" id="'+t+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(t,e,i){Foundation.inherit(this,"random_str"),this.bindings(e,i)},should_show:function(e){var i=t.extend({},this.settings,this.data_options(e));return"all"===i.show_on?!0:this.small()&&"small"===i.show_on?!0:this.medium()&&"medium"===i.show_on?!0:this.large()&&"large"===i.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(e){function i(t,e,i){t.timer||(i?(t.timer=null,n.showTip(e)):t.timer=setTimeout(function(){t.timer=null,n.showTip(e)}.bind(t),n.settings.hover_delay))}function s(t,e){t.timer&&(clearTimeout(t.timer),t.timer=null),n.hide(e)}var n=this,a=n.S;n.create(this.S(e)),t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(e){var o=a(this),r=t.extend({},n.settings,n.data_options(o)),l=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&a(e.target).is("a"))return!1;if(/mouse/i.test(e.type)&&n.ie_touch(e))return!1;if(o.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&e.preventDefault(),n.hide(o);else{if(r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type))return;if(!r.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&(e.preventDefault(),a(r.tooltip_class+".open").hide(),l=!0,t(".open["+n.attr_name()+"]").length>0)){var d=a(t(".open["+n.attr_name()+"]")[0]);n.hide(d)}/enter|over/i.test(e.type)?i(this,o):"mouseout"===e.type||"mouseleave"===e.type?s(this,o):i(this,o,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(e){return/mouse/i.test(e.type)&&n.ie_touch(e)?!1:void(("touch"!=t(this).data("tooltip-open-event-type")||"mouseleave"!=e.type)&&("mouse"==t(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(e.type)?n.convert_to_touch(t(this)):s(this,t(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(){s(this,a(this))})},ie_touch:function(){return!1},showTip:function(t){var e=this.getTip(t);return this.should_show(t,e)?this.show(t):void 0},getTip:function(e){var i=this.selector(e),s=t.extend({},this.settings,this.data_options(e)),n=null;return i&&(n=this.S('span[data-selector="'+i+'"]'+s.tooltip_class)),"object"==typeof n?n:!1},selector:function(t){var e=t.attr(this.attr_name())||t.attr("data-selector");return"string"!=typeof e&&(e=this.random_str(6),t.attr("data-selector",e).attr("aria-describedby",e)),e},create:function(i){var s=this,n=t.extend({},this.settings,this.data_options(i)),a=this.settings.tip_template;"string"==typeof n.tip_template&&e.hasOwnProperty(n.tip_template)&&(a=e[n.tip_template]);var o=t(a(this.selector(i),t("<div></div>").html(i.attr("title")).html())),r=this.inheritable_classes(i);o.addClass(r).appendTo(n.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+n.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(){s.hide(i)})),i.removeAttr("title").attr("title","")},reposition:function(e,i,s){var n,a,o,r,l;i.css("visibility","hidden").show(),n=e.data("width"),a=i.children(".nub"),o=a.outerHeight(),r=a.outerWidth(),i.css(this.small()?{width:"100%"}:{width:n?n:"auto"}),l=function(t,e,i,s,n){return t.css({top:e?e:"auto",bottom:s?s:"auto",left:n?n:"auto",right:i?i:"auto"}).end()};var d=e.offset().top,c=e.offset().left,h=e.outerHeight();if(l(i,d+h+10,"auto","auto",c),this.small())l(i,d+h+10,"auto","auto",12.5,t(this.scope).width()),i.addClass("tip-override"),l(a,-o,"auto","auto",c);else{Foundation.rtl&&(a.addClass("rtl"),c=c+e.outerWidth()-i.outerWidth()),l(i,d+h+10,"auto","auto",c),a.attr("style")&&a.removeAttr("style"),i.removeClass("tip-override");var u=i.outerHeight();s&&s.indexOf("tip-top")>-1?(Foundation.rtl&&a.addClass("rtl"),l(i,d-u,"auto","auto",c).removeClass("tip-override")):s&&s.indexOf("tip-left")>-1?(l(i,d+h/2-u/2,"auto","auto",c-i.outerWidth()-o).removeClass("tip-override"),a.removeClass("rtl")):s&&s.indexOf("tip-right")>-1&&(l(i,d+h/2-u/2,"auto","auto",c+e.outerWidth()+o).removeClass("tip-override"),a.removeClass("rtl"))}i.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(e){var i=t.extend({},this.settings,this.data_options(e)),s=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(i.additional_inheritable_classes),n=e.attr("class"),a=n?t.map(n.split(" "),function(e){return-1!==t.inArray(e,s)?e:void 0}).join(" "):"";return t.trim(a)},convert_to_touch:function(e){var i=this,s=i.getTip(e),n=t.extend({},i.settings,i.data_options(e));0===s.find(".tap-to-close").length&&(s.append('<span class="tap-to-close">'+n.touch_close_text+"</span>"),s.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(){i.hide(e)})),e.data("tooltip-open-event-type","touch")},show:function(t){var e=this.getTip(t);"touch"==t.data("tooltip-open-event-type")&&this.convert_to_touch(t),this.reposition(t,e,t.attr("class")),t.addClass("open"),e.fadeIn(this.settings.fade_in_duration)},hide:function(t){var e=this.getTip(t);e.fadeOut(this.settings.fade_out_duration,function(){e.find(".tap-to-close").remove(),e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),t.removeClass("open")})},off:function(){var e=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(i){t("["+e.attr_name()+"]").eq(i).attr("title",t(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);






 
 
 /////////////////////////////////
 // SLICK NAV slicknav.js
 /////////////////////////////////
 /*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
;(function ($, document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            appendTo: '',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: false,
            removeClasses: false,
            removeStyles: false,
			brand: '',
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav';

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        } else {
            $this.mobileNav = menu;

            // remove ids if set
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('class');
            });
        }
        
        // remove styles if set
        if (settings.removeStyles) {
            $this.mobileNav.removeAttr('style');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('style');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        if ($('body').hasClass("style-2")){
            $this.mobileNav.attr('class', prefix + '_nav primary-bg light-bg');
        } else{
            $this.mobileNav.attr('class', prefix + '_nav secondary-bg light-bg');
        }
        
        menuBar = $('<div class="' + prefix + '_menu"></div>');
		if (settings.brand !== '') {
			var brand = $('<div class="' + prefix + '_brand">'+settings.brand+'</div>');
			$(menuBar).append(brand);
		}
		if ($('body').hasClass("style-2")){
            $this.btn = $(
                ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed primary-bg light-bg">',
                    '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                    '<span class="' + iconClass + '">',
                        '<span class="' + prefix + '_icon-bar"></span>',
                        '<span class="' + prefix + '_icon-bar"></span>',
                        '<span class="' + prefix + '_icon-bar"></span>',
                    '</span>',
                '</' + settings.parentTag + '>'
                ].join('')
            );
		} else{
		    $this.btn = $(
                ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed secondary-bg medium-bg">',
                    '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                    '<span class="' + iconClass + '">',
                        '<span class="' + prefix + '_icon-bar"></span>',
                        '<span class="' + prefix + '_icon-bar"></span>',
                        '<span class="' + prefix + '_icon-bar"></span>',
                    '</span>',
                '</' + settings.parentTag + '>'
                ].join('')
            );
		}
        $(menuBar).append($this.btn);
        if(settings.appendTo !== '') {
            $(settings.appendTo).append(menuBar);
        } else {
            $(settings.prependTo).prepend(menuBar);
        }
        menuBar.append($this.mobileNav);

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $(
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix+'_row');
                } else
                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix+'_collapsed');
                } else {
                    item.addClass(prefix+'_open');
                }

                item.addClass(prefix+'_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $('<span class="'+prefix+'_arrow">'+(settings.showChildren?settings.openedSymbol:settings.closedSymbol)+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes).last().after(arrowElement);


            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function(event){
                //Ensure that it's not a parent
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        //Emulate menu close if set
                        $($this.btn).click();
                    }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
                    //Emulate menu close
                        $($this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren){
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        $this.mobileNav.attr('role','menu');

        // outline prevention when using mouse
        $(document).mousedown(function(){
            $this._outlines(false);
        });

        $(document).keyup(function(){
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for enter key on menu button and menu parents
        $($this.btn).keydown(function (e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._menuToggle();
            }
        });

        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._itemClick($(e.target));
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.'+prefix+'_item a').click(function(e){
                    e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix+'_collapsed')) {
            btn.removeClass(prefix+'_collapsed');
            btn.addClass(prefix+'_open');
        } else {
            btn.removeClass(prefix+'_open');
            btn.addClass(prefix+'_collapsed');
        }
        btn.addClass(prefix+'_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

    // toggle clicked items
    Plugin.prototype._itemClick = function (el) {
        var $this = this;
        var settings = $this.settings;
        var data = el.data('menu');
        if (!data) {
            data = {};
            data.arrow = el.children('.'+prefix+'_arrow');
            data.ul = el.next('ul');
            data.parent = el.parent();
            //Separated parent link structure
            if (data.parent.hasClass(prefix+'_parent-link')) {
                data.parent = el.parent().parent();
                data.ul = el.parent().next('ul');
            }
            el.data('menu', data);
        }
        if (data.parent.hasClass(prefix+'_collapsed')) {
            data.arrow.html(settings.openedSymbol);
            data.parent.removeClass(prefix+'_collapsed');
            data.parent.addClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        } else {
            data.arrow.html(settings.closedSymbol);
            data.parent.addClass(prefix+'_collapsed');
            data.parent.removeClass(prefix+'_open');
            data.parent.addClass(prefix+'_animating');
            $this._visibilityToggle(data.ul, data.parent, true, el);
        }
    };

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        if (el.hasClass(prefix+'_hidden')) {
            el.removeClass(prefix+'_hidden');
             //Fire beforeOpen callback
                if (!init) {
                    settings.beforeOpen(trigger);
                }
            el.slideDown(duration, settings.easingOpen, function(){

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire afterOpen callback
                if (!init) {
                    settings.afterOpen(trigger);
                }
            });
            el.attr('aria-hidden','false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix+'_hidden');

            //Fire init or beforeClose callback
            if (!init){
                settings.beforeClose(trigger);
            }

            el.slideUp(duration, this.settings.easingClose, function() {
                el.attr('aria-hidden','true');
                items.attr('tabindex', '-1');
                $this._setVisAttr(el, true);
                el.hide(); //jQuery 1.7 bug fix

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire init or afterClose callback
                if (!init){
                    settings.afterClose(trigger);
                } else if (trigger == 'init'){
                    settings.init();
                }
            });
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.'+prefix+'_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
        } else {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
        }
    };

    Plugin.prototype.toggle = function(){
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_collapsed')) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_open')) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
                }
            });

        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));







//////////////////////////////////
// TOGGLE VAL ToggleVal.js 
//////////////////////////////////
/* -------------------------------------------------- *
 * ToggleVal 3.0
 * Updated: 01/15/2010
 * -------------------------------------------------- *
 * Author: Aaron Kuzemchak
 * URL: http://aaronkuzemchak.com/
 * Copyright: 2008-2010 Aaron Kuzemchak
 * License: MIT License
** -------------------------------------------------- */

(function($) {
	// main plugin function
	$.fn.toggleVal = function(theOptions) {
		// check whether we want real options, or to destroy functionality
		if(!theOptions || typeof theOptions == 'object') {
			theOptions = $.extend({}, $.fn.toggleVal.defaults, theOptions);
		}
		else if(typeof theOptions == 'string' && theOptions.toLowerCase() == 'destroy') {
			var destroy = true;
		}
		
		return this.each(function() {
			// unbind everything if we're destroying, and stop executing the script
			if(destroy) {
				$(this).unbind('focus.toggleval').unbind('blur.toggleval').removeData('defText');
				return false;
			}
			
			// define our variables
			var defText = '';
			
			// let's populate the field, if not default
			switch(theOptions.populateFrom) {
				case 'title':
					if($(this).attr('title')) {
						defText = $(this).attr('title');
						$(this).val(defText);
					}
					break;
				case 'label':
					if($(this).attr('id')) {
						defText = $('label[for="' + $(this).attr('id') + '"]').text();
						$(this).val(defText);
					}
					break;
				case 'custom':
					defText = theOptions.text;
					$(this).val(defText);
					break;
				default:
					defText = $(this).val();
			}
			
			// let's give this field a special class, so we can identify it later
			// also, we'll give it a data attribute, which will help jQuery remember what the default value is
			$(this).addClass('toggleval').data('defText', defText);
			
			// now that fields are populated, let's remove the labels if applicable
			if(theOptions.removeLabels == true && $(this).attr('id')) {
				$('label[for="' + $(this).attr('id') + '"]').remove();
			}
			
			// on to the good stuff... the focus and blur actions
			$(this).bind('focus.toggleval', function() {
				if($(this).val() == $(this).data('defText')) { $(this).val(''); }
				
				// add the focusClass, remove changedClass
				$(this).addClass(theOptions.focusClass);
			}).bind('blur.toggleval', function() {
				if($(this).val() == '' && !theOptions.sticky) { $(this).val($(this).data('defText')); }
				
				// remove focusClass, add changedClass if, well, different
				$(this).removeClass(theOptions.focusClass);
				if($(this).val() != '' && $(this).val() != $(this).data('defText')) { $(this).addClass(theOptions.changedClass); }
					else { $(this).removeClass(theOptions.changedClass); }
			});
		});
	};
	
	// default options
	$.fn.toggleVal.defaults = {
		focusClass: 'tv-focused', // class during focus
		changedClass: 'tv-changed', // class after focus
		populateFrom: 'default', // choose from: default, label, custom, or title
		text: null, // text to use in conjunction with populateFrom: custom
		removeLabels: false, // remove labels associated with the fields
		sticky: false // if true, default text won't reappear
	};
	
	// create custom selectors
	// :toggleval for affected elements
	// :changed for changed elements
	$.extend($.expr[':'], {
		toggleval: function(elem) {
			return $(elem).data('defText') || false;
		},
		changed: function(elem) {
			if($(elem).data('defText') && $(elem).val() != $(elem).data('defText')) {
				return true;
			}
			return false;
		}
	});
})(jQuery);







//////////////////////////////////
// HOVER INTENT JS hoverIntent.js 
//////////////////////////////////
/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.hoverIntent) {
        factory(jQuery);
    }
})(function($) {
    'use strict';

    // default configuration values
    var _cfg = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    };

    // counter used to generate an ID for each instance
    var INSTANCE_COUNT = 0;

    // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
    var cX, cY;

    // saves the current pointer position coordinated based on the given mouse event
    var track = function(ev) {
        cX = ev.pageX;
        cY = ev.pageY;
    };

    // compares current and previous mouse positions
    var compare = function(ev,$el,s,cfg) {
        // compare mouse positions to see if pointer has slowed enough to trigger `over` function
        if ( Math.sqrt( (s.pX-cX)*(s.pX-cX) + (s.pY-cY)*(s.pY-cY) ) < cfg.sensitivity ) {
            $el.off('mousemove.hoverIntent'+s.namespace,track);
            delete s.timeoutId;
            // set hoverIntent state as active for this element (so `out` handler can eventually be called)
            s.isActive = true;
            // clear coordinate data
            delete s.pX; delete s.pY;
            return cfg.over.apply($el[0],[ev]);
        } else {
            // set previous coordinates for next comparison
            s.pX = cX; s.pY = cY;
            // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
            s.timeoutId = setTimeout( function(){compare(ev, $el, s, cfg);} , cfg.interval );
        }
    };

    // triggers given `out` function at configured `timeout` after a mouseleave and clears state
    var delay = function(ev,$el,s,out) {
        delete $el.data('hoverIntent')[s.id];
        return out.apply($el[0],[ev]);
    };

    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
        // instance ID, used as a key to store and retrieve state information on an element
        var instanceId = INSTANCE_COUNT++;

        // extend the default configuration and parse parameters
        var cfg = $.extend({}, _cfg);
        if ( $.isPlainObject(handlerIn) ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // cloned event to pass to handlers (copy required for event object to be passed in IE)
            var ev = $.extend({},e);

            // the current target of the mouse event, wrapped in a jQuery object
            var $el = $(this);

            // read hoverIntent data from element (or initialize if not present)
            var hoverIntentData = $el.data('hoverIntent');
            if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

            // read per-instance state from element (or initialize if not present)
            var state = hoverIntentData[instanceId];
            if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

            // state properties:
            // id = instance ID, used to clean up data
            // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
            // isActive = plugin state, true after `over` is called just until `out` is called
            // pX, pY = previously-measured pointer coordinates, updated at each polling interval
            // namespace = string used as namespace for per-instance event management

            // clear any existing timeout
            if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

            // event namespace, used to register and unregister mousemove tracking
            var namespace = state.namespace = '.hoverIntent'+instanceId;

            // handle the event, based on its type
            if (e.type === 'mouseenter') {
                // do nothing if already active
                if (state.isActive) { return; }
                // set "previous" X and Y position based on initial entry point
                state.pX = ev.pageX; state.pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $el.on('mousemove.hoverIntent'+namespace,track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                state.timeoutId = setTimeout( function(){compare(ev,$el,state,cfg);} , cfg.interval );
            } else { // "mouseleave"
                // do nothing if not already active
                if (!state.isActive) { return; }
                // unbind expensive mousemove event
                $el.off('mousemove.hoverIntent'+namespace,track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                state.timeoutId = setTimeout( function(){delay(ev,$el,state,cfg.out);} , cfg.timeout );
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
});





//////////////////////////////////
// SUPERFISH superfish.js 
//////////////////////////////////
/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($, w) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(w).load(function () {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			unprefixedPointerEvents = (function () {
				return (!!w.PointerEvent);
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var msTouchAction = $menu.css('ms-touch-action');
				var touchAction = $menu.css('touch-action');
				touchAction = touchAction || msTouchAction;
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css({
					'ms-touch-action': touchAction,
					'touch-action': touchAction
				});
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (unprefixedPointerEvents) {
					touchevent = 'pointerdown.superfish';
				}
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function (e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

})(jQuery, window);





/*!
 * The Final Countdown for jQuery v2.0.4 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2014 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;g>f;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&10>m&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var f=[],g=[],h={precision:100,elapse:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&0>b?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});




//////////////////////////////////
// FLEX SLIDER flexslider.min.js 
//////////////////////////////////
/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,o="click touchend",u="",a,f=r.vars.direction==="vertical",l=r.vars.reverse,c=r.vars.itemWidth>0,h=r.vars.animation==="fade",p=r.vars.asNavFor!=="",d={};focused=true;e.data(t,"flexslider",r);d={init:function(){r.animating=false;r.currentSlide=r.vars.startAt;r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;if(r.vars.animation==="slide")r.vars.animation="swing";r.prop=f?"top":"marginLeft";r.args={};r.manualPause=false;r.stopped=false;r.transitions=!r.vars.video&&!h&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t){if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return true}}return false}();if(r.vars.controlsContainer!=="")r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer);if(r.vars.manualControls!=="")r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls);if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();if(p)d.asNav.setup();r.setup("init");if(r.vars.controlNav)d.controlNav.setup();if(r.vars.directionNav)d.directionNav.setup();if(r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)){e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):false;r.flexAnimate(n,r.vars.pauseOnAction)}})}if(r.vars.mousewheel){r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)})}if(r.vars.pausePlay)d.pausePlay.setup();if(r.vars.slideshow){if(r.vars.pauseOnHover){r.hover(function(){if(!r.manualPlay&&!r.manualPause)r.pause()},function(){if(!r.manualPause&&!r.manualPlay&&!r.stopped)r.play()})}r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()}if(s&&r.vars.touch)d.touch();if(!h||h&&r.vars.smoothHeight)e(window).bind("resize focus",d.resize);setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=true;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");r.slides.click(function(t){t.preventDefault();var n=e(this),s=n.index();var o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide")){r.flexAnimate(r.getTarget("prev"),true)}else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,false,true,true)}})}},controlNav:{setup:function(){if(!r.manualControls){d.controlNav.setupPaging()}else{d.controlNav.setupManual()}},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1){for(var a=0;a<r.pagingCount;a++){s=r.vars.controlNav==="thumbnails"?'<img src="'+r.slides.eq(a).attr("data-thumb")+'"/>':"<a>"+n+"</a>";r.controlNavScaffold.append("<li>"+s+"</li>");n++}}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);d.controlNav.set();d.controlNav.active();r.controlNavScaffold.delegate("a, img",o,function(t){t.preventDefault();if(u===""||u===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;d.controlNav.active();r.controlNav.bind(o,function(t){t.preventDefault();if(u===""||u===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){if(r.pagingCount>1&&t==="add"){r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>"))}else if(r.pagingCount===1){r.controlNavScaffold.find("li").remove()}else{r.controlNav.eq(n).closest("li").remove()}d.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):d.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}d.directionNav.update();r.directionNav.bind(o,function(t){t.preventDefault();var n;if(u===""||u===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}if(u===""){u=t.type}d.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";if(r.pagingCount===1){r.directionNav.addClass(e).attr("tabindex","-1")}else if(!r.vars.animationLoop){if(r.animatingTo===0){r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1")}else if(r.animatingTo===r.last){r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1")}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}d.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(o,function(t){t.preventDefault();if(u===""||u===t.type){if(e(this).hasClass(i+"pause")){r.manualPause=true;r.manualPlay=false;r.pause()}else{r.manualPause=false;r.manualPlay=true;r.play()}}if(u===""){u=t.type}d.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").text(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").text(r.vars.pauseText)}},touch:function(){function p(o){if(r.animating){o.preventDefault()}else if(o.touches.length===1){r.pause();s=f?r.h:r.w;u=Number(new Date);i=c&&l&&r.animatingTo===r.last?0:c&&l?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:c&&r.currentSlide===r.last?r.limit:c?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:l?(r.last-r.currentSlide+r.cloneOffset)*s:(r.currentSlide+r.cloneOffset)*s;e=f?o.touches[0].pageY:o.touches[0].pageX;n=f?o.touches[0].pageX:o.touches[0].pageY;t.addEventListener("touchmove",d,false);t.addEventListener("touchend",v,false)}}function d(t){o=f?e-t.touches[0].pageY:e-t.touches[0].pageX;a=f?Math.abs(o)<Math.abs(t.touches[0].pageX-n):Math.abs(o)<Math.abs(t.touches[0].pageY-n);if(!a||Number(new Date)-u>500){t.preventDefault();if(!h&&r.transitions){if(!r.vars.animationLoop){o=o/(r.currentSlide===0&&o<0||r.currentSlide===r.last&&o>0?Math.abs(o)/s+2:1)}r.setProps(i+o,"setTouch")}}}function v(f){t.removeEventListener("touchmove",d,false);if(r.animatingTo===r.currentSlide&&!a&&!(o===null)){var c=l?-o:o,p=c>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(p)&&(Number(new Date)-u<550&&Math.abs(c)>50||Math.abs(c)>s/2)){r.flexAnimate(p,r.vars.pauseOnAction)}else{if(!h)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}t.removeEventListener("touchend",v,false);e=null;n=null;o=null;i=null}var e,n,i,s,o,u,a=false;t.addEventListener("touchstart",p,false)},resize:function(){if(!r.animating&&r.is(":visible")){if(!c)r.doMath();if(h){d.smoothHeight()}else if(c){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(f){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{if(r.vars.smoothHeight)d.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!f||h){var t=h?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,false,true);break;case"play":if(!n.playing&&!n.asNav){n.play()}break;case"pause":n.pause();break}},setToClearWatchedEvent:function(){clearTimeout(a);a=setTimeout(function(){u=""},3e3)}};r.flexAnimate=function(t,n,o,u,a){if(p&&r.pagingCount===1)r.direction=r.currentItem<t?"next":"prev";if(!r.animating&&(r.canAdvance(t,a)||o)&&r.is(":visible")){if(p&&u){var v=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;v.flexAnimate(t,true,false,true,a);r.direction=r.currentItem<t?"next":"prev";v.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1!==r.currentSlide&&t!==0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}else{r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return false}}r.animating=true;r.animatingTo=t;r.vars.before(r);if(n)r.pause();if(r.syncExists&&!a)d.sync("animate");if(r.vars.controlNav)d.controlNav.active();if(!c)r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;if(r.vars.directionNav)d.directionNav.update();if(t===r.last){r.vars.end(r);if(!r.vars.animationLoop)r.pause()}if(!h){var m=f?r.slides.filter(":first").height():r.computedW,g,y,b;if(c){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else if(r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"){y=l?(r.count+r.cloneOffset)*m:0}else if(r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"){y=l?0:(r.count+1)*m}else{y=l?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m}r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=false;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else{r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}}else{if(!s){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.animating=false;r.currentSlide=r.animatingTo}}if(r.vars.smoothHeight)d.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){if(!h&&!c){if(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop){r.setProps(e,"jumpEnd")}else if(r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop){r.setProps(e,"jumpStart")}}r.animating=false;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){if(!r.animating&&focused)r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=false;if(r.vars.pausePlay)d.pausePlay.update("play");if(r.syncExists)d.sync("pause")};r.play=function(){r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.playing=true;if(r.vars.pausePlay)d.pausePlay.update("pause");if(r.syncExists)d.sync("play")};r.stop=function(){r.pause();r.stopped=true};r.canAdvance=function(e,t){var n=p?r.pagingCount-1:r.last;return t?true:p&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?true:p&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?false:e===r.currentSlide&&!p?false:r.vars.animationLoop?true:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?false:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?false:true};r.getTarget=function(e){r.direction=e;if(e==="next"){return r.currentSlide===r.last?0:r.currentSlide+1}else{return r.currentSlide===0?r.last:r.currentSlide-1}};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(c){return t==="setTouch"?e:l&&r.animatingTo===r.last?0:l?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n}else{switch(t){case"setTotal":return l?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return l?e:e;case"jumpEnd":return l?e:r.count*e;case"jumpStart":return l?r.count*e:e;default:return e}}}();return i*-1+"px"}();if(r.transitions){i=f?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n)}r.args[r.prop]=i;if(r.transitions||n===undefined)r.container.css(r.args)};r.setup=function(t){if(!h){var n,o;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(l){o=e.makeArray(r.slides).reverse();r.slides=e(o);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!c){r.cloneCount=2;r.cloneOffset=1;if(t!=="init")r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"))}r.newSlides=e(r.vars.selector,r);n=l?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(f&&!c){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});if(r.vars.smoothHeight)d.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(t==="init"){if(!s){r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing)}else{r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2})}}if(r.vars.smoothHeight)d.smoothHeight()}if(!c)r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide")};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(c){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!c){if(e<r.currentSlide){r.currentSlide+=1}else if(e<=r.currentSlide&&e!==0){r.currentSlide-=1}r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls){if(t==="add"&&!c||r.pagingCount>r.controlNav.length){d.controlNav.update("add")}else if(t==="remove"&&!c||r.pagingCount<r.controlNav.length){if(c&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}d.controlNav.update("remove",r.last)}}if(r.vars.directionNav)d.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;if(f&&l){n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i)}else{n!==undefined?r.slides.eq(n).before(i):r.container.append(i)}r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;if(isNaN(t)){e(t,r.slides).remove()}else{f&&l?r.slides.eq(r.last).remove():r.slides.eq(t).remove()}r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};d.init()};e(window).blur(function(e){focused=false}).focus(function(e){focused=true});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:false,pauseOnAction:true,pauseOnHover:false,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};e.fn.flexslider=function(t){if(t===undefined)t={};if(typeof t==="object"){return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1){i.fadeIn(400);if(t.start)t.start(n)}else if(n.data("flexslider")===undefined){new e.flexslider(this,t)}})}else{var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),true);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),true);break;default:if(typeof t==="number")n.flexAnimate(t,true)}}}});