/**
 * @license ng-util(cipchk@qq.com) v10.1.0
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ng-util/util/convert')) :
	typeof define === 'function' && define.amd ? define('@ng-util/util', ['exports', '@ng-util/util/convert'], factory) :
	(global = global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util'].util = {}), global['ng-util'].util.convert));
}(this, (function (exports, convert) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * Generated from: public-api.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * Generated from: util.ts
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'InputBoolean', {
		enumerable: true,
		get: function () {
			return convert.InputBoolean;
		}
	});
	Object.defineProperty(exports, 'InputNumber', {
		enumerable: true,
		get: function () {
			return convert.InputNumber;
		}
	});
	Object.defineProperty(exports, 'toBoolean', {
		enumerable: true,
		get: function () {
			return convert.toBoolean;
		}
	});
	Object.defineProperty(exports, 'toNumber', {
		enumerable: true,
		get: function () {
			return convert.toNumber;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=util.umd.js.map