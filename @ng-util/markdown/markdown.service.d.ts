import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NuMarkdownService {
    private readonly config;
    private readonly lazySrv;
    private libs;
    private loading;
    private loaded;
    private notify$;
    get notify(): Observable<void>;
    constructor();
    load(): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NuMarkdownService>;
}
