define("js/app",function(e){"use strict";function n(){var e=location.hash;e=e.slice(2),e.indexOf("/")>-1&&(e=e.slice(0,e.indexOf("/")));var n={home:!0,list:!0,product:!0,search:!0,login:!0,register:!0};console.log(e),u.view=n[e]?e:"home"}e("js/SetHTMLFontSize/SetHtmlFontSize");var o=e("js/unit/ImgLoad");Vue.filter("price",function(e){return e+"元"}),Vue.filter("orignPrice",function(e){return"门市价:"+e+"元"}),Vue.filter("salses",function(e){return"已售"+e});var t=e("js/components/HomeComponent"),i=e("js/components/ListComponent"),s=e("js/components/ProductComponent"),c=e("js/components/SearchComponent"),r=e("js/components/LoginComponent"),m=e("js/components/RegisterComponent");Vue.component("home",t),Vue.component("list",i),Vue.component("product",s),Vue.component("search",c),Vue.component("login",r),Vue.component("register",m);var u,a=document.getElementById("loading-num"),d=document.getElementById("loader");new o(function(e,n){var o=(n/e*100).toFixed(2);a.innerHTML=o},function(){a.innerHTML=100,d.style.display="none",u=new Vue({el:"#app",data:{view:"home",text:"",dealText:"",isShow:!0},methods:{goSearch:function(){this.dealText=this.text},goBack:function(){history.go(-1)}},events:{"show-search":function(e){this.isShow=e}}})}),window.addEventListener("load",n),window.addEventListener("hashchange",n)});