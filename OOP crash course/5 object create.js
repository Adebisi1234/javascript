// Object Of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year
        return`${this.title} is ${years} years old`
    }
}

// Create Object
// const Book1 = Object.create(BookProtos)
// book1.title = "Book One"
// book1.author = "John Doe"
// book1.year = "2020"

const book1 = Object.create(bookProtos, {
    title: { value: "Book One"},
    author: { value: "John Doe"},
    year: { value: "2020"}
})

console.log(book1)