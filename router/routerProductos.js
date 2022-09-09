var router = require("express").Router();
const { Container } = require("../Container/Container");
const instanceContainer = new Container([]);

/* A route that returns all the products in the container. */
router.get("/", (req, res) => {
  res.send(instanceContainer.getAll());
});

/* A route that returns a product in the container. */
router.get("/:id", (req, res) => {
  try {
    const response = instanceContainer.getById(req.params.id);
    console.log(response);
    if (response) {
      res.send(response);
    } else {
      res.status(404).send({ error: "producto no encontrado" });
    }
  } catch (error) {
    console.log("Catch error: " + error);
  }
});

/* Creating a new product. */
router.post("/", (req, res) => {
  try {
    if (instanceContainer.addProduct(req.body)) {
      res.send("producto creado correctamente");
    } else {
      res.status(400).send({ error: "Producto Invalido" });
    }
  } catch (error) {
    console.log("Catch error: " + error);
  }
});

/* A route that modifies a product. */
router.put("/:id", (req, res) => {
  try {
    if (instanceContainer.modifyProduct(req.params.id, req.body)) {
      res.send("producto modificado correctamente");
    } else {
      res.status(404).send({ error: "producto no encontrado" });
    }
  } catch (error) {
    console.log("Catch error: " + error);
  }
});

/* Deleting the product by id. */
router.delete("/:id", (req, res) => {
  try {
    if (instanceContainer.deleteById(req.params.id)) {
      res.send("producto eliminado correctamente");
    } else {
      res.status(404).send({ error: "producto no encontrado" });
    }
  } catch (error) {
    console.log("Catch error: " + error);
  }
});

module.exports = router;
