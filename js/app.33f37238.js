(function(t){function s(s){for(var c,r,i=s[0],n=s[1],p=s[2],C=0,o=[];C<i.length;C++)r=i[C],Object.prototype.hasOwnProperty.call(e,r)&&e[r]&&o.push(e[r][0]),e[r]=0;for(c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c]);d&&d(s);while(o.length)o.shift()();return l.push.apply(l,p||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],c=!0,i=1;i<a.length;i++){var n=a[i];0!==e[n]&&(c=!1)}c&&(l.splice(s--,1),t=r(r.s=a[0]))}return t}var c={},e={app:0},l=[];function r(s){if(c[s])return c[s].exports;var a=c[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=c,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var c in t)r.d(a,c,function(s){return t[s]}.bind(null,c));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=s,i=i.slice();for(var p=0;p<i.length;p++)s(i[p]);var d=n;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("cd49")},"16a3":function(t,s,a){"use strict";var c=a("853e"),e=a.n(c);e.a},"5c0b":function(t,s,a){"use strict";var c=a("c7f1"),e=a.n(c);e.a},"853e":function(t,s,a){},"96b0":function(t,s,a){"use strict";var c=a("daf7"),e=a.n(c);e.a},a1a3:function(t,s,a){},bd5a:function(t,s,a){"use strict";var c=a("f46e"),e=a.n(c);e.a},c7f1:function(t,s,a){},cd49:function(t,s,a){"use strict";a.r(s);var c=a("7c54"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("Navbar",{attrs:{items:t.menuItems}}),a("Home"),a("Mascot")],1)},l=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home container-xlarge"},[t.needsDisplayName?a("div",[a("div",[t._v("name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newDisplayName,expression:"newDisplayName"}],attrs:{id:"username",placeholder:"Your name"},domProps:{value:t.newDisplayName},on:{input:function(s){s.target.composing||(t.newDisplayName=s.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:t.setName}},[t._v("Set name")])]):t.isLoggedIn?a("div",[a("div",[t._v("Message:")]),a("MessageInput",{on:{send:t.sendMessage}})],1):t._e(),t.messagesDescending&&t.messagesDescending.length>0?a("div",[a("h3",[t._v("Messages")]),t._l(t.messagesDescending,(function(s,c){return a("p",{key:c},[t._v(t._s(s.uid)+" - "+t._s(s.name)+" - "+t._s(s.message)+" - "+t._s(s.timestamp)+" -- "+t._s(s.time)+" -- "+t._s(s.date))])}))],2):t._e()])},i=[],n=a("2b1f"),p=a.n(n),d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-input"},[a("span",{staticClass:"textarea",attrs:{id:t.sendId,role:"textbox",contenteditable:""}}),a("a",{staticClass:"button",on:{click:t.send}},[a("PaperPlane")],1)])},C=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("svg",{staticClass:"paper-plane",attrs:{"aria-hidden":"true",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}})])},h=[],M=c["a"].extend({name:"PaperPlane"}),u=M,z=a("ea8e"),m=Object(z["a"])(u,o,h,!1,null,null,null),f=m.exports,g=c["a"].extend({data:function(){var t="send-input-".concat(Date.now());return{sendId:t}},components:{PaperPlane:f},name:"MessageInput",methods:{send:function(){var t=document.getElementById(this.sendId);if(t){var s=t.innerText;s&&!/^\s*$/.test(s)&&this.$emit("send",s),t.innerText=""}}}}),v=g,b=(a("96b0"),Object(z["a"])(v,d,C,!1,null,null,null)),y=b.exports,w=a("deb5"),O=a.n(w),_=(a("4288"),a("ee44"),{apiKey:"AIzaSyBOW9WdpwzyNMuY9SGJMW8ptsme9XD4BOQ",appId:"draakjes-cc9ab",databaseURL:"https://draakjes-cc9ab.firebaseio.com/"}),x=O.a.initializeApp(_),L=x.database(),j=O.a.auth(x);function N(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);s&&(c=c.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,c)}return a}function D(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?N(Object(a),!0).forEach((function(s){p()(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}var P=c["a"].extend({components:{MessageInput:y},name:"Home",data:function(){return{messages:[],newDisplayName:"",displayName:"",isLoggedIn:!1}},firebase:{messages:L.ref("messages").limitToLast(20)},mounted:function(){this.loginAnonymous()},methods:{sendMessage:function(t){if(j.currentUser&&j.currentUser.displayName){var s=L.ref("messages").push(),a={uid:j.currentUser.uid,name:j.currentUser.displayName,message:t,timestamp:Date.now()};s.set(a)}},loginAnonymous:function(){var t=this;j.onAuthStateChanged((function(s){var a;s?(t.displayName=null!==(a=s.displayName)&&void 0!==a?a:"",t.isLoggedIn=!0):(t.newDisplayName="",t.displayName="",t.isLoggedIn=!1)})),j.signInAnonymously().catch((function(t){}))},setName:function(){var t=this;this.newDisplayName&&j.currentUser&&j.currentUser.updateProfile({displayName:this.newDisplayName}).then((function(s){t.displayName=t.newDisplayName})).catch((function(t){console.error(t)}))}},computed:{messagesDescending:function(){var t=this.messages.slice().reverse();return t.map((function(t){return D(D({},t),{},{time:new Date(t.timestamp).toLocaleTimeString(),date:new Date(t.timestamp).toLocaleDateString()})}))},needsDisplayName:function(){return this.isLoggedIn&&""===this.displayName}}}),V=P,H=Object(z["a"])(V,r,i,!1,null,null,null),I=H.exports,S=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbar"},[a("div",{staticClass:"container-xlarge"},[a("a",{attrs:{target:"_blank",href:"https://discord.gg/0gmeEATqIOx8gP8l"}},[a("svg",{staticClass:"logo-3LF899",attrs:{width:"124",height:"34",viewBox:"0 0 124 34"}},[a("g",{attrs:{fill:"currentColor"}},[a("path",{attrs:{d:"M18.1558 14.297C17.1868 14.297 16.4218 15.13 16.4218 16.167C16.4218 17.204\n\t\t\t\t\t\t17.2038 18.037 18.1558 18.037C19.1248 18.037 19.8898 17.204 19.8898 16.167C19.8898\n\t\t\t\t\t\t15.13 19.1078 14.297 18.1558 14.297ZM11.9508 14.297C10.9818 14.297 10.2168 15.13\n\t\t\t\t\t\t10.2168 16.167C10.2168 17.204 10.9988 18.037 11.9508 18.037C12.9198 18.037 13.6848\n\t\t\t\t\t\t17.204 13.6848 16.167C13.7018 15.13 12.9198 14.297 11.9508 14.297Z"}}),a("path",{attrs:{d:"M26.4178 0.152954H3.63783C1.71683 0.152954 0.152832 1.71695 0.152832 3.63795V26.418C0.152832 28.339 1.71683 29.903 3.63783 29.903H22.9158L22.0148 26.792L24.1908 28.798L26.2478 30.685L29.9198 33.864V3.63795C29.9028 1.71695 28.3388 0.152954 26.4178 0.152954ZM19.8558 22.168C19.8558 22.168 19.2438 21.437 18.7338 20.808C20.9608 20.179 21.8108 18.802 21.8108 18.802C21.1138 19.261 20.4508 19.584 19.8558 19.805C19.0058 20.162 18.1898 20.383 17.3908 20.536C15.7588 20.842 14.2628 20.757 12.9878 20.519C12.0188 20.332 11.1858 20.077 10.4888 19.788C10.0978 19.635 9.67283 19.448 9.24783 19.21C9.19683 19.176 9.14583 19.159 9.09483 19.125C9.06083 19.108 9.04383 19.091 9.02683 19.091C8.72083 18.921 8.55083 18.802 8.55083 18.802C8.55083 18.802 9.36683 20.145 11.5258 20.791C11.0158 21.437 10.3868 22.185 10.3868 22.185C6.62983 22.066 5.20183 19.618 5.20183 19.618C5.20183 14.195 7.64983 9.79195 7.64983 9.79195C10.0978 7.97295 12.4098 8.02395 12.4098 8.02395L12.5798 8.22795C9.51983 9.09495 8.12583 10.438 8.12583 10.438C8.12583 10.438 8.49983 10.234 9.12883 9.96195C10.9478 9.16295 12.3928 8.95895 12.9878 8.89095C13.0898 8.87395 13.1748 8.85695 13.2768 8.85695C14.3138 8.72095 15.4868 8.68695 16.7108 8.82295C18.3258 9.00995 20.0598 9.48595 21.8278 10.438C21.8278 10.438 20.4848 9.16295 17.5948 8.29595L17.8328 8.02395C17.8328 8.02395 20.1618 7.97295 22.5928 9.79195C22.5928 9.79195 25.0408 14.195 25.0408 19.618C25.0408 19.601 23.6128 22.049 19.8558 22.168ZM45.5258 7.42895H39.8818V13.77L43.6388 17.153V10.999H45.6448C46.9198 10.999 47.5488 11.611 47.5488 12.597V17.306C47.5488 18.292 46.9538 18.955 45.6448 18.955H39.8648V22.542H45.5088C48.5348 22.559 51.3738 21.046 51.3738 17.578V12.512C51.3908 8.97595 48.5518 7.42895 45.5258 7.42895ZM75.1058 17.578V12.376C75.1058 10.506 78.4718 10.081 79.4918 11.951L82.6028 10.693C81.3788 8.00695 79.1518 7.22495 77.2988 7.22495C74.2728 7.22495 71.2808 8.97595 71.2808 12.376V17.578C71.2808 21.012 74.2728 22.729 77.2308 22.729C79.1348 22.729 81.4128 21.794 82.6708 19.346L79.3388 17.816C78.5228 19.907 75.1058 19.397 75.1058 17.578ZM64.8208 13.09C63.6478 12.835 62.8658 12.41 62.8148 11.679C62.8828 9.92795 65.5858 9.85995 67.1668 11.543L69.6658 9.62195C68.1018 7.71795 66.3338 7.20795 64.5148 7.20795C61.7438 7.20795 59.0578 8.77195 59.0578 11.73C59.0578 14.603 61.2678 16.15 63.6988 16.524C64.9398 16.694 66.3168 17.187 66.2828 18.037C66.1808 19.652 62.8488 19.567 61.3358 17.731L58.9218 19.992C60.3328 21.811 62.2538 22.729 64.0558 22.729C66.8268 22.729 69.9038 21.131 70.0228 18.207C70.1928 14.518 67.5068 13.583 64.8208 13.09ZM53.4308 22.525H57.2388V7.42895H53.4308V22.525ZM117.64 7.42895H111.996V13.77L115.753 17.153V10.999H117.759C119.034 10.999 119.663 11.611 119.663 12.597V17.306C119.663 18.292 119.068 18.955 117.759 18.955H111.979V22.542H117.64C120.666 22.559 123.505 21.046 123.505 17.578V12.512C123.505 8.97595 120.666 7.42895 117.64 7.42895ZM89.9468 7.22495C86.8188 7.22495 83.7078 8.92495 83.7078 12.41V17.561C83.7078 21.012 86.8358 22.746 89.9808 22.746C93.1088 22.746 96.2198 21.012 96.2198 17.561V12.41C96.2198 8.94195 93.0748 7.22495 89.9468 7.22495ZM92.3948 17.561C92.3948 18.649 91.1708 19.21 89.9638 19.21C88.7398 19.21 87.5158 18.683 87.5158 17.561V12.41C87.5158 11.305 88.7058 10.71 89.8958 10.71C91.1368 10.71 92.3948 11.237 92.3948 12.41V17.561ZM109.888 12.41C109.803 8.87395 107.389 7.44595 104.278 7.44595H98.2428V22.542H102.102V17.748H102.782L106.284 22.542H111.044L106.93 17.357C108.749 16.779 109.888 15.198 109.888 12.41ZM104.346 14.45H102.102V10.999H104.346C106.743 10.999 106.743 14.45 104.346 14.45Z"}})])])])])])},Z=[],k=c["a"].extend({name:"Navbar",props:{items:Array}}),E=k,A=(a("16a3"),Object(z["a"])(E,S,Z,!1,null,null,null)),$=A.exports,T=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mascot"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 2039.66 2309.03","data-name":"Layer 1",id:"Layer_1"}},[a("path",{staticClass:"cls-1 wing2",attrs:{d:"M260.892 1007.815c74.8-5.07 176.19 126.11 135.85 212.64 122-26.34 269.47 93.9 255.94 160.76 80.11-88.52 315.15-78.3 454.15-27-167.39-103-306-414.65-360.33-434.13-54.33-19.48-485.61 87.73-485.61 87.73z"}}),a("path",{staticClass:"cls-2 wing2",attrs:{d:"M1175.722 1441.155c-63.63-6.67-37.1-52-63.56-71.27-26.46-19.27-244.52-147.62-276.69-188.46-32.17-40.84-134.71 217.92-217.89 210.24-35.43-3.28 179.36-215.5 130.73-265.78-57.33-59.27-361.61 138-376.52 101.91-21.54-52.14 402.25-210.09 338.72-264.72-63.53-54.63-486.2 81.55-468.41 48.39 17.79-33.16 450.47-153.81 543.87-124.13 93.4 29.68 81.21 228.06 221 302.25 139.79 74.19 246.05 66.71 270.25 133.92 18.39 51.05-33.68 124.78-101.5 117.65z"}}),a("path",{staticClass:"cls-3 wing2",attrs:{d:"M1229.812 1288.865c33 7.47 49.38 57.53.28 97.21-49.1 39.68-50-12.15-89.35-35.55-39.35-23.4-178.35-113.34-261.9-195.43-54.19-53.25-103.13 128.6-235.7 207.71 49.35-38.47 169.7-207.33 132.66-265.51-37.04-58.18-337.22 119.26-353.58 100.59-16.36-18.67 325.6-151.34 311.32-234.14-14.28-82.8-283-11.91-390.45 10.55 136.12-63.44 384.75-111.94 449.05-85.58 64.3 26.36 57 101.28 128.6 201.2 122.93 171.59 270.77 190.29 309.07 198.95z"}}),a("path",{staticClass:"cls-4 wing2",attrs:{d:"M796.552 887.925c34.15 23.85 61.09 93.47 53.84 117s-57.51-52.25-94.29-68.1c-36.78-15.85-109-18-99.26-33.11 9.74-15.11 107.8-38.1 139.71-15.79z"}}),a("path",{staticClass:"cls-5",attrs:{d:"M1219.852 1291.035c29.76 3.76 35.88 27.32-8.23 41s-83.38-52.55 8.23-41z"}}),a("path",{staticClass:"cls-6 wing2",attrs:{d:"M633.192 1004.475c-26-30.09-265 21.53-280.91 37.3 36.45 25.54 73.42 94.57 61.54 126.08 77.18-53.48 255.19-121.89 219.37-163.38zM489.392 1218.625c63.14 1 128.57 57.64 150.37 103.11 35.56-49.67 96.2-119 70.49-148.8-24.95-28.9-178.29 24.44-220.86 45.69zM925.972 1286.725c-74.94-16.72-107.43-35.22-120-38.41-12.57-3.19-65 57.14-74.48 73.52 68.64-31.8 178.08-37.96 194.48-35.11z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M763.942 1632.865c2.48-37.18-151.35-28.15-165.74 9.85-10.65 28.11 17 93.63 42 105.46 32.33 15.25 122.1-90.71 123.74-115.31z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M625.862 1662.735c13-15.77 118.44-21.11 113 .39-5.44 21.5-55.49 89.61-80.85 79.57-25.36-10.04-44.16-65.45-32.15-79.96z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1231.982 1029.535c4.67-48.51-196.87-42.6-217.15 6.51-15 36.35 18.63 123.11 50.92 139.52 41.66 21.19 163.11-113.91 166.23-146.03z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1218.782 1038.965c-11.43-24.34-127.73-18-155.31 8.57s12.26 127.56 47.76 120.31 120.7-100.81 107.55-128.88z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1056.492 1219.945c2.22-48.37-197.35-32.44-215 17.29-13.06 36.79 35.56 126.64 68.41 141.31 42.4 18.93 145.1-126.6 146.59-158.6z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1031.482 1224.565c-12.74-22.82-125-8.72-149.93 18.92-24.93 27.64 20.6 122.81 54.51 113.35 33.91-9.46 110.08-106.03 95.42-132.27z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M919.302 1413.245c-7.56-38-159.54 12.7-163.72 54.73-3.06 31.09 42.41 89.4 70.74 94.49 36.52 6.57 97.98-124.07 92.98-149.22z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M912.632 1423.265c-15.95-16.14-106.65 21.61-121.11 50.52-14.46 28.91 45.63 98 71.83 82.24 26.2-15.76 67.61-114.18 49.28-132.76z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1505.152 1210.665c64.26 55.84 195.65 205 190.87 454.45-4.78 249.45-146.19 16.15-140.39-30.24"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1588.812 1577.375c-22.93 94.47-22 275.68-36.05 302-16.32 30.5-27.14 65.48-19.15 83.35 20.43 45.66 139.28 59.11 196.16-2.62 46.45-50.41 17.8-356-75.62-535.05"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1681.822 1578.895c23.94-14.54 64.91 174.94 37.67 352.81-25.13 47.08-94.19 48-138.15 32.47-43.96-15.53-28.43-62.12 11.1-76.24 71.55-101.82 65.44-294.49 89.38-309.04z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1666.832 1645.035c26.61 1.49 41.48 72.81-18.24 68.7-59.72-4.11-15.99-70.63 18.24-68.7zM1621.722 1781.285c24.25-6.17 33 37.19 3.54 37.88-29.46.69-25.65-32.25-3.54-37.88z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1532.132 1926.905c14.21-12.56 56.57-4.29 57.2 22.38.31 13-27.15 36.54-47.54 35.08-20.39-1.46-23.11-45.58-9.66-57.46z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1582.302 1938.215c14.21-12.56 56.57-4.29 57.2 22.38.31 13-27.14 36.54-47.54 35.08-20.4-1.46-23.12-45.59-9.66-57.46zM1654.712 1959.035c2.42-16.39 35.39-30.82 50.84-13.34 7.52 8.5 2.53 31.7-11.92 42.2-14.45 10.5-41.22-13.36-38.92-28.86z"}}),a("path",{staticClass:"cls-11",attrs:{d:"M1609.112 1933.115c36.1 9.77-3 35.67-16.33 35.1-13.33-.57-15.56-43.72 16.33-35.1zM1700.242 1945.155c7.19 5.92-2.61 29-10.1 30s-24.59-16.54-22.14-25c2.45-8.46 23.12-12.51 32.24-5z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M981.882 1912.615c81.88 41.45 211.33 66.16 420.23 10.31 208.9-55.85 289.37-335 199.74-614.53-26.08-81.33-51.41-202-3-349.42l-421.84 35.32c46.19 108.09-220.92 217.86-326.56 534.65-36.66 83.88-300.15 208.59-258.32 484 48 316.2 644.91 358.56 828 180.68 25.41-19.76 29.77-69.91-58.38-42.35-306.38 55-615.16-87.61-420.65-242.93"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1516.902 1057.795c9.8 14.1-15.91 58.3-38.22 67-107.82 41.8-213.78-23.13-244.69-71.84 62.61 8.92 282.91 4.84 282.91 4.84z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1122.782 1491.255c35.92 10.31 67.21 37.11 79.91 7 47.14-107.58 69.43-129.64 121.63-128 38.57 1.23 105.48 42.81 110.55 96.7 0 0 3.65-163.76-35.09-279-53.25-3.08-140.67-59.48-169.18-106.65-60.62 129.28-305.7 221.93-384.92 506.54-209.24 145.76-258.08 338.9-136.18 515.29 118.49 171.45 501.64 224 692.27 61.74 10.37-9.41 10.54-21.68-12.3-14.69a898.19 898.19 0 01-102.1 24.25c-95.45 16.94-426.25 14.78-489-102-101.93-189.86 74.66-265.91 102.66-276.82-4.2-153.31 61.27-350.4 221.75-304.36z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M872.432 1741.765c-25.36-14.12-64.21 51.15-19.83 75.4 44.38 24.25 63.78-50.94 19.83-75.4z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M945.122 1834.845c-158.81-3.34-234.24 161-147.23 265.59 98.53 118.47 355.4 161.56 563.82 50.82-147.2 23.29-432.23-16.07-460.41-126.64-22.87-89.74 41.7-85.89 41.7-85.89"}}),a("path",{staticClass:"cls-7",attrs:{d:"M929.072 1921.035c6-24.34-84.56-91.08-94.73-41.72-10.17 49.36 81.2 96.78 94.73 41.72z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M981.882 1933.805c81.88 41.45 211.33 61.93 420.23 6.08s306.32-352 216.69-631.49c-11.27-35.15-23.2-77.67-29.2-126.51-7.88-64.16-5.55-139.24 21.92-222.91l-231.51 108.76c-29.36 109 92.57 337.61.25 596.47-80 224.31-263.1 219.36-354.06 211.33"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1412.042 1191.035c-7.09-75.62 159.46-85 167.31-18.15 10 85.2 58.53 197.82 61.93 327.38 3.87 147.35-46.13 262.36-149.68 305.09-18.63-69.94-72.35-166.1-57.74-288.65 14.61-122.55-15.77-261.1-21.82-325.67z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1576.302 1743.425c12.79 23.44-17.21 77-83.58 48.22s-41-92.87-26.36-93c14.64-.13 101.16 28.72 109.94 44.78z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1410.902 1408.655c21.75 78.35 85.15 476.89 122.19 500.62 26.65 17.07 53.15 48.81 53.15 86.08 0 64.13-179.52 87.36-247.28 32.91-67.76-54.45-160.46-390.45-118.82-547"}}),a("path",{staticClass:"cls-2",attrs:{d:"M965.782 1557.795c25.93-41 100.11-88.36 168.71-45.51 175.22 109.45-.1 420.86 29.47 432.34 38.73 10.23 83.77 69.52 58.78 109.85-24.99 40.33-241.44 12.44-291.81-46.44-36.14-42.21-20.16-66.45-10.39-96.1 9.77-29.65-43.18-111.21 3.41-263.12"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1366.612 1361.915c-102-42.59-135.6 63.71-112.31 252.89 23.29 189.18 72 343.75 116.46 384 44.46 40.25 188.09 31.14 201.17-11 7.73-24.93-14.92-61-48.7-69.66-57.17-14.64-123.19-542.28-156.62-556.23z"}}),a("path",{staticClass:"cls-4",attrs:{d:"M1455.532 1920.035c-52.95 11.63-74.48 43.24-46.43 68.13 36.36 32.25 139.37-10.87 147.38-30.82 8.01-19.95-36.55-51.41-100.95-37.31z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1029.902 1521.665c-47.44 34-99.14 265.81-26.73 425.86 11.64 25.72 113 13.55 130.32 3.46 27.88-16.24 75.31-301.69 41.76-384.16-28.24-69.38-114.07-67.59-145.35-45.16z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1014.492 1937.765c29.44-11 80.25-4.5 134 11.05s78.54 57.38 59.89 77.49c-18.65 20.11-164.77 3.18-201.83-23.29s-11.61-57.98 7.94-65.25z"}}),a("path",{staticClass:"cls-4",attrs:{d:"M1111.772 1943.395c-54.16-2.58-83.19 22.32-62.59 53.66 26.69 40.62 137.4 25.85 150.33 8.67 12.93-17.18-21.88-59.2-87.74-62.33z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M609.642 1842.225c-18.71-24.57-109.88 64.89-98.18 96.47 8.66 23.37 61.63 49.25 83.72 43 28.51-8.09 26.8-123.18 14.46-139.47z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M538.832 1936.835c3.28-17.37 57.74-82.22 71.38-50.33 13.64 31.89-2 84.08-20 89-18 4.92-55.4-17.15-51.38-38.67z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M670.212 2162.035c22.52-7.87-21.36-96.27-47.36-95.24-19.24.79-50.94 33.49-51.63 51.21-.92 22.92 84.08 49.24 98.99 44.03z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M590.472 2085.695c25.63-27.12 28-7.85 8.81 15.19-19.19 23.04-35.15 12.7-8.81-15.19z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M841.302 2252.435c2.76 18.44-74.33 20.29-83.06 1.95-6.48-13.59 4.59-47.4 16.58-54.34 15.48-8.96 64.64 40.19 66.48 52.39z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M759.442 2250.835c4.06 9.07 22.24-43.16 17.09-47.91-5.15-4.75-26.48 26.87-17.09 47.91z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1019.242 2270.335c9.37 12.47-46.59 44.51-60.31 34.48-10.17-7.41-15.49-36.69-9.43-46.56 7.8-12.76 63.51 3.85 69.74 12.08z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M958.392 2301.735c6.59 5.07-.83-40.61-6.5-42-5.67-1.39-8.79 30.3 6.5 42z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1192.562 2266.035c10.47 6.2-20.36 45.94-33.24 42.8-9.54-2.31-22.09-21.85-20.66-30.77 1.86-11.52 46.96-16.1 53.9-12.03z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1158.002 2306.795c6.28 1.69-12.66-29-17.19-28.38-4.53.62 2.68 24.47 17.19 28.38z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1569.182 1960.085c29.89 2.18 45.59 45.56 34 64.27-9 14.5-71-10.38-74.85-23.25-5.74-19.07 17.88-42.71 40.85-41.02z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1519.392 1986.035c29.19 5.95 39.41 51 25.5 68.09-10.77 13.22-69.09-19.35-71.28-32.63-3.23-19.6 23.21-40.05 45.78-35.46zM1443.452 2007.175c15.5 6.79 19 49 1.9 60.84-17.1 11.84-55.33-22.09-51.08-40.21s31.69-28.3 49.18-20.63z"}}),a("path",{staticClass:"cls-11",attrs:{d:"M1577.922 1962.035c12.6 5.56 25.39 34.29 18.71 40.65-6.68 6.36-46.15-11.63-52-21.15-5.85-9.52 18.86-25.9 33.29-19.5zM1525.732 1987.215c12.59 5.55 25.39 34.3 18.72 40.66-6.67 6.36-46.16-11.63-52-21.15-5.84-9.52 18.85-25.87 33.28-19.51zM1444.592 2009.515c6.52 3.72 8.41 38-2.66 37.49-11.07-.51-23.8-20.21-21.86-28.56 1.94-8.35 18.56-12.32 24.52-8.93z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1218.522 2000.095c28.81 8.33 35.2 54 20 69.91-11.79 12.32-67.31-24.83-68.43-38.23-1.69-19.82 26.31-38.07 48.43-31.68z"}}),a("path",{staticClass:"cls-10",attrs:{d:"M1164.442 2015.205c27.33 11.86 28 58.06 10.87 71.89-13.27 10.72-63.59-33.21-63-46.64.9-19.87 30.99-34.42 52.13-25.25zM1085.772 2020.175c13.76 9.84 8.51 51.87-10.73 59.93-19.24 8.06-49.57-33-41.66-49.9 7.91-16.9 36.85-21.17 52.39-10.03z"}}),a("path",{staticClass:"cls-11",attrs:{d:"M1226.692 2003.785c11.16 8 17.75 38.8 9.9 43.64-7.85 4.84-42.75-20.91-46.48-31.44-3.73-10.53 23.77-21.42 36.58-12.2zM1170.412 2017.665c11.17 8 17.76 38.81 9.9 43.65-7.86 4.84-42.75-20.92-46.48-31.45-3.73-10.53 23.78-21.41 36.58-12.2zM1086.402 2022.705c5.62 5 .37 38.91-10.35 36.14-10.72-2.77-19.11-24.7-15.49-32.47 3.62-7.77 20.74-8.22 25.84-3.67z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M819.772 1941.785c-50.09 32.68-52.25 146.4 58.79 210.08 111.04 63.68 311.94 63.69 372.35 18-112.52-3.28-372.35-39.19-368-169.55 2.18-34.6-41.73-72.5-63.14-58.53z"}}),a("path",{staticClass:"cls-12 ear2",attrs:{d:"M2026.512 481.865c-70 6.32-98.79 88.12-42.4 141.87-79.18 18-49 94.32-31.22 121.54-138.13-83.51-163.26 7-190.88-76.81-27.62-83.81 126.52-250.04 264.5-186.6z"}}),a("path",{staticClass:"cls-2 ear2",attrs:{d:"M1734.302 649.595c14.5-108.37 155.44-258.61 295.3-180.89 18.47 15 11 19.92-16.95 18.56-40.33-2-137.88-15.85-222.62 146 78.36-64.44 170.54-49.35 205.06-6.92 6.13 16.1-65.41-13.17-181.76 52.68 67.09-10.62 150.68 34.18 143.32 72.8-12 13.26-70.47-44.54-183.82-37.73-17.87-.06-45.82-33.34-38.53-64.5z"}}),a("path",{staticClass:"cls-3 ear2",attrs:{d:"M1742.802 608.905c-13.55 33.7 19.17 56.13 36.27 14.2 22.82-55.92 95.32-152 207.61-151.84-34.75-24.01-181.61-17.02-243.88 137.64z"}}),a("path",{staticClass:"cls-3 ear2",attrs:{d:"M1780.412 637.495c-20.07 19.91-15.77 51 10.14 29.49s107.58-65.87 170.88-54.63c-48.41-34.53-127.82-27.69-181.02 25.14zM1792.842 690.885c45-13.34 100.84-7.57 144.36 39-61.06-14.5-158.49-21.64-144.36-39z"}}),a("path",{staticClass:"cls-5",attrs:{d:"M1756.752 576.525c-13.64 25.75 3 56 26.17 16s5.99-76.67-26.17-16z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1583.302 1188.315c15.85 22 23.19 56.7-38.9 68.88-62.09 12.18-116.43-17.23-100.93-44.63 19.51-34.44 128.69-39.75 139.83-24.25zM1598.772 1270.615c19.63 9.13 41.15 67-45.26 81.94-86.41 14.94-121.26-32.4-105.87-51.13 15.39-18.73 137.87-36.99 151.13-30.81z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1620.572 1374.685c-17.25-5.08-113.1 6.34-135.89 16.56-22.79 10.22-35.87 47.37 17.59 63.74 53.46 16.37 100.61 2.15 125.23-19.33 24.62-21.48 10.34-55.87-6.93-60.97z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1636.942 1486.245c21.55 9.12 20.8 82.75-66.06 88.52-86.86 5.77-107.17-58-86.09-77.84 21.08-19.84 138.03-16.65 152.15-10.68z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1630.132 1616.485c18.11 17.34-.77 80.34-85.06 76.28-84.29-4.06-89.49-77.73-63.37-88.73 26.12-11 138.66 3.09 148.43 12.45z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M893.382 1971.675c-5.78-26.24-124.53-47.51-110.91 4.8 13.62 52.31 124 54.56 110.91-4.8z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M918.102 2050.585c-19-28.27-121.8 6.15-99.19 42.23 30.46 48.62 133.17 8.46 99.19-42.23z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M988.652 2103.975c-19.12-6.81-96.37 50.84-58.22 74 46.36 28.06 105.5-57.16 58.22-74z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1077.092 2133.285c-14.63-3.43-63.83 66.17-27.08 73.79 44.7 9.25 68.2-64.12 27.08-73.79z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1163.142 2149.245c-14.3 0-41.55 53.29-12.49 56.28 35.31 3.63 45.4-56.21 12.49-56.28z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1240.142 2155.925c-13 0-32.11 39.19-10.33 41.28 26.49 2.55 34.96-41.25 10.33-41.28z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M913.682 1485.775c48.65 30.47 15.68 118.65-44.18 97.24-43.33-15.5-10.51-131.49 44.18-97.24z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1002.662 1330.775c31.25 16.13 13.23 41.92-11.66 42.59-24.89.67-19.58-58.72 11.66-42.59z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M983.372 1625.235c35.49 14.82 27.78 88.63-23.36 78.36-30.85-6.19-38.64-104.25 23.36-78.36z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M776.702 1626.685c40.64-11.12 65.91 65.7 1.42 82.34s-32.82-73.76-1.42-82.34z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1021.302 1809.625c26.64 4.67 19.38 30.83 0 33.26-19.38 2.43-26.68-37.94 0-33.26z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M964.552 1867.385c-27-9.2-52 33.59-17.36 43.91 34.64 10.32 52.8-31.83 17.36-43.91z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M759.452 1865.115c-24.28-8.27-46.73 30.18-15.59 39.45 31.14 9.27 47.44-28.59 15.59-39.45z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1305.302 1782.035c28.62-20.19 60.48 53.27 26.63 79.45-33.85 26.18-76.63-44.18-26.63-79.45z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1338.802 1689.695c20.38-8.28 28.66 40.62 3.27 35-25.39-5.62-20.86-27.86-3.27-35z"}}),a("path",{staticClass:"cls-9",attrs:{d:"M1372.212 1925.745c-39.77-29.07-81.83 19.43-43.74 49.59 38.09 30.16 86.37-18.42 43.74-49.59z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1124.452 149.395c10.13-30.51-121.86-46.24-142.21-16.9-15.07 21.73-5.84 91.19 12.76 104.8 24.01 17.53 122.74-67.77 129.45-87.9z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1063.802 118.405c-60.54-8.25-78.42 12.16-23.09 21.84s68.53-15.67 23.09-21.84z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M998.052 283.805c-4.93-35.59-150-3.88-156.24 34.24-4.63 28.19 34.6 86 60.81 93.47 33.84 9.59 98.68-104.2 95.43-127.71z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M930.682 275.845c-53.5 3.44-97.45 34.85-46 29.92s124.79-35.02 46-29.92z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1450.532 4.615c-18.4 10.37 47 57.83 24.93 127-4.39 23.55 87.81 37.69 92 13.36 10.84-63.62-67.52-168.2-116.93-140.36z"}}),a("path",{staticClass:"cls-13",attrs:{d:"M1492.682 12.845c46.85 22.32 71.09 87.51 68.77 111.4-2.32 23.89-50.65 30.62-51.18 9.72-.53-20.9-20.79-88.08-28.79-103-8-14.92-.48-23.68 11.2-18.12z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1362.402 83.275c265.39 20.78 414.58 181.54 437.32 365.23 17.44 140.89-4.11 179.87 43.64 256.8 74 119.23-45 415.75-582.07 347.61-363.09-46.05-499.11-283.2-400.23-613.12 80.47-268.46 285.74-373.41 501.34-356.52z"}}),a("path",{staticClass:"cls-3",attrs:{d:"M1420.662 148.085c-314.87-4.9-460.47 248.1-455.06 505.18 7.66 363.85 475.47 408.62 668.63 351.29 140.69-41.72 257.76-159.42 190.84-308.35-66.92-148.93 24.23-541.45-404.41-548.12z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1548.972 821.535c32.69-22.79 55 39.49 35.33 45.4-19.67 5.91-52.61-33.36-35.33-45.4z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1721.642 784.335c-39.69-3.38-27.86 61.71-7.9 57 19.96-4.71 28.91-55.17 7.9-57z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1381.022 766.095c52.07-107.14-85.06-353.24-278.49-259.67-146.75 71-99.62 238.45-11.27 291.77 103.97 62.78 254.45 40.51 289.76-32.1z"}}),a("path",{staticClass:"cls-15",attrs:{d:"M1368.672 771.625c48.1-98.93-78.52-326.11-257.1-239.75-135.52 65.58-92 220.13-10.4 269.41 96 57.93 234.92 37.35 267.5-29.66z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1343.602 765.245c42.33-87.11-69.14-287.12-226.34-211-119.3 57.66-81 193.75-9.18 237.08 84.53 51 206.81 32.92 235.52-26.08z"}}),a("path",{staticClass:"cls-17",attrs:{d:"M1184.812 511.645c65.26-1.09 146 111.52 121.7 207.6-24.3 96.08-133.46 134-219.77 72.62-98.73-70.2-106.2-276.83 98.07-280.22z"}}),a("path",{attrs:{d:"M1174.032 535.525c60-1 134.87 100.67 112.57 189-22.3 88.33-122.65 123.13-202 66.71-90.7-64.51-98.3-252.58 89.43-255.71z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1296.992 707.735c40.21 6.8 37.3-40.82 2.08-46.49-75.77-12.21-71.53 34.72-2.08 46.49z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1089.032 687.845c20.36-1 28.7 29.39.76 33.85-27.94 4.46-21.13-32.91-.76-33.85z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1779.932 450.615c-52.63-30.98-126.93 147.09-60.23 273.42 23.46 44.4 106.18 16.09 114-17.55 11.26-70.95-16.12-233.74-53.77-255.87z"}}),a("path",{staticClass:"cls-15",attrs:{d:"M1787.702 469.705c-48.06-28.26-115.9 134.33-55 249.62 21.4 40.54 96.94 14.67 104.08-16 10.3-64.76-14.71-213.41-49.08-233.62z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1790.052 496.655c-41.62-24.47-100.4 116.39-47.63 216.29 18.55 35.09 84 12.71 90.17-13.9 8.9-56.1-12.76-184.86-42.54-202.39z"}}),a("path",{staticClass:"cls-17",attrs:{d:"M1749.042 480.785c65.48 7.12 79.14 155.09 70.74 198.79-14 72.52-62.42 64.91-77.74 51.14-59.86-59.68-34.8-221.55 7-249.93z"}}),a("path",{attrs:{d:"M1748.182 499.525c71.06 4.09 97.14 213.23-3 228.36-40.75-8.1-53.29-231.57 3-228.36z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1783.302 600.775c8.41-13.59 57-2 48.71 32.92-8.71 36.68-57.87-18.12-48.71-32.92z"}}),a("path",{staticClass:"cls-16",attrs:{d:"M1733.692 584.285c18.36 3.94 18.46 34.37-7.27 30.35-19.85-3.09-11.07-34.27 7.27-30.35z"}}),a("path",{staticClass:"cls-12 ear",attrs:{d:"M633.302 593.755c77.6-6 124 78 72.36 147 89.72 5.06 70.89 93.94 56.44 126.92 135.37-116.54 179.46-22.35 194.16-119 14.7-96.65-184.09-249.52-322.96-154.92z"}}),a("path",{staticClass:"cls-2 ear",attrs:{d:"M983.042 723.035c-35.74-115.58-217.18-253.6-355.51-143-17.4 19.72-8.3 23.74 21.91 17.11 43.65-9.54 147.54-42.63 269.8 118.43-97.37-55.92-195.18-22.49-225 30.14-3.74 18.73 69-26.37 208 24.08-75.18.75-158.16 65-143 105.8 15.5 12.27 68.71-61.58 193.65-75 19.41-3.43 43.8-44.86 30.15-77.56z"}}),a("path",{staticClass:"cls-3 ear",attrs:{d:"M966.242 680.215c21 34.28-10.61 64.78-37 22.16-35.18-56.83-132-148.28-254.48-127.51 33.54-32.58 195.1-51.98 291.48 105.35z"}}),a("path",{staticClass:"cls-3 ear",attrs:{d:"M930.442 718.325c25.57 18 26.6 52.8-5.63 34-32.23-18.8-129.5-52.1-196.51-28.18 46.45-46.54 134.38-53.67 202.14-5.82z"}}),a("path",{staticClass:"cls-3 ear",attrs:{d:"M926.692 778.905c-51.52-6.31-111.42 10.27-150.35 69.1 63.96-27.04 168.96-52.78 150.35-69.1z"}}),a("path",{staticClass:"cls-4 ear",attrs:{d:"M945.052 647.445c19.62 25.6 7.08 61.59-25.59 22.34s-20.66-82.64 25.59-22.34z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1497.212 255.035c19.54 9.73 33.18-74.05 7.33-91.4-15.13-10.17-46-6.75-53.18 11.57s32.94 73.36 45.85 79.83z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1420.842 156.285c24.21.25 7.54-98.78-26.15-103.71-19.7-2.89-51 16-51.86 38.41-.86 22.41 62 65.14 78.01 65.3z"}}),a("path",{staticClass:"cls-8",attrs:{d:"M1293.762 96.035c23-16.49-60.12-94.51-95.25-75.9-20.57 10.89-47 72.56-26.32 88.64 13.34 10.36 106.38-1.9 121.57-12.74z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1506.172 168.605c11.59 1.41 15 74-3.14 78.61-18.14 4.61-3.56-79.42 3.14-78.61z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1399.222 53.835c15.47-5.56 49.21 91.13 21.62 102.45-14.74.41-29.43-99.67-21.62-102.45z"}}),a("path",{staticClass:"cls-7",attrs:{d:"M1209.782 22.535c12.75-10.83 83.61 33.57 86.3 66.22-.58 1.81-10.15 11.12-19.2 6-27.16-15.37-72.58-67.54-67.1-72.22z"}}),a("path",{staticClass:"cls-12",attrs:{d:"M1079.002 33.325c-27.22 3.92 27 51.66 17.5 140.56-3.65 34.51 99.84 32.49 96.44-18.94-1.71-25.91-42.59-131.91-113.94-121.62z"}}),a("path",{staticClass:"cls-13",attrs:{d:"M1111.442 42.235c48.75 23.22 74 91.05 71.55 115.9-2.45 24.85-52.69 31.9-53.25 10.1-.56-21.8-21.62-91.62-30-107.15-8.38-15.53-.44-24.64 11.7-18.85z"}}),a("path",{staticClass:"cls-1 wing",attrs:{d:"M17.402 1236.175c71.1-25.07 202.63 77.3 185.65 173.63 111.3-58.76 284.69 20.44 288.63 90.12 55-109 285-161.93 432.6-148.5-188.23-56.84-401.78-327.51-459.3-332.19-57.52-4.68-447.58 216.94-447.58 216.94z"}}),a("path",{staticClass:"cls-2 wing",attrs:{d:"M1013.072 1418.775c-63.27 10.48-49.13-41.38-79.65-53.35-30.52-11.97-274.24-80.21-315.78-111.94-41.54-31.73-74.81 251.44-157.26 266.19-35.12 6.26 118.65-261 58.78-297.66-70.58-43.17-314.77 233.37-338.39 201.73-34.12-45.73 335.72-315.5 260.33-352.42-75.39-36.92-449.72 211-440.95 173.51 8.77-37.49 396.71-272.85 494.66-268.58 97.95 4.27 136.7 203.5 290.88 239.28s255.08-.13 295.63 59.77c30.79 45.5-.81 132.31-68.25 143.47z"}}),a("path",{staticClass:"cls-3 wing",attrs:{d:"M1026.602 1253.805c33.89-1.48 62.45 43.58 25 96s-51.43 1.41-95.51-11.13c-44.08-12.54-201.46-64.12-303.22-122.79-66-38.08-67 154.72-175.17 268.45 38-51.25 111.4-250.36 60.74-297.89-50.66-47.53-295.94 208.3-316.52 194.25-20.58-14.05 276.5-236.88 241.59-314.85-34.91-77.97-276.88 64.17-375.14 115.2 115.55-99.19 343.78-213.84 412.72-205 68.94 8.84 81 84.76 175.71 164.25 162.72 136.44 310.5 115.24 349.8 113.51z"}}),a("path",{staticClass:"cls-4 wing",attrs:{d:"M505.212 974.035c39.12 14.4 82.93 75.94 81.9 101.11-1.03 25.17-69-36.19-108.6-42-39.6-5.81-110 11.51-104.49-6.07 5.51-17.58 94.62-66.56 131.19-53.04z"}}),a("path",{staticClass:"cls-4 wing",attrs:{d:"M1017.522 1258.645c29.76-4.27 41.68 17.36 2.5 42.75s-94.08-29.6-2.5-42.75z"}}),a("path",{staticClass:"cls-6 wing",attrs:{d:"M376.822 1132.975c-32.79-22.76-251 92.4-262.33 112.24 41.78 15.44 95.14 73.71 91.69 108 61.05-73.51 215.87-188.87 170.64-220.24z"}}),a("path",{staticClass:"cls-6 wing",attrs:{d:"M292.232 1383.115c61.36-15.91 139.1 22.45 171.78 61.52 21.76-58.62 62.79-143.36 30.31-165.92-31.49-21.9-166.3 71.99-202.09 104.4z"}}),a("path",{staticClass:"cls-6 wing",attrs:{d:"M732.062 1333.235c-76.78 3.6-112.94-6-125.92-5.74-12.98.26-48.33 73.89-53.34 92.61 58.34-49.78 162.66-85.29 179.26-86.87z"}}),a("path",{staticClass:"cls-13 ear",attrs:{d:"M728.302 630.565c11-23.61 102.5 9.42 118.24 42.09-37.38-11.6-93.51 13.19-107.22 18.89 10.82-26.51-11.02-60.98-11.02-60.98z"}}),a("path",{staticClass:"cls-13 ear",attrs:{d:"M767.612 757.765c24.5-12.16 71.21 10.74 71.21 10.74-28.75 9.79-54.88 40.82-54.88 40.82 8.17-22.87-16.33-51.56-16.33-51.56z"}}),a("path",{staticClass:"cls-13 ear2",attrs:{d:"M1958.862 519.465c-55.52 0-86.48 46-84.62 60.94 1.86 14.94 25.83-9.87 79.72 6.24-16.33-28.79 4.9-67.18 4.9-67.18z"}}),a("path",{staticClass:"cls-13 ear2",attrs:{d:"M1929.472 658.275c-5.43 14.38 0 38.37 0 38.37-16.33-15.51-50.87-19.82-61.76-20.11 18.49-19.08 53.05-24.92 61.76-18.26z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1280.682 143.115c-64.38 23.34-37.58 113.83 51.35 99.82 89.85-14.16 51.07-136.97-51.35-99.82z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1442.122 263.555c49.54-14.47 99.81 66.54 44.79 86-54.61 19.35-98.16-70.42-44.79-86z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1583.092 192.655c-40.69-16.65-56.81 48.3-17.14 64.2 45.91 18.41 41.95-54.06 17.14-64.2z"}}),a("path",{staticClass:"cls-2",attrs:{d:"M1571.842 404.955c-27.28-19.71-49.06 50.78-17 50.49 32.06-.29 40.33-33.64 17-50.49z"}})])])},U=[],B=c["a"].extend({name:"Mascot"}),J=B,W=(a("bd5a"),Object(z["a"])(J,T,U,!1,null,"5ed33902",null)),Y=W.exports,q=c["a"].extend({name:"App",data:function(){return{menuItems:[]}},components:{Home:I,Navbar:$,Mascot:Y},mounted:function(){}}),F=q,G=(a("5c0b"),Object(z["a"])(F,e,l,!1,null,null,null)),K=G.exports,Q=a("86af");a("a1a3");c["a"].use(Q["a"]),c["a"].config.productionTip=!1,new c["a"]({render:function(t){return t(K)}}).$mount("#app")},daf7:function(t,s,a){},f46e:function(t,s,a){}});
//# sourceMappingURL=app.33f37238.js.map