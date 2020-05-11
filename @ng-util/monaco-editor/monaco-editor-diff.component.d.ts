import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorDiffModel } from './monaco-editor.types';
export declare class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old: NuMonacoEditorDiffModel;
    new: NuMonacoEditorDiffModel;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions): void;
}
