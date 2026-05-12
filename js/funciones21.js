const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

const datos = {
    argentina : "buenosaires",
    bolivia : "lapaz",
    brasil : "brasilia",
    chile : "santiago",
    uruguay : "montevideo",
    paraguay : "asuncion"
};

paises.addEventListener("change", () => {
    const paisSeleccionado = paises.value;
    const capital = datos[paisSeleccionado];
    capitales.value = capital;
    console.log("País:", paisSeleccionado);
    console.log("Capital:", capital);
});
