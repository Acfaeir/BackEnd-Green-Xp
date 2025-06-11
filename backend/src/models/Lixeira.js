// Importa os tipos de dados do Sequelize
const { DataTypes } = require('sequelize');
// Importa a instância de conexão com o banco
const sequelize = require('../db/database');

// Define o modelo 'Lixeira' que representa a tabela no banco
const Lixeira = sequelize.define('Lixeira', {
  // Chave primária autoincrementável
  id_lixeira: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  /*
   * Campo opcional que foi removido:
   * localizacao: STRING
   * Caso queira armazenar geolocalização ou endereço no futuro, pode reativar.
   */

  // Tipo de resíduos aceitos por essa lixeira (ex: "Plástico, Papel")
  residuos_aceitos: {
    type: DataTypes.STRING
  },

  // QR Code único associado à lixeira física (usado para escaneamento)
  qr_code: {
    type: DataTypes.STRING,
    unique: true // Garante que não haverá dois QR Codes iguais
  }
}, {
  tableName: 'Lixeira',  // Nome da tabela no banco
  timestamps: false       // Desativa os campos automáticos createdAt/updatedAt
});

// Exporta o modelo para ser utilizado nos controllers
module.exports = Lixeira;