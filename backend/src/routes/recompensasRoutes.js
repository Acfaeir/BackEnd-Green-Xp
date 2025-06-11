// Importa o módulo Express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa o controller com as regras de negócio de recompensa
const controller = require('../controllers/recompensaController');

// GET /recompensas/
// Retorna todas as recompensas disponíveis no sistema
router.get('/', controller.listarRecompensas);

// POST /recompensas/
// Cadastra uma nova recompensa manualmente
router.post('/', controller.criarRecompensa);

// Exporta o roteador para uso no server.js
module.exports = router;
