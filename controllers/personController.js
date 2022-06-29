const personService = require('../services/personService')
const httpStatus = require('../helpers/httpStatusCode')

const getAll = async (req, res) => {
    try {
      const results = await personService.getAll();
      if (!results) {
       return res.status(httpStatus.NOT_FOUND).json({ message: 'Não há elementos :(' });
     }
      res.status(httpStatus.OK).json(results);
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
    }
}

const getById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await personService.getById(id);
      if (!result || result.length < 1) {
       return res.status(httpStatus.NOT_FOUND).json({ message: 'person não encontrada :(' });
      }
      res.status(httpStatus.OK).json(result);
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).send('Erro ao tentar realizar operação');
    }
}

const add = async (req, res) => {
    try {
      const { name, cartoon } = req.body;
      const result = await personService.add(name, cartoon);
      
      if (!result) {
        return res.status(400).send("Dados inválidos");
      }
      res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).send('Erro ao tentar realizar operação');
    }
}

const update = async (req, res) => {
    try {
      const { name, cartoon } = req.body;
      const { id } = req.params;
  
      const result = await personService.update(id, name, cartoon);

    if (result.length === 0) {
       return res.status(httpStatus.NOT_FOUND).json({ message: 'person não encontrada :(' });
    }
     return res.status(httpStatus.OK).json({ message: 'person atualizada com sucesso' });
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
    }
}

const exclude = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await personService.exclude(id); 

      if (result === null || result.length < 1) {
       return res.status(httpStatus.NOT_FOUND).json({ message: 'person não encontrada :(' });
      }
      return res.status(httpStatus.OK).json({ message: 'person excluída com sucesso' });
    } catch (err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER).json({ message: 'Erro ao tentar realizar operação' });
    }
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude,
};