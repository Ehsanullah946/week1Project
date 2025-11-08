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















