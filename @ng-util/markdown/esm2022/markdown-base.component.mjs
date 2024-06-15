import { __decorate } from "tslib";
import { Directive, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG, optional: true }, { token: i1.NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.3", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 }); }
}
__decorate([
    InputNumber()
], NuMarkdownBaseComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBSXpFLE1BQU0sT0FBZ0IsdUJBQXVCO0lBVTNDLElBQ0ksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQ1ksRUFBMkIsRUFDYSxNQUF3QixFQUNoRSxHQUFzQixFQUN0QixNQUFjO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDYSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEJGLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQW9CMUMsQ0FBQztJQUVJLFNBQVM7UUFDZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sQ0FBQyxDQUFFLE1BQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO2lJQWxEbUIsdUJBQXVCLDRDQXdCckIsa0JBQWtCO3FIQXhCcEIsdUJBQXVCOztBQUluQjtJQUFkLFdBQVcsRUFBRTtzREFBVzsyRkFKZCx1QkFBdUI7a0JBRDVDLFNBQVM7OzBCQXlCTCxRQUFROzswQkFBSSxNQUFNOzJCQUFDLGtCQUFrQjs4RkFwQmhCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUlILEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAbmctdXRpbC91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29uZmlnLCBOVV9NQVJLRE9XTl9DT05GSUcgfSBmcm9tICcuL21hcmtkb3duLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duU2VydmljZSB9IGZyb20gJy4vbWFya2Rvd24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE51TWFya2Rvd25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBub3RpZnkkPzogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2luc3RhbmNlOiBhbnk7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHByb3RlY3RlZCBfdmFsdWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlVfTUFSS0RPV05fQ09ORklHKSBwcm90ZWN0ZWQgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLFxuICAgIHByb3RlY3RlZCBzcnY6IE51TWFya2Rvd25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXQoKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgZ2V0IGxvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEod2luZG93IGFzIGFueSkuVmRpdG9yO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubm90aWZ5JCA9IHRoaXMuc3J2Lm5vdGlmeS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNydi5sb2FkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==