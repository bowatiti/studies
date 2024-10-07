
    // To check if a number is prime or not

    let n = 8;
let flag = false;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        flag = true;
        break;
    }
    
}

if (flag) {
    console.log("The element is not a prime number!");
}
else
    console.log("The element is a prime number!");


    // To check how many prime numbers are in a given range 



 for (let n = 2; n < 100; n++) {
    let flag = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            flag = true;
            break;
        }
        
    }
    
    if (!flag) {
        console.log(n);
    }
    
 }

