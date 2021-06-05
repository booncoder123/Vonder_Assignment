const express = require('express')
const router = express.Router();
const  productController = require('../controllers/productController')

router.post('/add',productController.postProducts)
router.delete('/delete/candy/:id',productController.deleteProductById)
router.put('/update/candy/:id',productController.updateProducts)
module.exports = router