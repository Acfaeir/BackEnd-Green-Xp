// Importa o Express e inicializa o roteador
const express = require('express');
const router = express.Router();

// Importa o controller com a lógica de usuários
const usuariosController = require('../controllers/usuariosController');

// POST /usuarios/registrar
// Cadastra um novo usuário no sistema
router.post('/registrar', usuariosController.registrarUsuario);

// POST /usuarios/login
// Realiza login do usuário com email e senha
router.post('/login', usuariosController.loginUsuario);

// GET /usuarios/
// Lista todos os usuários cadastrados (admin/para testes)
router.get('/', usuariosController.listarUsuarios);

// Exporta o roteador para uso no server.js
module.exports = router;
