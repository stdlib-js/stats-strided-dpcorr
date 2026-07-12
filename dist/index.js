"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=n(function(z,c){
var m=require('@stdlib/stats-strided-dpcorrwd/dist').ndarray;function l(e,r,a,t,i,u,o){return m(e,r,a,t,i,u,o)}c.exports=l
});var p=n(function(A,q){
var d=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,r,a,t,i){var u=d(e,a),o=d(e,i);return R(e,r,a,u,t,i,o)}q.exports=_
});var x=n(function(B,f){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),E=s();w(y,"ndarray",E);f.exports=y
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=x(),v,j=b(O(__dirname,"./native.js"));g(j)?v=h:v=j;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
