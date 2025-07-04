import * as i0 from '@angular/core';
import { InjectionToken, makeEnvironmentProviders, inject, ElementRef, NgZone, DestroyRef, input, numberAttribute, booleanAttribute, output, effect, Component, untracked, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, timer, take } from 'rxjs';
import { DOCUMENT, CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./monaco.d.ts" preserve="true" />

const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');
function provideNuMonacoEditorConfig(config) {
    return makeEnvironmentProviders([{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }]);
}

let loadedMonaco = false;
let loadPromise;
class NuMonacoEditorBase {
    el = inject(ElementRef);
    config = inject(NU_MONACO_EDITOR_CONFIG, { optional: true });
    doc = inject(DOCUMENT);
    ngZone = inject(NgZone);
    destroy$ = inject(DestroyRef);
    _editor;
    _resize$ = null;
    _config;
    _disabled;
    height = input(`200px`);
    delay = input(0, { transform: numberAttribute });
    disabled = input(false, { transform: booleanAttribute });
    options = input();
    event = output();
    constructor() {
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', autoFormatTime: 100, ...this.config };
        effect(() => {
            this.setDisabled(this.disabled());
        });
        effect(() => {
            const options = this.options();
            this.updateOptions(options);
        });
    }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit({ type, editor: this._editor, ...other }));
    }
    setDisabled(v) {
        this._editor?.updateOptions({ readOnly: v });
        return this;
    }
    init() {
        if (loadedMonaco) {
            loadPromise.then(() => this.initMonaco(this.options(), true));
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
            let baseUrl = `${this._config.baseUrl}/vs`;
            // fix: https://github.com/microsoft/monaco-editor/issues/4778
            if (!/^https?:\/\//g.test(baseUrl)) {
                baseUrl = `${window.location.origin}/${baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl}`;
            }
            const amdLoader = () => {
                win.require.config({
                    paths: {
                        vs: baseUrl
                    }
                });
                if (typeof this._config.monacoPreLoad === 'function') {
                    this._config.monacoPreLoad();
                }
                win.require(['vs/editor/editor.main'], () => {
                    if (typeof this._config.monacoLoad === 'function') {
                        this._config.monacoLoad(win.monaco);
                    }
                    this.initMonaco(this.options(), true);
                    resolve();
                }, () => {
                    reject(`Unable to load editor/editor.main module, please check your network environment.`);
                });
            };
            if (!win.require) {
                const loaderScript = this.doc.createElement('script');
                loaderScript.type = 'text/javascript';
                loaderScript.src = `${baseUrl}/loader.js`;
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
    updateOptions(v) {
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular(() => {
            this._editor.dispose();
            this.initMonaco(v, false);
        });
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), +this.delay()));
    }
    ngOnDestroy() {
        this.cleanResize();
        this._editor?.dispose();
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorBase, deps: [], target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.0.2", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { event: "event" }, ngImport: i0, template: ``, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``
                }]
        }], ctorParameters: () => [] });

class PlaceholderWidget {
    ID = 'editor.widget.placeholderHint';
    placeholder;
    editor;
    node;
    constructor(editor, placeholder) {
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
            preference: [monaco.editor.ContentWidgetPositionPreference.EXACT]
        };
    }
    dispose() {
        this.editor.removeContentWidget(this);
    }
}

class NuMonacoEditorComponent extends NuMonacoEditorBase {
    _value = '';
    _placeholderWidget;
    placeholder = input();
    model = input();
    autoFormat = input(true, { transform: booleanAttribute });
    get editor() {
        return this._editor;
    }
    constructor() {
        super();
        effect(() => {
            const ph = this.placeholder();
            this._placeholderWidget?.update(ph);
        });
        effect(() => {
            const model = this.model();
            if (model == null)
                return;
            this.updateOptions(untracked(() => this.options()));
        });
    }
    togglePlaceholder() {
        const text = this.placeholder();
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
    onChange = (_) => { };
    onTouched = () => { };
    initMonaco(options, initEvent) {
        const hasModel = !!this.model();
        options = { ...this.config?.defaultOptions, ...options };
        if (hasModel) {
            const model = monaco.editor.getModel(this.model().uri || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = this.model();
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
            this._value = options.model.getValue();
        }
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent(() => {
            const value = editor.getValue();
            this._value = value;
            this.ngZone.run(() => {
                this.onChange(value);
            });
            this.togglePlaceholder();
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.togglePlaceholder();
        this.registerResize();
        const eventName = initEvent ? 'init' : 're-init';
        if (this.autoFormat()) {
            timer(this._config.autoFormatTime)
                .pipe(takeUntilDestroyed(this.destroy$), take(1))
                .subscribe(() => {
                this.format()?.then(() => this.notifyEvent(eventName));
            });
            return;
        }
        this.notifyEvent(eventName);
    }
    format() {
        const action = this.editor?.getAction('editor.action.formatDocument');
        if (action == null)
            return;
        return action.run();
    }
    writeValue(value) {
        this._value = value || '';
        this._editor?.setValue(this._value);
        if (this.autoFormat()) {
            this.format();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(v) {
        this.setDisabled(v);
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.0.2", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, autoFormat: { classPropertyName: "autoFormat", publicName: "autoFormat", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.display": "'block'", "style.height": "height()" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => NuMonacoEditorComponent)),
                multi: true
            }
        ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-editor',
                    template: ``,
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height()'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMonacoEditorComponent)),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [] });

class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    old = input();
    new = input();
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        const oldModel = this.old();
        const newModel = this.new();
        if (!oldModel || !newModel) {
            this.notifyEvent('error', { error: 'old or new not found for nu-monaco-diff-editor' });
            return;
        }
        options = { ...this.config?.defaultOptions, ...options };
        const theme = options.theme;
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(oldModel.code, oldModel.language || options.language),
            modified: monaco.editor.createModel(newModel.code, newModel.language || options.language)
        });
        // this.setDisabled();
        editor.onDidUpdateDiff(() => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorDiffComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "20.0.2", type: NuMonacoEditorDiffComponent, isStandalone: true, selector: "nu-monaco-diff-editor", inputs: { old: { classPropertyName: "old", publicName: "old", isSignal: true, isRequired: false, transformFunction: null }, new: { classPropertyName: "new", publicName: "new", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.display": "'block'", "style.height": "height()" } }, exportAs: ["nuMonacoDiffEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorDiffComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: ``,
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
class NuMonacoEditorModule {
    /**
     * Or use `provideNuMonacoEditorConfig` instead.
     */
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }]
        };
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] });
    /** @nocollapse */ static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule, provideNuMonacoEditorConfig };
//# sourceMappingURL=ng-util-monaco-editor.mjs.map
