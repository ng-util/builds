/**
 * @license ng-util(cipchk@qq.com) v12.1.0
 * (c) 2020 cipchk https://github.com/ng-util
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ng-util/monaco-editor', ['exports', '@angular/core', '@angular/forms', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-util'] = global['ng-util'] || {}, global['ng-util']['monaco-editor'] = {}), global.ng.core, global.ng.forms, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, forms, common, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

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
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
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
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var NU_MONACO_EDITOR_CONFIG = new i0.InjectionToken('NU_MONACO_EDITOR_CONFIG');

    var loadedMonaco = false;
    var loadPromise;
    // eslint-disable-next-line @angular-eslint/component-class-suffix
    var NuMonacoEditorBase = /** @class */ (function () {
        function NuMonacoEditorBase(el, config, doc, ngZone) {
            this.el = el;
            this.doc = doc;
            this.ngZone = ngZone;
            this._resize$ = null;
            this._disabled = false;
            this.height = "200px";
            this.delay = 0;
            this.event = new i0.EventEmitter();
            this._config = Object.assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
            this.options = this._config.defaultOptions;
        }
        Object.defineProperty(NuMonacoEditorBase.prototype, "disabled", {
            set: function (val) {
                this._disabled = typeof val === 'string' ? true : val;
                this.setDisabled();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NuMonacoEditorBase.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (val) {
                this._options = Object.assign(Object.assign({}, this._config.defaultOptions), val);
            },
            enumerable: false,
            configurable: true
        });
        NuMonacoEditorBase.prototype.initMonaco = function (_options, _initEvent) { };
        NuMonacoEditorBase.prototype.notifyEvent = function (type, other) {
            var _this = this;
            this.ngZone.run(function () { return _this.event.emit(Object.assign({ type: type, editor: _this._editor }, other)); });
        };
        NuMonacoEditorBase.prototype.setDisabled = function () {
            if (this._editor) {
                this._editor.updateOptions({ readOnly: this._disabled });
            }
            return this;
        };
        NuMonacoEditorBase.prototype.init = function () {
            var _this = this;
            if (loadedMonaco) {
                loadPromise.then(function () { return _this.initMonaco(_this.options, true); });
                return;
            }
            loadedMonaco = true;
            loadPromise = new Promise(function (resolve, reject) {
                var win = window;
                if (win == null) {
                    resolve();
                    return;
                }
                if (win.monaco) {
                    resolve();
                    return;
                }
                var baseUrl = _this._config.baseUrl;
                var amdLoader = function () {
                    win.require.config({ paths: { vs: baseUrl + "/vs" } });
                    if (typeof _this._config.monacoPreLoad === 'function') {
                        _this._config.monacoPreLoad();
                    }
                    win.require(['vs/editor/editor.main'], function () {
                        if (typeof _this._config.monacoLoad === 'function') {
                            _this._config.monacoLoad(win.monaco);
                        }
                        _this.initMonaco(_this.options, true);
                        resolve();
                    }, function () {
                        reject("Unable to load editor/editor.main module, please check your network environment.");
                    });
                };
                if (!win.require) {
                    var loaderScript_1 = _this.doc.createElement('script');
                    loaderScript_1.type = 'text/javascript';
                    loaderScript_1.src = baseUrl + "/vs/loader.js";
                    loaderScript_1.onload = amdLoader;
                    loaderScript_1.onerror = function () { return reject("Unable to load " + loaderScript_1.src + ", please check your network environment."); };
                    _this.doc.getElementsByTagName('head')[0].appendChild(loaderScript_1);
                }
                else {
                    amdLoader();
                }
            }).catch(function (error) { return _this.notifyEvent('load-error', { error: error }); });
        };
        NuMonacoEditorBase.prototype.cleanResize = function () {
            if (this._resize$) {
                this._resize$.unsubscribe();
            }
            return this;
        };
        NuMonacoEditorBase.prototype.registerResize = function () {
            var _this = this;
            this.cleanResize();
            this._resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(100))
                .subscribe(function () {
                _this._editor.layout();
                _this.notifyEvent('resize');
            });
            return this;
        };
        NuMonacoEditorBase.prototype.updateOptions = function () {
            var _this = this;
            if (!this._editor)
                return;
            this.ngZone.runOutsideAngular(function () {
                _this._editor.dispose();
                _this.initMonaco(_this._options, false);
            });
        };
        NuMonacoEditorBase.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.init(); }, +_this.delay); });
        };
        NuMonacoEditorBase.prototype.ngOnChanges = function (changes) {
            var allKeys = Object.keys(changes);
            if (allKeys.length === 1 && allKeys[0] === 'disabled')
                return;
            this.updateOptions();
        };
        NuMonacoEditorBase.prototype.ngOnDestroy = function () {
            this.cleanResize();
            if (this._editor) {
                this._editor.dispose();
                this._editor = undefined;
            }
        };
        return NuMonacoEditorBase;
    }());
    /** @nocollapse */ NuMonacoEditorBase.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorBase, deps: [{ token: i0__namespace.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: common.DOCUMENT }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Component });
    /** @nocollapse */ NuMonacoEditorBase.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorBase, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0__namespace, template: "", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorBase, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'nu-monaco-base',
                        template: "",
                    }]
            }], ctorParameters: function () {
            return [{ type: i0__namespace.ElementRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [NU_MONACO_EDITOR_CONFIG]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [common.DOCUMENT]
                        }] }, { type: i0__namespace.NgZone }];
        }, propDecorators: { height: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], event: [{
                    type: i0.Output
                }] } });

    var NuMonacoEditorComponent = /** @class */ (function (_super) {
        __extends(NuMonacoEditorComponent, _super);
        function NuMonacoEditorComponent() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this._value = '';
            _this.onChange = function (_) { };
            _this.onTouched = function () { };
            return _this;
        }
        Object.defineProperty(NuMonacoEditorComponent.prototype, "editor", {
            get: function () {
                return this._editor;
            },
            enumerable: false,
            configurable: true
        });
        NuMonacoEditorComponent.prototype.initMonaco = function (options, initEvent) {
            var _this = this;
            var hasModel = !!this.model;
            if (hasModel) {
                var model = monaco.editor.getModel(this.model.uri || '');
                if (model) {
                    options.model = model;
                    options.model.setValue(this._value);
                }
                else {
                    var _a = this.model, value = _a.value, language = _a.language, uri = _a.uri;
                    options.model = monaco.editor.createModel(value || this._value, language, uri);
                }
            }
            options.readOnly = this._disabled;
            var editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
            if (!hasModel) {
                editor.setValue(this._value);
            }
            editor.onDidChangeModelContent(function () {
                var value = editor.getValue();
                _this.ngZone.run(function () {
                    _this._value = value;
                    _this.onChange(value);
                });
            });
            editor.onDidBlurEditorWidget(function () { return _this.onTouched(); });
            this.registerResize();
            editor
                .getAction('editor.action.formatDocument')
                .run()
                .then(function () { return _this.notifyEvent(initEvent ? 'init' : 're-init'); });
        };
        NuMonacoEditorComponent.prototype.writeValue = function (value) {
            this._value = value || '';
            if (this._editor) {
                this._editor.setValue(this._value);
            }
        };
        NuMonacoEditorComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NuMonacoEditorComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NuMonacoEditorComponent.prototype.setDisabledState = function (_isDisabled) {
            this.disabled = _isDisabled;
            this.setDisabled();
        };
        return NuMonacoEditorComponent;
    }(NuMonacoEditorBase));
    /** @nocollapse */ NuMonacoEditorComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorComponent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Component });
    /** @nocollapse */ NuMonacoEditorComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: { model: "model" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: i0.forwardRef((function () { return NuMonacoEditorComponent; })),
                multi: true,
            },
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0__namespace, template: "", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorComponent, decorators: [{
                type: i0.Component,
                args: [{
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
                                useExisting: i0.forwardRef((function () { return NuMonacoEditorComponent; })),
                                multi: true,
                            },
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { model: [{
                    type: i0.Input
                }] } });

    var NuMonacoEditorDiffComponent = /** @class */ (function (_super) {
        __extends(NuMonacoEditorDiffComponent, _super);
        function NuMonacoEditorDiffComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NuMonacoEditorDiffComponent.prototype, "editor", {
            get: function () {
                return this._editor;
            },
            enumerable: false,
            configurable: true
        });
        NuMonacoEditorDiffComponent.prototype.initMonaco = function (options, initEvent) {
            var _this = this;
            if (!this.old || !this.new) {
                throw new Error('old or new not found for nu-monaco-diff-editor');
            }
            var theme = options.theme;
            options.readOnly = this._disabled;
            var editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
            options.theme = theme;
            editor.setModel({
                original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
                modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
            });
            // this.setDisabled();
            editor.onDidUpdateDiff(function () { return _this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }); });
            this.registerResize();
            if (initEvent)
                this.notifyEvent('init');
        };
        return NuMonacoEditorDiffComponent;
    }(NuMonacoEditorBase));
    /** @nocollapse */ NuMonacoEditorDiffComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorDiffComponent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Component });
    /** @nocollapse */ NuMonacoEditorDiffComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorDiffComponent, selector: "nu-monaco-diff-editor", inputs: { old: "old", new: "new" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, exportAs: ["nuMonacoDiffEditor"], usesInheritance: true, ngImport: i0__namespace, template: "", isInline: true, changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorDiffComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'nu-monaco-diff-editor',
                        template: "",
                        exportAs: 'nuMonacoDiffEditor',
                        host: {
                            '[style.display]': "'block'",
                            '[style.height]': 'height',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], propDecorators: { old: [{
                    type: i0.Input
                }], new: [{
                    type: i0.Input
                }] } });

    var COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
    var NuMonacoEditorModule = /** @class */ (function () {
        function NuMonacoEditorModule() {
        }
        NuMonacoEditorModule.forRoot = function (config) {
            return {
                ngModule: NuMonacoEditorModule,
                providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
            };
        };
        return NuMonacoEditorModule;
    }());
    /** @nocollapse */ NuMonacoEditorModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ NuMonacoEditorModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorModule, declarations: [NuMonacoEditorBase, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], imports: [common.CommonModule], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] });
    /** @nocollapse */ NuMonacoEditorModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorModule, imports: [[common.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NuMonacoEditorModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                        declarations: __spreadArray([NuMonacoEditorBase], __read(COMPONENTS)),
                        exports: COMPONENTS,
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NU_MONACO_EDITOR_CONFIG = NU_MONACO_EDITOR_CONFIG;
    exports.NuMonacoEditorComponent = NuMonacoEditorComponent;
    exports.NuMonacoEditorDiffComponent = NuMonacoEditorDiffComponent;
    exports.NuMonacoEditorModule = NuMonacoEditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-util-monaco-editor.umd.js.map
