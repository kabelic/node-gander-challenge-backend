const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sum = require('./sum')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('', (req, res) => {
    res.send('Hello From backend!!')
})

app.post('/addition', (req, res) => {
    const firstNumber = req.body.firstNumber
    const secondNumber = req.body.secondNumber
    const getSum = sum(parseInt(firstNumber), parseInt(secondNumber)) 

    res.send({
        sum: getSum
    })
})

app.listen(3001, () => {
    console.log('Server is up on port 3001')
})