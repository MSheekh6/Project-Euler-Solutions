let total = 0;
let a = 1;
let b = 2;

while (a <= 4000000) {
    if (a % 2 === 0) {
        total += a;
    }
    [a, b] = [b, a + b];
}

console.log(total);
