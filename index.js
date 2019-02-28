// Redefine Defaults:
// @see https://webpack.js.org/configuration/resolve/#resolvemainfields
function toFields(val) {
	let arr = ['module', 'main'];
	if (!val || ['web','webworker'].includes(val)) arr.unshift('browser');
	return arr;
}

class WebpackModules {
	apply(compiler) {
		compiler.hooks.environment.tap('webpack-modules', () => {
			const { target, module, resolve } = compiler.options;
			compiler.options.module = Object.assign({ rules:[] }, module);
			compiler.options.resolve = Object.assign({ mainFields: toFields(target) }, resolve);

			const { mainFields, extensions } = compiler.options.resolve;
			mainFields.includes('module') || mainFields.unshift('module');
			compiler.options.resolve.mainFields = mainFields;

			if (extensions && !extensions.includes('.mjs')) {
				compiler.options.resolve.extensions = ['.mjs'].concat(extensions);
			}

			compiler.options.module.rules.push({
		    test: /\.m?jsx?$/,
		    type: 'javascript/auto',
		    resolve: { mainFields }
			});
    });
	}
}

module.exports = WebpackModules;
