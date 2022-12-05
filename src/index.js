"use strict";

/**
 * Webpack 5 plugin to remove "use strict" from the generated code
 */

const USE_STRICT_REGEX = /(\'|\")use\s+strict(\'|\")\;?/gm;

class Webpack5RemoveUseStrictPlugin {
    constructor() {
        this.pluginName = "Webpack5RemoveUseStrictPlugin";
    }

    apply(compiler) {
        compiler.hooks.make.tap(this.pluginName, (compilation) => {
            const hooks =
                compiler.webpack.javascript.JavascriptModulesPlugin.getCompilationHooks(
                    compilation
                );

            hooks.renderMain.tap(this.pluginName, (source, renderContext) => {
                source._children.forEach((child, idx) => {
                    if (typeof child === "string" && child.match(USE_STRICT_REGEX)) {
                        source._children[idx] = child.replace(USE_STRICT_REGEX, "");
                    }
                });

                return source;
            });
        });
    }
}

export { Webpack5RemoveUseStrictPlugin };
