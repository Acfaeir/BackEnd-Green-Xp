const Reciclagem = require('../models/Reciclagem');
const Usuario = require('../models/Usuario');

exports.registrarReciclagem = async (req, res) => {
  try {
    const { id_usuario, id_lixeira, tipo_residuo, quantidade } = req.body;

    const pontosPorItem = 10; // Pontos fixos por item reciclado
    const pontosGerados = (quantidade || 1) * pontosPorItem;

    // Cria o registro de reciclagem no banco
    const novaReciclagem = await Reciclagem.create({
      id_usuario,
      id_lixeira,
      tipo_residuo,
      quantidade,
      pontos_gerados: pontosGerados
    });

    // Atualiza a pontuação acumulada do usuário
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    usuario.pontos += pontosGerados;
    await usuario.save();

    // Retorna os pontos ganhos e total acumulado
    res.status(201).json({
      mensagem: 'Reciclagem registrada com sucesso',
      pontos_recebidos: pontosGerados,
      pontos_totais: usuario.pontos
    });

  } catch (err) {
    res.status(500).json({ erro: 'Erro ao registrar reciclagem', detalhes: err.message });
  }
};

exports.historicoUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;

    // Busca todas as reciclagens feitas por esse usuário, ordenadas por data
    const historico = await Reciclagem.findAll({
      where: { id_usuario },
      order: [['data_hora', 'DESC']]
    });

    res.json(historico);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar histórico', detalhes: err.message });
  }
};