import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMonacoEditorDiffComponent } from './monaco-editor-diff.component';
import { NuMonacoEditorComponent } from './monaco-editor.component';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import * as i0 from "@angular/core";
const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
export class NuMonacoEditorModule {
    /**
     * Or use `provideNuMonacoEditorConfig` instead.
     */
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZGLE1BQU0sVUFBVSxHQUFHLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQU0xRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9COztPQUVHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUE2QjtRQUMxQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7a0lBVFUsb0JBQW9CO21JQUFwQixvQkFBb0IsWUFIckIsWUFBWSxFQUhKLHVCQUF1QixFQUFFLDJCQUEyQixhQUFwRCx1QkFBdUIsRUFBRSwyQkFBMkI7bUlBTTNELG9CQUFvQixZQUhyQixZQUFZOzs0RkFHWCxvQkFBb0I7a0JBSmhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDO29CQUN0QyxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbTnVNb25hY29FZGl0b3JDb21wb25lbnQsIE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1vbmFjb0VkaXRvck1vZHVsZSB7XG4gIC8qKlxuICAgKiBPciB1c2UgYHByb3ZpZGVOdU1vbmFjb0VkaXRvckNvbmZpZ2AgaW5zdGVhZC5cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE51TW9uYWNvRWRpdG9yQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOdU1vbmFjb0VkaXRvck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnVNb25hY29FZGl0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5VX01PTkFDT19FRElUT1JfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==