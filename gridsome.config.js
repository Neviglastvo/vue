// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



const path = require('path')

function addStyleResource (rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
		// path.resolve(__dirname, './src/assets/sass/_globals.sass'),
		path.resolve(__dirname, './src/assets/sass/*.sass')
		],
	})
}

module.exports = {
	siteName: 'Gridsome',
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
			// ...global plugins
			]
		}
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'pc/**/*.md',
				typeName: 'Pc',
				remark: {
					plugins: [
						// ...local plugins
					]
				}
			}
		},
		{
			use: `gridsome-plugin-netlify-cms`,
			options: {
				publicPath: `/admin`
			}
		},
	],
	chainWebpack (config) {
		// Load variables for all vue-files
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

		types.forEach(type => {
			addStyleResource(config.module.rule('sass').oneOf(type))
		})

		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
	}
}

