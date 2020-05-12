import { ControlValueAccessor } from '@angular/forms';
import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorModel } from './monaco-editor.types';
export declare class NuMonacoEditorComponent extends NuMonacoEditorBase implements ControlValueAccessor {
    private _value;
    model: NuMonacoEditorModel;
    get editor(): monaco.editor.IStandaloneCodeEditor;
    private onChange;
    private onTouched;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(_isDisabled: boolean): void;
}
