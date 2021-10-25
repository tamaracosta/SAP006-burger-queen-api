const models = require('../db/models');

const controller = {};

controller.getOrders = async (req, res) => {
  try {
    const orders = await models.Orders.findAll();
    if (orders.length > 0) {
      res.status(200).json(orders);
    } else {
      res.status(200).json({
        message: 'Nenhum pedido encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.getOrderId = async (req, res) => {
  const config = {
    where: { id: req.params.uid },
  };

  try {
    const order = await models.Orders.findOne(config);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(200).json({
        message: 'Nenhum pedido encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.createOrder = async (req, res) => {
  const newOrder = {
    user_id: req.body.user_id,
    client_name: req.body.client_name,
    table: req.body.table,
    status: req.body.status,
    processedAt: new Date(),
  };

  try {
    const order = await models.Orders.create(newOrder);
    if (order) {
      res.status(201).json(order);
    } else {
      res.status(200).json({
        message: 'Nenhum pedido cadastrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao cadastrar os dados. ${error}`,
    });
  }
};

controller.updateOrder = async (req, res) => {
  const updatedOrder = {
    user_id: req.body.user_id,
    client_name: req.body.client_name,
    table: req.body.table,
    status: req.body.status,
    processedAt: new Date(),
  };

  const where = {
    where: {
      id: req.params.uid,
    },
  };
  try {
    await models.Orders.update(updatedOrder, where);
    const order = await models.Orders.findOne(where);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(200).json({
        message: 'Nenhum pedido atualizado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao atualizar os dados. ${error}`,
    });
  }
};

controller.deleteOrder = async (req, res) => {
  const config = {
    where: { id: req.params.uid },
  };

  try {
    const order = await models.Orders.destroy(config);
    if (order) {
      res.status(200).json({
        message: 'Pedido deletado com sucesso!',
      });
    } else {
      res.status(200).json({
        message: 'Nenhum pedido encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao deletar os dados. ${error}`,
    });
  }
};

module.exports = controller;
