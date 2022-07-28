// Sort alphabetically
const fruits = ["banana", 'Orange', "Apple", "Mango"]
fruits.sort()

// Reversing an Array

fruits.reverse()

// Numeric Sorting
const points = [40,100,1,3,5,25,10]
// Ascending Order
points.sort(function(a, b){return a-b})

// Descending Order
points.sort(function(a, b){return b-a})

// Sorting in Random Order

points.sort(function(a,b){return 0.5 - Math.random()})

// Or even better

// The fisher Yates Method

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}

// Find the Highest or Lowest Array Value

points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value


// Using Math.max() and Max.min() on an Array

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }
Math.max.apply(null, points)
Math.min.apply(null, points)

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).


// find max of an array

// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
// }

function arr() {
    let len = points.length
    let max = -Infinity
    while(len--){
        if (arr[len] > max) {
        max = arr[len]
        }
    }
    return max
}
// Find min of an array

// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
// }

// Sort array of objects

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year})

console.log(cars)

// Comparing Strings properties

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});