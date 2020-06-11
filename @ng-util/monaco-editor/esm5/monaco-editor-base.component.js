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
        this._disabled = false;
        this.height = "200px";
        this.delay = 0;
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
            ((/** @type {?} */ ((/** @type {?} */ (this))._editor))).updateOptions({ readOnly: (/** @type {?} */ (this))._disabled });
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
                loaderScript_1.onload = amdLoader;
                loaderScript_1.onerror = (/**
                 * @return {?}
                 */
                function () { return reject("Unable to load " + loaderScript_1.src + ", please check your network environment."); });
                _this.doc.getElementsByTagName('head')[0].appendChild(loaderScript_1);
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
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.init(); }), +_this.delay); }));
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
        /** @type {?} */
        var allKeys = Object.keys(changes);
        if (allKeys.length === 1 && allKeys[0] === 'disabled')
            return;
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
        delay: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL21vbmFjby1lZGl0b3IvIiwic291cmNlcyI6WyJtb25hY28tZWRpdG9yLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEdBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFHbkYsWUFBWSxHQUFHLEtBQUs7O0lBQ3BCLFdBQTBCOzs7O0FBRTlCO0lBdUJFLDRCQUNZLEVBQTJCLEVBQ0osTUFBNEIsRUFDakMsR0FBUSxFQUMxQixNQUFjO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFFVCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF0QmhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbkIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBYVQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBUXhELElBQUksQ0FBQyxPQUFPLGNBQUssT0FBTyxFQUFFLGlFQUFpRSxJQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdEJELHNCQUNJLHdDQUFROzs7OztRQURaLFVBQ2EsR0FB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QUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjtJQUNILENBQUM7OztnQkE3SkQsVUFBVTtnREE0Q1AsTUFBTSxTQUFDLHVCQUF1QjtnREFDOUIsTUFBTSxTQUFDLFFBQVE7Z0JBekNsQixNQUFNOzs7eUJBc0JMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUtMLEtBQUs7d0JBT0wsTUFBTTs7SUFzSFQseUJBQUM7Q0FBQSxBQTNJRCxJQTJJQztTQTNJcUIsa0JBQWtCOzs7Ozs7SUFDdEMscUNBQThGOzs7OztJQUM5RixzQ0FBdUU7Ozs7O0lBQ3ZFLHNDQUFpQzs7Ozs7SUFDakMscUNBQXdDOzs7OztJQUN4Qyx1Q0FBNEI7O0lBRTVCLG9DQUEwQjs7SUFDMUIsbUNBQW1COztJQWFuQixtQ0FBMEQ7Ozs7O0lBR3hELGdDQUFxQzs7Ozs7SUFFckMsaUNBQW9DOzs7OztJQUNwQyxvQ0FBd0I7Ozs7Ozs7O0lBTTFCLDRFQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JFdmVudCwgTnVNb25hY29FZGl0b3JFdmVudFR5cGUgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5sZXQgbG9hZGVkTW9uYWNvID0gZmFsc2U7XG5sZXQgbG9hZFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOdU1vbmFjb0VkaXRvckJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfZWRpdG9yPzogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IgfCBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRGlmZkVkaXRvcjtcbiAgcHJvdGVjdGVkIF9vcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9yZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBfY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZztcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9IGAyMDBweGA7XG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB0cnVlIDogdmFsO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWw6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zLCAuLi52YWwgfTtcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE51TW9uYWNvRWRpdG9yRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01PTkFDT19FRElUT1JfQ09ORklHKSBjb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2M6IGFueSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgYmFzZVVybDogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4yMC4wL21pbicsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucyE7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdE1vbmFjbyhvcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucywgaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgbm90aWZ5RXZlbnQodHlwZTogTnVNb25hY29FZGl0b3JFdmVudFR5cGUsIG90aGVyPzogTnVNb25hY29FZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlLCBlZGl0b3I6IHRoaXMuX2VkaXRvciEsIC4uLm90aGVyIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREaXNhYmxlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICAodGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yKS51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgZWRpdG9yL2VkaXRvci5tYWluIG1vZHVsZSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF3aW4ucmVxdWlyZSkge1xuICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9IGAke2Jhc2VVcmx9L3ZzL2xvYWRlci5qc2A7XG4gICAgICAgIGxvYWRlclNjcmlwdC5vbmxvYWQgPSBhbWRMb2FkZXI7XG4gICAgICAgIGxvYWRlclNjcmlwdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCAke2xvYWRlclNjcmlwdC5zcmN9LCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxvYWRlclNjcmlwdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbWRMb2FkZXIoKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLm5vdGlmeUV2ZW50KCdsb2FkLWVycm9yJywgeyBlcnJvciB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2xlYW5SZXNpemUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZSQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZXNpemUoKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VkaXRvciEubGF5b3V0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5RXZlbnQoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvciEuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuX29wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCArdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgICBpZiAoYWxsS2V5cy5sZW5ndGggPT09IDEgJiYgYWxsS2V5c1swXSA9PT0gJ2Rpc2FibGVkJykgcmV0dXJuO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9lZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=