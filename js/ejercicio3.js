let radio =4;
let volumen = 4/3;
let cubo = 3;
const PI =3.14;

const calculoCubo = (rad, cub, vol, P) => {
    const cu = rad ** cub;
    const mul = vol * cu;
    return mul * P
}

const Resultado = calculoCubo (radio, cubo, volumen, PI)

console.log(`El volumen de una esfera con radio ${radio} es:${Resultado}`);