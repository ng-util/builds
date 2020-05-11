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
    /**
     * @param {?} options
     * @return {?}
     */
    NuMonacoEditorDiffComponent.prototype.initMonaco = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-editor-diff');
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
        this.registerResize().notifyEvent('init');
    };
    NuMonacoEditorDiffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nu-monaco-editor-diff',
                    template: "",
                    host: {
                        '[style.display]': "'block'",
                        '[style.height.px]': 'height',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWRpZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3BFO0lBU2lELCtDQUFrQjtJQVRuRTs7SUE4QkEsQ0FBQzs7Ozs7SUFqQkMsZ0RBQVU7Ozs7SUFBVixVQUFXLE9BQTJEO1FBQXRFLGlCQWdCQztRQWZDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7O1lBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUNyQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFyRixDQUFxRixFQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixpQkFBaUIsRUFBRSxTQUFTO3dCQUM1QixtQkFBbUIsRUFBRSxRQUFRO3FCQUM5QjtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OztzQkFFRSxLQUFLO3NCQUNMLEtBQUs7O0lBbUJSLGtDQUFDO0NBQUEsQUE5QkQsQ0FTaUQsa0JBQWtCLEdBcUJsRTtTQXJCWSwyQkFBMkI7OztJQUN0QywwQ0FBc0M7O0lBQ3RDLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckJhc2UgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JEaWZmTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZWRpdG9yLWRpZmYnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JEaWZmQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIHtcbiAgQElucHV0KCkgb2xkOiBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbDtcbiAgQElucHV0KCkgbmV3OiBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbDtcblxuICBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9sZCB8fCAhdGhpcy5uZXcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb2xkIG9yIG5ldyBub3QgZm91bmQgZm9yIG51LW1vbmFjby1lZGl0b3ItZGlmZicpO1xuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lID0gb3B0aW9ucy50aGVtZTtcbiAgICBjb25zdCBlZGl0b3IgPSAodGhpcy5fZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGVEaWZmRWRpdG9yKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucykpO1xuICAgIG9wdGlvbnMudGhlbWUgPSB0aGVtZTtcbiAgICBlZGl0b3Iuc2V0TW9kZWwoe1xuICAgICAgb3JpZ2luYWw6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5vbGQuY29kZSwgdGhpcy5vbGQubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgICBtb2RpZmllZDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm5ldy5jb2RlLCB0aGlzLm5ldy5sYW5ndWFnZSB8fCBvcHRpb25zLmxhbmd1YWdlKSxcbiAgICB9KTtcblxuICAgIGVkaXRvci5vbkRpZFVwZGF0ZURpZmYoKCkgPT4gdGhpcy5ub3RpZnlFdmVudCgndXBkYXRlLWRpZmYnLCB7IGRpZmZWYWx1ZTogZWRpdG9yLmdldE1vZGlmaWVkRWRpdG9yKCkuZ2V0VmFsdWUoKSB9KSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCkubm90aWZ5RXZlbnQoJ2luaXQnKTtcbiAgfVxufVxuIl19