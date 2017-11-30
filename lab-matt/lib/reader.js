'use strict';

const fs = require('fs');
const readFolder = require('fs-readdir-recursive');

const read = module.exports = {};

const files = [];
let folder = readFolder(`${__dirname}/../assets`);
console.log('all files in assets folder', folder);

read.files = (callback) => {
  fs.readFile(`${__dirname}/../assets/cats.txt`, (err, data) => {
    if (err) callback(err);
    if (files.length < 1) files.push(data.toString());

    fs.readFile(`${__dirname}/../assets/mini-cooper.txt`, (err, data) => {
      if (err) callback(err);
      if (files.length < 2) files.push(data.toString());

      fs.readFile(`${__dirname}/../assets/poodle.txt`, (err, data) => {
        if (err) callback(err);
        if (files.length < 3) files.push(data.toString());

        callback(null, files);
      });
    });
  });
};
