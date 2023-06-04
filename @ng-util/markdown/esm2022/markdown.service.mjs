import { Inject, Injectable } from '@angular/core';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "@ng-util/lazy";
class NuMarkdownService {
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownService, deps: [{ token: NU_MARKDOWN_CONFIG }, { token: i1.NuLazyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownService, providedIn: 'root' }); }
}
export { NuMarkdownService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuLazyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBRXpFLE1BQ2EsaUJBQWlCO0lBTTVCLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFBd0MsTUFBd0IsRUFBVSxPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBUnhGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBT3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksSUFBSTtZQUMxQix1REFBdUQ7WUFDdkQsb0RBQW9EO1NBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztpSUFsQ1UsaUJBQWlCLGtCQVVSLGtCQUFrQjtxSUFWM0IsaUJBQWlCLGNBREosTUFBTTs7U0FDbkIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFXbkIsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE51TGF6eVNlcnZpY2UgfSBmcm9tICdAbmctdXRpbC9sYXp5JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE51TWFya2Rvd25Db25maWcsIE5VX01BUktET1dOX0NPTkZJRyB9IGZyb20gJy4vbWFya2Rvd24uY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOdU1hcmtkb3duU2VydmljZSB7XG4gIHByaXZhdGUgbGliczogc3RyaW5nW107XG4gIHByaXZhdGUgbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGxvYWRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlVfTUFSS0RPV05fQ09ORklHKSBjb25maWc6IE51TWFya2Rvd25Db25maWcsIHByaXZhdGUgbGF6eVNydjogTnVMYXp5U2VydmljZSkge1xuICAgIHRoaXMubGlicyA9IGNvbmZpZz8ubGlicyB8fCBbXG4gICAgICBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92ZGl0b3IvZGlzdC9pbmRleC5taW4uanNgLFxuICAgICAgYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdmRpdG9yL2Rpc3QvaW5kZXguY3NzYCxcbiAgICBdO1xuICB9XG5cbiAgbG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbGlicyA9IHRoaXMubGlicyE7XG4gICAgdGhpcy5sYXp5U3J2Lm1vbml0b3IobGlicykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQobGlicyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19