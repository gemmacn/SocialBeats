const mongoose= require('mongoose')
const Schema = mongoose.Schema

const OngModel = new Schema({
    "name": String,
    "description": String,
    "area": String,
    "location": String,
    "collaboration_hours": [Number],
    "available_dates": [String],
    "contact_info": String
})

// conecta tabla 'projeccts' con nuestro modelo 'Projects'
module.exports = mongoose.model('OngModel', OngModel)