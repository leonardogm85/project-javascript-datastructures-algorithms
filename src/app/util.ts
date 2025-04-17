export type IEqualsFunction<T> = (a: T, b: T) => boolean;

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0
}

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}
