/**
 * Similar to ol' jQuery's handy $.extend() method,
 * but ONLY merges plain objects (not arrays).
 * This works _slightly_ differently - more like a
 * a recursive Object.assign(). If you want to _clone_
 * an object, pass an empty object to merge into.
 * (Pass `true` as the first argument to deep merge.)
 *
 * @example
 *
 * const deepClone = mergeObjects(true, {}, objX);
 * const deepMerge = mergeObjects(true, objA, objB, objC);
 *
 * const assignClone  = Object.assign({}, objX);  // exactly the same as shallowClone() below...
 * const shallowClone = mergeObjects(false, {}, objX);
 * const shallowMerge = mergeObjects(false, objA, objB, objC);
 *
 * @param {boolean|Object} deep_ - do a deep merge, or the first object for a shallow merge
 * @param {Object} a - first object to merge
 * @param {Object} [b] - second object to merge
 * @param {Object} [c] - more objects to merge...
 * @returns {Object} - Returns cloned/merged object
 */
export function mergeObjects(deep_ = true, a = {}, b, c){

  // To spread or not to spread... (???)
  const args = [...arguments];
  const deep = typeof args[0] === 'boolean' ? args.shift() : false;
  const target = args.shift() || {};

  const _assign = Object.assign;

  // If there are no args left, there's only one object left to merge
  if (args.length === 0) {
    // Clone into a new object if going deep
    return deep ? mergeObjects(true, {}, target) : target;
  }

  // Process the remaining object arguments
  for (let arg of args) {

    // Don't be dumb... Only pass objects as arguments
    if (!isPlainObject(arg)) {
      continue;
    }

    const keys = Object.keys(arg);
    let counter = 0;

    for (let key of keys) {

      counter += 1;

      // If the loop runs more than the number of keys...
      // ...we've likely got a problem.
      if (counter + 1 > keys.length) {
        // Bail out.
        throw Error('Something went wrong');
      }

      // Could `key` be `null` or `undefined` for an empty object?
      if (key == null) {
        console.warn('Null key');
        continue;
      }

      const val = arg[key];

      // Pass non-object values as-is
      if (!isPlainObject(val)) {
        target[key] = val;
        continue;
      }

      // Pass circular reference as-is, but prevent infinite merge.
      if (val === arg) {
        console.warn('Circular reference');
        try {
          target[key] = val;
        }
        catch (e) {
          console.error(e);
        }
        continue;
      }

      // Finally, recursively merge objects
      target[key] = mergeObjects(deep, target[key], val);
    }
  }

  return target;

}

export default mergeObjects;

// Is it a *plain* object
function isPlainObject(it){
  return Object.prototype.toString.call(it) === '[object Object]';
}
