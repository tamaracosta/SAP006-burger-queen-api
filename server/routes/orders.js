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
ordersRouter.get('/:uid', getOrderId);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:uid', updateOrder);
ordersRouter.delete('/:uid', deleteOrder);

module.exports = ordersRouter;
