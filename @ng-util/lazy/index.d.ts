import { Observable } from 'rxjs';
import * as i0 from '@angular/core';

type NuLazyResourcesType = 'script' | 'style';
interface NuLazyResources {
    path: string;
    type: NuLazyResourcesType;
    /**
     * 回调名称
     */
    callback?: string;
}
interface NuLazyResult {
    path: string;
    status: 'ok' | 'error' | 'loading';
    type?: NuLazyResourcesType;
    error?: Event | string;
}
declare class NuLazyService {
    private readonly doc;
    private list;
    private cached;
    private _notify;
    private fixPaths;
    /**
     * Monitor for the finished of `paths`
     *
     * - It's recommended to pass the value in accordance with the `load()` method
     */
    monitor(paths?: string | (string | NuLazyResources)[]): Observable<NuLazyResult[]>;
    clear(): void;
    /**
     * Load the specified resources, includes `.js`, `.css`
     *
     * - The returned Promise does not mean that it was successfully loaded
     * - You can monitor load is success via `monitor()`
     */
    load(paths: string | (string | NuLazyResources)[]): Promise<NuLazyResult[]>;
    loadScript(path: string, options?: {
        innerContent?: string;
        callback?: string;
    }): Promise<NuLazyResult>;
    loadStyle(path: string, options?: {
        rel?: string;
        innerContent?: string;
    }): Promise<NuLazyResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuLazyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NuLazyService>;
}

export { NuLazyService };
export type { NuLazyResources, NuLazyResourcesType, NuLazyResult };
