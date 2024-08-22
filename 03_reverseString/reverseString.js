const reverseString = function(str) {
    result = '';
    let characters = str.split("");
    let reverseCharacters = characters.reverse().join('');
    return(reverseCharacters);
};

// Do not edit below this line
module.exports = reverseString;