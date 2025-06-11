// Importa o módulo Express
const express = require("express");
// Cria um roteador do Express
const router = express.Router();
// Importa o controller responsável pela lógica de negócios dos descartes
const DescarteController = require("../controllers/descartesController");

// GET /descarte/
// Lista todos os registros de descarte
router.get("/", DescarteController.listar);

// GET /descarte/usuario/:id_usuario
// Lista os descartes feitos por um usuário específico
router.get("/usuario/:id_usuario", DescarteController.buscarPorUsuario);

// POST /descarte/
// Cria um novo registro de descarte
router.post("/", DescarteController.inserir);

// Exporta o roteador para ser utilizado no server.js
module.exports = router;
