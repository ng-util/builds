/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
var NuMonacoEditorComponent = /** @class */ (function (_super) {
    __extends(NuMonacoEditorComponent, _super);
    function NuMonacoEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = '';
        _this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { });
        return _this;
    }
    Object.defineProperty(NuMonacoEditorComponent.prototype, "editor", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this._editor));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.initMonaco = /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    function (options, initEvent) {
        var _this = this;
        /** @type {?} */
        var hasModel = !!this.model;
        if (hasModel) {
            /** @type {?} */
            var model = monaco.editor.getModel((/** @type {?} */ (this.model.uri)) || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                var _a = (/** @type {?} */ (this.model)), value = _a.value, language = _a.language, uri = _a.uri;
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        /** @type {?} */
        var editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = editor.getValue();
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._value = value;
                _this.onChange(value);
            }));
        }));
        editor.onDidBlurEditorWidget((/**
         * @return {?}
         */
        function () { return _this.onTouched(); }));
        this.registerResize();
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then((/**
         * @return {?}
         */
        function () {
            // this.setDisabled();
            _this.notifyEvent(initEvent ? 'init' : 're-init');
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value || '';
        if (this._editor) {
            ((/** @type {?} */ (this._editor))).setValue(this._value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.setDisabledState = /**
     * @param {?} _isDisabled
     * @return {?}
     */
    function (_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    };
    NuMonacoEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nu-monaco-editor',
                    template: "",
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NuMonacoEditorComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorComponent.propDecorators = {
        model: [{ type: Input }]
    };
    return NuMonacoEditorComponent;
}(NuMonacoEditorBase));
export { NuMonacoEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctdXRpbC9tb25hY28tZWRpdG9yLyIsInNvdXJjZXMiOlsibW9uYWNvLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdwRTtJQWlCNkMsMkNBQWtCO0lBakIvRDtRQUFBLHFFQXdGQztRQXRFUyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBUVosY0FBUTs7OztRQUFHLFVBQUMsQ0FBUyxJQUFNLENBQUMsRUFBQztRQUM3QixlQUFTOzs7UUFBRyxjQUFPLENBQUMsRUFBQzs7SUE2RC9CLENBQUM7SUFsRUMsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBdUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTs7Ozs7O0lBS0QsNENBQVU7Ozs7O0lBQVYsVUFBVyxPQUEyRCxFQUFFLFNBQWtCO1FBQTFGLGlCQXNDQzs7WUFyQ08sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztRQUU3QixJQUFJLFFBQVEsRUFBRTs7Z0JBQ04sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDO1lBQzNELElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFD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QWtCLEdBdUU5RDtTQXZFWSx1QkFBdUI7Ozs7OztJQUNsQyx5Q0FBb0I7O0lBRXBCLHdDQUFvQzs7Ozs7SUFNcEMsMkNBQXFDOzs7OztJQUNyQyw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRWRpdG9yJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVNb25hY29FZGl0b3JDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF92YWx1ZSA9ICcnO1xuXG4gIEBJbnB1dCgpIG1vZGVsOiBOdU1vbmFjb0VkaXRvck1vZGVsO1xuXG4gIGdldCBlZGl0b3IoKTogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3I7XG4gIH1cblxuICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IHN0cmluZykgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucywgaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgaGFzTW9kZWwgPSAhIXRoaXMubW9kZWw7XG5cbiAgICBpZiAoaGFzTW9kZWwpIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gbW9uYWNvLmVkaXRvci5nZXRNb2RlbCh0aGlzLm1vZGVsLnVyaSEgfHwgJycpO1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG9wdGlvbnMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgb3B0aW9ucy5tb2RlbC5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBsYW5ndWFnZSwgdXJpIH0gPSB0aGlzLm1vZGVsITtcbiAgICAgICAgb3B0aW9ucy5tb2RlbCA9IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodmFsdWUgfHwgdGhpcy5fdmFsdWUsIGxhbmd1YWdlLCB1cmkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRvciA9ICh0aGlzLl9lZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcblxuICAgIGlmICghaGFzTW9kZWwpIHtcbiAgICAgIGVkaXRvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuXG4gICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWRpdG9yLmdldFZhbHVlKCk7XG5cbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZWRpdG9yLm9uRGlkQmx1ckVkaXRvcldpZGdldCgoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXNpemUoKTtcbiAgICBlZGl0b3JcbiAgICAgIC5nZXRBY3Rpb24oJ2VkaXRvci5hY3Rpb24uZm9ybWF0RG9jdW1lbnQnKVxuICAgICAgLnJ1bigpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlFdmVudChpbml0RXZlbnQgPyAnaW5pdCcgOiAncmUtaW5pdCcpO1xuICAgICAgfSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IF9pc0Rpc2FibGVkO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxufVxuIl19