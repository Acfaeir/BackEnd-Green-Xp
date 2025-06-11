// Importa os tipos de dados do Sequelize
const { DataTypes } = require('sequelize');
// Importa a instância de conexão com o banco de dados
const sequelize = require('../db/database');

// Define o modelo 'Medalha' com seus respectivos campos
const Medalha = sequelize.define('Medalha', {
  // Chave primária única da medalha
  id_medalha: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // ID do usuário que recebeu a medalha (obrigatório)
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // ID da reciclagem relacionada, se aplicável
  id_reciclagem: {
    type: DataTypes.INTEGER
  },

  // Descrição da medalha ou motivo do prêmio (ex: "Primeira Reciclagem")
  detalhe_medalha: {
    type: DataTypes.STRING
  },

  // Pontos adicionais concedidos por essa medalha
  pontos_adicionados: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'Medalha',   // Define o nome real da tabela no banco
  timestamps: false       // Desativa os campos createdAt/updatedAt
});

// Exporta o model para uso em controllers e outras partes do app
module.exports = Medalha;
