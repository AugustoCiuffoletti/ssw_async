# Async e await

In questo branch le due promise vengono dichiarate nelle istruzioni "await". Ciascuna si risolve allo scadere del timeout, ma vengono eseguite sequenzialmente, perchè il timeout parte dalla diciarazione della promise. Quindi la prima visualizzazione appare dopo tre secondi, la seconda dopo ulteriori 5.

Nella dichiarazione della promise ho cambiato l'identificatore "resolve" con un altro di fantasia "esce", per evidenziare che "resolve" non è una parola chiave ma solo un identificatore. In pratica è meglio preferire i termini convenzionali, quindi "resolve" e "reject", per quanto non sia necessario.
