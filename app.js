const express = require('express')
const bodyParser = require('body-parser')
const errorRoutes = require('./controllers/errorController');
const mongoConnect = require('./utils/database')
const admin = require('./routes/admin')
const app =express()
const shopRoute = require('./routes/shop')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(shopRoute)
app.use('/admin',admin)
app.use(errorRoutes.errorPage)
mongoConnect()
app.listen(3000)


