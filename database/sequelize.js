const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
})

// check connection (optional)
sequelize
    .authenticate()
    .then(() => console.log('Conexão estabelecida com sucesso!'))
    .catch((err) => console.error('Conexão negada: ', err))

module.exports = sequelize