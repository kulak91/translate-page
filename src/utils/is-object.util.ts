export const isObject = (value: unknown): boolean => Object.prototype.toString.call(value) === '[object Object]';

