/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ElementRef, EventEmitter, Inject, Input, NgZone, Output } from '@angular/core';
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
        this._disabled = false;
        this.height = `200px`;
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
            (/** @type {?} */ (this))._editor.updateOptions({ readOnly: (/** @type {?} */ (this))._disabled });
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
        () => this.init()));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        console.log('ngOnChanges');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBd0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdILE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBR25GLFlBQVksR0FBRyxLQUFLOztJQUNwQixXQUEwQjs7OztBQUU5QixNQUFNLE9BQWdCLGtCQUFrQjs7Ozs7OztJQXNCdEMsWUFDWSxFQUEyQixFQUNKLE1BQTRCLEVBQ2pDLEdBQVEsRUFDMUIsTUFBYztRQUhkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBRVQsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckJoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRW5CLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFhaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBUXhELElBQUksQ0FBQyxPQUFPLG1CQUFLLE9BQU8sRUFBRSxpRUFBaUUsSUFBSyxNQUFNLENBQUUsQ0FBQztRQUN6RyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUF0QkQsSUFDSSxRQUFRLENBQUMsR0FBcUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQ0ksT0FBTyxDQUFDLEdBQXVEO1FBQ2pFLElBQUksQ0FBQyxRQUFRLG1DQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFLLEdBQUcsQ0FBRSxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQWVTLFdBQVcsQ0FBQyxJQUE2QixFQUFFLEtBQTJCO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFLLEtBQUssRUFBRyxFQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7OztJQUVTLFdBQVc7UUFDbkIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksWUFBWSxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FBQztZQUM1RCxPQUFPO1NBQ1I7UUFFRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFdBQVcsR0FBRyxJQUFJLE9BQU87Ozs7O1FBQU8sQ0FBQyxPQUFtQixFQUFFLE1BQTZCLEVBQUUsRUFBRTs7a0JBQy9FLEdBQUcsR0FBUSxNQUFNO1lBQ3ZCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7WUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTzthQUNSOztrQkFFSyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOztrQkFDOUIsU0FBUzs7O1lBQUcsR0FBRyxFQUFFO2dCQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxHQUFHLENBQUMsT0FBTyxDQUNULENBQUMsdUJBQXVCLENBQUM7OztnQkFDekIsR0FBRyxFQUFFO29CQUNILElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7d0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDckM7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDOzs7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILE1BQU0sQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO2dCQUM3RixDQUFDLEVBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQTtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFOztzQkFDVixZQUFZLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQXFCO2dCQUMxRSxZQUFZLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUN0QyxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxlQUFlLENBQUM7Z0JBQzdDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2pELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixZQUFZLENBQUMsR0FBRywwQ0FBMEMsQ0FBQyxFQUFDLENBQUM7Z0JBQ25JLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxTQUFTLEVBQUUsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7OztJQUVTLFdBQVc7UUFDbkIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxRQUFRLEVBQUU7WUFDakIsbUJBQUEsSUFBSSxFQUFBLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFUyxjQUFjO1FBQ3RCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLG1CQUFBLElBQUksRUFBQSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLG1CQUFBLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sRUFBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztRQUNMLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQ2pDLG1CQUFBLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztZQWpKcUIsVUFBVTs0Q0FpQzdCLE1BQU0sU0FBQyx1QkFBdUI7NENBQzlCLE1BQU0sU0FBQyxRQUFRO1lBbEM2QyxNQUFNOzs7cUJBZ0JwRSxLQUFLO3VCQUNMLEtBQUs7c0JBS0wsS0FBSztvQkFPTCxNQUFNOzs7Ozs7O0lBbkJQLHFDQUE4Rjs7Ozs7SUFDOUYsc0NBQXVFOzs7OztJQUN2RSxzQ0FBaUM7Ozs7O0lBQ2pDLHFDQUF3Qzs7Ozs7SUFDeEMsdUNBQTRCOztJQUU1QixvQ0FBMEI7O0lBYTFCLG1DQUEwRDs7Ozs7SUFHeEQsZ0NBQXFDOzs7OztJQUVyQyxpQ0FBb0M7Ozs7O0lBQ3BDLG9DQUF3Qjs7Ozs7Ozs7SUFNMUIsNEVBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbmZpZywgTlVfTU9OQUNPX0VESVRPUl9DT05GSUcgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29uZmlnJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRXZlbnQsIE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxubGV0IGxvYWRlZE1vbmFjbyA9IGZhbHNlO1xubGV0IGxvYWRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG4gIHByb3RlY3RlZCBfcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoZWlnaHQgPSBgMjAwcHhgO1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHRydWUgOiB2YWw7XG4gICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbDogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0geyAuLi50aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMsIC4uLnZhbCB9O1xuICB9XG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIEBPdXRwdXQoKSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TnVNb25hY29FZGl0b3JFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTlVfTU9OQUNPX0VESVRPUl9DT05GSUcpIGNvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvYzogYW55LFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgdGhpcy5fY29uZmlnID0geyBiYXNlVXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjIwLjAvbWluJywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zITtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBub3RpZnlFdmVudCh0eXBlOiBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSwgb3RoZXI/OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZXZlbnQuZW1pdCh7IHR5cGUsIGVkaXRvcjogdGhpcy5fZWRpdG9yISwgLi4ub3RoZXIgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERpc2FibGVkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgZWRpdG9yL2VkaXRvci5tYWluIG1vZHVsZSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF3aW4ucmVxdWlyZSkge1xuICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9IGAke2Jhc2VVcmx9L3ZzL2xvYWRlci5qc2A7XG4gICAgICAgIGxvYWRlclNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYW1kTG9hZGVyKTtcbiAgICAgICAgbG9hZGVyU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCAke2xvYWRlclNjcmlwdC5zcmN9LCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApKTtcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1kTG9hZGVyKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5ub3RpZnlFdmVudCgnbG9hZC1lcnJvcicsIHsgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9yZXNpemUkKSB7XG4gICAgICB0aGlzLl9yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9lZGl0b3IhLmxheW91dCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9lZGl0b3IhLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLl9vcHRpb25zLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2VkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==