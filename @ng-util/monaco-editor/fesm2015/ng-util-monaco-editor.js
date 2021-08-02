import * as i0 from '@angular/core';
import { InjectionToken, EventEmitter, Component, Inject, Input, Output, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// tslint:disable-next-line: no-reference

const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');

let loadedMonaco = false;
let loadPromise;
// eslint-disable-next-line @angular-eslint/component-class-suffix
class NuMonacoEditorBase {
    constructor(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._resize$ = null;
        this._disabled = false;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = Object.assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
        this.options = this._config.defaultOptions;
    }
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    set options(val) {
        this._options = Object.assign(Object.assign({}, this._config.defaultOptions), val);
    }
    get options() {
        return this._options;
    }
    initMonaco(_options, _initEvent) { }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit(Object.assign({ type, editor: this._editor }, other)));
    }
    setDisabled() {
        if (this._editor) {
            this._editor.updateOptions({ readOnly: this._disabled });
        }
        return this;
    }
    init() {
        if (loadedMonaco) {
            loadPromise.then(() => this.initMonaco(this.options, true));
            return;
        }
        loadedMonaco = true;
        loadPromise = new Promise((resolve, reject) => {
            const win = window;
            if (win == null) {
                resolve();
                return;
            }
            if (win.monaco) {
                resolve();
                return;
            }
            const baseUrl = this._config.baseUrl;
            const amdLoader = () => {
                win.require.config({ paths: { vs: `${baseUrl}/vs` } });
                if (typeof this._config.monacoPreLoad === 'function') {
                    this._config.monacoPreLoad();
                }
                win.require(['vs/editor/editor.main'], () => {
                    if (typeof this._config.monacoLoad === 'function') {
                        this._config.monacoLoad(win.monaco);
                    }
                    this.initMonaco(this.options, true);
                    resolve();
                }, () => {
                    reject(`Unable to load editor/editor.main module, please check your network environment.`);
                });
            };
            if (!win.require) {
                const loaderScript = this.doc.createElement('script');
                loaderScript.type = 'text/javascript';
                loaderScript.src = `${baseUrl}/vs/loader.js`;
                loaderScript.onload = amdLoader;
                loaderScript.onerror = () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`);
                this.doc.getElementsByTagName('head')[0].appendChild(loaderScript);
            }
            else {
                amdLoader();
            }
        }).catch(error => this.notifyEvent('load-error', { error }));
    }
    cleanResize() {
        if (this._resize$) {
            this._resize$.unsubscribe();
        }
        return this;
    }
    registerResize() {
        this.cleanResize();
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe(() => {
            this._editor.layout();
            this.notifyEvent('resize');
        });
        return this;
    }
    updateOptions() {
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular(() => {
            this._editor.dispose();
            this.initMonaco(this._options, false);
        });
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), +this.delay));
    }
    ngOnChanges(changes) {
        const allKeys = Object.keys(changes);
        if (allKeys.length === 1 && allKeys[0] === 'disabled')
            return;
        this.updateOptions();
    }
    ngOnDestroy() {
        this.cleanResize();
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    }
}
/** @nocollapse */ NuMonacoEditorBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: DOCUMENT }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorBase, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MONACO_EDITOR_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.NgZone }]; }, propDecorators: { height: [{
                type: Input
            }], delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], event: [{
                type: Output
            }] } });

class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        const hasModel = !!this.model;
        if (hasModel) {
            const model = monaco.editor.getModel(this.model.uri || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = this.model;
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent(() => {
            const value = editor.getValue();
            this.ngZone.run(() => {
                this._value = value;
                this.onChange(value);
            });
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.registerResize();
        editor
            .getAction('editor.action.formatDocument')
            .run()
            .then(() => this.notifyEvent(initEvent ? 'init' : 're-init'));
    }
    writeValue(value) {
        this._value = value || '';
        if (this._editor) {
            this._editor.setValue(this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
/** @nocollapse */ NuMonacoEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: { model: "model" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => NuMonacoEditorComponent)),
            multi: true,
        },
    ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
            type: Component,
            args: [{
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
                            useExisting: forwardRef((() => NuMonacoEditorComponent)),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { model: [{
                type: Input
            }] } });

class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        const theme = options.theme;
        options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff(() => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
}
/** @nocollapse */ NuMonacoEditorDiffComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorDiffComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorDiffComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NuMonacoEditorDiffComponent, selector: "nu-monaco-diff-editor", inputs: { old: "old", new: "new" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, exportAs: ["nuMonacoDiffEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorDiffComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: ``,
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { old: [{
                type: Input
            }], new: [{
                type: Input
            }] } });

const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
class NuMonacoEditorModule {
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
}
/** @nocollapse */ NuMonacoEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ NuMonacoEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorModule, declarations: [NuMonacoEditorBase, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], imports: [CommonModule], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] });
/** @nocollapse */ NuMonacoEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [NuMonacoEditorBase, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule };
//# sourceMappingURL=ng-util-monaco-editor.js.map
