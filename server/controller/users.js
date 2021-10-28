const models = require('../db/models');

const controller = {};

controller.getUsers = async (req, res) => {
  const config = {
    attributes: {
      exclude: ['password'],
    },
  };

  try {
    const users = await models.Users.findAll(config);
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum usuário encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.getUserId = async (req, res) => {
  const config = {
    attributes: {
      exclude: ['password'],
    },
    where: { id: req.params.uid },
  };
  try {
    const user = await models.Users.findOne(config);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum usuário encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao consultar os dados. ${error}`,
    });
  }
};

controller.createUser = async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    restaurant: req.body.restaurant,
  };

  try {
    const user = await models.Users.create(newUser);
    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        restaurant: user.restaurant,
      });
    } else {
      res.status(400).json({
        code: 400,
        message: 'Faltando dados',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao cadastrar os dados. ${error}`,
    });
  }
};

controller.updateUser = async (req, res) => {
  const updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    restaurant: req.body.restaurant,
  };

  const where = {
    where: {
      id: req.params.uid,
    },
  };
  try {
    await models.Users.update(updatedUser, where);
    const user = await models.Users.findOne(where);
    if (user) {
      res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        restaurant: user.restaurant,
      });
    } else {
      res.status(404).json({
        code: 404,
        message: 'usuário não encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: `Erro ao atualizar os dados. ${error}`,
    });
  }
};

controller.deleteUser = async (req, res) => {
  const config = {
    attributes: {
      exclude: ['password'],
    },
    where: { id: req.params.uid },
  };

  try {
    const user = await models.Users.destroy(config);
    if (user) {
      res.status(200).json({
        message: 'usuário deletado com sucesso!',
      });
    } else {
      res.status(404).json({
        code: 404,
        message: 'nenhum usuário encontrado',
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
