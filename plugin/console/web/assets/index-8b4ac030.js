import{s as e,o as l}from"./index-5cccfc90.js";function m(t){return e({url:"/api/instance/list",method:"post",data:t})}function h(t){return e({url:"/api/instance/add",method:"post",data:t})}function f(t){return e({url:"/api/instance/update",method:"post",data:t})}function g(t){return e({url:"/api/instance/del",method:"post",data:t})}function S(t){return new EventSource(l+"/api/summary/sse?m7sid="+t)}function $(t){return e({url:"/api/stream/list"})}function P(t,s){const r=`/api/subscribers/${s}`;return e({url:r})}function p(t){return e({url:"/api/sysinfo"})}function b(t,s){return e({url:`/api/stream/info/${s}`,method:"post",headers:{m7sid:t}})}function y(t,s){const r=`/api/stream/annexb/${s}`;return e({url:r,responseType:"arraybuffer"})}function k(t,s,r){const n=`/api/${r}track/snap/${s}`;return e({url:n})}function I(t,s="global",r=!1){return e({url:`/api/config/${r?"json":"get"}/${s}`,method:"post",headers:{m7sid:t}})}async function M(t,s,r,n="http"){const{localIP:a}=await p(),{ip:o}=await e({url:"/api/instance/detail",method:"post",data:{id:t}}),u=await e({url:"/api/config/json/global",method:"post",headers:{m7sid:t}}),{listenaddr:i,listenaddrtls:c}=u.http;return`${n}${r?"s":""}://${s?a:o}${r?c:i}`}function T(t,s,r="global"){return e({url:`/api/config/modify/${r}`,method:"post",headers:{m7sid:t},data:s})}function L(t){return e({url:"/api/plugins",method:"post",headers:{m7sid:t}})}function w(t){return e({url:"/logrotate/api/list"})}function x(t,s){return e({url:"/monitor/api/list/track?"+new URLSearchParams({streamPath:s}),method:"post",headers:{m7sid:t}})}function C(t,s){return e({url:"/monitor/"+s,method:"post",headers:{m7sid:t}})}function H(t,s){return e({url:"/api/startDebug",method:"post",headers:{m7sid:t,path:s}})}function O(t,s){return e({url:`/stress/api/pull/${s.protocol}/${s.pullCount}`,method:"post",headers:{m7sid:t,"M7s-Method":"POST"},data:{remoteURL:s.remoteURL}})}function j(t,s){return e({url:`/stress/api/push/${s.protocol}/${s.pushCount}`,method:"post",headers:{m7sid:t,"M7s-Method":"POST"},data:{remoteHost:s.remoteHost,streamPath:s.streamPath}})}function v(t){return e({url:"/stress/api/stop/push",method:"post",headers:{m7sid:t,"M7s-Method":"POST"}})}function R(t){return e({url:"/stress/api/stop/pull",method:"post",headers:{m7sid:t,"M7s-Method":"POST"}})}function U(t){return e({url:"/stress/api/count",method:"post",headers:{m7sid:t}})}function A(t){return e({url:"/api/task/tree"})}function D(t){return e({url:"/monitor/api/session/list"})}function E(t,s){return e({url:"/monitor/api/search/task",method:"post",data:s})}export{f as A,S as a,I as b,D as c,$ as d,b as e,y as f,p as g,k as h,P as i,w as j,M as k,C as l,T as m,x as n,j as o,H as p,O as q,U as r,E as s,A as t,v as u,R as v,L as w,m as x,g as y,h as z};