const express = require('express')
const app = express()

app.use('/', require('./route/projectsRoute'))
app.use('/', require('./route/socialNetworksRoute'))

app.listen(
    3001, () => {
        console.log(`Aplicação está rodando na porta 3001.`);
    }
)