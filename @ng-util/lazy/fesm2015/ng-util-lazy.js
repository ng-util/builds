import { __awaiter } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { share, filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class NuLazyService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    /**
     * @deprecated Use `monitor()` method instead, removed it in `11.0.0`
     * @return {?}
     */
    get change() {
        return this._notify.asObservable().pipe(share(), filter((/**
         * @param {?} ls
         * @return {?}
         */
        ls => ls.length !== 0)));
    }
    /**
     * @private
     * @param {?=} paths
     * @return {?}
     */
    fixPaths(paths) {
        if (typeof paths === 'string') {
            paths = [paths];
        }
        return (/** @type {?} */ (paths)) || [];
    }
    /**
     * Monitor for the finished of `paths`
     *
     * - It's recommended to pass the value in accordance with the `load()` method
     * @param {?=} paths
     * @return {?}
     */
    monitor(paths) {
        /** @type {?} */
        const libs = this.fixPaths(paths);
        /** @type {?} */
        const pipes = [share(), filter((/**
             * @param {?} ls
             * @return {?}
             */
            (ls) => ls.length !== 0))];
        if (libs.length > 0) {
            pipes.push(filter((/**
             * @param {?} ls
             * @return {?}
             */
            (ls) => ls.length === libs.length && ls.some((/**
             * @param {?} v
             * @return {?}
             */
            v => v.status === 'ok' && libs.includes(v.path))))));
        }
        return this._notify.asObservable().pipe(pipe.apply(this, pipes));
    }
    /**
     * @return {?}
     */
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * Load the specified resources, includes `.js`, `.css`
     *
     * - The returned Promise does not mean that it was successfully loaded
     * - You can monitor load is success via `monitor()`
     * @param {?} paths
     * @return {?}
     */
    load(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            paths = this.fixPaths(paths);
            return Promise.all(paths.map((/**
             * @param {?} path
             * @return {?}
             */
            path => (path.endsWith('.js') ? this.loadScript(path) : this.loadStyle(path))))).then((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this._notify.next(res);
                return Promise.resolve(res);
            }));
        });
    }
    /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    loadScript(path, options) {
        const { innerContent } = Object.assign({}, options);
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(Object.assign(Object.assign({}, this.cached[path]), { status: 'loading' }));
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.cached[path] = item;
                resolve(item);
                this._notify.next([item]);
            });
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('script')));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (node.readyState) {
                // IE
                node.onreadystatechange = (/**
                 * @return {?}
                 */
                () => {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path,
                            status: 'ok',
                        });
                    }
                });
            }
            else {
                node.onload = (/**
                 * @return {?}
                 */
                () => onSuccess({
                    path,
                    status: 'ok',
                }));
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => onSuccess({
                path,
                status: 'error',
                error,
            }));
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    }
    /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    loadStyle(path, options) {
        const { rel, innerContent } = Object.assign({ rel: 'stylesheet' }, options);
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            const item = {
                path,
                status: 'ok',
            };
            this.cached[path] = item;
            resolve(item);
        }));
    }
}
NuLazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NuLazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NuLazyService.ɵprov = ɵɵdefineInjectable({ factory: function NuLazyService_Factory() { return new NuLazyService(ɵɵinject(DOCUMENT)); }, token: NuLazyService, providedIn: "root" });
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-util-lazy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NuLazyService };
//# sourceMappingURL=ng-util-lazy.js.map
