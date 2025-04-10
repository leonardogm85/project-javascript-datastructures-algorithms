import { palindromeChecker } from './palindrome-checker';

describe('Palindrome', () => {
  it('Palindrome Checker', () => {
    expect(palindromeChecker('')).toEqual(false);
    expect(palindromeChecker('a')).toEqual(true);
    expect(palindromeChecker('aa')).toEqual(true);
    expect(palindromeChecker('aba')).toEqual(true);
    expect(palindromeChecker('ab')).toEqual(false);
    expect(palindromeChecker('kayak')).toEqual(true);
    expect(palindromeChecker('radar')).toEqual(true);
    expect(palindromeChecker('level')).toEqual(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toEqual(true);
    expect(palindromeChecker('Step on no pets')).toEqual(true);
    expect(palindromeChecker('Able was I ere I saw Elba')).toEqual(true);
  });
});
