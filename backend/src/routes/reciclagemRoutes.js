// Importa o módulo Express
const express = require('express');
// Cria uma instância de roteador
const router = express.Router();

// Importa o controller que contém a lógica para reciclagens
const controller = require('../controllers/reciclagemController');

// POST /reciclagem/
// Registra uma nova ação de reciclagem no sistema
router.post('/', controller.registrarReciclagem);

// GET /reciclagem/:id_usuario
// Retorna o histórico de reciclagem de um usuário específico
router.get('/:id_usuario', controller.historicoUsuario);

// Exporta o roteador para uso no server.js
module.exports = router;
