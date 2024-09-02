function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function latticePaths(gridSize) {
    return factorial(2 * gridSize) / (factorial(gridSize) * factorial(gridSize));
}

let gridSize = 20;
let result = latticePaths(gridSize);

console.log(result);
