/*! formstone v1.4.16-1 [number.js] 2019-08-06 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(i,t){"use strict";function s(t){t.data.$container.addClass(m.focus)}function r(t){l(t.data,0),t.data.$container.removeClass(m.focus)}function o(t){var e=t.data;38!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),l(e,38===t.keyCode?e.step:-e.step))}function d(t){p.killEvent(t),n(t);var e=t.data;if(!e.disabled&&t.which<=1){var a=i(t.target).hasClass(m.up)?e.step:-e.step;e.timer=p.startTimer(e.timer,300,function(){e.timer=p.startTimer(e.timer,100,function(){l(e,a)},!0)}),l(e,a),b.on([f.touchEnd,f.mouseUp].join(" "),e,n)}}function n(t){p.killEvent(t);var e=t.data;p.clearTimer(e.timer,!0),b.off(f.namespace)}function l(t,e){var a=parseFloat(t.$el.val()),n=e;"undefined"===i.type(a)||isNaN(a)?n=isNaN(a)?"":!1!==t.min?t.min:"":!1!==t.min&&a<t.min?n=t.min:n+=a,""!==n&&(!1!==t.min&&n<t.min&&(n=t.min),!1!==t.max&&n>t.max&&(n=t.max)),n===a&&0!=e||(""!==n&&(n=function(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}(n,t.digits)),t.$el.val(n).trigger(f.raw.change,[!0]))}function u(t){var e=String(t);return-1<e.indexOf(".")?e.length-e.indexOf(".")-1:0}var e=t.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"},theme:"fs-light"},classes:["arrow","up","down","disabled","focus"],methods:{_construct:function(t){var e=parseFloat(this.attr("min")),a=parseFloat(this.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!a&&0!==a)&&a,t.step=parseFloat(this.attr("step"))||1,t.timer=null,t.digits=u(t.step),t.disabled=this.is(":disabled")||this.is("[readonly]");var n="";n+='<button type="button" class="'+[m.arrow,m.up].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.up+"</button>",n+='<button type="button" class="'+[m.arrow,m.down].join(" ")+'" aria-hidden="true" tabindex="-1">'+t.labels.down+"</button>",this.wrap('<div class="'+[m.base,t.theme,t.customClass,t.disabled?m.disabled:""].join(" ")+'"></div>').after(n),t.$container=this.parent(c.base),t.$arrows=t.$container.find(c.arrow),this.on(f.focus,t,s).on(f.blur,t,r).on(f.keyPress,t,o),t.$container.on([f.touchStart,f.mouseDown].join(" "),c.arrow,t,d),l(t,0)},_destruct:function(t){t.$arrows.remove(),this.unwrap().off(f.namespace)},enable:function(t){t.disabled&&(this.prop("disabled",!1),t.$container.removeClass(m.disabled),t.disabled=!1)},disable:function(t){t.disabled||(this.prop("disabled",!0),t.$container.addClass(m.disabled),t.disabled=!0)},update:function(t){var e=parseFloat(t.$el.attr("min")),a=parseFloat(t.$el.attr("max"));t.min=!(!e&&0!==e)&&e,t.max=!(!a&&0!==a)&&a,t.step=parseFloat(t.$el.attr("step"))||1,t.timer=null,t.digits=u(t.step),t.disabled=t.$el.is(":disabled")||t.$el.is("[readonly]"),l(t,0)}}}),c=e.classes,m=c.raw,f=e.events,p=e.functions,b=null;t.Ready(function(){b=t.$body})});