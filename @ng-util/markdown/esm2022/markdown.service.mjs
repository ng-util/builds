import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "@ng-util/lazy";
export class NuMarkdownService {
    get notify() {
        return this.notify$.asObservable();
    }
    constructor(config, lazySrv) {
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.libs = config?.libs || [
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.min.js`,
            `https://cdn.jsdelivr.net/npm/vditor/dist/index.css`,
        ];
    }
    load() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        const libs = this.libs;
        this.lazySrv.monitor(libs).subscribe(() => {
            this.loaded = true;
            this.notify$.next();
        });
        this.lazySrv.load(libs);
        return this;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMarkdownService, deps: [{ token: NU_MARKDOWN_CONFIG, optional: true }, { token: i1.NuLazyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMarkdownService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuLazyService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFvQixrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFHekUsTUFBTSxPQUFPLGlCQUFpQjtJQU01QixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQzBDLE1BQXdCLEVBQ3hELE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFWeEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFVcEMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsSUFBSSxJQUFJO1lBQzFCLHVEQUF1RDtZQUN2RCxvREFBb0Q7U0FDckQsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO2tJQXJDVSxpQkFBaUIsa0JBV04sa0JBQWtCO3NJQVg3QixpQkFBaUIsY0FESixNQUFNOzs0RkFDbkIsaUJBQWlCO2tCQUQ3QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBWTdCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVMYXp5U2VydmljZSB9IGZyb20gJ0BuZy11dGlsL2xhenknO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnVNYXJrZG93bkNvbmZpZywgTlVfTUFSS0RPV05fQ09ORklHIH0gZnJvbSAnLi9tYXJrZG93bi5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE51TWFya2Rvd25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaWJzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBsb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOVV9NQVJLRE9XTl9DT05GSUcpIGNvbmZpZzogTnVNYXJrZG93bkNvbmZpZyxcbiAgICBwcml2YXRlIGxhenlTcnY6IE51TGF6eVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMubGlicyA9IGNvbmZpZz8ubGlicyB8fCBbXG4gICAgICBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92ZGl0b3IvZGlzdC9pbmRleC5taW4uanNgLFxuICAgICAgYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdmRpdG9yL2Rpc3QvaW5kZXguY3NzYCxcbiAgICBdO1xuICB9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbGlicyA9IHRoaXMubGlicyE7XG4gICAgdGhpcy5sYXp5U3J2Lm1vbml0b3IobGlicykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQobGlicyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19