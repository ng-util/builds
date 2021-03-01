import { __awaiter } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
    }
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    init() {
        this.ngZone.runOutsideAngular(() => __awaiter(this, void 0, void 0, function* () {
            yield Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        }));
    }
}
NuMarkdownPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown-preview',
                template: `{{ value }}`,
                exportAs: 'nuMarkdownPreview',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NuMarkdownPreviewComponent.propDecorators = {
    value: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tYXJrZG93bi9tYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVVwRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQXVCO0lBTnZFOztRQWlCWSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVMvQyxDQUFDO0lBbEJDLElBQ0ksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBS1MsSUFBSTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBUyxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUdFLEtBQUs7c0JBT0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TWFya2Rvd25CYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi1iYXNlLmNvbXBvbmVudCc7XG5cbmRlY2xhcmUgdmFyIFZkaXRvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudS1tYXJrZG93bi1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGB7eyB2YWx1ZSB9fWAsXG4gIGV4cG9ydEFzOiAnbnVNYXJrZG93blByZXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93blByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOdU1hcmtkb3duQmFzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgVmRpdG9yLnByZXZpZXcodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl92YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnJlYWR5LmVtaXQodGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=