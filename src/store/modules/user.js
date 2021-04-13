// import Router from '@/router'
import http from '@/api'

const SET_TOKEN = 'SET_TOKEN'
const state = {
	token: uni.getStorageSync('token'),
}

const mutations = {
	[SET_TOKEN]: (state, data) => {
		uni.setStorageSync('token', data || '')
		state.token = data
	}
}

const actions = {
	// 登录
	login({
		commit
	}, info) {
		return new Promise((resolve, reject) => {
			http.login(info)
				.then(res => {
					commit('SET_TOKEN', res.token)
					resolve(res)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	// 退出登录
	logout({
		commit,
		dispatch
	}) {
		return new Promise((resolve, reject) => {
			http.logout()
				.then(res => {
					dispatch('clearInfo')
					resolve(res)
					// Router.replaceAll({
					// 	name: 'login'
					// })
				})
				.catch(err => {
					reject(err)
				})
		})
	},

	// 清除用户信息
	clearInfo({
		commit
	}) {
		uni.clearStorageSync()
		commit('SET_TOKEN', '')
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
