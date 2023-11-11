import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
export const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');
export function provideNuMonacoEditorConfig(config) {
    return makeEnvironmentProviders([{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9tb25hY28tZWRpdG9yL21vbmFjby1lZGl0b3IuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBd0IsY0FBYyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLElBQUksY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFckYsTUFBTSxVQUFVLDJCQUEyQixDQUFDLE1BQTZCO0lBQ3ZFLE9BQU8sd0JBQXdCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnZpcm9ubWVudFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTlVfTU9OQUNPX0VESVRPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ05VX01PTkFDT19FRElUT1JfQ09ORklHJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTnVNb25hY29FZGl0b3JDb25maWcoY29uZmlnPzogTnVNb25hY29FZGl0b3JDb25maWcpOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoW3sgcHJvdmlkZTogTlVfTU9OQUNPX0VESVRPUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE51TW9uYWNvRWRpdG9yQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBiYXNlIFVSTCB0byBtb25hY28gZWRpdG9yIGxpYnJhcnkgYXNzZXRzIHZpYSBBTUQgKFJlcXVpcmVKUyksIERlZmF1bHQ6IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3IvbWluYFxuICAgKiBZb3UgY2FuIHVzaW5nIGxvY2FsIHBhdGgsIGUuZy46IGBhc3NldHMvbW9uYWNvLWVkaXRvci9taW5gLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyB3aGVuIGNyZWF0aW5nIGVkaXRvcnNcbiAgICovXG4gIGRlZmF1bHRPcHRpb25zPzogbW9uYWNvLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnM7XG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgYWZ0ZXIgdGhlIGZpcnN0IGxvYWRpbmcgb2YgdGhlIG1vbmFjbyBlZGl0b3IgbGlicmFyeSBpcyBjb21wbGV0ZWQsIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGV4dGVuZCBtb25hY28gZWRpdG9yIGZ1bmN0aW9uYWxpdGllcy5cbiAgICogLSBAcGFyYW0gYF9tb25hY29gIGVxdWFyIHRvIGB3aW5kb3cubW9uYWNvYFxuICAgKi9cbiAgbW9uYWNvTG9hZD86IChfbW9uYWNvOiBhbnkpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUaGUgZXZlbnQgYmVmb3JlIHRoZSBmaXJzdCBwcmVsb2FkIG9mIHRoZSBtb25hY28gZWRpdG9yIGxpYnJhcnkgaXMgY29tcGxldGVkLCB1c2UgdGhpcyBmdW5jdGlvbiB0byBzZXQgbmxzIGF2YWlsYWJsZUxhbmd1YWdlcy5cbiAgICovXG4gIG1vbmFjb1ByZUxvYWQ/OiAoKSA9PiB2b2lkO1xuICAvKipcbiAgICogVHJpZ2dlciBhdXRvbWF0aWMgZm9ybWF0IGRlbGF5IHRpbWUsIGRlZmF1bHQ6IGAxMDBgXG4gICAqL1xuICBhdXRvRm9ybWF0VGltZT86IG51bWJlcjtcbn1cbiJdfQ==