const express = require("express");

const router = express.Router();
const { getProduct, getProducts, createProduct, deleteProduct, updateProduct } = require('../controllers/productController');

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.get('/', getProducts);

router.post('/', createProduct);

module.exports = router;