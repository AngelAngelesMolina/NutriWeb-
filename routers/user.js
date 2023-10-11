const express = require("express");
const router = express.Router();
const { createUser, getUsers, getUserbyId} = require("../controllers/user");
const validator = require('../middlewares/validator');
const {createUserSchema, paramsSchema} = require('../validations/user')


router.post("/users", validator.body(createUserSchema), createUser);
router.get('/users', validator.body(createUserSchema), getUsers)
router.get("/users/:id", validator.params(paramsSchema), validator.body(createUserSchema), getUserbyId);

module.exports = router;