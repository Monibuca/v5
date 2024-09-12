import{_ as x,i as A,P as b,u as D,g as S,b as I}from"./index-5cccfc90.js";import{m as R,l as k,K as B,N as $}from"./vendor-ec30964e.js";const E=c=>(Vue.pushScopeId("data-v-b6411e00"),c=c(),Vue.popScopeId(),c),z={class:"view-account"},P=E(()=>Vue.createElementVNode("div",{class:"view-account-header"},null,-1)),T={class:"view-account-container"},U={class:"view-account-top"},q=E(()=>Vue.createElementVNode("div",{class:"view-account-top-logo"},[Vue.createElementVNode("img",{src:I,alt:""}),Vue.createElementVNode("h2",{class:"title"},"Monibuca")],-1)),M={class:"view-account-top-desc"},O={class:"view-account-form"},G=Vue.defineComponent({setup(c){const{t:a}=A.global,V=Vue.ref(!1),p=Vue.ref(a("发送邮箱验证码")),i=Vue.ref(60),_=Vue.ref(),r=naive.useMessage(),f=Vue.ref(!1),h=b.BASE_REGISTER_NAME,e=Vue.reactive({password:"",mail:"",verifycode:""}),w={mail:{required:!0,message:a("请输入邮箱"),trigger:"blur"},password:{required:!0,message:a("请输入密码"),trigger:"blur"},verifycode:{required:!0,message:a("请邮箱验证码"),trigger:"blur"}},F=D(),v=R(),C=k(),g=t=>{t.preventDefault(),_.value.validate(async u=>{var s;if(u)r.error("请填写正确信息");else{const{verifycode:l,password:n,mail:d}=e;r.loading("注册中..."),f.value=!0;const m={verifycode:l,password:n,mail:d};try{const o=await F.register(m);if(r.destroyAll(),o.code==0){const y=decodeURIComponent(((s=C.query)==null?void 0:s.redirect)||"/");r.success("注册成功，即将进入系统"),C.name===h?v.replace("/"):v.replace(y)}else r.info(o.msg||"登录失败")}finally{f.value=!1}}})};function N(){if(!e.mail)r.info(a("请输入邮箱验证码"));else{const t={mail:e.mail};S(t).then(()=>{r.info(a("验证码发送成功，请注意查收"));const u=setInterval(()=>{V.value=!0,p.value=`(${i.value}秒)后重新发送`,i.value--,i.value<0&&(clearInterval(u),p.value=a("发送邮箱验证码"),V.value=!1,i.value=10)},1e3)})}}return(t,u)=>{const s=Vue.resolveComponent("n-icon"),l=Vue.resolveComponent("n-input"),n=Vue.resolveComponent("n-form-item"),d=Vue.resolveComponent("n-button"),m=Vue.resolveComponent("n-form");return Vue.openBlock(),Vue.createElementBlock("div",z,[P,Vue.createElementVNode("div",T,[Vue.createElementVNode("div",U,[q,Vue.createElementVNode("div",M,Vue.toDisplayString(t.$t("实例管理平台")),1)]),Vue.createElementVNode("div",O,[Vue.createVNode(m,{ref_key:"formRef",ref:_,"label-placement":"left",size:"large",model:Vue.unref(e),rules:w},{default:Vue.withCtx(()=>[Vue.createVNode(n,{path:"mail"},{default:Vue.withCtx(()=>[Vue.createVNode(l,{value:Vue.unref(e).mail,"onUpdate:value":u[0]||(u[0]=o=>Vue.unref(e).mail=o),placeholder:t.$t("请输入邮箱帐号")},{prefix:Vue.withCtx(()=>[Vue.createVNode(s,{size:"18",color:"#808695"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(B))]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),Vue.createVNode(n,{path:"verifycode"},{default:Vue.withCtx(()=>[Vue.createVNode(l,{value:Vue.unref(e).verifycode,"onUpdate:value":u[1]||(u[1]=o=>Vue.unref(e).verifycode=o),placeholder:t.$t("请输入邮箱验证码")},{prefix:Vue.withCtx(()=>[Vue.createVNode(s,{size:"18",color:"#808695"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(B))]),_:1})]),_:1},8,["value","placeholder"]),Vue.createVNode(d,{type:"success",onClick:N,disabled:V.value},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(p.value),1)]),_:1},8,["disabled"])]),_:1}),Vue.createVNode(n,{path:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(l,{value:Vue.unref(e).password,"onUpdate:value":u[2]||(u[2]=o=>Vue.unref(e).password=o),type:"password",showPasswordOn:"click",placeholder:t.$t("请输入密码")},{prefix:Vue.withCtx(()=>[Vue.createVNode(s,{size:"18",color:"#808695"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref($))]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),Vue.createVNode(n,null,{default:Vue.withCtx(()=>[Vue.createVNode(d,{type:"primary",onClick:g,size:"large",loading:f.value,block:""},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(t.$t("注册")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])])}}}),j=x(G,[["__scopeId","data-v-b6411e00"]]);export{j as default};