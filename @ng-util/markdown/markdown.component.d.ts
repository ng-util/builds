import { ControlValueAccessor } from '@angular/forms';
import { NuMarkdownBaseComponent } from './markdown-base.component';
import * as i0 from "@angular/core";
export declare class NuMarkdownComponent extends NuMarkdownBaseComponent implements ControlValueAccessor {
    private onChange;
    protected init(): void;
    private setDisabled;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(_: () => void): void;
    setDisabledState(_isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMarkdownComponent, "nu-markdown", ["nuMarkdown"], {}, {}, never, never, true>;
}
