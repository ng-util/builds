/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ElementRef, EventEmitter, Inject, Input, NgZone, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
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
            (/** @type {?} */ (this))._editor.updateOptions({ readOnly: (/** @type {?} */ (this))._disabled });
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
export { NuMonacoEditorBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUduRixZQUFZLEdBQUcsS0FBSzs7SUFDcEIsV0FBMEI7Ozs7QUFFOUI7SUFzQkUsNEJBQ1ksRUFBMkIsRUFDSixNQUE0QixFQUNqQyxHQUFRLEVBQzFCLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUVULFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXJCaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVuQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBYWhCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQVF4RCxJQUFJLENBQUMsT0FBTyxjQUFLLE9BQU8sRUFBRSxpRUFBaUUsSUFBSyxNQUFNLENBQUUsQ0FBQztRQUN6RyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFDLENBQUM7SUFDOUMsQ0FBQztJQXRCRCxzQkFDSSx3Q0FBUTs7Ozs7UUFEWixVQUNhLEdBQXFCO1lBQ2hDLElBQUksQ0FBQyxTQUFT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S0FBSzswQkFLTCxLQUFLO3dCQU9MLE1BQU07O0lBcUhULHlCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0F6SXFCLGtCQUFrQjs7Ozs7O0lBQ3RDLHFDQUE4Rjs7Ozs7SUFDOUYsc0NBQXVFOzs7OztJQUN2RSxzQ0FBaUM7Ozs7O0lBQ2pDLHFDQUF3Qzs7Ozs7SUFDeEMsdUNBQTRCOztJQUU1QixvQ0FBMEI7O0lBYTFCLG1DQUEwRDs7Ozs7SUFHeEQsZ0NBQXFDOzs7OztJQUVyQyxpQ0FBb0M7Ozs7O0lBQ3BDLG9DQUF3Qjs7Ozs7Ozs7SUFNMUIsNEVBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbmZpZywgTlVfTU9OQUNPX0VESVRPUl9DT05GSUcgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29uZmlnJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRXZlbnQsIE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxubGV0IGxvYWRlZE1vbmFjbyA9IGZhbHNlO1xubGV0IGxvYWRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG4gIHByb3RlY3RlZCBfcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoZWlnaHQgPSBgMjAwcHhgO1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHRydWUgOiB2YWw7XG4gICAgdGhpcy5zZXREaXNhYmxlZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbDogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0geyAuLi50aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMsIC4uLnZhbCB9O1xuICB9XG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG4gIEBPdXRwdXQoKSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8TnVNb25hY29FZGl0b3JFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTlVfTU9OQUNPX0VESVRPUl9DT05GSUcpIGNvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvYzogYW55LFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgKSB7XG4gICAgdGhpcy5fY29uZmlnID0geyBiYXNlVXJsOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjIwLjAvbWluJywgLi4uY29uZmlnIH07XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zITtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0TW9uYWNvKG9wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBpbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBub3RpZnlFdmVudCh0eXBlOiBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSwgb3RoZXI/OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZXZlbnQuZW1pdCh7IHR5cGUsIGVkaXRvcjogdGhpcy5fZWRpdG9yISwgLi4ub3RoZXIgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERpc2FibGVkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgZWRpdG9yL2VkaXRvci5tYWluIG1vZHVsZSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF3aW4ucmVxdWlyZSkge1xuICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9IGAke2Jhc2VVcmx9L3ZzL2xvYWRlci5qc2A7XG4gICAgICAgIGxvYWRlclNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYW1kTG9hZGVyKTtcbiAgICAgICAgbG9hZGVyU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCAke2xvYWRlclNjcmlwdC5zcmN9LCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApKTtcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1kTG9hZGVyKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5ub3RpZnlFdmVudCgnbG9hZC1lcnJvcicsIHsgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9yZXNpemUkKSB7XG4gICAgICB0aGlzLl9yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9lZGl0b3IhLmxheW91dCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9lZGl0b3IhLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLl9vcHRpb25zLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5pbml0KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2VkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==