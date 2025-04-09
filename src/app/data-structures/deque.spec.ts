import { Deque } from "./deque";

describe('Deque', () => {
  it('starts empty', () => {
    const deque: Deque<number> = new Deque<number>();

    expect(deque.size()).toEqual(0);

    expect(deque.isEmpty()).toEqual(true);
  });

  it('add elements in the back', () => {
    const deque: Deque<number> = new Deque<number>();

    deque.addBack(1);
    expect(deque.size()).toEqual(1);

    deque.addBack(2);
    expect(deque.size()).toEqual(2);

    deque.addBack(3);
    expect(deque.size()).toEqual(3);

    deque.removeBack();
    deque.addBack(4);
    expect(deque.size()).toEqual(3);
  });

  it('add elements in the front', () => {
    const deque: Deque<number> = new Deque<number>();

    deque.addFront(1);
    expect(deque.size()).toEqual(1);

    deque.addFront(2);
    expect(deque.size()).toEqual(2);

    deque.addFront(3);
    expect(deque.size()).toEqual(3);

    deque.removeFront();
    deque.addFront(4);
    expect(deque.size()).toEqual(3);
  });

  it('remove elements from the back', () => {
    const deque: Deque<number> = new Deque<number>();

    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);

    expect(deque.removeBack()).toEqual(3);
    expect(deque.removeBack()).toEqual(2);
    expect(deque.removeBack()).toEqual(1);
    expect(deque.removeBack()).toEqual(0);
    expect(deque.removeBack()).toEqual(undefined);
  });

  it('remove elements from the front', () => {
    const deque: Deque<number> = new Deque<number>();

    deque.addFront(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);
    deque.addFront(-1);
    deque.addFront(-2);

    expect(deque.removeFront()).toEqual(-2);
    expect(deque.removeFront()).toEqual(-1);
    expect(deque.removeFront()).toEqual(0);
    expect(deque.removeFront()).toEqual(1);
    expect(deque.removeFront()).toEqual(2);
    expect(deque.removeFront()).toEqual(3);
    expect(deque.removeFront()).toEqual(undefined);
  });

  it('allows to peek at the front element in the deque without removing it', () => {
    const deque: Deque<number> = new Deque<number>();

    expect(deque.peekFront()).toEqual(undefined);

    deque.addFront(1);
    expect(deque.peekFront()).toEqual(1);

    deque.addBack(2);
    expect(deque.peekFront()).toEqual(1);

    deque.addBack(3);
    expect(deque.peekFront()).toEqual(1);

    deque.addFront(0);
    expect(deque.peekFront()).toEqual(0);

    deque.addFront(-1);
    expect(deque.peekFront()).toEqual(-1);

    deque.addFront(-2);
    expect(deque.peekFront()).toEqual(-2);
  });

  it('allows to peek at the last element in the deque without removing it', () => {
    const deque: Deque<number> = new Deque<number>();

    expect(deque.peekBack()).toEqual(undefined);

    deque.addFront(1);
    expect(deque.peekBack()).toEqual(1);
    deque.addBack(2);
    expect(deque.peekBack()).toEqual(2);
    deque.addBack(3);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(0);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(-1);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(-2);
    expect(deque.peekBack()).toEqual(3);
  });

  it('returns the correct size', () => {
    const deque: Deque<number> = new Deque<number>();

    expect(deque.size()).toEqual(0);

    deque.addFront(1);
    expect(deque.size()).toEqual(1);

    deque.addBack(2);
    expect(deque.size()).toEqual(2);

    deque.addBack(3);
    expect(deque.size()).toEqual(3);

    deque.addFront(0);
    expect(deque.size()).toEqual(4);

    deque.addFront(-1);
    expect(deque.size()).toEqual(5);

    deque.addFront(-2);
    expect(deque.size()).toEqual(6);

    deque.clear();
    expect(deque.size()).toEqual(0);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.size()).toEqual(2);

    deque.removeFront();
    deque.removeBack();
    expect(deque.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    const deque: Deque<number> = new Deque<number>();

    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    expect(deque.isEmpty()).toEqual(false);

    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.clear();
    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.removeFront();
    expect(deque.isEmpty()).toEqual(false);

    deque.removeBack();
    expect(deque.isEmpty()).toEqual(true);
  });

  it('clears the queue', () => {
    const deque: Deque<number> = new Deque<number>();

    deque.clear();
    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.clear();
    expect(deque.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    const dequeNumber: Deque<number> = new Deque<number>();

    expect(dequeNumber.toString()).toEqual('');

    dequeNumber.addFront(1);
    expect(dequeNumber.toString()).toEqual('1');

    dequeNumber.addBack(2);
    expect(dequeNumber.toString()).toEqual('1,2');

    dequeNumber.clear();
    expect(dequeNumber.toString()).toEqual('');

    const queueString: Deque<string> = new Deque<string>();

    queueString.addFront('e1');
    expect(queueString.toString()).toEqual('e1');

    queueString.addBack('e2');
    expect(queueString.toString()).toEqual('e1,e2');
  });

  it('returns toString objects', () => {
    class MyObject {
      constructor(
        private e1: number,
        private e2: number
      ) { }
      toString() {
        return `${this.e1}|${this.e2}`;
      }
    }

    const dequeMyObject: Deque<MyObject> = new Deque<MyObject>();

    expect(dequeMyObject.toString()).toEqual('');

    dequeMyObject.addFront(new MyObject(1, 2));
    expect(dequeMyObject.toString()).toEqual('1|2');

    dequeMyObject.addBack(new MyObject(3, 4));
    expect(dequeMyObject.toString()).toEqual('1|2,3|4');
  });
});
