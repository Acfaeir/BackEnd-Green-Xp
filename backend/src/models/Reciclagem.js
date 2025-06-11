// Importa os tipos de dados do Sequelize
const { DataTypes } = require('sequelize');

// Conexão com o banco de dados
const sequelize = require('../db/database');

// Importa os modelos relacionados (embora não haja relacionamento explícito declarado aqui)
const Usuario = require('./Usuario');
const Lixeira = require('./Lixeira');

// Define o modelo Reciclagem
const Reciclagem = sequelize.define('Reciclagem', {
  // ID único do registro de reciclagem
  id_reciclagem: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // ID do usuário que realizou a reciclagem
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // ID da lixeira onde o descarte foi feito
  id_lixeira: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  // Tipo de resíduo descartado (ex: plástico, papel, etc.)
  tipo_residuo: {
    type: DataTypes.STRING
  },

  // Quantidade descartada (número de itens, volume ou peso)
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },

  // Pontos atribuídos por essa ação de reciclagem
  pontos_gerados: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  // Data e hora do descarte
  data_hora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Reciclagem', // Nome da tabela no banco de dados
  timestamps: false         // Desativa campos automáticos createdAt/updatedAt
});

// Exporta o modelo
module.exports = Reciclagem;
