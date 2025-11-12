
const findOdd = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            result.push(array[i]);
        }
    }
    return result;
}

const findEven = (array) => {
    let result = [];
        for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
      return result;
}

// figure out the prime number
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports ={findOdd, findEven,isPrime}








