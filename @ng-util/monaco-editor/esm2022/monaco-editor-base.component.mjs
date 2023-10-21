import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, EventEmitter, Inject, Input, NgZone, Output, } from '@angular/core';
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: DOCUMENT }, { token: i0.NgZone }, { token: i0.DestroyRef }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
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
                }] }, { type: i0.NgZone }, { type: i0.DestroyRef }]; }, propDecorators: { height: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEdBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHdkYsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksV0FBMEIsQ0FBQztBQU8vQixrRUFBa0U7QUFDbEUsTUFBTSxPQUFnQixrQkFBa0I7SUFTdEMsSUFDSSxRQUFRLENBQUMsR0FBcUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFDSSxPQUFPLENBQUMsR0FBdUQ7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxZQUNZLEVB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a0JBTnZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkEyQkksTUFBTTsyQkFBQyx1QkFBdUI7OzBCQUM5QixNQUFNOzJCQUFDLFFBQVE7MEZBbkJULE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUYsUUFBUTtzQkFEWCxLQUFLO2dCQU1GLE9BQU87c0JBRFYsS0FBSztnQkFPSSxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE51TW9uYWNvRWRpdG9yQ29uZmlnLCBOVV9NT05BQ09fRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci5jb25maWcnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JFdmVudCwgTnVNb25hY29FZGl0b3JFdmVudFR5cGUgfSBmcm9tICcuL21vbmFjby1lZGl0b3IudHlwZXMnO1xuXG5sZXQgbG9hZGVkTW9uYWNvID0gZmFsc2U7XG5sZXQgbG9hZFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251LW1vbmFjby1iYXNlJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE51TW9uYWNvRWRpdG9yQmFzZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9lZGl0b3I/OiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvciB8IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVEaWZmRWRpdG9yO1xuICBwcm90ZWN0ZWQgX29wdGlvbnMhOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucztcbiAgcHJvdGVjdGVkIF9yZXNpemUkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIF9jb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBoZWlnaHQgPSBgMjAwcHhgO1xuICBASW5wdXQoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IHZhbDtcbiAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IG9wdGlvbnModmFsOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucywgLi4udmFsIH07XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cbiAgQE91dHB1dCgpIGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxOdU1vbmFjb0VkaXRvckV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOVV9NT05BQ09fRURJVE9SX0NPTkZJRykgY29uZmlnOiBOdU1vbmFjb0VkaXRvckNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jOiBhbnksXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBkZXN0cm95JDogRGVzdHJveVJlZixcbiAgKSB7XG4gICAgdGhpcy5fY29uZmlnID0geyBiYXNlVXJsOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yL21pbicsIC4uLmNvbmZpZyB9O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0T3B0aW9ucyE7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdE1vbmFjbyhfb3B0aW9uczogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMsIF9pbml0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIHByb3RlY3RlZCBub3RpZnlFdmVudCh0eXBlOiBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSwgb3RoZXI/OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZXZlbnQuZW1pdCh7IHR5cGUsIGVkaXRvcjogdGhpcy5fZWRpdG9yISwgLi4ub3RoZXIgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERpc2FibGVkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgICh0aGlzLl9lZGl0b3IgYXMgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUNvZGVFZGl0b3IpLnVwZGF0ZU9wdGlvbnMoeyByZWFkT25seTogdGhpcy5fZGlzYWJsZWQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmIChsb2FkZWRNb25hY28pIHtcbiAgICAgIGxvYWRQcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucywgdHJ1ZSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvYWRlZE1vbmFjbyA9IHRydWU7XG4gICAgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKCkgPT4gdm9pZCwgcmVqZWN0OiAoZXJyOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnN0IHdpbjogYW55ID0gd2luZG93O1xuICAgICAgaWYgKHdpbiA9PSBudWxsKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luLm1vbmFjbykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYmFzZVVybCA9IHRoaXMuX2NvbmZpZy5iYXNlVXJsO1xuICAgICAgY29uc3QgYW1kTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICB3aW4ucmVxdWlyZS5jb25maWcoeyBwYXRoczogeyB2czogYCR7YmFzZVVybH0vdnNgIH0gfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm1vbmFjb1ByZUxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvUHJlTG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHdpbi5yZXF1aXJlKFxuICAgICAgICAgIFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcubW9uYWNvTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLl9jb25maWcubW9uYWNvTG9hZCh3aW4ubW9uYWNvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLm9wdGlvbnMsIHRydWUpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGBVbmFibGUgdG8gbG9hZCBlZGl0b3IvZWRpdG9yLm1haW4gbW9kdWxlLCBwbGVhc2UgY2hlY2sgeW91ciBuZXR3b3JrIGVudmlyb25tZW50LmApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIXdpbi5yZXF1aXJlKSB7XG4gICAgICAgIGNvbnN0IGxvYWRlclNjcmlwdCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgICBsb2FkZXJTY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBsb2FkZXJTY3JpcHQuc3JjID0gYCR7YmFzZVVybH0vdnMvbG9hZGVyLmpzYDtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9ubG9hZCA9IGFtZExvYWRlcjtcbiAgICAgICAgbG9hZGVyU2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkICR7bG9hZGVyU2NyaXB0LnNyY30sIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobG9hZGVyU2NyaXB0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtZExvYWRlcigpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMubm90aWZ5RXZlbnQoJ2xvYWQtZXJyb3InLCB7IGVycm9yIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjbGVhblJlc2l6ZSgpOiB0aGlzIHtcbiAgICB0aGlzLl9yZXNpemUkPy51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICB0aGlzLl9yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9lZGl0b3IhLmxheW91dCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUV2ZW50KCdyZXNpemUnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9lZGl0b3IpIHJldHVybjtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9lZGl0b3IhLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyh0aGlzLl9vcHRpb25zLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgK3RoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcyk7XG4gICAgaWYgKGFsbEtleXMubGVuZ3RoID09PSAxICYmIGFsbEtleXNbMF0gPT09ICdkaXNhYmxlZCcpIHJldHVybjtcbiAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5SZXNpemUoKTtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fZWRpdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19