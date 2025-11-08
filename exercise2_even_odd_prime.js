const findOdd = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log("odd numbers:",findOdd([3, 5, 6, 7, 8]));



const findEven = (array) => {
    let result = [];
        for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
      return result;
}
console.log("Even Numbers:", findEven([3, 4, 5, 6, 7, 8]));


// figure out the prime number
    let number=32
    let isPrime = true;
    if(number < 2) {
    isPrime = false
   }else {
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0) {
                isPrime = false;
                break
            }
        }
    }
console.log(isPrime ? "prime Number" : "not prime");












