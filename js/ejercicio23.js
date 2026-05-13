import { LIMITE_CARACTERES, obtenerColorDeFondo } from "./funcion23.js";

const inputUser = document.getElementById('entrada');
const visor = document.getElementById('visor');
    inputUser.addEventListener('input', (event) => {
        const valor = event.target.value;
        visor.textContent = valor || 'Dale escribi algo...';
        visor.style.backgroundColor = obtenerColorDeFondo(valor.length);
        visor.style.borderColor = valor.length > LIMITE_CARACTERES ? "#ff0000" : "#eee";
    })
