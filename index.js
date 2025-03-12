const express = require("express")

// Crear la app
const app = express()

// Routing
app.get("/", function (req, res) {
    res.send("Hola Mundo en express")
});

app.get("/nosotros", function (req, res) {
    res.send("Informacion de nosotros")
});

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});