import { ModuleWithProviders } from '@angular/core';
import { NuMarkdownConfig } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./markdown.component";
import * as i3 from "./markdown-preview.component";
export declare class NuMarkdownModule {
    static forRoot(config?: NuMarkdownConfig): ModuleWithProviders<NuMarkdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NuMarkdownModule, never, [typeof i1.CommonModule, typeof i2.NuMarkdownComponent, typeof i3.NuMarkdownPreviewComponent], [typeof i2.NuMarkdownComponent, typeof i3.NuMarkdownPreviewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NuMarkdownModule>;
}
