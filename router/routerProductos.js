var router = require("express").Router();
const { Container } = require("../Container/Container");

const instanceContainer = new Container([]);

router.get("/", (req, res) => {
  res.send(instanceContainer.getAll());
});
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {
  res.send(instanceContainer.addProduct(req.body));
});
router.put("/:id", (req, res) => {
  res.send(instanceContainer.modifyProduct(req.params.id, req.body));
});
router.delete("/:id", (req, res) => {});

module.exports = router;
