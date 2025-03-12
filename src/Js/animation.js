const texto = "Dev Davi Reis";
const velocidade = 150;
let i = 0;

function digitarTexto() {
  if (i < texto.length) {
    document.getElementById("textoAnimado").innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitarTexto, velocidade);
  }
}

window.onload = digitarTexto;

let elemScroll = document.querySelector(".scroll");
let elemContainer = elemScroll.querySelector(".scroll__container");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach(item => {
  let elemDuplicado = item.cloneNode(true);
  elemDuplicado.setAttribute('aria-hidden', 'true');
  
  elemContainer.appendChild(elemDuplicado);
})
