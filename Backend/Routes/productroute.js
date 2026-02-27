const { getAllProducts } = require('../controller/productcontroller');

const router=require('express').Router();
router.get('/',getAllProducts);

module.exports=router;