const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    "name": String,
    "surname": String,
    "username": String,
    "password": String,
    "confirm_password":String,
    "dni": String,
    "mobile": String,
    "mail":String,
    "collaborations": [
	    {
	        "festival":String,
	        "project": String,
            "projectId":String,
	        "dateDay": String,
	        "dateHours": Number,
	        "status": String
	    }
    ]
})

// conecta tabla 'users' con nuestro modelo 'Users'
module.exports = mongoose.model('users', Users)