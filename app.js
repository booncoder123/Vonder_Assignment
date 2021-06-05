const express = require('express')
const bodyParser = require('body-parser')
const errorRoutes = require('./controllers/errorController');
const mongoConnect = require('./utils/database')
const admin = require('./routes/admin')
const shopRoute = require('./routes/shop')
const app =express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(shopRoute)
app.use('/admin',admin)
app.use(errorRoutes.errorPage)



mongoConnect()
app.listen(3000)


