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
    get change(): Observable<NuLazyResult[]>;
    clear(): void;
    load(paths: string | string[]): Promise<NuLazyResult[]>;
    loadScript(path: string, options?: {
        innerContent?: string;
    }): Promise<NuLazyResult>;
    loadStyle(path: string, options?: {
        rel?: string;
        innerContent?: string;
    }): Promise<NuLazyResult>;
}
