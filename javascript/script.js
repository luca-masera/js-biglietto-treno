
//ESERCIZIO 2 JAVASCRIPT
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

const euroAlKm = 0.21;


let costoBase = euroAlKm * 100;
console.log(costoBase);



let numeroKm =parseInt( prompt('Quanti chilometri vuoi percorrere?'));
let etàPasseggero =parseInt( prompt('Quanti anni hai?'));
console.log(numeroKm,etàPasseggero);

let biglietto = euroAlKm * numeroKm; 


if(isNaN(etàPasseggero) || isNaN(numeroKm)){
    console.log("not a number");
    alert("Bisogna inserire solo numero.")
    window.location.reload()
    console.log(numeroKm, etàPasseggero);
}


if(etàPasseggero < 18){
    biglietto = biglietto - (biglietto * 20/100)
    console.log(biglietto)
}
else if(etàPasseggero > 65){
    biglietto = biglietto - (biglietto * 40/100)
    console.log(biglietto)
}


let costoBiglietto = document.getElementById ('prezzo-biglietto');
costoBiglietto.innerHTML ='Il prezzo del tuo biglietto è : €' + biglietto.toFixed(2)


