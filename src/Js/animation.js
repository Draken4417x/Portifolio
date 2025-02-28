const texto = "Olá! Bem Vindo ao meu Portifólio";
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