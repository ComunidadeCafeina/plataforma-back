const { DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

const Project = sequelize.define('projectTESTE', {
    // Id: DataTypes.INTEGER,
    brandicon: DataTypes.TEXT,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    restrict: DataTypes.BOOLEAN,
    link: DataTypes.TEXT
});

// cria tabela se não existir
const init = async () => {
    await Project.sync();
};

init();

module.exports = Project;