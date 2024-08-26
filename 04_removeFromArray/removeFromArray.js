const removeFromArray = function(arr, ...nums) {
    // Loop through each number in nums
    nums.forEach(num => {
        // Filter the array to remove the current number
        arr = arr.filter(value => value !== num);
    });
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
