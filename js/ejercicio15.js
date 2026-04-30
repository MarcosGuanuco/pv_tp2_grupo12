const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const retornarMes = (num) => {

    if (num >= 1 && num <= 12) {
        return meses[num - 1];
    } else {
        return "El número ingresado no corresponde a un mes.";
    }
};

const mostrarResultado = () => {
    const input = document.getElementById('numMes');
    const display = document.getElementById('mensajeMes');
    
    const numero = Number(input.value);
    const resultado = retornarMes(numero);

    display.innerText = `Resultado: ${resultado}`;
};

document.getElementById('btnVerificar').onclick = mostrarResultado;