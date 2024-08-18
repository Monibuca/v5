import{_ as F,i as E,u as N,a as y,P as S}from"./index-747e11ee.js";import{m as k,l as x,K as b,N as A}from"./vendor-ec30964e.js";const D=""+new URL("../guide.png",import.meta.url).href;const R=n=>(Vue.pushScopeId("data-v-4051bd7c"),n=n(),Vue.popScopeId(),n),I={class:"view-account"},P=R(()=>Vue.createElementVNode("div",{class:"view-account-header"},null,-1)),$={class:"view-account-container"},U={class:"view-account-top"},z={class:"view-account-top-logo"},q={class:"view-account-top-desc"},O={class:"view-account-form"},j={class:"flex view-account-other"},L={class:"flex-initial",style:{"margin-left":"auto"}},M={key:0,src:D,width:"300"},T=Vue.defineComponent({setup(n){const{t:c}=E.global,_=Vue.ref(),l=naive.useMessage(),s=Vue.ref(!1),u=Vue.reactive({mail:"",password:"",isCaptcha:!0}),v={mail:{required:!0,message:c("请输入邮箱"),trigger:"blur"},password:{required:!0,message:c("请输入密码"),trigger:"blur"}},C=N(),i=y(),d=k(),h=x(),f=()=>{_.value.validate(async e=>{var t;if(e)l.error("请填写完整信息，并且进行验证码校验");else{const{mail:V,password:a}=u;s.value=!0;const r={mail:V,password:a};try{const o=await C.login(r);if(l.destroyAll(),o.code==0){const p=decodeURIComponent(((t=h.query)==null?void 0:t.redirect)||"/");l.success(c("登录成功")),d.replace(p)}}catch{s.value=!1}finally{s.value=!1}}})};function w(){d.push({name:S.BASE_REGISTER_NAME})}function g(){d.push({name:"root_password"})}return document.onkeydown=function(e){e.key=="Enter"&&f()},(e,t)=>{const V=Vue.resolveComponent("svg-icon"),a=Vue.resolveComponent("n-icon"),r=Vue.resolveComponent("n-input"),o=Vue.resolveComponent("n-form-item"),p=Vue.resolveComponent("n-button"),B=Vue.resolveComponent("n-form");return Vue.openBlock(),Vue.createElementBlock("div",I,[P,Vue.createElementVNode("div",$,[Vue.createElementVNode("div",U,[Vue.createElementVNode("div",z,[Vue.createVNode(V,{name:"logo",width:"256px"})]),Vue.createElementVNode("div",q,Vue.toDisplayString(Vue.unref(i).isSaas?e.$t("实例管理平台"):"实例管理平台（私有化体验版）"),1)]),Vue.createElementVNode("div",O,[Vue.createVNode(B,{ref_key:"formRef",ref:_,"label-placement":"left",size:"large",model:Vue.unref(u),rules:v},{default:Vue.withCtx(()=>[Vue.createVNode(o,{path:"mail"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{value:Vue.unref(u).mail,"onUpdate:value":t[0]||(t[0]=m=>Vue.unref(u).mail=m),placeholder:e.$t("请输入账号")},{prefix:Vue.withCtx(()=>[Vue.createVNode(a,{size:"18",color:"#808695"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(b))]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),Vue.createVNode(o,{path:"password"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{value:Vue.unref(u).password,"onUpdate:value":t[1]||(t[1]=m=>Vue.unref(u).password=m),type:"password",showPasswordOn:"click",placeholder:e.$t("请输入密码")},{prefix:Vue.withCtx(()=>[Vue.createVNode(a,{size:"18",color:"#808695"},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(A))]),_:1})]),_:1},8,["value","placeholder"])]),_:1}),Vue.createVNode(o,null,{default:Vue.withCtx(()=>[Vue.createVNode(p,{type:"primary",onClick:f,size:"large",loading:s.value,block:""},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.$t("登录")),1)]),_:1},8,["loading"])]),_:1}),Vue.unref(i).isSaas?(Vue.openBlock(),Vue.createBlock(o,{key:0,class:"default-color"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",j,[Vue.createElementVNode("div",L,[Vue.createElementVNode("a",{onClick:w},Vue.toDisplayString(e.$t("注册账号")),1),Vue.createElementVNode("a",{style:{"margin-left":"20px"},onClick:g},Vue.toDisplayString(e.$t("忘记密码")),1)])])]),_:1})):Vue.createCommentVNode("",!0)]),_:1},8,["model"])])]),Vue.unref(i).isSaas?(Vue.openBlock(),Vue.createElementBlock("img",M)):Vue.createCommentVNode("",!0)])}}}),H=F(T,[["__scopeId","data-v-4051bd7c"]]);export{H as default};
