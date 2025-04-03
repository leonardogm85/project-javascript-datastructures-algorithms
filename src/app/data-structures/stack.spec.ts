import { Stack } from "./stack";

describe('Stack', () => {
  it('starts empty', () => {
    const stack: Stack<number> = new Stack<number>();

    expect(stack.size()).toEqual(0);

    expect(stack.isEmpty()).toEqual(true);
  });

  it('pushes elements', () => {
    const stack: Stack<number> = new Stack<number>();

    stack.push(1);
    expect(stack.size()).toEqual(1);

    stack.push(2);
    expect(stack.size()).toEqual(2);

    stack.push(3);
    expect(stack.size()).toEqual(3);

    expect(stack.isEmpty()).toEqual(false);
  });

  it('pops elements', () => {
    const stack: Stack<number> = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  it('implements LIFO logic', () => {
    const stack: Stack<number> = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  it('allows to peek at the top element in he stack without popping it', () => {
    const stack: Stack<number> = new Stack<number>();

    expect(stack.peek()).toEqual(undefined);

    stack.push(1);
    expect(stack.peek()).toEqual(1);

    stack.push(2);
    expect(stack.peek()).toEqual(2);

    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  it('returns the correct size', () => {
    const stack: Stack<number> = new Stack<number>();

    expect(stack.size()).toEqual(0);

    stack.push(1);
    expect(stack.size()).toEqual(1);

    stack.push(2);
    expect(stack.size()).toEqual(2);

    stack.push(3);
    expect(stack.size()).toEqual(3);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.size()).toEqual(2);

    stack.pop();
    expect(stack.size()).toEqual(1);

    stack.pop();
    expect(stack.size()).toEqual(0);

    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    const stack: Stack<number> = new Stack<number>();

    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);

    stack.push(2);
    expect(stack.isEmpty()).toEqual(false);

    stack.push(3);
    expect(stack.isEmpty()).toEqual(false);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).toEqual(false);

    stack.pop();
    expect(stack.isEmpty()).toEqual(false);

    stack.pop();
    expect(stack.isEmpty()).toEqual(true);

    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('clears the stack', () => {
    const stack: Stack<number> = new Stack<number>();

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    const stackNumber: Stack<number> = new Stack<number>();

    expect(stackNumber.toString()).toEqual('');

    stackNumber.push(1);
    expect(stackNumber.toString()).toEqual('1');

    stackNumber.push(2);
    expect(stackNumber.toString()).toEqual('1,2');

    stackNumber.clear();
    expect(stackNumber.toString()).toEqual('');

    const stackString: Stack<string> = new Stack<string>();

    stackString.push('e1');
    expect(stackString.toString()).toEqual('e1');

    stackString.push('e2');
    expect(stackString.toString()).toEqual('e1,e2');
  });

  it('returns toString objects', () => {
    class MyObject {
      constructor(
        private e1: any,
        private e2: any
      ) { }
      toString() {
        return `${this.e1}|${this.e2}`;
      }
    }

    const stackMyObject: Stack<MyObject> = new Stack<MyObject>();

    expect(stackMyObject.toString()).toEqual('');

    stackMyObject.push(new MyObject(1, 2));
    expect(stackMyObject.toString()).toEqual('1|2');

    stackMyObject.push(new MyObject(3, 4));
    expect(stackMyObject.toString()).toEqual('1|2,3|4');
  });
});
