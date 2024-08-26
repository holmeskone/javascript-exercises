const sumAll = function(numStart,numEnd) {
    numbers = [];
    // Ensure start is less than or equal to end
  if (start > end) {
    [numStart, numEnd] = [numEnd, numStart];
  }
  for (let i = numStart; i <= numEnd; i++) {
    numbers.push(i);
  }
  
  return numbers;
};

// Do not edit below this line
module.exports = sumAll;
