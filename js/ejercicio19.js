import { nuevoTexto, cambiarContenidio } from "./funcion19.js";

const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('miParrafo');

boton.addEventListener('click', () =>{
    cambiarContenidio(parrafo,nuevoTexto);
});