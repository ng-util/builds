import { NuMonacoEditorBase } from './monaco-editor-base.component';
import { NuMonacoEditorDiffModel } from './monaco-editor.types';
import * as i0 from "@angular/core";
export declare class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old?: NuMonacoEditorDiffModel | null;
    new?: NuMonacoEditorDiffModel | null;
    get editor(): monaco.editor.IStandaloneDiffEditor | null | undefined;
    initMonaco(options: monaco.editor.IStandaloneEditorConstructionOptions, initEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorDiffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMonacoEditorDiffComponent, "nu-monaco-diff-editor", ["nuMonacoDiffEditor"], { "old": { "alias": "old"; "required": false; }; "new": { "alias": "new"; "required": false; }; }, {}, never, never, true, never>;
}
