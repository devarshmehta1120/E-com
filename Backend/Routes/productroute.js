const { getAllProducts, getProductById } = require('../controller/productcontroller');

const router=require('express').Router();
router.get('/',getAllProducts);
router.get('/:id', getProductById);

module.exports=router;