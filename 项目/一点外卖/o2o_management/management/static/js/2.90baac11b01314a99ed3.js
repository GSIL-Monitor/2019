webpackJsonp([2],{"2oH1":function(e,t){},OvRC:function(e,t,a){e.exports={default:a("oM7Q"),__esModule:!0}},oM7Q:function(e,t,a){a("sF+V");var o=a("FeBl").Object;e.exports=function(e,t){return o.create(e,t)}},oqP1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("OvRC"),i=a.n(o),r=a("gyMJ"),n=a("spLH"),s=(a("mtWM"),{components:{pagination:n.a},data:function(){return{rule:{categoryName:[{required:!0,message:"请输入类别名称",tigger:"blur"}],categoryImg:[{required:!0,message:"请选择上传的图片",tigger:"change"}]},loading:!1,tableData:[],tempData:{categoryName:null},searchData:{},page:{pageNum:null,pageCurrent:1,pageSize:5},editorItem:{},editorVisabilty:!1,addVisabilty:!1,newCategory:{categoryImg:"",categoryName:""}}},methods:{initData:function(e,t){var a=this;this.loading=!0,Object(r.G)({page:e||this.page.pageCurrent,size:t||this.page.pageSize,categoryName:this.searchData.categoryName}).then(function(e){a.tableData=e.rows,a.page.pageNum=e.count}),setTimeout(function(){a.loading=!1},500)},add:function(){var e=this;this.$refs.add.validate(function(t){t&&Object(r.D)(e.newCategory).then(function(t){e.$common.clearMessage(e.searchData),e.close(),e.initData()})})},del:function(e){var t=this;this.loading=!0,Object(r.E)({categoryCode:e}).then(function(e){t.initData()}),setTimeout(function(){t.loading=!1},500)},update:function(){var e=this;Object(r.F)({categoryCode:this.editorItem.categoryCode,categoryImg:this.editorItem.categoryImg,categoryName:this.editorItem.categoryName,serialNumber:parseInt(this.editorItem.serialNumber)}).then(function(t){e.editorVisabilty=!1,e.initData()})},searchList:function(){this.searchData=i()(this.tempData),this.page.pageCurrent=1,this.initData(1)},currentChange:function(e){this.page.pageCurrent=e,this.initData()},sizeChange:function(e){this.page.pageSize=e,this.page.pageCurrent=1,this.initData(1)},beforeAvatarUpload:function(e){var t="image/png"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 png 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleAvatarSuccess:function(e){0===e.code?(this.$message.success("上传成功"),this.editorVisabilty?this.editorItem.categoryImg=JSON.parse(e.data).fileUrl:this.newCategory.categoryImg=JSON.parse(e.data).fileUrl):this.$message.error("上传失败")},editorShow:function(e){this.$common.clearMessage(this.editorItem),this.editorItem=this.$common.deepCopy(e),this.editorVisabilty=!0},close:function(){this.editorVisabilty=!1,this.addVisabilty=!1},addShow:function(){this.$common.clearMessage(this.newCategory),this.addVisabilty=!0}},beforeMount:function(){this.initData()}}),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content storeCategory"},[a("div",{staticClass:"operation"},[a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{span:6}},[a("el-input",{model:{value:e.tempData.categoryName,callback:function(t){e.$set(e.tempData,"categoryName",t)},expression:"tempData.categoryName"}},[a("template",{slot:"prepend"},[e._v("店铺分类")])],2)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addShow()}}},[e._v("新增类别")])],1)],1)],1),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"ID",prop:"categoryCode",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"排序",prop:"serialNumber",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"上级分类",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("一级分类")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"类别名称",prop:"categoryName",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){e.editorShow(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){e.del(t.row.categoryCode)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"店铺类别添加",visible:e.addVisabilty,width:"450px","modal-append-to-body":!1},on:{"update:visible":function(t){e.addVisabilty=t}}},[a("el-form",{ref:"add",attrs:{model:e.newCategory,rules:e.rule}},[a("el-form-item",{attrs:{label:"类别名称",prop:"categoryName"}},[a("el-input",{model:{value:e.newCategory.categoryName,callback:function(t){e.$set(e.newCategory,"categoryName",t)},expression:"newCategory.categoryName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别图片",prop:"categoryImg"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://o2o.711fang.com/web/api/common/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.newCategory.categoryImg?a("img",{staticClass:"avatar",attrs:{src:e.newCategory.categoryImg}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"店铺类别修改",visible:e.editorVisabilty,width:"450px","modal-append-to-body":!1},on:{"update:visible":function(t){e.editorVisabilty=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"类别ID"}},[a("el-input",{attrs:{disabled:""},model:{value:e.editorItem.categoryCode,callback:function(t){e.$set(e.editorItem,"categoryCode",t)},expression:"editorItem.categoryCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别名称"}},[a("el-input",{model:{value:e.editorItem.categoryName,callback:function(t){e.$set(e.editorItem,"categoryName",t)},expression:"editorItem.categoryName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{model:{value:e.editorItem.serialNumber,callback:function(t){e.$set(e.editorItem,"serialNumber",t)},expression:"editorItem.serialNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类别图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://o2o.711fang.com/web/api/common/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.editorItem.categoryImg?a("img",{staticClass:"avatar",attrs:{src:e.editorItem.categoryImg}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确 定")])],1)],1),e._v(" "),a("pagination",{attrs:{"current-page":e.page.pageCurrent,"page-size":e.page.pageSize,total:e.page.pageNum},on:{sizeChange:e.sizeChange,currentChange:e.currentChange}})],1)},staticRenderFns:[]};var c=a("VU/8")(s,l,!1,function(e){a("wh9+"),a("2oH1")},null,null);t.default=c.exports},"sF+V":function(e,t,a){var o=a("kM2E");o(o.S,"Object",{create:a("Yobk")})},"wh9+":function(e,t){}});
//# sourceMappingURL=2.90baac11b01314a99ed3.js.map