let total = 0;
let product = BigInt(1);  

for (let i = 1; i <= 100; i++) {
    product *= BigInt(i);
}

product = product.toString();

for (let i = 0; i < product.length; i++) {
    total += parseInt(product[i]);
}

console.log(total);
