import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMonacoEditorDiffComponent } from './monaco-editor-diff.component';
import { NuMonacoEditorComponent } from './monaco-editor.component';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import * as i0 from "@angular/core";
const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
export class NuMonacoEditorModule {
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.1", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZGLE1BQU0sVUFBVSxHQUFHLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQU0xRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3BFLENBQUM7SUFDSixDQUFDO2lJQU5VLG9CQUFvQjtrSUFBcEIsb0JBQW9CLFlBSHJCLFlBQVksRUFISix1QkFBdUIsRUFBRSwyQkFBMkIsYUFBcEQsdUJBQXVCLEVBQUUsMkJBQTJCO2tJQU0zRCxvQkFBb0IsWUFIckIsWUFBWTs7MkZBR1gsb0JBQW9CO2tCQUpoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3ItZGlmZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051TW9uYWNvRWRpdG9yQ29tcG9uZW50LCBOdU1vbmFjb0VkaXRvckRpZmZDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCAuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVNb25hY29FZGl0b3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOdU1vbmFjb0VkaXRvckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TnVNb25hY29FZGl0b3JNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE51TW9uYWNvRWRpdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOVV9NT05BQ09fRURJVE9SX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=