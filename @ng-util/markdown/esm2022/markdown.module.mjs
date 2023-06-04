import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMarkdownPreviewComponent } from './markdown-preview.component';
import { NuMarkdownComponent } from './markdown.component';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
class NuMarkdownModule {
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule, NuMarkdownComponent, NuMarkdownPreviewComponent], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule] }); }
}
export { NuMarkdownModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpFLE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUVyRSxNQUlhLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQztpSUFOVSxnQkFBZ0I7a0lBQWhCLGdCQUFnQixZQUhqQixZQUFZLEVBSEosbUJBQW1CLEVBQUUsMEJBQTBCLGFBQS9DLG1CQUFtQixFQUFFLDBCQUEwQjtrSUFNdEQsZ0JBQWdCLFlBSGpCLFlBQVk7O1NBR1gsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSjVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDO29CQUN0QyxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TWFya2Rvd25QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051TWFya2Rvd25Db21wb25lbnQsIE51TWFya2Rvd25QcmV2aWV3Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBOdU1hcmtkb3duQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOdU1hcmtkb3duTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOdU1hcmtkb3duTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOVV9NQVJLRE9XTl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19