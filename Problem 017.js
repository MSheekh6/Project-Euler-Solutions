function numberToWords(n) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
                  "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (n < 20) {
        return ones[n];
    } else if (n < 100) {
        return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ones[n % 10] : "");
    } else if (n < 1000) {
        return ones[Math.floor(n / 100)] + "hundred" + (n % 100 !== 0 ? "and" + numberToWords(n % 100) : "");
    } else if (n === 1000) {
        return "onethousand";
    } else {
        return "";
    }
}

function countLettersInNumbers(limit) {
    let totalLetters = 0;
    for (let i = 1; i <= limit; i++) {
        let words = numberToWords(i);
        totalLetters += words.length;
    }
    return totalLetters;
}

const limit = 1000;
const result = countLettersInNumbers(limit);
console.log(result);
