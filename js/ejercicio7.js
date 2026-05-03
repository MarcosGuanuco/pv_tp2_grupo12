const nombres = ["Marta"," Martin"," Leonardo"," Miguel"," Paola"," Alexandra"];

const BuscarNombreLargo = (lista) =>{
    const largo = lista.reduce((acumulado, nuevo) =>{
        if (nuevo.length > acumulado.length){
            return nuevo;
        } else{
            return acumulado;
        }
    });
    return largo;
}
const resultado = BuscarNombreLargo(nombres)

console.log(`Los nombres del array son ${nombres}`)
console.log(`El nombre mas largo es ${resultado}`)