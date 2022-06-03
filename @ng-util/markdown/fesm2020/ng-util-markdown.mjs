import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, EventEmitter, Directive, Input, Output, Component, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { InputNumber } from '@ng-util/util/convert';
import * as i1 from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

const NU_MARKDOWN_CONFIG = new InjectionToken('NU_MARKDOWN_CONFIG');

class NuMarkdownService {
    constructor(config, lazySrv) {
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.libs = config?.libs || [
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js`,
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.css`,
        ];
    }
    get notify() {
        return this.notify$.asObservable();
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
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownService, deps: [{ token: NU_MARKDOWN_CONFIG }, { token: i1.NuLazyService }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ /** @nocollapse */ NuMarkdownService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuLazyService }]; } });

class NuMarkdownBaseComponent {
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.delay = 0;
        this.disabled = false;
        this.ready = new EventEmitter();
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
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
        if (this.loaded) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownBaseComponent, deps: [{ token: i0.ElementRef }, { token: NU_MARKDOWN_CONFIG }, { token: NuMarkdownService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ /** @nocollapse */ NuMarkdownBaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.3", type: NuMarkdownBaseComponent, inputs: { delay: "delay", disabled: "disabled", options: "options", value: "value" }, outputs: { ready: "ready" }, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NuMarkdownBaseComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: NuMarkdownService }, { type: i0.NgZone }]; }, propDecorators: { delay: [{
                type: Input
            }], disabled: [{
                type: Input
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
            await Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        });
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownPreviewComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ NuMarkdownPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: NuMarkdownPreviewComponent, selector: "nu-markdown-preview", exportAs: ["nuMarkdownPreview"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown-preview',
                    template: ``,
                    exportAs: 'nuMarkdownPreview',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.onChange = (_) => { };
    }
    init() {
        this.ngZone.runOutsideAngular(() => {
            const options = {
                value: this._value,
                cache: {
                    enable: false,
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
                ...this.options,
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
    registerOnTouched(_) { }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ NuMarkdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: NuMarkdownComponent, selector: "nu-markdown", providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => NuMarkdownComponent)),
            multi: true,
        },
    ], exportAs: ["nuMarkdown"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-markdown',
                    template: ``,
                    exportAs: 'nuMarkdown',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMarkdownComponent)),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }] });

const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
class NuMarkdownModule {
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
        };
    }
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownModule, declarations: [NuMarkdownComponent, NuMarkdownPreviewComponent], imports: [CommonModule], exports: [NuMarkdownComponent, NuMarkdownPreviewComponent] });
/** @nocollapse */ /** @nocollapse */ NuMarkdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NuMarkdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NuMarkdownBaseComponent, NuMarkdownComponent, NuMarkdownModule, NuMarkdownPreviewComponent };
//# sourceMappingURL=ng-util-markdown.mjs.map
