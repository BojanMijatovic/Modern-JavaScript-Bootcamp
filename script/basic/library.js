

const library = [];

library.push('react');
library.push('js');
library.push('redux');
library.push('advanced Js');

console.log(library);

//  Search Index off book 

let searchBook = library.indexOf('redux');
console.log(searchBook);

//  Remove Book 
if (searchBook >= 0) {
  library.splice(searchBook, 1);
}

// Edit Title book

if (searchBook >= 0) {
  library.splice(searchBook, 1, 'GraphQL');
}

console.log(library);


