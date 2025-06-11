// Importa o módulo Express e cria uma instância de roteador
const express = require('express');
const router = express.Router();

// Importa o controller que gerencia a lógica do resgate de recompensas
const controller = require('../controllers/resgateController');

// POST /resgates/
// Permite que um usuário resgate uma recompensa, descontando seus pontos
router.post('/', controller.resgatarRecompensa);

// Exporta o roteador para uso no server.js
module.exports = router;
