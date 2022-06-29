const httpStatusCode = require('../helpers/httpStatusCode');

const validUser = {
    username: 'calaca',
    password: '12345'
};

const authMiddleware = (req, res, next) => {
    const {username, password} = req.headers
    const token = req.headers.authorization

    if (!token || token === undefined) return next({ code: httpStatusCode.UNAUTHORIZED, message: 'missing auth token' });

    if (!username || !password) {
        return res.status(httpStatusCode.UNAUTHORIZED).json({ message: 'Username or password can`t be blank!' });
    }

    if (username !== validUser.username || password !== validUser.password) {
        return res.status(httpStatusCode.UNAUTHORIZED).json({ message: 'Invalid credentials!' });
    }

    next()
}

module.exports = authMiddleware