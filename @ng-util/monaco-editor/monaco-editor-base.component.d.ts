import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { NuMonacoEditorConfig } from './monaco-editor.config';
import { NuMonacoEditorEvent, NuMonacoEditorEventType } from './monaco-editor.types';
export declare abstract class NuMonacoEditorBase implements AfterViewInit, OnChanges, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected doc: any;
    protected ngZone: NgZone;
    protected _editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    protected _options: monaco.editor.IStandaloneEditorConstructionOptions;
    protected _resize$: Subscription;
    protected _config: NuMonacoEditorConfig;
    height: number;
    disabled: boolean;
    set options(val: monaco.editor.IStandaloneEditorConstructionOptions);
    get options(): monaco.editor.IStandaloneEditorConstructionOptions;
    event: EventEmitter<NuMonacoEditorEvent>;
    constructor(el: ElementRef<HTMLElement>, config: NuMonacoEditorConfig, doc: any, ngZone: NgZone);
    protected abstract initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions): void;
    protected notifyEvent(type: NuMonacoEditorEventType): void;
    protected setDisabled(): this;
    private init;
    protected cleanResize(): this;
    protected registerResize(): this;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
