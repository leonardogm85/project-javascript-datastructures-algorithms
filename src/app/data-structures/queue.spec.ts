import { Queue } from '../data-structures/queue';

describe('Queue', () => {
  it('starts empty', () => {
    const queue: Queue<number> = new Queue<number>();

    expect(queue.size()).toEqual(0);

    expect(queue.isEmpty()).toEqual(true);
  });

  it('enqueues elements', () => {
    const queue: Queue<number> = new Queue<number>();

    queue.enqueue(1);
    expect(queue.size()).toEqual(1);

    queue.enqueue(2);
    expect(queue.size()).toEqual(2);

    queue.enqueue(3);
    expect(queue.size()).toEqual(3);

    expect(queue.isEmpty()).toEqual(false);
  });

  it('dequeue elements', () => {
    const queue: Queue<number> = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
  });

  it('implements FIFO logic', () => {
    const queue: Queue<number> = new Queue<number>();

    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);

    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);

    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
  });

  it('allows to peek at the front element in the queue without dequeuing it', () => {
    const queue: Queue<number> = new Queue<number>();

    expect(queue.peek()).toEqual(undefined);

    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);

    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);

    queue.dequeue();
    expect(queue.peek()).toEqual(2);
  });

  it('returns the correct size', () => {
    const queue: Queue<number> = new Queue<number>();

    expect(queue.size()).toEqual(0);

    queue.enqueue(1);
    expect(queue.size()).toEqual(1);

    queue.enqueue(2);
    expect(queue.size()).toEqual(2);

    queue.enqueue(3);
    expect(queue.size()).toEqual(3);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toEqual(3);

    queue.dequeue();
    expect(queue.size()).toEqual(2);

    queue.dequeue();
    expect(queue.size()).toEqual(1);

    queue.dequeue();
    expect(queue.size()).toEqual(0);

    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    const queue: Queue<number> = new Queue<number>();

    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);

    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);

    queue.enqueue(3);
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toEqual(false);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('clears the queue', () => {
    const queue: Queue<number> = new Queue<number>();

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    const queueNumber: Queue<number> = new Queue<number>();

    expect(queueNumber.toString()).toEqual('');

    queueNumber.enqueue(1);
    expect(queueNumber.toString()).toEqual('1');

    queueNumber.enqueue(2);
    expect(queueNumber.toString()).toEqual('1,2');

    queueNumber.clear();
    expect(queueNumber.toString()).toEqual('');

    const queueString: Queue<string> = new Queue<string>();

    queueString.enqueue('e1');
    expect(queueString.toString()).toEqual('e1');

    queueString.enqueue('e2');
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

    const queueMyObject: Queue<MyObject> = new Queue<MyObject>();

    expect(queueMyObject.toString()).toEqual('');

    queueMyObject.enqueue(new MyObject(1, 2));
    expect(queueMyObject.toString()).toEqual('1|2');

    queueMyObject.enqueue(new MyObject(3, 4));
    expect(queueMyObject.toString()).toEqual('1|2,3|4');
  });
});
