import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';

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
     * @return {?}
     */
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    load(paths) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        const promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        path => {
            if (path.endsWith('.js')) {
                promises.push(this.loadScript(path));
            }
            else {
                promises.push(this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this._notify.next(res);
            return Promise.resolve(res);
        }));
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-util-lazy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NuLazyService };
//# sourceMappingURL=ng-util-lazy.js.map
