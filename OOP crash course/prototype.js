// construct is basically a function

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year
    return`${this.title} is ${years} years old`
}
//  Revise / change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear
    this.revised = true
}
 

// Instantiate an object
const book1 = new Book("Book 1", 'John doe', "2020")
const book2 = new Book("Book 2", 'Jane doe', "2022")

console.log(book1.getSummary())
book1.revise("2022")
console.log(book1)

