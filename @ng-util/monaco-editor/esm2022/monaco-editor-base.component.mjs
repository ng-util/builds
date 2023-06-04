import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import * as i0 from "@angular/core";
let loadedMonaco = false;
let loadPromise;
class NuMonacoEditorBase {
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    set options(val) {
        this._options = { ...this._config.defaultOptions, ...val };
    }
    get options() {
        return this._options;
    }
    constructor(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._resize$ = null;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', ...config };
        this.options = this._config.defaultOptions;
    }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit({ type, editor: this._editor, ...other }));
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: DOCUMENT }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0, template: ``, isInline: true }); }
}
export { NuMonacoEditorBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                    standalone: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUd2RixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxXQUEwQixDQUFDO0FBRS9CLE1BTXNCLGtCQUFrQjtJQVN0QyxJQUNJLFFBQVEsQ0FBQyxHQUFxQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUNJLE9BQU8sQ0FBQyxHQUF1RDtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUdELFlBQ1ksRUFBMkIsRUFDSixNQUE0QixFQUNqQyxHQUFRLEVB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QztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQTJCSSxNQUFNOzJCQUFDLHVCQUF1Qjs7MEJBQzlCLE1BQU07MkJBQUMsUUFBUTtpRUFuQlQsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRixRQUFRO3NCQURYLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQU9JLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWJhc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9ucyE6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuICBwcm90ZWN0ZWQgX3Jlc2l6ZSQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9IGAyMDBweGA7XG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB0cnVlIDogdmFsO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWw6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zLCAuLi52YWwgfTtcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE51TW9uYWNvRWRpdG9yRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01PTkFDT19FRElUT1JfQ09ORklHKSBjb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2M6IGFueSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgYmFzZVVybDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvci9taW4nLCAuLi5jb25maWcgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLl9jb25maWcuZGVmYXVsdE9wdGlvbnMhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRNb25hY28oX29wdGlvbnM6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zLCBfaW5pdEV2ZW50OiBib29sZWFuKTogdm9pZDtcblxuICBwcm90ZWN0ZWQgbm90aWZ5RXZlbnQodHlwZTogTnVNb25hY29FZGl0b3JFdmVudFR5cGUsIG90aGVyPzogTnVNb25hY29FZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmV2ZW50LmVtaXQoeyB0eXBlLCBlZGl0b3I6IHRoaXMuX2VkaXRvciEsIC4uLm90aGVyIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREaXNhYmxlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICAodGhpcy5fZWRpdG9yIGFzIG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yKS51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAobG9hZGVkTW9uYWNvKSB7XG4gICAgICBsb2FkUHJvbWlzZS50aGVuKCgpID0+IHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FkZWRNb25hY28gPSB0cnVlO1xuICAgIGxvYWRQcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQsIHJlamVjdDogKGVycjogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zdCB3aW46IGFueSA9IHdpbmRvdztcbiAgICAgIGlmICh3aW4gPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5tb25hY28pIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICAgIGNvbnN0IGFtZExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgd2luLnJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgdnM6IGAke2Jhc2VVcmx9L3ZzYCB9IH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5tb25hY29QcmVMb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb1ByZUxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICB3aW4ucmVxdWlyZShcbiAgICAgICAgICBbJ3ZzL2VkaXRvci9lZGl0b3IubWFpbiddLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1vbmFjb0xvYWQod2luLm1vbmFjbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChgVW5hYmxlIHRvIGxvYWQgZWRpdG9yL2VkaXRvci5tYWluIG1vZHVsZSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgaWYgKCF3aW4ucmVxdWlyZSkge1xuICAgICAgICBjb25zdCBsb2FkZXJTY3JpcHQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgICAgbG9hZGVyU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgbG9hZGVyU2NyaXB0LnNyYyA9IGAke2Jhc2VVcmx9L3ZzL2xvYWRlci5qc2A7XG4gICAgICAgIGxvYWRlclNjcmlwdC5vbmxvYWQgPSBhbWRMb2FkZXI7XG4gICAgICAgIGxvYWRlclNjcmlwdC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCAke2xvYWRlclNjcmlwdC5zcmN9LCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxvYWRlclNjcmlwdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbWRMb2FkZXIoKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLm5vdGlmeUV2ZW50KCdsb2FkLWVycm9yJywgeyBlcnJvciB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2xlYW5SZXNpemUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZSQpIHtcbiAgICAgIHRoaXMuX3Jlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZXNpemUoKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VkaXRvciEubGF5b3V0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5RXZlbnQoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvciEuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuX29wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCArdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgICBpZiAoYWxsS2V5cy5sZW5ndGggPT09IDEgJiYgYWxsS2V5c1swXSA9PT0gJ2Rpc2FibGVkJykgcmV0dXJuO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9lZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=