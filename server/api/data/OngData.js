const OngModel = require('./models/OngModel')

// metodos CRUD de acceso a la bbdd...

class OngData {
	listAllTheProjects(ongId) {
		return OngModel.find({_id:ongId}).exec() // exec() devuelve una promise
	}
}

module.exports = OngData