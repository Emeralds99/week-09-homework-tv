const showdata = require('./showdata')

const express = require('express')
const { response, request } = require('express')
const app = express()
const router = express.Router()

app.use(router)

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
    const season = showdata.seasons.find((season) => season.number === parseInt(request.params.number))

    return response.render('season', { season })
})

app.all('*', (reuest, response) => {
    response.sendStatus(404)
})

app.listen(3033, () => {
    console.log('Listening on port 3033...')
})