/**
 * @fileoverview added by tsickle
 * Generated from: markdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "./markdown.config";
import * as i2 from "@ng-util/lazy";
export class NuMarkdownService {
    /**
     * @param {?} config
     * @param {?} lazySrv
     */
    constructor(config, lazySrv) {
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.libs = (config === null || config === void 0 ? void 0 : config.libs) || [
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js`,
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.css`,
        ];
    }
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    load() {
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        /** @type {?} */
        const libs = (/** @type {?} */ ((/** @type {?} */ (this)).libs));
        (/** @type {?} */ (this)).lazySrv.monitor(libs).subscribe((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).loaded = true;
            (/** @type {?} */ (this)).notify$.next();
        }));
        (/** @type {?} */ (this)).lazySrv.load(libs);
        return (/** @type {?} */ (this));
    }
}
NuMarkdownService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NuMarkdownService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuLazyService }
];
/** @nocollapse */ NuMarkdownService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NuMarkdownService_Factory() { return new NuMarkdownService(i0.ɵɵinject(i1.NU_MARKDOWN_CONFIG), i0.ɵɵinject(i2.NuLazyService)); }, token: NuMarkdownService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.libs;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.lazySrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFvQixrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR3pFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBVTVCLFlBQXdDLE1BQXdCLEVBQVUsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVJ4RixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQU9wQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLElBQUksS0FBSTtZQUMxQix1REFBdUQ7WUFDdkQsb0RBQW9EO1NBQ3JELENBQUM7SUFDSixDQUFDOzs7O0lBVEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQVNELElBQUk7UUFDRixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLE1BQU0sRUFBRTtnQkFDZixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO1NBQ2I7UUFDRCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztjQUVkLElBQUksR0FBRyxtQkFBQSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxJQUFJLEVBQUM7UUFDdkIsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDeEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFDSCxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7WUFuQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FXbkIsTUFBTSxTQUFDLGtCQUFrQjtZQWYvQixhQUFhOzs7Ozs7OztJQU1wQixpQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUF3Qjs7Ozs7SUFDeEIsbUNBQXVCOzs7OztJQUN2QixvQ0FBc0M7Ozs7O0lBTTRCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVMYXp5U2VydmljZSB9IGZyb20gJ0BuZy11dGlsL2xhenknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaWJzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZywgcHJpdmF0ZSBsYXp5U3J2OiBOdUxhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5saWJzID0gY29uZmlnPy5saWJzIHx8IFtcbiAgICAgIGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3ZkaXRvci9kaXN0L2luZGV4Lm1pbi5qc2AsXG4gICAgICBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92ZGl0b3IvZGlzdC9pbmRleC5jc3NgLFxuICAgIF07XG4gIH1cblxuICBsb2FkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBsaWJzID0gdGhpcy5saWJzITtcbiAgICB0aGlzLmxhenlTcnYubW9uaXRvcihsaWJzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmxhenlTcnYubG9hZChsaWJzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=