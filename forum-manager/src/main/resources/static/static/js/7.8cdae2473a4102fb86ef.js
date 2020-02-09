webpackJsonp([7],{"5sxp":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("vLgD"),i={getList:function(){return Object(l.a)({url:"/gathering/gathering",method:"get"})},search:function(t,e,a){return Object(l.a)({url:"/gathering/gathering/search/"+t+"/"+e,method:"post",data:a})},save:function(t){return Object(l.a)({url:"/gathering/gathering",method:"post",data:t})},findById:function(t){return Object(l.a)({url:"/gathering/gathering/"+t,method:"get"})},update:function(t,e){return null==t||""==t?this.save(e):Object(l.a)({url:"/gathering/gathering/"+t,method:"put",data:e})},deleteById:function(t){return Object(l.a)({url:"/gathering/gathering/"+t,method:"delete"})}},o=function(){return Object(l.a)({url:"/base/city",method:"get"})},r={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},cityList:[],id:""}},created:function(){var t=this;this.fetchData(),o().then(function(e){t.cityList=e.data})},methods:{fetchData:function(){var t=this;i.search(this.currentPage,this.pageSize,this.searchMap).then(function(e){t.list=e.data.rows,t.total=e.data.total,console.log(t.currentPage,t.pageSize)})},handleSizeChange:function(t){var e=this;this.pageSize=t,i.search(this.currentPage,this.pageSize,this.searchMap).then(function(t){e.list=t.data.rows,e.total=t.data.total})},handleCurrentChange:function(t){var e=this;this.currentPage=t,i.search(this.currentPage,this.pageSize,this.searchMap).then(function(t){e.list=t.data.rows,e.total=t.data.total})},handleSave:function(){var t=this;i.update(this.id,this.pojo).then(function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}),this.dialogFormVisible=!1},handleEdit:function(t){var e=this;this.id=t,this.dialogFormVisible=!0,""!=t?i.findById(t).then(function(t){t.flag&&(e.pojo=t.data)}):this.pojo={}},handleDelete:function(t){var e=this;this.$confirm("确定要删除此纪录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.deleteById(t).then(function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()})}).catch(function(){})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{attrs:{placeholder:"活动名称"},model:{value:t.searchMap.name,callback:function(e){t.$set(t.searchMap,"name",e)},expression:"searchMap.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.searchMap.starttime_1,callback:function(e){t.$set(t.searchMap,"starttime_1",e)},expression:"searchMap.starttime_1"}}),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择结束日期"},model:{value:t.searchMap.starttime_2,callback:function(e){t.$set(t.searchMap,"starttime_2",e)},expression:"searchMap.starttime_2"}})],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.fetchData()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleEdit("")}}},[t._v("新增")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"活动ID",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"活动名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sponsor",label:"主办方",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"活动地址",width:"280"}}),t._v(" "),a("el-table-column",{attrs:{prop:"starttime",label:"开始日期",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"endtime",label:"结束日期",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleEdit(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:total":function(e){t.total=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{attrs:{placeholder:"活动名称"},model:{value:t.pojo.name,callback:function(e){t.$set(t.pojo,"name",e)},expression:"pojo.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"基本地址"}},[a("el-input",{attrs:{placeholder:"基本地址"},model:{value:t.pojo.address,callback:function(e){t.$set(t.pojo,"address",e)},expression:"pojo.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"开始日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期"},model:{value:t.pojo.starttime,callback:function(e){t.$set(t.pojo,"starttime",e)},expression:"pojo.starttime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"截至日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"截至日期"},model:{value:t.pojo.endtime,callback:function(e){t.$set(t.pojo,"endtime",e)},expression:"pojo.endtime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"报名截止"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"报名截止"},model:{value:t.pojo.enrolltime,callback:function(e){t.$set(t.pojo,"enrolltime",e)},expression:"pojo.enrolltime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动详情"}},[a("el-input",{attrs:{placeholder:"活动详情",type:"textarea",rows:2},model:{value:t.pojo.detail,callback:function(e){t.$set(t.pojo,"detail",e)},expression:"pojo.detail"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选择城市"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.pojo.city,callback:function(e){t.$set(t.pojo,"city",e)},expression:"pojo.city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"是否可见"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.pojo.status,callback:function(e){t.$set(t.pojo,"status",e)},expression:"pojo.status"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleSave()}}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("关闭")])],1)],1)],1)],1)},staticRenderFns:[]},s=a("/Xao")(r,n,!1,null,null,null);e.default=s.exports}});