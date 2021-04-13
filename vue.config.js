
const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages({
    includes:['path','name','meta']
})

module.exports = {
	transpileDependencies: ['luch-request','uni-simple-router'],
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	}
}
