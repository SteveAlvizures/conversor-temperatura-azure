async function convertirTemperatura() {
    const celsius = document.getElementById("celsius").value;
    const resultado = document.getElementById("resultado");

    if (celsius === "") {
        resultado.innerText = "Por favor ingrese una temperatura.";
        return;
    }

    resultado.innerText = "Realizando conversion...";

    try {
        const respuesta = await fetch(`/api/convertir?celsius=${celsius}`);
        const datos = await respuesta.json();

        resultado.innerText = datos.mensaje;
    } catch (error) {
        resultado.innerText = "No se pudo conectar con la API.";
    }
}
