import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Optional, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NU_MONACO_EDITOR_CONFIG } from './monaco-editor.config';
import * as i0 from "@angular/core";
let loadedMonaco = false;
let loadPromise;
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NuMonacoEditorBase {
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
    constructor(el, config, doc, ngZone, destroy$) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this._resize$ = null;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', autoFormatTime: 100, ...config };
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG, optional: true }, { token: DOCUMENT }, { token: i0.NgZone }, { token: i0.DestroyRef }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NU_MONACO_EDITOR_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.NgZone }, { type: i0.DestroyRef }], propDecorators: { height: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFHVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBR3ZGLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLFdBQTBCLENBQUM7QUFPL0Isa0VBQWtFO0FBQ2xFLE1BQU0sT0FBZ0Isa0JBQWtCO0lBU3RDLElBQ0ksUUFBUSxDQUFDLEdBQXFCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELElBQ0ksT0FBTyxDQUFDLEdBQXVEO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJ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QkFFRixRQUFRO3NCQURYLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQVFJLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRGVzdHJveVJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWJhc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9lZGl0b3I/OiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciB8IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVEaWZmRWRpdG9yO1xuICBwcm90ZWN0ZWQgX29wdGlvbnMhOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9yZXNpemUkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9jb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBoZWlnaHQgPSBgMjAwcHhgO1xuICBASW5wdXQoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IHZhbDtcbiAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucywgLi4udmFsIH07XG4gICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cbiAgQE91dHB1dCgpIGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxOdU1vbmFjb0VkaXRvckV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOVV9NT05BQ09fRURJVE9SX0NPTkZJRykgY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jOiBhbnksXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBkZXN0cm95JDogRGVzdHJveVJlZixcbiAgKSB7XG4gICAgdGhpcy5fY29uZmlnID0geyBiYXNlVXJsOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yL21pbicsIGF1dG9Gb3JtYXRUaW1lOiAxMDAsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucyE7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdE1vbmFjbyhfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIF9pbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBub3RpZnlFdmVudCh0eXBlOiBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSwgb3RoZXI/OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZXZlbnQuZW1pdCh7IHR5cGUsIGVkaXRvcjogdGhpcy5fZWRpdG9yISwgLi4ub3RoZXIgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERpc2FibGVkKCk6IHRoaXMge1xuICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpPy51cGRhdGVPcHRpb25zKHsgcmVhZE9ubHk6IHRoaXMuX2Rpc2FibGVkIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmIChsb2FkZWRNb25hY28pIHtcbiAgICAgIGxvYWRQcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucywgdHJ1ZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvYWRlZE1vbmFjbyA9IHRydWU7XG4gICAgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKCkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xuICAgICAgaWYgKHdpbiA9PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luLm1vbmFjbykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuX2NvbmZpZy5iYXNlVXJsO1xuICAgICAgY29uc3QgYW1kTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICB3aW4ucmVxdWlyZS5jb25maWcoeyBwYXRoczogeyB2czogYCR7YmFzZVVybH0vdnNgIH0gfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb1ByZUxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvUHJlTG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHdpbi5yZXF1aXJlKFxuICAgICAgICAgIFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcubW9uYWNvTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvTG9hZCh3aW4ubW9uYWNvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGBVbmFibGUgdG8gbG9hZCBlZGl0b3IvZWRpdG9yLm1haW4gbW9kdWxlLCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIXdpbi5yZXF1aXJlKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlclNjcmlwdCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgICBsb2FkZXJTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBsb2FkZXJTY3JpcHQuc3JjID0gYCR7YmFzZVVybH0vdnMvbG9hZGVyLmpzYDtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9ubG9hZCA9IGFtZExvYWRlcjtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkICR7bG9hZGVyU2NyaXB0LnNyY30sIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobG9hZGVyU2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtZExvYWRlcigpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4gdGhpcy5ub3RpZnlFdmVudCgnbG9hZC1lcnJvcicsIHsgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuX3Jlc2l6ZSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZXNpemUoKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VkaXRvciEubGF5b3V0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5RXZlbnQoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvciEuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuX29wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCArdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX2VkaXRvcj8uZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=