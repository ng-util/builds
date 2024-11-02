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
            const options = {
                value: this._value,
                cache: {
                    enable: false,
                },
                mode: 'sv',
                minHeight: 350,
                input: (value) => {
                    this.ngZone.run(() => {
                        this._value = value;
                        this.onChange(value);
                    });
                },
                ...this.config?.defaultOptions,
                ...this.options,
            };
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMarkdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.10", type: NuMarkdownComponent, isStandalone: true, selector: "nu-markdown", providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMarkdownComponent)),
                multi: true,
            },
        ], exportAs: ["nuMarkdown"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMarkdownComponent, decorators: [{
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
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFrQnBFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx1QkFBdUI7SUFkaEU7O1FBZVUsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7S0FxRHRDO0lBbkRXLElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxNQUFNLE9BQU8sR0FBRztnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2xCLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxJQUFJLEVBQUUsSUFBSTtnQkFDVixTQUFTLEVBQUUsR0FBRztnQkFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO3dCQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYztnQkFDOUIsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNoQixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsQ0FBYSxJQUFTLENBQUM7SUFFekMsZ0JBQWdCLENBQUMsV0FBb0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7a0lBckRVLG1CQUFtQjtzSEFBbkIsbUJBQW1CLDBEQVZuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUM7Z0JBQ2xELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwyRUFSUyxFQUFFOzs0RkFZRCxtQkFBbUI7a0JBZC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRSxZQUFZO29CQUN0QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbWFya2Rvd24tYmFzZS5jb21wb25lbnQnO1xuXG5kZWNsYXJlIHZhciBWZGl0b3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbWFya2Rvd24nLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGV4cG9ydEFzOiAnbnVNYXJrZG93bicsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVNYXJrZG93bkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93bkNvbXBvbmVudCBleHRlbmRzIE51TWFya2Rvd25CYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IHN0cmluZykgPT4ge307XG5cbiAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICBjYWNoZToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6ICdzdicsXG4gICAgICAgIG1pbkhlaWdodDogMzUwLFxuICAgICAgICBpbnB1dDogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAuLi50aGlzLmNvbmZpZz8uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIH07XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBWZGl0b3IodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJlYWR5LmVtaXQodGhpcy5faW5zdGFuY2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRpc2FibGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKF86ICgpID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShfaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBfaXNEaXNhYmxlZDtcbiAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gIH1cbn1cbiJdfQ==