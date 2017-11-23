const UsersModel = require('./models/UsersModel')

// metodos CRUD de acceso a la bbdd...

class UsersData {
	listAllTheUsers() {
		return UsersModel.find().exec() // exec() devuelve una promise
	}

	retrieveUserById(userId){
		return UsersModel.findById(userId).exec()
	}

	subscribeUserToFestivalCollaboration(userId, festivalId, projectId, dateDay, dateHours) {
	const collaboration ={
		festival:festivalId,
		project: projectId,
		date: dateDay,
		hours: dateHours,
		status: 'PENDING'
	}
	return UsersModel.findOneAndUpdate({_id:userId},
	{$push:{collaborations:collaboration}}).exec()
}
}

module.exports = UsersData


