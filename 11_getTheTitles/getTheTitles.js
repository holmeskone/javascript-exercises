const getTheTitles = function(bibliography) {
    const onlyBooks = bibliography.map(book => book.title);
    return(onlyBooks)}

// Do not edit below this line
module.exports = getTheTitles;


// ----------------------------------------------

// var myArray = bibliography.map(() => {
//     return bibliography[i].title;});
// console.log(myArray);


// for(i=0;i<=bibliography.length;i++){ // Iterate based on the length of the array through bibliography 
//     console.log('Book ' + [i] + ' is ' + bibliography[i].title); // print to check 
//     return bibliography[i].title;} // Return the title of books inside bibliography 
// }

/*
We need to get the array
In the array get the titles, by iterating
Put it into another array
and return only titles.
*/