import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuLazyService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuLazyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuLazyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBcUIvQyxNQUFNLE9BQU8sYUFBYTtJQUt4QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQW9DLEVBQUUsQ0FBQztRQUM3QyxZQUFPLEdBQW9DLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBRTFDLFFBQVEsQ0FBQyxLQUFnRDtRQUMvRCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQTJCLEVBQUUsRUFBRTtZQUMvQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBb0IsQ0FBQztZQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDYixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzFFO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLEtBQWdEO1FBQ3RELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFrQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixLQUFLLENBQUMsSUFBSSxDQUNSLE1BQU0sQ0FDSixDQUFDLEVBQWtCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdILENBQ0YsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFZLENBQVEsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQStDO1FBQ3hELEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDZixLQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNuQyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDakcsQ0FDRixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLE9BQXNEO1FBQzdFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUM1QixPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBa0IsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sRUFBRSxRQUFRLEVBQUU7b0JBQzVDLE1BQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFO3dCQUN4QyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUFrQixFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQzlCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUMvQjtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsS0FBSztnQkFDTCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxFQUFFO29CQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO3dCQUNsRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO3dCQUMvQixTQUFTLENBQUM7NEJBQ1IsSUFBSTs0QkFDSixNQUFNLEVBQUUsSUFBSTt5QkFDYixDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FDakIsU0FBUyxDQUFDO29CQUNSLElBQUk7b0JBQ0osTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQyxDQUFDO2FBQ047WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBUyxFQUFFLEVBQUUsQ0FDM0IsU0FBUyxDQUFDO2dCQUNSLElBQUk7Z0JBQ0osTUFBTSxFQUFFLE9BQU87Z0JBQ2YsS0FBSzthQUNOLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsT0FBaUQ7UUFDdkUsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNoRSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBb0IsQ0FBQztZQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELE1BQU0sSUFBSSxHQUFpQjtnQkFDekIsSUFBSTtnQkFDSixNQUFNLEVBQUUsSUFBSTtnQkFDWixJQUFJLEVBQUUsT0FBTzthQUNkLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3NJQXhKVSxhQUFhLGtCQUtKLFFBQVE7MElBTGpCLGFBQWEsY0FEQSxNQUFNOztnR0FDbkIsYUFBYTtrQkFEekIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQU1uQixNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IHR5cGUgTnVMYXp5UmVzb3VyY2VzVHlwZSA9ICdzY3JpcHQnIHwgJ3N0eWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBOdUxhenlSZXNvdXJjZXMge1xuICBwYXRoOiBzdHJpbmc7XG4gIHR5cGU6IE51TGF6eVJlc291cmNlc1R5cGU7XG4gIC8qKlxuICAgKiDlm57osIPlkI3np7BcbiAgICovXG4gIGNhbGxiYWNrPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51TGF6eVJlc3VsdCB7XG4gIHBhdGg6IHN0cmluZztcbiAgc3RhdHVzOiAnb2snIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJztcbiAgdHlwZT86IE51TGF6eVJlc291cmNlc1R5cGU7XG4gIGVycm9yPzoge307XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnVMYXp5U2VydmljZSB7XG4gIHByaXZhdGUgbGlzdDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBjYWNoZWQ6IHsgW2tleTogc3RyaW5nXTogTnVMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TnVMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOdUxhenlSZXN1bHRbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHt9XG5cbiAgcHJpdmF0ZSBmaXhQYXRocyhwYXRocz86IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IE51TGF6eVJlc291cmNlcz4pOiBOdUxhenlSZXNvdXJjZXNbXSB7XG4gICAgcGF0aHMgPSBwYXRocyB8fCBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aHMpKSB7XG4gICAgICBwYXRocyA9IFtwYXRoc107XG4gICAgfVxuICAgIHJldHVybiBwYXRocy5tYXAoKHA6IHN0cmluZyB8IE51TGF6eVJlc291cmNlcykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gKHR5cGVvZiBwID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcCB9IDogcCkgYXMgTnVMYXp5UmVzb3VyY2VzO1xuICAgICAgaWYgKCFyZXMudHlwZSkge1xuICAgICAgICByZXMudHlwZSA9IHJlcy5wYXRoLmVuZHNXaXRoKCcuanMnKSB8fCByZXMuY2FsbGJhY2sgPyAnc2NyaXB0JyA6ICdzdHlsZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vbml0b3IgZm9yIHRoZSBmaW5pc2hlZCBvZiBgcGF0aHNgXG4gICAqXG4gICAqIC0gSXQncyByZWNvbW1lbmRlZCB0byBwYXNzIHRoZSB2YWx1ZSBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIGBsb2FkKClgIG1ldGhvZFxuICAgKi9cbiAgbW9uaXRvcihwYXRocz86IHN0cmluZyB8IEFycmF5PHN0cmluZyB8IE51TGF6eVJlc291cmNlcz4pOiBPYnNlcnZhYmxlPE51TGF6eVJlc3VsdFtdPiB7XG4gICAgY29uc3QgbGlicyA9IHRoaXMuZml4UGF0aHMocGF0aHMpO1xuXG4gICAgY29uc3QgcGlwZXMgPSBbc2hhcmUoKSwgZmlsdGVyKChsczogTnVMYXp5UmVzdWx0W10pID0+IGxzLmxlbmd0aCAhPT0gMCldO1xuXG4gICAgaWYgKGxpYnMubGVuZ3RoID4gMCkge1xuICAgICAgcGlwZXMucHVzaChcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIChsczogTnVMYXp5UmVzdWx0W10pID0+IGxzLmxlbmd0aCA9PT0gbGlicy5sZW5ndGggJiYgbHMuZXZlcnkodiA9PiB2LnN0YXR1cyA9PT0gJ29rJyAmJiBsaWJzLmZpbmQobHcgPT4gbHcucGF0aCA9PT0gdi5wYXRoKSksXG4gICAgICAgICksXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShwaXBlLmFwcGx5KHRoaXMsIHBpcGVzIGFzIGFueSkgYXMgYW55KTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdCA9IHt9O1xuICAgIHRoaXMuY2FjaGVkID0ge307XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgc3BlY2lmaWVkIHJlc291cmNlcywgaW5jbHVkZXMgYC5qc2AsIGAuY3NzYFxuICAgKlxuICAgKiAtIFRoZSByZXR1cm5lZCBQcm9taXNlIGRvZXMgbm90IG1lYW4gdGhhdCBpdCB3YXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxuICAgKiAtIFlvdSBjYW4gbW9uaXRvciBsb2FkIGlzIHN1Y2Nlc3MgdmlhIGBtb25pdG9yKClgXG4gICAqL1xuICBhc3luYyBsb2FkKHBhdGhzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmcgfCBOdUxhenlSZXNvdXJjZXM+KTogUHJvbWlzZTxOdUxhenlSZXN1bHRbXT4ge1xuICAgIHBhdGhzID0gdGhpcy5maXhQYXRocyhwYXRocyk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAocGF0aHMgYXMgTnVMYXp5UmVzb3VyY2VzW10pLm1hcChwID0+XG4gICAgICAgIHAudHlwZSA9PT0gJ3NjcmlwdCcgPyB0aGlzLmxvYWRTY3JpcHQocC5wYXRoLCB7IGNhbGxiYWNrOiBwLmNhbGxiYWNrIH0pIDogdGhpcy5sb2FkU3R5bGUocC5wYXRoKSxcbiAgICAgICksXG4gICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiB7IGlubmVyQ29udGVudD86IHN0cmluZzsgY2FsbGJhY2s/OiBzdHJpbmcgfSk6IFByb21pc2U8TnVMYXp5UmVzdWx0PiB7XG4gICAgY29uc3QgeyBpbm5lckNvbnRlbnQgfSA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnRoaXMuY2FjaGVkW3BhdGhdLCBzdGF0dXM6ICdsb2FkaW5nJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IE51TGF6eVJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdvaycgJiYgb3B0aW9ucz8uY2FsbGJhY2spIHtcbiAgICAgICAgICAod2luZG93IGFzIGFueSlbb3B0aW9ucz8uY2FsbGJhY2tdID0gKCkgPT4ge1xuICAgICAgICAgICAgb25TdWNjZXNzVHJ1dGgoaXRlbSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblN1Y2Nlc3NUcnV0aChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uU3VjY2Vzc1RydXRoID0gKGl0ZW06IE51TGF6eVJlc3VsdCkgPT4ge1xuICAgICAgICBpdGVtLnR5cGUgPSAnc2NyaXB0JztcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICB0aGlzLl9ub3RpZnkubmV4dChbaXRlbV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIGFueTtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PlxuICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiB7fSkgPT5cbiAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IHsgcmVsPzogc3RyaW5nOyBpbm5lckNvbnRlbnQ/OiBzdHJpbmcgfSk6IFByb21pc2U8TnVMYXp5UmVzdWx0PiB7XG4gICAgY29uc3QgeyByZWwsIGlubmVyQ29udGVudCB9ID0geyByZWw6ICdzdHlsZXNoZWV0JywgLi4ub3B0aW9ucyB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBOdUxhenlSZXN1bHQgPSB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgdHlwZTogJ3N0eWxlJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=