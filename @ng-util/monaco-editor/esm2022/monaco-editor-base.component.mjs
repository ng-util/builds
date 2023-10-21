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
        this._config = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min', autoFormatTime: 100, ...config };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21vbmFjby1lZGl0b3IvbW9uYWNvLWVkaXRvci1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEdBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHdkYsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksV0FBMEIsQ0FBQztBQU8vQixrRUFBa0U7QUFDbEUsTUFBTSxPQUFnQixrQkFBa0I7SUFTdEMsSUFDSSxRQUFRLENBQUMsR0FBcUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFDSSxPQUFPLENBQUMsR0FBdUQ7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxZQUNZLEVB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LEVBQUU7OzRGQUlRLGtCQUFrQjtrQkFOdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQTJCSSxNQUFNOzJCQUFDLHVCQUF1Qjs7MEJBQzlCLE1BQU07MkJBQUMsUUFBUTswRkFuQlQsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRixRQUFRO3NCQURYLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQU9JLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRGVzdHJveVJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JDb25maWcsIE5VX01PTkFDT19FRElUT1JfQ09ORklHIH0gZnJvbSAnLi9tb25hY28tZWRpdG9yLmNvbmZpZyc7XG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckV2ZW50LCBOdU1vbmFjb0VkaXRvckV2ZW50VHlwZSB9IGZyb20gJy4vbW9uYWNvLWVkaXRvci50eXBlcyc7XG5cbmxldCBsb2FkZWRNb25hY28gPSBmYWxzZTtcbmxldCBsb2FkUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnUtbW9uYWNvLWJhc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnVNb25hY29FZGl0b3JCYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2VkaXRvcj86IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVDb2RlRWRpdG9yIHwgbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZURpZmZFZGl0b3I7XG4gIHByb3RlY3RlZCBfb3B0aW9ucyE6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zO1xuICBwcm90ZWN0ZWQgX3Jlc2l6ZSQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgX2NvbmZpZzogTnVNb25hY29FZGl0b3JDb25maWc7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGhlaWdodCA9IGAyMDBweGA7XG4gIEBJbnB1dCgpIGRlbGF5ID0gMDtcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB0cnVlIDogdmFsO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWw6IG1vbmFjby5lZGl0b3IuSVN0YW5kYWxvbmVFZGl0b3JDb25zdHJ1Y3Rpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4udGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zLCAuLi52YWwgfTtcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBAT3V0cHV0KCkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE51TW9uYWNvRWRpdG9yRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KE5VX01PTkFDT19FRElUT1JfQ09ORklHKSBjb25maWc6IE51TW9uYWNvRWRpdG9yQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2M6IGFueSxcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBEZXN0cm95UmVmLFxuICApIHtcbiAgICB0aGlzLl9jb25maWcgPSB7IGJhc2VVcmw6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3IvbWluJywgYXV0b0Zvcm1hdFRpbWU6IDEwMCwgLi4uY29uZmlnIH07XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fY29uZmlnLmRlZmF1bHRPcHRpb25zITtcbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0TW9uYWNvKF9vcHRpb25zOiBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lRWRpdG9yQ29uc3RydWN0aW9uT3B0aW9ucywgX2luaXRFdmVudDogYm9vbGVhbik6IHZvaWQ7XG5cbiAgcHJvdGVjdGVkIG5vdGlmeUV2ZW50KHR5cGU6IE51TW9uYWNvRWRpdG9yRXZlbnRUeXBlLCBvdGhlcj86IE51TW9uYWNvRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5ldmVudC5lbWl0KHsgdHlwZSwgZWRpdG9yOiB0aGlzLl9lZGl0b3IhLCAuLi5vdGhlciB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGlzYWJsZWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgKHRoaXMuX2VkaXRvciBhcyBtb25hY28uZWRpdG9yLklTdGFuZGFsb25lQ29kZUVkaXRvcikudXBkYXRlT3B0aW9ucyh7IHJlYWRPbmx5OiB0aGlzLl9kaXNhYmxlZCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKGxvYWRlZE1vbmFjbykge1xuICAgICAgbG9hZFByb21pc2UudGhlbigoKSA9PiB0aGlzLmluaXRNb25hY28odGhpcy5vcHRpb25zLCB0cnVlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbG9hZGVkTW9uYWNvID0gdHJ1ZTtcbiAgICBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiAoKSA9PiB2b2lkLCByZWplY3Q6IChlcnI6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgY29uc3Qgd2luOiBhbnkgPSB3aW5kb3c7XG4gICAgICBpZiAod2luID09IG51bGwpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW4ubW9uYWNvKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5fY29uZmlnLmJhc2VVcmw7XG4gICAgICBjb25zdCBhbWRMb2FkZXIgPSAoKSA9PiB7XG4gICAgICAgIHdpbi5yZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7IHZzOiBgJHtiYXNlVXJsfS92c2AgfSB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcubW9uYWNvUHJlTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX2NvbmZpZy5tb25hY29QcmVMb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luLnJlcXVpcmUoXG4gICAgICAgICAgWyd2cy9lZGl0b3IvZWRpdG9yLm1haW4nXSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5tb25hY29Mb2FkKHdpbi5tb25hY28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byBsb2FkIGVkaXRvci9lZGl0b3IubWFpbiBtb2R1bGUsIHBsZWFzZSBjaGVjayB5b3VyIG5ldHdvcmsgZW52aXJvbm1lbnQuYCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghd2luLnJlcXVpcmUpIHtcbiAgICAgICAgY29uc3QgbG9hZGVyU2NyaXB0ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgICAgIGxvYWRlclNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGxvYWRlclNjcmlwdC5zcmMgPSBgJHtiYXNlVXJsfS92cy9sb2FkZXIuanNgO1xuICAgICAgICBsb2FkZXJTY3JpcHQub25sb2FkID0gYW1kTG9hZGVyO1xuICAgICAgICBsb2FkZXJTY3JpcHQub25lcnJvciA9ICgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgJHtsb2FkZXJTY3JpcHQuc3JjfSwgcGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yayBlbnZpcm9ubWVudC5gKTtcbiAgICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsb2FkZXJTY3JpcHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1kTG9hZGVyKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5ub3RpZnlFdmVudCgnbG9hZC1lcnJvcicsIHsgZXJyb3IgfSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFuUmVzaXplKCk6IHRoaXMge1xuICAgIHRoaXMuX3Jlc2l6ZSQ/LnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJSZXNpemUoKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VkaXRvciEubGF5b3V0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5RXZlbnQoJ3Jlc2l6ZScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2VkaXRvcikgcmV0dXJuO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX2VkaXRvciEuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMuX29wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCArdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKTtcbiAgICBpZiAoYWxsS2V5cy5sZW5ndGggPT09IDEgJiYgYWxsS2V5c1swXSA9PT0gJ2Rpc2FibGVkJykgcmV0dXJuO1xuICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlc2l6ZSgpO1xuICAgIGlmICh0aGlzLl9lZGl0b3IpIHtcbiAgICAgIHRoaXMuX2VkaXRvci5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9lZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=