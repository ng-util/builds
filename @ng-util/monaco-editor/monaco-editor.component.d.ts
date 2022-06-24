import { ControlValueAccessor } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorModel } from './monaco-editor.types';
import * as i0 from "@angular/core";
export declare class NuMonacoEditorComponent extends NuMonacoEditorBase implements ControlValueAccessor {
    private _value;
    model?: NuMonacoEditorModel | null;
    autoFormat: boolean;
    get editor(): monaco.editor.IStandaloneCodeEditor;
    private onChange;
    private onTouched;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(_isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorComponent, "nu-monaco-editor", ["nuMonacoEditor"], { "model": "model"; "autoFormat": "autoFormat"; }, {}, never, never, true>;
}
