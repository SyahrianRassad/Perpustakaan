const { route } = require('express/lib/application');
const {
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete
   } = require('./anggota.controller');
const router = require('express').Router();
const {checkToken} = require('../../auth/token_validation')

router.post('/',checkToken, controllerAdd);
router.get('/id', controllerGetId);
router.get('/',controllerGet);
router.patch('/',checkToken,controllerUpdate)
router.delete('/',checkToken,controllerDelete)

module.exports = router