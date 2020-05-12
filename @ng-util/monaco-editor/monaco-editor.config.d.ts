import { InjectionToken } from '@angular/core';
export declare const NU_MONACO_EDITOR_CONFIG: InjectionToken<unknown>;
export interface NuMonacoEditorConfig {
    /**
     * The base URL to monaco editor library assets via AMD (RequireJS), Default: `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min`
     * You can using local path, e.g.: `assets/monaco-editor/min`.
     */
    baseUrl?: string;
    /**
     * Default options when creating editors
     */
    defaultOptions?: monaco.editor.IStandaloneEditorConstructionOptions;
    /**
     * The event after the first loading of the monaco editor library is completed, use this function to extend monaco editor functionalities.
     * - @param `_monaco` equar to `window.monaco`
     */
    monacoLoad?: (_monaco: any) => void;
}
