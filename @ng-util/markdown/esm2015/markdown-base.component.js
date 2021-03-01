import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Inject, Input, NgZone } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
export class NuMarkdownBaseComponent {
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkQsTUFBTSxPQUFnQix1QkFBdUI7SUFVM0MsWUFDWSxFQUEyQixFQUNDLE1BQXdCLEVBQ3BELEdBQXNCLEVBQ3RCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3BELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQVhELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBV08sU0FBUztRQUNmLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFjLE1BQU07UUFDbEIsT0FBTyxDQUFDLENBQUUsTUFBYyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUF4Q0YsU0FBUzs7OztZQU55QixVQUFVOzRDQW1CeEMsTUFBTSxTQUFDLGtCQUFrQjtZQWZyQixpQkFBaUI7WUFKb0MsTUFBTTs7O29CQVdqRSxLQUFLOztBQUFrQjtJQUFkLFdBQVcsRUFBRTs7c0RBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BuZy11dGlsL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcbmltcG9ydCB7IE51TWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG5vdGlmeSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIF9pbnN0YW5jZTogYW55O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5OiBudW1iZXI7XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01BUktET1dOX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgc3J2OiBOdU1hcmtkb3duU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIGdldCBsb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHdpbmRvdyBhcyBhbnkpLlZkaXRvcjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=