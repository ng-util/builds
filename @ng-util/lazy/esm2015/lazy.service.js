/**
 * @fileoverview added by tsickle
 * Generated from: lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhenkvIiwic291cmNlcyI6WyJsYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUvQyxrQ0FJQzs7O0lBSEMsNEJBQWE7O0lBQ2IsOEJBQW1DOztJQUNuQyw2QkFBVzs7QUFJYixNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQW9DLEVBQUUsQ0FBQztRQUM3QyxZQUFPLEdBQW9DLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztJQUUxQyxDQUFDOzs7Ozs7SUFFMUMsUUFBUSxDQUFDLEtBQXlCO1FBQ3hDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxtQkFBQSxLQUFLLEVBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7SUFPRCxPQUFPLENBQUMsS0FBeUI7O2NBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7Y0FFM0IsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTTs7OztZQUFDLENBQUMsRUFBa0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsRUFBa0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQztTQUNuSTtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7O0lBUUssSUFBSSxDQUFDLEtBQXdCOztZQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFZLEVBQUUsT0FBbUM7Y0FDcEQsRUFBRSxZQUFZLEVBQUUscUJBQVEsT0FBTyxDQUFFO1FBQ3ZDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDNUIsT0FBTyxpQ0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFFLE1BQU0sRUFBRSxTQUFTLElBQUcsQ0FBQztnQkFDckQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7O2tCQUNqQixTQUFTOzs7O1lBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQTs7a0JBRUssSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFPO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixLQUFLO2dCQUNMLElBQUksQ0FBQyxrQkFBa0I7OztnQkFBRyxHQUFHLEVBQUU7b0JBQzdCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7d0JBQ2xFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7d0JBQy9CLFNBQVMsQ0FBQzs0QkFDUixJQUFJOzRCQUNKLE1BQU0sRUFBRSxJQUFJO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUEsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNOzs7Z0JBQUcsR0FBRyxFQUFFLENBQ2pCLFNBQVMsQ0FBQztvQkFDUixJQUFJO29CQUNKLE1BQU0sRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQSxDQUFDO2FBQ047WUFDRCxJQUFJLENBQUMsT0FBTzs7OztZQUFHLENBQUMsS0FBUyxFQUFFLEVBQUUsQ0FDM0IsU0FBUyxDQUFDO2dCQUNSLElBQUk7Z0JBQ0osTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSzthQUNOLENBQUMsQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLE9BQWlEO2NBQ2pFLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxtQkFBSyxHQUFHLEVBQUUsWUFBWSxJQUFLLE9BQU8sQ0FBRTtRQUMvRCxPQUFPLElBQUksT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztrQkFFakIsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFtQjtZQUM5RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztrQkFDckQsSUFBSSxHQUFpQjtnQkFDekIsSUFBSTtnQkFDSixNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0hGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBTW5CLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUo1Qiw2QkFBOEM7Ozs7O0lBQzlDLCtCQUFxRDs7Ozs7SUFDckQsZ0NBQTJGOzs7OztJQUUvRSw0QkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBOdUxhenlSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcicgfCAnbG9hZGluZyc7XG4gIGVycm9yPzoge307XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnVMYXp5U2VydmljZSB7XG4gIHByaXZhdGUgbGlzdDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBjYWNoZWQ6IHsgW2tleTogc3RyaW5nXTogTnVMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TnVMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOdUxhenlSZXN1bHRbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBmaXhQYXRocyhwYXRocz86IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGlmICh0eXBlb2YgcGF0aHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXRocyA9IFtwYXRoc107XG4gICAgfVxuICAgIHJldHVybiBwYXRocyEgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogTW9uaXRvciBmb3IgdGhlIGZpbmlzaGVkIG9mIGBwYXRoc2BcbiAgICpcbiAgICogLSBJdCdzIHJlY29tbWVuZGVkIHRvIHBhc3MgdGhlIHZhbHVlIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgYGxvYWQoKWAgbWV0aG9kXG4gICAqL1xuICBtb25pdG9yKHBhdGhzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBPYnNlcnZhYmxlPE51TGF6eVJlc3VsdFtdPiB7XG4gICAgY29uc3QgbGlicyA9IHRoaXMuZml4UGF0aHMocGF0aHMpO1xuXG4gICAgY29uc3QgcGlwZXMgPSBbc2hhcmUoKSwgZmlsdGVyKChsczogTnVMYXp5UmVzdWx0W10pID0+IGxzLmxlbmd0aCAhPT0gMCldO1xuXG4gICAgaWYgKGxpYnMubGVuZ3RoID4gMCkge1xuICAgICAgcGlwZXMucHVzaChmaWx0ZXIoKGxzOiBOdUxhenlSZXN1bHRbXSkgPT4gbHMubGVuZ3RoID09PSBsaWJzLmxlbmd0aCAmJiBscy5zb21lKHYgPT4gdi5zdGF0dXMgPT09ICdvaycgJiYgbGlicy5pbmNsdWRlcyh2LnBhdGgpKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShwaXBlLmFwcGx5KHRoaXMsIHBpcGVzKSk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QgPSB7fTtcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHNwZWNpZmllZCByZXNvdXJjZXMsIGluY2x1ZGVzIGAuanNgLCBgLmNzc2BcbiAgICpcbiAgICogLSBUaGUgcmV0dXJuZWQgUHJvbWlzZSBkb2VzIG5vdCBtZWFuIHRoYXQgaXQgd2FzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICogLSBZb3UgY2FuIG1vbml0b3IgbG9hZCBpcyBzdWNjZXNzIHZpYSBgbW9uaXRvcigpYFxuICAgKi9cbiAgYXN5bmMgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPE51TGF6eVJlc3VsdFtdPiB7XG4gICAgcGF0aHMgPSB0aGlzLmZpeFBhdGhzKHBhdGhzKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAocGF0aCA9PiAocGF0aC5lbmRzV2l0aCgnLmpzJykgPyB0aGlzLmxvYWRTY3JpcHQocGF0aCkgOiB0aGlzLmxvYWRTdHlsZShwYXRoKSkpKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiB7IGlubmVyQ29udGVudD86IHN0cmluZyB9KTogUHJvbWlzZTxOdUxhenlSZXN1bHQ+IHtcbiAgICBjb25zdCB7IGlubmVyQ29udGVudCB9ID0geyAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHsgLi4udGhpcy5jYWNoZWRbcGF0aF0sIHN0YXR1czogJ2xvYWRpbmcnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogTnVMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgICAgdGhpcy5fbm90aWZ5Lm5leHQoW2l0ZW1dKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBhbnk7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIG5vZGUuc3JjID0gcGF0aDtcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSkge1xuICAgICAgICAvLyBJRVxuICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBub2RlLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT5cbiAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjoge30pID0+XG4gICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTdHlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiB7IHJlbD86IHN0cmluZzsgaW5uZXJDb250ZW50Pzogc3RyaW5nIH0pOiBQcm9taXNlPE51TGF6eVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcmVsLCBpbm5lckNvbnRlbnQgfSA9IHsgcmVsOiAnc3R5bGVzaGVldCcsIC4uLm9wdGlvbnMgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJykgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgICAgbm9kZS5yZWwgPSByZWw7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbm9kZS5ocmVmID0gcGF0aDtcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgY29uc3QgaXRlbTogTnVMYXp5UmVzdWx0ID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICB9O1xuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIl19