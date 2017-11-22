const UsersModel = require('./models/UsersModel')

// metodos CRUD de acceso a la bbdd...

class UsersData {
	listAllTheUsers() {
		return UsersModel.find().exec() // exec() devuelve una promise
	}

	retrieveUserById(userId){
		return UserModel.findById(userId).exec()
	}

	subscribeUserToFestivalCollaboration(userId, festivalId, projectId, dateDay, dateHours) {
		// TODO findOneAndUpdate
	}
}

module.exports = UsersData