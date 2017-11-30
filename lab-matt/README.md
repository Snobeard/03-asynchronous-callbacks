# 02: Node Ecosystem
Description: **Lab 02 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **11/28/17**

### fp.map(callback, collection)
The `fp.map` method uses the `call` method to create a new array by using the `array.prototype.map` method that takes an arity of two which one is the array, and the other is a callback function defining what the map method should do to return a new array.

expected data is numbers multiplied by two and only allows numbers in the array.

### fp.filter(callback, collection)
The `fp.filter` method uses the `call` method to create a new array by using the `array.prototype.filter` method that takes an arity of two which one is the array, and the other is a callback function defining what the filter method should do to return a filtered array.

expected data is words over `.length` of 5 to be filtered and numbers over fifty.

### fp.reduce(callback, initialState, collection)
The `fp.reduce` method uses the `call` method to reduce an array into a single data by using the `array.prototype.reduce` method that takes an arity of three which one is the array, another is a callback function defining how the array should reduce, and the third is the initial state of the reduced array.

expected data is the sum of numbers and concatenated strings with spaces.

### fp.slice(begin, end, collection)
The `fp.slice` method uses the `call` method to create a new array by removing certain sections of the array with the `array.prototype.slice` method that takes an arity of three which one is the starting point of the slice, the second is the end point of the slice, and the third is the array to be sliced.

expected data is removal of outer elements of an array and removal of all elements in an array.
