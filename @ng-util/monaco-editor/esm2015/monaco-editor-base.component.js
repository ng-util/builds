/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
/** @type {?} */
let loadedMonaco = false;
/** @type {?} */
let loadPromise;
/**
 * @abstract
 */
// tslint:disable-next-line: component-class-suffix
export class NuMonacoEditorBase {
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
NuMonacoEditorBase.decorators = [
    { type: Component, args: [{
                selector: 'nu-monaco-base',
                template: ``
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxHQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBR25GLFlBQVksR0FBRyxLQUFLOztJQUNwQixXQUEwQjs7OztBQU05QixtREFBbUQ7QUFDbkQsTUFBTSxPQUFnQixrQkFBa0I7Ozs7Ozs7SUF1QnRDLFlBQ1ksRUFBMkIsRUFDSixNQUE0QixFQUNqQyxHQUFRLEVBQzFCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUVULFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXRCaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVuQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFhVCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFReEQsSUFBSSxDQUFDLE9BQU8sbUJBQUssT0FBTyxFQUFFLGlFQUFpRSxJQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVB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Q0FBQztTQUMxQjtJQUNILENBQUM7OztZQS9JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQXRCQyxVQUFVOzRDQWlEUCxNQUFNLFNBQUMsdUJBQXVCOzRDQUM5QixNQUFNLFNBQUMsUUFBUTtZQTlDbEIsTUFBTTs7O3FCQTJCTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFLTCxLQUFLO29CQU9MLE1BQU07Ozs7Ozs7SUFwQlAscUNBQThGOzs7OztJQUM5RixzQ0FBdUU7Ozs7O0lBQ3ZFLHNDQUFpQzs7Ozs7SUFDakMscUNBQXdDOzs7OztJQUN4Qyx1Q0FBNEI7O0lBRTVCLG9DQUEwQjs7SUFDMUIsbUNBQW1COztJQWFuQixtQ0FBMEQ7Ozs7O0lBR3hELGdDQUFxQzs7Ozs7SUFFckMsaUNBQW9DOzs7OztJQUNwQyxvQ0FBd0I7Ozs7Ozs7O0lBTTFCLDRFQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWJhc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG4gIHByb3RlY3RlZCBfcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoZWlnaHQgPSBgMjAwcHhgO1xuICBASW5wdXQoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IHZhbDtcbiAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucywgLi4udmFsIH07XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cbiAgQE91dHB1dCgpIGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxOdU1vbmFjb0VkaXRvckV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NT05BQ09fRURJVE9SX0NPTkZJRykgY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jOiBhbnksXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSB7IGJhc2VVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMjAuMC9taW4nLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIGluaXRFdmVudDogYm9vbGVhbik6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIG5vdGlmeUV2ZW50KHR5cGU6IE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlLCBvdGhlcj86IE51TW9uYWNvRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5ldmVudC5lbWl0KHsgdHlwZSwgZWRpdG9yOiB0aGlzLl9lZGl0b3IhLCAuLi5vdGhlciB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGlzYWJsZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgKHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcikudXBkYXRlT3B0aW9ucyh7IHJlYWRPbmx5OiB0aGlzLl9kaXNhYmxlZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKGxvYWRlZE1vbmFjbykge1xuICAgICAgbG9hZFByb21pc2UudGhlbigoKSA9PiB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9hZGVkTW9uYWNvID0gdHJ1ZTtcbiAgICBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiAoKSA9PiB2b2lkLCByZWplY3Q6IChlcnI6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG4gICAgICBpZiAod2luID09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW4ubW9uYWNvKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5fY29uZmlnLmJhc2VVcmw7XG4gICAgICBjb25zdCBhbWRMb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgIHdpbi5yZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7IHZzOiBgJHtiYXNlVXJsfS92c2AgfSB9KTtcbiAgICAgICAgd2luLnJlcXVpcmUoXG4gICAgICAgICAgWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkKHdpbi5tb25hY28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byBsb2FkIGVkaXRvci9lZGl0b3IubWFpbiBtb2R1bGUsIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghd2luLnJlcXVpcmUpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyU2NyaXB0ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgICAgIGxvYWRlclNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGxvYWRlclNjcmlwdC5zcmMgPSBgJHtiYXNlVXJsfS92cy9sb2FkZXIuanNgO1xuICAgICAgICBsb2FkZXJTY3JpcHQub25sb2FkID0gYW1kTG9hZGVyO1xuICAgICAgICBsb2FkZXJTY3JpcHQub25lcnJvciA9ICgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgJHtsb2FkZXJTY3JpcHQuc3JjfSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1kTG9hZGVyKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5ub3RpZnlFdmVudCgnbG9hZC1lcnJvcicsIHsgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9yZXNpemUkKSB7XG4gICAgICB0aGlzLl9yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9lZGl0b3IhLmxheW91dCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9lZGl0b3IhLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLl9vcHRpb25zLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgK3RoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcyk7XG4gICAgaWYgKGFsbEtleXMubGVuZ3RoID09PSAxICYmIGFsbEtleXNbMF0gPT09ICdkaXNhYmxlZCcpIHJldHVybjtcbiAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19