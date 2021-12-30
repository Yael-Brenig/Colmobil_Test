const router = require('express').Router()
const crud = require('../controllers/crud')

router.post('/createUser/:name', crud.createUser)
router.put('/updateUser/:id', crud.updateUser)
router.delete('/deleteUser/:password', crud.deleteUser)
router.get('/getAllUsers', crud.getAllUsers)
router.get('/checkUser/:username/:password', crud.checkUser)
module.exports = router