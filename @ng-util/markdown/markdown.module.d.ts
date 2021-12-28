import { ModuleWithProviders } from '@angular/core';
import { NuMarkdownConfig } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "./markdown.component";
import * as i2 from "./markdown-preview.component";
import * as i3 from "@angular/common";
export declare class NuMarkdownModule {
    static forRoot(config?: NuMarkdownConfig): ModuleWithProviders<NuMarkdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NuMarkdownModule, [typeof i1.NuMarkdownComponent, typeof i2.NuMarkdownPreviewComponent], [typeof i3.CommonModule], [typeof i1.NuMarkdownComponent, typeof i2.NuMarkdownPreviewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NuMarkdownModule>;
}
