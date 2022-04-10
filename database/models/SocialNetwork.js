const { DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

const SocialNetwork = sequelize.define('SocialNetworkTESTE', {
    text: DataTypes.STRING(50),
    icon: DataTypes.STRING(50),
    link: DataTypes.STRING(50)
});

// cria tabela se não existir
const init = async () => {
    await SocialNetwork.sync();
};

init();

module.exports = SocialNetwork;