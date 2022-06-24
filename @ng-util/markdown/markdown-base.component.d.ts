import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { NuMarkdownConfig } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
import * as i0 from "@angular/core";
export declare abstract class NuMarkdownBaseComponent implements AfterViewInit, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected config: NuMarkdownConfig;
    protected srv: NuMarkdownService;
    protected ngZone: NgZone;
    private notify$;
    protected _instance: any;
    delay: number;
    disabled: boolean;
    options: any;
    ready: EventEmitter<string>;
    protected _value: string;
    set value(v: string);
    get instance(): any;
    constructor(el: ElementRef<HTMLElement>, config: NuMarkdownConfig, srv: NuMarkdownService, ngZone: NgZone);
    private initDelay;
    protected abstract init(): void;
    protected get loaded(): boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NuMarkdownBaseComponent, never, never, { "delay": "delay"; "disabled": "disabled"; "options": "options"; "value": "value"; }, { "ready": "ready"; }, never, never, false>;
}
