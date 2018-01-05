require('dotenv').config()

const express =require('express')
const cors = require('cors')
const app = express()
//const ProjectsModel = require('./data/models/ProjectsModel')
const UsersData = new(require('./data/UsersData'))
const mongoose = require('mongoose')
const bodyParser= require('body-parser')

const ongData = new(require('./data/OngData.js'))
const festivalsData = new(require('./data/FestivalsData.js'))


app.use(bodyParser.json())
app.use(cors())//  para dar permisos entre dif servidores pq sin no te deja. allow acces algo asi
mongoose.Promise = Promise //
mongoose.connect('mongodb://lilith:10b579ba@ds251435.mlab.com:51435/dbsocialbeats',{useMongoClient:true})
.then (()=> console.log('conected'))
.catch (err=>console.log(err))

// ong/projects
// crear rou
// router.route('/ong')

app.get('/festivals/name/:festivalName', (req,res)=>{
		  const festivalName = req.params.festivalName

	festivalsData.retrieveFestivalByName(festivalName)
		.then(festinfo => {
			console.log(festinfo)

			res.status(200).json({
				status: 'OK',
		        message: 'festival retrieved by name successfully',
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

app.post('/festival/:festivalId/project/:projectId/collaborate', (req, res) => {
	const {festivalId, projectId} = req.params
	const  {userId,dateDay,dateHours} = req.body // destructuring de javascript
	console.log(req.body)
	UsersData.retrieveUserById(userId)
		.then(user => {
			for (let i = 0; i < user.collaborations.length; i++) {
				const collaboration = user.collaborations[i]

				if (collaboration.festival == festivalId) { //Pq collaboration.festival en la BD ja es l'ID del festival, estem a la resposta ara
					return res.json({
						status: 'KO',
						message: 'user already collaborates with this festival'
					})
				}
			}

			UsersData.subscribeUserToFestivalCollaboration(userId, festivalId, projectId, dateDay, dateHours)
				.then(() => {
					res.json({
						status: 'OK',
						message: 'user correctly suscribed to festival collaboration'
					})
				})
				.catch(err => {
					res.json({
						status: 'KO',
						message: err.message
					})
				})
		})
		.catch(err => {
					res.json({
						status: 'KO',
						message: err.message
					})
				})
})

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

app.get('/festivals', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	festivalsData.listAllFestivals()
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
app.get('/users/:userId', (req,res)=>{
	var  userId = req.params.userId
	UsersData.retrieveUserById(userId)
		.then(user => {
			console.log(user)
			res.status(200).json({
				status: 'OK',
		        message: 'users listed successfully',
		        data: user
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
UsersData.retrieveOneUser(userId)
 .then((user)=>{
 	console.log(user)
 	user.some(user._id ===userId)

 })
 .catch((err)=>{})


})
app.post('/setprofile',(req,res)=>{
	const{completedUser} =req.body
UsersData.setProfile(completedUser)
 .then(profile => res.json({
                status: 'OK',
                message: 'profile created successfully',
                data: profile
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
})

app.put('/users', (req,res)=>{
	//var  userId = req.params.userId
	const { logInInfo } =req.body// pillo el objecte general que es tota la info que arriba desde la logIn 
	const { username, password, collaborations } = logInInfo// desestructuro la info rebuda pel body
	UsersData.putlogInInfo(username, password, collaborations)
			.then(login =>{
				console.log(login, 'logiiiin')
				 res.json({
		                status: 'OK',
		                message: 'Logged  and updated festival successfully',
		                data: login
	            	})
	            })
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
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