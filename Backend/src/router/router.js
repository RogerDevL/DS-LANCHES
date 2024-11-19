const {Router} = require('express')
const router = Router();
const adminRotas = require('./adminRouter');
const pedidoRotas = require('./pedidoRouter');
const adminController = require('../controllers/adminController');


router.use('/pedidos', pedidoRotas);

router.use('/admin/login', adminController.login);

router.use('/admin', adminRotas);

module.exports = router;