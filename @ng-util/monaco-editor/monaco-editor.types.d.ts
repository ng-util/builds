/// <reference path="monaco.d.ts" />
export interface NuMonacoEditorModel {
    value?: string;
    language?: string;
    uri?: monaco.Uri;
}
export interface NuMonacoEditorDiffModel {
    code: string;
    language?: string;
}
export declare type NuMonacoEditorEventType = 'load-error' | 'init' | 're-init' | 'resize' | 'update-diff';
export interface NuMonacoEditorEvent {
    type?: NuMonacoEditorEventType;
    editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    error?: string;
    /** Just only `nu-monaco-editor-diff` component */
    diffValue?: string;
}
