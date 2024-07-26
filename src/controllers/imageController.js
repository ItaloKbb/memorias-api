const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controlador para adicionar uma imagem
const postImage = async (req, res) => {
  const { imagem, data } = req.body;
  try {
    const memoria = await prisma.memorias.create({
      data: {
        imagem,
        data: new Date(data),
      },
    });
    res.status(201).json(memoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar imagem' });
  }
};

// Controlador para buscar imagem por data
const getImageByDate = async (req, res) => {
  const { data } = req.query;
  try {
    const memorias = await prisma.memorias.findMany({
      where: {
        data: new Date(data),
      },
    });
    res.status(200).json(memorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagens' });
  }
};

// Controlador para deletar imagem por ID e data
const deleteImage = async (req, res) => {
  const { id, data } = req.body;
  try {
    const memoria = await prisma.memorias.deleteMany({
      where: {
        id,
        data: new Date(data),
      },
    });
    res.status(200).json(memoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar imagem' });
  }
};

module.exports = {
  postImage,
  getImageByDate,
  deleteImage,
};