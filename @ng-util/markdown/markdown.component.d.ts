import { ControlValueAccessor } from '@angular/forms';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export declare class NuMarkdownComponent extends NuMarkdownBaseComponent implements ControlValueAccessor {
    private onChange;
    protected init(): void;
    private setDisabled;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(_: () => void): void;
    setDisabledState(_isDisabled: boolean): void;
}
