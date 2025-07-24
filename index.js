const express = require("express");
const ruta = require("./routes/routes.proyectos");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3006;

app.set("port", PORT);

app.get("/", (req, res) => {
  console.log("hola mundo");
  res.send("hola mundo");
});
app.use(express.json());
app.use("/api/proyectos", ruta);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error(err.message));
app.listen(PORT, () => {
  console.log(`escuchando en el puerto ${PORT}`);
});
