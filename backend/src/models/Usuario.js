// Importa os tipos do Sequelize
const { DataTypes } = require('sequelize');
// Importa a conexão com o banco
const sequelize = require('../db/database');

// Define o modelo Usuario
const Usuario = sequelize.define('Usuario', {
  // ID único do usuário
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // Nome completo do usuário
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Email usado para login (deve ser único)
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  // Senha criptografada (hash com bcrypt)
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Pontos acumulados por ações de reciclagem
  pontos: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  // Indica se o usuário é um administrador do sistema
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'Usuario',   // Define o nome da tabela real no banco
  timestamps: false       // Desativa createdAt e updatedAt
});

// Exporta o modelo
module.exports = Usuario;
