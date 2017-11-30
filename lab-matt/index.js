'use strict';

// MattL - node package to show all files in specified folder
const read = require('fs-readdir-recursive');

console.log(read(`${__dirname}/assets`));
