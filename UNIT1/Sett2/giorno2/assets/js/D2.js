/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 10
let b = 5

if (a < b) {
  console.log(b + " è maggiore di " + a)
}
else if (a > b) {
  console.log(a + " è maggiore di " + b)
}




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


let c = 1

if (c === 5) {
  console.log(c + "è uguale a 5")
}
else if (c !== 5) {
  console.log(c + "è diverso da 5")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let d = 25

if (d % 5 === 0) {
  console.log(d + " è divisibile per 5")
}
else if (d % 5 !== 0) {
  console.log(d + " non è divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let e = 3
let f = 5

if (e && f === 8) {
  console.log(e + " o " + f + " è uguale a 8")
}
else if (e + f === 8) {
  console.log(e + " più " + f + " è uguale a 8")
}

else if (e - f === 8) {
  console.log(e + " meno " + f + " è uguale a 8")
}
else if (e + f !== 8) {
  console.log(e + " più " + f + " è diverso da 8")
}
else if (e - f !== 8) {
  console.log(e + " meno " + f + " è diverso da 8")
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 100;
let spedizione = 10;

if (totalShoppingCart < 50) {
  console.log(totalShoppingCart + " euro totale del carrello, più " + spedizione + " euro di spedizioine")
}

else if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + " euro totale carrello con spedizione gratuita")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let blackfriday = 20;



if (totalShoppingCart < 50) {
  totalShoppingCart = totalShoppingCart - blackfriday;
  console.log(totalShoppingCart + " euro totale del carrello, più " + spedizione + " euro di spedizioine")
}

else if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + " euro totale carrello con spedizione gratuita")
}






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let h = 12;
let g = 45;
let i = 27;



if (h > i && h > g) {

  if (g>i) {
    console.log(h,g,i)
  }
}
else if (i > g && i > h) {
  
  if (h>g){
    console.log(i,h,g)
  }
  else if (h<g){
    console.log(i,g,h)
  }
}
 else if (g > i && g > h) {
 
   if(i>h){
    console.log(g,i,h)
   }
}







  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

    let m=10
    if(typeof m==="number"){
console.log("è un numero")
    }
    else if(typeof m !=="number"){
      console.log("non è un numero")
    }

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */
 let numero=10

 if(numero%2===0){
  console.log("il numero è pari")
 }
 else{
  console.log("il numero è dispari")
 }

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 10
    Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
    let val = 7
    if (val < 5) {
        console.log("Meno di 10");
      } else if (val < 10) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
  */

      let val = 7
      if (val < 5) {
          console.log("Meno di 10");
        } else if (val < 10) {
          console.log("Meno di 5");
        } else {
          console.log("Uguale a 10 o maggiore");
        }
      

  /* SCRIVI QUI LA TUA RISPOSTA */

  /* ESERCIZIO 11
    Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  */

  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

  me.city="Tornoto"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills.2

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
 const numerico =[1,2,3,4,5,6,7,8,9,10]

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
 
numerico[9]=100
/* SCRIVI QUI LA TUA RISPOSTA */
