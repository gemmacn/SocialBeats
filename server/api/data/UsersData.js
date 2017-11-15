const UsersModel = require('./models/UsersModel')

// metodos CRUD de acceso a la bbdd...

class UsersData {
	listAllTheUsers() {
		return UsersModel.find().exec() // exec() devuelve una promise
	}
}

module.exports = UsersData