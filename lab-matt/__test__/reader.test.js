'use strict';

const fp = require('../lib/fp.js');

describe('fp.js', () => {
  // ---------------------------------------------
  //  fp.map
  // ---------------------------------------------
  describe('fp.map', () => {
    const multiplyByTwo = function(currentElement) {
      if (typeof(currentElement) !== 'number') throw new TypeError('array can only include numbers');
      return currentElement * 2;
    };

    test('multiply by two - [0, 1, 2] => [0, 2, 4]', () => {
      expect(fp.map(multiplyByTwo, [0, 1, 2])).toEqual([0, 2, 4]);
    });

    test('multiply by two - empty array returns an empty array', () => {
      expect(fp.map(multiplyByTwo, [])).toEqual([]);
    });

    test('multiply by two - if any element is not a number will throw an error', () => {
      expect(() => {
        fp.map(multiplyByTwo, [1, 4, null]);
      }).toThrow();
    });
  });

  // ---------------------------------------------
  //  fp.filter
  // ---------------------------------------------
  describe('fp.filter - (returns previous array with only the words that are longer than 5 letters)', () => {
    const words = ['foobar', 'truthy', 'falsy', 'true', 'one'];
    const words2 = ['random', 'large', 'orange', 'banana', 'vehicle'];
    const numbers = [34, 23, 1235432, 268234, 372];
    const numbers2 = [50, 40, 30, 60];
    const filterWordsOverFive = function(currentElement) {
      return currentElement.length > 5;
    };
    const filterNumbersOverFifty = function(currentElement) {
      return currentElement > 50;
    };

    test(`words over length of five - ['foobar', 'truthy', 'falsy', 'true', 'one'] => ['foobar', 'truthy']`, () => {
      expect(fp.filter(filterWordsOverFive, words)).toEqual(['foobar', 'truthy']);
    });

    test(`words over length of five  - ['random', 'large', 'orange', 'banana', 'vehicle'] => ['random', 'orange', 'banana', 'vehicle']`, () => {
      expect(fp.filter(filterWordsOverFive, words2)).toEqual(['random', 'orange', 'banana', 'vehicle']);
    });

    test('numbers over fifty - [34, 23, 1235432, 268234, 372] => [1235432, 268234, 372]', () => {
      expect(fp.filter(filterNumbersOverFifty, numbers)).toEqual([1235432, 268234, 372]);
    });

    test('numbers over fifty - [50, 40, 30, 60] => [60]', () => {
      expect(fp.filter(filterNumbersOverFifty, numbers2)).toEqual([60]);
    });
  });

  // ---------------------------------------------
  //  fp.reduce
  // ---------------------------------------------
  describe('fp.reduce', () => {
    const numbers = [3, 6, 10];
    const strings = ['hello', 'there', 'friend'];
    const reduceNumbers = (accumulator, currentElement) => {
      return accumulator + currentElement;
    };
    const concatStrings = (accumulator, currentElement) => {
      if (accumulator === '') return currentElement;
      return `${accumulator} ${currentElement}`;
    };

    test('reduce [3, 6, 10] to 19', () => {
      expect(fp.reduce(reduceNumbers, numbers, 0)).toEqual(19);
    });

    test(`reduce ['hello', 'there', 'friend'] => 'hello there friend'`, () => {
      expect(fp.reduce(concatStrings, strings, '')).toBe('hello there friend');
    });

    test('reduce empty string => returns empty string', () => {
      expect(fp.reduce(concatStrings, [''], '')).toBe('');
    });
  });

  // ---------------------------------------------
  //  fp.slice
  // ---------------------------------------------
  describe('fp.slice', () => {
    const array1 = [3, 'two', null, 2, undefined];

    test(`begin: 1, end: -1 removes outer elements of array`, () => {
      expect(fp.slice(1, -1, array1)).toEqual(['two', null, 2]);
    });

    test(`begin: 0, end: 0 empties the array`, () => {
      expect(fp.slice(0, 0, [4, 5, 2, 3, 2])).toEqual([]);
    });
  });
});
