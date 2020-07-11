import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NuMarkdownConfig } from './markdown.config';
import { NuMarkdownService } from './markdown.service';
export declare class NuMarkdownComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    private config;
    private srv;
    protected ngZone: NgZone;
    get instance(): any;
    constructor(el: ElementRef<HTMLElement>, config: NuMarkdownConfig, srv: NuMarkdownService, ngZone: NgZone);
    private notify$;
    private _instance;
    private _value;
    options: any;
    disabled: boolean;
    delay: number;
    ready: EventEmitter<any>;
    private onChange;
    private initDelay;
    private init;
    private setDisabled;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(_: () => void): void;
    setDisabledState(_isDisabled: boolean): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
