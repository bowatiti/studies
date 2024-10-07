// let alias = "Artacalo";
// console.log(alias.toLowerCase());

// console.log(alias.toUpperCase());

// console.log(alias.split(""));

// console.log(alias.split("a"));

// result = alias.split("a");

// joinning = result.join("a");

// revers = result.reverse();

// concatElement = result.split().reverse().join();

// alias2 = "hello";

// //concatanation

// console.log(alias+alias2);

// //Function user definition

// function reverseString(str){
//     return str.split("").reverse()
// }

// let myResult = "Helloooo";

// console.log(reverseString(myResult));

// console.log(myResult[4]);

// //self Made function for reversing 

// /*
// v = "k"

// v += "o" gives v = ko

// function selfMadeReverseString(str){
// let reversed = "";
// for (var i = str.length-1; i<=0 ;i--){
//         reversed += str[i];
//     }
// }
    

var x = [0,,1,2,3,4,5,6,7,8,9];
//////////////function (x) can be written like x => 
function selfMadeNombrePair(tab){
    let tab_2 = []
    for (let i = 0; i < tab.length; i++) {
         if(tab[i]%2 == 0){
            tab_2.push(tab[i]);
         }
        
    }
}              //or x.filter(x=> % 2 == 0)

function nombrePairSansModulus(){
    let n = 6;
    while(n > 0){
        if (n == 1){
            console.log("It's an odd number");
        }
        n = n - 2;
    }

    // without if statement we can do "return x === 0; and we remove the console " 
}


