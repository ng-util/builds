import { Observable } from 'rxjs';
export interface NuLazyResult {
    path: string;
    status: 'ok' | 'error' | 'loading';
    error?: {};
}
export declare class NuLazyService {
    private doc;
    private list;
    private cached;
    private _notify;
    constructor(doc: any);
    /**
     * @deprecated Use `monitor()` method instead, removed it in `11.0.0`
     */
    get change(): Observable<NuLazyResult[]>;
    private fixPaths;
    /**
     * Monitor for the finished of `paths`
     *
     * - It's recommended to pass the value in accordance with the `load()` method
     */
    monitor(paths?: string | string[]): Observable<NuLazyResult[]>;
    clear(): void;
    /**
     * Load the specified resources, includes `.js`, `.css`
     *
     * - The returned Promise does not mean that it was successfully loaded
     * - You can monitor load is success via `monitor()`
     */
    load(paths: string | string[]): Promise<NuLazyResult[]>;
    loadScript(path: string, options?: {
        innerContent?: string;
    }): Promise<NuLazyResult>;
    loadStyle(path: string, options?: {
        rel?: string;
        innerContent?: string;
    }): Promise<NuLazyResult>;
}
