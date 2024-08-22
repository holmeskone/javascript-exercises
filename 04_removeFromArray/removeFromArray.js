const removeFromArray = function(arr,num) {
    arr = arr.filter(value => value !== num);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
