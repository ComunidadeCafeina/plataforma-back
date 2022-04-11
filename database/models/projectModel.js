const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Project = sequelize.define('project', {

    brandicon: { 
        type: DataTypes.STRING(50),
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

    restrict: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    },

    link: {
        type: DataTypes.STRING(150),
        allowNull: false
    }

});

// Cria tabela se não existir e, se existir, adequa ao modelo atualizado.
const init = async () => {
    await Project.sync({ force: true });
    console.log('A tabela project foi criada ou alterada.')
};

init();

module.exports = Project;