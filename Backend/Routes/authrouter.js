const { login } = require('../controller/logincontroller');
const { Signup } = require('../controller/signupcontroller');
const {  signupValidation, loginValidation } = require('../middlewares/validation');

const router=require('express').Router();
router.post('/signup',signupValidation,Signup);
router.post('/login',loginValidation,login);

module.exports=router;