'use strict';

const read = require('../lib/reader.js');

const linebreak = ' \n -------------------------------------------------------------------------------';
const expected = ['I am cat, meow meow meow. Watch me run, lie in sun, fun fun fun.', 'I am mini cooper vroom vroom vroom. Watch me go, drive so fast, be home very soon soon soon.', 'I am poodle, woof woof woof. I chase cat, then steal car, vroom vroom vroom.'];

describe('reader.js', () => {
  describe(`reading the files in /assets ${linebreak}`, () => {

    test(`recieves an array that includes the text of each .txt file${linebreak}`, (done) => {
      read.files((error, data) => {
        expect(error).toBeNull();
        expect(data).toEqual(expected);
        done();
      });
    });

    test(`index [0] of the array is the cat.txt`, (done) => {
      read.files((error, data) => {
        expect(error).toBeNull();
        expect(data[0].includes('I am cat')).toBeTruthy();

        done();
      });
    });

    test('index [1] of the array is the mini.txt', (done) => {
      read.files((error, data) => {
        expect(error).toBeNull();
        expect(data[1].includes('I am mini cooper')).toBeTruthy();

        done();
      });
    });

    test('index [2] of the array is the poodle.txt', (done) => {
      read.files((error, data) => {
        expect(error).toBeNull();
        expect(data[2].includes('I am poodle')).toBeTruthy();

        done();
      });
    });
  });
});
