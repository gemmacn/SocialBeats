const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Projects = new Schema({
    "id": Number,
    "name": String,
    "description": String,
    "area": String,
    "location": String,
    "collaboration_hours": [Number],
    "available_dates": [Date],
    "contact_info": String
})

// conecta tabla 'projeccts' con nuestro modelo 'Projects'
module.exports = mongoose.model('projects', Projects)