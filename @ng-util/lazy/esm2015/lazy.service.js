/**
 * @fileoverview added by tsickle
 * Generated from: lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @record
 */
export function NuLazyResult() { }
if (false) {
    /** @type {?} */
    NuLazyResult.prototype.path;
    /** @type {?} */
    NuLazyResult.prototype.status;
    /** @type {?|undefined} */
    NuLazyResult.prototype.error;
}
export class NuLazyService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLXV0aWwvbGF6eS8iLCJzb3VyY2VzIjpbImxhenkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUvQyxrQ0FJQzs7O0lBSEMsNEJBQWE7O0lBQ2IsOEJBQW1DOztJQUNuQyw2QkFBVzs7QUFJYixNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQW9DLEVBQUUsQ0FBQztRQUM3QyxZQUFPLEdBQW9DLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztJQUUxQyxDQUFDOzs7O0lBRWxELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLEtBQUssRUFBRSxFQUNQLE1BQU07Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDLENBQzlCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBd0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFD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QUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQW5IRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQU1uQixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFKNUIsNkJBQThDOzs7OztJQUM5QywrQkFBcUQ7Ozs7O0lBQ3JELGdDQUEyRjs7Ozs7SUFFL0UsNEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xuICBlcnJvcj86IHt9O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE51TGF6eVNlcnZpY2Uge1xuICBwcml2YXRlIGxpc3Q6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgY2FjaGVkOiB7IFtrZXk6IHN0cmluZ106IE51TGF6eVJlc3VsdCB9ID0ge307XG4gIHByaXZhdGUgX25vdGlmeTogQmVoYXZpb3JTdWJqZWN0PE51TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnVMYXp5UmVzdWx0W10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7fVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxOdUxhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHNoYXJlKCksXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcbiAgICApO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxOdUxhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHtcbiAgICAgIHBhdGhzID0gW3BhdGhzXTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxOdUxhenlSZXN1bHQ+PiA9IFtdO1xuICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTY3JpcHQocGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgaW5uZXJDb250ZW50Pzogc3RyaW5nIH0pOiBQcm9taXNlPE51TGF6eVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgaW5uZXJDb250ZW50IH0gPSB7IC4uLm9wdGlvbnMgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUoeyAuLi50aGlzLmNhY2hlZFtwYXRoXSwgc3RhdHVzOiAnbG9hZGluZycgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBOdUxhenlSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICB0aGlzLl9ub3RpZnkubmV4dChbaXRlbV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIGFueTtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PlxuICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiB7fSkgPT5cbiAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgcmVsPzogc3RyaW5nOyBpbm5lckNvbnRlbnQ/OiBzdHJpbmcgfSk6IFByb21pc2U8TnVMYXp5UmVzdWx0PiB7XG4gICAgY29uc3QgeyByZWwsIGlubmVyQ29udGVudCB9ID0geyByZWw6ICdzdHlsZXNoZWV0JywgLi4ub3B0aW9ucyB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBOdUxhenlSZXN1bHQgPSB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=