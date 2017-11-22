require('dotenv').config()

const express =require('express')
const cors = require('cors')
const app = express()
//const ProjectsModel = require('./data/models/ProjectsModel')
const UsersData = new(require('./data/UsersData'))
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const OngModel= require('./data/models/OngModel')
const OngData = new(require('./data/OngData.js'))
const Festival= require('./data/models/FestivalsModel')
const FestivalsData = new(require('./data/FestivalsData.js'))
const userModel = require('./data/models/UsersModel')
const UserData = new(require('./data/UsersData.js'))
const Project =  new(require('./data/Projects.js'))

app.use(bodyParser.json())
app.use(cors())
mongoose.Promise = Promise
mongoose.connect('mongodb://lilith:10b579ba@ds251435.mlab.com:51435/dbsocialbeats',{useMongoClient:true})
.then (()=> console.log('conected'))
.catch (err=>console.log(err))

// ong/projects
// crear rou
// router.route('/ong')

app.get('/ong/:ongId', (req,res)=>{
		var  ongId = req.params.ongId
	OngData.listOneOng(ongId)
		.then(onginfo => {
			console.log(onginfo)
			res.status(200).json({
				status: 'OK',
		        message: 'ong listed successfully',
		        data: onginfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})
app.get('/festivals/:festivalName', (req,res)=>{
		  var festivalName = req.params.festivalName
	//ongData.listAllTheOng()
	console.log(req.params)
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	FestivalsData.listOneFestival(festivalName)
		.then(festinfo => {
			console.log(festinfo)
			res.status(200).json({
				status: 'OK',
		        message: 'festival listed successfully',
		        data: festinfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})
app.get('/festivals', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	FestivalsData.listAllFestivals()
		.then(festinfo => {
			console.log(festinfo)
			res.status(200).json({
				status: 'OK',
		        message: ' all festivals listed successfully',
		        data: festinfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})
app.get('/users', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	UsersData.listAllTheUsers()
		.then(userinfo => {
			console.log(userinfo)
			res.status(200).json({
				status: 'OK',
		        message: 'users listed successfully',
		        data: userinfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})

app.get('/ongs', (req,res)=>{
	OngData.listAllTheOng()
		.then(Onginfo => {
			console.log(Onginfo)
			res.status(200).json({
				status: 'OK',
		        message: 'ONgs listed successfully',
		        data: Onginfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})

app.post('/setong', (req,res) => {
    const {name,description,area,location,
    available_dates,contact_info} = req.body

    const ong = new OngModel({name,description,area,location,
    available_dates,contact_info})
ong.save()
	.then((data)=>res.send(data))
	.catch((data)=>res.send(data))

})

app.post('/setfestival', (req,res) => {
    const {name,dates,url,projectes} = req.body

    const festival = new Festival({name,dates,url,projectes})
festival.save()
	.then((data)=>res.send(data))
	.catch((data)=>res.send(data))

})

// app.post('/setuser', (req,res) => {
//     const {name,surname,username,password,nif, mail, collaborations } = req.body

//     const user = new UserModel({name,surname,username,password,nif, mail, collaborations})
// user.save()
// 	.then((dataUser)=>res.send(dataUser))
// 	.catch((dataUser)=>res.send(dataUser))

// })

app.post('/collaborations',(req,res)=>{
 const {userId,festivalxuser,ongxuser,datedayuser,datehoursuser} = req.body

 UserData.retrieveOneUser(userId)
 .then((user)=>{
 	console.log(user)
 	user.some(user._id ===userId)

 })
 .catch((err)=>{})


})



app.delete('/deleteong/:ongId', (req,res) =>{

	const ongId = req.params.ongId

	OngData.deleteOneOng(ongId)
            .then(ongdeleted => res.json({
                status: 'OK',
                message: 'Ong deleted successfully',
                data: ongdeleted
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
})

app.delete('/deletefestival/:festivalId', (req,res) =>{

	const festivalId = req.params.festivalId

	FestivalsData.deleteOneFestival(festivalId)
            .then(festivaldeleted => res.json({
                status: 'OK',
                message: 'Festival deleted successfully',
                data: festivaldeleted
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
})



app.listen(process.env.PORT, ()=> console.log(`express API is UP on port ${process.env.PORT}`))