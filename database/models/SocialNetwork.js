const { DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

const SocialNetwork = sequelize.define('SocialNetwork', {
    Id: DataTypes.INTEGER,
    texto: DataTypes.TEXT,
    icon: DataTypes.TEXT,
    link: DataTypes.TEXT
});

// cria tabela se não existir
const init = async () => {
    await SocialNetwork.sync();
};

init();

module.exports = SocialNetwork;