import{l as V,m as k}from"./vendor-ec30964e.js";import{T as y,B as w}from"./TableAction-09488a2a.js";import{_ as v}from"./index-89b1a529.js";import{i as c,_ as x}from"./index-fa77b114.js";import{d as $}from"./index-f65e7484.js";const{t:n}=c.global;function u(t){return t=t<<3,t>1024*1024?(t/1024/1024).toFixed(2)+" mb/s":t>1024?(t/1024).toFixed(2)+" kb/s":t.toString()+" b/s"}const C=[{title:"StreamPath",key:"path",width:100},{title:n("类型"),key:"type",width:40},{title:n("订阅者"),key:"subscribers",width:50},{title:n("开始时间"),key:"startTime",width:50,render(t){return Vue.h(naive.NTime,{time:new Date(t.startTime),type:"relative"})}},{title:n("状态"),width:30,key:"state"},{title:n("音频"),key:"audio",width:100,render(t){const e=t.audioTrack;return Vue.h("text",e?`${e.codec},${e.fps}f/s,${e.sampleRate}Hz,${u(e.bps)}`:"无")}},{title:n("视频"),key:"video",width:100,render(t){const e=t.videoTrack;return Vue.h("text",e?`${e.codec},${e.fps}f/s,${e.width}x${e.height},${u(e.bps)}`:"无")}}];const b=Vue.defineComponent({setup(t){const{t:e}=c.global,s=V(),l=k(),{params:d}=s,r=d.id,i=Vue.ref([]),m=Vue.reactive({width:100,title:e("操作"),key:"action",fixed:"right",render(o){return Vue.h(y,{style:"button",actions:[{label:e("详情"),type:"primary",onClick:()=>l.push(`./detail/${r}/${o.path}`)}]})}});async function f(o){const a=await $(r);i.value=a.list}function p(o){console.log(o)}return(o,a)=>{const _=Vue.resolveComponent("n-card");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(Vue.unref(v),{onTick:f}),Vue.createVNode(_,{bordered:!1,class:"proCard"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(w),{title:o.$t("流列表"),columns:Vue.unref(C),dataSource:i.value,pagination:!1,"row-key":h=>h.id,actionColumn:Vue.unref(m),"onUpdate:checkedRowKeys":p,"scroll-x":1090},null,8,["title","columns","dataSource","row-key","actionColumn"])]),_:1})])}}}),D=x(b,[["__scopeId","data-v-4b5c61c2"]]);export{D as default};
