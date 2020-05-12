import { __assign, __extends } from 'tslib';
import { InjectionToken, EventEmitter, ElementRef, Inject, NgZone, Input, Output, Component, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="./monaco.d.ts" />
// tslint:disable-next-line: no-reference
/// <reference path="./monaco.d.ts" />
/**
 * @record
 */
function NuMonacoEditorModel() { }
if (false) {
    /** @type {?|undefined} */
    NuMonacoEditorModel.prototype.language;
    /** @type {?|undefined} */
    NuMonacoEditorModel.prototype.uri;
}
/**
 * @record
 */
function NuMonacoEditorDiffModel() { }
if (false) {
    /** @type {?} */
    NuMonacoEditorDiffModel.prototype.code;
    /** @type {?|undefined} */
    NuMonacoEditorDiffModel.prototype.language;
}
/**
 * @record
 */
function NuMonacoEditorEvent() { }
if (false) {
    /** @type {?|undefined} */
    NuMonacoEditorEvent.prototype.type;
    /** @type {?|undefined} */
    NuMonacoEditorEvent.prototype.editor;
    /** @type {?|undefined} */
    NuMonacoEditorEvent.prototype.error;
    /**
     * Just only `nu-monaco-editor-diff` component
     * @type {?|undefined}
     */
    NuMonacoEditorEvent.prototype.diffValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');
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
var NuMonacoEditorBase = /** @class */ (function () {
    function NuMonacoEditorBase(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._disabled = false;
        this.height = "200px";
        this.event = new EventEmitter();
        this._config = __assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
        this.options = (/** @type {?} */ (this._config.defaultOptions));
    }
    Object.defineProperty(NuMonacoEditorBase.prototype, "disabled", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disabled = typeof val === 'string' ? true : val;
            this.setDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NuMonacoEditorBase.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._options = __assign(__assign({}, this._config.defaultOptions), val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} type
     * @param {?=} other
     * @return {?}
     */
    NuMonacoEditorBase.prototype.notifyEvent = /**
     * @protected
     * @param {?} type
     * @param {?=} other
     * @return {?}
     */
    function (type, other) {
        var _this = this;
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.event.emit(__assign({ type: type, editor: (/** @type {?} */ (_this._editor)) }, other)); }));
    };
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NuMonacoEditorBase.prototype.setDisabled = /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if ((/** @type {?} */ (this))._editor) {
            ((/** @type {?} */ ((/** @type {?} */ (this))._editor))).updateOptions({ readOnly: (/** @type {?} */ (this))._disabled });
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    NuMonacoEditorBase.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (loadedMonaco) {
            loadPromise.then((/**
             * @return {?}
             */
            function () { return _this.initMonaco(_this.options, true); }));
            return;
        }
        loadedMonaco = true;
        loadPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
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
            var amdLoader = (/**
             * @return {?}
             */
            function () {
                win.require.config({ paths: { vs: baseUrl + "/vs" } });
                win.require(['vs/editor/editor.main'], (/**
                 * @return {?}
                 */
                function () {
                    if (typeof _this._config.monacoLoad === 'function') {
                        _this._config.monacoLoad(win.monaco);
                    }
                    _this.initMonaco(_this.options, true);
                    resolve();
                }), (/**
                 * @return {?}
                 */
                function () {
                    reject("Unable to load editor/editor.main module, please check your network environment.");
                }));
            });
            if (!win.require) {
                /** @type {?} */
                var loaderScript_1 = (/** @type {?} */ (_this.doc.createElement('script')));
                loaderScript_1.type = 'text/javascript';
                loaderScript_1.src = baseUrl + "/vs/loader.js";
                loaderScript_1.addEventListener('load', amdLoader);
                loaderScript_1.addEventListener('error', (/**
                 * @return {?}
                 */
                function () { return reject("Unable to load " + loaderScript_1.src + ", please check your network environment."); }));
                _this.doc.body.appendChild(loaderScript_1);
            }
            else {
                amdLoader();
            }
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.notifyEvent('load-error', { error: error }); }));
    };
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NuMonacoEditorBase.prototype.cleanResize = /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if ((/** @type {?} */ (this))._resize$) {
            (/** @type {?} */ (this))._resize$.unsubscribe();
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    NuMonacoEditorBase.prototype.registerResize = /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        (/** @type {?} */ (this)).cleanResize();
        (/** @type {?} */ (this))._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () {
            (/** @type {?} */ ((/** @type {?} */ (_this))._editor)).layout();
            (/** @type {?} */ (_this)).notifyEvent('resize');
        }));
        return (/** @type {?} */ (this));
    };
    /**
     * @protected
     * @return {?}
     */
    NuMonacoEditorBase.prototype.updateOptions = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            (/** @type {?} */ (_this._editor)).dispose();
            _this.initMonaco(_this._options, false);
        }));
    };
    /**
     * @return {?}
     */
    NuMonacoEditorBase.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.init(); }));
    };
    /**
     * @return {?}
     */
    NuMonacoEditorBase.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        console.log('ngOnChanges');
        this.updateOptions();
    };
    /**
     * @return {?}
     */
    NuMonacoEditorBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cleanResize();
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    };
    /** @nocollapse */
    NuMonacoEditorBase.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [NU_MONACO_EDITOR_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    NuMonacoEditorBase.propDecorators = {
        height: [{ type: Input }],
        disabled: [{ type: Input }],
        options: [{ type: Input }],
        event: [{ type: Output }]
    };
    return NuMonacoEditorBase;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NuMonacoEditorComponent = /** @class */ (function (_super) {
    __extends(NuMonacoEditorComponent, _super);
    function NuMonacoEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = '';
        _this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        _this.onTouched = (/**
         * @return {?}
         */
        function () { });
        return _this;
    }
    Object.defineProperty(NuMonacoEditorComponent.prototype, "editor", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this._editor));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.initMonaco = /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    function (options, initEvent) {
        var _this = this;
        /** @type {?} */
        var hasModel = !!this.model;
        if (hasModel) {
            /** @type {?} */
            var model = monaco.editor.getModel((/** @type {?} */ (this.model.uri)) || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                var _a = (/** @type {?} */ (this.model)), language = _a.language, uri = _a.uri;
                options.model = monaco.editor.createModel(this._value, language, uri);
            }
        }
        console.log(options.model);
        /** @type {?} */
        var editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value = editor.getValue();
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._value = value;
                _this.onChange(value);
            }));
        }));
        editor.onDidBlurEditorWidget((/**
         * @return {?}
         */
        function () { return _this.onTouched(); }));
        this.registerResize();
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then((/**
         * @return {?}
         */
        function () {
            _this.notifyEvent(initEvent ? 'init' : 're-init');
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value || '';
        if (this._editor) {
            ((/** @type {?} */ (this._editor))).setValue(this._value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    NuMonacoEditorComponent.prototype.setDisabledState = /**
     * @param {?} _isDisabled
     * @return {?}
     */
    function (_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    };
    NuMonacoEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nu-monaco-editor',
                    template: "",
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NuMonacoEditorComponent; })),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorComponent.propDecorators = {
        model: [{ type: Input }]
    };
    return NuMonacoEditorComponent;
}(NuMonacoEditorBase));
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

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-diff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NuMonacoEditorDiffComponent = /** @class */ (function (_super) {
    __extends(NuMonacoEditorDiffComponent, _super);
    function NuMonacoEditorDiffComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NuMonacoEditorDiffComponent.prototype, "editor", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this._editor));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    NuMonacoEditorDiffComponent.prototype.initMonaco = /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    function (options, initEvent) {
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
        editor.onDidUpdateDiff((/**
         * @return {?}
         */
        function () { return _this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }); }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    };
    NuMonacoEditorDiffComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: "",
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': "'block'",
                        '[style.height]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    NuMonacoEditorDiffComponent.propDecorators = {
        old: [{ type: Input }],
        new: [{ type: Input }]
    };
    return NuMonacoEditorDiffComponent;
}(NuMonacoEditorBase));
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
    NuMonacoEditorModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    };
    NuMonacoEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];
    return NuMonacoEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-util-monaco-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, NuMonacoEditorBase as ɵa };
//# sourceMappingURL=ng-util-monaco-editor.js.map
