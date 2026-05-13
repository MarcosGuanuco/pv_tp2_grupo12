import { actualizarUI } from "./funcion24.js";

const radioForm= document.getElementById('radioForm');
const displayResultado= document.getElementById('resultado');
radioForm.addEventListener('change', (event) => {
    const seleccion = event.target.value;
    actualizarUI(seleccion, displayResultado);
});