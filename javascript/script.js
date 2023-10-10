

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


