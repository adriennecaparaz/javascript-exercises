const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let sum = 0;
  for (let num in nums) {
    sum += nums[num];
  }
  return sum;
};

const multiply = function(nums) {
  let total = 1;
  for (let num in nums) {
    total *= nums[num];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
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
