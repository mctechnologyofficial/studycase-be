const usersController = {}
const service = require('./service')

usersController.storeUsers = async (req, res) => {
    try {
        let result = await service.storeUser(req.body)

        res.status(200).send({
            status: 200,
            message: "User berhasil ditambahkan",
            users: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 500,
            message: error.message || "Terjadi kesalahan."
        })
    }
}
usersController.getAllUsers = async(req, res) => {
    try {
        let result = await service.getAllUser()

        res.status(200).send({
            status: 200,
            users: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 500,
            message: error.message || "Terjadi kesalahan."
        })
    }
}

usersController.getSpecifiedUser = async(req, res) => {
    try {
        let result = await service.getSpecifiedUser(req.params.id)

        res.status(200).send({
            status: 200,
            users: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 500,
            message: error.message || "Terjadi kesalahan."
        })
    }
}

usersController.updateUsers = async(req, res) => {
    try {
        let result = await service.updateUser(req.params.id, req.body)

        res.status(200).send({
            status: 200,
            message: "User berhasil diupdate.",
            users: result
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 500,
            message: error.message || "Terjadi kesalahan."
        })
    }
}

usersController.deleteUsers = async(req, res) => {
    try {
        let result = await service.deleteUser(req.params.id)

        res.status(200).send({
            status: 200,
            message: "User berhasil dihapus."
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: 500,
            message: error.message || "Terjadi kesalahan."
        })
    }
}

module.exports = usersController