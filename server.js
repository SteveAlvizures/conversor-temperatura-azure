const express = require("express");
const path = require("path");

const app = express();
const puerto = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/convertir", (req, res) => {
    const valorCelsius = req.query.celsius;
    const celsius = parseFloat(valorCelsius);

    if (isNaN(celsius)) {
        return res.status(400).json({
            mensaje: "Debe ingresar un numero valido."
        });
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    res.json({
        mensaje: `${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`
    });
});

app.listen(puerto, () => {
    console.log(`Servidor ejecutandose en el puerto ${puerto}`);
});
