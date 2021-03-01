import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
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
NuMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown',
                template: ``,
                exportAs: 'nuMarkdown',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NuMarkdownComponent),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NuMarkdownComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWlCcEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHVCQUF1QjtJQWJoRTs7UUFpQlksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFxRHZDLENBQUM7SUFuRFcsSUFBSTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFOztZQUNqQyxNQUFNLE9BQU8saUNBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQ2xCLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsS0FBSztpQkFDZCxFQUNELElBQUksRUFBRSxJQUFJLEVBQ1YsU0FBUyxFQUFFLEdBQUcsRUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO3dCQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxVQUNFLElBQUksQ0FBQyxNQUFNLDBDQUFFLGNBQWMsR0FDM0IsSUFBSSxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsQ0FBYSxJQUFTLENBQUM7SUFFekMsZ0JBQWdCLENBQUMsV0FBb0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztzQkFHRSxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLWJhc2UuY29tcG9uZW50JztcblxuZGVjbGFyZSB2YXIgVmRpdG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1hcmtkb3duJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TWFya2Rvd24nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE51TWFya2Rvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25Db21wb25lbnQgZXh0ZW5kcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7fTtcblxuICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgIGNhY2hlOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ3N2JyxcbiAgICAgICAgbWluSGVpZ2h0OiAzNTAsXG4gICAgICAgIGlucHV0OiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC4uLnRoaXMuY29uZmlnPy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFZkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVhZHkuZW1pdCh0aGlzLl9pbnN0YW5jZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZGlzYWJsZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZS5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoXzogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19