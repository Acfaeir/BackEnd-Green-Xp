// Importa os tipos de dados do Sequelize
const { DataTypes } = require('sequelize');
// Conexão com o banco de dados
const sequelize = require('../db/database');

// Define o modelo 'Relatorio'
const Relatorio = sequelize.define('Relatorio', {
  // ID único do relatório
  id_relatorio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // ID do administrador que gerou esse relatório
  id_admin: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Data de geração do relatório
  data_relatorio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },

  // Descrição do conteúdo do relatório (texto livre ou JSON)
  descricao_dado: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'Relatorio', // Define o nome real da tabela
  timestamps: false       // Não usa os campos automáticos createdAt/updatedAt
});

// Exporta o modelo para uso em controllers ou queries diretas
module.exports = Relatorio;
