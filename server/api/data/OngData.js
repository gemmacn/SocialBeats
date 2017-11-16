const ProjectsModel = require('./models/ProjectsModel')

// metodos CRUD de acceso a la bbdd...

class OngData {
	listAllTheProjects(festival) {
		return ProjectsModel.find({}, function(err, libros){
		festivals.populate(projects,{path:"festivals"},
		function(err,projects){res.status(200).send(projects)})
		}).exec() // exec() devuelve una promise
	}
}

module.exports = OngData