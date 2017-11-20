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

app.use(bodyParser.json())
app.use(cors())
mongoose.Promise = Promise
mongoose.connect('mongodb://liliththecoder:460Tomo:@ds251435.mlab.com:51435/dbsocialbeats',{useMongoClient:true})

// ong/projects
// crear router
// router.route('/ong')

app.get('/ong/:ongId', (req,res)=>{
		var  ongId = req.params.ongId
	OngData.listAllTheProjects(ongId)
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

app.post('/setong', (req,res) => {
    const {name,description,area,location,
    collaboration_hours,available_dates,contact_info} = req.body

    const ong = new OngModel({name,description,area,location,
    collaboration_hours,available_dates,contact_info})
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



app.listen(3000, ()=> console.log(`express API is UP on port 3000`))