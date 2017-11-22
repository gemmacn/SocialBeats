const FestivalsModel = require('./models/FestivalsModel')

// metodos CRUD de acceso a la bbdd...

class FestData {
	retrieveFestivalByName(festivalName) {
		return FestivalsModel.findOne({name: festivalName})
		.populate('projectes')
		.exec()
		 // exec() devuelve una promise
		}

	listAllFestivals(){
		return FestivalsModel.find()
		.populate('projectes')
		.exec()
		}

		deleteOneFestival(festivalId){
		return FestivalsModel.remove({_id:festivalId})
		.exec()
		}

}

module.exports = FestData