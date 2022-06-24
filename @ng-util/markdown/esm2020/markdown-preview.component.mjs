import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NuMarkdownBaseComponent } from './markdown-base.component';
import * as i0 from "@angular/core";
export class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    init() {
        this.ngZone.runOutsideAngular(async () => {
            await Vditor.preview(this.el.nativeElement, this._value);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        });
    }
}
/** @nocollapse */ NuMarkdownPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NuMarkdownPreviewComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMarkdownPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: NuMarkdownPreviewComponent, isStandalone: true, selector: "nu-markdown-preview", exportAs: ["nuMarkdownPreview"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: NuMarkdownPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown-preview',
                    template: ``,
                    exportAs: 'nuMarkdownPreview',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVdwRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQXVCO0lBQzNELElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBJQU5VLDBCQUEwQjs4SEFBMUIsMEJBQTBCLHVJQUwzQixFQUFFOzJGQUtELDBCQUEwQjtrQkFQdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLWJhc2UuY29tcG9uZW50JztcblxuZGVjbGFyZSB2YXIgVmRpdG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1hcmtkb3duLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGV4cG9ydEFzOiAnbnVNYXJrZG93blByZXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93blByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IFZkaXRvci5wcmV2aWV3KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVhZHkuZW1pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==