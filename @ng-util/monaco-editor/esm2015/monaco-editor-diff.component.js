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
NuMonacoEditorDiffComponent.propDecorators = {
    old: [{ type: Input }],
    new: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWFwRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsa0JBQWtCO0lBSWpFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQThDLENBQUM7SUFDN0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUEyRCxFQUFFLFNBQWtCO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDbkU7UUFFRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzVCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0YsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pGLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzFGLENBQUMsQ0FBQztRQUVILHNCQUFzQjtRQUN0QixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsSUFBSSxFQUFFO29CQUNKLGlCQUFpQixFQUFFLFNBQVM7b0JBQzVCLGdCQUFnQixFQUFFLFFBQVE7aUJBQzNCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7a0JBRUUsS0FBSztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQmFzZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckRpZmZNb2RlbCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1vbmFjby1kaWZmLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZXhwb3J0QXM6ICdudU1vbmFjb0RpZmZFZGl0b3InLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudCBleHRlbmRzIE51TW9uYWNvRWRpdG9yQmFzZSB7XG4gIEBJbnB1dCgpIG9sZDogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG4gIEBJbnB1dCgpIG5ldzogTnVNb25hY29FZGl0b3JEaWZmTW9kZWw7XG5cbiAgZ2V0IGVkaXRvcigpOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvciB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvcjtcbiAgfVxuXG4gIGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5vbGQgfHwgIXRoaXMubmV3KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29sZCBvciBuZXcgbm90IGZvdW5kIGZvciBudS1tb25hY28tZGlmZi1lZGl0b3InKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgY29uc3QgZWRpdG9yID0gKHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICBvcHRpb25zLnRoZW1lID0gdGhlbWU7XG4gICAgZWRpdG9yLnNldE1vZGVsKHtcbiAgICAgIG9yaWdpbmFsOiBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKHRoaXMub2xkLmNvZGUsIHRoaXMub2xkLmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2UpLFxuICAgICAgbW9kaWZpZWQ6IG1vbmFjby5lZGl0b3IuY3JlYXRlTW9kZWwodGhpcy5uZXcuY29kZSwgdGhpcy5uZXcubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZSksXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgZWRpdG9yLm9uRGlkVXBkYXRlRGlmZigoKSA9PiB0aGlzLm5vdGlmeUV2ZW50KCd1cGRhdGUtZGlmZicsIHsgZGlmZlZhbHVlOiBlZGl0b3IuZ2V0TW9kaWZpZWRFZGl0b3IoKS5nZXRWYWx1ZSgpIH0pKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXNpemUoKTtcbiAgICBpZiAoaW5pdEV2ZW50KSB0aGlzLm5vdGlmeUV2ZW50KCdpbml0Jyk7XG4gIH1cbn1cbiJdfQ==