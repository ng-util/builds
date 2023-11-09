import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
import * as i1 from "./markdown.service";
export class NuMarkdownBaseComponent {
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
    }
    initDelay() {
        setTimeout(() => this.init(), this.delay);
    }
    get loaded() {
        return !!window.Vditor;
    }
    ngAfterViewInit() {
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
        if (this.loaded) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    ngOnDestroy() {
        this.notify$?.unsubscribe();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG, optional: true }, { token: i1.NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.1", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 }); }
}
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuMarkdownService }, { type: i0.NgZone }], propDecorators: { delay: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUd2RCxNQUFNLE9BQWdCLHVCQUF1QjtJQVUzQyxJQUNJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFDWSxFQUEyQixFQUNhLE1BQXdCLEVBQ2hFLEdBQXNCLEVBQ3RCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUNhLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ2hFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QkYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBb0IxQyxDQUFDO0lBRUksU0FBUztRQUNmLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxJQUFjLE1BQU07UUFDbEIsT0FBTyxDQUFDLENBQUUsTUFBYyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO2lJQWxEbUIsdUJBQXVCLDRDQXdCckIsa0JBQWtCO3FIQXhCcEIsdUJBQXVCOztBQUluQjtJQUFkLFdBQVcsRUFBRTs7c0RBQVc7MkZBSmQsdUJBQXVCO2tCQUQ1QyxTQUFTOzswQkF5QkwsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxrQkFBa0I7OEZBcEJoQixLQUFLO3NCQUE1QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLEtBQUs7c0JBQWQsTUFBTTtnQkFJSCxLQUFLO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQG5nLXV0aWwvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuaW1wb3J0IHsgTnVNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbm90aWZ5JD86IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIF9pbnN0YW5jZTogYW55O1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcm90ZWN0ZWQgX3ZhbHVlITogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5VX01BUktET1dOX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgc3J2OiBOdU1hcmtkb3duU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge31cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0KCk6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIGdldCBsb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHdpbmRvdyBhcyBhbnkpLlZkaXRvcjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQgPSB0aGlzLnNydi5ub3RpZnkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zcnYubG9hZCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZnkkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=