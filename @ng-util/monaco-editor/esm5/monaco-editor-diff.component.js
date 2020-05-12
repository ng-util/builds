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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWRpZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3BFO0lBVWlELCtDQUFrQjtJQVZuRTs7SUFvQ0EsQ0FBQztJQXRCQyxzQkFBSSwrQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUF1QyxDQUFDO1FBQzdELENBQUM7OztPQUFBOzs7Ozs7SUFFRCxnREFBVTs7Ozs7SUFBVixVQUFXLE9BQTJELEVBQUUsU0FBa0I7UUFBMUYsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7O1lBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUNyQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFyRixDQUFxRixFQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksU0FBUztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsU0FBUzt3QkFDNUIsZ0JBQWdCLEVBQUUsUUFBUTtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7c0JBRUUsS0FBSztzQkFDTCxLQUFLOztJQXdCUixrQ0FBQztDQUFBLEFBcENELENBVWlELGtCQUFrQixHQTBCbEU7U0ExQlksMkJBQTJCOzs7SUFDdEMsMENBQXNDOztJQUN0QywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWRpZmYtZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRGlmZkVkaXRvcicsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JEaWZmQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIHtcbiAgQElucHV0KCkgb2xkOiBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbDtcbiAgQElucHV0KCkgbmV3OiBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbDtcblxuICBnZXQgZWRpdG9yKCk6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVEaWZmRWRpdG9yIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVEaWZmRWRpdG9yO1xuICB9XG5cbiAgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucywgaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9sZCB8fCAhdGhpcy5uZXcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb2xkIG9yIG5ldyBub3QgZm91bmQgZm9yIG51LW1vbmFjby1kaWZmLWVkaXRvcicpO1xuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICBjb25zdCBlZGl0b3IgPSAodGhpcy5fZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucykpO1xuICAgIG9wdGlvbnMudGhlbWUgPSB0aGVtZTtcbiAgICBlZGl0b3Iuc2V0TW9kZWwoe1xuICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5vbGQuY29kZSwgdGhpcy5vbGQubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm5ldy5jb2RlLCB0aGlzLm5ldy5sYW5ndWFnZSB8fCBvcHRpb25zLmxhbmd1YWdlKSxcbiAgICB9KTtcblxuICAgIGVkaXRvci5vbkRpZFVwZGF0ZURpZmYoKCkgPT4gdGhpcy5ub3RpZnlFdmVudCgndXBkYXRlLWRpZmYnLCB7IGRpZmZWYWx1ZTogZWRpdG9yLmdldE1vZGlmaWVkRWRpdG9yKCkuZ2V0VmFsdWUoKSB9KSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCk7XG4gICAgaWYgKGluaXRFdmVudCkgdGhpcy5ub3RpZnlFdmVudCgnaW5pdCcpO1xuICB9XG59XG4iXX0=