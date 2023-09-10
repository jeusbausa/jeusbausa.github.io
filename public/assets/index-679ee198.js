import{a as qt,r as $,j as kt}from"./index-14b1636e.js";function Rr(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function kr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Ar=function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(kr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Rr(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),M="-ms-",nt="-moz-",y="-webkit-",nr="comm",Pt="rule",_t="decl",Mr="@import",ar="@keyframes",Nr="@layer",Tr=Math.abs,at=String.fromCharCode,zr=Object.assign;function Pr(t,r){return A(t,0)^45?(((r<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3):0}function or(t){return t.trim()}function _r(t,r){return(t=r.exec(t))?t[0]:t}function h(t,r,e){return t.replace(r,e)}function At(t,r){return t.indexOf(r)}function A(t,r){return t.charCodeAt(r)|0}function U(t,r,e){return t.slice(r,e)}function L(t){return t.length}function Yt(t){return t.length}function Z(t,r){return r.push(t),t}function Yr(t,r){return t.map(r).join("")}var ot=1,B=1,sr=0,N=0,O=0,D="";function st(t,r,e,n,a,o,i){return{value:t,root:r,parent:e,type:n,props:a,children:o,line:ot,column:B,length:i,return:""}}function W(t,r){return zr(st("",null,null,"",null,null,0),t,{length:-t.length},r)}function Fr(){return O}function Lr(){return O=N>0?A(D,--N):0,B--,O===10&&(B=1,ot--),O}function T(){return O=N<sr?A(D,N++):0,B++,O===10&&(B=1,ot++),O}function X(){return A(D,N)}function tt(){return N}function K(t,r){return U(D,t,r)}function G(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ir(t){return ot=B=1,sr=L(D=t),N=0,[]}function cr(t){return D="",t}function rt(t){return or(K(N-1,Mt(t===91?t+2:t===40?t+1:t)))}function Vr(t){for(;(O=X())&&O<33;)T();return G(t)>2||G(O)>3?"":" "}function Xr(t,r){for(;--r&&T()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return K(t,tt()+(r<6&&X()==32&&T()==32))}function Mt(t){for(;T();)switch(O){case t:return N;case 34:case 39:t!==34&&t!==39&&Mt(O);break;case 40:t===41&&Mt(t);break;case 92:T();break}return N}function jr(t,r){for(;T()&&t+O!==47+10;)if(t+O===42+42&&X()===47)break;return"/*"+K(r,N-1)+"*"+at(t===47?t:T())}function Br(t){for(;!G(X());)T();return K(t,N)}function Dr(t){return cr(et("",null,null,null,[""],t=ir(t),0,[0],t))}function et(t,r,e,n,a,o,i,c,f){for(var l=0,m=0,u=i,w=0,I=0,x=0,d=1,E=1,v=1,p=0,C="",_=a,Y=o,F=n,S=C;E;)switch(x=p,p=T()){case 40:if(x!=108&&A(S,u-1)==58){At(S+=h(rt(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:S+=rt(p);break;case 9:case 10:case 13:case 32:S+=Vr(x);break;case 92:S+=Xr(tt()-1,7);continue;case 47:switch(X()){case 42:case 47:Z(Wr(jr(T(),tt()),r,e),f);break;default:S+="/"}break;case 123*d:c[l++]=L(S)*v;case 125*d:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+m:v==-1&&(S=h(S,/\f/g,"")),I>0&&L(S)-u&&Z(I>32?Kt(S+";",n,e,u-1):Kt(h(S," ","")+";",n,e,u-2),f);break;case 59:S+=";";default:if(Z(F=Ht(S,r,e,l,m,a,c,C,_=[],Y=[],u),o),p===123)if(m===0)et(S,r,F,F,_,o,u,c,Y);else switch(w===99&&A(S,3)===110?100:w){case 100:case 108:case 109:case 115:et(t,F,F,n&&Z(Ht(t,F,F,0,0,a,c,C,a,_=[],u),Y),a,Y,u,c,n?_:Y);break;default:et(S,F,F,F,[""],Y,0,c,Y)}}l=m=I=0,d=v=1,C=S="",u=i;break;case 58:u=1+L(S),I=x;default:if(d<1){if(p==123)--d;else if(p==125&&d++==0&&Lr()==125)continue}switch(S+=at(p),p*d){case 38:v=m>0?1:(S+="\f",-1);break;case 44:c[l++]=(L(S)-1)*v,v=1;break;case 64:X()===45&&(S+=rt(T())),w=X(),m=u=L(C=S+=Br(tt())),p++;break;case 45:x===45&&L(S)==2&&(d=0)}}return o}function Ht(t,r,e,n,a,o,i,c,f,l,m){for(var u=a-1,w=a===0?o:[""],I=Yt(w),x=0,d=0,E=0;x<n;++x)for(var v=0,p=U(t,u+1,u=Tr(d=i[x])),C=t;v<I;++v)(C=or(d>0?w[v]+" "+p:h(p,/&\f/g,w[v])))&&(f[E++]=C);return st(t,r,e,a===0?Pt:c,f,l,m)}function Wr(t,r,e){return st(t,r,e,nr,at(Fr()),U(t,2,-2),0)}function Kt(t,r,e,n){return st(t,r,e,_t,U(t,0,n),U(t,n+1,-1),n)}function j(t,r){for(var e="",n=Yt(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function Ur(t,r,e,n){switch(t.type){case Nr:if(t.children.length)break;case Mr:case _t:return t.return=t.return||t.value;case nr:return"";case ar:return t.return=t.value+"{"+j(t.children,n)+"}";case Pt:t.value=t.props.join(",")}return L(e=j(t.children,n))?t.return=t.value+"{"+e+"}":""}function Gr(t){var r=Yt(t);return function(e,n,a,o){for(var i="",c=0;c<r;c++)i+=t[c](e,n,a,o)||"";return i}}function qr(t){return function(r){r.root||(r=r.return)&&t(r)}}function Hr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Kr=function(r,e,n){for(var a=0,o=0;a=o,o=X(),a===38&&o===12&&(e[n]=1),!G(o);)T();return K(r,N)},Zr=function(r,e){var n=-1,a=44;do switch(G(a)){case 0:a===38&&X()===12&&(e[n]=1),r[n]+=Kr(N-1,e,n);break;case 2:r[n]+=rt(a);break;case 4:if(a===44){r[++n]=X()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=at(a)}while(a=T());return r},Jr=function(r,e){return cr(Zr(ir(r),e))},Zt=new WeakMap,Qr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Zt.get(n))&&!a){Zt.set(r,!0);for(var o=[],i=Jr(e,o),c=n.props,f=0,l=0;f<i.length;f++)for(var m=0;m<c.length;m++,l++)r.props[l]=o[f]?i[f].replace(/&\f/g,c[m]):c[m]+" "+i[f]}}},te=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function fr(t,r){switch(Pr(t,r)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+nt+t+M+t+t;case 6828:case 4268:return y+t+M+t+t;case 6165:return y+t+M+"flex-"+t+t;case 5187:return y+t+h(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+M+"flex-$1$2")+t;case 5443:return y+t+M+"flex-item-"+h(t,/flex-|-self/,"")+t;case 4675:return y+t+M+"flex-line-pack"+h(t,/align-content|flex-|-self/,"")+t;case 5548:return y+t+M+h(t,"shrink","negative")+t;case 5292:return y+t+M+h(t,"basis","preferred-size")+t;case 6060:return y+"box-"+h(t,"-grow","")+y+t+M+h(t,"grow","positive")+t;case 4554:return y+h(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(t)-1-r>6)switch(A(t,r+1)){case 109:if(A(t,r+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+nt+(A(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~At(t,"stretch")?fr(h(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(A(t,r+1)!==115)break;case 6444:switch(A(t,L(t)-3-(~At(t,"!important")&&10))){case 107:return h(t,":",":"+y)+t;case 101:return h(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+y+(A(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+M+"$2box$3")+t}break;case 5936:switch(A(t,r+11)){case 114:return y+t+M+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+M+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+M+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return y+t+M+t+t}return t}var re=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case _t:r.return=fr(r.value,r.length);break;case ar:return j([W(r,{value:h(r.value,"@","@"+y)})],a);case Pt:if(r.length)return Yr(r.props,function(o){switch(_r(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return j([W(r,{props:[h(o,/:(read-\w+)/,":"+nt+"$1")]})],a);case"::placeholder":return j([W(r,{props:[h(o,/:(plac\w+)/,":"+y+"input-$1")]}),W(r,{props:[h(o,/:(plac\w+)/,":"+nt+"$1")]}),W(r,{props:[h(o,/:(plac\w+)/,M+"input-$1")]})],a)}return""})}},ee=[re],ne=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var E=d.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=r.stylisPlugins||ee,o={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(d){for(var E=d.getAttribute("data-emotion").split(" "),v=1;v<E.length;v++)o[E[v]]=!0;c.push(d)});var f,l=[Qr,te];{var m,u=[Ur,qr(function(d){m.insert(d)})],w=Gr(l.concat(a,u)),I=function(E){return j(Dr(E),w)};f=function(E,v,p,C){m=p,I(E?E+"{"+v.styles+"}":v.styles),C&&(x.inserted[v.name]=!0)}}var x={key:e,sheet:new Ar({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:f};return x.sheet.hydrate(c),x},dr={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=typeof Symbol=="function"&&Symbol.for,Ft=k?Symbol.for("react.element"):60103,Lt=k?Symbol.for("react.portal"):60106,it=k?Symbol.for("react.fragment"):60107,ct=k?Symbol.for("react.strict_mode"):60108,ft=k?Symbol.for("react.profiler"):60114,dt=k?Symbol.for("react.provider"):60109,lt=k?Symbol.for("react.context"):60110,Vt=k?Symbol.for("react.async_mode"):60111,mt=k?Symbol.for("react.concurrent_mode"):60111,ut=k?Symbol.for("react.forward_ref"):60112,pt=k?Symbol.for("react.suspense"):60113,ae=k?Symbol.for("react.suspense_list"):60120,yt=k?Symbol.for("react.memo"):60115,ht=k?Symbol.for("react.lazy"):60116,oe=k?Symbol.for("react.block"):60121,se=k?Symbol.for("react.fundamental"):60117,ie=k?Symbol.for("react.responder"):60118,ce=k?Symbol.for("react.scope"):60119;function z(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Ft:switch(t=t.type,t){case Vt:case mt:case it:case ft:case ct:case pt:return t;default:switch(t=t&&t.$$typeof,t){case lt:case ut:case ht:case yt:case dt:return t;default:return r}}case Lt:return r}}}function lr(t){return z(t)===mt}g.AsyncMode=Vt;g.ConcurrentMode=mt;g.ContextConsumer=lt;g.ContextProvider=dt;g.Element=Ft;g.ForwardRef=ut;g.Fragment=it;g.Lazy=ht;g.Memo=yt;g.Portal=Lt;g.Profiler=ft;g.StrictMode=ct;g.Suspense=pt;g.isAsyncMode=function(t){return lr(t)||z(t)===Vt};g.isConcurrentMode=lr;g.isContextConsumer=function(t){return z(t)===lt};g.isContextProvider=function(t){return z(t)===dt};g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ft};g.isForwardRef=function(t){return z(t)===ut};g.isFragment=function(t){return z(t)===it};g.isLazy=function(t){return z(t)===ht};g.isMemo=function(t){return z(t)===yt};g.isPortal=function(t){return z(t)===Lt};g.isProfiler=function(t){return z(t)===ft};g.isStrictMode=function(t){return z(t)===ct};g.isSuspense=function(t){return z(t)===pt};g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===it||t===mt||t===ft||t===ct||t===pt||t===ae||typeof t=="object"&&t!==null&&(t.$$typeof===ht||t.$$typeof===yt||t.$$typeof===dt||t.$$typeof===lt||t.$$typeof===ut||t.$$typeof===se||t.$$typeof===ie||t.$$typeof===ce||t.$$typeof===oe)};g.typeOf=z;dr.exports=g;var fe=dr.exports,mr=fe,de={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ur={};ur[mr.ForwardRef]=de;ur[mr.Memo]=le;var me=!0;function pr(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):n+=a+" "}),n}var Xt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||me===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},yr=function(r,e,n){Xt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function ue(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var pe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ye=/[A-Z]|^ms/g,he=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hr=function(r){return r.charCodeAt(1)===45},Jt=function(r){return r!=null&&typeof r!="boolean"},It=Hr(function(t){return hr(t)?t:t.replace(ye,"-$&").toLowerCase()}),Qt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(he,function(n,a,o){return V={name:a,styles:o,next:V},a})}return pe[r]!==1&&!hr(r)&&typeof e=="number"&&e!==0?e+"px":e};function q(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return V={name:e.name,styles:e.styles,next:V},e.name;if(e.styles!==void 0){var n=e.next;if(n!==void 0)for(;n!==void 0;)V={name:n.name,styles:n.styles,next:V},n=n.next;var a=e.styles+";";return a}return ge(t,r,e)}case"function":{if(t!==void 0){var o=V,i=e(t);return V=o,q(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function ge(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=q(t,r,e[a])+";";else for(var o in e){var i=e[o];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=o+"{"+r[i]+"}":Jt(i)&&(n+=It(o)+":"+Qt(o,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)Jt(i[c])&&(n+=It(o)+":"+Qt(o,i[c])+";");else{var f=q(t,r,i);switch(o){case"animation":case"animationName":{n+=It(o)+":"+f+";";break}default:n+=o+"{"+f+"}"}}}return n}var tr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,V,jt=function(r,e,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,o="";V=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,o+=q(n,e,i)):o+=i[0];for(var c=1;c<r.length;c++)o+=q(n,e,r[c]),a&&(o+=i[c]);tr.lastIndex=0;for(var f="",l;(l=tr.exec(o))!==null;)f+="-"+l[1];var m=ue(o)+f;return{name:m,styles:o,next:V}},be=function(r){return r()},xe=qt["useInsertionEffect"]?qt["useInsertionEffect"]:!1,gr=xe||be,Bt={}.hasOwnProperty,br=$.createContext(typeof HTMLElement<"u"?ne({key:"css"}):null);br.Provider;var xr=function(r){return $.forwardRef(function(e,n){var a=$.useContext(br);return r(e,a,n)})},vr=$.createContext({}),Nt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ve=function(r,e){var n={};for(var a in e)Bt.call(e,a)&&(n[a]=e[a]);return n[Nt]=r,n},we=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return Xt(e,n,a),gr(function(){return yr(e,n,a)}),null},Se=xr(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[Nt],o=[n],i="";typeof t.className=="string"?i=pr(r.registered,o,t.className):t.className!=null&&(i=t.className+" ");var c=jt(o,void 0,$.useContext(vr));i+=r.key+"-"+c.name;var f={};for(var l in t)Bt.call(t,l)&&l!=="css"&&l!==Nt&&(f[l]=t[l]);return f.ref=e,f.className=i,$.createElement($.Fragment,null,$.createElement(we,{cache:r,serialized:c,isStringTag:typeof a=="string"}),$.createElement(a,f))}),$e=Se,Ce=kt.Fragment;function R(t,r,e){return Bt.call(r,"css")?kt.jsx($e,ve(t,r),e):kt.jsx(t,r,e)}function wr(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return jt(r)}var s=function(){var r=wr.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ee=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=t(o);else{i="";for(var c in o)o[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function Oe(t,r,e){var n=[],a=pr(t,n,e);return n.length<2?e:a+r(n)}var Ie=function(r){var e=r.cache,n=r.serializedArr;return gr(function(){for(var a=0;a<n.length;a++)yr(e,n[a],!1)}),null},Rt=xr(function(t,r){var e=!1,n=[],a=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];var w=jt(m,r.registered);return n.push(w),Xt(r,w,!1),r.key+"-"+w.name},o=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];return Oe(r.registered,a,Ee(m))},i={css:a,cx:o,theme:$.useContext(vr)},c=t.children(i);return e=!0,$.createElement($.Fragment,null,$.createElement(Ie,{cache:r,serializedArr:n}),c)}),Re=Object.defineProperty,ke=(t,r,e)=>r in t?Re(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,J=(t,r,e)=>(ke(t,typeof r!="symbol"?r+"":r,e),e),Tt=new Map,Q=new WeakMap,rr=0,Ae=void 0;function Me(t){return t?(Q.has(t)||(rr+=1,Q.set(t,rr.toString())),Q.get(t)):"0"}function Ne(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?Me(t.root):t[r]}`).toString()}function Te(t){let r=Ne(t),e=Tt.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&a.some(m=>c.intersectionRatio>=m);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=n.get(c.target))==null||f.forEach(m=>{m(l,c)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},Tt.set(r,e)}return e}function Sr(t,r,e={},n=Ae){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const f=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:a,observer:o,elements:i}=Te(e);let c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),o.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),o.unobserve(t)),i.size===0&&(o.disconnect(),Tt.delete(a))}}function ze(t){return typeof t.children!="function"}var er=class extends $.Component{constructor(t){super(t),J(this,"node",null),J(this,"_unobserveCb",null),J(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),J(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),ze(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Sr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:I,entry:x}=this.state;return t({inView:I,entry:x,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:m,fallbackInView:u,...w}=this.props;return $.createElement(r||"div",{ref:this.handleNode,...w},t)}};function $r({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var m;const[u,w]=$.useState(null),I=$.useRef(),[x,d]=$.useState({inView:!!c,entry:void 0});I.current=l,$.useEffect(()=>{if(i||!u)return;let C;return C=Sr(u,(_,Y)=>{d({inView:_,entry:Y}),I.current&&I.current(_,Y),Y.isIntersecting&&o&&C&&(C(),C=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,u,a,n,o,i,e,f,r]);const E=(m=x.entry)==null?void 0:m.target,v=$.useRef();!u&&E&&!o&&!i&&v.current!==E&&(v.current=E,d({inView:!!c,entry:void 0}));const p=[w,x.inView,x.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}var Cr={exports:{}},b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),bt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),wt=Symbol.for("react.context"),Pe=Symbol.for("react.server_context"),St=Symbol.for("react.forward_ref"),$t=Symbol.for("react.suspense"),Ct=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),Er;Er=Symbol.for("react.module.reference");function P(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Dt:switch(t=t.type,t){case gt:case xt:case bt:case $t:case Ct:return t;default:switch(t=t&&t.$$typeof,t){case Pe:case wt:case St:case Ot:case Et:case vt:return t;default:return r}}case Wt:return r}}}b.ContextConsumer=wt;b.ContextProvider=vt;b.Element=Dt;b.ForwardRef=St;b.Fragment=gt;b.Lazy=Ot;b.Memo=Et;b.Portal=Wt;b.Profiler=xt;b.StrictMode=bt;b.Suspense=$t;b.SuspenseList=Ct;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(t){return P(t)===wt};b.isContextProvider=function(t){return P(t)===vt};b.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dt};b.isForwardRef=function(t){return P(t)===St};b.isFragment=function(t){return P(t)===gt};b.isLazy=function(t){return P(t)===Ot};b.isMemo=function(t){return P(t)===Et};b.isPortal=function(t){return P(t)===Wt};b.isProfiler=function(t){return P(t)===xt};b.isStrictMode=function(t){return P(t)===bt};b.isSuspense=function(t){return P(t)===$t};b.isSuspenseList=function(t){return P(t)===Ct};b.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===gt||t===xt||t===bt||t===$t||t===Ct||t===_e||typeof t=="object"&&t!==null&&(t.$$typeof===Ot||t.$$typeof===Et||t.$$typeof===vt||t.$$typeof===wt||t.$$typeof===St||t.$$typeof===Er||t.getModuleId!==void 0)};b.typeOf=P;Cr.exports=b;var Ye=Cr.exports;s`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;s`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;s`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;s`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;s`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;s`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Fe=s`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Le=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ve=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xe=s`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,je=s`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ut=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Be=s`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,De=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,We=s`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ue=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ge=s`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qe=s`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,He=s`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ke({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=Ut,iterationCount:a=1}){return wr`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Ze(t){return t==null}function Je(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Or(t,r){return e=>e?t():r()}function H(t){return Or(t,()=>null)}function zt(t){return H(()=>({opacity:0}))(t)}const Gt=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=Ut,triggerOnce:c=!1,className:f,style:l,childClassName:m,childStyle:u,children:w,onVisibilityChange:I}=t,x=$.useMemo(()=>Ke({keyframes:i,duration:a}),[a,i]);return Ze(w)?null:Je(w)?R(tn,{...t,animationStyles:x,children:String(w)}):Ye.isFragment(w)?R(Ir,{...t,animationStyles:x}):R(Ce,{children:$.Children.map(w,(d,E)=>{if(!$.isValidElement(d))return null;const v=n+(r?E*a*e:0);switch(d.type){case"ol":case"ul":return R(Rt,{children:({cx:p})=>R(d.type,{...d.props,className:p(f,d.props.className),style:Object.assign({},l,d.props.style),children:R(Gt,{...t,children:d.props.children})})});case"li":return R(er,{threshold:o,triggerOnce:c,onChange:I,children:({inView:p,ref:C})=>R(Rt,{children:({cx:_})=>R(d.type,{...d.props,ref:C,className:_(m,d.props.className),css:H(()=>x)(p),style:Object.assign({},u,d.props.style,zt(!p),{animationDelay:v+"ms"})})})});default:return R(er,{threshold:o,triggerOnce:c,onChange:I,children:({inView:p,ref:C})=>R("div",{ref:C,className:f,css:H(()=>x)(p),style:Object.assign({},l,zt(!p),{animationDelay:v+"ms"}),children:R(Rt,{children:({cx:_})=>R(d.type,{...d.props,className:_(m,d.props.className),style:Object.assign({},u,d.props.style)})})})})}})})},Qe={display:"inline-block",whiteSpace:"pre"},tn=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:m,onVisibilityChange:u}=t,{ref:w,inView:I}=$r({triggerOnce:c,threshold:i,onChange:u});return Or(()=>R("div",{ref:w,className:f,style:Object.assign({},l,Qe),children:m.split("").map((x,d)=>R("span",{css:H(()=>r)(I),style:{animationDelay:a+d*o*n+"ms"},children:x},d))}),()=>R(Ir,{...t,children:m}))(e)},Ir=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=$r({triggerOnce:n,threshold:e,onChange:c});return R("div",{ref:f,className:a,css:H(()=>r)(l),style:Object.assign({},o,zt(!l)),children:i})};s`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;s`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const rn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,en=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,nn=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,an=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,on=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,sn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,cn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,fn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,dn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ln=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,mn=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,un=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,pn=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function yn(t,r,e){switch(e){case"bottom-left":return r?en:Le;case"bottom-right":return r?nn:Ve;case"down":return t?r?on:je:r?an:Xe;case"left":return t?r?cn:Be:r?sn:Ut;case"right":return t?r?dn:We:r?fn:De;case"top-left":return r?ln:Ue;case"top-right":return r?mn:Ge;case"up":return t?r?pn:He:r?un:qe;default:return r?rn:Fe}}const On=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=$.useMemo(()=>yn(r,n,e),[r,e,n]);return R(Gt,{keyframes:o,...a})};s`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;s`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;s`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const hn=s`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,gn=s`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,bn=s`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,xn=s`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,vn=s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,wn=s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Sn=s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,$n=s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Cn(t,r){switch(r){case"down":return t?vn:hn;case"right":return t?Sn:bn;case"up":return t?$n:xn;case"left":default:return t?wn:gn}}const In=t=>{const{direction:r,reverse:e=!1,...n}=t,a=$.useMemo(()=>Cn(e,r),[r,e]);return R(Gt,{keyframes:a,...n})};s`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{On as F,Gt as R,In as S};
