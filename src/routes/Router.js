const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// get Product
router.get('/',productController.getProduct);
// create POST
router.post('create/product',productController.createProduct);
// edit product
router.put('edit/product',productController.editProduct)
// delete product
router.delete('/product',productController.deleteProduct)

module.exports = router;