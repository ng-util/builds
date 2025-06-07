/// <reference path="../../../../packages/monaco-editor/monaco.d.ts" />
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from '@angular/core';
import { InjectionToken, EnvironmentProviders, AfterViewInit, OnDestroy, ElementRef, NgZone, DestroyRef, EventEmitter, ModuleWithProviders } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i1 from '@angular/common';

interface NuMonacoEditorModel {
    value?: string;
    language?: string;
    uri?: monaco.Uri;
}
interface NuMonacoEditorDiffModel {
    code: string;
    language?: string;
}
type NuMonacoEditorEventType = 'load-error' | 'init' | 're-init' | 'resize' | 'update-diff' | 'error';
interface NuMonacoEditorEvent {
    type?: NuMonacoEditorEventType;
    editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    error?: string;
    /** Just only `nu-monaco-editor-diff` component */
    diffValue?: string;
}

declare const NU_MONACO_EDITOR_CONFIG: InjectionToken<NuMonacoEditorConfig>;
declare function provideNuMonacoEditorConfig(config?: NuMonacoEditorConfig): EnvironmentProviders;
interface NuMonacoEditorConfig {
    /**
     * The base URL to monaco editor library assets via AMD (RequireJS), Default: `https://cdn.jsdelivr.net/npm/monaco-editor/min`
     * You can using local path, e.g.: `assets/monaco-editor/min`.
     */
    baseUrl?: string;
    /**
     * Default options when creating editors
     */
    defaultOptions?: monaco.editor.IStandaloneEditorConstructionOptions;
    /**
     * The event after the first loading of the monaco editor library is completed, use this function to extend monaco editor functionalities.
     * - @param `_monaco` equar to `window.monaco`
     */
    monacoLoad?: (_monaco: any) => void;
    /**
     * The event before the first preload of the monaco editor library is completed, use this function to set nls availableLanguages.
     */
    monacoPreLoad?: () => void;
    /**
     * Trigger automatic format delay time, default: `100`
     */
    autoFormatTime?: number;
}

declare abstract class NuMonacoEditorBase implements AfterViewInit, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected config: NuMonacoEditorConfig | null;
    protected doc: Document;
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
    readonly event: EventEmitter<NuMonacoEditorEvent>;
    constructor();
    protected abstract initMonaco(_options: monaco.editor.IStandaloneEditorConstructionOptions, _initEvent: boolean): void;
    protected notifyEvent(type: NuMonacoEditorEventType, other?: NuMonacoEditorEvent): void;
    protected setDisabled(): this;
    private init;
    protected cleanResize(): this;
    protected registerResize(): this;
    protected updateOptions(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorBase, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorBase, "nu-monaco-base", never, { "height": { "alias": "height"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "event": "event"; }, never, never, true, never>;
    static ngAcceptInputType_delay: unknown;
}

declare class NuMonacoEditorComponent extends NuMonacoEditorBase implements ControlValueAccessor {
    private _value;
    private _placeholderWidget?;
    private _placeholder?;
    set placeholder(v: string | null | undefined);
    model?: NuMonacoEditorModel | null;
    autoFormat: boolean;
    get editor(): monaco.editor.IStandaloneCodeEditor | null | undefined;
    private togglePlaceholder;
    private onChange;
    private onTouched;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(_isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorComponent, "nu-monaco-editor", ["nuMonacoEditor"], { "placeholder": { "alias": "placeholder"; "required": false; }; "model": { "alias": "model"; "required": false; }; "autoFormat": { "alias": "autoFormat"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_autoFormat: unknown;
}

declare class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old?: NuMonacoEditorDiffModel | null;
    new?: NuMonacoEditorDiffModel | null;
    get editor(): monaco.editor.IStandaloneDiffEditor | null | undefined;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorDiffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorDiffComponent, "nu-monaco-diff-editor", ["nuMonacoDiffEditor"], { "old": { "alias": "old"; "required": false; }; "new": { "alias": "new"; "required": false; }; }, {}, never, never, true, never>;
}

declare class NuMonacoEditorModule {
    /**
     * Or use `provideNuMonacoEditorConfig` instead.
     */
    static forRoot(config?: NuMonacoEditorConfig): ModuleWithProviders<NuMonacoEditorModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NuMonacoEditorModule, never, [typeof i1.CommonModule, typeof NuMonacoEditorComponent, typeof NuMonacoEditorDiffComponent], [typeof NuMonacoEditorComponent, typeof NuMonacoEditorDiffComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NuMonacoEditorModule>;
}

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, provideNuMonacoEditorConfig };
export type { NuMonacoEditorConfig, NuMonacoEditorDiffModel, NuMonacoEditorEvent, NuMonacoEditorEventType, NuMonacoEditorModel };
