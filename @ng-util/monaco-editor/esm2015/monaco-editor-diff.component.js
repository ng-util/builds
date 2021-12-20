import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
export class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        const theme = options.theme;
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff(() => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
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
            },] }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NuMonacoEditorDiffComponent.propDecorators = {
    old: [{ type: Input }],
    new: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWFwRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsa0JBQWtCO0lBSWpFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQThDLENBQUM7SUFDN0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUEyRCxFQUFFLFNBQWtCO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7UUFFRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQUUsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlELE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0YsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILHNCQUFzQjtRQUN0QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxTQUFTO29CQUM1QixnQkFBZ0IsRUFBRSxRQUFRO2lCQUMzQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JCYXNlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWRpZmYtZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TW9uYWNvRGlmZkVkaXRvcicsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JEaWZmQ29tcG9uZW50IGV4dGVuZHMgTnVNb25hY29FZGl0b3JCYXNlIHtcbiAgQElucHV0KCkgb2xkITogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG4gIEBJbnB1dCgpIG5ldyE6IE51TW9uYWNvRWRpdG9yRGlmZk1vZGVsO1xuXG4gIGdldCBlZGl0b3IoKTogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIH1cblxuICBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub2xkIHx8ICF0aGlzLm5ldykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdvbGQgb3IgbmV3IG5vdCBmb3VuZCBmb3IgbnUtbW9uYWNvLWRpZmYtZWRpdG9yJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPSBudWxsKSBvcHRpb25zLnJlYWRPbmx5ID0gdGhpcy5fZGlzYWJsZWQ7XG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICBvcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgZWRpdG9yLnNldE1vZGVsKHtcbiAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMub2xkLmNvZGUsIHRoaXMub2xkLmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2UpLFxuICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uZXcuY29kZSwgdGhpcy5uZXcubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgZWRpdG9yLm9uRGlkVXBkYXRlRGlmZigoKSA9PiB0aGlzLm5vdGlmeUV2ZW50KCd1cGRhdGUtZGlmZicsIHsgZGlmZlZhbHVlOiBlZGl0b3IuZ2V0TW9kaWZpZWRFZGl0b3IoKS5nZXRWYWx1ZSgpIH0pKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXNpemUoKTtcbiAgICBpZiAoaW5pdEV2ZW50KSB0aGlzLm5vdGlmeUV2ZW50KCdpbml0Jyk7XG4gIH1cbn1cbiJdfQ==