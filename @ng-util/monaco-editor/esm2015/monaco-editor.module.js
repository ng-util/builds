/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMonacoEditorDiffComponent } from './monaco-editor-diff.component';
import { NuMonacoEditorComponent } from './monaco-editor.component';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
/** @type {?} */
const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
export class NuMonacoEditorModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
}
NuMonacoEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7TUFFakYsVUFBVSxHQUFHLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7QUFPekUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7OztZQVhGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JEaWZmQ29tcG9uZW50IH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLWRpZmYuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbmZpZywgTlVfTU9OQUNPX0VESVRPUl9DT05GSUcgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdU1vbmFjb0VkaXRvckNvbXBvbmVudCwgTnVNb25hY29FZGl0b3JEaWZmQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOdU1vbmFjb0VkaXRvckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TnVNb25hY29FZGl0b3JNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE51TW9uYWNvRWRpdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOVV9NT05BQ09fRURJVE9SX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=