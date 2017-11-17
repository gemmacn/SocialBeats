const mongoose= require('mongoose')
const Schema = mongoose.Schema
const OngModel = require('./OngModel')

const Festivals = new Schema({
	"name": String,
	"dates": String,
	"url": String,
	"projectes":[{
		type: Schema.ObjectId, ref: "OngModel"
	}]
})

// conecta tabla 'festivals' con nuestro modelo 'Festivals'
module.exports = mongoose.model('festivals', Festivals)