module.exports = app => {
    const controller = require('../controllers')
    const express = require('express')
    const router = express.Router()

    router.get('/users', controller.users.getAllUsers)
    router.get('/users/:id/show', controller.users.getSpecifiedUser)
    router.post('/users/store', controller.users.storeUsers)
    router.patch('/users/:id/update', controller.users.updateUsers)
    router.delete('/users/:id/destroy', controller.users.deleteUsers)

    app.use('/api', router)
}