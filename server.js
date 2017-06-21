const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const inspect = require('eyes').inspector({maxLength: false})

const app = module.exports = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/primer', (req, res) => {
    axios({
        method: 'get',
        url: `http://www.langbench.com:8080/Web2Sentence/Load?format=text%2Fhtml&src=${encodeURIComponent(req.query.url)}`
    })
    .then(response => {
        axios({
            method: 'get',
            url: `http://www.langbench.com:8080/Source2Question/proposeQuestions?src=${encodeURIComponent(req.query.url)}`
        })
        .then(response => res.sendStatus(200))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


app.listen(4005, () => {
    console.log("App is listening on port 4005")
})
