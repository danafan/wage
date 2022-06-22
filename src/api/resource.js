import http from './request.js'
let path = {	
	getConfig:'clothes/ding/getConfig',						//获取钉钉鉴权信息
	dingAuth:'clothes/ding/auth',							//钉钉鉴权
	getUserInfo:'payslip/query/userinfolist',				//获取用户信息
}								
export default{
	//获取钉钉鉴权信息
	getConfig(params){
		return http.get(path.getConfig, params)
	},
	//钉钉鉴权
	dingAuth(params){
		return http.get(path.dingAuth, params)
	},
	//获取用户信息
	getUserInfo(params){
		return http.get(path.getUserInfo, params)
	},
}









