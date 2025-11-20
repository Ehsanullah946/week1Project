const { findOdd, findEven, isPrime } = require("./exercise2_even_odd_prime");
const test = (name, actual, expected) => {
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    if (passed) {
        console.log(`${name} passed`);
    } else {
        console.log(`${name} fiald`);
        console.log(" Expected", expected);
        console.log(" actual", actual);
    }
}
test("findOdd([1,2,3,4,5])", findOdd([1,2,3,4,5]), [1,3,5]);
test("findOdd([2,4,6])", findOdd([2,4,6]), []);
test("findOdd([])", findOdd([]), []);
// ---- findEven ----
test("findEven([1,2,3,4,5])", findEven([1,2,3,4,5]), [2,4]);
test("findEven([1,3,5])", findEven([1,3,5]), []);
test("findEven([])", findEven([]), []);

// ---- isPrime ----
test("isPrime(2)", isPrime(2), true);
test("isPrime(3)", isPrime(3), true);
test("isPrime(4)", isPrime(4), false);
test("isPrime(17)", isPrime(17), true);
test("isPrime(1)", isPrime(1), false);
test("isPrime(0)", isPrime(0), false);
test("isPrime(-5)", isPrime(-5), false);
