import * as _ng_util_markdown from '@ng-util/markdown';
import * as i0 from '@angular/core';
import { AfterViewInit, OnDestroy, ElementRef, NgZone, EventEmitter, InjectionToken, EnvironmentProviders, ModuleWithProviders } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import * as i1 from '@angular/common';

declare class NuMarkdownService {
    private readonly config;
    private readonly lazySrv;
    private libs;
    private loading;
    private loaded;
    private notify$;
    get notify(): Observable<void>;
    constructor();
    load(): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NuMarkdownService>;
}

declare abstract class NuMarkdownBaseComponent implements AfterViewInit, OnDestroy {
    protected el: ElementRef<HTMLElement>;
    protected config: _ng_util_markdown.NuMarkdownConfig | null;
    protected srv: NuMarkdownService;
    protected ngZone: NgZone;
    private notify$?;
    protected _instance: any;
    delay: number;
    disabled: boolean;
    options: any;
    readonly ready: EventEmitter<string>;
    protected _value: string;
    set value(v: string);
    get instance(): any;
    private initDelay;
    protected abstract init(): void;
    protected get loaded(): boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NuMarkdownBaseComponent, never, never, { "delay": { "alias": "delay"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "options": { "alias": "options"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "ready": "ready"; }, never, never, true, never>;
    static ngAcceptInputType_delay: unknown;
    static ngAcceptInputType_disabled: unknown;
}

declare class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    protected init(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMarkdownPreviewComponent, "nu-markdown-preview", ["nuMarkdownPreview"], {}, {}, never, never, true, never>;
}

declare class NuMarkdownComponent extends NuMarkdownBaseComponent implements ControlValueAccessor {
    private onChange;
    protected init(): void;
    private setDisabled;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(_: () => void): void;
    setDisabledState(_isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NuMarkdownComponent, "nu-markdown", ["nuMarkdown"], {}, {}, never, never, true, never>;
}

declare const NU_MARKDOWN_CONFIG: InjectionToken<NuMarkdownConfig>;
declare function provideNuMarkdownConfig(config?: NuMarkdownConfig): EnvironmentProviders;
interface NuMarkdownConfig {
    /**
     * The base URL to [Vditor](https://github.com/Vanessa219/vditor) library, Default: `['https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js', 'https://cdn.jsdelivr.net/npm/vditor/dist/index.css']`
     */
    libs?: string[];
    /**
     * Equar [IOptions](https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L432)
     */
    defaultOptions?: any;
}

declare class NuMarkdownModule {
    /**
     * Or use `provideNuMarkdownConfig` instead.
     */
    static forRoot(config?: NuMarkdownConfig): ModuleWithProviders<NuMarkdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NuMarkdownModule, never, [typeof i1.CommonModule, typeof NuMarkdownComponent, typeof NuMarkdownPreviewComponent], [typeof NuMarkdownComponent, typeof NuMarkdownPreviewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NuMarkdownModule>;
}

export { NU_MARKDOWN_CONFIG, NuMarkdownBaseComponent, NuMarkdownComponent, NuMarkdownModule, NuMarkdownPreviewComponent, NuMarkdownService, provideNuMarkdownConfig };
export type { NuMarkdownConfig };
