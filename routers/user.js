const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserbyId } = require('../controllers/user');
const validator = require('../middlewares/validator');
const { createUserSchema, paramsSchema } = require('../validations/user');

router.post('/user', validator.body(createUserSchema), createUser);
router.get('/users', getUsers);
router.get('/user/:id', validator.params(paramsSchema), getUserbyId);

module.exports = router;
