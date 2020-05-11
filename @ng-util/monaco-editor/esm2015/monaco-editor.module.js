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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctdXRpbC9tb25hY28tZWRpdG9yLyIsInNvdXJjZXMiOlsibW9uYWNvLWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUVqRixVQUFVLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztBQU96RSxNQUFNLE9BQU8sb0JBQW9COzs7OztJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQTZCO1FBQzFDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUNwRSxDQUFDO0lBQ0osQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItZGlmZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051TW9uYWNvRWRpdG9yQ29tcG9uZW50LCBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1vbmFjb0VkaXRvck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE51TW9uYWNvRWRpdG9yQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOdU1vbmFjb0VkaXRvck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnVNb25hY29FZGl0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5VX01PTkFDT19FRElUT1JfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==