<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import * as dd from 'dingtalk-jsapi';
	import resource from './api/resource.js'
	export default {
		name: 'app',
		data(){
			return{

			}
		},
		created(){
			//获取code
			// this.getDingCode();

			this.getUserInfo();
		},
		methods:{
      		//获取用户信息
      		getUserInfo(){
      			resource.getUserInfo().then(res => {

      			})
      		},
			// //获取钉钉鉴权信息
			// getConfig(){
			// 	resource.getConfig().then(res => {
			// 		if(res.code == 1){
			// 			let data = res.data;
			// 			//钉钉鉴权
			// 			this.dingAuth(data);
			// 		}
			// 	})
			// },
			// //钉钉鉴权
			// dingAuth(data){
			// 	data.url = window.location.href;
			// 	data.corp_id = 'ding7828fff434921f5b';
			// 	resource.dingAuth(data).then(res => {
			// 		//钉钉鉴权
			// 		this.ddConfig(res.data);
			// 	})
			// },
			// //钉钉鉴权
			// ddConfig(data){
			// 	dd.config({
			// 		agentId: data.agentId, // 必填，微应用ID
			// 		corpId: data.corpId,//必填，企业ID
			// 		timeStamp: data.timeStamp, // 必填，生成签名的时间戳
			// 		nonceStr: data.nonceStr, // 必填，自定义固定字符串。
			// 		signature: data.signature, // 必填，签名
			// 		jsApiList : [
			// 		'biz.chat.openSingleChat'
			// 		] // 必填，需要使用的jsapi列表，注意：不要带dd。
			// 	});
			// 	dd.error(function (err) {
			// 		alert('dd error: ' + JSON.stringify(err));
			// 	})
			// 	//钉钉获取code
			// 	this.getDingCode();
			// },
			//钉钉获取code
			getDingCode(){
				dd.ready(() => {
					dd.runtime.permission.requestAuthCode({
						corpId: "ding7828fff434921f5b", 
						onSuccess:  (info) => {
							let code = info.code;
							let flow_id = window.location.hash.split('=')[1]; 
							this.$router.replace(`/index?code=${code}&flow_id=${flow_id}`);
                  	}});
				});
			},
			//登录
			// login(code){
			// 	resource.login({code:code}).then(res => {
			// 		if(res.code == 1){
			// 			this.$router.replace('/index');
			// 		}
			// 	})
			// }
		}
	}
</script>

<style>

</style>
