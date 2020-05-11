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
        // https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs/base/worker/workerMain.min.js
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
     * @return {?}
     */
    notifyEvent(type) {
        this.event.emit({ type, editor: (/** @type {?} */ (this._editor)) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUduRixZQUFZLEdBQUcsS0FBSzs7SUFDcEIsV0FBMEI7Ozs7QUFFOUIsTUFBTSxPQUFnQixrQkFBa0I7Ozs7Ozs7SUFpQnRDLFlBQ1ksRUFBMkIsRUFDSixNQUE0QixFQUNqQyxHQUFRLEVBQzFCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUVULFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZqQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFoQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFReEQsbUdBQW1HO1FBQ25HLElBQUksQ0FBQyxPQUFPLG1CQUFLLE9BQU8sRUFBRSxpRUFBaUUsSUFBSyxNQUFNLENBQUUsQ0FBQztRQUN6RyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFsQkQsSUFDSSxPQUFPLENBQUMs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QUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztZQXJKRCxVQUFVOzRDQXNDUCxNQUFNLFNBQUMsdUJBQXVCOzRDQUM5QixNQUFNLFNBQUMsUUFBUTtZQW5DbEIsTUFBTTs7O3FCQXFCTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFPTCxNQUFNOzs7Ozs7O0lBZFAscUNBQThGOzs7OztJQUM5RixzQ0FBdUU7Ozs7O0lBQ3ZFLHNDQUFpQzs7Ozs7SUFDakMscUNBQXdDOztJQUV4QyxvQ0FBc0I7O0lBQ3RCLHNDQUEwQjs7SUFRMUIsbUNBQTBEOzs7OztJQUd4RCxnQ0FBcUM7Ozs7O0lBRXJDLGlDQUFvQzs7Ozs7SUFDcEMsb0NBQXdCOzs7Ozs7O0lBTzFCLGlFQUFpRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JFdmVudCwgTnVNb25hY29FZGl0b3JFdmVudFR5cGUgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5sZXQgbG9hZGVkTW9uYWNvID0gZmFsc2U7XG5sZXQgbG9hZFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOdU1vbmFjb0VkaXRvckJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfZWRpdG9yPzogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgfCBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvcjtcbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9yZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBfY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZztcblxuICBASW5wdXQoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbDogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0geyAuLi50aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMsIC4uLnZhbCB9O1xuICB9XG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIEBPdXRwdXQoKSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TnVNb25hY29FZGl0b3JFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTlVfTU9OQUNPX0VESVRPUl9DT05GSUcpIGNvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvYzogYW55LFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgLy8gaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjIwLjAvbWluL3ZzL2Jhc2Uvd29ya2VyL3dvcmtlck1haW4ubWluLmpzXG4gICAgdGhpcy5fY29uZmlnID0geyBiYXNlVXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjIwLjAvbWluJywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zITtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgbm90aWZ5RXZlbnQodHlwZTogTnVNb25hY29FZGl0b3JFdmVudFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlLCBlZGl0b3I6IHRoaXMuX2VkaXRvciEgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGlzYWJsZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLnVwZGF0ZU9wdGlvbnMoeyByZWFkT25seTogdGhpcy5kaXNhYmxlZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKGxvYWRlZE1vbmFjbykge1xuICAgICAgbG9hZFByb21pc2UudGhlbigoKSA9PiB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9hZGVkTW9uYWNvID0gdHJ1ZTtcbiAgICBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiAoKSA9PiB2b2lkLCByZWplY3Q6IChlcnI6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG4gICAgICBpZiAod2luID09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW4ubW9uYWNvKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5fY29uZmlnLmJhc2VVcmw7XG4gICAgICBjb25zdCBhbWRMb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgIHdpbi5yZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7IHZzOiBgJHtiYXNlVXJsfS92c2AgfSB9KTtcbiAgICAgICAgd2luLnJlcXVpcmUoXG4gICAgICAgICAgWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkKHdpbi5tb25hY28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byBsb2FkIGVkaXRvci9lZGl0b3IubWFpbiBtb2R1bGUsIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghd2luLnJlcXVpcmUpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyU2NyaXB0ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgICAgIGxvYWRlclNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGxvYWRlclNjcmlwdC5zcmMgPSBgJHtiYXNlVXJsfS92cy9sb2FkZXIuanNgO1xuICAgICAgICBsb2FkZXJTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFtZExvYWRlcik7XG4gICAgICAgIGxvYWRlclNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgJHtsb2FkZXJTY3JpcHQuc3JjfSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKSk7XG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyU2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtZExvYWRlcigpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuZXZlbnQuZW1pdCh7IHR5cGU6ICdsb2FkLWVycm9yJywgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9yZXNpemUkKSB7XG4gICAgICB0aGlzLl9yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9lZGl0b3IhLmxheW91dCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuaW5pdCgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoID09PSAxICYmIGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19