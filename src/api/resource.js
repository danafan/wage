import http from './request.js'
let path = {	
	getUserInfo:'query/userinfolist',			//获取用户信息
}								
export default{
	//获取用户信息
	getUserInfo(params){
		return http.get(path.getUserInfo, params)
	},
}









