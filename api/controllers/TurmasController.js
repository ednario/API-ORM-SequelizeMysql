const database = require('../models');

class TurmasController {
  // listagem de turmas
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // lista um unico nivel
  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const umaTurma = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // cria uma turma
  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const turmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(turmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // atualiza turma
  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      const turmaAtualizada = await database.Turmas.update(novasInfos, {
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // deleta uma turma
  static async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).send(`Turma referente ao id ${id} deletado.`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmasController;