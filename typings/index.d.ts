import { PluginFunction } from '@vuepress/core';

declare type CodeStylePluginOptions = {
    goodText?: string;
    badText?: string;
};
declare const codeStylePlugin: PluginFunction<CodeStylePluginOptions>;

export default codeStylePlugin;
export { codeStylePlugin };
