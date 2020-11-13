/**
 * @fileoverview added by tsickle
 * Generated from: markdown-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    init() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => __awaiter(this, void 0, void 0, function* () {
            yield Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.ready.emit(this.el.nativeElement.innerHTML)));
        })));
    }
}
NuMarkdownPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown-preview',
                template: `{{ value }}`,
                exportAs: 'nuMarkdownPreview',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMarkdownPreviewComponent.propDecorators = {
    value: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownPreviewComponent.prototype._value;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.options;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.disabled;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.ready;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbWFya2Rvd24vIiwic291cmNlcyI6WyJtYXJrZG93bi1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBVXBFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSx1QkFBdUI7SUFOdkU7O1FBaUJZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBUy9DLENBQUM7Ozs7O0lBbEJDLElBQ0ksS0FBSyxDQUFDLENBQVM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7OztJQUtTLElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBUyxFQUFFO1lBQ3ZDLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFBLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7b0JBR0UsS0FBSztzQkFPTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsTUFBTTs7Ozs7OztJQVZQLDRDQUF1Qjs7SUFRdkIsNkNBQXNCOztJQUN0Qiw4Q0FBMkI7O0lBQzNCLDJDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkJhc2VDb21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLWJhc2UuY29tcG9uZW50JztcblxuZGVjbGFyZSB2YXIgVmRpdG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1hcmtkb3duLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYHt7IHZhbHVlIH19YCxcbiAgZXhwb3J0QXM6ICdudU1hcmtkb3duUHJldmlldycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duUHJldmlld0NvbXBvbmVudCBleHRlbmRzIE51TWFya2Rvd25CYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBWZGl0b3IucHJldmlldyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3ZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpO1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVhZHkuZW1pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==