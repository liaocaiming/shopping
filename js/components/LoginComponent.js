define("js/components/LoginComponent",function(e,l,n){"use strict";var i=e("js/unit/Unit"),r=Vue.extend({template:i.tpl("tpl-login"),data:function(){return{num:60,timer:""}},methods:{goBack:function(){history.go(-1)},showFast:function(){console.log(this);var e=this.$el.children[1].children[0].children[0],l=this.$el.children[1].children[0].children[1],n=this.$el.children[1].children[1][0],i=this.$el.children[1].children[1][1],r=this.$el.children[1].children[1][2];e.className="cur",l.className="",r.className="",r.value="获取验证码",n.placeholder="请输入手机号码",i.placeholder="请输入验证码"},showUser:function(){clearInterval(this.timer);var e=this.$el.children[1].children[0].children[0],l=this.$el.children[1].children[0].children[1],n=this.$el.children[1].children[1][0],i=this.$el.children[1].children[1][1],r=this.$el.children[1].children[1][2];n.placeholder="用户名 / 邮箱 / 手机号",i.placeholder="登录密码",e.className="",e.value="",l.className="cur",r.className="cur",r.value="",this.num=60},getYzm:function(e){var l=this,n=e.target;clearInterval(this.timer),this.timer=setInterval(function(){l.num--,n.value="正在发送 "+l.num+" s",0===l.num&&(n.value="重新发送",l.num=60,clearInterval(l.timer))},1e3)}}});n.exports=r});