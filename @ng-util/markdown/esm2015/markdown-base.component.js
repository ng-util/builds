import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Output } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
import * as i1 from "./markdown.service";
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
/** @nocollapse */ NuMarkdownBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG }, { token: i1.NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ NuMarkdownBaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.5", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuMarkdownService }, { type: i0.NgZone }]; }, propDecorators: { delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], ready: [{
                type: Output
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBR3ZELE1BQU0sT0FBZ0IsdUJBQXVCO0lBc0IzQyxZQUNZLEVBQTJCLEVBQ0MsTUFBd0IsRUFDcEQsR0FBc0IsRUFDdEIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0MsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDcEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFxQjNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFuQkQsSUFDSSxLQUFLLENBQUMsQ0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVdPLFNBQVM7UUFDZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sQ0FBQyxDQUFFLE1BQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7dUlBbkRtQix1QkFBdUIsNENBd0JqQyxrQkFBa0I7MkhBeEJSLHVCQUF1QjtBQUluQjtJQUFkLFdBQVcsRUFBRTs7c0RBQVc7MkZBSmQsdUJBQXVCO2tCQUQ1QyxTQUFTOzswQkF5QkwsTUFBTTsyQkFBQyxrQkFBa0I7aUdBcEJKLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUlILEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BuZy11dGlsL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcbmltcG9ydCB7IE51TWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG5vdGlmeSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIF9pbnN0YW5jZTogYW55O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcm90ZWN0ZWQgX3ZhbHVlITogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01BUktET1dOX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgc3J2OiBOdU1hcmtkb3duU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIGdldCBsb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHdpbmRvdyBhcyBhbnkpLlZkaXRvcjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3J2LmxvYWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=