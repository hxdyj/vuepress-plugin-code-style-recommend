import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import strip from '@rollup/plugin-strip'
import dts from 'rollup-plugin-dts'
import scss from 'rollup-plugin-scss'

export default [
	{
		// external: ['pdf-to-printer'],
		input: 'package/index.ts',
		output: {
			file: 'es/index.js',
			format: 'esm',
		},
		plugins: [
			scss({
				output: 'style/index.css',
			}),
			uglify(),
			typescript(),
			strip({
				include: '**/*.(ts|js)',
			}),
		],
	},
	{
		// external: ['pdf-to-printer'],
		input: 'package/index.ts',
		output: {
			file: 'lib/index.js',
			format: 'cjs',
		},
		plugins: [
			scss({
				output: 'style/index.css',
			}),
			uglify(),
			typescript(),
			strip({
				include: '**/*.(ts|js)',
			}),
		],
	},
	{
		input: 'package/index.ts',
		output: {
			file: 'typings/index.d.ts',
			format: 'esm',
		},
		plugins: [
			scss({
				output: 'style/index.css',
			}),
			dts(),
		],
	},
]
