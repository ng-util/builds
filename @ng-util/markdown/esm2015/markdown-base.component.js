import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Output } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
export class NuMarkdownBaseComponent {
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.delay = 0;
        this.disabled = false;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
    }
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    get instance() {
        return this._instance;
    }
    initDelay() {
        setTimeout(() => this.init(), this.delay);
    }
    get loaded() {
        return !!window.Vditor;
    }
    ngAfterViewInit() {
        if (this.loaded) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
NuMarkdownBaseComponent.decorators = [
    { type: Directive }
];
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NuMarkdownBaseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuMarkdownService },
    { type: NgZone }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NuMarkdownBaseComponent.propDecorators = {
    delay: [{ type: Input }],
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    ready: [{ type: Output }],
    value: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxNQUFNLE9BQWdCLHVCQUF1QjtJQXNCM0MsWUFDWSxFQUEyQixFQUNDLE1BQXdCLEVBQ3BELEdBQXNCLEVBQ3RCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3BELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QkYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBcUIzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBbkJELElBQ0ksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFXTyxTQUFTO1FBQ2YsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlELElBQWMsTUFBTTtRQUNsQixPQUFPLENBQUMsQ0FBRSxNQUFjLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7WUFwREYsU0FBUzs7Ozs7Ozs7OztZQU55QixVQUFVOzRDQStCeEMsTUFBTSxTQUFDLGtCQUFrQjtZQTNCckIsaUJBQWlCO1lBSmtELE1BQU07Ozs7b0JBVy9FLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLE1BQU07b0JBR04sS0FBSzs7QUFOa0I7SUFBZCxXQUFXLEVBQUU7O3NEQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQG5nLXV0aWwvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuaW1wb3J0IHsgTnVNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbm90aWZ5JDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2luc3RhbmNlOiBhbnk7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHByb3RlY3RlZCBfdmFsdWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTlVfTUFSS0RPV05fQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLFxuICAgIHByb3RlY3RlZCBzcnY6IE51TWFya2Rvd25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgdGhpcy5ub3RpZnkkID0gdGhpcy5zcnYubm90aWZ5LnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgZ2V0IGxvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEod2luZG93IGFzIGFueSkuVmRpdG9yO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnkkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==