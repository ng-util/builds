/// <reference path="../../../../packages/monaco-editor/monaco.d.ts" />
import * as _angular_core from '@angular/core';
import { InjectionToken, EnvironmentProviders, AfterViewInit, OnDestroy, ElementRef, NgZone, DestroyRef, ModuleWithProviders } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
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
    protected _resize$: Subscription | null;
    protected _config: NuMonacoEditorConfig;
    protected _disabled?: boolean;
    height: _angular_core.InputSignal<string>;
    delay: _angular_core.InputSignalWithTransform<number, unknown>;
    disabled: _angular_core.InputSignalWithTransform<boolean, unknown>;
    options: _angular_core.InputSignal<monaco.editor.IStandaloneEditorConstructionOptions | undefined>;
    readonly event: _angular_core.OutputEmitterRef<NuMonacoEditorEvent>;
    constructor();
    protected abstract initMonaco(_options: monaco.editor.IStandaloneEditorConstructionOptions | undefined, _initEvent: boolean): void;
    protected notifyEvent(type: NuMonacoEditorEventType, other?: NuMonacoEditorEvent): void;
    protected setDisabled(v: boolean): this;
    private init;
    protected cleanResize(): this;
    protected registerResize(): this;
    updateOptions(v: monaco.editor.IStandaloneEditorConstructionOptions | undefined): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NuMonacoEditorBase, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NuMonacoEditorBase, "nu-monaco-base", never, { "height": { "alias": "height"; "required": false; "isSignal": true; }; "delay": { "alias": "delay"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, { "event": "event"; }, never, never, true, never>;
}

declare class NuMonacoEditorComponent extends NuMonacoEditorBase implements ControlValueAccessor {
    private _value;
    private _placeholderWidget?;
    placeholder: _angular_core.InputSignal<string | undefined>;
    model: _angular_core.InputSignal<NuMonacoEditorModel | undefined>;
    autoFormat: _angular_core.InputSignalWithTransform<boolean, unknown>;
    get editor(): monaco.editor.IStandaloneCodeEditor | null | undefined;
    constructor();
    private togglePlaceholder;
    private onChange;
    private onTouched;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    format(): Promise<void> | undefined;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(v: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NuMonacoEditorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NuMonacoEditorComponent, "nu-monaco-editor", ["nuMonacoEditor"], { "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "model": { "alias": "model"; "required": false; "isSignal": true; }; "autoFormat": { "alias": "autoFormat"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old: _angular_core.InputSignal<NuMonacoEditorDiffModel | undefined>;
    new: _angular_core.InputSignal<NuMonacoEditorDiffModel | undefined>;
    get editor(): monaco.editor.IStandaloneDiffEditor | null | undefined;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NuMonacoEditorDiffComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NuMonacoEditorDiffComponent, "nu-monaco-diff-editor", ["nuMonacoDiffEditor"], { "old": { "alias": "old"; "required": false; "isSignal": true; }; "new": { "alias": "new"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class NuMonacoEditorModule {
    /**
     * Or use `provideNuMonacoEditorConfig` instead.
     */
    static forRoot(config?: NuMonacoEditorConfig): ModuleWithProviders<NuMonacoEditorModule>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NuMonacoEditorModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<NuMonacoEditorModule, never, [typeof i1.CommonModule, typeof NuMonacoEditorComponent, typeof NuMonacoEditorDiffComponent], [typeof NuMonacoEditorComponent, typeof NuMonacoEditorDiffComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<NuMonacoEditorModule>;
}

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, provideNuMonacoEditorConfig };
export type { NuMonacoEditorConfig, NuMonacoEditorDiffModel, NuMonacoEditorEvent, NuMonacoEditorEventType, NuMonacoEditorModel };
