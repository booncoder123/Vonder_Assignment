const express = require('express')
const router = express.Router();
const  productController = require('../controllers/productController')

router.get('/candys',productController.getProducts)
module.exports = router