import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Output } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
import * as i1 from "./markdown.service";
class NuMarkdownBaseComponent {
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    get instance() {
        return this._instance;
    }
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG }, { token: i1.NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 }); }
}
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
export { NuMarkdownBaseComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRXZELE1BQ3NCLHVCQUF1QjtJQVUzQyxJQUNJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFDWSxFQUEyQixFQUNDLE1BQXdCLEVBQ3BELEdBQXNCLEVBQ3RCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3BELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QkYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBcUIzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU8sU0FBUztRQUNmLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFjLE1BQU07UUFDbEIsT0FBTyxDQUFDLENBQUUsTUFBYyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO2lJQW5EbUIsdUJBQXVCLDRDQXdCakMsa0JBQWtCO3FIQXhCUix1QkFBdUI7O0FBSW5CO0lBQWQsV0FBVyxFQUFFOztzREFBVztTQUpkLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUQ1QyxTQUFTOzswQkF5QkwsTUFBTTsyQkFBQyxrQkFBa0I7aUdBcEJKLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUlILEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BuZy11dGlsL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcbmltcG9ydCB7IE51TWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG5vdGlmeSQhOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBfaW5zdGFuY2U6IGFueTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHJvdGVjdGVkIF92YWx1ZSE6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIHByb3RlY3RlZCBjb25maWc6IE51TWFya2Rvd25Db25maWcsXG4gICAgcHJvdGVjdGVkIHNydjogTnVNYXJrZG93blNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICB0aGlzLm5vdGlmeSQgPSB0aGlzLnNydi5ub3RpZnkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdCgpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBnZXQgbG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhISh3aW5kb3cgYXMgYW55KS5WZGl0b3I7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19