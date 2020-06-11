/**
 * @license ng-util(cipchk@qq.com) v9.1.1
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@ng-util/util', ['exports'], factory) :
    (global = global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util'].util = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: convert/convert.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, D
     * @param {?} name
     * @param {?} fallback
     * @param {?} defaultValue
     * @return {?}
     */
    function propDecoratorFactory(name, fallback, defaultValue) {
        /**
         * @param {?} target
         * @param {?} propName
         * @param {?=} originalDescriptor
         * @return {?}
         */
        function propDecorator(target, propName, originalDescriptor) {
            /** @type {?} */
            var privatePropName = "$$__" + propName;
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true,
            });
            return {
                get: /**
                 * @return {?}
                 */
                function () {
                    return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (originalDescriptor && originalDescriptor.set) {
                        originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                    }
                    this[privatePropName] = fallback(value, defaultValue);
                },
            };
        }
        return propDecorator;
    }
    /**
     * @param {?} value
     * @param {?=} allowUndefined
     * @return {?}
     */
    function toBoolean(value, allowUndefined) {
        if (allowUndefined === void 0) { allowUndefined = false; }
        return allowUndefined && typeof value === 'undefined' ? undefined : value != null && "" + value !== 'false';
    }
    /**
     * Input decorator that handle a prop to do get/set automatically with toBoolean
     *
     * ```ts
     * \@Input() InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
     * ```
     * @param {?=} defaultValue
     * @return {?}
     */
    function InputBoolean(defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
    }
    /**
     * @param {?} value
     * @param {?=} fallbackValue
     * @return {?}
     */
    function toNumber(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
        return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
    }
    /**
     * Input decorator that handle a prop to do get/set automatically with toNumber
     *
     * ```ts
     * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
     * ```
     * @param {?=} defaultValue
     * @return {?}
     */
    function InputNumber(defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return propDecoratorFactory('InputNumber', toNumber, defaultValue);
    }

    exports.InputBoolean = InputBoolean;
    exports.InputNumber = InputNumber;
    exports.toBoolean = toBoolean;
    exports.toNumber = toNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-util-util.umd.js.map