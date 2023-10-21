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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule, NuMarkdownComponent, NuMarkdownPreviewComponent], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NuMarkdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vbWFya2Rvd24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXpFLE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQU1yRSxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQy9ELENBQUM7SUFDSixDQUFDO2tJQU5VLGdCQUFnQjttSUFBaEIsZ0JBQWdCLFlBSGpCLFlBQVksRUFISixtQkFBbUIsRUFBRSwwQkFBMEIsYUFBL0MsbUJBQW1CLEVBQUUsMEJBQTBCO21JQU10RCxnQkFBZ0IsWUFIakIsWUFBWTs7NEZBR1gsZ0JBQWdCO2tCQUo1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdU1hcmtkb3duUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vbWFya2Rvd24tcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJy4vbWFya2Rvd24uY29tcG9uZW50JztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtOdU1hcmtkb3duQ29tcG9uZW50LCBOdU1hcmtkb3duUHJldmlld0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogTnVNYXJrZG93bkNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TnVNYXJrZG93bk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTnVNYXJrZG93bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTlVfTUFSS0RPV05fQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==