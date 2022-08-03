// Almost everything is an object

// string, boolean and numbers are primitive but method can be called on them

// const s = 'Hello'
// console.log(typeof s) //object

// this is what happens in the background when object is called on a string

// const s2 = new String('Hello')

// console.log(typeof s2) // object

// DOM object Window and navigation object

// Window is the parent object of everything

console.log(window)

//window.alert()

// Since windows is the parent object in the dom theres nothing above it any thing with windows you don't have to do window.method

// alert(1)

// navigator is a method of window that tells you about your pc and browser NOTE:THIS FEATURE IS NO LONGER RECOMMENDED. tHOUGH SOME BROWSER MIGHT STILL SUPPORT IT. IT MAY HAVE BEEN ALREADY REMOVED FROM THE RELEVANT WEB STANDARDS.

// console.log(navigator.appVersion)  


// Object literal

const book1 = {
    title: "Book one",
    author: "John Doe",
    year: "2022"
}