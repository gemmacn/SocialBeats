const FestivalsModel = require('./models/FestivalsModel')

// metodos CRUD de acceso a la bbdd...

class FestData {
	listAllTheFestivals(festivalid) {
		return FestivalsModel.findById(festivalid)
		.populate('projectes')
		.exec()
		 // exec() devuelve una promise
		}
}

module.exports = FestData