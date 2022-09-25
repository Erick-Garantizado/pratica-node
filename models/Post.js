const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post

// Método para criar a tabela 'postagens'
// obs.: usar apenas uma vez para criar a tabela.
//Post.sync({force: true})