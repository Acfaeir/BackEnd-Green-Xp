const sequelize = require('../src/db/database');

// Importar todos os models
require('../src/models/Usuario');
require('../src/models/Lixeira');
require('../src/models/Reciclagem');
require('../src/models/Recompensa');
require('../src/models/Resgate');
require('../src/models/Medalhas');
require('../src/models/Relatorio');

// Sincronizar as tabelas
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Banco de dados criado com sucesso.');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Erro ao criar banco:', err);
    process.exit(1);
  });
