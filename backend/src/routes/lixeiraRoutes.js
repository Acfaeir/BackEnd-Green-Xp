// Importa o Express e inicializa o roteador
const express = require('express');
const router = express.Router();

// Importa o controller responsável pela lógica das lixeiras
const controller = require('../controllers/lixeiraController');

// POST /lixeira/
// Cadastra uma nova lixeira no sistema
router.post('/', controller.criarLixeira);

// GET /lixeira/qr/:codigo
// Consulta uma lixeira com base no código QR escaneado
router.get('/qr/:codigo', controller.buscarPorQRCode);

// Exporta o roteador para uso no server.js
module.exports = router;
