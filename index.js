require("dotenv").config();

const { initDatabase } = require('./db');
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const pesoEntriesRouter = require("./routers/pesoEntries");
const recetaRouter = require("./routers/recetas");
const authRouter = require("./routers/auth")

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

// Rutas
app.use(userRouter);
app.use(pesoEntriesRouter);
app.use(recetaRouter);
app.use(authRouter);

//MANEJO DE ERRORES 
app.use(validationError);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function (err) {
	if (err) console.log(err);
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});

