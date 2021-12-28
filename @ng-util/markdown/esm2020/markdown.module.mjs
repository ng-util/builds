import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NuMarkdownPreviewComponent } from './markdown-preview.component';
import { NuMarkdownComponent } from './markdown.component';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
export class NuMarkdownModule {
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
        };
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownModule, declarations: [NuMarkdownComponent, NuMarkdownPreviewComponent], imports: [CommonModule], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] });
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpFLE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQU9yRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDOzttSkFOVSxnQkFBZ0I7b0pBQWhCLGdCQUFnQixpQkFQVCxtQkFBbUIsRUFBRSwwQkFBMEIsYUFHdkQsWUFBWSxhQUhKLG1CQUFtQixFQUFFLDBCQUEwQjtvSkFPdEQsZ0JBQWdCLFlBSmxCLENBQUMsWUFBWSxDQUFDOzJGQUlaLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TWFya2Rvd25QcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW051TWFya2Rvd25Db21wb25lbnQsIE51TWFya2Rvd25QcmV2aWV3Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93bk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IE51TWFya2Rvd25Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE51TWFya2Rvd25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE51TWFya2Rvd25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5VX01BUktET1dOX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=