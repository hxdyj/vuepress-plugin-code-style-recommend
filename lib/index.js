"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var containerPlugin=require("@vuepress/plugin-container"),path=require("path");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var containerPlugin__default=_interopDefaultLegacy(containerPlugin),path__default=_interopDefaultLegacy(path);const codeStyleCssClass={good:"code-style-good",bad:"code-style-bad"},codeStyleText={good:"正面例子",bad:"反面例子"};function getCodeStyleTitle(e){return{good:`
		<h4>
			<i class="iconfont-code-style icon-code-style-success"></i>
			<span>${e.goodText||codeStyleText.good}</span>
		</h4>`,bad:`
		<h4>
			<i class="iconfont-code-style icon-code-style-error"></i>
			<span>${e.badText||codeStyleText.bad}</span>
		</h4>`}}const containerPluginFunction=containerPlugin__default.default,codeStylePlugin=t=>{let e=containerPluginFunction({type:"codeStyle",before:e=>`
        <div class="custom-container code-style ${codeStyleCssClass[e]||""}">
        ${getCodeStyleTitle(t)[e]}
        `,after:e=>`</div>
`,validate:e=>/^codeStyle.+(good|bad)$/.test(e.trim())});return e.name="vuepress-plugin-code-style-recommend",e.clientAppSetupFiles=path__default.default.resolve(__dirname,"./clientAppSetup.js"),e.alias={"@plugin-code-style_style":path__default.default.resolve(__dirname,"../style/")},e};exports.codeStylePlugin=codeStylePlugin,exports.default=codeStylePlugin;
