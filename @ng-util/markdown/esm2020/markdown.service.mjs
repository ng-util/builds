import { Inject, Injectable } from '@angular/core';
import { NuLazyService } from '@ng-util/lazy';
import { Subject } from 'rxjs';
import { NU_MARKDOWN_CONFIG } from './markdown.config';
import * as i0 from "@angular/core";
import * as i1 from "@ng-util/lazy";
export class NuMarkdownService {
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
    get notify() {
        return this.notify$.asObservable();
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
}
/** @nocollapse */ /** @nocollapse */ NuMarkdownService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownService, deps: [{ token: NU_MARKDOWN_CONFIG }, { token: i1.NuLazyService }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ /** @nocollapse */ NuMarkdownService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuLazyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBb0Isa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBR3pFLE1BQU0sT0FBTyxpQkFBaUI7SUFVNUIsWUFBd0MsTUFBd0IsRUFBVSxPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBUnhGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBT3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksSUFBSTtZQUMxQix1REFBdUQ7WUFDdkQsb0RBQW9EO1NBQ3JELENBQUM7SUFDSixDQUFDO0lBVEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFTRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztvSkFsQ1UsaUJBQWlCLGtCQVVSLGtCQUFrQjt3SkFWM0IsaUJBQWlCLGNBREosTUFBTTsyRkFDbkIsaUJBQWlCO2tCQUQ3QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBV25CLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdUxhenlTZXJ2aWNlIH0gZnJvbSAnQG5nLXV0aWwvbGF6eSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29uZmlnLCBOVV9NQVJLRE9XTl9DT05GSUcgfSBmcm9tICcuL21hcmtkb3duLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93blNlcnZpY2Uge1xuICBwcml2YXRlIGxpYnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5VX01BUktET1dOX0NPTkZJRykgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLCBwcml2YXRlIGxhenlTcnY6IE51TGF6eVNlcnZpY2UpIHtcbiAgICB0aGlzLmxpYnMgPSBjb25maWc/LmxpYnMgfHwgW1xuICAgICAgYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdmRpdG9yL2Rpc3QvaW5kZXgubWluLmpzYCxcbiAgICAgIGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3ZkaXRvci9kaXN0L2luZGV4LmNzc2AsXG4gICAgXTtcbiAgfVxuXG4gIGxvYWQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgaWYgKHRoaXMubG9hZGVkKSB7XG4gICAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGxpYnMgPSB0aGlzLmxpYnMhO1xuICAgIHRoaXMubGF6eVNydi5tb25pdG9yKGxpYnMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgIH0pO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKGxpYnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==