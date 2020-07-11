/**
 * @fileoverview added by tsickle
 * Generated from: markdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
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
        (/** @type {?} */ (this)).lazySrv.change
            .pipe(filter((/**
         * @param {?} ls
         * @return {?}
         */
        ls => {
            return ls.length === libs.length && ls.some((/**
             * @param {?} v
             * @return {?}
             */
            v => v.status === 'ok' && libs.includes(v.path)));
        })))
            .subscribe((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this)).notify$.next()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUd6RSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQVU1QixZQUF3QyxNQUF3QixFQUFVLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFSeEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFPcEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUk7WUFDMUIsdURBQXVEO1lBQ3ZELG9EQUFvRDtTQUNyRCxDQUFDO0lBQ0osQ0FBQzs7OztJQVRELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFTRCxJQUFJO1FBQ0YsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7Y0FDZCxJQUFJLEdBQUcsbUJBQUEsbUJBQUEsSUFBSSxFQUFBLENBQUMsSUFBSSxFQUFDO1FBQ3ZCLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2FBQ2hCLElBQUksQ0FDSCxNQUFNOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUMvRixDQUFDLEVBQUMsQ0FDSDthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDO1FBQ3hDLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7OztZQXBDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQVduQixNQUFNLFNBQUMsa0JBQWtCO1lBaEIvQixhQUFhOzs7Ozs7OztJQU9wQixpQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUF3Qjs7Ozs7SUFDeEIsbUNBQXVCOzs7OztJQUN2QixvQ0FBc0M7Ozs7O0lBTTRCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVMYXp5U2VydmljZSB9IGZyb20gJ0BuZy11dGlsL2xhenknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaWJzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZywgcHJpdmF0ZSBsYXp5U3J2OiBOdUxhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5saWJzID0gY29uZmlnPy5saWJzIHx8IFtcbiAgICAgIGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3ZkaXRvci9kaXN0L2luZGV4Lm1pbi5qc2AsXG4gICAgICBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92ZGl0b3IvZGlzdC9pbmRleC5jc3NgLFxuICAgIF07XG4gIH1cblxuICBsb2FkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgbGlicyA9IHRoaXMubGlicyE7XG4gICAgdGhpcy5sYXp5U3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihscyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGxzLmxlbmd0aCA9PT0gbGlicy5sZW5ndGggJiYgbHMuc29tZSh2ID0+IHYuc3RhdHVzID09PSAnb2snICYmIGxpYnMuaW5jbHVkZXModi5wYXRoKSk7XG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5vdGlmeSQubmV4dCgpKTtcbiAgICB0aGlzLmxhenlTcnYubG9hZChsaWJzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19