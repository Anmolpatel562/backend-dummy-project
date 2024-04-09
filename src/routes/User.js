const express = require("express");
const routes = express.Router();
const { getUser,createUser,updateUser,deleteUser } = require("../controllers/User");

routes.get('/users/get', getUser);

routes.post('/users/create', createUser)

routes.patch('/users/update/:id', updateUser)

routes.delete('/users/delete/:id', deleteUser);

module.exports = routes;
