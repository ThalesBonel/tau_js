function sum(a, b) {
    return a + b; 
}

console.log(sum(10, 10));

function product(a, b) {
    return a * b;
}

console.log(product(10, 10));

const bigProduct = product(457, 1365465);
console.log(bigProduct);

// Função anônima
// setTimeout(function () {
//     console.log("Hey! Time's up :/");
// }, 1000);

// Arrow Function -> If your arrow function has a single line of code, then the function assumes that it is your return value
setTimeout(() => console.log("Hey! Time's up :/"), 1000);
