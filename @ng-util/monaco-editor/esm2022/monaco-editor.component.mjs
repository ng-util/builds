import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import * as i0 from "@angular/core";
class NuMonacoEditorComponent extends NuMonacoEditorBase {
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
        if (this.autoFormat) {
            editor
                .getAction('editor.action.formatDocument')
                .run()
                .then(() => this.notifyEvent(initEvent ? 'init' : 're-init'));
            return;
        }
        this.notifyEvent(initEvent ? 'init' : 're-init');
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { model: "model", autoFormat: "autoFormat" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMonacoEditorComponent)),
                multi: true,
            },
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { NuMonacoEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBR3BFLE1Ba0JhLHVCQUF3QixTQUFRLGtCQUFrQjtJQWxCL0Q7O1FBbUJVLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFHWCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBTW5CLGFBQVEsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzdCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7S0FnRTlCO0lBckVDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQThDLENBQUM7SUFDN0QsQ0FBQztJQUtELFVBQVUsQ0FBQyxPQUEyRCxFQUFFLFNBQWtCO1FBQ3hGLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTlCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQU0sQ0FBQyxHQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztp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RUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxTQUFTO3dCQUM1QixnQkFBZ0IsRUFBRSxRQUFRO3FCQUMzQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUM7NEJBQ3RELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBSVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRWRpdG9yJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVNb25hY29FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gIEBJbnB1dCgpIG1vZGVsPzogTnVNb25hY29FZGl0b3JNb2RlbCB8IG51bGw7XG4gIEBJbnB1dCgpIGF1dG9Gb3JtYXQgPSB0cnVlO1xuXG4gIGdldCBlZGl0b3IoKTogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3I7XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IHN0cmluZykgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucywgaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgaGFzTW9kZWwgPSAhIXRoaXMubW9kZWw7XG5cbiAgICBpZiAoaGFzTW9kZWwpIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbCh0aGlzLm1vZGVsIS51cmkhIHx8ICcnKTtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBvcHRpb25zLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIG9wdGlvbnMubW9kZWwuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbGFuZ3VhZ2UsIHVyaSB9ID0gdGhpcy5tb2RlbCE7XG4gICAgICAgIG9wdGlvbnMubW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHZhbHVlIHx8IHRoaXMuX3ZhbHVlLCBsYW5ndWFnZSwgdXJpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT0gbnVsbCkgb3B0aW9ucy5yZWFkT25seSA9IHRoaXMuX2Rpc2FibGVkO1xuICAgIGNvbnN0IGVkaXRvciA9ICh0aGlzLl9lZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcblxuICAgIGlmICghaGFzTW9kZWwpIHtcbiAgICAgIGVkaXRvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuXG4gICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWRpdG9yLmdldFZhbHVlKCk7XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdG9yLm9uRGlkQmx1ckVkaXRvcldpZGdldCgoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXNpemUoKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb3JtYXQpIHtcbiAgICAgIGVkaXRvclxuICAgICAgICAuZ2V0QWN0aW9uKCdlZGl0b3IuYWN0aW9uLmZvcm1hdERvY3VtZW50JylcbiAgICAgICAgLnJ1bigpXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoaW5pdEV2ZW50ID8gJ2luaXQnIDogJ3JlLWluaXQnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm90aWZ5RXZlbnQoaW5pdEV2ZW50ID8gJ2luaXQnIDogJ3JlLWluaXQnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgKHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcikuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gX2lzRGlzYWJsZWQ7XG4gICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICB9XG59XG4iXX0=