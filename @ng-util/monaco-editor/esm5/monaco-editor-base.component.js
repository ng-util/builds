/**
 * @fileoverview added by tsickle
 * Generated from: monaco-editor-base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
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
        this.height = 200;
        this.disabled = false;
        this.event = new EventEmitter();
        this._config = __assign({ baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min' }, config);
        this.options = (/** @type {?} */ (this._config.defaultOptions));
    }
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
        this.event.emit(__assign({ type: type, editor: (/** @type {?} */ (this._editor)) }, other));
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
            (/** @type {?} */ (this))._editor.updateOptions({ readOnly: (/** @type {?} */ (this)).disabled });
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
            function () { return _this.initMonaco(_this.options); }));
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
                    _this.initMonaco(_this.options);
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
        function (error) { return _this.event.emit({ type: 'load-error', error: error }); }));
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
     * @param {?} changes
     * @return {?}
     */
    NuMonacoEditorBase.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._editor) {
            if (Object.keys(changes).length === 1 && changes.disabled) {
                this.setDisabled();
                return;
            }
            this._editor.dispose();
            this.initMonaco(this._options);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEdBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFHbkYsWUFBWSxHQUFHLEtBQUs7O0lBQ3BCLFdBQTBCOzs7O0FBRTlCO0lBaUJFLDRCQUNZLEVBQTJCLEVBQ0osTUFBNEIsRUFDakMsR0FBUSxFQUMxQixNQUFjO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFVCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmakIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRaEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBUXhELElBQUksQ0FBQyxPQUFPLGNBQUssT0FBTyxFQUFFLGlFQUFpRSxJQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsQ0FBQztJQUM5QyxDQUFDO0lBakJELHNCQUNJLHVDQUFPOzs7O1FBR1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIs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bW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbmZpZywgTlVfTU9OQUNPX0VESVRPUl9DT05GSUcgfSBmcm9tICcuL21vbmFjby1lZGl0b3IuY29uZmlnJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yRXZlbnQsIE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLnR5cGVzJztcblxubGV0IGxvYWRlZE1vbmFjbyA9IGZhbHNlO1xubGV0IGxvYWRQcm9taXNlOiBQcm9taXNlPHZvaWQ+O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG4gIHByb3RlY3RlZCBfcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG5cbiAgQElucHV0KCkgaGVpZ2h0ID0gMjAwO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWw6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zLCAuLi52YWwgfTtcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE51TW9uYWNvRWRpdG9yRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01PTkFDT19FRElUT1JfQ09ORklHKSBjb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2M6IGFueSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgYmFzZVVybDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4yMC4wL21pbicsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucyE7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucyk6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIG5vdGlmeUV2ZW50KHR5cGU6IE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlLCBvdGhlcj86IE51TW9uYWNvRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlLCBlZGl0b3I6IHRoaXMuX2VkaXRvciEsIC4uLm90aGVyIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERpc2FibGVkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuZGlzYWJsZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmIChsb2FkZWRNb25hY28pIHtcbiAgICAgIGxvYWRQcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvYWRlZE1vbmFjbyA9IHRydWU7XG4gICAgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKCkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xuICAgICAgaWYgKHdpbiA9PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luLm1vbmFjbykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuX2NvbmZpZy5iYXNlVXJsO1xuICAgICAgY29uc3QgYW1kTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICB3aW4ucmVxdWlyZS5jb25maWcoeyBwYXRoczogeyB2czogYCR7YmFzZVVybH0vdnNgIH0gfSk7XG4gICAgICAgIHdpbi5yZXF1aXJlKFxuICAgICAgICAgIFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcubW9uYWNvTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvTG9hZCh3aW4ubW9uYWNvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGBVbmFibGUgdG8gbG9hZCBlZGl0b3IvZWRpdG9yLm1haW4gbW9kdWxlLCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIXdpbi5yZXF1aXJlKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlclNjcmlwdCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgICBsb2FkZXJTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBsb2FkZXJTY3JpcHQuc3JjID0gYCR7YmFzZVVybH0vdnMvbG9hZGVyLmpzYDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhbWRMb2FkZXIpO1xuICAgICAgICBsb2FkZXJTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkICR7bG9hZGVyU2NyaXB0LnNyY30sIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCkpO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxvYWRlclNjcmlwdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbWRMb2FkZXIoKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlOiAnbG9hZC1lcnJvcicsIGVycm9yIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjbGVhblJlc2l6ZSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fcmVzaXplJCkge1xuICAgICAgdGhpcy5fcmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3RlclJlc2l6ZSgpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgdGhpcy5fcmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZWRpdG9yIS5sYXlvdXQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlFdmVudCgncmVzaXplJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmluaXQoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiBjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLl9vcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVzaXplKCk7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2VkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==