import { Deque } from '../data-structures/deque';

export function palindromeChecker(aString: string): boolean {
  if (!aString) {
    return false;
  }

  const deque: Deque<string> = new Deque<string>();

  const lowerString: string = aString.toLocaleLowerCase().split(' ').join('');

  for (let i: number = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) {
      return false;
    }
  }

  return true;
}
