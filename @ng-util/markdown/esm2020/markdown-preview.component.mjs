import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NuMarkdownBaseComponent } from './markdown-base.component';
import * as i0 from "@angular/core";
export class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    init() {
        this.ngZone.runOutsideAngular(async () => {
            await Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        });
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownPreviewComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ NuMarkdownPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: NuMarkdownPreviewComponent, selector: "nu-markdown-preview", exportAs: ["nuMarkdownPreview"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown-preview',
                    template: ``,
                    exportAs: 'nuMarkdownPreview',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVVwRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQXVCO0lBQzNELElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NkpBUFUsMEJBQTBCO2lKQUExQiwwQkFBMEIsbUhBSjNCLEVBQUU7MkZBSUQsMEJBQTBCO2tCQU50QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TWFya2Rvd25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudCc7XG5cbmRlY2xhcmUgdmFyIFZkaXRvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tYXJrZG93bi1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBleHBvcnRBczogJ251TWFya2Rvd25QcmV2aWV3JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25QcmV2aWV3Q29tcG9uZW50IGV4dGVuZHMgTnVNYXJrZG93bkJhc2VDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBWZGl0b3IucHJldmlldyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3ZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVhZHkuZW1pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==