import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export declare class NuMarkdownComponent extends NuMarkdownBaseComponent implements ControlValueAccessor {
    private _value;
    options: any;
    disabled: boolean;
    ready: EventEmitter<any>;
    private onChange;
    protected init(): void;
    private setDisabled;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(_: () => void): void;
    setDisabledState(_isDisabled: boolean): void;
}
