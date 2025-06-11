// Importa os tipos de dados do Sequelize
const { DataTypes } = require('sequelize');
// Importa a conexão com o banco
const sequelize = require('../db/database');

// Define o modelo Resgate
const Resgate = sequelize.define('Resgate', {
  // ID único do resgate
  id_resgate: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // ID do usuário que fez o resgate
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // ID da recompensa resgatada
  id_recompensa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Data e hora do resgate
  data_resgate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Resgate',  // Nome real da tabela no banco
  timestamps: false      // Desativa os campos automáticos createdAt e updatedAt
});

// Exporta o modelo
module.exports = Resgate;
