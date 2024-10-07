function nombrePairSansModulus(){
    let n = 8;
    while(n > 0){
        // if (n == 1){
        //     console.log("It's an odd number");
        // }
        n = n - 2;
    }

    // without if statement we can do "return x === 0; and we remove the console " 
    return n === 0;
}

console.log("hello");
let result = nombrePairSansModulus();
//console.log(result);
if (result) {
    console.log("It's an even number!");
}
else
    console.log("It's an odd number!");