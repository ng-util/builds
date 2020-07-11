/**
 * @license ng-util(cipchk@qq.com) v10.1.1
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ng-util/monaco-editor', ['exports', '@angular/core', '@angular/forms', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util']['monaco-editor'] = {}), global.ng.core, global.ng.forms, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, forms, common, rxjs, operators) { 'use strict';

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
     * Generated from: monaco-editor.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NU_MONACO_EDITOR_CONFIG = new core.InjectionToken('NU_MONACO_EDITOR_CONFIG');
    /**
     * @record
     */
    function NuMonacoEditorConfig() { }
    if (false) {
        /**
         * The base URL to monaco editor library assets via AMD (RequireJS), Default: `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min`
         * You can using local path, e.g.: `assets/monaco-editor/min`.
         * @type {?|undefined}
         */
        NuMonacoEditorConfig.prototype.baseUrl;
        /**
         * Default options when creating editors
         * @type {?|undefined}
         */
        NuMonacoEditorConfig.prototype.defaultOptions;
        /**
         * The event after the first loading of the monaco editor library is completed, use this function to extend monaco editor functionalities.
         * - \@param `_monaco` equar to `window.monaco`
         * @type {?|undefined}
         */
        NuMonacoEditorConfig.prototype.monacoLoad;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: monaco-editor-base.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var loadedMonaco = false;
    /** @type {?} */
    var loadPromise;
    /**
     * @abstract
     */
    // tslint:disable-next-line: component-class-suffix
    var NuMonacoEditorBase = /** @class */ (function () {
        /**
         * @param {?} el
         * @param {?} config
         * @param {?} doc
         * @param {?} ngZone
         */
        function NuMonacoEditorBase(el, config, doc, ngZone) {
            this.el = el;
            this.doc = doc;
            this.ngZone = ngZone;
            this._disabled = false;
            this.height = "200px";
            this.delay = 0;
            this.event = new core.EventEmitter();
            this._config = Object.assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
            this.options = ( /** @type {?} */(this._config.defaultOptions));
        }
        Object.defineProperty(NuMonacoEditorBase.prototype, "disabled", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._disabled = typeof val === 'string' ? true : val;
                this.setDisabled();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NuMonacoEditorBase.prototype, "options", {
            /**
             * @return {?}
             */
            get: function () {
                return this._options;
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._options = Object.assign(Object.assign({}, this._config.defaultOptions), val);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @protected
         * @param {?} type
         * @param {?=} other
         * @return {?}
         */
        NuMonacoEditorBase.prototype.notifyEvent = function (type, other) {
            var _this = this;
            this.ngZone.run(( /**
             * @return {?}
             */function () { return _this.event.emit(Object.assign({ type: type, editor: ( /** @type {?} */(_this._editor)) }, other)); }));
        };
        /**
         * @protected
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NuMonacoEditorBase.prototype.setDisabled = function () {
            if (( /** @type {?} */(this))._editor) {
                (( /** @type {?} */(( /** @type {?} */(this))._editor))).updateOptions({ readOnly: ( /** @type {?} */(this))._disabled });
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @private
         * @return {?}
         */
        NuMonacoEditorBase.prototype.init = function () {
            var _this = this;
            if (loadedMonaco) {
                loadPromise.then(( /**
                 * @return {?}
                 */function () { return _this.initMonaco(_this.options, true); }));
                return;
            }
            loadedMonaco = true;
            loadPromise = new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */function (resolve, reject) {
                /** @type {?} */
                var win = window;
                if (win == null) {
                    resolve();
                    return;
                }
                if (win.monaco) {
                    resolve();
                    return;
                }
                /** @type {?} */
                var baseUrl = _this._config.baseUrl;
                /** @type {?} */
                var amdLoader = ( /**
                 * @return {?}
                 */function () {
                    win.require.config({ paths: { vs: baseUrl + "/vs" } });
                    win.require(['vs/editor/editor.main'], ( /**
                     * @return {?}
                     */function () {
                        if (typeof _this._config.monacoLoad === 'function') {
                            _this._config.monacoLoad(win.monaco);
                        }
                        _this.initMonaco(_this.options, true);
                        resolve();
                    }), ( /**
                     * @return {?}
                     */function () {
                        reject("Unable to load editor/editor.main module, please check your network environment.");
                    }));
                });
                if (!win.require) {
                    /** @type {?} */
                    var loaderScript_1 = ( /** @type {?} */(_this.doc.createElement('script')));
                    loaderScript_1.type = 'text/javascript';
                    loaderScript_1.src = baseUrl + "/vs/loader.js";
                    loaderScript_1.onload = amdLoader;
                    loaderScript_1.onerror = ( /**
                     * @return {?}
                     */function () { return reject("Unable to load " + loaderScript_1.src + ", please check your network environment."); });
                    _this.doc.getElementsByTagName('head')[0].appendChild(loaderScript_1);
                }
                else {
                    amdLoader();
                }
            })).catch(( /**
             * @param {?} error
             * @return {?}
             */function (/**
             * @param {?} error
             * @return {?}
             */ error) { return _this.notifyEvent('load-error', { error: error }); }));
        };
        /**
         * @protected
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NuMonacoEditorBase.prototype.cleanResize = function () {
            if (( /** @type {?} */(this))._resize$) {
                ( /** @type {?} */(this))._resize$.unsubscribe();
            }
            return ( /** @type {?} */(this));
        };
        /**
         * @protected
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        NuMonacoEditorBase.prototype.registerResize = function () {
            var _this = this;
            ( /** @type {?} */(this)).cleanResize();
            ( /** @type {?} */(this))._resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(100))
                .subscribe(( /**
         * @return {?}
         */function () {
                ( /** @type {?} */(( /** @type {?} */(_this))._editor)).layout();
                ( /** @type {?} */(_this)).notifyEvent('resize');
            }));
            return ( /** @type {?} */(this));
        };
        /**
         * @protected
         * @return {?}
         */
        NuMonacoEditorBase.prototype.updateOptions = function () {
            var _this = this;
            if (!this._editor)
                return;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                ( /** @type {?} */(_this._editor)).dispose();
                _this.initMonaco(_this._options, false);
            }));
        };
        /**
         * @return {?}
         */
        NuMonacoEditorBase.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return setTimeout(( /**
             * @return {?}
             */function () { return _this.init(); }), +_this.delay); }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NuMonacoEditorBase.prototype.ngOnChanges = function (changes) {
            /** @type {?} */
            var allKeys = Object.keys(changes);
            if (allKeys.length === 1 && allKeys[0] === 'disabled')
                return;
            this.updateOptions();
        };
        /**
         * @return {?}
         */
        NuMonacoEditorBase.prototype.ngOnDestroy = function () {
            this.cleanResize();
            if (this._editor) {
                this._editor.dispose();
                this._editor = undefined;
            }
        };
        return NuMonacoEditorBase;
    }());
    NuMonacoEditorBase.decorators = [
        { type: core.Component, args: [{
                    selector: 'nu-monaco-base',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    NuMonacoEditorBase.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [NU_MONACO_EDITOR_CONFIG,] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: core.NgZone }
    ]; };
    NuMonacoEditorBase.propDecorators = {
        height: [{ type: core.Input }],
        delay: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        options: [{ type: core.Input }],
        event: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype._editor;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype._options;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype._resize$;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype._config;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype._disabled;
        /** @type {?} */
        NuMonacoEditorBase.prototype.height;
        /** @type {?} */
        NuMonacoEditorBase.prototype.delay;
        /** @type {?} */
        NuMonacoEditorBase.prototype.event;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype.el;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype.doc;
        /**
         * @type {?}
         * @protected
         */
        NuMonacoEditorBase.prototype.ngZone;
        /**
         * @abstract
         * @protected
         * @param {?} options
         * @param {?} initEvent
         * @return {?}
         */
        NuMonacoEditorBase.prototype.initMonaco = function (options, initEvent) { };
    }

    var NuMonacoEditorComponent = /** @class */ (function (_super) {
        __extends(NuMonacoEditorComponent, _super);
        function NuMonacoEditorComponent() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._value = '';
            _this.onChange = ( /**
             * @param {?} _
             * @return {?}
             */function (_) { });
            _this.onTouched = ( /**
             * @return {?}
             */function () { });
            return _this;
        }
        Object.defineProperty(NuMonacoEditorComponent.prototype, "editor", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this._editor));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} options
         * @param {?} initEvent
         * @return {?}
         */
        NuMonacoEditorComponent.prototype.initMonaco = function (options, initEvent) {
            var _this = this;
            /** @type {?} */
            var hasModel = !!this.model;
            if (hasModel) {
                /** @type {?} */
                var model = monaco.editor.getModel(( /** @type {?} */(this.model.uri)) || '');
                if (model) {
                    options.model = model;
                    options.model.setValue(this._value);
                }
                else {
                    var _a = ( /** @type {?} */(this.model)), value = _a.value, language = _a.language, uri = _a.uri;
                    options.model = monaco.editor.createModel(value || this._value, language, uri);
                }
            }
            /** @type {?} */
            var editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
            if (!hasModel) {
                editor.setValue(this._value);
            }
            editor.onDidChangeModelContent(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var value = editor.getValue();
                _this.ngZone.run(( /**
                 * @return {?}
                 */function () {
                    _this._value = value;
                    _this.onChange(value);
                }));
            }));
            editor.onDidBlurEditorWidget(( /**
             * @return {?}
             */function () { return _this.onTouched(); }));
            this.registerResize();
            editor
                .getAction('editor.action.formatDocument')
                .run()
                .then(( /**
         * @return {?}
         */function () { return _this.notifyEvent(initEvent ? 'init' : 're-init'); }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NuMonacoEditorComponent.prototype.writeValue = function (value) {
            this._value = value || '';
            if (this._editor) {
                (( /** @type {?} */(this._editor))).setValue(this._value);
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NuMonacoEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NuMonacoEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} _isDisabled
         * @return {?}
         */
        NuMonacoEditorComponent.prototype.setDisabledState = function (_isDisabled) {
            this.disabled = _isDisabled;
            this.setDisabled();
        };
        return NuMonacoEditorComponent;
    }(NuMonacoEditorBase));
    NuMonacoEditorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nu-monaco-editor',
                    template: "",
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return NuMonacoEditorComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorComponent.propDecorators = {
        model: [{ type: core.Input }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NuMonacoEditorComponent.prototype._value;
        /** @type {?} */
        NuMonacoEditorComponent.prototype.model;
        /**
         * @type {?}
         * @private
         */
        NuMonacoEditorComponent.prototype.onChange;
        /**
         * @type {?}
         * @private
         */
        NuMonacoEditorComponent.prototype.onTouched;
    }

    var NuMonacoEditorDiffComponent = /** @class */ (function (_super) {
        __extends(NuMonacoEditorDiffComponent, _super);
        function NuMonacoEditorDiffComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NuMonacoEditorDiffComponent.prototype, "editor", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this._editor));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} options
         * @param {?} initEvent
         * @return {?}
         */
        NuMonacoEditorDiffComponent.prototype.initMonaco = function (options, initEvent) {
            var _this = this;
            if (!this.old || !this.new) {
                throw new Error('old or new not found for nu-monaco-diff-editor');
            }
            /** @type {?} */
            var theme = options.theme;
            /** @type {?} */
            var editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
            options.theme = theme;
            editor.setModel({
                original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
                modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
            });
            // this.setDisabled();
            editor.onDidUpdateDiff(( /**
             * @return {?}
             */function () { return _this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }); }));
            this.registerResize();
            if (initEvent)
                this.notifyEvent('init');
        };
        return NuMonacoEditorDiffComponent;
    }(NuMonacoEditorBase));
    NuMonacoEditorDiffComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: "",
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorDiffComponent.propDecorators = {
        old: [{ type: core.Input }],
        new: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        NuMonacoEditorDiffComponent.prototype.old;
        /** @type {?} */
        NuMonacoEditorDiffComponent.prototype.new;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: monaco-editor.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
    var NuMonacoEditorModule = /** @class */ (function () {
        function NuMonacoEditorModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NuMonacoEditorModule.forRoot = function (config) {
            return {
                ngModule: NuMonacoEditorModule,
                providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
            };
        };
        return NuMonacoEditorModule;
    }());
    NuMonacoEditorModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-util-monaco-editor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NU_MONACO_EDITOR_CONFIG = NU_MONACO_EDITOR_CONFIG;
    exports.NuMonacoEditorComponent = NuMonacoEditorComponent;
    exports.NuMonacoEditorDiffComponent = NuMonacoEditorDiffComponent;
    exports.NuMonacoEditorModule = NuMonacoEditorModule;
    exports.ɵa = NuMonacoEditorBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-util-monaco-editor.umd.js.map
