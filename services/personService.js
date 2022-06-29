const personModel = require('../model/personModel')

const getAll = async () => {
    const result = await personModel.getAll()
    if(!result) return []
    return result;
};

const getById = async (id) => {
    const result = await personModel.getById(id)
    if(!result) return []
    return result;
};

const add = async ({name, cartoon}) => {
    if(!name || !cartoon) return false;
    
    const result = await personModel.add(name,cartoon)
    return {id: result.insertedId, name, cartoon}
}

const update = async (id, name, cartoon) => {
    const result = await personModel.update(id, name, cartoon)
    if(result != 1) return []
    return result;
};

const exclude = async (id) => {
    const result = await personModel.exclude(id)
    if(!result) return []
    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude,
};

  