const a = 10;
const b = 5;

const add = function(x, y) {
    return x + y;
}

const addArrow = (x, y) => {
    const result = x + y;
    return result;
}

const subtract = (x, y) => x - y;

console.log(`Addition: ${add(a, b)}`);
console.log(`Addition using Arrow Function: ${addArrow(a, b)}`);
console.log(`Subtraction using Arrow Function: ${subtract(a, b)}`);
