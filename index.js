import "./style.css";

const appDiv = document.getElementById("app");
const outDiv = document.getElementById("output");
appDiv.innerHTML = `<h1>Un esempio di <i>promise<i></h1>`;

function sleep(ms, txt) {
  return new Promise( esce => {
    setTimeout(() => esce(txt), ms);
  });
}
async function prova() {
  outDiv.innerHTML += await sleep(3000, "Fine primo step <br>");
  outDiv.innerHTML += await sleep(5000, "Fine secondo step <br>");
}

outDiv.innerHTML += "Inizio <br>";
prova().then(() => (outDiv.innerHTML += "Finito"));
