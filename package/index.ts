import './index.scss'

import type { PluginFunction, PluginObject, PluginOptions } from '@vuepress/core'
import containerPlugin from '@vuepress/plugin-container'
import { ContainerPluginOptions } from '@vuepress/plugin-container'
import path from 'path'

type CustomMarkdownName = 'codeStyle'
type CustomMarkdownInfo = 'good' | 'bad'
type CustomContainerPluginOptions = Omit<ContainerPluginOptions, 'before' | 'after'> & {
	type: CustomMarkdownName
	before?: (info: CustomMarkdownInfo) => string
	after?: (info: CustomMarkdownInfo) => string
}

const codeStyleCssClass: Record<CustomMarkdownInfo, string> = {
	good: 'code-style-good',
	bad: 'code-style-bad',
}

const codeStyleText: Record<CustomMarkdownInfo, string> = {
	good: '正面例子',
	bad: '反面例子',
}

function getCodeStyleTitle(config: CodeStylePluginOptions) {
	const codeStyleTitle: Record<CustomMarkdownInfo, string> = {
		good: `
		<h4>
			<i class="iconfont-code-style icon-code-style-success"></i>
			<span>${config.goodText || codeStyleText['good']}</span>
		</h4>`,
		bad: `
		<h4>
			<i class="iconfont-code-style icon-code-style-error"></i>
			<span>${config.badText || codeStyleText['bad']}</span>
		</h4>`,
	}
	return codeStyleTitle
}

type PluginFunc = (config: CustomContainerPluginOptions) => PluginObject
const containerPluginFunction = containerPlugin as unknown as PluginFunc
type CodeStylePluginOptions = {
	goodText?: string
	badText?: string
}
const codeStylePlugin: PluginFunction<CodeStylePluginOptions> = options => {
	let pluginObj = containerPluginFunction({
		type: 'codeStyle',
		before: info => {
			return `
        <div class="custom-container code-style ${codeStyleCssClass[info] || ''}">
        ${getCodeStyleTitle(options)[info]}
        `
		},
		after: info => {
			return `</div>\n`
		},
		validate: (params: string) => {
			return /^codeStyle.+(good|bad)$/.test(params.trim())
		},
	})
	pluginObj.name = 'vuepress-plugin-code-style-recommend'
	pluginObj.alias = {
		'@plugin-code-style_style': path.resolve(__dirname, '../style/'),
	}
	return pluginObj
}
export { codeStylePlugin }
export default codeStylePlugin
