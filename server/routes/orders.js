const { Router } = require('express');
const {
  getOrders,
  getOrderId,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/orders');

const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.get('/:orderId', getOrderId);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:orderId', updateOrder);
ordersRouter.delete('/:orderId', deleteOrder);

module.exports = ordersRouter;
