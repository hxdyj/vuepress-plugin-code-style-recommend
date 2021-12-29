import containerPlugin from"@vuepress/plugin-container";import"../style/index.css";const codeStyleCssClass={good:"code-style-good",bad:"code-style-bad"},codeStyleText={good:"正面例子",bad:"反面例子"};function getCodeStyleTitle(e){return{good:`
		<h4>
			<i class="iconfont-code-style icon-code-style-success"></i>
			<span>${e.goodText||codeStyleText.good}</span>
		</h4>`,bad:`
		<h4>
			<i class="iconfont-code-style icon-code-style-error"></i>
			<span>${e.badText||codeStyleText.bad}</span>
		</h4>`}}const containerPluginFunction=containerPlugin,codeStylePlugin=o=>{let e=containerPluginFunction({type:"codeStyle",before:e=>`
        <div class="custom-container code-style ${codeStyleCssClass[e]||""}">
        ${getCodeStyleTitle(o)[e]}
        `,after:e=>`</div>
`,validate:e=>/^codeStyle.+(good|bad)$/.test(e.trim())});return e.name="vuepress-plugin-code-style-recommend",e};export default codeStylePlugin;export{codeStylePlugin};
