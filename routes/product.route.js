const productController = require("../controllers/product.controller");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/published", productController.getPublishedProducts);
router.get("/:id", productController.getProductById);
router.post("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
