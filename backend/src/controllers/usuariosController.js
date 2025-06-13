const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Registrar novo usuário
exports.registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // 1. Verifica se já existe email cadastrado
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ erro: 'Email já cadastrado' });
    }

    // 2. Criptografa a senha com bcrypt
    const hash = await bcrypt.hash(senha, 10);

    // 3. Cria e salva novo usuário
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hash
    });

    // 4. Retorna dados do novo usuário
    res.status(201).json({
      mensagem: 'Usuário registrado com sucesso',
      id: novoUsuario.id_usuario,
      nome: novoUsuario.nome,
      email: novoUsuario.email
    });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao registrar usuário', detalhes: erro.message });
  }
};


// Login de usuário
exports.loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;
      console.log('💡 Chegou um POST em /usuarios/login:', req.body);

    // 1. Busca o usuário pelo email
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    // 2. Compara senha enviada com a senha criptografada no banco
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    // 3. Retorna os dados do usuário logado
    res.json({
      mensagem: 'Login realizado com sucesso',
      id_usuario: usuario.id_usuario,
      nome: usuario.nome,
      email: usuario.email,
      pontos: usuario.pontos,
      is_admin: usuario.is_admin
    });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro no login', detalhes: erro.message });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    // Seleciona apenas os campos seguros e úteis
    const usuarios = await Usuario.findAll({
      attributes: ['id_usuario', 'nome', 'email', 'pontos', 'is_admin']
    });

    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar usuários', detalhes: err.message });
  }
};
