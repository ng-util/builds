/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-diff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
export class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    /**
     * @param {?} options
     * @return {?}
     */
    initMonaco(options) {
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-editor-diff');
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
        editor.onDidUpdateDiff((/**
         * @return {?}
         */
        () => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() })));
        this.registerResize().notifyEvent('init');
    }
}
NuMonacoEditorDiffComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-monaco-editor-diff',
                template: ``,
                host: {
                    '[style.display]': `'block'`,
                    '[style.height.px]': 'height',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWRpZmYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFZcEUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGtCQUFrQjs7Ozs7SUFJakUsVUFBVSxDQUFDLE9BQTJEO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7O2NBRUssS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztjQUNyQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUVwSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLFNBQVM7b0JBQzVCLG1CQUFtQixFQUFFLFFBQVE7aUJBQzlCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7a0JBRUUsS0FBSztrQkFDTCxLQUFLOzs7O0lBRE4sMENBQXNDOztJQUN0QywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWVkaXRvci1kaWZmJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudCBleHRlbmRzIE51TW9uYWNvRWRpdG9yQmFzZSB7XG4gIEBJbnB1dCgpIG9sZDogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG4gIEBJbnB1dCgpIG5ldzogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG5cbiAgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vbGQgfHwgIXRoaXMubmV3KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZCBvciBuZXcgbm90IGZvdW5kIGZvciBudS1tb25hY28tZWRpdG9yLWRpZmYnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICBvcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgZWRpdG9yLnNldE1vZGVsKHtcbiAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMub2xkLmNvZGUsIHRoaXMub2xkLmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2UpLFxuICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uZXcuY29kZSwgdGhpcy5uZXcubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgfSk7XG5cbiAgICBlZGl0b3Iub25EaWRVcGRhdGVEaWZmKCgpID0+IHRoaXMubm90aWZ5RXZlbnQoJ3VwZGF0ZS1kaWZmJywgeyBkaWZmVmFsdWU6IGVkaXRvci5nZXRNb2RpZmllZEVkaXRvcigpLmdldFZhbHVlKCkgfSkpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJlc2l6ZSgpLm5vdGlmeUV2ZW50KCdpbml0Jyk7XG4gIH1cbn1cbiJdfQ==