function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('');
}

function largestPalindromeProduct() {
    let maxPalindrome = 0;
    
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            let product = i * j;
            if (isPalindrome(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }
    
    return maxPalindrome;
}

let largestPalindrome = largestPalindromeProduct();
console.log(largestPalindrome);
