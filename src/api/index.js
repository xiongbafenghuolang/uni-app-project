const files = require.context('./modules', false, /\.js$/)

let modules = {}

// 引入modules下所有js文件
files.keys().forEach(key => {
	// console.log(files(key))
  Object.assign(modules, files(key))
})

export default modules;
