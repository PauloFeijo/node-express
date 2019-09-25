const app = require('express')()
const bodyParser = require('body-parser')

app.use(filter())
app.use(bodyParser.json())

function filter() {
    return (req, res, next) => {
        console.log('Antes de tudo o filter')
        next()
    }
}

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend!')
})

app.post('/post/:v', (req, res, next) => {
    console.log('Nome: ' + req.body.nome)
    next()
})

app.post('/post/:v', (req, res, next) => {
    console.log('Sobrenome: ' + req.body.sobrenome)
    res.status(200).send('Nome: ' + req.body.nome + ' Sobrenome: ' + req.body.sobrenome)
    console.log('Json: ' + JSON.stringify(req.body))
    next()
})

app.listen(3000, () => {
    console.log('Servidor ativo porta 3000')
})
