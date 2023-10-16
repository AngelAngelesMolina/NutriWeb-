const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './ProjectDB.db'
// })

const sequelize =
	process.env.NODE_ENV === "test"
		? new Sequelize("sqlite::memory:")
		: new Sequelize({
            dialect: 'sqlite',
            storage: './ProjectDB.db'
        });

exports.sequelize = sequelize;

exports.connect = async function () {
    try {
        await sequelize.authenticate();
        console.log('> Conectado a la base de datos')

    } catch (e) {
        console.error('> Error, no se puede conectar la base de datos');
        console.error(e);
    }
}

exports.sync = async function () {
    try {
        await sequelize.sync({ force: false });
        console.log('> Base de datos actualizada');
    } catch (e) {
        console.error('> Error, no se puede actualizar la base de datos');
        console.error(e);
    }
}
