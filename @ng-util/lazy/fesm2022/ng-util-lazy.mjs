import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { share, filter } from 'rxjs/operators';

class NuLazyService {
    doc = inject(DOCUMENT);
    list = {};
    cached = {};
    _notify = new BehaviorSubject([]);
    fixPaths(paths) {
        paths = paths || [];
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        return paths.map((p) => {
            const res = (typeof p === 'string' ? { path: p } : p);
            if (!res.type) {
                res.type = res.path.endsWith('.js') || res.callback ? 'script' : 'style';
            }
            return res;
        });
    }
    /**
     * Monitor for the finished of `paths`
     *
     * - It's recommended to pass the value in accordance with the `load()` method
     */
    monitor(paths) {
        const libs = this.fixPaths(paths);
        const pipes = [share(), filter((ls) => ls.length !== 0)];
        if (libs.length > 0) {
            pipes.push(filter((ls) => ls.length === libs.length && ls.every(v => v.status === 'ok' && libs.find(lw => lw.path === v.path))));
        }
        return this._notify.asObservable().pipe(pipe.apply(this, pipes));
    }
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * Load the specified resources, includes `.js`, `.css`
     *
     * - The returned Promise does not mean that it was successfully loaded
     * - You can monitor load is success via `monitor()`
     */
    async load(paths) {
        paths = this.fixPaths(paths);
        return Promise.all(paths.map(p => p.type === 'script' ? this.loadScript(p.path, { callback: p.callback }) : this.loadStyle(p.path))).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }
    loadScript(path, options) {
        const { innerContent } = { ...options };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve({ ...this.cached[path], status: 'loading' });
                return;
            }
            this.list[path] = true;
            const onSuccess = (item) => {
                if (item.status === 'ok' && options?.callback) {
                    window[options?.callback] = () => {
                        onSuccessTruth(item);
                    };
                }
                else {
                    onSuccessTruth(item);
                }
            };
            const onSuccessTruth = (item) => {
                item.type = 'script';
                this.cached[path] = item;
                resolve(item);
                this._notify.next([item]);
            };
            const node = this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (node.readyState) {
                // IE
                node.onreadystatechange = () => {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path,
                            status: 'ok'
                        });
                    }
                };
            }
            else {
                node.onload = () => onSuccess({
                    path,
                    status: 'ok'
                });
            }
            node.onerror = (error) => onSuccess({
                path,
                status: 'error',
                error
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    loadStyle(path, options) {
        const { rel, innerContent } = { rel: 'stylesheet', ...options };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            const node = this.doc.createElement('link');
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            const item = {
                path,
                status: 'ok',
                type: 'style'
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuLazyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    /** @nocollapse */ static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuLazyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.2", ngImport: i0, type: NuLazyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NuLazyService };
//# sourceMappingURL=ng-util-lazy.mjs.map
