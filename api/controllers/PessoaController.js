const database = require('../models');

class PessoaController {
  // listagem de pessoas
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // listagem de uma única pessoa
  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // adiciona uma nova pessoa
  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // atualizar dados de uma pessoa
  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // deletar uma pessoa
  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).send(`Pessoa referente ao id ${id} deletado.`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // restaura uma pessoa
  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} restaurado` });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // pega uma matricula
  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await database.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // cria uma matricula
  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // atualiza uma matricula
  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfosMatricula = req.body;
    try {
      const matriculaAtualizada = await database.Matriculas.update(
        novasInfosMatricula,
        {
          where: { estudante_id: Number(estudanteId), id: Number(matriculaId) },
        }
      );
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // Apaga uma matricula
  static async apagaMatricula(req, res) {
    const { matriculaId } = req.params;
    try {
      const matriculaApagada = await database.Matriculas.destroy({
        where: { id: Number(matriculaId) },
      });
      return res.status(200).json(matriculaApagada);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  // Restaura uma matricula
  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.restore({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(`matricula ${matriculaId} restaurada`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = PessoaController;
