const calcularConsumo = (l, k) => l / k;

const manejarCalculo = () => {

    const km = Number(document.getElementById('kmInput').value);
    const litros = Number(document.getElementById('litrosInput').value);
    const display = document.getElementById('resultadoTexto');

    if (km > 0) {
        const resultado = calcularConsumo(litros, km);
        
        display.innerText = `El consumo es de ${resultado.toFixed(2)} L/km.`;
    } else {
        display.innerText = "Por favor, ingresa una cantidad de km válida.";
    }
};

document.getElementById('btnCalcular').onclick = manejarCalculo;
