const express = require('express');
const ruta = require('./routes/routes.proyectos');
const app = express();
const PORT = 3006;

app.set("port", PORT)

app.get("/", (req, res) => {
        console.log("hola mundo");
        res.send("hola mundo")
    })

    app.use("/api/proyectos", ruta);

app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${PORT}`);
})