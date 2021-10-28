const models = require('../db/models');

const controller = {};

controller.getProduct = async (req, res) => {
  try {
    const products = await models.Products.findAll();
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(404).json({
        code: 404,
        message: 'Nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.getProductId = async (req, res) => {
  try {
    const product = await models.Products.findByPk(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({
        code: 404,
        message: 'Nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.createProduct = async (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    flavor: req.body.flavor,
    complement: req.body.complement,
    image: req.body.image,
    type: req.body.type,
    sub_type: req.body.sub_type,
  };

  try {
    const product = await models.Products.create(newProduct);
    if (product) {
      res.status(201).json(product);
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum produto cadastrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao cadastrar os dados. ${error}`,
    });
  }
};

controller.updateProduct = async (req, res) => {
  const updatedProduct = {
    name: req.body.name,
    price: req.body.price,
    flavor: req.body.flavor,
    complement: req.body.complement,
    image: req.body.image,
    type: req.body.type,
    sub_type: req.body.sub_type,
  };

  const where = {
    where: {
      id: req.params.productId,
    },
  };
  try {
    await models.Products.update(updatedProduct, where);
    const product = await models.Products.findByPk(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum produto atualizado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao atualizar os dados. ${error}`,
    });
  }
};

controller.deleteProduct = async (req, res) => {
  const where = {
    where: {
      id: req.params.productId,
    },
  };
  try {
    const product = await models.Products.destroy(where);
    if (product) {
      res.status(200).json({
        message: 'produto deletado com sucesso!',
      });
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao deletar os dados. ${error}`,
    });
  }
};

module.exports = controller;
