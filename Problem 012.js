function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i * i === n) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;
}

function findTriangleNumberWithDivisors(limit) {
    let n = 1;
    while (true) {
        let triangleNumber = (n * (n + 1)) / 2;
        if (countDivisors(triangleNumber) > limit) {
            return triangleNumber;
        }
        n += 1;
    }
}

let result = findTriangleNumberWithDivisors(500);
console.log(result);
