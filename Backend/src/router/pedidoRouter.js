const {Router} = require('express');
const pedidoController = require('../controllers/pedidoController');
const { validatePedido, validatePedidoId } = require('../middlewares/ValidatePedido');
const router = Router();


router.post('/', validatePedido, pedidoController.create);

router.put('/:id', validatePedido, validatePedidoId, pedidoController.update);

router.delete('/:id', validatePedidoId, pedidoController.delete);

router.get('/:id', validatePedidoId, pedidoController.getOne);

router.get('/', pedidoController.getAll);


module.exports = router;