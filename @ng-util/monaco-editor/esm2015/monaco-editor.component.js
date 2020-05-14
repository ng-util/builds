/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
export class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get editor() {
        return (/** @type {?} */ (this._editor));
    }
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    initMonaco(options, initEvent) {
        /** @type {?} */
        const hasModel = !!this.model;
        if (hasModel) {
            /** @type {?} */
            const model = monaco.editor.getModel((/** @type {?} */ (this.model.uri)) || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = (/** @type {?} */ (this.model));
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        /** @type {?} */
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const value = editor.getValue();
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this._value = value;
                this.onChange(value);
            }));
        }));
        editor.onDidBlurEditorWidget((/**
         * @return {?}
         */
        () => this.onTouched()));
        this.registerResize();
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then((/**
         * @return {?}
         */
        () => this.notifyEvent(initEvent ? 'init' : 're-init')));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value || '';
        if (this._editor) {
            ((/** @type {?} */ (this._editor))).setValue(this._value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
NuMonacoEditorComponent.decorators = [
    { type: Component, args: [{
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
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NuMonacoEditorComponent)),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMonacoEditorComponent.propDecorators = {
    model: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMonacoEditorComponent.prototype._value;
    /** @type {?} */
    NuMonacoEditorComponent.prototype.model;
    /**
     * @type {?}
     * @private
     */
    NuMonacoEditorComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    NuMonacoEditorComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctdXRpbC9tb25hY28tZWRpdG9yLyIsInNvdXJjZXMiOlsibW9uYWNvLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBb0JwRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsa0JBQWtCO0lBakIvRDs7UUFrQlUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQVFaLGFBQVE7Ozs7UUFBRyxDQUFDLENBQVMsRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQzdCLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQTBEL0IsQ0FBQzs7OztJQS9EQyxJQUFJLE1BQU07UUFDUixPQUFPLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQXVDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLE9BQTJELEVBQUUsU0FBa0I7O2NBQ2xGLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFFN0IsSUFBSSxRQUFRLEVBQUU7O2tCQUNOLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsQ0FBQztZQUMzRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO2lC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ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckJhc2UgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JNb2RlbCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1vbmFjby1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGV4cG9ydEFzOiAnbnVNb25hY29FZGl0b3InLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBOdU1vbmFjb0VkaXRvckJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3ZhbHVlID0gJyc7XG5cbiAgQElucHV0KCkgbW9kZWw6IE51TW9uYWNvRWRpdG9yTW9kZWw7XG5cbiAgZ2V0IGVkaXRvcigpOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcjtcbiAgfVxuXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBoYXNNb2RlbCA9ICEhdGhpcy5tb2RlbDtcblxuICAgIGlmIChoYXNNb2RlbCkge1xuICAgICAgY29uc3QgbW9kZWwgPSBtb25hY28uZWRpdG9yLmdldE1vZGVsKHRoaXMubW9kZWwudXJpISB8fCAnJyk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICBvcHRpb25zLm1vZGVsLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGxhbmd1YWdlLCB1cmkgfSA9IHRoaXMubW9kZWwhO1xuICAgICAgICBvcHRpb25zLm1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh2YWx1ZSB8fCB0aGlzLl92YWx1ZSwgbGFuZ3VhZ2UsIHVyaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucykpO1xuXG4gICAgaWYgKCFoYXNNb2RlbCkge1xuICAgICAgZWRpdG9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG5cbiAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBlZGl0b3IuZ2V0VmFsdWUoKTtcblxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBlZGl0b3Iub25EaWRCbHVyRWRpdG9yV2lkZ2V0KCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJlc2l6ZSgpO1xuICAgIGVkaXRvclxuICAgICAgLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpXG4gICAgICAucnVuKClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoaW5pdEV2ZW50ID8gJ2luaXQnIDogJ3JlLWluaXQnKSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19