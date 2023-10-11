const express = require("express");
const router = express.Router();

const {
	getEntries,
	createEntry,
	getEntry,
	deleteEntry,
	updateEntry,
} = require("../controllers/pesoEntries");

const validator = require('../middlewares/validator');
const jwtValidator = require('../middlewares/jwt');
const { createEntrySchema, updateEntrySchema, paramsSchema, } = require('../validations/pesoEntries')

router.get("/entries", validator.body(createEntrySchema), getEntries);
router.get("/entries/:id", validator.params(paramsSchema), validator.body(updateEntrySchema), getEntry);
router.post("/entry", jwtValidator, validator.body(createEntrySchema), createEntry);
router.put("/entries/:id", jwtValidator, validator.params(paramsSchema), validator.body(updateEntrySchema), updateEntry);
router.delete("/entries/:id", jwtValidator, validator.params(paramsSchema), deleteEntry);

module.exports = router;