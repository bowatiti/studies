let myList = [1,2,3,4,5,6]
console.log("Add at the end")

myList[myList.length] = 7
console.log(myList)

console.log("add at the begining")
myListCopy = myList.slice()
myList = []   //pour vider la liste
myList[0] = 24
myList = myList.concat(myListCopy)
console.log(myList)

//or we can use a reverse function, add at the end then reverse again

console.log("delete the last")
let lastEl = myList[myList.length-1]
myListCopy = []

for(var i = 0; i < myList.length; i++){
    if(myList[i] != lastEl){
        myListCopy.push(myList[i])
    }
}

myList = myListCopy
console.log(myList)

console.log("delete the first")
let firstEl = myList[0]
myListCopy = []
for(i = 0; i < myList.length; i++){
    if(myList[i] != firstEl)
        myListCopy.push(myList[i])
}

myList = myListCopy
console.log(myList)

console.log("Delete at index 2")
let toDel = myList[2]
myListCopy = []
for(i = 0; i < myList.length; i++){
    if(myList[i] != toDel)
        myListCopy.push(myList[i])
}

myList = myListCopy
console.log(myList)

console.log("Find 5 in the list")
let search = 5;
let flag = 0
for(i = 0; i < myList.length; i++){
    if(myList[i] == search){
        console.log("Element found at index "+i)
        flag = 1;
        break;
    }
}
if(flag == 0){
    console.log("Element not found")
}

let min = myList[0]
for(i = 0; i < myList.length; i++){
    if(min > myList[i])
        min = myList[i]
    
}
console.log("The min element is "+min)
let max = myList[0]
for(i = 0; i < myList.length; i++){
    if(max < myList[i])
        max = myList[i]
    
}
console.log("The max element is "+max)


console.log("Changing decimal to binary")

let dec = 236
let bin = binary(dec)

console.log(bin)

function binary(dec){
    
    let result = ""
    if (dec == 0){
        return dec
    }
    else{
        while(dec>0){
            result += dec % 2
            if(dec % 2 != 0)
                dec = dec/2 - .5
            else
            dec /= 2 
            
    
        }
        return result.split("").reverse().join("")
    }
}

console.log("Find the time in a text")
const theText = "Breakfast at 09:00 in the room 123:456"
splitTheText = theText.split("")
console.log(splitTheText)
for(i = 0; i<splitTheText.length; i++){
    if(splitTheText[i] === ':'){
        if(Number.isInteger(Number(splitTheText[i-1])) || Number.isInteger(Number(splitTheText[i-2])) || Number.isInteger(Number(splitTheText[i+1])) || Number.isInteger(Number(splitTheText[i+2]))){
            if(splitTheText[i-3] ===' ' || splitTheText[i+3] === ' ')
            console.log("The time is : "+splitTheText[i-2]+splitTheText[i-1]+splitTheText[i]+splitTheText[i+1]+splitTheText[i+2])
        }
    }
    
        // if(Number.isInteger(Number(splitTheText[i])) || Number.isInteger(Number(splitTheText[i+1]))){
        //     console.log("yes"+i)
        // }
        // else
        // console.log("no"+i)
    
}

