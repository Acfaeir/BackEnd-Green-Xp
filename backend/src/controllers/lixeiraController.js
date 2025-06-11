const Lixeira = require('../models/Lixeira');

// Buscar lixeira pelo QR Code
exports.buscarPorQRCode = async (req, res) => {
  try {
    const { codigo } = req.params; // Extrai o código QR da URL

    // Busca a lixeira com esse QR code no banco
    const lixeira = await Lixeira.findOne({ where: { qr_code: codigo } });

    // Se não encontrar, responde com erro 404
    if (!lixeira) {
      return res.status(404).json({ erro: 'Lixeira não encontrada' });
    }

    // Se encontrar, retorna os dados da lixeira
    res.json(lixeira);
  } catch (err) {
    // Se der erro de conexão ou sistema, retorna erro 500
    res.status(500).json({ erro: 'Erro ao buscar lixeira', detalhes: err.message });
  }
};

// Criar nova lixeira (sem localização)
exports.criarLixeira = async (req, res) => {
  try {
    const { residuos_aceitos, qr_code } = req.body; // Dados da lixeira

    // Verifica se já existe uma lixeira com esse QR code
    const existente = await Lixeira.findOne({ where: { qr_code } });
    if (existente) {
      return res.status(400).json({ erro: 'QR Code já cadastrado' });
    }

    // Cria nova lixeira no banco
    const nova = await Lixeira.create({
      residuos_aceitos,
      qr_code
    });

    // Responde com status 201 e dados da nova lixeira
    res.status(201).json({
      mensagem: 'Lixeira cadastrada com sucesso',
      lixeira: nova
    });
  } catch (err) {
    // Erro geral ao criar
    res.status(500).json({ erro: 'Erro ao criar lixeira', detalhes: err.message });
  }
};
