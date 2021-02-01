// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(7);
console.log(result);


const add = (x, y) => x + y;
const addResult = add(5, 40);
console.log(addResult);


const give5 = () =>5;
const give = give5();
console.log(give);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const math = doMath(50, 20);
console.log(math);