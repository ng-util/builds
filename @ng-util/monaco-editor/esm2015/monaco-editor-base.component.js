/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
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
        this.height = 200;
        this.disabled = false;
        this.event = new EventEmitter();
        this._config = Object.assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
        this.options = (/** @type {?} */ (this._config.defaultOptions));
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
        this.event.emit(Object.assign({ type, editor: (/** @type {?} */ (this._editor)) }, other));
    }
    /**
     * @protected
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setDisabled() {
        if ((/** @type {?} */ (this))._editor) {
            (/** @type {?} */ (this))._editor.updateOptions({ readOnly: (/** @type {?} */ (this)).disabled });
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
            () => this.initMonaco(this.options)));
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
                    this.initMonaco(this.options);
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
                loaderScript.addEventListener('load', amdLoader);
                loaderScript.addEventListener('error', (/**
                 * @return {?}
                 */
                () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`)));
                this.doc.body.appendChild(loaderScript);
            }
            else {
                amdLoader();
            }
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => this.event.emit({ type: 'load-error', error })));
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
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.init()));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._editor) {
            if (Object.keys(changes).length === 1 && changes.disabled) {
                this.setDisabled();
                return;
            }
            this._editor.dispose();
            this.initMonaco(this._options);
        }
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
    /** @type {?} */
    NuMonacoEditorBase.prototype.height;
    /** @type {?} */
    NuMonacoEditorBase.prototype.disabled;
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
     * @return {?}
     */
    NuMonacoEditorBase.prototype.initMonaco = function (options) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUduRixZQUFZLEdBQUcsS0FBSzs7SUFDcEIsV0FBMEI7Ozs7QUFFOUIsTUFBTSxPQUFnQixrQkFBa0I7Ozs7Ozs7SUFpQnRDLFlBQ1ksRUFBMkIsRUFDSixNQUE0QixFQUNqQyxHQUFRLEVBQzFCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUVULFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZqQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFoQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFReEQsSUFBSSxDQUFDLE9BQU8sbUJBQUssT0FBTyxFQUFFLGlFQUFpRSxJQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQWpCRCxJQUNJLE9BQU8sQ0FBQyxHQUF1RDtRQUNqRSxJ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QyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O1lBcEpELFVBQVU7NENBc0NQLE1BQU0sU0FBQyx1QkFBdUI7NENBQzlCLE1BQU0sU0FBQyxRQUFRO1lBbkNsQixNQUFNOzs7cUJBcUJMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO29CQU9MLE1BQU07Ozs7Ozs7SUFkUCxxQ0FBOEY7Ozs7O0lBQzlGLHNDQUF1RTs7Ozs7SUFDdkUsc0NBQWlDOzs7OztJQUNqQyxxQ0FBd0M7O0lBRXhDLG9DQUFzQjs7SUFDdEIsc0NBQTBCOztJQVExQixtQ0FBMEQ7Ozs7O0lBR3hELGdDQUFxQzs7Ozs7SUFFckMsaUNBQW9DOzs7OztJQUNwQyxvQ0FBd0I7Ozs7Ozs7SUFNMUIsaUVBQWlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE51TW9uYWNvRWRpdG9yQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9lZGl0b3I/OiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciB8IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVEaWZmRWRpdG9yO1xuICBwcm90ZWN0ZWQgX29wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuICBwcm90ZWN0ZWQgX3Jlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIF9jb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnO1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9IDIwMDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucywgLi4udmFsIH07XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cbiAgQE91dHB1dCgpIGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxOdU1vbmFjb0VkaXRvckV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NT05BQ09fRURJVE9SX0NPTkZJRykgY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jOiBhbnksXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSB7IGJhc2VVcmw6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMjAuMC9taW4nLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRNb25hY28ob3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMpOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBub3RpZnlFdmVudCh0eXBlOiBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSwgb3RoZXI/OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudC5lbWl0KHsgdHlwZSwgZWRpdG9yOiB0aGlzLl9lZGl0b3IhLCAuLi5vdGhlciB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREaXNhYmxlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IudXBkYXRlT3B0aW9ucyh7IHJlYWRPbmx5OiB0aGlzLmRpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgZWRpdG9yL2VkaXRvci5tYWluIG1vZHVsZSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF3aW4ucmVxdWlyZSkge1xuICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9IGAke2Jhc2VVcmx9L3ZzL2xvYWRlci5qc2A7XG4gICAgICAgIGxvYWRlclNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYW1kTG9hZGVyKTtcbiAgICAgICAgbG9hZGVyU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCAke2xvYWRlclNjcmlwdC5zcmN9LCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApKTtcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1kTG9hZGVyKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5ldmVudC5lbWl0KHsgdHlwZTogJ2xvYWQtZXJyb3InLCBlcnJvciB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2xlYW5SZXNpemUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZSQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZXNpemUoKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VkaXRvciEubGF5b3V0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5RXZlbnQoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGggPT09IDEgJiYgY2hhbmdlcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2VkaXRvci5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmluaXRNb25hY28odGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9lZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=