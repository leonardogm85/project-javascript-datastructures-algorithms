import { LinkedList } from './linked-list';
import { defaultEquals } from "../util";

describe('LinkedList', () => {
  function pushesElements(list: LinkedList<number>, min: number, max: number) {
    for (let i: number = min; i <= max; i++) {
      list.push(i);
    }
  }

  function verifyList(list: LinkedList<number>, min: number, max: number) {
    let current: number | undefined = list.getHead();

    for (let i: number = min; i <= max; i++) {
      expect(current).toBeDefined();
      expect(current).toEqual(i);

      current = list.getElementAt(i + 1 - min);

      if (i < max) {
        expect(current).toBeDefined();
        expect(current).toEqual(i + 1);
      } else {
        expect(current).toBeUndefined();
      }
    }
  }

  it('starts empty', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    expect(list.size()).toEqual(0);
    expect(list.isEmpty()).toBeTrue();
    expect(list.getHead()).toBeUndefined();
  });

  it('pushes elements', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;
    pushesElements(list, min, max);
    verifyList(list, min, max);
  });

  it('returns element at specific index: invalid position', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    expect(list.getElementAt(3)).toBeUndefined();
  });

  it('returns element at specific index: valid position', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    let element: number | undefined;

    for (let i: number = min; i <= max; i++) {
      element = list.getElementAt(i - 1);
      expect(element).toBeDefined();
      expect(element).toEqual(i);
    }

    verifyList(list, min, max);
  });

  it('inserts elements first position empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 1;
    expect(list.insertAt(1, 0)).toBeTrue();
    verifyList(list, min, max);
  });

  it('inserts elements first position not empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 2;
    expect(list.insertAt(max, 0)).toBeTrue();
    expect(list.insertAt(min, 0)).toBeTrue();
    verifyList(list, min, max);
  });

  it('inserts elements invalid position empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    expect(list.insertAt(1, 1)).toBeFalse();
  });

  it('inserts elements invalid position not empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 1;
    expect(list.insertAt(1, 0)).toBeTrue();
    expect(list.insertAt(1, 2)).toBeFalse();
    verifyList(list, min, max);
  });

  it('inserts elements in the middle of list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;
    expect(list.insertAt(3, 0)).toBeTrue();
    expect(list.insertAt(1, 0)).toBeTrue();
    expect(list.insertAt(2, 1)).toBeTrue();
    verifyList(list, min, max);
  });

  it('inserts elements at the end of list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 5;

    for (let i: number = min; i <= max; i++) {
      expect(list.insertAt(i, i - 1)).toBeTrue();
    }

    verifyList(list, min, max);
  });

  it('returns index of elements', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    for (let i: number = min; i <= max; i++) {
      expect(list.indexOf(i)).toEqual(i - 1);
    }

    expect(list.indexOf(max + 2)).toEqual(-1);

    verifyList(list, min, max);
  });

  it('removes valid elements', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    let element: number | undefined;

    for (let i: number = min; i <= max; i++) {
      element = list.remove(i);
      expect(element).toBeDefined();
      expect(element).toEqual(i);
    }
  });

  it('removes invalid elements', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    let element: number | undefined;

    for (let i: number = max + 2; i <= max + 4; i++) {
      element = list.remove(i);
      expect(element).toBeUndefined();
    }

    verifyList(list, min, max);
  });

  it('removes element invalid position empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    let element: number | undefined;

    for (let i: number = min; i <= max; i++) {
      element = list.removeAt(i - 1);
      expect(element).toBeUndefined();
    }
  });

  it('removes element invalid position not empty list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    let element: number | undefined;

    for (let i: number = max + 2; i <= max + 4; i++) {
      element = list.removeAt(i);
      expect(element).toBeUndefined();
    }

    verifyList(list, min, max);
  });

  it('removes first element list single element', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const element: number = 1;

    list.push(element);

    const removed: number = list.removeAt(0)!;
    expect(removed).toBeDefined();
    expect(removed).toEqual(element);

    expect(list.size()).toEqual(0);
    expect(list.isEmpty()).toBeTrue();
    expect(list.getHead()).toBeUndefined();
  });

  it('removes first element list multiple elements', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    let min: number = 1;
    let max: number = 3;

    pushesElements(list, min, max);

    const removed: number = list.removeAt(0)!;
    expect(removed).toBeDefined();
    expect(removed).toEqual(min);

    min = 2;

    verifyList(list, min, max);
  });

  it('removes element from middle of list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    pushesElements(list, min, max);

    let current: number | undefined;

    current = list.removeAt(1);
    expect(current).toBeDefined();
    expect(current).toEqual(2);

    current = list.getElementAt(0);
    expect(current).toBeDefined();
    expect(current).toEqual(1);

    current = list.getElementAt(1);
    expect(current).toBeDefined();
    expect(current).toEqual(3);

    current = list.getElementAt(2);
    expect(current).toBeUndefined();
  });

  it('removes element from end of list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    let min: number = 1;
    let max: number = 3;

    let element: number | undefined;

    pushesElements(list, min, max);

    let currentMin: number = min;
    let currentMax: number = min;

    for (let i: number = max; i >= min; i--) {
      element = list.removeAt(i - 1);
      expect(element).toBeDefined();
      expect(element).toEqual(i);
      currentMax--;
      currentMin++;
      verifyList(list, currentMin, currentMax);
    }

    verifyList(list, currentMin, currentMax);
  });

  it('returns the head of the list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    expect(list.getHead()).toBeUndefined();

    let head: number | undefined = 1;

    list.push(1);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    list.push(2);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    list.push(3);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    head = 0;

    list.insertAt(0, 0);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    list.insertAt(4, 4);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    list.removeAt(4);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    head = 1;

    list.removeAt(0);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    list.removeAt(1);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    head = 3;

    list.removeAt(0);
    expect(list.getHead()).toBeDefined();
    expect(list.getHead()).toEqual(head);

    head = undefined;

    list.removeAt(0);
    expect(list.getHead()).toBeUndefined();
    expect(list.getHead()).toEqual(head);
    expect(list.size()).toEqual(0);
    expect(list.isEmpty()).toBeTrue();
  });

  it('returns the correct size', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    expect(list.size()).toEqual(0);

    for (let i: number = min; i <= max; i++) {
      list.push(i);
      expect(list.size()).toEqual(i);
    }

    for (let i: number = min; i <= max; i++) {
      list.remove(i);
      expect(list.size()).toEqual(max - i);
    }

    expect(list.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    expect(list.isEmpty()).toBeTrue();

    for (let i: number = min; i <= max; i++) {
      list.push(i);
      expect(list.isEmpty()).toBeFalse();
    }

    for (let i: number = min; i < max; i++) {
      list.remove(i);
      expect(list.isEmpty()).toBeFalse();
    }

    list.remove(max);
    expect(list.isEmpty()).toBeTrue();

    pushesElements(list, min, max);
    expect(list.isEmpty()).toBeFalse();

    list.clear();
    expect(list.isEmpty()).toBeTrue();
  });

  it('clears the list', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);
    const min: number = 1;
    const max: number = 3;

    expect(list.size()).toEqual(0);

    list.clear();
    expect(list.size()).toEqual(0);

    pushesElements(list, min, max);

    expect(list.size()).toBeGreaterThan(0);

    list.clear();
    expect(list.size()).toEqual(0);
  });

  it('returns toString primitive types', () => {
    const list: LinkedList<number> = new LinkedList<number>(defaultEquals);

    expect(list.toString()).toEqual('');

    list.push(1);
    expect(list.toString()).toEqual('1');

    list.push(2);
    expect(list.toString()).toEqual('1,2');

    list.clear();
    expect(list.toString()).toEqual('');
  });

  it('returns toString primitive types: string', () => {
    const list: LinkedList<string> = new LinkedList<string>(defaultEquals);

    list.push('e1');
    expect(list.toString()).toEqual('e1');

    list.push('e2');
    expect(list.toString()).toEqual('e1,e2');
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

    const list: LinkedList<MyObject> = new LinkedList<MyObject>();

    expect(list.toString()).toEqual('');

    list.push(new MyObject(1, 2));
    expect(list.toString()).toEqual('1|2');

    list.push(new MyObject(3, 4));
    expect(list.toString()).toEqual('1|2,3|4');
  });
});
