const OngModel = require('./models/OngModel')

// metodos CRUD de acceso a la bbdd...

class OngData {
	listOneOng(ongId) {
		return OngModel.find({_id:ongId}).exec() // exec() devuelve una promise
	}

	deleteOneOng(ongId){
		return OngModel.remove({_id:ongId}).exec() 
	}

	listAllTheOng(){
		return OngModel.find().exec()
	}


}

module.exports = OngData