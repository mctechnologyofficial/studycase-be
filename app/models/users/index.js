module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
        nim: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.TEXT('long')
        },
        no_telp: {
            type: Sequelize.TEXT
        },
        jurusan: {
            type: Sequelize.STRING
        },
        semester: {
            type: Sequelize.STRING
        }
    })

    return users
}