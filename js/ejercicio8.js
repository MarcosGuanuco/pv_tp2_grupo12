let notas = [6, 4, 8, 1, 7, 12, 3, 9, 2, 5];

let sumat = 0;
let cantidadAprobados = 0;

console.log(`listado de notas`);
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];

console.log("Nota Alumno N° " + (i + 1) + ": " + nota);

if (nota >= 6){
    console.log (`aprobado`);
     cantidadAprobados++;
    } else {
     console.log(`desaprobado`)
    }
sumat += nota;
}

let promedio = sumat / notas.length;

console.log (`------`);
console.log (`promedio es: ${promedio}`);
console.log (`cantidad de aprobaddas: ${cantidadAprobados}`); 