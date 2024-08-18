import{l as D,Q as U}from"./vendor-ec30964e.js";import{n as P,o as B,q as A,r as g,u as E}from"./index-60c113a0.js";import{_ as H}from"./index-93eb0e35.js";import"./index-747e11ee.js";const L=Vue.defineComponent({setup(M){const n=naive.useMessage(),{id:a}=D().params,o=Vue.reactive({streamPath:"live/test",pushCount:0,remoteHost:"localhost",protocol:"rtmp"}),l=Vue.reactive({pullCount:0,remoteURL:"localhost/live/test",protocol:"rtmp"}),_=[{label:"rtmp://",value:"rtmp"},{label:"rtsp://",value:"rtsp"}],x=[{label:"rtmp",value:"rtmp"},{label:"rtsp",value:"rtsp"},{label:"http-flv",value:"hdl"}],d=Vue.ref(0),c=Vue.ref(0),s=Vue.ref(1e3),p=Vue.ref(1e3);function N(){g(a).then(e=>n.info(e)).catch(e=>n.error(e))}function F(){E(a).then(e=>n.info(e)).catch(e=>n.error(e))}U([o,l],()=>{o.pushCount?P(a,o).then(e=>n.info(e)).catch(e=>n.error(e)):N(),l.pullCount?B(a,l).then(e=>n.info(e)).catch(e=>n.error(e)):F()},{debounce:1e3});function w(){A(a).then(e=>{d.value=e.pushCount,c.value=e.pullCount})}return(e,u)=>{const V=Vue.resolveComponent("n-input"),r=Vue.resolveComponent("n-form-item"),m=Vue.resolveComponent("n-select"),i=Vue.resolveComponent("n-input-group"),v=Vue.resolveComponent("n-input-number"),f=Vue.resolveComponent("n-form"),C=Vue.resolveComponent("n-slider"),h=Vue.resolveComponent("n-card"),b=Vue.resolveComponent("n-space");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(Vue.unref(H),{onTick:w}),Vue.createVNode(b,null,{default:Vue.withCtx(()=>[Vue.createVNode(h,{title:"推送测试"},{"header-extra":Vue.withCtx(()=>[Vue.createTextVNode(" 正在推送数量： "+Vue.toDisplayString(d.value),1)]),action:Vue.withCtx(()=>[Vue.createVNode(C,{value:Vue.unref(o).pushCount,"onUpdate:value":u[4]||(u[4]=t=>Vue.unref(o).pushCount=t),max:s.value},null,8,["value","max"])]),default:Vue.withCtx(()=>[Vue.createVNode(f,{model:Vue.unref(o)},{default:Vue.withCtx(()=>[Vue.createVNode(r,{label:"本地流",path:"streamPath"},{default:Vue.withCtx(()=>[Vue.createVNode(V,{value:Vue.unref(o).streamPath,"onUpdate:value":u[0]||(u[0]=t=>Vue.unref(o).streamPath=t),placeholder:"输入流路径"},null,8,["value"])]),_:1}),Vue.createVNode(r,{label:"目标机器",path:"remoteHost"},{default:Vue.withCtx(()=>[Vue.createVNode(i,null,{default:Vue.withCtx(()=>[Vue.createVNode(m,{value:Vue.unref(o).protocol,"onUpdate:value":u[1]||(u[1]=t=>Vue.unref(o).protocol=t),options:_,style:{width:"120px"}},null,8,["value"]),Vue.createVNode(V,{value:Vue.unref(o).remoteHost,"onUpdate:value":u[2]||(u[2]=t=>Vue.unref(o).remoteHost=t),placeholder:"输入目标机器"},null,8,["value"])]),_:1})]),_:1}),Vue.createVNode(r,{label:"最大数量",path:"pushMaxCount"},{default:Vue.withCtx(()=>[Vue.createVNode(v,{value:s.value,"onUpdate:value":u[3]||(u[3]=t=>s.value=t),placeholder:"输入数量"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1}),Vue.createVNode(h,{title:"拉流测试"},{"header-extra":Vue.withCtx(()=>[Vue.createTextVNode(" 正在拉取数量： "+Vue.toDisplayString(c.value),1)]),action:Vue.withCtx(()=>[Vue.createVNode(C,{value:Vue.unref(l).pullCount,"onUpdate:value":u[8]||(u[8]=t=>Vue.unref(l).pullCount=t),max:p.value},null,8,["value","max"])]),default:Vue.withCtx(()=>[Vue.createVNode(f,{model:Vue.unref(l)},{default:Vue.withCtx(()=>[Vue.createVNode(r,{label:"远程地址",path:"remoteHost"},{default:Vue.withCtx(()=>[Vue.createVNode(i,null,{default:Vue.withCtx(()=>[Vue.createVNode(m,{value:Vue.unref(l).protocol,"onUpdate:value":u[5]||(u[5]=t=>Vue.unref(l).protocol=t),options:x,style:{width:"120px"}},null,8,["value"]),Vue.createVNode(V,{value:Vue.unref(l).remoteURL,"onUpdate:value":u[6]||(u[6]=t=>Vue.unref(l).remoteURL=t),placeholder:"输入远程地址"},null,8,["value"])]),_:1})]),_:1}),Vue.createVNode(r,{label:"最大数量",path:"pullMaxCount"},{default:Vue.withCtx(()=>[Vue.createVNode(v,{value:p.value,"onUpdate:value":u[7]||(u[7]=t=>p.value=t),placeholder:"输入数量"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}});export{L as default};
