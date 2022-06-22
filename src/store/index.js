import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {  
    userInfo:{
      title:"",      //标题
      name:"",     //姓名
      remark:"",     //温馨提示
      fsalary:0,     //实发工资
      sing_address:"", //签名地址
      user_id:"",      //薪资管理员ID
      user_list:[],    //列表
    },
    href:""
  },
  mutations: {
    //用户信息
    setUserInfo (state, info) {  
      state.userInfo = info;
    },
    //用户信息
    setHref (state, href) {  
      state.href = href;
    },
  },
  actions: {

  }

})
export default store;

