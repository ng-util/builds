import { __decorate, __metadata } from 'tslib';
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ElementRef, NgZone, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputNumber } from '@ng-util/util/convert';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NU_MARKDOWN_CONFIG = new InjectionToken('NU_MARKDOWN_CONFIG');
/**
 * @record
 */
function NuMarkdownConfig() { }
if (false) {
    /**
     * The base URL to [Vditor](https://github.com/Vanessa219/vditor) library, Default: `['https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js', 'https://cdn.jsdelivr.net/npm/vditor/dist/index.css']`
     * @type {?|undefined}
     */
    NuMarkdownConfig.prototype.libs;
    /**
     * Equar [IOptions](https://github.com/Vanessa219/vditor/blob/master/types/index.d.ts#L432)
     * @type {?|undefined}
     */
    NuMarkdownConfig.prototype.defaultOptions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMarkdownService {
    /**
     * @param {?} config
     * @param {?} lazySrv
     */
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
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    load() {
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        /** @type {?} */
        const libs = (/** @type {?} */ ((/** @type {?} */ (this)).libs));
        (/** @type {?} */ (this)).lazySrv.monitor(libs).subscribe((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).loaded = true;
            (/** @type {?} */ (this)).notify$.next();
        }));
        (/** @type {?} */ (this)).lazySrv.load(libs);
        return (/** @type {?} */ (this));
    }
}
NuMarkdownService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NuMarkdownService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuLazyService }
];
/** @nocollapse */ NuMarkdownService.ɵprov = ɵɵdefineInjectable({ factory: function NuMarkdownService_Factory() { return new NuMarkdownService(ɵɵinject(NU_MARKDOWN_CONFIG), ɵɵinject(NuLazyService)); }, token: NuMarkdownService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.libs;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownService.prototype.lazySrv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMarkdownComponent {
    /**
     * @param {?} el
     * @param {?} config
     * @param {?} srv
     * @param {?} ngZone
     */
    constructor(el, config, srv, ngZone) {
        this.el = el;
        this.config = config;
        this.srv = srv;
        this.ngZone = ngZone;
        this.ready = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.notify$ = this.srv.notify.subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
    }
    /**
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        setTimeout((/**
         * @return {?}
         */
        () => this.init()), this.delay);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            var _a;
            /** @type {?} */
            const options = Object.assign(Object.assign({ value: this._value, cache: {
                    enable: false,
                }, mode: 'sv', minHeight: 350, input: (/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this._value = value;
                        this.onChange(value);
                    }));
                }) }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.defaultOptions), this.options);
            this._instance = new Vditor(this.el.nativeElement, options);
            this.ready.emit(this._instance);
        }));
    }
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value || '';
        if (this.instance) {
            this.instance.setValue(this._value);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    registerOnTouched(_) { }
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (((/** @type {?} */ (window))).QRious) {
            this.initDelay();
            return;
        }
        this.srv.load();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.notify$.unsubscribe();
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
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NuMarkdownComponent)),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NuMarkdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MARKDOWN_CONFIG,] }] },
    { type: NuMarkdownService },
    { type: NgZone }
];
NuMarkdownComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    delay: [{ type: Input }],
    ready: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], NuMarkdownComponent.prototype, "delay", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype._instance;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype._value;
    /** @type {?} */
    NuMarkdownComponent.prototype.options;
    /** @type {?} */
    NuMarkdownComponent.prototype.disabled;
    /** @type {?} */
    NuMarkdownComponent.prototype.delay;
    /** @type {?} */
    NuMarkdownComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.onChange;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NuMarkdownComponent];
class NuMarkdownModule {
    /**
     * @param {?=} config
     * @return {?}
     */
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
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-util-markdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NuMarkdownComponent, NuMarkdownModule, NU_MARKDOWN_CONFIG as ɵa, NuMarkdownService as ɵc };
//# sourceMappingURL=ng-util-markdown.js.map
