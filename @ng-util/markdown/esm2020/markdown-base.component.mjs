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
/** @nocollapse */ /** @nocollapse */ NuMarkdownBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG }, { token: i1.NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ /** @nocollapse */ NuMarkdownBaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBR3ZELE1BQU0sT0FBZ0IsdUJBQXVCO0lBc0IzQyxZQUNZLEVBQTJCLEVBQ0MsTUFBd0IsRUFDcEQsR0FBc0IsRUFDdEIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ0MsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDcEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFxQjNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFuQkQsSUFDSSxLQUFLLENBQUMsQ0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVdPLFNBQVM7UUFDZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sQ0FBQyxDQUFFLE1BQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7MEpBbkRtQix1QkFBdUIsNENBd0JqQyxrQkFBa0I7OElBeEJSLHVCQUF1QjtBQUluQjtJQUFkLFdBQVcsRUFBRTs7c0RBQVc7MkZBSmQsdUJBQXVCO2tCQUQ1QyxTQUFTOzswQkF5QkwsTUFBTTsyQkFBQyxrQkFBa0I7aUdBcEJKLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUlILEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BuZy11dGlsL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcbmltcG9ydCB7IE51TWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG5vdGlmeSQhOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBfaW5zdGFuY2U6IGFueTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHJvdGVjdGVkIF92YWx1ZSE6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIHByb3RlY3RlZCBjb25maWc6IE51TWFya2Rvd25Db25maWcsXG4gICAgcHJvdGVjdGVkIHNydjogTnVNYXJrZG93blNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICB0aGlzLm5vdGlmeSQgPSB0aGlzLnNydi5ub3RpZnkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBnZXQgbG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh3aW5kb3cgYXMgYW55KS5WZGl0b3I7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19