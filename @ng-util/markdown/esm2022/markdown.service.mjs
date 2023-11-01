import { Inject, Injectable, Optional } from '@angular/core';
import { NuLazyService } from '@ng-util/lazy';
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
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuMarkdownService, deps: [{ token: NU_MARKDOWN_CONFIG, optional: true }, { token: i1.NuLazyService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuMarkdownService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.1", ngImport: i0, type: NuMarkdownService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NU_MARKDOWN_CONFIG]
                }] }, { type: i1.NuLazyService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL21hcmtkb3duL21hcmtkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUd6RSxNQUFNLE9BQU8saUJBQWlCO0lBTTVCLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsWUFDMEMsTUFBd0IsRUFDeEQsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQVZ4QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVVwQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRSxJQUFJLElBQUk7WUFDMUIsdURBQXVEO1lBQ3ZELG9EQUFvRDtTQUNyRCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7c0lBckNVLGlCQUFpQixrQkFXTixrQkFBa0I7MElBWDdCLGlCQUFpQixjQURKLE1BQU07O2dHQUNuQixpQkFBaUI7a0JBRDdCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFZN0IsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdUxhenlTZXJ2aWNlIH0gZnJvbSAnQG5nLXV0aWwvbGF6eSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOdU1hcmtkb3duQ29uZmlnLCBOVV9NQVJLRE9XTl9DT05GSUcgfSBmcm9tICcuL21hcmtkb3duLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTnVNYXJrZG93blNlcnZpY2Uge1xuICBwcml2YXRlIGxpYnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5VX01BUktET1dOX0NPTkZJRykgY29uZmlnOiBOdU1hcmtkb3duQ29uZmlnLFxuICAgIHByaXZhdGUgbGF6eVNydjogTnVMYXp5U2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5saWJzID0gY29uZmlnPy5saWJzIHx8IFtcbiAgICAgIGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3ZkaXRvci9kaXN0L2luZGV4Lm1pbi5qc2AsXG4gICAgICBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS92ZGl0b3IvZGlzdC9pbmRleC5jc3NgLFxuICAgIF07XG4gIH1cblxuICBsb2FkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRlZCkge1xuICAgICAgICB0aGlzLm5vdGlmeSQubmV4dCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBsaWJzID0gdGhpcy5saWJzITtcbiAgICB0aGlzLmxhenlTcnYubW9uaXRvcihsaWJzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmxhenlTcnYubG9hZChsaWJzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=