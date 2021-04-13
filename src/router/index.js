/**
 * router.push({name:'tab1'})
 * router.replace({name:'tab1'})
 * router.replaceAll({name:'tab1'})
 * router.pushTab({name:'tab1'})
 * router.back(2)
 * */
import store from '@/store'
import {RouterMount,createRouter} from 'uni-simple-router'

// 全局配置
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes:ROUTES
});

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
	const token = store.getters.token
	if (token) {
		if (to.name === 'login') {
			next({
				name: 'home',
				NAVTYPE: 'pushTab'
			})
		} else {
			next()
		}
	} else {
		if (to.name !== 'login') {
			next({
				name: 'login',
				NAVTYPE: 'replaceAll'
			})
		} else {
			next()
		}
	}
});

// 全局路由后置守卫
router.afterEach((to, from) => {

})

export {
	router,
	RouterMount
}
