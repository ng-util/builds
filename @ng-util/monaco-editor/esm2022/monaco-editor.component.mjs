import { booleanAttribute, ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { take, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PlaceholderWidget } from './placholder.widget';
import * as i0 from "@angular/core";
export class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.autoFormat = true;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set placeholder(v) {
        this._placeholder = v;
        this._placeholderWidget?.update(v);
    }
    get editor() {
        return this._editor;
    }
    togglePlaceholder() {
        const text = this._placeholder;
        if (text == null || text.length <= 0 || this.editor == null)
            return;
        if (this._placeholderWidget == null) {
            this._placeholderWidget = new PlaceholderWidget(this.editor, text);
        }
        if (this._value.length > 0) {
            this.editor.removeContentWidget(this._placeholderWidget);
        }
        else {
            this.editor.addContentWidget(this._placeholderWidget);
        }
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
            this.togglePlaceholder();
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.togglePlaceholder();
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.2.10", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { placeholder: "placeholder", model: "model", autoFormat: ["autoFormat", "autoFormat", booleanAttribute] }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMonacoEditorComponent)),
                multi: true,
            },
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
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
        }], propDecorators: { placeholder: [{
                type: Input
            }], model: [{
                type: Input
            }], autoFormat: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBb0J4RCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCO0lBbEIvRDs7UUFtQlUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVVvQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBcUJsRCxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBd0U5QjtJQXBHQyxJQUNJLFdBQVcsQ0FBQyxDQUE0QjtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFJRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUE4QyxDQUFDO0lBQzdELENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxD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Q0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO2tJQXhHVSx1QkFBdUI7c0hBQXZCLHVCQUF1QixtSkFXZCxnQkFBZ0IsZ0dBckJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUM7Z0JBQ3RELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwrRUFaUyxFQUFFOzs0RkFnQkQsdUJBQXVCO2tCQWxCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsU0FBUzt3QkFDNUIsZ0JBQWdCLEVBQUUsUUFBUTtxQkFDM0I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLEVBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFDOzRCQUN0RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU9LLFdBQVc7c0JBRGQsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2tDLFVBQVU7c0JBQWpELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuaW1wb3J0IHsgdGFrZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyV2lkZ2V0IH0gZnJvbSAnLi9wbGFjaG9sZGVyLndpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1vbmFjby1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGV4cG9ydEFzOiAnbnVNb25hY29FZGl0b3InLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBOdU1vbmFjb0VkaXRvckJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3ZhbHVlID0gJyc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyV2lkZ2V0PzogUGxhY2Vob2xkZXJXaWRnZXQ7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyPzogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodjogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdjtcbiAgICB0aGlzLl9wbGFjZWhvbGRlcldpZGdldD8udXBkYXRlKHYpO1xuICB9XG4gIEBJbnB1dCgpIG1vZGVsPzogTnVNb25hY29FZGl0b3JNb2RlbCB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvRm9ybWF0ID0gdHJ1ZTtcblxuICBnZXQgZWRpdG9yKCk6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3QgdGV4dCA9IHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgIGlmICh0ZXh0ID09IG51bGwgfHwgdGV4dC5sZW5ndGggPD0gMCB8fCB0aGlzLmVkaXRvciA9PSBudWxsKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXJXaWRnZXQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJXaWRnZXQgPSBuZXcgUGxhY2Vob2xkZXJXaWRnZXQodGhpcy5lZGl0b3IsIHRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl92YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmVkaXRvci5yZW1vdmVDb250ZW50V2lkZ2V0KHRoaXMuX3BsYWNlaG9sZGVyV2lkZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3IuYWRkQ29udGVudFdpZGdldCh0aGlzLl9wbGFjZWhvbGRlcldpZGdldCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGhhc01vZGVsID0gISF0aGlzLm1vZGVsO1xuXG4gICAgaWYgKGhhc01vZGVsKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodGhpcy5tb2RlbCEudXJpISB8fCAnJyk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICBvcHRpb25zLm1vZGVsLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGxhbmd1YWdlLCB1cmkgfSA9IHRoaXMubW9kZWwhO1xuICAgICAgICBvcHRpb25zLm1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh2YWx1ZSB8fCB0aGlzLl92YWx1ZSwgbGFuZ3VhZ2UsIHVyaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICE9IG51bGwpIG9wdGlvbnMucmVhZE9ubHkgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICBjb25zdCBlZGl0b3IgPSAodGhpcy5fZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKSk7XG5cbiAgICBpZiAoIWhhc01vZGVsKSB7XG4gICAgICBlZGl0b3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRvZ2dsZVBsYWNlaG9sZGVyKCk7XG4gICAgfSk7XG4gICAgZWRpdG9yLm9uRGlkQmx1ckVkaXRvcldpZGdldCgoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcblxuICAgIHRoaXMudG9nZ2xlUGxhY2Vob2xkZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCk7XG5cbiAgICBjb25zdCBldmVudE5hbWUgPSBpbml0RXZlbnQgPyAnaW5pdCcgOiAncmUtaW5pdCc7XG4gICAgaWYgKHRoaXMuYXV0b0Zvcm1hdCkge1xuICAgICAgdGltZXIodGhpcy5fY29uZmlnLmF1dG9Gb3JtYXRUaW1lISlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpLCB0YWtlKDEpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBlZGl0b3IuZ2V0QWN0aW9uKCdlZGl0b3IuYWN0aW9uLmZvcm1hdERvY3VtZW50Jyk7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbi5ydW4oKS50aGVuKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoZXZlbnROYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeUV2ZW50KGV2ZW50TmFtZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpPy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19