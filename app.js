// Importazione delle funzioni dai moduli
const createName = require('./names');
const createHobbies = require('./hobbies');

// Funzione principale che restituisce un oggetto con fullName e hobbies
function createProfile() {
    const fullName = createName('Mario', 'Rossi'); // Esempio con nome e cognome
    const hobbies = createHobbies('Calcio', 'Lettura', 'Viaggi'); // Esempio con hobby
    return { fullName, hobbies };
}

// Eseguiamo la funzione per verificarne il funzionamento
const profile = createProfile();
console.log(profile);
