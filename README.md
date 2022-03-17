# Async e await

L'esempio dimostra il funzionamento di async e await.
La promise è di tipo un po' particolare, adatta all'esempio. Il metodo setTimeout chiama una funzione callback dopo un tempo definito in millisecondi. Nel nostro caso la funzione chiamata invoca il metodo resolve, con il valore testuale passato come parametro alla creazione della promise. In questo modo, allo scadere del timeout, il valore restituito dalla promise è il valore testuale stesso, mentre prima è una promessa non ancora risolta.

Successivamente vengono definite due promise con due "let". L'esecuzione procede dopo ciascuna dichiarazione quindi le due promise partono alle stesso momento, e procedono in parallelo.

Poi il valore restituito dalle due promise viene inserito nel <div> di output. viene specificato "await" perchè devo attendere la risoluzione della promise per ottenerene il dato. Se l'ordine delle due istruzioni è lo stesso delle dichiarazioni delle promesse, con il primo timeout (3 secondi) più breve del secondo (cinque secondi), otterrò la prima stampa dopo tre secondi, la seconda a due secondi dalla prima, cioè cinque secondi dalla dichiarazione della promise. Scambiando l'ordine dei due assegnamenti i due output sono simultanei, dopo 5 secondi: il primo attende cinque secondi, ed il secondo trova la promise già risolta, quindi non attende.

Esperimenti consigliati:
-) cancellare "await" e vedere cosa succede
-) scambiare l'ordine dei due assegnamenti "await"

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswawait)
