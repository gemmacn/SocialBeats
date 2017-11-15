const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Festivals = new Schema({
   	"id": Number,
	"name": String,
	"dates": String,
	"url": String
})

// conecta tabla 'festivals' con nuestro modelo 'Festivals'
module.exports = mongoose.model('festivals', Festivals)