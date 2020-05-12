/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-diff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
var NuMonacoEditorDiffComponent = /** @class */ (function (_super) {
    __extends(NuMonacoEditorDiffComponent, _super);
    function NuMonacoEditorDiffComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NuMonacoEditorDiffComponent.prototype, "editor", {
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
    NuMonacoEditorDiffComponent.prototype.initMonaco = /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    function (options, initEvent) {
        var _this = this;
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        /** @type {?} */
        var theme = options.theme;
        /** @type {?} */
        var editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff((/**
         * @return {?}
         */
        function () { return _this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }); }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    };
    NuMonacoEditorDiffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: "",
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorDiffComponent.propDecorators = {
        old: [{ type: Input }],
        new: [{ type: Input }]
    };
    return NuMonacoEditorDiffComponent;
}(NuMonacoEditorBase));
export { NuMonacoEditorDiffComponent };
if (false) {
    /** @type {?} */
    NuMonacoEditorDiffComponent.prototype.old;
    /** @type {?} */
    NuMonacoEditorDiffComponent.prototype.new;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWRpZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3BFO0lBVWlELCtDQUFrQjtJQVZuRTs7SUFxQ0EsQ0FBQztJQXZCQyxzQkFBSSwrQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUF1QyxDQUFDO1FBQzdELENBQUM7OztPQUFBOzs7Ozs7SUFFRCxnREFBVTs7Ozs7SUFBVixVQUFXLE9BQTJELEVBQUUsU0FBa0I7UUFBMUYsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7O1lBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUNyQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILHNCQUFzQjtRQUN0QixNQUFNLENBQUMsZUFBZTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBckYsQ0FBcUYsRUFBQyxDQUFDO1FBRXBILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLFNBQVM7d0JBQzVCLGdCQUFnQixFQUFFLFFBQVE7cUJBQzNCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7O3NCQUVFLEtBQUs7c0JBQ0wsS0FBSzs7SUF5QlIsa0NBQUM7Q0FBQSxBQXJDRCxDQVVpRCxrQkFBa0IsR0EyQmxFO1NBM0JZLDJCQUEyQjs7O0lBQ3RDLDBDQUFzQzs7SUFDdEMsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQmFzZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1vbmFjby1kaWZmLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZXhwb3J0QXM6ICdudU1vbmFjb0RpZmZFZGl0b3InLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudCBleHRlbmRzIE51TW9uYWNvRWRpdG9yQmFzZSB7XG4gIEBJbnB1dCgpIG9sZDogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG4gIEBJbnB1dCgpIG5ldzogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG5cbiAgZ2V0IGVkaXRvcigpOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvcjtcbiAgfVxuXG4gIGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5vbGQgfHwgIXRoaXMubmV3KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZCBvciBuZXcgbm90IGZvdW5kIGZvciBudS1tb25hY28tZGlmZi1lZGl0b3InKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICBvcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgZWRpdG9yLnNldE1vZGVsKHtcbiAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMub2xkLmNvZGUsIHRoaXMub2xkLmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2UpLFxuICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uZXcuY29kZSwgdGhpcy5uZXcubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgZWRpdG9yLm9uRGlkVXBkYXRlRGlmZigoKSA9PiB0aGlzLm5vdGlmeUV2ZW50KCd1cGRhdGUtZGlmZicsIHsgZGlmZlZhbHVlOiBlZGl0b3IuZ2V0TW9kaWZpZWRFZGl0b3IoKS5nZXRWYWx1ZSgpIH0pKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXNpemUoKTtcbiAgICBpZiAoaW5pdEV2ZW50KSB0aGlzLm5vdGlmeUV2ZW50KCdpbml0Jyk7XG4gIH1cbn1cbiJdfQ==