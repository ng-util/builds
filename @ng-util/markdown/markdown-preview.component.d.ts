import { EventEmitter } from '@angular/core';
import { NuMarkdownBaseComponent } from './markdown-base.component';
export declare class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    private _value;
    set value(v: string);
    options: any;
    disabled: boolean;
    ready: EventEmitter<string>;
    protected init(): void;
}
