import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, Injectable, ElementRef, input, numberAttribute, booleanAttribute, Directive, EventEmitter, ChangeDetectionStrategy, Component, forwardRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { NuLazyService } from '@ng-util/lazy';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

const NU_MARKDOWN_CONFIG = new InjectionToken('NU_MARKDOWN_CONFIG');
function provideNuMarkdownConfig(config) {
    return makeEnvironmentProviders([{ provide: NU_MARKDOWN_CONFIG, useValue: config }]);
}

class NuMarkdownService {
    config = inject(NU_MARKDOWN_CONFIG, { optional: true });
    lazySrv = inject(NuLazyService);
    libs;
    loading = false;
    loaded = false;
    notify$ = new Subject();
    get notify() {
        return this.notify$.asObservable();
    }
    constructor() {
        this.libs = this.config?.libs || [
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js`,
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.css`
        ];
    }
    load() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        const libs = this.libs;
        this.lazySrv.monitor(libs).subscribe(() => {
            this.loaded = true;
            this.notify$.next();
        });
        this.lazySrv.load(libs);
        return this;
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    /** @nocollapse */ static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class NuMarkdownBaseComponent {
    el = inject(ElementRef);
    config = inject(NU_MARKDOWN_CONFIG, { optional: true });
    srv = inject(NuMarkdownService);
    notify$;
    _instance;
    delay = input(0, { transform: numberAttribute });
    disabled = input(false, { transform: booleanAttribute });
    get instance() {
        return this._instance;
    }
    initDelay() {
        setTimeout(() => this.init(), this.delay());
    }
    get loaded() {
        return !!window.Vditor;
    }
    ngAfterViewInit() {
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
        if (this.loaded) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    ngOnDestroy() {
        this.notify$?.unsubscribe();
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "20.0.2", type: NuMarkdownBaseComponent, isStandalone: true, inputs: { delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
            type: Directive
        }] });

class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    options = input();
    value = input('');
    ready = new EventEmitter();
    async init() {
        await Vditor.preview(this.el.nativeElement, this.value(), {
            cdn: 'https://cdn.jsdelivr.net/npm/vditor',
            ...this.options()
        });
        this.ready.emit(this.el.nativeElement.innerHTML);
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownPreviewComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.0.2", type: NuMarkdownPreviewComponent, isStandalone: true, selector: "nu-markdown-preview", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, exportAs: ["nuMarkdownPreview"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown-preview',
                    template: ``,
                    exportAs: 'nuMarkdownPreview',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

class NuMarkdownComponent extends NuMarkdownBaseComponent {
    options = input();
    ready = new EventEmitter();
    value = '';
    onChange = (_) => { };
    init() {
        const options = {
            value: this.value,
            cache: {
                enable: false
            },
            mode: 'sv',
            minHeight: 350,
            input: (value) => {
                this.onChange(value);
            },
            after: () => {
                this.setDisabled(this.disabled());
            },
            ...this.config?.defaultOptions,
            ...this.options
        };
        this._instance = new Vditor(this.el.nativeElement, options);
        this.ready.emit(this._instance);
    }
    setDisabled(v) {
        const i = this._instance;
        if (i == null)
            return;
        if (v) {
            i.disabled();
        }
        else {
            i.enable();
        }
    }
    writeValue(value) {
        this.value = value;
        this.instance?.setValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(_) { }
    setDisabledState(v) {
        this.setDisabled(v);
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.0.2", type: NuMarkdownComponent, isStandalone: true, selector: "nu-markdown", inputs: { options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMarkdownComponent)),
                multi: true
            }
        ], exportAs: ["nuMarkdown"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown',
                    template: ``,
                    exportAs: 'nuMarkdown',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMarkdownComponent)),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
class NuMarkdownModule {
    /**
     * Or use `provideNuMarkdownConfig` instead.
     */
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }]
        };
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule, NuMarkdownComponent, NuMarkdownPreviewComponent], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] });
    /** @nocollapse */ static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMarkdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NU_MARKDOWN_CONFIG, NuMarkdownBaseComponent, NuMarkdownComponent, NuMarkdownModule, NuMarkdownPreviewComponent, NuMarkdownService, provideNuMarkdownConfig };
//# sourceMappingURL=ng-util-markdown.mjs.map
