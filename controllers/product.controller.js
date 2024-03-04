const db = require("../models");

const Product = db.products;
const Review = db.reviews;

// Create and Save a new Product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

// get all products
const getAllProducts = async (req, res) => {
  const products = await Product.findAll({});
  res.status(200).send(products);
};

// get product by id
const getProductById = async (req, res) => {
  let id = req.params.id;
  const product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// delete a product
const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await Product.destroy({
    where: { id: id },
  });

  res.status(200).send("Product deleted successfully");
};

// get published products
const getPublishedProducts = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });

  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getPublishedProducts,
};
