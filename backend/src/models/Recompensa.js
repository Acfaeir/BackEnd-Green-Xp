// Importa os tipos do Sequelize
const { DataTypes } = require('sequelize');
// Importa a conexão com o banco
const sequelize = require('../db/database');

// Define o modelo 'Recompensa'
const Recompensa = sequelize.define('Recompensa', {
  // ID único da recompensa
  id_recompensa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // Descrição do benefício (ex: "10% de desconto", "5 horas complementares")
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Quantidade de pontos necessários para resgatar
  valor_pontos: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Recompensa', // Nome da tabela no banco
  timestamps: false        // Desativa campos createdAt e updatedAt
});

// Exporta o modelo para uso em controllers e rotas
module.exports = Recompensa;
