/**
 * @fileoverview added by tsickle
 * Generated from: convert/convert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, D
 * @param {?} name
 * @param {?} fallback
 * @param {?} defaultValue
 * @return {?}
 */
function propDecoratorFactory(name, fallback, defaultValue) {
    /**
     * @param {?} target
     * @param {?} propName
     * @param {?=} originalDescriptor
     * @return {?}
     */
    function propDecorator(target, propName, originalDescriptor) {
        /** @type {?} */
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
        });
        return {
            /**
             * @return {?}
             */
            get() {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value, defaultValue));
                }
                this[privatePropName] = fallback(value, defaultValue);
            },
        };
    }
    return propDecorator;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
export function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * \@Input() InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} defaultValue
 * @return {?}
 */
export function InputBoolean(defaultValue = false) {
    return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
export function toNumber(value, fallbackValue = 0) {
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} defaultValue
 * @return {?}
 */
export function InputNumber(defaultValue = 0) {
    return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy11dGlsL3V0aWwvIiwic291cmNlcyI6WyJjb252ZXJ0L2NvbnZlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0IsQ0FDM0IsSUFBWSxFQUNaLFFBQXNDLEVBQ3RDLFlBQWlCOzs7Ozs7O0lBRWpCLFNBQVMsYUFBYSxDQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLGtCQUFpRDs7Y0FDL0YsZUFBZSxHQUFHLE9BQU8sUUFBUSxFQUFFO1FBRXpDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsZUFBZSwrQ0FBK0MsSUFBSSxhQUFhLENBQUMsQ0FBQztTQUM1RztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU87Ozs7WUFDTCxHQUFHO2dCQUNELE9BQU8sa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwSCxDQUFDOzs7OztZQUNELEdBQUcsQ0FBQyxLQUFRO2dCQUNWLElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDeEQsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFVLEVBQUUsaUJBQWlDLEtBQUs7SUFDMUUsT0FBTyxjQUFjLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFDOUcsQ0FBQzs7Ozs7Ozs7OztBQVVELE1BQU0sVUFBVSxZQUFZLENBQUMsZUFBK0IsS0FBSztJQUMvRCxPQUFPLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdEUsQ0FBQzs7Ozs7O0FBSUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFVLEVBQUUsZ0JBQXdCLENBQUM7SUFDNUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUNuRyxDQUFDOzs7Ozs7Ozs7O0FBVUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxlQUE4QixDQUFDO0lBQ3pELE9BQU8sb0JBQW9CLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNyRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJvcERlY29yYXRvckZhY3Rvcnk8VCwgRD4oXG4gIG5hbWU6IHN0cmluZyxcbiAgZmFsbGJhY2s6ICh2OiBULCBkZWZhdWx0VmFsdWU6IEQpID0+IEQsXG4gIGRlZmF1bHRWYWx1ZTogYW55LFxuKTogKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB2b2lkIHtcbiAgZnVuY3Rpb24gcHJvcERlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IHN0cmluZywgb3JpZ2luYWxEZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pik6IGFueSB7XG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke3Byb3BOYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5ICR7bmFtZX0gZGVjb3JhdG9yLmApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykoZmFsbGJhY2sodmFsdWUsIGRlZmF1bHRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IGZhbGxiYWNrKHZhbHVlLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSwgYWxsb3dVbmRlZmluZWQ6IGJvb2xlYW4gfCBudWxsID0gZmFsc2UpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqXG4gKiBgYGB0c1xuICogQElucHV0KCkgSW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICogQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbihkZWZhdWx0VmFsdWU6IGJvb2xlYW4gfCBudWxsID0gZmFsc2UpOiBhbnkge1xuICByZXR1cm4gcHJvcERlY29yYXRvckZhY3RvcnkoJ0lucHV0TnVtYmVyJywgdG9Cb29sZWFuLCBkZWZhdWx0VmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSk6IG51bWJlcjtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogYW55LCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkgPyBOdW1iZXIodmFsdWUpIDogZmFsbGJhY2tWYWx1ZTtcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXG4gKlxuICogYGBgdHNcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpc2libGU6IG51bWJlciA9IDE7XG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgdmlzaWJsZTogbnVtYmVyID0gMjtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoZGVmYXVsdFZhbHVlOiBudW1iZXIgfCBudWxsID0gMCk6IGFueSB7XG4gIHJldHVybiBwcm9wRGVjb3JhdG9yRmFjdG9yeSgnSW5wdXROdW1iZXInLCB0b051bWJlciwgZGVmYXVsdFZhbHVlKTtcbn1cbiJdfQ==