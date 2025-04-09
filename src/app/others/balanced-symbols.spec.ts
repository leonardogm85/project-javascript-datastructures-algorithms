import { parenthesesChecker } from '../others/balanced-symbols';

describe('Balanced Symbols', () => {

  it('empty to be falsy', () => {
    expect(parenthesesChecker('')).toEqual(true);
  });

  it('{ to be falsy', () => {
    expect(parenthesesChecker('{')).toEqual(false);
  });

  it('} to be falsy', () => {
    expect(parenthesesChecker('}')).toEqual(false);
  });

  it('11 to be falsy', () => {
    expect(parenthesesChecker('11')).toEqual(false);
  });

  it('{11 to be falsy', () => {
    expect(parenthesesChecker('{11')).toEqual(false);
  });

  it('{([1])} to be falsy', () => {
    expect(parenthesesChecker('{([1])}')).toEqual(false);
  });

  it('{([])} to be truthy', () => {
    expect(parenthesesChecker('{([])}')).toEqual(true);
  });

  it('{{([][])}()} to be truthy', () => {
    expect(parenthesesChecker('{{([][])}()}')).toEqual(true);
  });

  it('[{()] to be falsy', () => {
    expect(parenthesesChecker('[{()]')).toEqual(false);
  });
});
