let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi canario", "Mi gato"];
let what = ["se comió", "aplastó", "robó", "rompió", "ensució"];
let when = [
  "antes de clases",
  "justo cuando terminé",
  "mientras almorzaba",
  "mientras yo rezaba"
];

function excuseGenerator(qui, que, cuand) {
  numQuien = Math.floor(Math.random() * qui.length);
  numQue = Math.floor(Math.random() * que.length);
  numCuando = Math.floor(Math.random() * cuand.length);
  return (
    qui[numQuien] +
    " " +
    que[numQue] +
    " " +
    "mi tarea" +
    " " +
    cuand[numCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
