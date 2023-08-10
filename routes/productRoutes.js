const express = require('express');
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/uploadsController');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/:id').get(getSingleProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
