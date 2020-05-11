/// <reference types="monaco" />
export interface NuMonacoEditorModel {
    language?: string;
    uri?: monaco.Uri;
}
export interface NuMonacoEditorDiffModel {
    code: string;
    language?: string;
}
export declare type NuMonacoEditorEventType = 'load-error' | 'init' | 'resize';
export interface NuMonacoEditorEvent {
    type: NuMonacoEditorEventType;
    editor?: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor;
    error?: string;
}
