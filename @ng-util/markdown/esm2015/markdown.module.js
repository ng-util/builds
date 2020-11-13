/**
 * @fileoverview added by tsickle
 * Generated from: markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMarkdownPreviewComponent } from './markdown-preview.component';
import { NuMarkdownComponent } from './markdown.component';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
/** @type {?} */
const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
export class NuMarkdownModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
        };
    }
}
NuMarkdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duLyIsInNvdXJjZXMiOlsibWFya2Rvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFbkUsVUFBVSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUM7QUFPcEUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7OztZQVhGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNYXJrZG93blByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE51TWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29uZmlnLCBOVV9NQVJLRE9XTl9DT05GSUcgfSBmcm9tICcuL21hcmtkb3duLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbTnVNYXJrZG93bkNvbXBvbmVudCwgTnVNYXJrZG93blByZXZpZXdDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTnVNYXJrZG93bkNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TnVNYXJrZG93bk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnVNYXJrZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTlVfTUFSS0RPV05fQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==