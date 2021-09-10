/* In the name of God */

let n = 1000007

let isPrime = true

let i = 2
while(i <= parseInt(((n ** 0.5) + 1)){ // parseInt => change variable type to integer
    if (n % i == 0) {
        isPrime = false
        break
    }
}

console.log(n, isPrime);

/* Writed by AmirMahdy Turani */