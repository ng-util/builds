import { InjectionToken } from '@angular/core';
export declare const NU_MONACO_EDITOR_CONFIG: InjectionToken<unknown>;
export interface NuMonacoEditorConfig {
    baseUrl?: string;
    defaultOptions?: monaco.editor.IStandaloneEditorConstructionOptions;
    monacoLoad?: (_monaco: any) => void;
}
