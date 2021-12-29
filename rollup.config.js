import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import strip from '@rollup/plugin-strip'
import dts from 'rollup-plugin-dts'
import scss from 'rollup-plugin-scss'

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
		external: [/\.css$/u],
		input: 'package/index.ts',
		output: {
			file: pkg.main,
			format: 'esm',
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
		external: [/\.css$/u],
		input: 'package/index.ts',
		output: {
			file: pkg.typings,
			format: 'esm',
		},
		plugins: [dts()],
	},
]
