const {Router} = require('express');
const adminController = require('../controllers/adminController');
const { validateAdmin, validateAdminId } = require('../middlewares/ValidateAdmin');
const router = Router();


router.post('/', validateAdmin, adminController.create);

router.delete('/:id', validateAdminId, adminController.delete);

module.exports = router;