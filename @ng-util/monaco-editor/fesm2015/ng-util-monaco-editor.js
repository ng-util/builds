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
    NuMonacoEditorModel.prototype.value;
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
const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');
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
let loadedMonaco = false;
/** @type {?} */
let loadPromise;
/**
 * @abstract
 */
class NuMonacoEditorBase {
    /**
     * @param {?} el
     * @param {?} config
     * @param {?} doc
     * @param {?} ngZone
     */
    constructor(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._disabled = false;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = Object.assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
        this.options = (/** @type {?} */ (this._config.defaultOptions));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set options(val) {
        this._options = Object.assign(Object.assign({}, this._config.defaultOptions), val);
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @protected
     * @param {?} type
     * @param {?=} other
     * @return {?}
     */
    notifyEvent(type, other) {
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.event.emit(Object.assign({ type, editor: (/** @type {?} */ (this._editor)) }, other))));
    }
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setDisabled() {
        if ((/** @type {?} */ (this))._editor) {
            ((/** @type {?} */ ((/** @type {?} */ (this))._editor))).updateOptions({ readOnly: (/** @type {?} */ (this))._disabled });
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (loadedMonaco) {
            loadPromise.then((/**
             * @return {?}
             */
            () => this.initMonaco(this.options, true)));
            return;
        }
        loadedMonaco = true;
        loadPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const win = window;
            if (win == null) {
                resolve();
                return;
            }
            if (win.monaco) {
                resolve();
                return;
            }
            /** @type {?} */
            const baseUrl = this._config.baseUrl;
            /** @type {?} */
            const amdLoader = (/**
             * @return {?}
             */
            () => {
                win.require.config({ paths: { vs: `${baseUrl}/vs` } });
                win.require(['vs/editor/editor.main'], (/**
                 * @return {?}
                 */
                () => {
                    if (typeof this._config.monacoLoad === 'function') {
                        this._config.monacoLoad(win.monaco);
                    }
                    this.initMonaco(this.options, true);
                    resolve();
                }), (/**
                 * @return {?}
                 */
                () => {
                    reject(`Unable to load editor/editor.main module, please check your network environment.`);
                }));
            });
            if (!win.require) {
                /** @type {?} */
                const loaderScript = (/** @type {?} */ (this.doc.createElement('script')));
                loaderScript.type = 'text/javascript';
                loaderScript.src = `${baseUrl}/vs/loader.js`;
                loaderScript.onload = amdLoader;
                loaderScript.onerror = (/**
                 * @return {?}
                 */
                () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`));
                this.doc.getElementsByTagName('head')[0].appendChild(loaderScript);
            }
            else {
                amdLoader();
            }
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => this.notifyEvent('load-error', { error })));
    }
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    cleanResize() {
        if ((/** @type {?} */ (this))._resize$) {
            (/** @type {?} */ (this))._resize$.unsubscribe();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    registerResize() {
        (/** @type {?} */ (this)).cleanResize();
        (/** @type {?} */ (this))._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ ((/** @type {?} */ (this))._editor)).layout();
            (/** @type {?} */ (this)).notifyEvent('resize');
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @protected
     * @return {?}
     */
    updateOptions() {
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this._editor)).dispose();
            this.initMonaco(this._options, false);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.init()), +this.delay)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const allKeys = Object.keys(changes);
        if (allKeys.length === 1 && allKeys[0] === 'disabled')
            return;
        this.updateOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanResize();
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    }
}
/** @nocollapse */
NuMonacoEditorBase.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [NU_MONACO_EDITOR_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
NuMonacoEditorBase.propDecorators = {
    height: [{ type: Input }],
    delay: [{ type: Input }],
    disabled: [{ type: Input }],
    options: [{ type: Input }],
    event: [{ type: Output }]
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

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get editor() {
        return (/** @type {?} */ (this._editor));
    }
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    initMonaco(options, initEvent) {
        /** @type {?} */
        const hasModel = !!this.model;
        if (hasModel) {
            /** @type {?} */
            const model = monaco.editor.getModel((/** @type {?} */ (this.model.uri)) || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = (/** @type {?} */ (this.model));
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        /** @type {?} */
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const value = editor.getValue();
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this._value = value;
                this.onChange(value);
            }));
        }));
        editor.onDidBlurEditorWidget((/**
         * @return {?}
         */
        () => this.onTouched()));
        this.registerResize();
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then((/**
         * @return {?}
         */
        () => this.notifyEvent(initEvent ? 'init' : 're-init')));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value || '';
        if (this._editor) {
            ((/** @type {?} */ (this._editor))).setValue(this._value);
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
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} _isDisabled
     * @return {?}
     */
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
NuMonacoEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-monaco-editor',
                template: ``,
                exportAs: 'nuMonacoEditor',
                host: {
                    '[style.display]': `'block'`,
                    '[style.height]': 'height',
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NuMonacoEditorComponent)),
                        multi: true,
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMonacoEditorComponent.propDecorators = {
    model: [{ type: Input }]
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

/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-diff.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    /**
     * @return {?}
     */
    get editor() {
        return (/** @type {?} */ (this._editor));
    }
    /**
     * @param {?} options
     * @param {?} initEvent
     * @return {?}
     */
    initMonaco(options, initEvent) {
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        /** @type {?} */
        const theme = options.theme;
        /** @type {?} */
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff((/**
         * @return {?}
         */
        () => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() })));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
}
NuMonacoEditorDiffComponent.decorators = [
    { type: Component, args: [{
                selector: 'nu-monaco-diff-editor',
                template: ``,
                exportAs: 'nuMonacoDiffEditor',
                host: {
                    '[style.display]': `'block'`,
                    '[style.height]': 'height',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NuMonacoEditorDiffComponent.propDecorators = {
    old: [{ type: Input }],
    new: [{ type: Input }]
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
const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
class NuMonacoEditorModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
}
NuMonacoEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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
 * Generated from: ng-util-monaco-editor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, NuMonacoEditorBase as ɵa };
//# sourceMappingURL=ng-util-monaco-editor.js.map
