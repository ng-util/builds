/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-diff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
export class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
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
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        /** @type {?} */
        const theme = options.theme;
        /** @type {?} */
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff((/**
         * @return {?}
         */
        () => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() })));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
}
NuMonacoEditorDiffComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-monaco-diff-editor',
                template: ``,
                exportAs: 'nuMonacoDiffEditor',
                host: {
                    '[style.display]': `'block'`,
                    '[style.height]': 'height',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMonacoEditorDiffComponent.propDecorators = {
    old: [{ type: Input }],
    new: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NuMonacoEditorDiffComponent.prototype.old;
    /** @type {?} */
    NuMonacoEditorDiffComponent.prototype.new;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBYXBFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxrQkFBa0I7Ozs7SUFJakUsSUFBSSxNQUFNO1FBQ1IsT0FBTyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUF1QyxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUEyRCxFQUFFLFNBQWtCO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7O2NBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztjQUNyQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILHNCQUFzQjtRQUN0QixNQUFNLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksU0FBUztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsU0FBUztvQkFDNUIsZ0JBQWdCLEVBQUUsUUFBUTtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUs7Ozs7SUFETiwwQ0FBc0M7O0lBQ3RDLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckJhc2UgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JEaWZmTW9kZWwgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tb25hY28tZGlmZi1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGV4cG9ydEFzOiAnbnVNb25hY29EaWZmRWRpdG9yJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnQgZXh0ZW5kcyBOdU1vbmFjb0VkaXRvckJhc2Uge1xuICBASW5wdXQoKSBvbGQ6IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsO1xuICBASW5wdXQoKSBuZXc6IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsO1xuXG4gIGdldCBlZGl0b3IoKTogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIH1cblxuICBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub2xkIHx8ICF0aGlzLm5ldykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbGQgb3IgbmV3IG5vdCBmb3VuZCBmb3IgbnUtbW9uYWNvLWRpZmYtZWRpdG9yJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuICAgIGNvbnN0IGVkaXRvciA9ICh0aGlzLl9lZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZURpZmZFZGl0b3IodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKSk7XG4gICAgb3B0aW9ucy50aGVtZSA9IHRoZW1lO1xuICAgIGVkaXRvci5zZXRNb2RlbCh7XG4gICAgICBvcmlnaW5hbDogbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLm9sZC5jb2RlLCB0aGlzLm9sZC5sYW5ndWFnZSB8fCBvcHRpb25zLmxhbmd1YWdlKSxcbiAgICAgIG1vZGlmaWVkOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMubmV3LmNvZGUsIHRoaXMubmV3Lmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2UpLFxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5zZXREaXNhYmxlZCgpO1xuICAgIGVkaXRvci5vbkRpZFVwZGF0ZURpZmYoKCkgPT4gdGhpcy5ub3RpZnlFdmVudCgndXBkYXRlLWRpZmYnLCB7IGRpZmZWYWx1ZTogZWRpdG9yLmdldE1vZGlmaWVkRWRpdG9yKCkuZ2V0VmFsdWUoKSB9KSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUmVzaXplKCk7XG4gICAgaWYgKGluaXRFdmVudCkgdGhpcy5ub3RpZnlFdmVudCgnaW5pdCcpO1xuICB9XG59XG4iXX0=