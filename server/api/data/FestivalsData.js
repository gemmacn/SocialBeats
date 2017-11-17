const FestivalsModel = require('./models/FestivalsModel')

// metodos CRUD de acceso a la bbdd...

class FestData {
	listOneFestival(festivalName) {
		return FestivalsModel.find({name: festivalName})
		.populate('projectes')
		.exec()
		 // exec() devuelve una promise
		}

	listAllFestivals(){
		return FestivalsModel.find()
		.populate('projectes')
		.exec()
		}

}

module.exports = FestData