import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, ElementRef, NgZone, DestroyRef, EventEmitter, numberAttribute, Component, Input, Output, booleanAttribute, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent, timer, take } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/// <reference path="./monaco.d.ts" preserve="true" />

const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');
function provideNuMonacoEditorConfig(config) {
    return makeEnvironmentProviders([{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }]);
}

let loadedMonaco = false;
let loadPromise;
// eslint-disable-next-line @angular-eslint/component-class-suffix
class NuMonacoEditorBase {
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    set options(val) {
        this._options = { ...this._config.defaultOptions, ...val };
        this.updateOptions();
    }
    get options() {
        return this._options;
    }
    constructor() {
        this.el = inject(ElementRef);
        this.config = inject(NU_MONACO_EDITOR_CONFIG, { optional: true });
        this.doc = inject(DOCUMENT);
        this.ngZone = inject(NgZone);
        this.destroy$ = inject(DestroyRef);
        this._resize$ = null;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', autoFormatTime: 100, ...this.config };
        this.options = this._config.defaultOptions;
    }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit({ type, editor: this._editor, ...other }));
    }
    setDisabled() {
        this._editor?.updateOptions({ readOnly: this._disabled });
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
        }).catch((error) => this.notifyEvent('load-error', { error }));
    }
    cleanResize() {
        this._resize$?.unsubscribe();
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
    ngOnDestroy() {
        this.cleanResize();
        this._editor?.dispose();
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorBase, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.0.0", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: ["delay", "delay", numberAttribute], disabled: "disabled", options: "options" }, outputs: { event: "event" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                }]
        }], ctorParameters: () => [], propDecorators: { height: [{
                type: Input
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], event: [{
                type: Output
            }] } });

class PlaceholderWidget {
    constructor(editor, placeholder) {
        this.ID = 'editor.widget.placeholderHint';
        this.placeholder = placeholder;
        this.editor = editor;
    }
    update(text) {
        if (this.node == null)
            return;
        this.node.innerHTML = text ?? this.placeholder ?? '';
    }
    getId() {
        return this.ID;
    }
    getDomNode() {
        if (this.node == null) {
            const node = (this.node = document.createElement('div'));
            node.classList.add('monaco-editor-placeholder');
            node.style.width = 'max-content';
            node.style.color = 'gray';
            node.innerHTML = this.placeholder;
            node.style.fontStyle = 'italic';
            this.editor.applyFontInfo(node);
        }
        return this.node;
    }
    getPosition() {
        return {
            position: { lineNumber: 1, column: 1 },
            preference: [monaco.editor.ContentWidgetPositionPreference.EXACT],
        };
    }
    dispose() {
        this.editor.removeContentWidget(this);
    }
}

class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.autoFormat = true;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    set placeholder(v) {
        this._placeholder = v;
        this._placeholderWidget?.update(v);
    }
    get editor() {
        return this._editor;
    }
    togglePlaceholder() {
        const text = this._placeholder;
        if (text == null || text.length <= 0 || this.editor == null)
            return;
        if (this._placeholderWidget == null) {
            this._placeholderWidget = new PlaceholderWidget(this.editor, text);
        }
        if (this._value.length > 0) {
            this.editor.removeContentWidget(this._placeholderWidget);
        }
        else {
            this.editor.addContentWidget(this._placeholderWidget);
        }
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
        if (this._disabled != null)
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
            this.togglePlaceholder();
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.togglePlaceholder();
        this.registerResize();
        const eventName = initEvent ? 'init' : 're-init';
        if (this.autoFormat) {
            timer(this._config.autoFormatTime)
                .pipe(takeUntilDestroyed(this.destroy$), take(1))
                .subscribe(() => {
                const action = editor.getAction('editor.action.formatDocument');
                if (action == null) {
                    this.notifyEvent(eventName);
                    return;
                }
                action.run().then(() => this.notifyEvent(eventName));
            });
            return;
        }
        this.notifyEvent(eventName);
    }
    writeValue(value) {
        this._value = value || '';
        this._editor?.setValue(this._value);
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.0.0", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { placeholder: "placeholder", model: "model", autoFormat: ["autoFormat", "autoFormat", booleanAttribute] }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMonacoEditorComponent)),
                multi: true,
            },
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
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
        }], propDecorators: { placeholder: [{
                type: Input
            }], model: [{
                type: Input
            }], autoFormat: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        if (!this.old || !this.new) {
            this.notifyEvent('error', { error: 'old or new not found for nu-monaco-diff-editor' });
            return;
        }
        const theme = options.theme;
        if (this._disabled != null)
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorDiffComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0", type: NuMonacoEditorDiffComponent, isStandalone: true, selector: "nu-monaco-diff-editor", inputs: { old: "old", new: "new" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, exportAs: ["nuMonacoDiffEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorDiffComponent, decorators: [{
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
    /**
     * Or use `provideNuMonacoEditorConfig` instead.
     */
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, provideNuMonacoEditorConfig };
//# sourceMappingURL=ng-util-monaco-editor.mjs.map
