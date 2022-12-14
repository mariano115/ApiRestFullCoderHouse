/* Importing the express module and then creating an instance of it. */
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

/* Importing the routerProductos file and then using it. */
const routerProductos = require("./router/routerProductos");
routerProductos.use(express.urlencoded({ extended: true }));
routerProductos.use(express.json());

app.use("/api/productos", routerProductos);

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + server.address().port);
});

server.on("error", (error) =>
  console.log({ mensaje: `Hubo un error: ${error.message}` })
);
