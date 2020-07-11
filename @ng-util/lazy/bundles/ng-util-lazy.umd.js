/**
 * @license ng-util(cipchk@qq.com) v10.1.1
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ng-util/lazy', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util'].lazy = {}), global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i1, i0, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lazy.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NuLazyResult() { }
    if (false) {
        /** @type {?} */
        NuLazyResult.prototype.path;
        /** @type {?} */
        NuLazyResult.prototype.status;
        /** @type {?|undefined} */
        NuLazyResult.prototype.error;
    }
    var NuLazyService = /** @class */ (function () {
        /**
         * @param {?} doc
         */
        function NuLazyService(doc) {
            this.doc = doc;
            this.list = {};
            this.cached = {};
            this._notify = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(NuLazyService.prototype, "change", {
            /**
             * @return {?}
             */
            get: function () {
                return this._notify.asObservable().pipe(operators.share(), operators.filter(( /**
                 * @param {?} ls
                 * @return {?}
                 */function (/**
                 * @param {?} ls
                 * @return {?}
                 */ ls) { return ls.length !== 0; })));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        NuLazyService.prototype.clear = function () {
            this.list = {};
            this.cached = {};
        };
        /**
         * @param {?} paths
         * @return {?}
         */
        NuLazyService.prototype.load = function (paths) {
            var _this = this;
            if (!Array.isArray(paths)) {
                paths = [paths];
            }
            /** @type {?} */
            var promises = [];
            paths.forEach(( /**
             * @param {?} path
             * @return {?}
             */function (/**
             * @param {?} path
             * @return {?}
             */ path) {
                if (path.endsWith('.js')) {
                    promises.push(_this.loadScript(path));
                }
                else {
                    promises.push(_this.loadStyle(path));
                }
            }));
            return Promise.all(promises).then(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                _this._notify.next(res);
                return Promise.resolve(res);
            }));
        };
        /**
         * @param {?} path
         * @param {?=} options
         * @return {?}
         */
        NuLazyService.prototype.loadScript = function (path, options) {
            var _this = this;
            var innerContent = Object.assign({}, options).innerContent;
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (/**
             * @param {?} resolve
             * @return {?}
             */ resolve) {
                if (_this.list[path] === true) {
                    resolve(Object.assign(Object.assign({}, _this.cached[path]), { status: 'loading' }));
                    return;
                }
                _this.list[path] = true;
                /** @type {?} */
                var onSuccess = ( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    _this.cached[path] = item;
                    resolve(item);
                    _this._notify.next([item]);
                });
                /** @type {?} */
                var node = ( /** @type {?} */(_this.doc.createElement('script')));
                node.type = 'text/javascript';
                node.src = path;
                node.charset = 'utf-8';
                if (innerContent) {
                    node.innerHTML = innerContent;
                }
                if (node.readyState) {
                    // IE
                    node.onreadystatechange = ( /**
                     * @return {?}
                     */function () {
                        if (node.readyState === 'loaded' || node.readyState === 'complete') {
                            node.onreadystatechange = null;
                            onSuccess({
                                path: path,
                                status: 'ok',
                            });
                        }
                    });
                }
                else {
                    node.onload = ( /**
                     * @return {?}
                     */function () { return onSuccess({
                        path: path,
                        status: 'ok',
                    }); });
                }
                node.onerror = ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) { return onSuccess({
                    path: path,
                    status: 'error',
                    error: error,
                }); });
                _this.doc.getElementsByTagName('head')[0].appendChild(node);
            }));
        };
        /**
         * @param {?} path
         * @param {?=} options
         * @return {?}
         */
        NuLazyService.prototype.loadStyle = function (path, options) {
            var _this = this;
            var _a = Object.assign({ rel: 'stylesheet' }, options), rel = _a.rel, innerContent = _a.innerContent;
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (/**
             * @param {?} resolve
             * @return {?}
             */ resolve) {
                if (_this.list[path] === true) {
                    resolve(_this.cached[path]);
                    return;
                }
                _this.list[path] = true;
                /** @type {?} */
                var node = ( /** @type {?} */(_this.doc.createElement('link')));
                node.rel = rel;
                node.type = 'text/css';
                node.href = path;
                if (innerContent) {
                    node.innerHTML = innerContent;
                }
                _this.doc.getElementsByTagName('head')[0].appendChild(node);
                /** @type {?} */
                var item = {
                    path: path,
                    status: 'ok',
                };
                _this.cached[path] = item;
                resolve(item);
            }));
        };
        return NuLazyService;
    }());
    NuLazyService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NuLazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NuLazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NuLazyService_Factory() { return new NuLazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NuLazyService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NuLazyService.prototype.list;
        /**
         * @type {?}
         * @private
         */
        NuLazyService.prototype.cached;
        /**
         * @type {?}
         * @private
         */
        NuLazyService.prototype._notify;
        /**
         * @type {?}
         * @private
         */
        NuLazyService.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-util-lazy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NuLazyService = NuLazyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-util-lazy.umd.js.map
