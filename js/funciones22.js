const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");

input.addEventListener("input", () => {
  resultado.textContent = input.value;
});