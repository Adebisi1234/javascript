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

const numbersi = [45, 4, 9, 16, 25];
const over18 = numbersi.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Reduce()