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
        function () { return _this.notifyEvent(initEvent ? 'init' : 're-init'); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctdXRpbC9tb25hY28tZWRpdG9yLyIsInNvdXJjZXMiOlsibW9uYWNvLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdwRTtJQWlCNkMsMkNBQWtCO0lBakIvRDtRQUFBLHFFQXFGQztRQW5FUyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBUVosY0FBUTs7OztRQUFHLFVBQUMsQ0FBUyxJQUFNLENBQUMsRUFBQztRQUM3QixlQUFTOzs7UUFBRyxjQUFPLENBQUMsRUFBQzs7SUEwRC9CLENBQUM7SUEvREMsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBdUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTs7Ozs7O0lBS0QsNENBQVU7Ozs7O0lBQVYsVUFBVyxPQUEyRCxFQUFFLFNBQWtCO1FBQTFGLGlCQW1DQzs7WUFsQ08sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztRQUU3QixJQUFJLFFBQVEsRUFBRTs7Z0JBQ04sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDO1lBQzNELElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFD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U0FwRVksdUJBQXVCOzs7Ozs7SUFDbEMseUNBQW9COztJQUVwQix3Q0FBb0M7Ozs7O0lBTXBDLDJDQUFxQzs7Ozs7SUFDckMsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQmFzZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvck1vZGVsIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZXhwb3J0QXM6ICdudU1vbmFjb0VkaXRvcicsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE51TW9uYWNvRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCBleHRlbmRzIE51TW9uYWNvRWRpdG9yQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAnJztcblxuICBASW5wdXQoKSBtb2RlbDogTnVNb25hY29FZGl0b3JNb2RlbDtcblxuICBnZXQgZWRpdG9yKCk6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGhhc01vZGVsID0gISF0aGlzLm1vZGVsO1xuXG4gICAgaWYgKGhhc01vZGVsKSB7XG4gICAgICBjb25zdCBtb2RlbCA9IG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodGhpcy5tb2RlbC51cmkhIHx8ICcnKTtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBvcHRpb25zLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIG9wdGlvbnMubW9kZWwuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbGFuZ3VhZ2UsIHVyaSB9ID0gdGhpcy5tb2RlbCE7XG4gICAgICAgIG9wdGlvbnMubW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHZhbHVlIHx8IHRoaXMuX3ZhbHVlLCBsYW5ndWFnZSwgdXJpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlZGl0b3IgPSAodGhpcy5fZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKSk7XG5cbiAgICBpZiAoIWhhc01vZGVsKSB7XG4gICAgICBlZGl0b3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGVkaXRvci5vbkRpZEJsdXJFZGl0b3JXaWRnZXQoKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCk7XG4gICAgZWRpdG9yXG4gICAgICAuZ2V0QWN0aW9uKCdlZGl0b3IuYWN0aW9uLmZvcm1hdERvY3VtZW50JylcbiAgICAgIC5ydW4oKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ub3RpZnlFdmVudChpbml0RXZlbnQgPyAnaW5pdCcgOiAncmUtaW5pdCcpKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgKHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcikuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gX2lzRGlzYWJsZWQ7XG4gICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICB9XG59XG4iXX0=