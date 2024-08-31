function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function lcmMultiple(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    return result;
}

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
const smallestMultiple = lcmMultiple(numbers);
console.log(smallestMultiple);