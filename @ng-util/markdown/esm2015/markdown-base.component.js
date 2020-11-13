/**
 * @fileoverview added by tsickle
 * Generated from: markdown-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Inject, Input, NgZone } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
/**
 * @abstract
 */
export class NuMarkdownBaseComponent {
    /**
     * @param {?} el
     * @param {?} config
     * @param {?} srv
     * @param {?} ngZone
     */
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.notify$ = this.srv.notify.subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
    }
    /**
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        setTimeout((/**
         * @return {?}
         */
        () => this.init()), this.delay);
    }
    /**
     * @protected
     * @return {?}
     */
    get loaded() {
        return !!((/** @type {?} */ (window))).Vditor;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.loaded) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
NuMarkdownBaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
NuMarkdownBaseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuMarkdownService },
    { type: NgZone }
];
NuMarkdownBaseComponent.propDecorators = {
    delay: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownBaseComponent.prototype.notify$;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype._instance;
    /** @type {?} */
    NuMarkdownBaseComponent.prototype.delay;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.ngZone;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NuMarkdownBaseComponent.prototype.init = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vIiwic291cmNlcyI6WyJtYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUd2RCxNQUFNLE9BQWdCLHVCQUF1Qjs7Ozs7OztJQVUzQyxZQUNZLEVBQTJCLEVBQ0MsTUFBd0IsRUFDcEQsR0FBc0IsRUFDdEIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0MsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDcEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFYRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFXTyxTQUFTO1FBQ2YsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUlELElBQWMsTUFBTTtRQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXhDRixTQUFTOzs7O1lBTnlCLFVBQVU7NENBbUJ4QyxNQUFNLFNBQUMsa0JBQWtCO1lBZnJCLGlCQUFpQjtZQUpvQyxNQUFNOzs7b0JBV2pFLEtBQUs7O0FBQWtCO0lBQWQsV0FBVyxFQUFFOztzREFBZTs7Ozs7O0lBSHRDLDBDQUE4Qjs7Ozs7SUFDOUIsNENBQXlCOztJQUV6Qix3Q0FBc0M7Ozs7O0lBT3BDLHFDQUFxQzs7Ozs7SUFDckMseUNBQThEOzs7OztJQUM5RCxzQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUF3Qjs7Ozs7O0lBUzFCLHlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQG5nLXV0aWwvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuaW1wb3J0IHsgTnVNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbm90aWZ5JDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2luc3RhbmNlOiBhbnk7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTlVfTUFSS0RPV05fQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLFxuICAgIHByb3RlY3RlZCBzcnY6IE51TWFya2Rvd25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5LnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgZ2V0IGxvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEod2luZG93IGFzIGFueSkuVmRpdG9yO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnkkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==