const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');


const SocialNetwork = sequelize.define('socialNetwork', {

    text: { 
        type: DataTypes.STRING(50),
        allowNull: false
    },

    icon: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    link: {
        type: DataTypes.STRING(50),
        allowNull: false
    }

});

// Cria tabela se não existir e, se existir, adequa ao modelo atualizado.
const init = async () => {
    await SocialNetwork.sync({ force: true });
    console.log('A tabela socialNetwork foi criada ou alterada.')
};

init();

module.exports = SocialNetwork;