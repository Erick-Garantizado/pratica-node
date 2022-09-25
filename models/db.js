const Sequelize = require('sequelize')
const sequelize = new Sequelize('diarioTeste', 'erick2', 'qwe123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

/*

const Postagem = sequelize.define('postagens, {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    }
    email: {
        type: Sequelize.STRING
    }
})

*/