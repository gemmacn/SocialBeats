const mongoose= require('mongoose')
const Schema = mongoose.Schema
const ProjectsModel = require('./ProjectsModel')

const Festivals = new Schema({
   	"id": Number,
	"name": String,
	"dates": String,
	"url": String,
	"projectes":[{
		type: Schema.ObjectId, ref: "ProjectsModel"
	}]
})

// conecta tabla 'festivals' con nuestro modelo 'Festivals'
module.exports = mongoose.model('festivals', Festivals)