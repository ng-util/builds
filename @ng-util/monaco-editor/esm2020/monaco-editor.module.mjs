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
}
/** @nocollapse */ NuMonacoEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ NuMonacoEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NuMonacoEditorModule, declarations: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent], imports: [CommonModule], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] });
/** @nocollapse */ NuMonacoEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NuMonacoEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXZGLE1BQU0sVUFBVSxHQUFHLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQU8xRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBNkI7UUFDMUMsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3BFLENBQUM7SUFDSixDQUFDOztxSUFOVSxvQkFBb0I7c0lBQXBCLG9CQUFvQixpQkFQYix1QkFBdUIsRUFBRSwyQkFBMkIsYUFHNUQsWUFBWSxhQUhKLHVCQUF1QixFQUFFLDJCQUEyQjtzSUFPM0Qsb0JBQW9CLFlBSnRCLENBQUMsWUFBWSxDQUFDOzRGQUlaLG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci1kaWZmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbTnVNb25hY29FZGl0b3JDb21wb25lbnQsIE51TW9uYWNvRWRpdG9yRGlmZkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE51TW9uYWNvRWRpdG9yTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTnVNb25hY29FZGl0b3JDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE51TW9uYWNvRWRpdG9yTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOdU1vbmFjb0VkaXRvck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTlVfTU9OQUNPX0VESVRPUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19