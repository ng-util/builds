import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
class NuLazyService {
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
                type: 'style',
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuLazyService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuLazyService, providedIn: 'root' }); }
}
export { NuLazyService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuLazyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBb0IvQyxNQUNhLGFBQWE7SUFLeEIsWUFBc0MsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFKdEMsU0FBSSxHQUErQixFQUFFLENBQUM7UUFDdEMsV0FBTSxHQUFvQyxFQUFFLENBQUM7UUFDN0MsWUFBTyxHQUFvQyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUUxQyxRQUFRLENBQUMsS0FBZ0Q7UUFDL0QsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUEyQixFQUFFLEVBQUU7WUFDL0MsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW9CLENBQUM7WUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxD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QUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxNQUFNLElBQUksR0FBaUI7Z0JBQ3pCLElBQUk7Z0JBQ0osTUFBTSxFQUFFLElBQUk7Z0JBQ1osSUFBSSxFQUFFLE9BQU87YUFDZCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztpSUF4SlUsYUFBYSxrQkFLSixRQUFRO3FJQUxqQixhQUFhLGNBREEsTUFBTTs7U0FDbkIsYUFBYTsyRkFBYixhQUFhO2tCQUR6QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBTW5CLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgdHlwZSBOdUxhenlSZXNvdXJjZXNUeXBlID0gJ3NjcmlwdCcgfCAnc3R5bGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE51TGF6eVJlc291cmNlcyB7XG4gIHBhdGg6IHN0cmluZztcbiAgdHlwZTogTnVMYXp5UmVzb3VyY2VzVHlwZTtcbiAgLyoqXG4gICAqIOWbnuiwg+WQjeensFxuICAgKi9cbiAgY2FsbGJhY2s/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xuICB0eXBlPzogTnVMYXp5UmVzb3VyY2VzVHlwZTtcbiAgZXJyb3I/OiB7fTtcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOdUxhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBOdUxhenlSZXN1bHQgfSA9IHt9O1xuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxOdUxhenlSZXN1bHRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE51TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBwcml2YXRlIGZpeFBhdGhzKHBhdGhzPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzPik6IE51TGF6eVJlc291cmNlc1tdIHtcbiAgICBwYXRocyA9IHBhdGhzIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHtcbiAgICAgIHBhdGhzID0gW3BhdGhzXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGhzLm1hcCgocDogc3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSAodHlwZW9mIHAgPT09ICdzdHJpbmcnID8geyBwYXRoOiBwIH0gOiBwKSBhcyBOdUxhenlSZXNvdXJjZXM7XG4gICAgICBpZiAoIXJlcy50eXBlKSB7XG4gICAgICAgIHJlcy50eXBlID0gcmVzLnBhdGguZW5kc1dpdGgoJy5qcycpIHx8IHJlcy5jYWxsYmFjayA/ICdzY3JpcHQnIDogJ3N0eWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW9uaXRvciBmb3IgdGhlIGZpbmlzaGVkIG9mIGBwYXRoc2BcbiAgICpcbiAgICogLSBJdCdzIHJlY29tbWVuZGVkIHRvIHBhc3MgdGhlIHZhbHVlIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgYGxvYWQoKWAgbWV0aG9kXG4gICAqL1xuICBtb25pdG9yKHBhdGhzPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nIHwgTnVMYXp5UmVzb3VyY2VzPik6IE9ic2VydmFibGU8TnVMYXp5UmVzdWx0W10+IHtcbiAgICBjb25zdCBsaWJzID0gdGhpcy5maXhQYXRocyhwYXRocyk7XG5cbiAgICBjb25zdCBwaXBlcyA9IFtzaGFyZSgpLCBmaWx0ZXIoKGxzOiBOdUxhenlSZXN1bHRbXSkgPT4gbHMubGVuZ3RoICE9PSAwKV07XG5cbiAgICBpZiAobGlicy5sZW5ndGggPiAwKSB7XG4gICAgICBwaXBlcy5wdXNoKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKGxzOiBOdUxhenlSZXN1bHRbXSkgPT4gbHMubGVuZ3RoID09PSBsaWJzLmxlbmd0aCAmJiBscy5ldmVyeSh2ID0+IHYuc3RhdHVzID09PSAnb2snICYmIGxpYnMuZmluZChsdyA9PiBsdy5wYXRoID09PSB2LnBhdGgpKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMgYXMgYW55KSBhcyBhbnkpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBzcGVjaWZpZWQgcmVzb3VyY2VzLCBpbmNsdWRlcyBgLmpzYCwgYC5jc3NgXG4gICAqXG4gICAqIC0gVGhlIHJldHVybmVkIFByb21pc2UgZG9lcyBub3QgbWVhbiB0aGF0IGl0IHdhcyBzdWNjZXNzZnVsbHkgbG9hZGVkXG4gICAqIC0gWW91IGNhbiBtb25pdG9yIGxvYWQgaXMgc3VjY2VzcyB2aWEgYG1vbml0b3IoKWBcbiAgICovXG4gIGFzeW5jIGxvYWQocGF0aHM6IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IE51TGF6eVJlc291cmNlcz4pOiBQcm9taXNlPE51TGF6eVJlc3VsdFtdPiB7XG4gICAgcGF0aHMgPSB0aGlzLmZpeFBhdGhzKHBhdGhzKTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIChwYXRocyBhcyBOdUxhenlSZXNvdXJjZXNbXSkubWFwKHAgPT5cbiAgICAgICAgcC50eXBlID09PSAnc2NyaXB0JyA/IHRoaXMubG9hZFNjcmlwdChwLnBhdGgsIHsgY2FsbGJhY2s6IHAuY2FsbGJhY2sgfSkgOiB0aGlzLmxvYWRTdHlsZShwLnBhdGgpLFxuICAgICAgKSxcbiAgICApLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgaW5uZXJDb250ZW50Pzogc3RyaW5nOyBjYWxsYmFjaz86IHN0cmluZyB9KTogUHJvbWlzZTxOdUxhenlSZXN1bHQ+IHtcbiAgICBjb25zdCB7IGlubmVyQ29udGVudCB9ID0geyAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHsgLi4udGhpcy5jYWNoZWRbcGF0aF0sIHN0YXR1czogJ2xvYWRpbmcnIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogTnVMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gJ29rJyAmJiBvcHRpb25zPy5jYWxsYmFjaykge1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KVtvcHRpb25zPy5jYWxsYmFja10gPSAoKSA9PiB7XG4gICAgICAgICAgICBvblN1Y2Nlc3NUcnV0aChpdGVtKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uU3VjY2Vzc1RydXRoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgb25TdWNjZXNzVHJ1dGggPSAoaXRlbTogTnVMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIGl0ZW0udHlwZSA9ICdzY3JpcHQnO1xuICAgICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICAgIHRoaXMuX25vdGlmeS5uZXh0KFtpdGVtXSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgYW55O1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBub2RlLnNyYyA9IHBhdGg7XG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgLy8gSUVcbiAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgbm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+XG4gICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IHt9KSA9PlxuICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU3R5bGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogeyByZWw/OiBzdHJpbmc7IGlubmVyQ29udGVudD86IHN0cmluZyB9KTogUHJvbWlzZTxOdUxhenlSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHJlbCwgaW5uZXJDb250ZW50IH0gPSB7IHJlbDogJ3N0eWxlc2hlZXQnLCAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgICAgIG5vZGUucmVsID0gcmVsO1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgIG5vZGUuaHJlZiA9IHBhdGg7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIGNvbnN0IGl0ZW06IE51TGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICB0eXBlOiAnc3R5bGUnLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==