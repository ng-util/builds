import { NuLazyService } from '@ng-util/lazy';
import { Observable } from 'rxjs';
import { NuMarkdownConfig } from './markdown.config';
export declare class NuMarkdownService {
    private lazySrv;
    private libs;
    private loading;
    private loaded;
    private notify$;
    get notify(): Observable<void>;
    constructor(config: NuMarkdownConfig, lazySrv: NuLazyService);
    load(): this;
}
