import mergeObjects from './mergeObjects.js';

const ObjA = {
  a: 1,
  b: 1,
  c: 1
};

const ObjB = {
  A: ObjA,
  b: 2,
  c: 2
};

const ObjC = {
  c: 3
};

const ObjD = {
  A: ObjA,
  B: ObjB,
  d: 4,
  D: {}
};

// handle circular references?
ObjD.D = ObjD;

console.log('==================================================');
console.log('Test for mergeObjects()');
console.log('--------------------------------------------------');

const expectedOutput = JSON.stringify({ a: 1, b: 2, c: 3, A: { a: 1, b: 1, c: 1 } });
console.log('Expected output: ', expectedOutput);

const actualOutput = mergeObjects(true, {}, ObjA, ObjB, ObjC);
const actualOutputStringified = (() => {
  try {
    return JSON.stringify(actualOutput);
  }
  catch (e) {
    console.warn(e);
    return `Error: ${e}`;
  }
})();
console.log('Actual output: ', actualOutputStringified);

console.log('Equal output: ', expectedOutput === actualOutputStringified);

const mergedObjA = mergeObjects(true, ObjA, ObjB);
console.log('Retains `ObjA` reference: ', mergedObjA === ObjA);

const clonedObjA = mergeObjects(true, {}, ObjA, ObjB);
console.log('Creates *new* Object: ', clonedObjA !== ObjA);

const circularDeep = mergeObjects(true, {}, ObjA, ObjB, ObjC, ObjD, {});
console.log('Circular?', (() => {
  try {
    JSON.stringify(circularDeep)
  }
  catch (e) {
    // return e;
    console.error(e.toString().split(/\\n+|-->/)[0].trim());
    return 'Could not stringify.'
  }
})());

const circular = mergeObjects(false, {}, ObjA, ObjB, ObjC, ObjD, {});
console.log('Circular, but not deep.', circular);

console.log('==================================================');
