import { AfterViewInit, DestroyRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NuMonacoEditorConfig } from './monaco-editor.config';
import { NuMonacoEditorEvent, NuMonacoEditorEventType } from './monaco-editor.types';
import * as i0 from "@angular/core";
export declare abstract class NuMonacoEditorBase implements AfterViewInit, OnChanges, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected doc: any;
    protected ngZone: NgZone;
    protected destroy$: DestroyRef;
    protected _editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    protected _options: monaco.editor.IStandaloneEditorConstructionOptions;
    protected _resize$: Subscription | null;
    protected _config: NuMonacoEditorConfig;
    protected _disabled?: boolean;
    height: string;
    delay: number;
    set disabled(val: boolean | string);
    set options(val: monaco.editor.IStandaloneEditorConstructionOptions);
    get options(): monaco.editor.IStandaloneEditorConstructionOptions;
    event: EventEmitter<NuMonacoEditorEvent>;
    constructor(el: ElementRef<HTMLElement>, config: NuMonacoEditorConfig, doc: any, ngZone: NgZone, destroy$: DestroyRef);
    protected abstract initMonaco(_options: monaco.editor.IStandaloneEditorConstructionOptions, _initEvent: boolean): void;
    protected notifyEvent(type: NuMonacoEditorEventType, other?: NuMonacoEditorEvent): void;
    protected setDisabled(): this;
    private init;
    protected cleanResize(): this;
    protected registerResize(): this;
    protected updateOptions(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorBase, [null, { optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorBase, "nu-monaco-base", never, { "height": { "alias": "height"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "event": "event"; }, never, never, true, never>;
}
