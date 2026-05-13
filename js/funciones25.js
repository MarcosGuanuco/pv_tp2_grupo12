const btn = document.getElementById("btn");

const colores = ["red", "blue", "green", "yellow", "purple", "orange"];

btn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * colores.length);
    const color = colores[indice];

    document.body.style.background = color;
    console.log("El color actual es:", color);
});