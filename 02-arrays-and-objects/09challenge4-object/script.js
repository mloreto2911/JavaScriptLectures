// Object Challenge Answes


//Challenge 1


//Step 1

const library = [
    { title: 'Harry Potter', 
    author: 'JK Rowling', 
    status: { own: true, reading: false, read: false } },
    { title: 'For One More Day', 
    author: 'Mitch Albom', 
    status: { own: true, reading: false, read: false } },
    { title: 'Tuesdays with Morrie', 
    author: 'Mitch Albom', 
    status: { own: true, reading: false, read: false } }
  ];

  

//Step 2

library.forEach(book => {
    book.status.read = true;
  });


//Step 3

const [{ title: firstBook, ...rest }] = library;


//Step 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);


