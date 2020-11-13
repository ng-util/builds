import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, ElementRef, NgZone, Input, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { __decorate, __metadata, __awaiter } from 'tslib';
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
 * Generated from: markdown-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class NuMarkdownBaseComponent {
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
     * @protected
     * @return {?}
     */
    get loaded() {
        return !!((/** @type {?} */ (window))).Vditor;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.loaded) {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownBaseComponent.prototype.notify$;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype._instance;
    /** @type {?} */
    NuMarkdownBaseComponent.prototype.delay;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    NuMarkdownBaseComponent.prototype.ngZone;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    NuMarkdownBaseComponent.prototype.init = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMarkdownComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
    }
    /**
     * @protected
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
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.ready.emit(this._instance)));
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
NuMarkdownComponent.propDecorators = {
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};
if (false) {
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
    NuMarkdownComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    NuMarkdownComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown-preview.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMarkdownPreviewComponent extends NuMarkdownBaseComponent {
    constructor() {
        super(...arguments);
        this.ready = new EventEmitter();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this._value = v;
        if (this.loaded) {
            this.init();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    init() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => __awaiter(this, void 0, void 0, function* () {
            yield Vditor.preview(this.el.nativeElement, this._value);
            console.log(this.el.nativeElement.innerHTML);
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.ready.emit(this.el.nativeElement.innerHTML)));
        })));
    }
}
NuMarkdownPreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-markdown-preview',
                template: `{{ value }}`,
                exportAs: 'nuMarkdownPreview',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMarkdownPreviewComponent.propDecorators = {
    value: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    ready: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NuMarkdownPreviewComponent.prototype._value;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.options;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.disabled;
    /** @type {?} */
    NuMarkdownPreviewComponent.prototype.ready;
}

/**
 * @fileoverview added by tsickle
 * Generated from: markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NuMarkdownComponent, NuMarkdownPreviewComponent];
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

export { NuMarkdownComponent, NuMarkdownModule, NuMarkdownBaseComponent as ɵa, NU_MARKDOWN_CONFIG as ɵb, NuMarkdownService as ɵd, NuMarkdownPreviewComponent as ɵe };
//# sourceMappingURL=ng-util-markdown.js.map
