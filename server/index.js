require('dotenv').config()

const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', require('./route/projectsRoute'))
app.use('/', require('./route/socialNetworksRoute'))

app.listen(
    PORT, () => {
        console.log(`Aplicação está rodando na porta 3001.`);
    }
)