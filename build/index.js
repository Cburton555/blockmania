(window.webpackJsonp_tk_blockmania=window.webpackJsonp_tk_blockmania||[]).push([[1],{4:function(e,t,n){}}]),function(e){function t(t){for(var o,c,a=t[0],l=t[1],u=t[2],s=0,f=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp_tk_blockmania=window.webpackJsonp_tk_blockmania||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=l;i.push([6,1]),n()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(0),i=(n(4),n(1)),c=n(2);n(5),Object(o.registerBlockType)("tk-blockmania/tk-blockmania",{apiVersion:2,title:Object(r.__)("Testimonial","tk-blockmania"),description:Object(r.__)("A collection of editor blocks.","tk-blockmania"),category:"widgets",icon:"admin-users",supports:{html:!1},edit:function(){return Object(i.createElement)("p",Object(c.useBlockProps)(),Object(r.__)("Testimonial – hello from the editor!","tk-blockmania"))},save:function(){return Object(i.createElement)("p",c.useBlockProps.save(),Object(r.__)("Testimonial – hello from the saved content!","tk-blockmania"))}})}]);