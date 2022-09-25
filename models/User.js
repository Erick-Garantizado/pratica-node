const db = require('./db')

const User = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    nick: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.CHAR
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

// faltou o campo email

module.exports = User