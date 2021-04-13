import Request from 'luch-request'

const http = new Request()

http.setConfig((config) => {
	/* 设置全局配置 */
	config.baseURL = process.env.VUE_APP_BASE_IP //设置请求的base url
	config.custom = {
		loading: true
	}
	config.timeout = 300000 //超时时长5分钟,
	config.header = {
		'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
	}
	return config
})

//请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	const token = uni.getStorageSync('token')
	if (token) {
		config.headers.common['Authorization'] = 'Wyatt ' + token
	}

	if (config.method === 'POST') {
		config.data = JSON.stringify(config.data)
	}
	return config
}, error => {
	return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
	console.log(response)
	const {
		data
	} = response
	switch (data.code) {
		case 200:
			return Promise.resolve(data.data)
			break
		case 400:
			break
	}
}, (error) => {
	//未登录时清空缓存跳转
	if (error.statusCode == 401) {
		uni.clearStorageSync()
		uni.switchTab({
			url: '/pages/index/index.vue'
		})
	}
	return Promise.resolve(error)
})
export default http
