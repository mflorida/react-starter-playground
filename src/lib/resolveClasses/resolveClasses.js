/**
 * Combine all passed arguments as a string of de-duped space-separated values
 * @param {string|Array<string>} classNames - className string or array of Strings
 * @returns {string}
 * TODO: How can case-sensitivity be handled without mangling input strings?
 *       Would `[].reduce` need to be used with a case-insensitive comparison? 🤔
 */
export function resolveClasses(...classNames) {
  // Create a single space-separated string from flattened array of all passed arguments.
  // This allows an arbitrary number of arguments as either strings or string arrays.
  const allClasses = classNames.flat(Infinity).join(' ').split(/\s+/);

  // Split the `allClasses` string and create a Set of unique values
  // (An element's `className` can only contain space-separated unique values)
  const classNameSet = new Set(allClasses);

  // Spread the Set to an Array and Join with a single space.
  // Then trim to output a cleaned-up className string.
  return [...classNameSet].sort().join(' ').trim();
}

export default resolveClasses;

function resolveClassesToo(...classes) {
  return [...(new Set(classes.flat(Infinity).join(' ').split(/\s+/)))].sort().join(' ');
}

console.log(resolveClasses('foo', '  ', '   bogus', ['bar', 'baz', 1, 1, 2, 'x', ['y', ['z']]], 'x', ['y', 'z', [1, 2, 3]]), ' ')
