/**
 * @license ng-util(cipchk@qq.com) v10.1.1
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ng-util/util/convert'), require('@ng-util/lazy'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ng-util/markdown', ['exports', '@angular/core', '@angular/forms', '@ng-util/util/convert', '@ng-util/lazy', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util'].markdown = {}), global.ng.core, global.ng.forms, global['@ng-util/util/convert'], global['@ng-util/lazy'], global.rxjs, global.ng.common));
}(this, (function (exports, i0, forms, convert, i2, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: markdown.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NU_MARKDOWN_CONFIG = new i0.InjectionToken('NU_MARKDOWN_CONFIG');
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NuMarkdownService = /** @class */ (function () {
        /**
         * @param {?} config
         * @param {?} lazySrv
         */
        function NuMarkdownService(config, lazySrv) {
            this.lazySrv = lazySrv;
            this.loading = false;
            this.loaded = false;
            this.notify$ = new rxjs.Subject();
            this.libs = (config === null || config === void 0 ? void 0 : config.libs) || [
                "https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js",
                "https://cdn.jsdelivr.net/npm/vditor/dist/index.css",
            ];
        }
        Object.defineProperty(NuMarkdownService.prototype, "notify", {
            /**
             * @return {?}
             */
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NuMarkdownService.prototype.load = function () {
            var _this = this;
            if (( /** @type {?} */(this)).loading) {
                if (( /** @type {?} */(this)).loaded) {
                    ( /** @type {?} */(this)).notify$.next();
                }
                return ( /** @type {?} */(this));
            }
            ( /** @type {?} */(this)).loading = true;
            /** @type {?} */
            var libs = ( /** @type {?} */(( /** @type {?} */(this)).libs));
            ( /** @type {?} */(this)).lazySrv
                .monitor(libs)
                .subscribe(( /**
         * @return {?}
         */function () { return ( /** @type {?} */(_this)).notify$.next(); }))
                .add(( /**
         * @return {?}
         */function () { return (( /** @type {?} */(_this)).loaded = true); }));
            ( /** @type {?} */(this)).lazySrv.load(libs);
            return ( /** @type {?} */(this));
        };
        return NuMarkdownService;
    }());
    NuMarkdownService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NuMarkdownService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [NU_MARKDOWN_CONFIG,] }] },
        { type: i2.NuLazyService }
    ]; };
    /** @nocollapse */ NuMarkdownService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NuMarkdownService_Factory() { return new NuMarkdownService(i0.ɵɵinject(NU_MARKDOWN_CONFIG), i0.ɵɵinject(i2.NuLazyService)); }, token: NuMarkdownService, providedIn: "root" });
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NuMarkdownComponent = /** @class */ (function () {
        /**
         * @param {?} el
         * @param {?} config
         * @param {?} srv
         * @param {?} ngZone
         */
        function NuMarkdownComponent(el, config, srv, ngZone) {
            var _this = this;
            this.el = el;
            this.config = config;
            this.srv = srv;
            this.ngZone = ngZone;
            this.ready = new i0.EventEmitter();
            this.onChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) { });
            this.notify$ = this.srv.notify.subscribe(( /**
             * @return {?}
             */function () { return _this.initDelay(); }));
        }
        Object.defineProperty(NuMarkdownComponent.prototype, "instance", {
            /**
             * @return {?}
             */
            get: function () {
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        NuMarkdownComponent.prototype.initDelay = function () {
            var _this = this;
            setTimeout(( /**
             * @return {?}
             */function () { return _this.init(); }), this.delay);
        };
        /**
         * @private
         * @return {?}
         */
        NuMarkdownComponent.prototype.init = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                var _a;
                /** @type {?} */
                var options = Object.assign(Object.assign({ value: _this._value, cache: {
                        enable: false,
                    }, mode: 'sv', minHeight: 350, input: ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            _this._value = value;
                            _this.onChange(value);
                        }));
                    }) }, (_a = _this.config) === null || _a === void 0 ? void 0 : _a.defaultOptions), _this.options);
                _this._instance = new Vditor(_this.el.nativeElement, options);
                _this.ready.emit(_this._instance);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NuMarkdownComponent.prototype.setDisabled = function () {
            if (!this.instance) {
                return;
            }
            if (this.disabled) {
                this.instance.disabled();
            }
            else {
                this.instance.enable();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NuMarkdownComponent.prototype.writeValue = function (value) {
            this._value = value || '';
            if (this.instance) {
                this.instance.setValue(this._value);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NuMarkdownComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} _
         * @return {?}
         */
        NuMarkdownComponent.prototype.registerOnTouched = function (_) { };
        /**
         * @param {?} _isDisabled
         * @return {?}
         */
        NuMarkdownComponent.prototype.setDisabledState = function (_isDisabled) {
            this.disabled = _isDisabled;
            this.setDisabled();
        };
        /**
         * @return {?}
         */
        NuMarkdownComponent.prototype.ngAfterViewInit = function () {
            if ((( /** @type {?} */(window))).QRious) {
                this.initDelay();
                return;
            }
            this.srv.load();
        };
        /**
         * @return {?}
         */
        NuMarkdownComponent.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
        };
        return NuMarkdownComponent;
    }());
    NuMarkdownComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'nu-markdown',
                    template: "",
                    exportAs: 'nuMarkdown',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: i0.forwardRef(( /**
                             * @return {?}
                             */function () { return NuMarkdownComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NuMarkdownComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: undefined, decorators: [{ type: i0.Inject, args: [NU_MARKDOWN_CONFIG,] }] },
        { type: NuMarkdownService },
        { type: i0.NgZone }
    ]; };
    NuMarkdownComponent.propDecorators = {
        options: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        delay: [{ type: i0.Input }],
        ready: [{ type: i0.Output }]
    };
    __decorate([
        convert.InputNumber(),
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NuMarkdownComponent];
    var NuMarkdownModule = /** @class */ (function () {
        function NuMarkdownModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NuMarkdownModule.forRoot = function (config) {
            return {
                ngModule: NuMarkdownModule,
                providers: [{ provide: NU_MARKDOWN_CONFIG, useValue: config }],
            };
        };
        return NuMarkdownModule;
    }());
    NuMarkdownModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-util-markdown.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NuMarkdownComponent = NuMarkdownComponent;
    exports.NuMarkdownModule = NuMarkdownModule;
    exports.ɵa = NU_MARKDOWN_CONFIG;
    exports.ɵc = NuMarkdownService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-util-markdown.umd.js.map
