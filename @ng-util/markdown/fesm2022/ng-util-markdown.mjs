import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, Injectable, ElementRef, NgZone, EventEmitter, numberAttribute, booleanAttribute, Directive, Input, Output, Component, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { NuLazyService } from '@ng-util/lazy';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

const NU_MARKDOWN_CONFIG = new InjectionToken('NU_MARKDOWN_CONFIG');
function provideNuMarkdownConfig(config) {
    return makeEnvironmentProviders([{ provide: NU_MARKDOWN_CONFIG, useValue: config }]);
}

class NuMarkdownService {
    get notify() {
        return this.notify$.asObservable();
    }
    constructor() {
        this.config = inject(NU_MARKDOWN_CONFIG, { optional: true });
        this.lazySrv = inject(NuLazyService);
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class NuMarkdownBaseComponent {
    constructor() {
        this.el = inject(ElementRef);
        this.config = inject(NU_MARKDOWN_CONFIG, { optional: true });
        this.srv = inject(NuMarkdownService);
        this.ngZone = inject(NgZone);
        this.delay = 0;
        this.disabled = false;
        this.ready = new EventEmitter();
    }
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    get instance() {
        return this._instance;
    }
    initDelay() {
        setTimeout(() => this.init(), this.delay);
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "19.1.3", type: NuMarkdownBaseComponent, isStandalone: true, inputs: { delay: ["delay", "delay", numberAttribute], disabled: ["disabled", "disabled", booleanAttribute], options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
            type: Directive
        }], propDecorators: { delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], options: [{
                type: Input
            }], ready: [{
                type: Output
            }], value: [{
                type: Input
            }] } });

class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    init() {
        this.ngZone.runOutsideAngular(async () => {
            await Vditor.preview(this.el.nativeElement, this._value, this.options);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownPreviewComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.3", type: NuMarkdownPreviewComponent, isStandalone: true, selector: "nu-markdown-preview", exportAs: ["nuMarkdownPreview"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown-preview',
                    template: ``,
                    exportAs: 'nuMarkdownPreview',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.onChange = (_) => {
            //
        };
    }
    init() {
        this.ngZone.runOutsideAngular(() => {
            const options = {
                value: this._value,
                cache: {
                    enable: false
                },
                mode: 'sv',
                minHeight: 350,
                input: (value) => {
                    this.ngZone.run(() => {
                        this._value = value;
                        this.onChange(value);
                    });
                },
                ...this.config?.defaultOptions,
                ...this.options
            };
            this._instance = new Vditor(this.el.nativeElement, options);
            this.ngZone.run(() => this.ready.emit(this._instance));
        });
    }
    setDisabled() {
        if (!this.instance) {
            return;
        }
        if (this.disabled) {
            this.instance.disabled();
        }
        else {
            this.instance.enable();
        }
    }
    writeValue(value) {
        this._value = value || '';
        if (this.instance) {
            this.instance.setValue(this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(_) {
        //
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.3", type: NuMarkdownComponent, isStandalone: true, selector: "nu-markdown", providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMarkdownComponent)),
                multi: true
            }
        ], exportAs: ["nuMarkdown"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownComponent, decorators: [{
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule, NuMarkdownComponent, NuMarkdownPreviewComponent], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: NuMarkdownModule, decorators: [{
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
