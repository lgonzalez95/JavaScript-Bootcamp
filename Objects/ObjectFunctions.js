let myBook = {
    title: 'Juanito El Huerfanito',
    author: 'Juanito',
    pageCount: 500
}

let otherBook = {
    title: 'Juanita El Huerfanito',
    author: 'Juanita',
    pageCount: 450
}


let getSummary = function(book){
    console.log(`The book title is ${book.title}, its author is ${book.author} and the page count is ${book.pageCount}`);

    return {
        summary: `The book title is ${book.title}, its author is ${book.author} and the page count is ${book.pageCount}`,
        pageCountSummary:  `The book ${book.title} is ${book.pageCount} pages long`
    }
}

let tempConverter = function(fahrenheit){
    return {
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9
    }
}

let values = tempConverter(32);
console.log(values.celsius);
console.log(values.kelvin);