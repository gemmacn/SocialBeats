const UsersModel = require('./models/UsersModel')

// metodos CRUD de acceso a la bbdd...

class UsersData {
	listAllTheUsers() {
		return UsersModel.find().exec() // exec() devuelve una promise
	}
	retrieveOneUser(userId){
		return UserModel.find({_id:userId}).exec()
	}
}

module.exports = UsersData