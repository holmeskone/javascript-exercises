const sumAll = function(numStart, numEnd) {
    // Ensure start is less than or equal to end
    if (numStart > numEnd) {
      [numStart, numEnd] = [numEnd, numStart];
    }
    
    let sumNumber = 0;
    
    // Sum the numbers directly without creating an array
    for (let i = numStart; i <= numEnd; i++) {
      sumNumber += i;
    }
  
    return sumNumber;
  };

// Do not edit below this line
module.exports = sumAll;
