import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'
import strip from '@rollup/plugin-strip'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'
export default [
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
		external: [/\.scss$/u],
		input: 'package/clientAppSetup.ts',
		output: {
			dir: 'lib',
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
		external: [/\.scss$/u],
		input: 'package/index.ts',
		output: {
			file: pkg.typings,
			format: 'esm',
		},
		plugins: [dts()],
	},
]
