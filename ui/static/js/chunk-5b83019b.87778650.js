(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b83019b"],{6280:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.time?n("el-tooltip",{attrs:{effect:"light",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("parseTimeFilter")(t.time)))]),t._v(" "),n("span",[t._v(t._s(t._f("formatPassTimeFilter")(t.time)))])]):t._e()},i=[],o={name:"ShowTime",props:["time"]},a=o,s=n("2877"),c=Object(s["a"])(a,r,i,!1,null,"68b4158a",null);e["a"]=c.exports},e7d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t._v(" "),n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.showRecordDialog}},[t._v("录制的视频")])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[n("el-table-column",{attrs:{prop:"StreamPath",label:"StreamPath"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Type||"await")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("show-time",{attrs:{time:t.row.StartTime}})]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"240px",label:"音频格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginAudioTrack?[t._v("\n          "+t._s(t._f("soundFormatFilter")(e.row.OriginAudioTrack.SoundFormat))+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"采样率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginAudioTrack?[t._v("\n          "+t._s(t._f("soundRateFilter")(e.row.OriginAudioTrack.SoundRate))+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"80px",label:"声道"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginAudioTrack?[t._v("\n          "+t._s(e.row.OriginAudioTrack.SoundType)+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"视频格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginVideoTrack?[t._v("\n          "+t._s(t._f("codecIDFilter")(e.row.OriginVideoTrack.CodecID))+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"分辨率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginVideoTrack?[t._v("\n          "+t._s(e.row.OriginVideoTrack.SPSInfo.Width)+"x"+t._s(e.row.OriginVideoTrack.SPSInfo.Height)+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"GOP"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginVideoTrack?[t._v("\n          "+t._s(e.row.OriginVideoTrack.GOP)+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"码率A/V"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.OriginAudioTrack?[t._v("\n          "+t._s(t._f("unitSpeedFormatFilter")(e.row.OriginAudioTrack.BPS))+"/"+t._s(t._f("unitSpeedFormatFilter")(e.row.OriginVideoTrack.BPS))+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"订阅者"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.Subscribers?[t._v("\n          "+t._s(e.row.Subscribers.length)+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.StreamPath?[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onPlay(e.row)}}},[t._v("播放")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onClose(e.row)}}},[t._v("关闭")]),t._v(" "),t.isRecording(e.row)?[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onStopRecord(e.row)}}},[t._v("暂停录制")])]:[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onRecord(e.row)}}},[t._v("录制")])]]:t._e()]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),n("el-dialog",{attrs:{title:"直播播放","show-close":!1,"before-close":t.handleCloseDialog,visible:t.dialogVisible,width:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible&&t.tempRtcStream?n("div",{staticClass:"stream-play-wrap"},[n("jessibuca-player",{attrs:{"stream-path":t.tempRtcStream}})],1):t._e(),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleCloseDialog}},[t._v("关 闭")])],1)]),t._v(" "),n("el-dialog",{attrs:{title:"录制的视频","show-close":!1,visible:t.dialogVisible2,width:"900px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[t.dialogVisible2?n("records"):t._e(),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog2}},[t._v("关 闭")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"是否开始录制",visible:t.dialogVisible3,width:"300px"},on:{"update:visible":function(e){t.dialogVisible3=e}}},[t._v("\n    追加模式:\n    "),n("el-tooltip",{attrs:{content:t.append?"是":"否",placement:"top"}},[n("el-switch",{model:{value:t.append,callback:function(e){t.append=e},expression:"append"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSureDialog3}},[t._v("确 定")])],1)],1)],1)},i=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("bd86")),a=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-wrap"},[t.loading?n("div",{staticClass:"player-loading"},[t._v("视频加载中...")]):t._e(),t._v(" "),t.rtcStream?[t.controls?[n("video",{attrs:{autoplay:"",controls:"",controlslist:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:""},domProps:{srcObject:t.rtcStream}})]:[n("video",{attrs:{autoplay:""},domProps:{srcObject:t.rtcStream}})]]:t._e()],2)},c=[],l=(n("96cf"),n("3b8d")),u=n("4ec3"),d={name:"WebrtcPlayer",rtcPeerConnection:null,data:function(){return{iceConnectionState:"",rtcPeerConnectionInit:!1,rtcStream:null,loading:!0}},props:{streamPath:{type:String,default:""},controls:{type:Boolean,default:!0}},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initRtcPeerConnection();case 2:if(console.log("initRtcPeerConnectioned"),!this.streamPath){t.next=10;break}return this.loading=!0,t.next=7,this.play(this.streamPath);case 7:this.loading=!1,console.log("played"),this.$emit("doPlayed");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initRtcPeerConnection:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new RTCPeerConnection,e.addTransceiver("video",{direction:"recvonly"}),e.addTransceiver("audio",{direction:"recvonly"}),e.onsignalingstatechange=function(t){console.log("onsignalingstatechange",t)},e.oniceconnectionstatechange=function(t){console.log("oniceconnectionstatechange",e.iceConnectionState)},e.onicecandidate=function(t){console.log("onicecandidate",t)},e.ontrack=function(t){console.log("ontrack",t),"video"===t.track.kind&&(r.rtcStream=t.streams[0])},t.next=9,e.createOffer();case 9:return n=t.sent,t.next=12,e.setLocalDescription(n);case 12:this.rtcPeerConnectionInit=!0,this.$options.rtcPeerConnection=e;case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),play:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$options.rtcPeerConnection,r=n.localDescription.toJSON(),t.prev=2,t.next=5,Object(u["m"])(e,r);case 5:if(i=t.sent,console.log(i),!i.errmsg){t.next=11;break}return this.$message({type:"error",message:i.errmsg}),this.close(),t.abrupt("return");case 11:n.setRemoteDescription(new RTCSessionDescription({type:i.type,sdp:i.sdp})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[2,14]])})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this.$options.rtcPeerConnection;t&&t.close()}},destroyed:function(){this.close()}},p=d,f=n("2877"),m=Object(f["a"])(p,s,c,!1,null,"1871937e",null),h=m.exports,g=n("a7ca"),b=n("6280"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataListFilter,border:"",fit:""}},[n("el-table-column",{attrs:{prop:"Path",label:"文件路径"}}),t._v(" "),n("el-table-column",{attrs:{label:"大小",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.Size))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"时长",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("formatDurationTimeFilter")(e.row.Duration))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return t.onPlay(e.row)}}},[t._v("播放")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){return t.onDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)},v=[],y={name:"record",data:function(){return{searchKey:"",dataList:[]}},computed:{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.Path.indexOf(e)})):this.dataList,t}},created:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;this.dataList=[],Object(u["i"])().then((function(e){Array.isArray(e)&&(t.dataList=e||[])}))},onDelete:function(t){var e=this;this.$confirm("是否删除Flv文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["d"])(t.Path).then((function(t){"success"===t?(e.$message({type:"success",message:"删除成功!"}),e.getList()):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},onPlay:function(t){var e=this;Object(u["o"])(t.Path).then((function(t){"success"===t?e.$message({type:"success",message:"播放成功!"}):e.$message({type:"error",message:t||"网络异常"})}))}}},w=y,S=Object(f["a"])(w,_,v,!1,null,"ed484a42",null),P=S.exports;function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"stream",components:{ShowTime:b["a"],WebrtcPlayer:h,Records:P,JessibucaPlayer:g["a"]},data:function(){return{dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,searchKey:"",tempRtcStream:"",currentLogPage:1,append:!1,tempStreamPath:""}},computed:O(O({},Object(a["b"])({streamList:function(t){return t.Streams}})),{},{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.streamList.filter((function(t){return-1!==t.StreamPath.indexOf(e)})):this.streamList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}}),methods:{onPlay:function(t){this.tempRtcStream=t.StreamPath,this.dialogVisible=!0},onClose:function(t){var e=this;this.$confirm("是否关闭流","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["w"])(t.StreamPath).then((function(t){e.$message({type:"success",message:"关闭成功!"})}))})).catch((function(){}))},showRecordDialog:function(){this.dialogVisible2=!0},onRecord:function(t){this.tempStreamPath=t.StreamPath,this.append=!1,this.dialogVisible3=!0},handleSureDialog3:function(){var t=this;this.tempStreamPath&&Object(u["s"])({streamPath:this.tempStreamPath,append:this.append}).then((function(e){t.dialogVisible3=!1,"success"===e?t.$message({type:"success",message:"开始录制"+(t.append?"(追加模式)":"")}):t.$message({type:"error",message:e||"网络异常"})})).catch((function(){t.dialogVisible3=!1}))},onStopRecord:function(t){var e=this;this.$confirm("是否停止录制","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["v"])(t.StreamPath).then((function(t){"success"===t?e.$message({type:"success",message:"停止录制，成功!"}):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},isRecording:function(t){return t.Subscribers&&t.Subscribers.find((function(t){return"FlvRecord"===t.Type}))},handleCloseDialog:function(){this.dialogVisible=!1,this.tempRtcStream=null},handleCloseDialog2:function(){this.dialogVisible2=!1}}},T=x,C=(n("f244"),Object(f["a"])(T,r,i,!1,null,"22b6a75c",null));e["default"]=C.exports},f1c0:function(t,e,n){},f244:function(t,e,n){"use strict";n("f1c0")}}]);