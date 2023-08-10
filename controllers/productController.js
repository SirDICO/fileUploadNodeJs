const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json( products );
};
const getSingleProduct = async (req, res) => {

  const {id: productID} = req.params
  const product = await Product.findOne({_id:productID})
 
  if(!product){
     return next(createCustomError(`No Product with id : ${product}`, 404));
  
  }
  res.status(StatusCodes.OK).json(product );
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
