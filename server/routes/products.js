const { Router } = require('express');
const {
  getProduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/products');

const productsRouter = Router();

productsRouter.get('/', getProduct);
productsRouter.get('/:uid', getProductId);
productsRouter.post('/', createProduct);
productsRouter.put('/:uid', updateProduct);
productsRouter.delete('/:uid', deleteProduct);

module.exports = productsRouter;
