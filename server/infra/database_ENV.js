const pgp = require('pg-promise')();

const db = pgp({
    user: 'INSIRA SEU USER DO POSTGRES',
    password: 'INSIRA SUA SENHA NO POSTGRES',
    host: 'localhost',
    port: 5433,
    database: 'compiladoras'
})


module.exports = db