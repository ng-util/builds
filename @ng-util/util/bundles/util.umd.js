/**
 * @license ng-util(cipchk@qq.com) v12.1.0
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ng-util/util/convert')) :
	typeof define === 'function' && define.amd ? define('@ng-util/util', ['exports', '@ng-util/util/convert'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util'].util = {}), global['ng-util'].util.convert));
}(this, (function (exports, convert) { 'use strict';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(convert).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () {
				return convert[k];
			}
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=util.umd.js.map
