/**
 * @deprecated use `booleanAttribute` instead
 */
declare function toBoolean(value: any, allowUndefined?: boolean | null): boolean | undefined;
/**
 * @deprecated use `booleanAttribute` instead
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * @Input() InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
declare function InputBoolean(defaultValue?: boolean | null): any;
/**
 * @deprecated use `numberAttribute` instead
 */
declare function toNumber(value: any): number;
declare function toNumber<D>(value: any, fallback: D): number | D;
/**
 * @deprecated use `numberAttribute` instead
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
declare function InputNumber(defaultValue?: number | null): any;

export { InputBoolean, InputNumber, toBoolean, toNumber };
