const model = require('../../models')
const users = model.users
const Op = model.Sequelize.Op
const service = {}

service.storeUser = async (data) => {
    let payloads = {
        nim: data.nim,
        nama: data.nama,
        alamat: data.alamat,
        no_telp: data.no_telp,
        jurusan: data.jurusan,
        semester: data.semester
    }

    let result = await users.create(payloads)

    return result
}

service.getAllUser = async() => {
    let result = await users.findAll();

    return result
}

service.getSpecifiedUser = async(id) => {
    let result =  await users.findOne({
        where: {
            id: id
        }
    })

    return result
}

service.updateUser = async (id, data) => {
    let payloads = {
        nim: data.nim,
        nama: data.nama,
        alamat: data.alamat,
        no_telp: data.no_telp,
        jurusan: data.jurusan,
        semester: data.semester
    }

    let result = await users.update(payloads, {
        where: {
            id: id
        }
    })

    return result
}

service.deleteUser = async(id) => {
    let result = await model.users.destroy({
        where: {
            id: id
        }
    })

    return result
}

module.exports = service