import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

const files = require.context('./modules', false, /\.js$/)
let modules = {}

files.keys().forEach(key => {
	const fileName = key.replace(/(\.\/|\.js)/g, '')
	modules[fileName] = files(key).default
})

Vue.use(Vuex)

const store = new Vuex.Store({
	getters,
	modules
})

export default store
