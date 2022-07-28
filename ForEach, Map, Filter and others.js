// .ForEach()

const numbers = [45,4,9,16,25]
const p = document.querySelector("p")

numbers.forEach(myFunction)

function myFunction (value, index, array ) {
    p.innerHTML += `${value} <br>`
}
// Since the other parameter aren't used they can be removed

// Map

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2:

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

// filter()

// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:


const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Reduce()

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array.

// Note: The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// The reduce() method can accept an initial value:

sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

// The reduceRight() works from right-to-left in the array.

sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
// Note that the function takes 4 arguments:
// The item value
// The item index
// The array itself

// every()

// The every() method check if all array values pass a test.

// This example check if all array values are larger than 18:

let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:
// 
// The item value
// The item index
// The array itself

// some()

// The some() method check if some array values pass a test.

// This example check if some array values are larger than 18:

someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// indexOf()

// The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

// Syntax
// array.indexOf(item, start)
    // item	    Required. The item to search for.
    // start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

// lastIndexOf()

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

position = fruits.lastIndexOf("Apple") + 1;

// find()

// The find() method returns the value of the first array element that passes a test functi

// This example finds (returns the value of) the first element that is larger than 18:

let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// findIndex()

// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

Array.from("ABCDEFG");

// Array Keys()

// The Array.keys() method returns an Array Iterator object with the keys of an array

const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}

// Array entries()

// Create an Array Iterator, and then iterate over the key/value pairs:

const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.


// Array includes()

// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

fruits.includes("Mango"); // is true

