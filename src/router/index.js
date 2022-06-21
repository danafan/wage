import Vue from 'vue'
import Router from 'vue-router'
const index = resolve=>System.import('@/pages/IndexPages/index')

Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/index',
		name:"工资条",
		component: index
	}
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
