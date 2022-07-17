const database = require('../models');

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // listagem de um unico nivel
  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umNivel);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // adiciona um novo nivel
  static async criaNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel);
      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // atualiza um nivel
  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const novoNivel = req.body;
    try {
      await database.Niveis.update(novoNivel, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // deleta um nível
  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).send(`Nivel referente ao id ${id} deletado.`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // Restaura um nivel apagado
  static async restauraNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.restore({
        where: { id: Number(id) },
      });
      return res.status(200).json(`Nivel ${id} restaurado.`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = NivelController;
