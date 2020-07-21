import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NuMonacoEditorConfig } from './monaco-editor.config';
import { NuMonacoEditorEvent, NuMonacoEditorEventType } from './monaco-editor.types';
export declare class NuMonacoEditorBase implements AfterViewInit, OnChanges, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected doc: any;
    protected ngZone: NgZone;
    protected _editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    protected _options: monaco.editor.IStandaloneEditorConstructionOptions;
    protected _resize$: Subscription;
    protected _config: NuMonacoEditorConfig;
    protected _disabled: boolean;
    height: string;
    delay: number;
    set disabled(val: boolean | string);
    set options(val: monaco.editor.IStandaloneEditorConstructionOptions);
    get options(): monaco.editor.IStandaloneEditorConstructionOptions;
    event: EventEmitter<NuMonacoEditorEvent>;
    constructor(el: ElementRef<HTMLElement>, config: NuMonacoEditorConfig, doc: any, ngZone: NgZone);
    protected initMonaco(_options: monaco.editor.IStandaloneEditorConstructionOptions, _initEvent: boolean): void;
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
}
