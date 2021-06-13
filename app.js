const express = require('express')
const bodyParser = require('body-parser')
const errorRoutes = require('./controllers/errorController');
const mongoConnect = require('./utils/database')
const admin = require('./routes/admin')
const shopRoute = require('./routes/shop')
const app =express()

app.use(async (req, res, next) => {
    await mongoConnect();
    next();
  });

  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(shopRoute)
app.use('/admin',admin)

app.use((err, req, res, next) => {
    console.log("ERROR: ", err);
    res.status(err.status || 500).json({ message: "Candy fail!", error : err.message });
  });
app.use(errorRoutes.errorPage)



app.listen(3000)


