/**
 * Not a _test_ but an example of using the function with example output.
 * Items are exported to be used in future unit tests.
 */
import resolveClasses from './resolveClasses.js';

export const testValues = [
  'FOO',
  'foo',
  ['bar'],
  'baz',
  ['BAR BAZ'],
  ['bar', 'foo'],
  'foo bar baz',
  ['baz bar foo'],
  ['bar', 'foo', ['baz', 'bar']]
];

export const expected = `FOO foo bar baz BAR BAZ`;
export const result = resolveClasses(testValues);
// --> 'FOO foo bar baz BAR BAZ'

console.log(`expect '${expected}'`);
console.log(`result '${result}'`);
console.log('PASS? ', expected === result);
