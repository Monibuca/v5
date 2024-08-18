import{_ as N}from"./index-93eb0e35.js";import"./index-747e11ee.js";import"./vendor-ec30964e.js";const k=Vue.createTextVNode("推摄像头"),S=Vue.createTextVNode(" 推桌面"),D=Vue.createTextVNode("关闭"),T=["srcObject"],P=Vue.defineComponent({setup(b){const V=Vue.ref(""),l=Vue.ref(""),p=Vue.ref("live/test"),r=Vue.ref([]),c=Vue.ref(),m=naive.useMessage(),f=Vue.ref(""),v=Vue.ref("http://localhost:8080");navigator.mediaDevices.enumerateDevices().then(n=>{n.forEach(e=>{console.log(e.kind+": "+e.label+" id = "+e.deviceId,e),e.kind=="videoinput"&&r.value.push({label:e.label,value:e.deviceId})}),r.value.length>0&&(l.value=r.value[0].value)});async function C(){const n=await navigator.mediaDevices.getUserMedia({video:{deviceId:l.value},audio:!0});_(n)}async function w(){const n=await navigator.mediaDevices.getDisplayMedia();_(n)}let s;function h(){s==null||s()}let o;Vue.onUnmounted(h);function g(){o==null||o.getStats().then(n=>{let e="";n.forEach(a=>{e+=`${a.type} ${a.id} ${a.timestamp}
`,Object.keys(a).forEach(t=>{t!=="type"&&t!=="id"&&t!=="timestamp"&&(e+=` ${t}: ${a[t]}
`)})}),f.value=e})}async function _(n){try{c.value=n,o=new RTCPeerConnection,o.oniceconnectionstatechange=()=>{var t;console.log("oniceconnectionstatechange",o.iceConnectionState),m.info(o.iceConnectionState),o.iceConnectionState==="disconnected"&&((t=c.value)==null||t.getTracks().forEach(u=>u.stop()),c.value=void 0)},o.onicecandidate=t=>{console.log("onicecandidate",t.candidate)},n.getTracks().forEach(t=>{o.addTrack(t,n)});const e=await o.createOffer();await o.setLocalDescription(e);const a=await fetch(`${v.value}/webrtc/push/${p.value}`,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",redirect:"follow",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/sdp"},body:e.sdp});V.value=await a.text(),await o.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:V.value})),s=()=>{var t;o.close(),(t=c.value)==null||t.getTracks().forEach(u=>u.stop()),c.value=void 0}}catch(e){m.error(e.message)}}return(n,e)=>{const a=Vue.resolveComponent("n-input"),t=Vue.resolveComponent("n-select"),u=Vue.resolveComponent("n-button"),d=Vue.resolveComponent("n-space"),y=Vue.resolveComponent("n-card"),x=Vue.resolveComponent("n-split");return Vue.openBlock(),Vue.createBlock(d,{vertical:""},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(N),{onTick:g}),Vue.createVNode(d,null,{default:Vue.withCtx(()=>[Vue.createVNode(y,null,{default:Vue.withCtx(()=>[Vue.createVNode(d,{vertical:""},{default:Vue.withCtx(()=>[Vue.createVNode(a,{value:v.value,"onUpdate:value":e[0]||(e[0]=i=>v.value=i)},null,8,["value"]),Vue.createVNode(t,{value:l.value,"onUpdate:value":e[1]||(e[1]=i=>l.value=i),options:r.value},null,8,["value","options"]),Vue.createVNode(a,{value:p.value,"onUpdate:value":e[2]||(e[2]=i=>p.value=i)},null,8,["value"]),Vue.createVNode(d,null,{default:Vue.withCtx(()=>[Vue.createVNode(u,{onClick:C,type:"primary"},{default:Vue.withCtx(()=>[k]),_:1}),Vue.createVNode(u,{onClick:w,type:"primary"},{default:Vue.withCtx(()=>[S]),_:1}),Vue.createVNode(u,{onClick:h,type:"error"},{default:Vue.withCtx(()=>[D]),_:1})]),_:1})]),_:1})]),_:1}),Vue.createElementVNode("video",{id:"video",width:"640",height:"480",autoplay:"",muted:"",srcObject:c.value},null,8,T)]),_:1}),Vue.createVNode(x,{direction:"horizontal",max:.75,min:.25},{1:Vue.withCtx(()=>[Vue.createElementVNode("pre",null,Vue.toDisplayString(V.value),1)]),2:Vue.withCtx(()=>[Vue.createElementVNode("pre",null,Vue.toDisplayString(f.value),1)]),_:1},8,["max","min"])]),_:1})}}});export{P as default};
