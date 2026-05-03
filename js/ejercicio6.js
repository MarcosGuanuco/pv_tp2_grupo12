edades = [18, 20, 22, 25, 30, 35, 40, 45];  
const promedioEdad = (edades) => {
    let suma = 0;
    edades.forEach(edad => suma += edad);
    return Math.round(suma / edades.length);
}
console.log(`El promedio de edad es: ${promedioEdad(edades)}`);
