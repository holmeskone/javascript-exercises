const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(array) {
  let multiple = 1;
	array.forEach(number => {
    multiple *= number;
  });
  return multiple;
};

const power = function(a,b) {
  return (Math.pow(a,b));
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
