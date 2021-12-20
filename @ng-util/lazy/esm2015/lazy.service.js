import { __awaiter } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NuLazyService {
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
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
    load(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            paths = this.fixPaths(paths);
            return Promise.all(paths.map(p => p.type === 'script' ? this.loadScript(p.path, { callback: p.callback }) : this.loadStyle(p.path))).then(res => {
                this._notify.next(res);
                return Promise.resolve(res);
            });
        });
    }
    loadScript(path, options) {
        const { innerContent } = Object.assign({}, options);
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(Object.assign(Object.assign({}, this.cached[path]), { status: 'loading' }));
                return;
            }
            this.list[path] = true;
            const onSuccess = (item) => {
                if (item.status === 'ok' && (options === null || options === void 0 ? void 0 : options.callback)) {
                    window[options === null || options === void 0 ? void 0 : options.callback] = () => {
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
                            status: 'ok',
                        });
                    }
                };
            }
            else {
                node.onload = () => onSuccess({
                    path,
                    status: 'ok',
                });
            }
            node.onerror = (error) => onSuccess({
                path,
                status: 'error',
                error,
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    loadStyle(path, options) {
        const { rel, innerContent } = Object.assign({ rel: 'stylesheet' }, options);
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
                type: 'style',
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
}
/** @nocollapse */ NuLazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NuLazyService_Factory() { return new NuLazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: NuLazyService, providedIn: "root" });
/** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
NuLazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NuLazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFxQi9DLE1BQU0sT0FBTyxhQUFhO0lBS3hCLFlBQXNDLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBSnRDLFNBQUksR0FBK0IsRUFBRSxDQUFDO1FBQ3RDLFdBQU0sR0FBb0MsRUFBRSxDQUFDO1FBQzdDLFlBQU8sR0FBb0MsSUFBSSxlQUFlLENBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFMUMsUUFBUSxDQUFDLEtBQWdEO1FBQy9ELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBMkIsRUFBRSxFQUFFO1lBQy9DLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFvQixDQUFDO1lBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNiLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFD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QUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELE1BQU0sSUFBSSxHQUFpQjtnQkFDekIsSUFBSTtnQkFDSixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsT0FBTzthQUNkLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztZQXpKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7Ozs7OzRDQU1uQixNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBOdUxhenlSZXNvdXJjZXNUeXBlID0gJ3NjcmlwdCcgfCAnc3R5bGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE51TGF6eVJlc291cmNlcyB7XG4gIHBhdGg6IHN0cmluZztcbiAgdHlwZTogTnVMYXp5UmVzb3VyY2VzVHlwZTtcbiAgLyoqXG4gICAqIOWbnuiwg+WQjeensFxuICAgKi9cbiAgY2FsbGJhY2s/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xuICB0eXBlPzogTnVMYXp5UmVzb3VyY2VzVHlwZTtcbiAgZXJyb3I/OiB7fTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOdUxhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBOdUxhenlSZXN1bHQgfSA9IHt9O1xuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxOdUxhenlSZXN1bHRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE51TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBwcml2YXRlIGZpeFBhdGhzKHBhdGhzPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzPik6IE51TGF6eVJlc291cmNlc1tdIHtcbiAgICBwYXRocyA9IHBhdGhzIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHtcbiAgICAgIHBhdGhzID0gW3BhdGhzXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGhzLm1hcCgocDogc3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSAodHlwZW9mIHAgPT09ICdzdHJpbmcnID8geyBwYXRoOiBwIH0gOiBwKSBhcyBOdUxhenlSZXNvdXJjZXM7XG4gICAgICBpZiAoIXJlcy50eXBlKSB7XG4gICAgICAgIHJlcy50eXBlID0gcmVzLnBhdGguZW5kc1dpdGgoJy5qcycpIHx8IHJlcy5jYWxsYmFjayA/ICdzY3JpcHQnIDogJ3N0eWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW9uaXRvciBmb3IgdGhlIGZpbmlzaGVkIG9mIGBwYXRoc2BcbiAgICpcbiAgICogLSBJdCdzIHJlY29tbWVuZGVkIHRvIHBhc3MgdGhlIHZhbHVlIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgYGxvYWQoKWAgbWV0aG9kXG4gICAqL1xuICBtb25pdG9yKHBhdGhzPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzPik6IE9ic2VydmFibGU8TnVMYXp5UmVzdWx0W10+IHtcbiAgICBjb25zdCBsaWJzID0gdGhpcy5maXhQYXRocyhwYXRocyk7XG5cbiAgICBjb25zdCBwaXBlcyA9IFtzaGFyZSgpLCBmaWx0ZXIoKGxzOiBOdUxhenlSZXN1bHRbXSkgPT4gbHMubGVuZ3RoICE9PSAwKV07XG5cbiAgICBpZiAobGlicy5sZW5ndGggPiAwKSB7XG4gICAgICBwaXBlcy5wdXNoKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGxzOiBOdUxhenlSZXN1bHRbXSkgPT4gbHMubGVuZ3RoID09PSBsaWJzLmxlbmd0aCAmJiBscy5ldmVyeSh2ID0+IHYuc3RhdHVzID09PSAnb2snICYmIGxpYnMuZmluZChsdyA9PiBsdy5wYXRoID09PSB2LnBhdGgpKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMgYXMgYW55KSBhcyBhbnkpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBzcGVjaWZpZWQgcmVzb3VyY2VzLCBpbmNsdWRlcyBgLmpzYCwgYC5jc3NgXG4gICAqXG4gICAqIC0gVGhlIHJldHVybmVkIFByb21pc2UgZG9lcyBub3QgbWVhbiB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAqIC0gWW91IGNhbiBtb25pdG9yIGxvYWQgaXMgc3VjY2VzcyB2aWEgYG1vbml0b3IoKWBcbiAgICovXG4gIGFzeW5jIGxvYWQocGF0aHM6IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IE51TGF6eVJlc291cmNlcz4pOiBQcm9taXNlPE51TGF6eVJlc3VsdFtdPiB7XG4gICAgcGF0aHMgPSB0aGlzLmZpeFBhdGhzKHBhdGhzKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIChwYXRocyBhcyBOdUxhenlSZXNvdXJjZXNbXSkubWFwKHAgPT5cbiAgICAgICAgcC50eXBlID09PSAnc2NyaXB0JyA/IHRoaXMubG9hZFNjcmlwdChwLnBhdGgsIHsgY2FsbGJhY2s6IHAuY2FsbGJhY2sgfSkgOiB0aGlzLmxvYWRTdHlsZShwLnBhdGgpLFxuICAgICAgKSxcbiAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgaW5uZXJDb250ZW50Pzogc3RyaW5nOyBjYWxsYmFjaz86IHN0cmluZyB9KTogUHJvbWlzZTxOdUxhenlSZXN1bHQ+IHtcbiAgICBjb25zdCB7IGlubmVyQ29udGVudCB9ID0geyAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHsgLi4udGhpcy5jYWNoZWRbcGF0aF0sIHN0YXR1czogJ2xvYWRpbmcnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogTnVMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gJ29rJyAmJiBvcHRpb25zPy5jYWxsYmFjaykge1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KVtvcHRpb25zPy5jYWxsYmFja10gPSAoKSA9PiB7XG4gICAgICAgICAgICBvblN1Y2Nlc3NUcnV0aChpdGVtKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uU3VjY2Vzc1RydXRoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgb25TdWNjZXNzVHJ1dGggPSAoaXRlbTogTnVMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIGl0ZW0udHlwZSA9ICdzY3JpcHQnO1xuICAgICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgIHRoaXMuX25vdGlmeS5uZXh0KFtpdGVtXSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgYW55O1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBub2RlLnNyYyA9IHBhdGg7XG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgLy8gSUVcbiAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgbm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+XG4gICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IHt9KSA9PlxuICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU3R5bGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogeyByZWw/OiBzdHJpbmc7IGlubmVyQ29udGVudD86IHN0cmluZyB9KTogUHJvbWlzZTxOdUxhenlSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHJlbCwgaW5uZXJDb250ZW50IH0gPSB7IHJlbDogJ3N0eWxlc2hlZXQnLCAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICAgIG5vZGUucmVsID0gcmVsO1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIG5vZGUuaHJlZiA9IHBhdGg7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIGNvbnN0IGl0ZW06IE51TGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICB0eXBlOiAnc3R5bGUnLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==