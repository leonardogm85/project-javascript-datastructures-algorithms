export class StackArray<T> {

  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return this.items;
  }

  toString(): string {
    return this.items.toString();
  }

}
