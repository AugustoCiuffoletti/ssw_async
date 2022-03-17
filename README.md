# Async e await

L'esempio dimostra il funzionamento di async e await.

In questo branch le due promise vengono dichiarate nelle istruzioni "await". Ciascuna si risolve alloscadere del timeout, ma vengono eseguite sequenzialmente, perchè il timeout parte dalla diciarazione della promise. Quindi la prima visualizzazione appare dopo tre secondi, la seconda dopo ulteriori 5 secondi.

Nella dichiarazione della promise ho cambiata l'identificatore "resolve" con un altro di fantasia "esce", per evidenziare che "resolve" non è una parola chiave ma solo un identificatore. Nell'uso è meglio preferire i termini convenzionali.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-sswawait)
