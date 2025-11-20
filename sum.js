export const sum = (a,b) => {
    return a + b;
}

export const revers = (str)=>{
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    }
    return (rev);   
}


export const findMax = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax([3, 4, 5, 6]));
