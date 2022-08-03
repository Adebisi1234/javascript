// Almost everything is an object

// string, boolean and numbers are primitive but method can be called on them

// const s = 'Hello'
// console.log(typeof s) //object

// this is what happens in the background when object is called on a string

// const s2 = new String('Hello')

// console.log(typeof s2) // object

// DOM object Window and navigation object

// Window is the parent object of everything

// console.log(window)

//window.alert()

// Since windows is the parent object in the dom theres nothing above it any thing with windows you don't have to do window.method

// alert(1)

// navigator is a method of window that tells you about your pc and browser NOTE:THIS FEATURE IS NO LONGER RECOMMENDED. tHOUGH SOME BROWSER MIGHT STILL SUPPORT IT. IT MAY HAVE BEEN ALREADY REMOVED FROM THE RELEVANT WEB STANDARDS.

// console.log(navigator.appVersion)  


// Object literal

// const book1 = {
//     // below are properties of book1
//     title: "Book one",
//     author: "John Doe",
//     year: "2022",
//     // the below is an method 
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// to call a individual property
// console.log(book1.year)

// to see a value of an object
// console.log(Object.values(book1))
//  to see keys
// console.log(Object.keys(book1))
// to call a method

// console.log(book1.getSummary())

// creating a constructor

// construct is basically a function

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = () => {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book1 = new Book("Book 1", 'John doe', "2022")
const book2 = new Book("Book 2", 'Jane doe', "2022")

console.log(book1)