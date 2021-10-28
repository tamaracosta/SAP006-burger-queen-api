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
productsRouter.get('/:productId', getProductId);
productsRouter.post('/', createProduct);
productsRouter.put('/:productId', updateProduct);
productsRouter.delete('/:productId', deleteProduct);

module.exports = productsRouter;
