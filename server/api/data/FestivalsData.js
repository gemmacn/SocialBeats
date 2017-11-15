const FestivalsModel = require('./models/FestivalsModel')

// metodos CRUD de acceso a la bbdd...

class FestData {
	listAllTheFestivals() {
		return FestivalsModel.find().exec() // exec() devuelve una promise
	}
}

module.exports = FestData