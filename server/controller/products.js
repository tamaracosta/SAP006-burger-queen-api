const models = require('../db/models');

const controller = {};

controller.getProduct = async (req, res) => {
  try {
    const products = await models.Products.findAll();
    if (products.length > 0) {
      res.status(200).json(products);
    } else {
      res.status(200).json({
        message: 'Nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.getProductId = async (req, res) => {
  const config = {
    where: { id: req.params.uid },
  };
  try {
    const product = await models.Products.findOne(config);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(200).json({
        message: 'Nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
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
      res.status(200).json({
        message: 'nenhum produto cadastrado',
      });
    }
  } catch (error) {
    res.status(400).json({
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
      id: req.params.uid,
    },
  };
  try {
    await models.Products.update(updatedProduct, where);
    const product = await models.Products.findOne(where);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(200).json({
        message: 'nenhum produto atualizado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao atualizar os dados. ${error}`,
    });
  }
};

controller.deleteProduct = async (req, res) => {
  const config = {
    where: { id: req.params.uid },
  };

  try {
    const product = await models.Products.destroy(config);
    if (product) {
      res.status(200).json({
        message: 'produto deletado com sucesso!',
      });
    } else {
      res.status(200).json({
        message: 'nenhum produto encontrado',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: `Erro ao deletar os dados. ${error}`,
    });
  }
};

module.exports = controller;
