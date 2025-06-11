// Importa a classe Sequelize do pacote ORM Sequelize
const { Sequelize } = require('sequelize');

// Cria uma instância de conexão com o banco SQLite
// O banco será salvo no caminho ./banco/greenxp.sqlite
const sequelize = new Sequelize({
  dialect: 'sqlite',            // Define o tipo de banco (SQLite)
  storage: './banco/greenxp.sqlite' // Caminho do arquivo físico do banco de dados
});

// Exporta a instância de conexão para ser usada nos models
module.exports = sequelize;
