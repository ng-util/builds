import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { NuMarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
export declare abstract class NuMarkdownBaseComponent implements AfterViewInit, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected config: import("@ng-util/markdown").NuMarkdownConfig | null;
    protected srv: NuMarkdownService;
    protected ngZone: NgZone;
    private notify$?;
    protected _instance: any;
    delay: number;
    disabled: boolean;
    options: any;
    readonly ready: EventEmitter<string>;
    protected _value: string;
    set value(v: string);
    get instance(): any;
    private initDelay;
    protected abstract init(): void;
    protected get loaded(): boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NuMarkdownBaseComponent, never, never, { "delay": { "alias": "delay"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "ready": "ready"; }, never, never, true, never>;
    static ngAcceptInputType_delay: unknown;
    static ngAcceptInputType_disabled: unknown;
}
