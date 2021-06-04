const express = require('express')
const bodyParser = require('body-parser')
const errorRoutes = require('./controllers/errorController');
const mongoConnect = require('./utils/database')


const app =express()
app.use(errorRoutes.errorPage)

mongoConnect((client) => {
    console.log(client)
    app.listen(3000)
})
