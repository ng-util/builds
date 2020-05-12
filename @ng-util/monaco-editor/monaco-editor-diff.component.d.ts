import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorDiffModel } from './monaco-editor.types';
export declare class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old: NuMonacoEditorDiffModel;
    new: NuMonacoEditorDiffModel;
    get editor(): monaco.editor.IStandaloneDiffEditor;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
}
