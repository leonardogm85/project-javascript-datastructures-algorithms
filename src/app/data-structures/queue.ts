export class Queue<T> {

  private count: number = 0;
  private lowestCount: number = 0;
  private items: { [key: number]: T } = {};

  enqueue(element: T): void {
    this.items[this.count++] = element;
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result: T = this.items[this.lowestCount];

    delete this.items[this.lowestCount++];

    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString: string = `${this.items[this.lowestCount]}`;

    for (let i: number = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }

}
