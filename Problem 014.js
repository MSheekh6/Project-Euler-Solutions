function collatzSequenceLength(n, cache) {
    let originalN = n;
    let length = 0;

    while (n !== 1) {
        if (n < cache.length && cache[n] !== 0) {
            length += cache[n];
            break;
        }

        if (n % 2 === 0) {
            n = Math.floor(n / 2);
        } else {
            n = 3 * n + 1;
        }

        length += 1;
    }

    cache[originalN] = length;

    return length;
}

function findLongestCollatz(limit) {
    let cache = new Array(limit + 1).fill(0);
    cache[1] = 1;

    let maxLength = 0;
    let numberWithMaxLength = 1;

    for (let i = 2; i < limit; i++) {
        let currentLength = collatzSequenceLength(i, cache);

        if (currentLength > maxLength) {
            maxLength = currentLength;
            numberWithMaxLength = i;
        }
    }

    return numberWithMaxLength;
}

let limit = 1000000;
let result = findLongestCollatz(limit);

console.log(result);
