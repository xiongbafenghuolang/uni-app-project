import http from '../request.js'

/**
 * @method
 * @param {object} data
 * 例：
 * {
 *    username {string} - 用户名
 *    password {string} - 密码
 * }
 * @desc 登录
 */
export function login(data) {
	return http.request({
		method: 'POST',
		url: '/user/login',
		data
	})
}

/**
 * @method
 * @desc 退出登录
 */
export function logout(data) {
	return http.request({
		method: 'POST',
		url: '/user/logout',
		data
	})
}
