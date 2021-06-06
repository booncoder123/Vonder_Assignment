![von](von.png)
# API

### Assignment internship program with Vonder(P.Max & P.Tai)

- /candys GET  

- /admin/add POST

- /candys/:title GET

- /admin/delete/candy/:id DELETE

- /admin/update/candy/:id PUT/EDIT



```Javascript
// Admin
//adding candy to the database
router.post('/add',productController.postProducts)
//delete candy by id from the database
router.delete('/delete/candy/:id',productController.deleteProductById)
//edit candy
router.put('/update/candy/:id',productController.updateProducts)
// User
//getting all candy in the database
router.get('/candys',productController.getProducts)
//finding specific candy by title
router.get('/candys/:title',productController.findProducts )

```
##### Tools
- Nodejs
- MangoDb
- Express.js
- nodemon
- Mangoose


