import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import strip from '@rollup/plugin-strip'
import dts from 'rollup-plugin-dts'
import scss from 'rollup-plugin-scss'

import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'
import pkg from './package.json'

export default [
	{
		input: 'package/style.ts',
		plugins: [
			scss({
				output: 'style/index.css',
			}),
		],
	},
	{
		input: 'package/index.ts',
		output: {
			dir: 'lib',
			format: 'cjs',
		},
		plugins: [
			uglify(),
			typescript(),
			strip({
				include: '**/*.(ts|js)',
			}),
		],
	},
	{
		input: 'package/clientAppSetup.ts',
		output: {
			dir: 'lib',
			format: 'cjs',
		},
		plugins: [
			postcss({
				plugins: [postcssImport()],
			}),
			uglify(),
			typescript(),
			strip({
				include: '**/*.(ts|js)',
			}),
		],
	},
	{
		external: [/\.css$/u],
		input: 'package/index.ts',
		output: {
			file: pkg.typings,
			format: 'esm',
		},
		plugins: [dts()],
	},
]
