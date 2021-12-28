import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import * as i0 from "@angular/core";
export class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
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
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then(() => this.notifyEvent(initEvent ? 'init' : 're-init'));
    }
    writeValue(value) {
        this._value = value || '';
        if (this._editor) {
            this._editor.setValue(this._value);
        }
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
}
/** @nocollapse */ /** @nocollapse */ NuMonacoEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ NuMonacoEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: { model: "model" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => NuMonacoEditorComponent)),
            multi: true,
        },
    ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
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
                }]
        }], propDecorators: { model: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBb0JwRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCO0lBakIvRDs7UUFrQlUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVFaLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzdCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7S0EyRDlCO0lBaEVDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQThDLENBQUM7SUFDN0QsQ0FBQztJQUtELFVBQVUsQ0FBQyxPQUEyRCxFQUFFLFNBQWtCO1FBQ3hGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxHQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxNQUFNLEVBQUUs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QVUsRUFBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUM7NEJBQ3RELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4QkFJVSxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRWRpdG9yJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVNb25hY29FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gIEBJbnB1dCgpIG1vZGVsPzogTnVNb25hY29FZGl0b3JNb2RlbCB8IG51bGw7XG5cbiAgZ2V0IGVkaXRvcigpOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBoYXNNb2RlbCA9ICEhdGhpcy5tb2RlbDtcblxuICAgIGlmIChoYXNNb2RlbCkge1xuICAgICAgY29uc3QgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHRoaXMubW9kZWwhLnVyaSEgfHwgJycpO1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG9wdGlvbnMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgb3B0aW9ucy5tb2RlbC5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBsYW5ndWFnZSwgdXJpIH0gPSB0aGlzLm1vZGVsITtcbiAgICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodmFsdWUgfHwgdGhpcy5fdmFsdWUsIGxhbmd1YWdlLCB1cmkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPSBudWxsKSBvcHRpb25zLnJlYWRPbmx5ID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucykpO1xuXG4gICAgaWYgKCFoYXNNb2RlbCkge1xuICAgICAgZWRpdG9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG5cbiAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcblxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0b3Iub25EaWRCbHVyRWRpdG9yV2lkZ2V0KCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJlc2l6ZSgpO1xuICAgIGVkaXRvclxuICAgICAgLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpXG4gICAgICAucnVuKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoaW5pdEV2ZW50ID8gJ2luaXQnIDogJ3JlLWluaXQnKSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19