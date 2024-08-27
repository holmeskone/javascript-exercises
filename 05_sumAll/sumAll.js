const sumAll = function(numStart, numEnd) {
    // Ensure parameters are integers and are greater than 0
    if (!Number.isInteger(numStart) || !Number.isInteger(numEnd) || numStart < 0 || numEnd < 0) {
        return "ERROR";  // Return "ERROR" if any input is not a positive integer
    }

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

module.exports = sumAll;  // Ensure the function is properly exported