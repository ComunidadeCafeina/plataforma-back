require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const projectsRoutes = require('./route/projectsRoute');
// const socialNetworksRoutes = require('./route/socialNetworksRoute');
const routes = require("./route/projectsRoute");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// app.use('/', socialNetworksRoutes);

//error handling
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === "production")
      res.status(500).json({ error: err });
    else return next(err);
  });

app.listen(
    PORT, () => {
        console.log(`Aplicação está rodando na porta 3001.`);
    }
);