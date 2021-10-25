const { Router } = require('express');
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/users');

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:uid', getUserId);
usersRouter.post('/', createUser);
usersRouter.put('/:uid', updateUser);
usersRouter.delete('/:uid', deleteUser);

module.exports = usersRouter;
