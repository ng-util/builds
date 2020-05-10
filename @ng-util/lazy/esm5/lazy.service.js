/**
 * @fileoverview added by tsickle
 * Generated from: lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
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
var NuLazyService = /** @class */ (function () {
    function NuLazyService(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    Object.defineProperty(NuLazyService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._notify.asObservable().pipe(share(), filter((/**
             * @param {?} ls
             * @return {?}
             */
            function (ls) { return ls.length !== 0; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NuLazyService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.list = {};
        this.cached = {};
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    NuLazyService.prototype.load = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        var _this = this;
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        var promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    NuLazyService.prototype.loadScript = /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    function (path, options) {
        var _this = this;
        var innerContent = __assign({}, options).innerContent;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(__assign(__assign({}, _this.cached[path]), { status: 'loading' }));
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.cached[path] = item;
                resolve(item);
                _this._notify.next([item]);
            });
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('script')));
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
                function () {
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
                node.onload = (/**
                 * @return {?}
                 */
                function () {
                    return onSuccess({
                        path: path,
                        status: 'ok',
                    });
                });
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return onSuccess({
                    path: path,
                    status: 'error',
                    error: error,
                });
            });
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    };
    /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    NuLazyService.prototype.loadStyle = /**
     * @param {?} path
     * @param {?=} options
     * @return {?}
     */
    function (path, options) {
        var _this = this;
        var _a = __assign({ rel: 'stylesheet' }, options), rel = _a.rel, innerContent = _a.innerContent;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('link')));
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
    NuLazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NuLazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NuLazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NuLazyService_Factory() { return new NuLazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NuLazyService, providedIn: "root" });
    return NuLazyService;
}());
export { NuLazyService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLXV0aWwvbGF6eS8iLCJzb3VyY2VzIjpbImxhenkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFL0Msa0NBSUM7OztJQUhDLDRCQUFhOztJQUNiLDhCQUFtQzs7SUFDbkMsNkJBQVc7O0FBR2I7SUFNRSx1QkFBc0MsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFKdEMsU0FBSSxHQUErQixFQUFFLENBQUM7UUFDdEMsV0FBTSxHQUFvQyxFQUFFLENBQUM7UUFDN0MsWUFBTyxHQUFvQyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVsRCxzQkFBSSxpQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTTs7OztZQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQWYsQ0FBZSxFQUFDLENBQzlCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQUVELDZCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCw0QkFBSTs7OztJQUFKLFVBQUssS0FBd0I7UUFBN0IsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxL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Q0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBTW5CLE1BQU0sU0FBQyxRQUFROzs7d0JBakI5QjtDQStIQyxBQXBIRCxJQW9IQztTQW5IWSxhQUFhOzs7Ozs7SUFDeEIsNkJBQThDOzs7OztJQUM5QywrQkFBcUQ7Ozs7O0lBQ3JELGdDQUEyRjs7Ozs7SUFFL0UsNEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xuICBlcnJvcj86IHt9O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE51TGF6eVNlcnZpY2Uge1xuICBwcml2YXRlIGxpc3Q6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgY2FjaGVkOiB7IFtrZXk6IHN0cmluZ106IE51TGF6eVJlc3VsdCB9ID0ge307XG4gIHByaXZhdGUgX25vdGlmeTogQmVoYXZpb3JTdWJqZWN0PE51TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnVMYXp5UmVzdWx0W10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7fVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxOdUxhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHNoYXJlKCksXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcbiAgICApO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxOdUxhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHtcbiAgICAgIHBhdGhzID0gW3BhdGhzXTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxOdUxhenlSZXN1bHQ+PiA9IFtdO1xuICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTY3JpcHQocGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgaW5uZXJDb250ZW50Pzogc3RyaW5nIH0pOiBQcm9taXNlPE51TGF6eVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgaW5uZXJDb250ZW50IH0gPSB7IC4uLm9wdGlvbnMgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUoeyAuLi50aGlzLmNhY2hlZFtwYXRoXSwgc3RhdHVzOiAnbG9hZGluZycgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBOdUxhenlSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICB0aGlzLl9ub3RpZnkubmV4dChbaXRlbV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIGFueTtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PlxuICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiB7fSkgPT5cbiAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgcmVsPzogc3RyaW5nOyBpbm5lckNvbnRlbnQ/OiBzdHJpbmcgfSk6IFByb21pc2U8TnVMYXp5UmVzdWx0PiB7XG4gICAgY29uc3QgeyByZWwsIGlubmVyQ29udGVudCB9ID0geyByZWw6ICdzdHlsZXNoZWV0JywgLi4ub3B0aW9ucyB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBOdUxhenlSZXN1bHQgPSB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=