const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const User = require('./models/User')
const app = express()
const porta = 3000

//config
    // Template engine
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoMethodsByDefault: true,
                allowProtoPropertiesByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars')
    // Body-parser
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.post('/authuser', (req, res) => {   // Pra onde é direcionado ao tentar login
        
    (async () => {
        const usuarios = await User.findAll({
            where: {
                nick: req.body.usuario,
                senha: req.body.senha
            }
        })
        if (usuarios == {}) {
            res.redirect('authUserError') 
        } else {
            res.redirect('areaUser/')
            // procurar como mandar os dados do usuario para a pagina acima
        }
        
    })()
    
    
})

app.post('/caduser', (req, res) => {
    let senha = req.body.senha
    let confsenha = req.body.confsenha
    
    if (senha == "" || confsenha == "") {
        res.send("Os campos senhas não podem ser vazios!")
    } else if (senha != confsenha) {
        res.send("As senhas não conferem")
    } else {
        User.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            nick: req.body.nick,
            sexo: req.body.sexo, 
            senha: req.body.senha
        }).then(() =>{
            res.redirect('/')
        }).catch(erro => {
            res.send("Houve um erro: "+erro)
        })
    }
})

app.listen(porta, () => {
    console.log(`Servidor rodando no link http://localhost:${porta}`)
})