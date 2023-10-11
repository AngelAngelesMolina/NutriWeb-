const { connect, sync } = require('./models/sequelize');

const User = require('./models/user');                   //Usuario
const PesoEntries = require('./models/pesoEntries');     //Actualizaciones sobre su peso
const Especialista = require('./models/especialista');
const Receta = require('./models/receta');



exports.initDatabase = async function () {

    // Un usuario crea muchas actualizaciones sobre su peso
    // User.hasMany(PesoEntries);
    // PesoEntries.belongsTo(User);

    // User.hasOne(Especialista);
    // Especialista.belongsTo(User);

    // Especialista.hasMany(User);
    // User.belongsTo(Especialista);

    // User.hasMany(Receta);
    // Receta.belongsTo(User);

    await connect();
    await sync(); // <---Peligrosa
};