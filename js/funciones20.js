export function mostrarDatos() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreria').value;
 
    alert(
        `Los datos Ingresados son:\n` +
        `Nombre: ${nombre}\n` +
        `Apellido: ${apellido}\n` +
        `Libreta Universitaria: ${libreta}`
    );
}