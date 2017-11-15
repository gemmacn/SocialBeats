const ProjectsModel = require('./models/ProjectsModel')

// metodos CRUD de acceso a la bbdd...

class OngData {
	listAllTheProjects() {
		return ProjectsModel.find().exec() // exec() devuelve una promise
	}
}

module.exports = OngData