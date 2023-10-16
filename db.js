const { connect, sync } = require('./models/sequelize');

const User = require('./models/user');                   //Usuario
const PesoEntries = require('./models/pesoEntries');     //Actualizaciones sobre su peso
const Receta = require('./models/receta');



exports.initDatabase = async function () {

    // Un usuario crea muchas actualizaciones sobre su peso
    User.hasMany(PesoEntries);
    PesoEntries.belongsTo(User);

    // User.hasMany(Receta);
    // Receta.hasMany(User);

    await connect();
    await sync(); // <---Peligrosa
};