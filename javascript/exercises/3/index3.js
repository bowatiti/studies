let proverbes = [
    {
        "id" : 1,
        "proverbe" : "Qui va a la chasse perd sa place"
    }
    {
        "id" : 2,
        "proverbe" : "Le temps perdu ne revient jamais"
    }
]

function initialiser(){
    let proverbObj = {}
    for (let i = 0; i < proverbes.length; i++) {
        const proverbObj = proverbes[i];
        afficherProverbe(proverbObj)
    }
}

function afficherProverbe(affichProv){
    let div = createDiv(affichProv)
}

function createDiv(newDiv){
    let newElement = document.createElement(newDiv)
}

//Question: Between js file and the function call from html which comes first or 
// between the line where we have the function call and the script link in html which runs first