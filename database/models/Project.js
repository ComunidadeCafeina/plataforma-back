const { DataTypes } = require('sequelize');

const sequelize = require('../sequelize');

const Project = sequelize.define('projectTESTE', {
    brandicon: DataTypes.STRING(50),
    title: DataTypes.STRING(50),
    description: DataTypes.STRING(200),
    restrict: DataTypes.BOOLEAN,
    link: DataTypes.STRING(150)
});

// cria tabela se não existir
const init = async () => {
    await Project.sync();
};

init();

module.exports = Project;