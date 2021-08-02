import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMarkdownBaseComponent } from './markdown-base.component';
import * as i0 from "@angular/core";
export class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.onChange = (_) => { };
    }
    init() {
        this.ngZone.runOutsideAngular(() => {
            var _a;
            const options = Object.assign(Object.assign({ value: this._value, cache: {
                    enable: false,
                }, mode: 'sv', minHeight: 350, input: (value) => {
                    this.ngZone.run(() => {
                        this._value = value;
                        this.onChange(value);
                    });
                } }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.defaultOptions), this.options);
            this._instance = new Vditor(this.el.nativeElement, options);
            this.ngZone.run(() => this.ready.emit(this._instance));
        });
    }
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
    writeValue(value) {
        this._value = value || '';
        if (this.instance) {
            this.instance.setValue(this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(_) { }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
/** @nocollapse */ NuMarkdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMarkdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMarkdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMarkdownComponent, selector: "nu-markdown", providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => NuMarkdownComponent)),
            multi: true,
        },
    ], exportAs: ["nuMarkdown"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMarkdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown',
                    template: ``,
                    exportAs: 'nuMarkdown',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMarkdownComponent)),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFpQnBFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx1QkFBdUI7SUFiaEU7O1FBY1UsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7S0FxRHRDO0lBbkRXLElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTs7WUFDakMsTUFBTSxPQUFPLGlDQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUNsQixLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLEtBQUs7aUJBQ2QsRUFDRCxJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxHQUFHLEVBQ2QsS0FBSyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTt3QkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsSUFDRSxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLGNBQWMsR0FDM0IsSUFBSSxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsQ0FBYSxJQUFTLENBQUM7SUFFekMsZ0JBQWdCLENBQUMsV0FBb0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O21JQXJEVSxtQkFBbUI7dUhBQW5CLG1CQUFtQixzQ0FUbkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztZQUNsRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMkVBUlMsRUFBRTsyRkFXRCxtQkFBbUI7a0JBYi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE51TWFya2Rvd25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudCc7XG5cbmRlY2xhcmUgdmFyIFZkaXRvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tYXJrZG93bicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZXhwb3J0QXM6ICdudU1hcmtkb3duJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdU1hcmtkb3duQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duQ29tcG9uZW50IGV4dGVuZHMgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7fTtcblxuICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ3N2JyxcbiAgICAgICAgbWluSGVpZ2h0OiAzNTAsXG4gICAgICAgIGlucHV0OiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC4uLnRoaXMuY29uZmlnPy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFZkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVhZHkuZW1pdCh0aGlzLl9pbnN0YW5jZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzYWJsZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoXzogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19