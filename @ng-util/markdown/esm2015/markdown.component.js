/**
 * @fileoverview added by tsickle
 * Generated from: markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, NgZone, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
export class NuMarkdownComponent {
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
        this.ready = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
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
     * @private
     * @return {?}
     */
    init() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            var _a;
            /** @type {?} */
            const options = Object.assign(Object.assign({ value: this._value, cache: {
                    enable: false,
                }, mode: 'sv', minHeight: 350, input: (/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this._value = value;
                        this.onChange(value);
                    }));
                }) }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.defaultOptions), this.options);
            this._instance = new Vditor(this.el.nativeElement, options);
            this.ready.emit(this._instance);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setDisabled() {
        if (!this.instance) {
            return;
        }
        if (this.disabled) {
            this.instance.disabled();
        }
        else {
            this.instance.enable();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value || '';
        if (this.instance) {
            this.instance.setValue(this._value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    registerOnTouched(_) { }
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (((/** @type {?} */ (window))).QRious) {
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
NuMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown',
                template: ``,
                exportAs: 'nuMarkdown',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NuMarkdownComponent)),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NuMarkdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuMarkdownService },
    { type: NgZone }
];
NuMarkdownComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    delay: [{ type: Input }],
    ready: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NuMarkdownComponent.prototype, "delay", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype._instance;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype._value;
    /** @type {?} */
    NuMarkdownComponent.prototype.options;
    /** @type {?} */
    NuMarkdownComponent.prototype.disabled;
    /** @type {?} */
    NuMarkdownComponent.prototype.delay;
    /** @type {?} */
    NuMarkdownComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.onChange;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duLyIsInNvdXJjZXMiOlsibWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWlCdkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUs5QixZQUNZLEVBQTJCLEVBQ0QsTUFBd0IsRUFDcEQsR0FBc0IsRUFDcEIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDcEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVdoQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsQyxhQUFROzs7O1FBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQVZuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFYRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFvQk8sU0FBUztRQUNmLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTs7O2tCQUMzQixPQUFPLGlDQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUNsQixLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLEtBQUs7aUJBQ2QsRUFDRCxJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxHQUFHLEVBQ2QsS0FBSzs7OztnQkFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUMsQ0FBQztnQkFDTCxDQUFDLFdBQ0UsSUFBSSxDQUFDLE1BQU0sMENBQUUsY0FBYyxHQUMzQixJQUFJLENBQUMsT0FBTyxDQUNoQjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBdUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxDQUFhLElBQVMsQ0FBQzs7Ozs7SUFFekMsZ0JBQWdCLENBQUMsV0FBb0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUF0R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsRUFBRTtnQkFDWixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUM7d0JBQ2xELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBN0JDLFVBQVU7NENBcUNQLE1BQU0sU0FBQyxrQkFBa0I7WUF4QnJCLGlCQUFpQjtZQVJ4QixNQUFNOzs7c0JBMENMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLE1BQU07O0FBRGlCO0lBQWQsV0FBVyxFQUFFOztrREFBZTs7Ozs7O0lBTHRDLHNDQUE4Qjs7Ozs7SUFDOUIsd0NBQXVCOzs7OztJQUN2QixxQ0FBdUI7O0lBQ3ZCLHNDQUFzQjs7SUFDdEIsdUNBQTJCOztJQUMzQixvQ0FBc0M7O0lBQ3RDLG9DQUEwQzs7Ozs7SUFDMUMsdUNBQXFDOzs7OztJQWZuQyxpQ0FBcUM7Ozs7O0lBQ3JDLHFDQUE0RDs7Ozs7SUFDNUQsa0NBQThCOzs7OztJQUM5QixxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAbmctdXRpbC91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29uZmlnLCBOVV9NQVJLRE9XTl9DT05GSUcgfSBmcm9tICcuL21hcmtkb3duLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duU2VydmljZSB9IGZyb20gJy4vbWFya2Rvd24uc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIFZkaXRvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tYXJrZG93bicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZXhwb3J0QXM6ICdudU1hcmtkb3duJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdU1hcmtkb3duQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLFxuICAgIHByaXZhdGUgc3J2OiBOdU1hcmtkb3duU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7fTtcblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ3N2JyxcbiAgICAgICAgbWluSGVpZ2h0OiAzNTAsXG4gICAgICAgIGlucHV0OiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC4uLnRoaXMuY29uZmlnPy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFZkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yZWFkeS5lbWl0KHRoaXMuX2luc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRpc2FibGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF86ICgpID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShfaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBfaXNEaXNhYmxlZDtcbiAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5RUmlvdXMpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=