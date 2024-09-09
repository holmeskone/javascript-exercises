const palindromes = (text) => {
    const words = text // Split each text into words
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // Remove all punctuation
        .split(/\s+/); // Split by one or more spaces

    const letters = words
        .join('');

    for (let i=0; i<letters.length; i++){
        if(letters[i]===letters[letters.length -1 - i]){
            return true;
        }
        // console.log(letters[i] + 'is the' + [i] + 'character of letters');
        // console.log(letters[letters.length -1 - i] + 'is the' + [letters.length -1 - i] + 'character of letters');
    }
    console.log(words);

};

// Do not edit below this line
module.exports = palindromes;

/*
Check - Get the text

Check - remove all spaces and non-letter characters.

put it into an array or some sort of place

and check if the first character and the last are the same
then add 1 to the first and subtract 1 to the last, loop through that process 
and stop when the character[i] is the same. 

return true if the same
false if not. 



-----

Get the text
remove space and punctuation 
put into array
loop through each value
create a reversed array 
loop through each value

if values are the same its a palindrom

*/