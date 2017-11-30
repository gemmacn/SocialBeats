const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
    "name": String,
    "surname": String,
    "username": String,
    "password": String,
    "dni": String,
    "mobile": String,
    "mail":String,
    "photo":String,
    "collaborations": [
	    {
	        "festival":String,// es important que a cualsevol lloc on he de utilizar aquest model els noms siguien exactament igual
	        "project": String,// i el tipo de dades també
            "projectId":String,
	        "dateDay": String,
	        "dateHours": Number,
	        "status": String
	    }
    ]
})

// conecta tabla 'users' con nuestro modelo 'Users'
module.exports = mongoose.model('users', Users)