// console.log(document);
// // console.log(window);

// let paragraph = document.createElement("p");
// console.log(paragraph)
// console.dir(paragraph)

// paragraph.setAttribute("id","new-id-value");
// paragraph.setAttribute("class","new-class-value");

// document.body.appendChild(paragraph);

// // paragraph.textContent = "<em>hello</em>" ; this 2 never goes together
// paragraph.innerHTML = "<em>hello</em>" ;

// let myList = document.getElementById(myList);
// console.log(myList);
// let li = document.createElement("li")
// li.textContent = "Squad"

//adding an element using array
// let myList = document.getElementById(myList);
// console.log(myList);
// let li = document.createElement("li")
// li.textContent = "Squad"

//using loop

// const fruitList = ['Banana', 'Mangue', 'Lemon']

// 	for (let i=0 ; i<fruitList.length; i++){
// 		let li = document.createElement("li");
//         li.textContent = fruitList[i]
//         myList.appendChild(li)
// 	}

//     document.body.appendChild(li)



// OBJECT

let cni = {
    "izina": "NSUMIZI",
    "AMATAZIRANO": "ALAIN BORIS",
    "SE": "NIYONZIMA",
    "NYINA": "HARERIMANA",
    "KOMINE": "BUJUMBURA MAIRIE",
    "KOMINE": "MUHA",
    "YAVUKIYE": "KININDO",
    "ITALIKI": 1990,
    "ARUBATSE": "EGO",
    "AKAZI AKORA": "INFORMATICIEN",
    "fullName": function(){
        console.log('${cni.izina} ${cni.amatazirano}')
    }

    
    //we can define a function inside an object
    // "auteur": {
    //     "nom": "victor",
    //     "prenom": "Hugo"
    // },
    // "langues":[{"lange":"french","level":"bon"},
    //     "anglais",
    //     "kiswahili"]

}

console.log(cni)

//to access a specific element from the object

console.log(cni.ITALIKI)

//or this for keys with space in them

console.log(cni["AKAZI AKORA"])

//to print out the full name 

console.log(cni.fullName())

for(var x in cni){
    console.log(x)
}

let fruits = ["mango","avocado","papaye"]

for(var x of fruits){
    //this is only used for iterable(or list inside the object/ or list of objects as value)object
    console.log(x)
}

let students =[
     {
    "izina": "NSUMIZI",
    "AMATAZIRANO": "ALAIN BORIS",
    "SE": "NIYONZIMA",
    "NYINA": "HARERIMANA",
    "KOMINE": "BUJUMBURA MAIRIE",
    "KOMINE": "MUHA",
    "YAVUKIYE": "KININDO",
    "ITALIKI": 1990,
    "ARUBATSE": "EGO",
    "AKAZI AKORA": "INFORMATICIEN",
    "fullName": function(){
        console.log('${cni.izina} ${cni.amatazirano}')
    }

    
    //we can define a function inside an object
    // "auteur": {
    //     "nom": "victor",
    //     "prenom": "Hugo"
    // },
    // "langues":[{"lange":"french","level":"bon"},
    //     "anglais",
    //     "kiswahili"]

}
]