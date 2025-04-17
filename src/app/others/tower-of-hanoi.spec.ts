import { ITowerOfHanoiModel } from '../models/tower-of-hanoi-model';
import { towerOfHanoiRecursive, towerOfHanoiStack } from './tower-of-hanoi';

describe('Tower of Hanoi', () => {
  it('Hanoi with Recursive', () => {
    for (let i: number = 0; i < 10; i++) {
      const result: string[][] = towerOfHanoiRecursive(i, 'a', 'b', 'c');
      expect(result.length).toEqual(2 ** i - 1);
    }
  });

  it('Hanoi with Stack', () => {
    for (let i: number = 0; i < 10; i++) {
      const result: ITowerOfHanoiModel[] = towerOfHanoiStack(i);
      expect(result.length).toEqual(2 ** i - 1);
    }
  });
});
