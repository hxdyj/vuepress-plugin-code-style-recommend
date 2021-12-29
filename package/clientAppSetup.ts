import { defineClientAppSetup } from '@vuepress/client'
const setupAppHook = defineClientAppSetup(() => {
	import('../style/index.css')
})

export default setupAppHook
