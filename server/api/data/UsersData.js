const UsersModel = require('./models/UsersModel')

// metodos CRUD de acceso a la bbdd...

class UsersData {
	listAllTheUsers() {
		return UsersModel.find().exec() // exec() devuelve una promise
	}

	retrieveUserById(userId){
		return UsersModel.findOne({_id:userId}).exec()
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

	setProfile(completedUser){
		const usersModel = new UsersModel(completedUser)
		return usersModel.save()
	}


	putlogInInfo(username, password, collaborations) {
		const collaboration ={
		 	festival: collaborations[0].festival, //collaborations es un array que retorna del local storage
		 	project: collaborations[0].project,
		 	projectId: collaborations[0].projectId,
		 	dateDay: collaborations[0].dateDay,
		 	dateHours: collaborations[0].dateHours,
		 	status: 'PENDING'
		 }
		return UsersModel.find()
			  .then((infoUser) => {
			  	// infoUser.map((user) => {// com que em torna tots els users faig un map y de cada un vaig comparant amb la info del logIn
			  	// 	if(user.username.trim() == username.trim() && user.password == password){//.trim() treu els espais buits del login input
			  	// 		const collaboration ={
						// 	festival: collaborations[0].festival,// collaborations es un array que retorna del local storage
						// 	project: collaborations[0].project,
						// 	projectId: collaborations[0].projectId,
						// 	dateDay: collaborations[0].dateDay,
						// 	dateHours: collaborations[0].dateHours,
						// 	status: 'PENDING'
						// }
			  	// 		return UsersModel.findOneAndUpdate({_id:user._id}, {$push:{collaborations:collaboration}}).exec()
			  	// 	} else {
			  	// 		console.log('error login')
			  	// 		return false
			  	// 	} 
			  	// })

			  	const user = infoUser.filter(user => (user.username.trim() == username.trim() && user.password == password))
			  	console.log(user)
			  	if (user.length) {
			  		return UsersModel.findOneAndUpdate({_id:user[0]._id}, {$push:{collaborations:collaboration}}).exec()
			  	} else { 
			  		console.log('error login')
			  		return false
			  	}
		})
	}
}

module.exports = UsersData


