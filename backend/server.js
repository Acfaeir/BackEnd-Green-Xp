// Importa o Express
const express = require('express');
const cors = require('cors');  
const app = express(); // Inicializa o servidor Express

// Importa os grupos de rotas organizados por funcionalidade
const usuariosRoutes = require('./src/routes/usuariosRoutes');        // Usuários: registrar, login, listar
const reciclagemRoutes = require('./src/routes/reciclagemRoutes');    // Reciclagem: registrar ação, histórico
const lixeiraRoutes = require("./src/routes/lixeiraRoutes");          // Lixeiras: cadastrar, buscar por QR
const resgateRoutes = require("./src/routes/resgatesRoutes");         // Resgates: resgatar recompensa
const recompensaRoutes = require("./src/routes/recompensasRoutes");   // Recompensas: listar/criar recompensas

// Middleware para permitir receber JSON no corpo das requisições
app.use(cors({ origin: '*' }));   
app.use(express.json());

// Registra os caminhos base para cada rota do sistema
app.use('/usuarios', usuariosRoutes);      // http://localhost:3000/usuarios
app.use('/reciclagem', reciclagemRoutes);  // http://localhost:3000/reciclagem
app.use('/lixeiras', lixeiraRoutes);       // http://localhost:3000/lixeiras
app.use('/resgates', resgateRoutes);       // http://localhost:3000/resgates
app.use('/recompensas', recompensaRoutes); // http://localhost:3000/recompensas

// Define a porta e inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
