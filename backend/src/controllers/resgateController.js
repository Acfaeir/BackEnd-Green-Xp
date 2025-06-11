const Usuario = require('../models/Usuario');
const Recompensa = require('../models/Recompensa');
const Resgate = require('../models/Resgate');

exports.resgatarRecompensa = async (req, res) => {
  try {
    const { id_usuario, id_recompensa } = req.body;

    // 1. Validação de entrada
    if (!id_usuario || !id_recompensa) {
      return res.status(400).json({ erro: 'Campos obrigatórios: id_usuario e id_recompensa' });
    }

    // 2. Busca o usuário e a recompensa
    const usuario = await Usuario.findByPk(id_usuario);
    const recompensa = await Recompensa.findByPk(id_recompensa);

    // 3. Verifica se ambos existem
    if (!usuario || !recompensa) {
      return res.status(404).json({ erro: 'Usuário ou recompensa não encontrada' });
    }

    // 4. Verifica se o usuário tem pontos suficientes
    if (usuario.pontos < recompensa.valor_pontos) {
      return res.status(400).json({ erro: 'Pontos insuficientes para resgatar a recompensa' });
    }

    // 5. Desconta os pontos do usuário
    usuario.pontos -= recompensa.valor_pontos;
    await usuario.save();

    // 6. Registra o resgate na tabela
    const novoResgate = await Resgate.create({
      id_usuario,
      id_recompensa
    });

    // 7. Retorna o sucesso com dados úteis
    res.status(201).json({
      mensagem: 'Recompensa resgatada com sucesso',
      pontos_restantes: usuario.pontos,
      resgate: novoResgate
    });

  } catch (err) {
    res.status(500).json({ erro: 'Erro ao resgatar recompensa', detalhes: err.message });
  }
};
