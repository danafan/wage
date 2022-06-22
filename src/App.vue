<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import * as dd from 'dingtalk-jsapi';
	import resource from './api/resource.js'
	export default {
		created(){
			//判断是否是手机端
			let is_mobile = this.isMobile();
			if(is_mobile){	//手机端
				//获取钉钉鉴权信息
				this.getConfig();
			}else{
				this.$store.commit('setHref',window.location.href);
				this.$router.replace('/qr_code');
			}
		},
		methods:{
			//获取钉钉鉴权信息
			getConfig(){
				resource.getConfig().then(res => {
					if(res.code == 1){
						let data = res.data;
						//钉钉鉴权
						this.dingAuth(data);
					}
				})
			},
			//钉钉鉴权
			dingAuth(data){
				data.url = window.location.href;
				data.corp_id = 'ding7828fff434921f5b';
				resource.dingAuth(data).then(res => {
					//钉钉鉴权
					this.ddConfig(res.data);
				})
			},
			//钉钉鉴权
			ddConfig(data){
				dd.config({
					agentId: data.agentId, // 必填，微应用ID
					corpId: data.corpId,//必填，企业ID
					timeStamp: data.timeStamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，自定义固定字符串。
					signature: data.signature, // 必填，签名
					jsApiList : [
					'biz.chat.openSingleChat'
					] // 必填，需要使用的jsapi列表，注意：不要带dd。
				});
				dd.error(function (err) {
					alert('dd error: ' + JSON.stringify(err));
				})
				//钉钉获取code
				this.getDingCode();
			},
			//钉钉获取code
			getDingCode(){
				dd.ready(() => {
					dd.runtime.permission.requestAuthCode({
						corpId: "ding7828fff434921f5b", 
						onSuccess:  (info) => {
							let code = info.code;
							let flow_id = window.location.search.split('=')[1]; 
							//判断是否已销毁
							this.getUserInfo(code,flow_id);
						}});
				});
			},
			//获取用户信息
			getUserInfo(code,flow_id){
				let arg = {
					code:code,
					flow_id:flow_id
				}
				resource.getUserInfo(arg).then(res => {
					var data = res.data;
					if(data.destroy == '1'){
						this.$router.replace('/damage');
					}else{
						this.$store.commit('setUserInfo',data);
						this.$router.replace('/index');
					}
				})
			},
			//判断是否是手机端
			isMobile() {
				let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				return flag;
			}
		}
	}
</script>

<style>

</style>
