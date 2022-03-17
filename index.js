import "./style.css";

const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;

// Definisco una funzione sleep che restituisce una Promise
// che si risolve dopo un certo intervallo parametrizzato
function sleep(ms, txt) {
  return new Promise(resolve => {
    setTimeout(() => resolve(txt), ms);
  });
}
// Definisco due promise per timeout e messaggi diversi
// Lancio entrambi con await: vanno in parallelo
// La funzione deve essere dichiarata async
async function prova() {
  outDiv.innerHTML += await sleep(3000, "Fine primo step <br>");
  outDiv.innerHTML += await sleep(5000, "Fine secondo step <br>");
}

outDiv.innerHTML += "Inizio <br>";
prova().then(() => (outDiv.innerHTML += "Finito"));
