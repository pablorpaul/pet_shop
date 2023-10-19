const jwt = require('jsonwebtoken');

const config = require('../config.js');

function authMiddleware(req, res, next) {
    const token = req.header('Authorization')

    if (!token){
        return res.status(401).json({message: 'Autorização negada'})
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).json({message: 'Autorização negada'})
        }
        req.session = decoded

        next()
    })
}

module.exports = authMiddleware