let n = 600851475143;
let i = 2;

while (i * i < n) {
    while (n % i === 0) {
        n = n / i;
    }
    i = i + 1;
}

console.log(n);
