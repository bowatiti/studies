//Check age

// function checkAge(){
//     let age = document.getElementById('myInput').value

//     if(age.trim() == ""){
//         alert("Veuillez saisir un nombre correct")
//     }

//     age = parseInt(age)
    
//     if(age < 18)
//         alert('Mineur')
//     else
//         alert('Majeur')

// }

//checking age from a DOB

function getAge(date) {
    let date_array = date.split("-")
    alert(date_array[0])

}



function checkAge(){
    let age = document.getElementById('myInput').value

    if(age.trim() == ""){
        alert("Veuillez saisir un nombre correct")
        return
    }

    age = parseInt(age)
    
    // if(age < 18)
    //     alert('Votre age est '+'calculatedAge'+' et vous etes Mineur')
    // else
    //     alert('Majeur')

}