import { InjectionToken } from '@angular/core';
export declare const NU_MARKDOWN_CONFIG: InjectionToken<unknown>;
export interface NuMarkdownConfig {
    /**
     * The base URL to [Vditor](https://github.com/Vanessa219/vditor) library, Default: `['https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js', 'https://cdn.jsdelivr.net/npm/vditor/dist/index.css']`
     */
    libs?: string[];
    /**
     * Equar [IOptions](https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L432)
     */
    defaultOptions?: any;
}
