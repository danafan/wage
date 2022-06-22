import Vue from 'vue'
import Router from 'vue-router'
const index = resolve=>System.import('@/pages/IndexPages/index')
const qr_code = resolve=>System.import('@/pages/qr_code')
const damage = resolve=>System.import('@/pages/damage')

Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/index',
		name:"工资条",
		component: index
	},
	{
		path: '/qr_code',
		name:"扫码登录",
		component: qr_code
	},
	{
		path: '/damage',
		name:"已销毁",
		component: damage
	}
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
