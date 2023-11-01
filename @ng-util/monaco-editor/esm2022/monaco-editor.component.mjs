import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { take, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
export class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.autoFormat = true;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        const hasModel = !!this.model;
        if (hasModel) {
            const model = monaco.editor.getModel(this.model.uri || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = this.model;
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent(() => {
            const value = editor.getValue();
            this.ngZone.run(() => {
                this._value = value;
                this.onChange(value);
            });
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.registerResize();
        const eventName = initEvent ? 'init' : 're-init';
        if (this.autoFormat) {
            timer(this._config.autoFormatTime)
                .pipe(takeUntilDestroyed(this.destroy$), take(1))
                .subscribe(() => {
                const action = editor.getAction('editor.action.formatDocument');
                if (action == null) {
                    this.notifyEvent(eventName);
                    return;
                }
                action.run().then(() => this.notifyEvent(eventName));
            });
            return;
        }
        this.notifyEvent(eventName);
    }
    writeValue(value) {
        this._value = value || '';
        this._editor?.setValue(this._value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.1", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { model: "model", autoFormat: "autoFormat" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMonacoEditorComponent)),
                multi: true,
            },
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-editor',
                    template: ``,
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMonacoEditorComponent)),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], propDecorators: { model: [{
                type: Input
            }], autoFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBb0JoRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCO0lBbEIvRDs7UUFtQlUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFNbkIsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDN0IsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztLQXFFOUI7SUExRUMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBOEMsQ0FBQztJQUM3RCxDQUFDO0lBS0QsVUFBVSxDQUFDLE9BQTJELEVBQUUsU0FBa0I7UUFDeEYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLEdBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLEtBQUssRUFBRTtnQkFD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Q0FBQztJQUVELGdCQUFnQixDQUFDLFdBQW9CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO3NJQS9FVSx1QkFBdUI7MEhBQXZCLHVCQUF1QixxTUFWdkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFDO2dCQUN0RCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsK0VBWlMsRUFBRTs7Z0dBZ0JELHVCQUF1QjtrQkFsQm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLFNBQVM7d0JBQzVCLGdCQUFnQixFQUFFLFFBQVE7cUJBQzNCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxFQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBQzs0QkFDdEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFJVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckJhc2UgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JNb2RlbCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5pbXBvcnQgeyB0YWtlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRWRpdG9yJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVNb25hY29FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gIEBJbnB1dCgpIG1vZGVsPzogTnVNb25hY29FZGl0b3JNb2RlbCB8IG51bGw7XG4gIEBJbnB1dCgpIGF1dG9Gb3JtYXQgPSB0cnVlO1xuXG4gIGdldCBlZGl0b3IoKTogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGhhc01vZGVsID0gISF0aGlzLm1vZGVsO1xuXG4gICAgaWYgKGhhc01vZGVsKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodGhpcy5tb2RlbCEudXJpISB8fCAnJyk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICBvcHRpb25zLm1vZGVsLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGxhbmd1YWdlLCB1cmkgfSA9IHRoaXMubW9kZWwhO1xuICAgICAgICBvcHRpb25zLm1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh2YWx1ZSB8fCB0aGlzLl92YWx1ZSwgbGFuZ3VhZ2UsIHVyaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9IG51bGwpIG9wdGlvbnMucmVhZE9ubHkgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICBjb25zdCBlZGl0b3IgPSAodGhpcy5fZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKSk7XG5cbiAgICBpZiAoIWhhc01vZGVsKSB7XG4gICAgICBlZGl0b3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVkaXRvci5vbkRpZEJsdXJFZGl0b3JXaWRnZXQoKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCk7XG5cbiAgICBjb25zdCBldmVudE5hbWUgPSBpbml0RXZlbnQgPyAnaW5pdCcgOiAncmUtaW5pdCc7XG4gICAgaWYgKHRoaXMuYXV0b0Zvcm1hdCkge1xuICAgICAgdGltZXIodGhpcy5fY29uZmlnLmF1dG9Gb3JtYXRUaW1lISlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpLCB0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBlZGl0b3IuZ2V0QWN0aW9uKCdlZGl0b3IuYWN0aW9uLmZvcm1hdERvY3VtZW50Jyk7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbi5ydW4oKS50aGVuKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoZXZlbnROYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeUV2ZW50KGV2ZW50TmFtZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpPy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19