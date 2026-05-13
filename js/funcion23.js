export const LIMITE_CARACTERES = 20;
export function obtenerColorDeFondo(largoTexto){
    if(largoTexto > LIMITE_CARACTERES){
        return "#ffcccc";
    }
    return "#e2f3ff";
}