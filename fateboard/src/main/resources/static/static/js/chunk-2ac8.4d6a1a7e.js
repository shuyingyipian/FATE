(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2ac8"],{"7Qib":function(t,n,a){"use strict";a.d(n,"d",function(){return r}),a.d(n,"b",function(){return l}),a.d(n,"c",function(){return c}),a.d(n,"a",function(){return d});a("jWXv"),a("rfXi"),a("gDS+"),a("P2sY");var e=a("GQeE"),o=a.n(e),s=a("EJiy"),i=a.n(s);function r(t,n){if(0===arguments.length)return null;var a=n||"{y}-{m}-{d} {h}:{i}:{s}",e=void 0;"object"===(void 0===t?"undefined":i()(t))?e=t:("string"==typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"==typeof t&&10===t.toString().length&&(t*=1e3),e=new Date(t));var o={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,n){var a=o[n];return"a"===n?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a="0"+a),a||0)})}function l(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t/=1e3);var n=Math.floor(t/3600),a=Math.floor(t/60%60),e=Math.floor(t%60),o=function(t){return t<1?"00":t<10?"0"+t:t.toString()};return(n=o(n))+":"+(a=o(a))+":"+(e=o(e))}function c(t,n,a){var e=this,o=(arguments.length>3&&void 0!==arguments[3]&&arguments[3],window.location.origin.replace(/http|https/g,"ws")),s=new WebSocket(o+t);return s.onopen=n,s.onmessage=a,s.onerror=function(){e.initWebSocket(t,s)},s.onclose=function(){},s}function d(t){if(!t&&"object"!==(void 0===t?"undefined":i()(t)))throw new Error("error arguments","deepClone");var n=t.constructor===Array?[]:{};return o()(t).forEach(function(a){t[a]&&"object"===i()(t[a])?n[a]=d(t[a]):n[a]=t[a]}),n}},"7z+L":function(t,n,a){var e=a("gYtT");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("12b0fd0e",e,!0,{})},"9g82":function(t,n,a){"use strict";a.r(n);var e=a("m1cH"),o=a.n(e),s=a("GQeE"),i=a.n(s),r=a("Yulh"),l={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{title:{show:!1},name:"业务指标",type:"gauge",detail:{show:!0,formatter:"{value}%",offsetCenter:[0,"30%"],fontWeight:"lighter",fontSize:13},axisLine:{lineStyle:{color:[[.3,"#67e0e3"],[.7,"#37a2da"],[1,"#0abd00"]],width:20}},pointer:{show:!0},data:[{value:0,name:"完成率"}]}]},c=a("lAiS"),d=a("Xi/h"),p=a("7Qib"),h=a("dv4G"),u={components:{EchartContainer:r.a},data:function(){return{jobOptions:l,graphOptions:c.a,datasetList:[],jobId:this.$route.query.job_id,role:this.$route.query.role,partyId:this.$route.query.party_id,jobStatus:"",datasetLoading:!1,logLoading:!1,jobTimer:null,logWebsocket:{error:null,warning:null,info:null,debug:null},jobWebsocket:null,logsMap:{error:{list:[],length:0},warning:{list:[],length:0},info:{list:[],length:0},debug:{list:[],length:0}},DAGData:null,gaugeInstance:null,graphInstance:null,ratio:"",count:"",AUC:"",elapsed:"",currentLogTab:"info"}},mounted:function(){this.getDatasetInfo(),this.getDAGDpendencies(),this.getLogSize(),this.openLogsWebsocket(),this.openJobWebsocket()},beforeDestroy:function(){clearInterval(this.jobTimer),this.closeWebsocket()},methods:{getDAGDpendencies:function(){var t=this,n={job_id:this.jobId,role:this.role,party_id:this.partyId};Object(h.d)(n).then(function(n){t.DAGData=n.data})},openLogsWebsocket:function(){var t=this;i()(this.logsMap).forEach(function(n){t.logWebsocket[n]=Object(p.c)("/log/"+t.jobId+"/"+t.role+"/"+t.partyId+"/default/"+n,function(t){},function(a){var e=JSON.parse(a.data);Array.isArray(e)?e.length>0&&(t.logsMap[n].list=[].concat(o()(t.logsMap[n].list),o()(e)),t.logsMap[n].length=e[e.length-1].lineNum):(t.logsMap[n].list.push(e),t.logsMap[n].length=e.lineNum)})})},openJobWebsocket:function(){var t=this;this.jobWebsocket=Object(p.c)("/websocket/progress/"+this.jobId+"/"+this.role+"/"+this.partyId,function(t){},function(n){var a=JSON.parse(n.data),e=a.process,o=a.status,s=a.duration,i=a.dependency_data;t.graphInstance&&t.pushDataToGraphInstance(t.graphInstance,i.data),s&&(t.elapsed=Object(p.b)(s,!0)),t.jobStatus=o,"failed"!==t.jobStatus&&"success"!==t.jobStatus&&(t.jobOptions.series[0].pointer.show=!0,t.jobOptions.series[0].detail.show=!0,t.jobOptions.series[0].data[0].value=e||0),t.gaugeInstance&&t.gaugeInstance.setOption(t.jobOptions,!0)})},getLogSize:function(){},getDatasetInfo:function(){var t=this,n={job_id:this.jobId,role:this.role,party_id:this.partyId};Object(h.e)(n).then(function(n){t.datasetLoading=!1;var a=n.data,e=a.job,o=a.dataset;if(o){var s=o.roles,r=o.dataset;i()(s).forEach(function(n){var a=[];s[n].forEach(function(t){a.push({value:t,label:t})}),t.datasetList.push({role:n.toUpperCase(),options:a,roleValue:a[0].label,datasetData:r[n]||""})})}e&&(t.jobStatus=e.fStatus)})},getJobEchartInstance:function(t){this.gaugeInstance=t},closeWebsocket:function(){var t=this;i()(this.logWebsocket).forEach(function(n){t.logWebsocket[n]&&t.logWebsocket[n].close()}),this.jobWebsocket&&this.jobWebsocket.close()},killJob:function(){var t=this;console.log(this.jobWebsocket),this.$confirm("You can't undo this action","Are you sure you want to kill this job?",{confirmButtonText:"Sure",cancelButtonText:"Cancel",type:"warning"}).then(function(){t.jobStatus="failed"}).catch(function(){console.log("cancel kill")})},getGraphEchartInstance:function(t){var n=this,a=null;a=window.setInterval(function(){n.DAGData&&(window.clearInterval(a),n.graphOptions.tooltip.show=!1,n.pushDataToGraphInstance(t,n.DAGData))},100),this.graphInstance=t},pushDataToGraphInstance:function(t,n){var a=Object(d.a)(n),e=a.dataList,o=a.linksList;this.graphOptions.series[0].data=e,this.graphOptions.series[0].links=o,t.setOption(this.graphOptions,!0)},toDetails:function(){this.$router.push({path:"/details",query:{job_id:this.jobId,role:this.role,party_id:this.partyId,from:"Dashboard"}})},switchLogTab:function(t){this.currentLogTab=t},logOnMousewheel:function(t){var n=this,a=this.logsMap[this.currentLogTab].list[0];if(a){var e=a.lineNum-1;if(e>0){if(0===this.$refs.logView.scrollTop&&(t.wheelDelta>0||t.detail>0)){var s=e-1e3>1?e-1e3:1;if(!this.logLoading){this.logLoading=!0;window.setTimeout(function(){Object(h.h)({componentId:"default",job_id:n.jobId,role:n.role,party_id:n.partyId,begin:s,end:e,type:n.currentLogTab}).then(function(t){var a=[];t.data.map(function(t){t&&a.push(t)}),n.logsMap[n.currentLogTab].list=[].concat(a,o()(n.logsMap[n.currentLogTab].list)),n.logLoading=!1}).catch(function(){n.logLoading=!1})},1e3)}}}}}}},b=(a("lJfc"),a("KHd+")),g=Object(b.a)(u,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"dashboard-container bg-dark app-container"},[a("h3",{staticClass:"app-title flex space-between"},[a("span",[t._v("Dashboard")]),t._v(" "),a("p",[t._v("Job: "),a("span",[t._v(t._s(t.jobId))])])]),t._v(" "),a("el-row",{staticClass:"dash-board-list",attrs:{gutter:24}},[a("el-col",{attrs:{span:8}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.datasetLoading,expression:"datasetLoading"}],staticClass:"col dataset-info shadow"},[a("h3",{staticClass:"list-title"},[t._v("DATASET INFO")]),t._v(" "),t._l(t.datasetList,function(n,e){return a("el-row",{key:e,staticClass:"dataset-row",attrs:{gutter:4}},[a("el-col",{attrs:{span:6,offset:2}},[a("div",{staticClass:"dataset-item"},[a("p",{staticClass:"name dataset-title"},[t._v(t._s(n.role))]),t._v(" "),1===n.options.length?a("p",{staticClass:"value"},[t._v(t._s(n.roleValue))]):a("el-select",{model:{value:n.roleValue,callback:function(a){t.$set(n,"roleValue",a)},expression:"row.roleValue"}},[t._l(n.options,function(t,n){return a("el-option",{key:n,attrs:{value:t.value,label:t.label}})}),t._v("\n                "+t._s(n.roleValue)+"\n              ")],2)],1)]),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"dataset-item"},[a("p",{staticClass:"name"},[t._v("DATASET")]),t._v(" "),a("p",{staticClass:"value"},[a("el-tooltip",{attrs:{content:n.datasetData?n.datasetData[n.roleValue].train_data:"",placement:"top"}},[a("span",[t._v(t._s(n.datasetData?n.datasetData[n.roleValue].train_data:""))])])],1)])])],1)})],2)]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"col job flex-center justify-center shadow"},[a("h3",{staticClass:"list-title"},[t._v("JOB")]),t._v(" "),"failed"===t.jobStatus||"success"===t.jobStatus?a("div",{staticClass:"job-end-container flex flex-col flex-center"},["failed"===t.jobStatus?a("i",{staticClass:"el-icon-circle-close job-icon icon-error",staticStyle:{color:"#ff6464"}}):"success"===t.jobStatus?a("i",{staticClass:"el-icon-circle-check job-icon icon-error",staticStyle:{color:"#24b68b"}}):t._e(),t._v(" "),a("ul",{staticClass:"job-info flex space-around flex-wrap w-100"},[a("li",[a("p",{staticClass:"name"},[t._v("status")]),t._v(" "),a("p",{staticClass:"value"},[t._v(t._s(t.jobStatus))])]),t._v(" "),t.elapsed?a("li",[a("p",{staticClass:"name"},[t._v("duration")]),t._v(" "),a("p",{staticClass:"value"},[t._v(t._s(t.elapsed))])]):t._e(),t._v(" "),t.AUC?a("li",[a("p",{staticClass:"name overflow-ellipsis"},[t._v("best score(AUC)")]),t._v(" "),a("p",{staticClass:"value"},[t._v(t._s(t.AUC))])]):t._e(),t._v(" "),t.ratio?a("li",[a("p",{staticClass:"name"},[t._v("ratio")]),t._v(" "),a("p",{staticClass:"value"},[t._v(t._s(t.ratio))])]):t._e(),t._v(" "),t.count?a("li",[a("p",{staticClass:"name"},[t._v("count")]),t._v(" "),a("p",{staticClass:"value"},[t._v(t._s(t.count))])]):t._e()]),t._v(" "),a("el-button",{attrs:{type:"primary",round:""},on:{click:function(n){t.toDetails(t.jobId)}}},[t._v("VIEW THIS JOB")])],1):"waiting"===t.jobStatus||"running"===t.jobStatus?a("div",{staticClass:"echarts-container"},[t.elapsed?a("div",{staticClass:"elapsed"},[a("p",{staticClass:"elapsed-title"},[t._v("elapsed")]),t._v(" "),a("p",{staticClass:"elapsed-time text-primary"},[t._v(t._s(t.elapsed))])]):t._e(),t._v(" "),a("echart-container",{class:"echarts",attrs:{options:t.jobOptions},on:{getEchartInstance:t.getJobEchartInstance}}),t._v(" "),a("div",{staticClass:"bottom-wrapper w-100 flex flex-col flex-center"},[a("span",{staticClass:"status"},[t._v(t._s(t.jobStatus))]),t._v(" "),a("el-button",{attrs:{type:"primary",round:""},on:{click:function(n){t.toDetails(t.jobId)}}},[t._v("VIEW THIS JOB")])],1)],1):t._e()])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticClass:"col graph flex-center justify-center shadow"},[a("h3",{staticClass:"list-title"},[t._v("GRAPH")]),t._v(" "),t.DAGData?a("div",{staticClass:"wrapper w-100",staticStyle:{"min-width":"400px"},style:{"min-height":60*t.DAGData.component_list.length+"px"}},[a("echart-container",{class:"echarts",attrs:{options:t.graphOptions},on:{getEchartInstance:t.getGraphEchartInstance}})],1):t._e()])])],1),t._v(" "),a("div",{staticClass:"log-wrapper shadow"},[a("h3",{staticClass:"title"},[t._v("LOG")]),t._v(" "),a("ul",{staticClass:"tab-bar flex"},t._l(Object.keys(t.logsMap),function(n,e){return a("li",{key:e,staticClass:"tab-btn",class:{"tab-btn-active":t.currentLogTab===n},on:{click:function(a){t.switchLogTab(n)}}},[a("span",{staticClass:"text"},[t._v(t._s(n))]),t._v(" "),"all"!==n?a("span",{staticClass:"count",class:[n]},[t._v(t._s(t.logsMap[n].length))]):t._e()])})),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.logLoading,expression:"logLoading"}],ref:"logView",staticClass:"log-container",on:{mousewheel:t.logOnMousewheel}},[a("ul",{staticClass:"log-list overflow-hidden"},t._l(t.logsMap[t.currentLogTab].list,function(n,e){return a("li",{key:e},[a("div",{staticClass:"flex"},[a("span",{staticStyle:{color:"#999","margin-right":"5px"}},[t._v(t._s(n.lineNum))]),t._v(" "),a("span",[t._v(" "+t._s(n.content))])])])}))])])],1)},[],!1,null,null,null);g.options.__file="index.vue";n.default=g.exports},TJnn:function(t,n,a){"use strict";var e=a("7z+L");a.n(e).a},"Xi/h":function(t,n,a){"use strict";n.a=function(t){var n=t.dependencies,a=t.component_list,e=t.component_module,o=0,s=0,i=[],r=[],l=[],c=[];a.forEach(function(t){c.push(t.component_name)});for(var d=function(t){var d=n[a[t].component_name],p="#333";if("failed"===a[t].status?p="#ff6464":"running"===a[t].status?p="#494ece":"success"===a[t].status&&(p="#24b68b"),d){for(var h=0;h<d.length;h++)l.push({target:t,source:c.indexOf(d[h])});var u=null;r.forEach(function(t){for(var n=0;n<d.length;n++)t.name===d[n]&&(u?t.level<u.level&&(u=t):u=t)}),u&&o<=u.level?(++o,i.push(s),s=1):++s,t===a.length-1&&i.push(s)}else++s;var b={color:p,borderColor:p},g={color:p};r.push({name:a[t].component_name,componentType:e[a[t].component_name],level:o,index:s,sourceLabel:b,label:b,itemStyle:g})},p=0;p<a.length;p++)d(p);var h=Math.max.apply(Math,i),u=10*(h-1);return r.map(function(t,n){var a=i[t.level],e=0;e=a===h?10*(t.index-1)*3:u/(a+1)*t.index*3,t.x=e,t.y=10*(t.level+0)}),{dataList:r,linksList:l}}},Yulh:function(t,n,a){"use strict";var e=a("MT78"),o=a.n(e),s={props:{className:{type:String,default:""},id:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{echarts:o.a,echartInstance:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.echartInstance&&(this.echartInstance.dispose(),this.echartInstance=null,window.removeEventListener("resize",this.resize))},methods:{initChart:function(){this.echartInstance=this.echarts.init(this.$refs.myEchart),window.addEventListener("resize",this.resize),this.$emit("getEchartInstance",this.echartInstance),this.$emit("getEchart",this.echarts),this.echartInstance.setOption(this.options)},resize:function(){this.echartInstance.resize()}}},i=(a("TJnn"),a("KHd+")),r=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"myEchart",class:this.className,attrs:{id:this.id}})},[],!1,null,null,null);r.options.__file="index.vue";n.a=r.exports},dv4G:function(t,n,a){"use strict";a.d(n,"a",function(){return o}),a.d(n,"f",function(){return s}),a.d(n,"b",function(){return i}),a.d(n,"g",function(){return r}),a.d(n,"e",function(){return l}),a.d(n,"d",function(){return c}),a.d(n,"c",function(){return d}),a.d(n,"h",function(){return p});var e=a("t3Un");function o(t){var n=t.total,a=t.pno,o=t.psize,s=void 0===o?10:o;return Object(e.a)({url:"/job/query/all/"+n+"/"+a+"/"+s,method:"get",params:{}})}function s(){return Object(e.a)({url:"/job/query/totalrecord",method:"get",params:{}})}function i(t){return Object(e.a)({url:"/job/query/status",method:"get",params:t})}function r(t){return Object(e.a)({url:"/job/v1/pipeline/job/stop",method:"post",data:t})}function l(t){var n=t.job_id,a=t.role,o=t.party_id;return Object(e.a)({url:"/job/query/"+n+"/"+a+"/"+o,method:"get"})}function c(t){return Object(e.a)({url:"/v1/pipeline/dag/dependencies",method:"post",data:t})}function d(t){return Object(e.a)({url:"/v1/tracking/component/parameters",method:"post",data:t})}function p(t){var n=t.componentId,a=t.job_id,o=t.role,s=t.party_id,i=t.begin,r=t.end,l=t.type;return Object(e.a)({url:"/queryLogWithSize/"+a+"/"+o+"/"+s+"/"+n+"/"+l+"/"+i+"/"+r,method:"get"})}},gYtT:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.default-echart {\n  width: 75vw;\n  height: 75vh;\n}\n",""])},lAiS:function(t,n,a){"use strict";n.a={tooltip:{show:!0},animationDurationUpdate:500,animationEasingUpdate:"quinticInOut",grid:{top:"20%",bottom:"20%",left:"10%",right:"10%"},series:[{type:"graph",layout:"none",roam:!1,label:{normal:{show:!0,offset:[0,25],fontSize:14}},symbol:"circle",symbolSize:[30,30],symbolOffset:[0,0],edgeSymbol:["none","arrow"],edgeSymbolSize:[3,8],data:[],links:[],itemStyle:{},lineStyle:{normal:{opacity:.9,width:1,curveness:0}}}]}},lJfc:function(t,n,a){"use strict";var e=a("p9cb");a.n(e).a},p9cb:function(t,n,a){var e=a("xWUn");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a("SZ7m").default)("01df6e23",e,!0,{})},xWUn:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,".dashboard-container {\n  height: 100%;\n}\n.dashboard-container .dash-board-list .col {\n    height: 360px;\n    background: #fff;\n}\n.dashboard-container .dash-board-list .col .list-title {\n      height: 40px;\n      padding-top: 20px;\n      font-size: 18px;\n      color: #534c77;\n      text-indent: 24px;\n}\n.dashboard-container .dash-board-list .col .echarts-container {\n      width: 100%;\n      height: 100%;\n      position: relative;\n}\n.dashboard-container .dash-board-list .dataset-info {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row {\n      margin-top: 30px;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row:first-of-type {\n        margin-top: 32px;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row .dataset-item {\n        margin-bottom: 20px;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row .dataset-item .name {\n          margin-bottom: 6px;\n          color: #bbbbc8;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row .dataset-item .dataset-title {\n          font-weight: bold;\n          color: #7f7d8e;\n}\n.dashboard-container .dash-board-list .dataset-info .dataset-row .dataset-item .value {\n          color: #7f7d8e;\n          font-weight: bold;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n}\n.dashboard-container .dash-board-list .job .echarts {\n    width: 100%;\n    height: 320px;\n    /*top: 5%;*/\n}\n.dashboard-container .dash-board-list .job .elapsed {\n    position: absolute;\n    top: 0;\n    right: 16px;\n}\n.dashboard-container .dash-board-list .job .elapsed .elapsed-title {\n      margin-right: 14px;\n      margin-bottom: 6px;\n      color: #bbbbc8;\n      text-align: right;\n}\n.dashboard-container .dash-board-list .job .elapsed .elapsed-time {\n      height: 28px;\n      width: 88px;\n      background: #f8f8fa;\n      text-align: center;\n      line-height: 28px;\n      border-radius: 28px;\n      font-size: 16px;\n}\n.dashboard-container .dash-board-list .job .job-end-container {\n    height: 320px;\n}\n.dashboard-container .dash-board-list .job .job-end-container .job-icon {\n      margin-top: 35px;\n      margin-bottom: 36px;\n      font-size: 50px;\n}\n.dashboard-container .dash-board-list .job .job-end-container .job-info {\n      padding: 0 10px;\n}\n.dashboard-container .dash-board-list .job .job-end-container .job-info > li {\n        width: 28%;\n        margin-bottom: 20px;\n}\n.dashboard-container .dash-board-list .job .job-end-container .job-info > li .name {\n          font-size: 12px;\n          color: #999;\n}\n.dashboard-container .dash-board-list .job .bottom-wrapper {\n    position: absolute;\n    bottom: 56px;\n    left: 0;\n}\n.dashboard-container .dash-board-list .job .bottom-wrapper .status {\n      margin-bottom: 12px;\n      font-size: 14px;\n}\n.dashboard-container .dash-board-list .job .bottom-wrapper .btn {\n      padding: 5px 25px;\n}\n.dashboard-container .graph {\n    overflow: auto;\n}\n.dashboard-container .graph .wrapper {\n      height: 320px;\n}\n.dashboard-container .graph .wrapper .echarts {\n        width: 100%;\n        height: 100%;\n}\n.dashboard-container .log-wrapper {\n    margin: 24px 0;\n    padding: 24px;\n    background: #fff;\n}\n.dashboard-container .log-wrapper .title {\n      padding-top: 20px;\n      margin-bottom: 15px;\n      font-size: 18px;\n      color: #534c77;\n}\n.dashboard-container .log-wrapper .tab-bar {\n      margin-bottom: 18px;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-right: 24px;\n        padding: 0 5px;\n        background: #f8f8fa;\n        line-height: 26px;\n        border-radius: 26px;\n        cursor: pointer;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .text {\n          padding: 0 10px;\n          font-size: 16px;\n          font-weight: bold;\n          color: #7f7d8e;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .count {\n          min-width: 16px;\n          height: 16px;\n          padding: 0 5px;\n          border-radius: 16px;\n          line-height: 16px;\n          text-align: center;\n          color: #fff;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .error {\n          background: #ff6464;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .warning {\n          background: #ff5d93;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .info {\n          background: #ffd70d;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn .debug {\n          background: #24b68b;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn:hover {\n          background: #494ece;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn:hover .text {\n            color: #fff;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn-active {\n        background: #494ece;\n}\n.dashboard-container .log-wrapper .tab-bar .tab-btn-active .text {\n          color: #fff;\n}\n.dashboard-container .log-wrapper .log-container {\n      height: 280px;\n      padding: 24px;\n      background: #f8f8fa;\n      overflow: auto;\n}\n.dashboard-container .log-wrapper .log-container .log-list > li {\n        /*height: 25px;*/\n        line-height: 25px;\n        text-indent: 10px;\n}\n",""])}}]);