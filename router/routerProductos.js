var router = require("express").Router();
const { Container } = require("../Container/Container");
const instanceContainer = new Container([]);

/* A route that returns all the products in the container. */
router.get("/", (req, res) => {
  try {
    this;
  } catch (error) {
    console.log("Catch error: " + error);

    res
      .status(500)
      .json({ error: "Error inesperado, comuniquese con el administrador" });
  }
  res.send(instanceContainer.getAll());
});

/* A route that returns a product in the container. */
router.get("/:id", (req, res) => {
  try {
    const response = instanceContainer.getById(req.params.id);
    console.log(response);
    if (response) {
      res.send(response);
      return;
    }
    res.status(404).send({ error: "producto no encontrado" });
  } catch (error) {
    console.log("Catch error: " + error);

    res
      .status(500)
      .json({ error: "Error inesperado, comuniquese con el administrador" });
  }
});

/* Creating a new product. */
router.post("/", (req, res) => {
  try {
    const response = instanceContainer.addProduct(req.body);
    if (response) {
      res.status(201).send(response);
      return;
    }
    res.status(400).send({ error: "Producto Invalido" });
  } catch (error) {
    console.log("Catch error: " + error);

    res
      .status(500)
      .json({ error: "Error inesperado, comuniquese con el administrador" });
  }
});

/* A route that modifies a product. */
router.put("/:id", (req, res) => {
  try {
    const response = instanceContainer.modifyProduct(req.params.id, req.body);
    if (response) {
      res.send(response);
      return;
    }
    res.status(404).send({ error: "producto no encontrado" });
  } catch (error) {
    console.log("Catch error: " + error);

    res
      .status(500)
      .json({ error: "Error inesperado, comuniquese con el administrador" });
  }
});

/* Deleting the product by id. */
router.delete("/:id", (req, res) => {
  try {
    if (instanceContainer.deleteById(req.params.id)) {
      res.send("producto eliminado correctamente");
      return;
    }
    res.status(404).send({ error: "producto no encontrado" });
  } catch (error) {
    console.log("Catch error: " + error);

    res
      .status(500)
      .json({ error: "Error inesperado, comuniquese con el administrador" });
  }
});

module.exports = router;
