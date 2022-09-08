/* Importing the express module and then creating an instance of it. */
const express = require("express");
const app = express();

/* Importing the routerProductos file and then using it. */
const routerProductos = require("./router/routerProductos");
routerProductos.use(express.urlencoded({ extended: true }));
routerProductos.use(express.json());

/* Parsing the body of the request. */
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use("/api/productos", jsonParser, routerProductos);

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto " + server.address().port);
});