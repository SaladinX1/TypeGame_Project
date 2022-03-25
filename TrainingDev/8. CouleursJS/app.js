const inputsCouleurs = document.querySelectorAll('.inp-couleur');
const inputRange = document.querySelector('.inp-range');
const btnRandom = document.querySelector('.random');
const btns = document.querySelectorAll('button');
const fond = document.body;
let index = 3;
const containerCouleurs = document.querySelector('.container-couleurs');
const span = document.querySelector('span');


// Démarrage 
let valCouleurs = ['#BA5370' , '#F4E2D8'];
let inclinaison = 45;
inputsCouleurs[0].value = valCouleurs[0];
inputsCouleurs[1].value = valCouleurs[1];
inputsCouleurs[0].style.background = valCouleurs[0];
inputsCouleurs[1].style.background = valCouleurs[1];
fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;


// Inclinaison 

inputRange.addEventListener('input', (e) => {

    inclinaison = e.target.value * 3.6;
    fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

})

// Ajout / Suppression 

btns.forEach(btn => {
    btn.addEventListener('click', rajouteEnleve);
})

function rajouteEnleve(e) {

    span.innerText = ''
    const allInputs = document.querySelectorAll('.inp-couleur');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    if(e.target.className === "plus") {

        if(allInputs.length > 8) {
            return;
        }

        const nvCouleur = document.createElement('input');
        nvCouleur.setAttribute('class', 'inp-couleur');
        nvCouleur.setAttribute('data-index', index);
        nvCouleur.setAttribute('maxlength', 7);
        nvCouleur.value = `#${randomColor.toUpperCase()}`;
        nvCouleur.style.background = `#${randomColor}`;
        containerCouleurs.appendChild(nvCouleur);

        valCouleurs.push(`#${randomColor.toUpperCase()}`);

        // Updating backgroung color body
        fond.style.background = `linear-gradient(${inclinaison})deg, ${valCouleurs}`;
        index++;
    }
    else if(e.target.className === "moins") {
        if(valCouleurs.length === 2) {
            span.innerText = 'Il faut au moins deux couleurs !'
        } else {
            valCouleurs.pop();
            allInputs[allInputs.length - 1].remove();
            index--;
            fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`   
        }
    }

    // Maj Inputs
    allInputs.forEach(inp => {
        inp.addEventListener('input', MAJCOLORS);
    })
    

}


// Inputs de Base

inputsCouleurs.forEach(inp => {
    inp.addEventListener('input', MAJCOLORS);
})

function MAJCOLORS(e){

        let indexEnCours = e.target.getAttribute('data-index');
        e.target.value = e.target.value.toUpperCase();
        valCouleurs[indexEnCours - 1] = e.target.value.toUpperCase();
        e.target.style.background = valCouleurs[indexEnCours - 1];
        fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

}


// Random Button 

btnRandom.addEventListener('click', (e) => { 

        const inputs = document.querySelectorAll('.inp-couleur');
        for(i = 0; i < valCouleurs.length; i++) {
            valCouleurs[i] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            inputs[i].value = valCouleurs[i].toUpperCase();
            inputs[i].style.background = valCouleurs[i].toUpperCase();
            fond.style.background = `linear-gradient(${inclinaison}deg, ${valCouleurs})`;

        }
})