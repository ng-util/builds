import { ModuleWithProviders } from '@angular/core';
import { NuMonacoEditorConfig } from './monaco-editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./monaco-editor-base.component";
import * as i2 from "./monaco-editor.component";
import * as i3 from "./monaco-editor-diff.component";
import * as i4 from "@angular/common";
export declare class NuMonacoEditorModule {
    static forRoot(config?: NuMonacoEditorConfig): ModuleWithProviders<NuMonacoEditorModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMonacoEditorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NuMonacoEditorModule, [typeof i1.NuMonacoEditorBase, typeof i2.NuMonacoEditorComponent, typeof i3.NuMonacoEditorDiffComponent], [typeof i4.CommonModule], [typeof i2.NuMonacoEditorComponent, typeof i3.NuMonacoEditorDiffComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NuMonacoEditorModule>;
}
