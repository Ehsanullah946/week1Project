
// traditional appraoch 
let a = 20;
let b = 30;

let temp = a;  // temp is now 20
a = b;   // a: is now 30 
b = temp; // b: is now 20

console.log(`a:${a}`, `b:${b}`);


// Modern Approach and efficient way for swapping in javaScript
let c = 40;
let d = 50;

[c, d] = [d, c];   // array destructuring 
console.log(`c:${c}`, `d:${d}`);


// using Arthmatic operator
let e = 60;
let f = 70;

e = e + f;  // e: is now 130
f = e - f;  // f: is now (130-70) 60
e = e - f; // e: is now (130-60) 70

console.log(`e:${e}`, `f:${f}`);


