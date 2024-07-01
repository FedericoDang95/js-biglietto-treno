// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzoBiglietto(km, eta) {
    const prezzoPerKm = 0.21;
    let prezzoTotale = km * prezzoPerKm;

    if (eta < 18) {
        prezzoTotale *= 0.8; // Sconto del 20% per i minorenni
    } else if (eta >= 65) {
        prezzoTotale *= 0.6; // Sconto del 40% per gli over 65
    }

    // Modificare il prezzo finale con due decimali
    return prezzoTotale.toFixed(2);
}

// Chiedere all'utente il numero di chilometri e l'età del passeggero
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Qual è l'età del passeggero?"));

// Calcolare il prezzo del biglietto
const prezzoFinale = calcolaPrezzoBiglietto(km, eta);

// Stampare il prezzo del biglietto in console
console.log(`Il prezzo del biglietto è: €${prezzoFinale}`);
