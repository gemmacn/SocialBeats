const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    "name": String,
    "surname": String,
    "username": String,
    "password": String,
    "nif": String,
    "mail":String,
    "collaborations": [
	    {
	        "festival":Number,
	        "project": Number,
	        "date": Date,
	        "hours": Number,
	        "status": String
	    }
    ]
})

// conecta tabla 'users' con nuestro modelo 'Users'
module.exports = mongoose.model('users', Users)