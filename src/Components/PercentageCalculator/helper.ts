/**
 * Returns mod value of a value
 */
export const modValue = (a:number) => a < 0 ? a * (-1) : a;

/**
 * Returns difference between two values and difference in mod format
 */
export const modDiff = (a: number, b: number) => modValue(a-b);
