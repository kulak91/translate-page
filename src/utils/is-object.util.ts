export const isObject = (value: unknown): value is Object => Object.prototype.toString.call(value) === '[object Object]';

