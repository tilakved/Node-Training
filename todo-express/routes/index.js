const router = require("express").Router();
const indexController = require("../controller/index.controller")

router.get('/', indexController.getHomePage)
router.get('/lists', indexController.getLists)
router.get('/list/:id', indexController.getList)
router.delete('/list-delete/:id', indexController.deleteList)
router.post('/update-list/:id', indexController.updateList)

module.exports = router