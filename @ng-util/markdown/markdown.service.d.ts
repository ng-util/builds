import { NuLazyService } from '@ng-util/lazy';
import { Observable } from 'rxjs';
import { NuMarkdownConfig } from './markdown.config';
import * as i0 from "@angular/core";
export declare class NuMarkdownService {
    private lazySrv;
    private libs;
    private loading;
    private loaded;
    private notify$;
    get notify(): Observable<void>;
    constructor(config: NuMarkdownConfig, lazySrv: NuLazyService);
    load(): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<NuMarkdownService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NuMarkdownService>;
}
