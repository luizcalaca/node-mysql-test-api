module.exports = (status, message) => {
    const error = new Error(message);
    error.status = status;
  
    return error;
};

/* How to use in Service

const createException = require('./helpers/createException)

throw createException(404, 'Nada encontrado')
*/