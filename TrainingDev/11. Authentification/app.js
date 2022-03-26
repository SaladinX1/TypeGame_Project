const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnection = document.querySelector('.form-connection');
const emailConnection = document.querySelector('.email-connection');
const mdpConnection = document.querySelector('.mdp-connection');


btnInscription.addEventListener('click', () => {

    if (formConnection.classList.contains('apparition')) {
        formConnection.classList.remove('apparition')
    }

    formInscription.classList.toggle('apparition');

});

btnConnection.addEventListener('click', () => {

    if (formInscription.classList.contains('apparition')) {
        formInscription.classList.remove('apparition')
    }

    formConnection.classList.toggle('apparition');

});

formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
        .then(cred => {
            console.log(cred);
            formInscription.reset();
            formInscription.classList.toggle('apparition')
        })
})

formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur)
        .then(cred => {
            console.log("CONNEXION !", cred.user);
            formConnection.reset();
            formConnection.classList.toggle('apparition')
        })
})

deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
        .then(() => {
            console.log("Déconnecté");
        })
})


//Gérer le Contenu 

const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

auth.onAuthStateChanged(utilisateur => {
    if (utilisateur) {
        info.innerText = 'Voici le contenu privé !'
        h1.innerText = 'Vous voilà de retour ! :)'
    } else {
        console.log("utlisateur s'est déconnecté");
        info.innerText = 'Contenu Public.'
        h1.innerText = 'Bienvenue, Incrivez-vous ou connectez-vous !'
    }
})