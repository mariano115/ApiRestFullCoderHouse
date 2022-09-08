class Container {
  constructor(products) {
    this.products = products || [];
  }

  addProduct = (newProduct) => {
    try {
      if (newProduct === null || newProduct === undefined) {
        throw new Error("Product cannot be null");
      }
      newProduct.id = this.products.length + 1;
      this.products.push(newProduct);
      console.log(this.products);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getById = (id) => {
    try {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  getAll = () => {
    return this.products;
  };

  modifyProduct = (id, product) => {
    try {
      const indexToModify = this.products.findIndex(
        (productToModify) => productToModify.id === id
      );
      console.log("id", id);
      console.log("index", indexToModify);
      this.products[indexToModify] = product;
      console.log(this.products);
    } catch (error) {
      console.log(error);
      return error("producto no encontrado");
    }
  };

  deleteById = (id) => {
    try {
      this.products.filter((product) => product.id !== id);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  deleteAll = () => {
    try {
      this.products = [];
    } catch (error) {
      console.log(error);
      return error;
    }
  };
}

module.exports = {
  Container,
};
