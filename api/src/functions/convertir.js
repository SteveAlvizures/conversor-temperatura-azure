const { app } = require("@azure/functions");

app.http("convertir", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        const valorCelsius = request.query.get("celsius");
        const celsius = parseFloat(valorCelsius);

        if (isNaN(celsius)) {
            return {
                status: 400,
                jsonBody: {
                    mensaje: "Debe ingresar un numero valido."
                }
            };
        }

        const fahrenheit = (celsius * 9 / 5) + 32;

        return {
            jsonBody: {
                mensaje: `${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`
            }
        };
    }
});
