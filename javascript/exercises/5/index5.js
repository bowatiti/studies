// let first = 89
// let second = 48

// function pgcd(a,b){

//     while(a !== 1 || b !== 1){
//         let result = 1
        
//         if(a % i === 0 && b % i === 0){
//             a /= i
//             b /= i
//             result = result * i

//         }
        
        
//     }
// }


let a = 48
let b = 18
let temp = 0
let arr1 = []
let arr2 = []

let i = 1
while (a >= i || b >= i){
    
    if(a % i === 0){
        
        arr1.push(i)
        //console.log(arr1)
        
        
    }

    if(b % i=== 0){
        arr2.push(i)
        //console.log(arr2)
    }
    i++
}

//comparison

for(i=0; i< arr1.length ; i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j])
        temp = arr1[i]
    }
}

console.log(arr1)
console.log(arr2)

console.log("The PGCD of "+a+" and "+b+" is "+temp)
