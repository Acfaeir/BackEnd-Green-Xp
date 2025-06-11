const Recompensa = require('../models/Recompensa');

exports.listarRecompensas = async (req, res) => {
  try {
    // Busca todas as recompensas cadastradas
    let recompensas = await Recompensa.findAll();

    // Se não houver nenhuma recompensa, insere as padrão
    if (recompensas.length === 0) {
      await Recompensa.bulkCreate([
        {
          descricao: '10% de desconto no veterinário',
          valor_pontos: 100
        },
        {
          descricao: '5 horas complementares na faculdade',
          valor_pontos: 150
        }
      ]);

      // Recarrega a lista com as recompensas recém-inseridas
      recompensas = await Recompensa.findAll();
    }

    // Retorna as recompensas para o frontend
    res.json(recompensas);
  } catch (err) {
    // Erro ao acessar o banco
    res.status(500).json({ erro: 'Erro ao buscar recompensas', detalhes: err.message });
  }
};

// POST /recompensas
exports.criarRecompensa = async (req, res) => {
  try {
    const { descricao, valor_pontos } = req.body;

    // Valida se os campos foram enviados
    if (!descricao || !valor_pontos) {
      return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
    }

    // Cria a nova recompensa
    const nova = await Recompensa.create({ descricao, valor_pontos });

    // Retorna a recompensa criada com status 201
    res.status(201).json({
      mensagem: 'Recompensa criada com sucesso',
      recompensa: nova
    });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar recompensa', detalhes: err.message });
  }
};
