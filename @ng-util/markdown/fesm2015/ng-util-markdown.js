import { InjectionToken, ɵɵdefineInjectable, ɵɵinject, Injectable, Inject, Directive, ElementRef, NgZone, Input, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __decorate, __metadata, __awaiter } from 'tslib';
import { InputNumber } from '@ng-util/util/convert';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

const NU_MARKDOWN_CONFIG = new InjectionToken('NU_MARKDOWN_CONFIG');

class NuMarkdownService {
    constructor(config, lazySrv) {
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.libs = (config === null || config === void 0 ? void 0 : config.libs) || [
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
/** @nocollapse */ NuMarkdownService.ɵprov = ɵɵdefineInjectable({ factory: function NuMarkdownService_Factory() { return new NuMarkdownService(ɵɵinject(NU_MARKDOWN_CONFIG), ɵɵinject(NuLazyService)); }, token: NuMarkdownService, providedIn: "root" });
NuMarkdownService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NuMarkdownService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuLazyService }
];

class NuMarkdownBaseComponent {
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.notify$ = this.srv.notify.subscribe(() => this.initDelay());
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
NuMarkdownBaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
NuMarkdownBaseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuMarkdownService },
    { type: NgZone }
];
NuMarkdownBaseComponent.propDecorators = {
    delay: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NuMarkdownBaseComponent.prototype, "delay", void 0);

class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
        this.onChange = (_) => { };
    }
    init() {
        this.ngZone.runOutsideAngular(() => {
            var _a;
            const options = Object.assign(Object.assign({ value: this._value, cache: {
                    enable: false,
                }, mode: 'sv', minHeight: 350, input: (value) => {
                    this.ngZone.run(() => {
                        this._value = value;
                        this.onChange(value);
                    });
                } }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.defaultOptions), this.options);
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
NuMarkdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown',
                template: ``,
                exportAs: 'nuMarkdown',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NuMarkdownComponent),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NuMarkdownComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};

class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
    }
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    init() {
        this.ngZone.runOutsideAngular(() => __awaiter(this, void 0, void 0, function* () {
            yield Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run(() => this.ready.emit(this.el.nativeElement.innerHTML));
        }));
    }
}
NuMarkdownPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown-preview',
                template: `{{ value }}`,
                exportAs: 'nuMarkdownPreview',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NuMarkdownPreviewComponent.propDecorators = {
    value: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};

const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
class NuMarkdownModule {
    static forRoot(config) {
        return {
            ngModule: NuMarkdownModule,
            providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
        };
    }
}
NuMarkdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { NuMarkdownComponent, NuMarkdownModule, NuMarkdownBaseComponent as ɵa, NU_MARKDOWN_CONFIG as ɵb, NuMarkdownService as ɵd, NuMarkdownPreviewComponent as ɵe };
//# sourceMappingURL=ng-util-markdown.js.map
