import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorDiffComponent } from './monaco-editor-diff.component';
import { NuMonacoEditorComponent } from './monaco-editor.component';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
export class NuMonacoEditorModule {
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
}
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
NuMonacoEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NuMonacoEditorBase, ...COMPONENTS],
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkYsTUFBTSxVQUFVLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0FBTzFFLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7Ozs7WUFYRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLFVBQVUsQ0FBQztnQkFDakQsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQmFzZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItZGlmZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051TW9uYWNvRWRpdG9yQ29tcG9uZW50LCBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnVNb25hY29FZGl0b3JCYXNlLCAuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOdU1vbmFjb0VkaXRvckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TnVNb25hY29FZGl0b3JNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE51TW9uYWNvRWRpdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOVV9NT05BQ09fRURJVE9SX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=