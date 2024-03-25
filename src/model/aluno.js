// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
const sala = require('./sala')
// Criando a tabela Sala
const aluno = database.define('Aluno', {
IDAluno: {
type: Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},

IDSala: {
    type: Sequelize.INTEGER
},

Nome: {
    type: Sequelize.STRING(100),
    allowNull: false
},

Idade: {
    type: Sequelize.INTEGER,
    allowNull: false
},

Sexo: {
    type: Sequelize.STRING(20),
    allowNull: false
},

Foto: {
    type: Sequelize.STRING(50),
    allowNull: false
}

});

aluno.belongsTo(sala,{
    constraint: true,
    foreignKey: 'IDSala'
});

// Exportando essa tabela
module.exports = aluno;